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
import { AdminService } from 'app/modules/admin/_services/admin.service';
import { AuthService } from 'app/core/service/auth/auth.service';
import { MustMatch } from 'app/shared/directives/must-match.validator';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import ServerErrors from 'app/core/shared/serverErrors';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: [
    './update-profile.component.scss',
    '../../../../assets/sass/libs/select.scss',
  ],
})
export class UpdateProfileComponent implements OnInit {
  submitted: boolean = false;
  isLoading$;

  profileForm: FormGroup;
  passwordForm: FormGroup;

  isProfileFormSubmitted = false;
  isPasswordFormSubmitted = false;

  profileErrors = new ServerErrors();
  passwordErrors = new ServerErrors();

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private adminservice: AdminService,
    public authserive: AuthService
  ) {}

  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('new_password').value;
    let confirmPass = group.get('confirm_password').value;
    return pass === confirmPass ? null : { notSame: true };
  };

  ngOnInit(): void {
    this.initForm();
    this.isLoading$ = this.adminservice.isLoading$;

    const user = this.authserive.currentUserValue;
    this.profileForm.patchValue({
      name: user.name,
      email: user.email,
    });
  }

  initForm() {
    this.profileForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      email: [''],
    });

    this.passwordForm = this.fb.group(
      {
        password: ['', [Validators.minLength(6)]],
        new_password: ['', [Validators.minLength(6)]],
        confirm_password: [''],
      },
      { validator: this.checkPasswords }
    );
  }

  updateBasicProfile() {
    this.isProfileFormSubmitted = true;
    if (this.profileForm.valid) {
      this.adminservice.updateBasicProfile(this.profileForm.value).subscribe(
        (resp: any) => {
          const { data, message } = resp;
          this.toastr.success(message, 'Success', {
            positionClass: 'toast-top-right',
          });
          location.reload();
        },
        (err) => {
          const { errors, message } = err.error;
          this.profileErrors = errors;
          this.toastr.error(message, 'Error', {
            positionClass: 'toast-top-right',
          });
        }
      );
    }
  }

  updatePassword() {
    this.isPasswordFormSubmitted = true;
    if (this.passwordForm.valid) {
      this.adminservice.updatePassword(this.passwordForm.value).subscribe(
        (resp: any) => {
          const { data, message } = resp;
          this.toastr.success(message, 'Success', {
            positionClass: 'toast-top-right',
          });
          location.reload();
        },
        (err) => {
          const { errors, message } = err.error;
          this.passwordErrors.errors = errors;
          this.toastr.error(message, 'Error', {
            positionClass: 'toast-top-right',
          });
        }
      );
    }
  }
}
