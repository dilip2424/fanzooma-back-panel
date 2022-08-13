import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ContactUsService } from "app/modules/contact-us/_services/contact-us.service";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";

@Component({
  selector: "app-add-contact-us",
  templateUrl: "./add-contact-us.component.html",
  styleUrls: ["./add-contact-us.component.scss"],
})
export class AddContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  isSubmitted = false;
  validationErrorFromServer = [];
  isLoading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private contactUsService: ContactUsService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.isLoading$ = this.contactUsService.isLoading$;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.contactUsForm = this.fb.group({
      subject: ["", [Validators.required]],
      message: ["", [Validators.required]],
    });
  }

  get isSubmitButtonDisabled() {
    return !this.contactUsForm.valid;
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.contactUsForm.valid) {
      const data = this.contactUsForm.value;
      this.contactUsService.addContactUs(data).subscribe(
        (response) => {
          this.router.navigate(["/contact-us"]);
        },
        (err) => {
          if (err.status === 422) {
            this.populateValidationArr(err.error.errors);
            this.toastr.error(err.error.message, "Error", {
              positionClass: "toast-top-right",
            });
          } else {
            this.validationErrorFromServer = [];
            this.validationErrorFromServer.push(err.error.message);
          }
        }
      );
    }
  }

  populateValidationArr = (errors) => {
    this.validationErrorFromServer = [];
    if (errors) {
      for (let key in errors) {
        if (typeof errors[key] !== "undefined") {
          this.validationErrorFromServer.push(
            key + " : " + errors[key].message
          );
        }
      }
    }
  };
}
