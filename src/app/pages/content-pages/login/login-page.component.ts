import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';

import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/core/service/auth/auth.service';
import ServerErrors from 'app/core/shared/serverErrors';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  isLoginFailed = false;
  loginFormSubmitted = false;

  serverErrors = new ServerErrors();

  hasError: boolean;
  errMessage: any;
  isLoading$: Observable<boolean>;

  hide: boolean = true;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public toastr: ToastrService,
    private cdr: ChangeDetectorRef
  ) {
    this.isLoading$ = this.authService.isLoading$;
    if (this.authService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }
  }

  get lf() {
    return this.loginForm.controls;
  }

  // On submit button click
  onSubmit() {
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.serverErrors.resetErrors();
    const loginSubscr = this.authService
      .login({ email: this.lf.email.value, password: this.lf.password.value })
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['/dashboard']);
        },
        (err) => {
          const { errors, message } = err.error;
          this.serverErrors.errors = errors;
          this.isLoginFailed = true;
          this.toastr.error(message, 'Error!');
        }
      );
  }
}
