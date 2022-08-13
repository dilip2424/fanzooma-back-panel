import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'app/core/models/user.model';
import { AuthService } from 'app/core/service/auth/auth.service';
import { AdminService } from 'app/modules/admin/_services/admin.service';
import { Roles } from 'app/roles';
import { MustMatch } from 'app/shared/directives/must-match.validator';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: [
    './add-new.component.scss',
    '../../../../../assets/sass/libs/select.scss',
  ],
})
export class AddNewComponent implements OnInit {
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
  image: any = '';
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
  is_manual: boolean = true;
  adminform: FormGroup;
  errors = [];
  picturepicObj: any;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private adminservice: AdminService,
    public authService: AuthService,
    private cd: ChangeDetectorRef
  ) {}

  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirm_password').value;
    return pass === confirmPass ? null : { notSame: true };
  };

  ngOnInit(): void {
    this.route.params.subscribe((paramsid) => {
      this.id = paramsid.id;
    });
    this.isAddMode = !this.id;
    // password not required in edit mode
    const passwordValidators = [Validators.minLength(6)];
    if (this.isAddMode) {
      passwordValidators.push(Validators.required);
    }
    this.initForm();
    this.isLoading$ = this.adminservice.isLoading$;
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
    this.adminform = this.fb.group(
      {
        file_upload: [''],
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        phone: [''],
        password: [
          '',
          [
            Validators.minLength(6),
            this.isAddMode ? Validators.required : Validators.nullValidator,
          ],
        ],
        confirm_password: [
          '',
          this.isAddMode ? Validators.required : Validators.nullValidator,
        ],
        type: ['1'],
        status: ['1'],
      },
      { validator: this.checkPasswords }
    );

    if (!this.isAddMode) {
      this.adminservice
        .getById(this.id)
        .pipe(first())
        .subscribe((x: any) => {
          this.cd.markForCheck();
          this.user = x.result;
          this.user.type = String(this.user.type);
          this.user.status = String(this.user.status);
          this.picturepicObj = String(this.user.profile_picture);

          this.image = this.user.profile_picture.replace(/^.*[\\\/]/, '');
          return this.adminform.patchValue(this.user);
        });
    }
  }

  //event call on form submission
  save() {
    this.submitted = true;
    if (this.adminform.valid) {
      this.isdisabled = true;
      let newadmin = this.adminform.value;
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
        this.createadmin(formData);
      } else {
        this.updateadmin(formData);
      }
    }
  }

  createadmin(formData) {
    this.adminservice.create(formData).subscribe(
      (task: any) => {
        this.isdisabled = false;
        this.router.navigate(['/admins']);
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

  updateadmin(formData) {
    // this.adminservice.update(formData, this.id).subscribe((task: any) => {
    //   this.isdisabled = false;
    //   this.router.navigate(['/admins']);
    // }, err => {
    //   this.finalerror = [];
    //   this.isdisabled = false;
    //   this.submitted = true;
    //   if (err.status === 422) {
    //     if (err.error.errors) {
    //       const receivederror = err.error.errors;
    //       for (var key in receivederror) {
    //         if (typeof receivederror[key] !== 'undefined') {
    //           this.finalerror.push(key + ' : ' + receivederror[key].message)
    //         }
    //       }
    //     }
    //     this.toastr.error(err.error.message, 'Error', {
    //       positionClass: 'toast-top-right'
    //     });
    //   } else {
    //     this.finalerror.push(err.error.message)
    //   }
    // })
  }
}
