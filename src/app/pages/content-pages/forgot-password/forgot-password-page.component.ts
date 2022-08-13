import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/core/service/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Location, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})

export class ForgotPasswordPageComponent {

  forgotpassword: FormGroup;
  forgotpasswordFormSubmitted = false;
  isforgotpasswordFailed = false;
  private unsubscribe: Subscription[] = [];
  hasError: boolean;
  errMessage: any;
  isLoading$: Observable<boolean>;
  finalerror: any = [];
  finalsuccess: any = [];
  
  @ViewChild('f') forogtPasswordForm: NgForm;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.forgotpassword = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      token : ['', [Validators.required]]
    });
    
  }
  constructor(private router: Router,
    private location: Location, 
    private locationStrategy: LocationStrategy,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService,
    public toastr: ToastrService,
    private cd: ChangeDetectorRef) {
    this.isLoading$ = this.authService.isLoading$;
    
  }



  
  get lf() {
    return this.forgotpassword.controls;
  }

  onSubmit() {
    this.forgotpasswordFormSubmitted = true;
    if (this.forgotpassword.invalid) {
      return;
    }
  
    const loginSubscr = this.authService
      .forgotpassword({ email: this.lf.email.value, url :  location.origin+'/reset-password/' })
      .subscribe(
        data => {
          this.forgotpasswordFormSubmitted = false;
          this.finalerror = [];
          this.finalsuccess.push(data.message)
          this.forgotpassword.reset();
        },
        err => {
         
          this.finalerror = [];
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
          this.cd.markForCheck();
        });
    this.unsubscribe.push(loginSubscr);

  }
}
