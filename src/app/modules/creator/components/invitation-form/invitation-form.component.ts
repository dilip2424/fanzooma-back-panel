import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreatorService } from '../../_services/creator.service';

@Component({
  selector: 'app-invitation-form',
  templateUrl: './invitation-form.component.html',
  styleUrls: ['./invitation-form.component.scss']
})
export class InvitationFormComponent implements OnInit {
  submitted: boolean = false;
  isLoading$;
  at_bottom: boolean = true;
  isdisabled: boolean = false;
  serverSideError: any = [];
  
  inviteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private creatorservice: CreatorService) {

  }

  ngOnInit(): void {
    this.initForm();
    this.isLoading$ = this.creatorservice.isLoading$;
  }

  initForm() {
    this.inviteForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  //event call on form submission 
  onSubmit() {
    this.submitted = true;
    if (this.inviteForm.valid) {
      this.isdisabled = true;
      this.creatorservice.sendInvitationLink({...this.inviteForm.value, url :  location.origin+'/invitation/'}).subscribe((response: any) => {
        this.isdisabled = false;
        this.router.navigate(['/creators']);
        this.toastr.success('Invitation link sent!', 'Success', {
          positionClass: 'toast-top-right'
        });
      }, err => {
        this.serverSideError = [];
        this.isdisabled = false;
        this.submitted = true;
        if (err.status === 422) {
          if (err.error.errors) {
            const receivederror = err.error.errors;
            for (var key in receivederror) {
              if (typeof receivederror[key] !== 'undefined') {
                this.serverSideError.push(key + ' : ' + receivederror[key].message)
              }
            }
          }
          this.toastr.error(err.error.message, 'Error', {
            positionClass: 'toast-top-right'
          });
        } else {
          this.serverSideError.push(err.error.message)
          this.toastr.error(err.error.message, 'Error', {
            positionClass: 'toast-top-right'
          });
        }
      });
    }
  }
}
