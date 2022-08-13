import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/core/service/auth/auth.service';
import { CommonService } from 'app/core/service/common/common.service';
import { ChannelService } from 'app/modules/channels/_services/channel.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import swal from 'sweetalert2';
import { OrganizationService } from '../../_services/organization.service';
import { PlanService } from '../../_services/plan.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  id: string;
  organization: any;
  defaultImage = 'assets/mindset/loader.gif';
  plans: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonservice: CommonService,
    private orgService: OrganizationService,
    public authService: AuthService,
    private cd: ChangeDetectorRef,
    private planService: PlanService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((paramsid) => {
      this.id = paramsid.id;
    });

    this.orgService
      .getById(this.id)
      .pipe(first())
      .subscribe((resp: any) => {
        const { data, message } = resp;
        this.organization = data;
      });

    this.getPlans();
  }

  getPlans() {
    this.planService.getPlans().subscribe(
      (resp: any) => {
        const { data, message } = resp;
        this.plans = data;
        this.cd.markForCheck();
      },
      (err) => {}
    );
  }

  getPlanName(id) {
    const plan = this.plans.find((plan) => plan.id == id);
    return plan?.name;
  }

  countLocationParameters() {
    let broadcastCount, numberCount, fanCount, clubCount;
    broadcastCount = numberCount = fanCount = clubCount = 0;
    this.organization.locations.forEach((loc) => {
      broadcastCount += loc.broadcasts_count;
      numberCount += loc.numbers_count;
      fanCount += loc.fans_count;
      clubCount += loc.clubs_count;
    });
    this.organization.broadcastCount = broadcastCount;
    this.organization.numberCount = numberCount;
    this.organization.fanCount = fanCount;
    this.organization.clubCount = clubCount;
  }
}
