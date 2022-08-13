import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/core/service/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription, Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  resetFormSubmitted = false;
  isresetFailed = false;
  private unsubscribe: Subscription[] = [];
  hasError: boolean;
  errMessage: any;
  isLoading$: Observable<boolean>;
  finalerror: any = [];
  finalsuccess: any = [];
  token : string;
  pagehaserror : boolean = false;
  loading = true;

  ngOnInit() {
    
    this.route.params.subscribe((paramsid) => {
      this.token = paramsid.token;
    })

    this.checktokenisvalid();
    this.initForm();
    
  }

  checktokenisvalid(){
    this.authService
      .checktokenisvalid({ reset_password_code : this.token })
      .pipe(first())
      .subscribe(

        data => {
          this.pagehaserror = false;
          this.loading = false;
          this.cd.markForCheck();
        },
        err => {
          this.pagehaserror = true;
          this.loading = false;
          this.cd.markForCheck();
        });
  }
  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
      let pass = group.get('password').value;
      let confirmPass = group.get('confirm_password').value
      return pass === confirmPass ? null : { notSame: true }
  }

  initForm() {
    this.resetForm = this.fb.group({
      password: ['', [Validators.minLength(6), Validators.required]],
      confirm_password: ['',  Validators.required],
    },{ validator: this.checkPasswords });
  }


  constructor(private router: Router, private authService: AuthService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public toastr: ToastrService,
    private cd: ChangeDetectorRef) {
      this.isLoading$ = this.authService.isLoading$;
      if (this.authService.currentUserValue) { 
        this.router.navigate(['/dashboard']);
      }

  }

  get lf() {
    return this.resetForm.controls;
  }




  // On submit button click
  onSubmit() {
    this.resetFormSubmitted = true;
    if (this.resetForm.invalid) {
      return;
    }


    const loginSubscr = this.authService
      .resetpassword({ password: this.lf.password.value, confirm_password: this.lf.confirm_password.value,reset_password_code : this.token })
      .pipe(first())
      .subscribe(
        data => {
          this.resetFormSubmitted = false;
          this.finalerror = [];
          this.finalsuccess.push(data.message)
          this.resetForm.reset();
        },
        err => {
         
          this.finalerror = [];
          if (err.status === 422) {
            if (err.error.errors) {
              const receivederror = err.error.errors;
              for (var key in receivederror) {
                if (typeof receivederror[key] !== 'undefined') {
                  this.finalerror.push(receivederror[key].message)
                }
              }
            }
            this.toastr.error(err.error.message, 'Error', {
              positionClass: 'toast-top-right'
            });
          } else {
            this.finalerror.push(err.error.message)
          }
          this.cd.markForCheck();
        });
    this.unsubscribe.push(loginSubscr);

  }

}
