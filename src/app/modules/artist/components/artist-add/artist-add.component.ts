import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'app/core/models/user.model';
import { ArtistService } from 'app/modules/artist/_services/artist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-artist-add',
  templateUrl: './artist-add.component.html',
  styleUrls: ['./artist-add.component.scss', '../../../../../assets/sass/libs/select.scss']
})
export class ArtistAddComponent implements OnInit {

  submitted: boolean = false;
  isLoading$;
  isdisabled: boolean = false;
  finalerror: any = [];
  user: UserModel;
  artistform: FormGroup;
  errors = [];
  artists: any;


  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private artistservice: ArtistService,
    private cd: ChangeDetectorRef
  ) { }



  ngOnInit(): void {
    this.fetchallartist();
    this.initForm();
    this.isLoading$ = this.artistservice.isLoading$;
  }


  fetchallartist() {
    this.artistservice.getallartist().subscribe((data: any) => {

      this.cd.markForCheck();
      if (data.result) {
        var result = data.result.map(function (el) {
          var o = Object.assign({}, el);
          o.id = el._id;
          o.name = el.name;
          return o;
        })
        this.artists = result;

      }
    });
  }


  initForm() {
    this.artistform = this.fb.group({
      artists: ['', [Validators.required]],
      status: ['1', [Validators.required]]
    })
  }

  //event call on form submission 
  save() {
    this.submitted = true;
    if (this.artistform.valid) {
      this.isdisabled = true;
      let newartist = this.artistform.value;

      let finalart = [];
      newartist.artists.map((el) => {
        const art = this.artists.find((artist) => {
          return artist.id == el;
        })

        finalart.push({
          id: el,
          name: art.name
        })
      })

      const artist = { 'artists': finalart, 'status': newartist.status }
      this.createartist(artist);

    }
  }

  createartist(formData) {
    this.artistservice.create(formData).subscribe((task: any) => {
      this.isdisabled = false;
      this.router.navigate(['/artists']);

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
