import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelService } from 'app/modules/channels/_services/channel.service';
import { CommonService } from 'app/core/service/common/common.service';
import { ToastrService } from 'ngx-toastr';
import { formatDate, Location } from '@angular/common';
import { environment } from 'environments/environment';
import { ComponentCanDeactivate } from 'app/core/service/guard/pending-changes.guard';
import { AuthService } from 'app/core/service/auth/auth.service';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.scss'],
})
export class AddChannelComponent implements OnInit, ComponentCanDeactivate {
  submitted: boolean = false;
  channelsubmitted: boolean = false;
  id: string;
  isLoading$;
  at_bottom: boolean = true;
  isdisabled: boolean = false;
  finalerror: any = [];
  fileList: any;
  image: any = '';
  channel: any;
  is_checked = 0;
  is_fetchedfromgoogle = 0;
  iconurl: string;
  isdatachanged: boolean = false;
  public creators: Array<any> = [];
  haserror = true;
  public role: any;
  isAllowAccessDisabled: any = true;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const triggerAt: number = 130;
    if (
      document.body.scrollHeight - (window.innerHeight + window.scrollY) <=
      triggerAt
    ) {
      this.at_bottom = false;
    } else {
      this.at_bottom = true;
    }
  }

  @HostListener('window:beforeunload')
  canDeactivate(): any {
    // insert logic to check if there are pending changes here;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away
    if (this.isdatachanged) {
      return false;
    } else {
      return true;
    }
  }

  is_manual: boolean = true;
  channelform: FormGroup;
  channelformsec: FormGroup;
  errors = [];
  picturepicObj: any;
  isLoadingtable$;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private channelservice: ChannelService,
    private commonservice: CommonService,
    private cd: ChangeDetectorRef,
    private location: Location,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.role = this.authService.currentusertype();
    this.route.params.subscribe((paramsid) => {
      this.id = paramsid.id;
    });
    this.initForm();
    this.channelvalue();
    this.initformsec();
    this.getcreatorslist();
    this.isLoading$ = this.channelservice.isLoading$;
    this.isLoadingtable$ = this.commonservice.isLoadingtable$;
  }

  privacyPolicyChbx(event) {
    this.isAllowAccessDisabled = !event.target.checked;
  }

  getcreatorslist() {
    const params = {
      type: 3,
    };
    this.commonservice.getall(params).subscribe(
      (data: any) => {
        if (data.result) {
          this.creators = data.result;
        }
        this.cd.markForCheck();
      },
      (err) => {}
    );
  }

  addImage(event: any) {
    this.fileList = '';
    this.image = '';
    this.fileList = event.target.files;
    if (this.fileList) {
      this.image = this.fileList['0'].name;
    }
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.cd.markForCheck();
        this.picturepicObj = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  initForm() {
    this.channelform = this.fb.group({
      channel_id: ['', [Validators.required]],
    });
    const access_token = localStorage.getItem('access_token');
    const refresh_token = localStorage.getItem('refresh_token');
    const channel_id = localStorage.getItem('channel_id');
    if (access_token && refresh_token && channel_id) {
      this.channelform.patchValue({ channel_id });
    }
  }

  initformsec() {
    this.channelformsec = this.fb.group({
      creator: [
        '',
        [this.role == 'admin' ? Validators.required : Validators.nullValidator],
      ],
      channel_title: ['', [Validators.required]],
      channel_description: [''],
      earning_reduction: [''],

      channel_start_date: [''],
      revenue_start_date: [''],
      contract_start_date: [''],
      contract_end_date: [''],
      status: ['1'],
    });
    this.picturepicObj = '';
    const chenaldata = localStorage.getItem('chenaldata');
    if (chenaldata) {
      const chenalf = JSON.parse(chenaldata);
      const channel_title = chenalf.title;
      const channel_description = chenalf.description;
      const channel_start_date = chenalf.date
        ? formatDate(chenalf.date, 'yyyy-MM-dd', 'en-US')
        : '';
      this.picturepicObj = chenalf.icon;
      this.iconurl = chenalf.icon;
      this.channelformsec.patchValue({
        channel_title,
        channel_description,
        channel_start_date,
      });
    }
  }

  channelvalue() {
    const access_token = localStorage.getItem('access_token');
    const channel_id = this.channelform.get('channel_id').value;
    if (access_token && channel_id) {
      this.commonservice.verifychennal({ channel_id, access_token }).subscribe(
        (chenaldata: any) => {
          this.cd.markForCheck();
          this.isdisabled = false;
          localStorage.setItem('channel_id', channel_id);
          localStorage.setItem('chenaldata', JSON.stringify(chenaldata.result));
          this.haserror = false;
          this.isdatachanged = true;
          this.is_checked = 1;
          this.is_fetchedfromgoogle = 1;
          this.initformsec();
          this.finalerror = [];
        },
        (err) => {
          this.isdatachanged = false;
          this.is_checked = 0;
          this.is_fetchedfromgoogle = 0;
          this.finalerror = [];
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('channel_id');
          localStorage.removeItem('chenaldata');
          localStorage.removeItem('access_token');
          this.haserror = true;
          this.isdatachanged = false;
          this.initformsec();
          this.isdisabled = false;
          this.channelsubmitted = false;
          if (err.status === 422) {
            if (err.error.errors) {
              const receivederror = err.error.errors;
              for (var key in receivederror) {
                if (typeof receivederror[key] !== 'undefined') {
                  this.finalerror.push(
                    key + ' : ' + receivederror[key].message
                  );
                }
              }
            }
            this.toastr.error(err.error.message, 'Error', {
              positionClass: 'toast-top-right',
            });
          } else {
            this.finalerror.push(err.error.message);
          }
        }
      );
    }
  }

  //event call on form submission
  save(type = 1) {
    this.channelsubmitted = true;
    if (this.channelform.valid) {
      const channel_id = this.channelform.get('channel_id').value;
      localStorage.setItem('channel_id', channel_id);
      if (type == 1) {
        this.commonservice.getGoogleAuth(location.origin).subscribe(
          (response: any) => {
            window.location.href = response.result;
            // window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${this.googleauth.client_id}&scope=https://www.googleapis.com/auth/yt-analytics-monetary.readonly https://www.googleapis.com/auth/youtube.readonly&response_type=code&access_type=offline&redirect_uri=${location.origin}`
          },
          (err) => {
            this.toastr.error(
              'Something went wrong with our servers!',
              'Error'
            );
          }
        );
      } else {
        const access_token = localStorage.getItem('access_token');
        if (access_token) {
          this.channelvalue();
        }
      }

      //const url =  `https://accounts.google.com/o/oauth2/auth?client_id=${this.googleauth.client_id}&scope=${this.googleauth.scope}&response_type=code&access_type=offline&redirect_uri=${location.origin}`;
    }
  }
  get f() {
    return this.channelform.controls;
  }
  get g() {
    return this.channelformsec.controls;
  }
  getFormValidationErrors() {
    Object.keys(this.channelformsec.controls).forEach((key) => {
      const controlErrors: ValidationErrors =
        this.channelformsec.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {});
      }
    });
  }
  submitchennal() {
    this.submitted = true;
    if (!this.haserror && this.channelform.valid && this.channelformsec.valid) {
      const result = {};
      const formData = new FormData();
      Object.keys(this.f).forEach((key) => {
        result[key] = this.f[key].value;
        formData.append(key, this.f[key].value);
      });
      Object.keys(this.g).forEach((key) => {
        result[key] = this.g[key].value;
        if (key != 'channel_icon') {
          formData.append(key, this.g[key].value);
        }
      });
      if (this.fileList) {
        let file: File = this.fileList[0];
        formData.append('icon_type', '2');
        formData.append('channel_icon', file, file.name);
      } else {
        formData.append('icon_type', '1');
        formData.append('channel_icon_url', this.iconurl);
      }
      const access_token = localStorage.getItem('access_token');
      const refresh_token = localStorage.getItem('refresh_token');

      if (this.role == 'creator') {
        formData.set('creator', this.authService.currentUserValue._id);
      }
      formData.append('access_token', access_token);
      formData.append('refresh_token', refresh_token);
      this.createchannel(formData);
    }
  }

  createchannel(formData) {
    this.channelservice.create(formData).subscribe(
      (task: any) => {
        this.isdisabled = false;
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('channel_id');
        localStorage.removeItem('chenaldata');
        localStorage.removeItem('access_token');
        this.isdatachanged = false;
        this.router.navigate(['/channels']);
        this.finalerror = [];
      },
      (err) => {
        this.finalerror = [];
        this.isdisabled = false;
        this.submitted = true;
        if (err.status === 422) {
          if (err.error.errors) {
            const receivederror = err.error.errors;
            for (var key in receivederror) {
              if (typeof receivederror[key] !== 'undefined') {
                this.finalerror.push(key + ' : ' + receivederror[key].message);
              }
            }
          }
          this.toastr.error(err.error.message, 'Error', {
            positionClass: 'toast-top-right',
          });
        } else {
          this.finalerror.push(err.error.message);
        }
      }
    );
  }

  updatechannel(formData) {
    this.channelservice.update(formData, this.id).subscribe(
      (task: any) => {
        this.isdisabled = false;
        this.router.navigate(['/channels']);
      },
      (err) => {
        this.finalerror = [];
        this.isdisabled = false;
        this.submitted = true;
        if (err.status === 422) {
          if (err.error.errors) {
            const receivederror = err.error.errors;
            for (var key in receivederror) {
              if (typeof receivederror[key] !== 'undefined') {
                this.finalerror.push(key + ' : ' + receivederror[key].message);
              }
            }
          }
          this.toastr.error(err.error.message, 'Error', {
            positionClass: 'toast-top-right',
          });
        } else {
          this.finalerror.push(err.error.message);
        }
      }
    );
  }
}
