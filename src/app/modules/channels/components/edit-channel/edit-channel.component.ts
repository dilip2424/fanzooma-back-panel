import { formatDate } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelService } from 'app/modules/channels/_services/channel.service';
import { CommonService } from 'app/core/service/common/common.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { AuthService } from 'app/core/service/auth/auth.service';

@Component({
  selector: 'app-edit-channel',
  templateUrl: './edit-channel.component.html',
  styleUrls: ['./edit-channel.component.scss']
})
export class EditChannelComponent implements OnInit {

  submitted: boolean = false;
  at_bottom: boolean = true;
  picturepicObj: any;
  fileList: any;
  image: any = "";
  id: string;
  channelformsec: FormGroup;
  finalerror: any = [];
  isdisabled: boolean = false;
  public creators: Array<any> = [];
  iconurl: string;
  channel : any;
  isLoading$;
  public role : any;

  @HostListener("window:scroll", [])
  onScroll(): void {
    const triggerAt: number = 130;
    if (document.body.scrollHeight - (window.innerHeight + window.scrollY) <= triggerAt) {
      this.at_bottom = false;
    } else {
      this.at_bottom = true;
    }
  }
  constructor(private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private commonservice: CommonService,
    private channelservice: ChannelService,
    private authService : AuthService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.role = this.authService.currentusertype();
    this.route.params.subscribe((paramsid) => {
      this.id = paramsid.id;
    })
    this.initForm();
    this.getcreatorslist();
    this.isLoading$ = this.channelservice.isLoading$;
  }

  getcreatorslist() {
    const params = {
      "type": 3
    }
    this.commonservice.getall(params).subscribe((data: any) => {
      if (data.result) {
        this.creators = data.result;
      }
      this.cd.markForCheck();
    }, err => {

    })
  }
  initForm() {
    this.channelformsec = this.fb.group({
      creator: ['', [this.role == 'admin' ? Validators.required : Validators.nullValidator]],
      channel_title: ['', [Validators.required]],
      channel_description: [''],
      earning_reduction: [''],
      channel_start_date: [''],
      revenue_start_date: [''],
      contract_start_date: [''],
      contract_end_date: [''],
      channel_icon : [''],
      status: ['1'],
    })


    this.channelservice.getById(this.id)
      .pipe(first())
      .subscribe((x: any) => {
        this.cd.markForCheck();
      
        this.channel = x.result;
        this.channel.status = String(this.channel.status);
        this.picturepicObj = this.channel.channel_icon;
        this.iconurl = this.channel.channel_icon;
        this.channel.channel_icon = '';
        
        this.channel.channel_start_date = this.channel.channel_start_date ? formatDate(this.channel.channel_start_date, 'yyyy-MM-dd', 'en-US') : '';
        this.channel.revenue_start_date = this.channel.revenue_start_date ? formatDate(this.channel.revenue_start_date, 'yyyy-MM-dd', 'en-US') : '';
        this.channel.contract_start_date = this.channel.contract_start_date ? formatDate(this.channel.contract_start_date, 'yyyy-MM-dd', 'en-US') : '';
        this.channel.contract_end_date = this.channel.contract_end_date ? formatDate(this.channel.contract_end_date, 'yyyy-MM-dd', 'en-US') : '';
        this.channel.creator = this.channel.creatorData._id;
       
        return this.channelformsec.patchValue(this.channel);
        
      });

  }

  addImage(event: any) {
    this.fileList = "";
    this.image = "";
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

  get f() {
    return this.channelformsec.controls;
  }

  save() {
    this.submitted = true;
    if (this.channelformsec.valid) {

      const result = {}
      const formData = new FormData();
      Object.keys(this.f).forEach(key => {
        result[key] = this.f[key].value;
        formData.append(key, this.f[key].value);
      });
      if (this.fileList) {
        let file: File = this.fileList[0];
        formData.append('icon_type', '2');
        formData.append('channel_icon', file, file.name);
      } else {
        formData.append('icon_type', '1');
        formData.append('channel_icon_url', this.iconurl);
      }
      
      if(this.role == 'creator'){
        formData.append('creator', this.authService.currentUserValue._id);
      }

      this.createchannel(formData);
    }
  }

  createchannel(formData) {
    this.channelservice.update(formData,this.id).subscribe((task: any) => {
      this.isdisabled = false;
      
      this.router.navigate(['/channels']);
      this.finalerror = [];
    }, err => {
      this.finalerror = [];
      this.isdisabled = false;
      this.submitted = true;
      if (err.status === 422) {
        if (err.error.errors) {
          const receivederror = err.error.errors;
          for (var key in receivederror) {
            if (typeof receivederror[key] !== 'undefined') {
              this.finalerror.push(key + ' : ' + receivederror[key].message)
            }
          }
        }
        this.toastr.error(err.error.message, 'Error', {
          positionClass: 'toast-top-right'
        });
      } else {
        this.finalerror.push(err.error.message)
      }
    })
  }

}
