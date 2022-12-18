import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { AuthService } from '../../../../core/service/auth/auth.service';
import { AdminService } from '../../../admin/_services/admin.service';
import { SettingsService } from '../../_services/settings.service';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.scss']
})
export class AddPlanComponent implements OnInit {

  submitted: boolean = false;
  id: string;
  isAddMode: boolean;
  isLoading$;
  at_bottom: boolean = true;
  isdisabled: boolean = false;
  clients: any;
  members: any;
  finalerror: any = [];
  user: any;
  fileList: any;
  image: any = "";
  @HostListener("window:scroll", [])
  total = 0;
  onScroll(): void {
    const triggerAt: number = 130;
    if (document.body.scrollHeight - (window.innerHeight + window.scrollY) <= triggerAt) {
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
    private settingsService : SettingsService,
    public authService: AuthService,
    private cd: ChangeDetectorRef
  ) { }

  

  ngOnInit(): void {
  
    this.initForm();
    this.isLoading$ = this.settingsService.isLoading$;
  }



  initForm() {
    this.adminform = this.fb.group({
      type: ['', [Validators.required]],
      tp_value :  ['', [Validators.required]],
      price : ['', [Validators.required]],
    })

    this.adminform.valueChanges.subscribe(() => {
      if(this.adminform.get('tp_value').value && this.adminform.get('price').value){
        this.total = this.adminform.get('tp_value').value * this.adminform.get('price').value;
      }else{
        this.total = 0;
      }
    })
   
  }

  //event call on form submission 
  save() {
    this.submitted = true;
    if (this.adminform.valid) {
      this.isdisabled = true;
      let newadmin = this.adminform.value;
      this.createadmin(newadmin);

    }
  }

  createadmin(formData) {
    this.settingsService.create(formData).subscribe((task: any) => {
      this.isdisabled = false;
      this.router.navigate(['/settings']);

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
