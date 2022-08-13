import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'app/core/models/user.model';
import { CreatorService } from 'app/modules/creator/_services/creator.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-creator',
  templateUrl: './add-creator.component.html',
  styleUrls: ['./add-creator.component.scss']
})
export class AddCreatorComponent implements OnInit {

  submitted: boolean = false;
  id: string;
  isAddMode: boolean;
  isLoading$;
  at_bottom: boolean = true;
  isdisabled: boolean = false;
  clients: any;
  members: any;
  finalerror: any = [];
  user: UserModel;
  fileList: any;
  image: any = "";

  @HostListener("window:scroll", [])
  onScroll(): void {
    const triggerAt: number = 130;
    if (document.body.scrollHeight - (window.innerHeight + window.scrollY) <= triggerAt) {
      this.at_bottom = false;
    } else {
      this.at_bottom = true;
    }
  }
  is_manual: boolean = true;
  intialform: FormGroup;
  errors = [];
  picturepicObj: any;


  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private creatorservice: CreatorService,
    private cd: ChangeDetectorRef) {

  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirm_password').value
    return pass === confirmPass ? null : { notSame: true }
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


  ngOnInit(): void {
    this.route.params.subscribe((paramsid) => {
      this.id = paramsid.id;
    })


    this.isAddMode = !this.id;

    // password not required in edit mode
    const passwordValidators = [Validators.minLength(6)];
    if (this.isAddMode) {
      passwordValidators.push(Validators.required);
    }
    this.initForm();
    this.isLoading$ = this.creatorservice.isLoading$;
  }

  initForm() {
    this.intialform = this.fb.group({
      file_upload: [''],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      password: ['', [Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
      confirm_password: ['', this.isAddMode ? Validators.required : Validators.nullValidator],
      status: ["1"]
    }, { validator: this.checkPasswords })

    if (!this.isAddMode) {
      this.creatorservice.getById(this.id)
        .pipe(first())
        .subscribe((x: any) => {
          this.cd.markForCheck();
          this.user = x.result;
          this.user.type = String(this.user.type);
          this.user.status = String(this.user.status);
          this.picturepicObj = String(this.user.profile_picture);
          this.image = this.user.profile_picture.replace(/^.*[\\\/]/, '')
          return this.intialform.patchValue(this.user)
        });
    }
  }

  //event call on form submission 
  save() {
    this.submitted = true;
    if (this.intialform.valid) {
      this.isdisabled = true;
      let newadmin = this.intialform.value;
      let formData: FormData = new FormData();
      if (this.fileList) {
        let file: File = this.fileList[0];
        formData.append('profile_picture', file, file.name);
      }
      formData.append('name', newadmin.name);
      formData.append('email', newadmin.email);
      formData.append('phone', newadmin.phone);
      formData.append('password', newadmin.password);
      formData.append('confirm_password', newadmin.confirm_password);
      formData.append('type', newadmin.type);
      formData.append('status', newadmin.status);

      if (this.isAddMode) {
        this.createcreator(formData);
      } else {
        this.updatecreator(formData);

      }
    }
  }


  createcreator(formData) {
    this.creatorservice.create(formData).subscribe((task: any) => {
      this.isdisabled = false;
      this.router.navigate(['/creators']);
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
        this.toastr.error(err.error.message, 'Error', {
          positionClass: 'toast-top-right'
        });
      }
    })
  }

  updatecreator(formData) {
    this.creatorservice.update(formData, this.id).subscribe((task: any) => {
      this.isdisabled = false;
      this.router.navigate(['/creators']);

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
        this.toastr.error(err.error.message, 'Error', {
          positionClass: 'toast-top-right'
        });
      }
    })

  }


}
