import { formatDate } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelService } from 'app/modules/channels/_services/channel.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth/auth.service';
import { CommonService } from '../service/common/common.service';

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.scss']
})
export class GoogleAuthComponent implements OnInit {

  code: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonservice: CommonService,
    private channelservice: ChannelService,
    private authService: AuthService,
    public toastr: ToastrService
  ) { }


  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if (params.code) {

          this.commonservice.getAccessToken(params.code, location.origin).subscribe((response: any) => {
            const tokendata = response.result;
            const access_token = tokendata.access_token;
            const refresh_token = tokendata.refresh_token;
            if (params.state) {
              if(params.state.includes("allow_")){
                const channel_id = params.state.replace("allow_","");
                this.commonservice.accesstoken(channel_id,{access_token,refresh_token,status:1}).subscribe((chenaldata: any) => {
                  console.log(chenaldata);
                  
                  return this.router.navigate(['channels/view/'+channel_id]);
                });
              }else{
                const loginuserdata = this.authService.currentUserValue;
               
                const channel_id = params.state;
                if (access_token && channel_id) {
                  this.commonservice.verifychennal({ channel_id, access_token }).subscribe((chenaldata: any) => {
                    if (chenaldata.result) {
                      const channel_title = chenaldata.result.title;
                      const channel_description = chenaldata.result.description;
                      const channel_start_date = chenaldata.result.date ? formatDate(chenaldata.result.date, 'yyyy-MM-dd', 'en-US') : '';
  
                      const channeladd = {
                        icon_type: '1',
                        channel_icon_url: chenaldata.result.icon,
                        creator: loginuserdata._id,
                        channel_title,
                        channel_description,
                        channel_start_date,
                        channel_id,
                        access_token,
                        refresh_token,
                        status: '1'
  
  
                      }
  
                      this.channelservice.create(channeladd).subscribe((task: any) => {
                        this.toastr.success(`Your Channel : ${channel_title} has been added successfully.`, "Success");
                        this.router.navigate(['step-3']);
                      }, err => {
                        this.toastr.error(err.error.message, 'Error!');
                        this.router.navigate(['step-2']);
                      })
                      return false;
  
                    }
  
  
                  }, err => {
                    this.toastr.error('Invalid Channel Id', 'Error!');
                    this.router.navigate(['step-2']);
                  })
                }
                return false;
              }
            }

            localStorage.setItem('access_token', tokendata.access_token);
            localStorage.setItem('refresh_token', tokendata.refresh_token);

            this.router.navigate(['/channels/add-new']);

          });
        } else {
          this.router.navigate(['/dashboard']);
        }

      }
      );
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
