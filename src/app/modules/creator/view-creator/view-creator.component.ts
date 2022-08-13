import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/core/service/auth/auth.service';
import { CreatorService } from 'app/modules/creator/_services/creator.service';
import { first } from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-view-creator',
  templateUrl: './view-creator.component.html',
  styleUrls: ['./view-creator.component.scss']
})
export class ViewCreatorComponent implements OnInit {
  id: string;
  user: any;
  defaultImage = 'assets/mindset/loader.gif';
  role: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private creatorservice: CreatorService,
    public authservice: AuthService,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.role = this.authservice.currentusertype();
    this.route.params.subscribe((paramsid) => {

      this.id = paramsid.id;

    })
    if (this.router.url == "/creators/profile") {
      const user = this.authservice.currentUserValue;
      this.id = user._id;

    }

    this.router.url === '/login'
    this.creatorservice.getById(this.id)
      .pipe(first())
      .subscribe((x: any) => {

        this.cd.markForCheck();
        this.user = x.result;

      });


  }
  delete(id: number) {
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2F8BE6',
      cancelButtonColor: '#F55252',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-warning',
        cancelButton: 'btn btn-danger ml-1'
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.value) {
        this.creatorservice.delete(id).subscribe((data: any) => {
          swal.fire({
            icon: "success",
            title: 'Deleted!',
            text: 'Your creator has been deleted.',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          })
          this.router.navigate(['/creators']);
        })
      }
    });
  }

}
