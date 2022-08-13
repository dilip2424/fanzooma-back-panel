import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/core/service/auth/auth.service';
import { CommonService } from 'app/core/service/common/common.service';
import { ChannelService } from 'app/modules/channels/_services/channel.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-view-channel',
  templateUrl: './view-channel.component.html',
  styleUrls: ['./view-channel.component.scss']
})
export class ViewChannelComponent implements OnInit {
  id: string;
  channel: any;
  public role: any;
  isLoadingDelete;
  defaultImage = 'assets/mindset/loader.gif';
  constructor(private route: ActivatedRoute,
    private router: Router,
    private commonservice: CommonService,
    private channelservice: ChannelService,
    public authService: AuthService,
    private cd: ChangeDetectorRef,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.role = this.authService.currentusertype();
    this.isLoadingDelete = this.channelservice.isLoadingDelete$;
    this.route.params.subscribe((paramsid) => {
      this.id = paramsid.id;
    })

    this.channelservice.getById(this.id)
      .pipe(first())
      .subscribe((x: any) => {

        this.cd.markForCheck();
        this.channel = x.result;

      });

  }

  getcode(){
    this.commonservice.getGoogleAuth(location.origin,'allow_'+this.channel._id).subscribe((response: any) => {
      window.location.href = response.result;
      // window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${this.googleauth.client_id}&scope=https://www.googleapis.com/auth/yt-analytics-monetary.readonly https://www.googleapis.com/auth/youtube.readonly&response_type=code&access_type=offline&redirect_uri=${location.origin}`
    }, err => {
      this.toastr.error("Something went wrong with our servers!", "Error")
    })
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

        this.channelservice.delete(id).subscribe((data: any) => {
          this.router.navigate(['/channels']);
          swal.fire({
            icon: "success",
            title: 'Deleted!',
            text: 'Your Channel has been deleted.',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          })
        }, err => {
          this.toastr.error(err.error.message, 'Error', {
            positionClass: 'toast-top-right'
          });
        })
      }
    });
  }
}

