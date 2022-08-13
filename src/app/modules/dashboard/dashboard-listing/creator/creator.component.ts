import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { DashboardService } from '../../_services/dashboard.service';
import * as chartsData from '../../../../shared/data/chartjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { CommonService } from 'app/core/service/common/common.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-creator-listing',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss', '../../../../../assets/sass/libs/select.scss', '../../../../../assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreatorComponent implements OnInit {
  isLoadingtable$;
  dashboardListing: any;

  public count: any;
  public offset = 0;
  public currentdocsize = 0;
  public order = '-1';

  public startDate = "";
  public endDate = "";
  public channel = "";
  public page = 1;
  public limit = 10;
  public ascDesc = "1";
  public sortByComment = "";
  public sortByView = "";
  public sortByLike = "";
  public sortByDislike = "";
  public sortByTotalEarning = "";
  public sortByDrmRoyaltyShare = "";
  public sortByYourShare = "";
  public sortByVideoName = "";
  public sortByChannelName = "1";
  public graphData: Array<any> = [];
  public channels: Array<any> = [];
  public ColumnMode = ColumnMode;
  filterGroup: FormGroup;
  private subscriptions: Subscription[] = [];

  my_messages = {
    'emptyMessage': 'Loading...',
    'totalMessage': 'Items'
  };

  public areaChartData: Array<any> = [{ label: '' }];
  public areaChartLabels: Array<any> = [];
  public areaChartOptions = chartsData.areaChartOptions;
  public areaChartColors = chartsData.areaChartColors;
  public areaChartLegend = chartsData.areaChartLegend;
  public areaChartType = chartsData.areaChartType;

  selectedChannel = "";

  constructor(
    private dashboardservice: DashboardService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private commonservice: CommonService,
    private route: ActivatedRoute
  ) {
    this.isLoadingtable$ = this.dashboardservice.isLoadingtable$;
  }

  public select_month: any;

  public filters = <any>{
    "startDate": '',
    "endDate": '',
  };

  public startDateformonth: any = {
    startDate: moment().subtract(1, 'month').startOf('month'),
    endDate: moment().subtract(1, 'month').endOf('month')
  };

  daterangefilter = this.startDateformonth;
  alwaysShowCalendars: boolean;
  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 1 Week': [moment().subtract(6, 'days'), moment()],
    'Last 28 Days': [moment().subtract(27, 'days'), moment()],
    'Last 90 Days': [moment().subtract(89, 'days'), moment()],
    'Last 365 Days': [moment().subtract(364, 'days'), moment()],
    // 'This Month': [moment().startOf('month'), moment().endOf('month')],
    // 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }
  invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];

  isInvalidDate = (m: moment.Moment) => {
    return this.invalidDates.some(d => d.isSame(m, 'day'))
  }
  initDate = true;

  ngOnInit(): void {
    this.daterangefilter = {
      startDate: moment().subtract(27, 'days'),
      endDate: moment()
    };
    this.filterForm(null);

    this.channel = history.state.id;
    this.getDashboardList();

    this.getchannellist();
  }

  getchannellist() {
    this.commonservice.getallchannel({ search: "" }).subscribe((data: any) => {
      if (data.result) {
        this.channels = data.result;
        const channelId = history.state.id;
        this.filterForm(channelId);
      }
      this.cd.markForCheck();
    }, err => {

    })
  }

  public getByDate(event) {
    if (event.startDate && event.endDate) {
      this.filters['startDate'] = moment(event.startDate._d).format("YYYY-MM-DD");
      this.filters['endDate'] = moment(event.endDate._d).format("YYYY-MM-DD");
    } else {
      if (this.initDate) {
        this.filters['startDate'] = moment(this.daterangefilter.startDate).format('YYYY-MM-DD');
        this.filters['endDate'] = moment(this.daterangefilter.endDate).format('YYYY-MM-DD');
        this.initDate = false;
      } else {
        this.filters['startDate'] = this.filters['endDate'] = null;
      }

    }
    // if (event.startDate && event.endDate) {
    //     this.filters['startDate'] = moment(event.startDate._d).format("YYYY-MM-DD");
    //     this.filters['endDate'] = moment(event.endDate._d).format("YYYY-MM-DD");
    // } else {
    //     this.filters['startDate'] = "";
    //     this.filters['endDate'] = "";
    // }
    this.creatorgraph();
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page = pageInfo.offset + 1;
    this.offset = pageInfo.offset;
    //this.limit = pageInfo.limit;
    this.getDashboardList();
  }

  /**
   * Populate the table with new data based on the page number
   * Short event
   */
  onSort(event) {
    const sort = event.sorts[0];
    const prop = sort.prop;
    const dir = sort.dir;
    this.page = 1;
    this.offset = 0;

    this.sortByComment = this.sortByView = this.sortByLike = this.sortByDislike = this.sortByTotalEarning = this.sortByDrmRoyaltyShare = this.sortByYourShare = this.sortByVideoName = this.sortByChannelName = "";

    switch (prop) {
      case 'comment':
        this.sortByComment = "1"
        break;
      case 'view':
        this.sortByView = "1"
        break;
      case 'like':
        this.sortByLike = "1"
        break;
      case 'dislike':
        this.sortByDislike = "1"
        break;
      case 'total_earning':
        this.sortByTotalEarning = "1"
        break;
      case 'drm_royalty_share':
        this.sortByDrmRoyaltyShare = "1"
        break;
      case 'your_share':
        this.sortByYourShare = "1"
        break;
      case 'vedio_name':
        this.sortByVideoName = "1"
        break;
      case 'channel_name':
        this.sortByChannelName = "1"
        break;
      default:
        this.sortByChannelName = "1"
    }


    if (dir == 'asc') {
      this.ascDesc = "1";
    }
    if (dir == 'desc') {
      this.ascDesc = "-1";
    }
    this.getDashboardList();
  }

  getDashboardList() {
    const params = {
      "startDate": this.startDate,
      "endDate": this.endDate,
      "channel": this.channel,
      "page": this.page ?? 1,
      "limit": this.limit ?? 10,
      "ascDesc": this.ascDesc ?? 1,
      "sortByComment": this.sortByComment,
      "sortByView": this.sortByView,
      "sortByLike": this.sortByLike,
      "sortByDislike": this.sortByDislike,
      "sortByTotalEarning": this.sortByTotalEarning,
      "sortByDrmRoyaltyShare": this.sortByDrmRoyaltyShare,
      "sortByYourShare": this.sortByYourShare,
      "sortByVideoName": this.sortByVideoName,
      "sortByChannelName": this.sortByChannelName,
    };
    this.dashboardservice.getDashboardTableListing(params).subscribe((data: any) => {
      if (data.result) {
        this.dashboardListing = data.result.docs;
        this.count = data.result.totalDocs
        this.offset = data.result.page - 1;
        this.currentdocsize = this.dashboardListing.length;
        if (this.dashboardListing.length == 0) {
          this.my_messages.emptyMessage = "No data found."
        }
      }
    })
  }

  filterForm(channelId) {
    this.filterGroup = this.fb.group({
      channel: [channelId ?? null],
    });



    this.subscriptions.push(
      this.filterGroup.controls.channel.valueChanges.subscribe((value) => {
        this.channel = value;
        this.page = 1;
        this.offset = 0;
        this.creatorgraph();
        this.getDashboardList();
      }
      )
    );
  }

  creatorgraph() {
    const params = {
      startDate: this.filters['startDate'],
      endDate: this.filters['endDate'],
    };
    const channels = this.filterGroup.get('channel').value;
    if (channels) {
      params['channel'] = channels;
    }
    this.dashboardservice.getDashboardCreatorGraph(params).subscribe((data: any) => {
      if (data.result) {
        this.graphData = data.result;

        var creator_comments_data = [];
        this.graphData.forEach((item) => {
          creator_comments_data.push(item.comments.toFixed(2));
        });
        var creator_dislikes_data = [];
        this.graphData.forEach((item) => {
          creator_dislikes_data.push(item.dislikes.toFixed(2));
        });
        var creator_drm_royality_share_data = [];
        this.graphData.forEach((item) => {
          creator_drm_royality_share_data.push(item.drm_royality_share.toFixed(2));
        });
        var creator_likes_data = [];
        this.graphData.forEach((item) => {
          creator_likes_data.push(item.likes.toFixed(2));
        });
        var creator_total_earning_data = [];
        this.graphData.forEach((item) => {
          creator_total_earning_data.push(item.total_earning.toFixed(2));
        });
        var creator_views_data = [];
        this.graphData.forEach((item) => {
          creator_views_data.push(item.views.toFixed(2));
        });
        var creator_your_share_data = [];
        this.graphData.forEach((item) => {
          creator_your_share_data.push(item.your_share.toFixed(2));
        });

        var creator_earning_dates = [];
        this.graphData.forEach((item) => {
          creator_earning_dates.push(item._id);
        });

        var graph_data = [
          { data: creator_comments_data, label: 'Total Comments' },
          { data: creator_dislikes_data, label: 'Total DisLikes' },
          { data: creator_drm_royality_share_data, label: 'Total Royalty Share' },
          { data: creator_likes_data, label: 'Total Likes' },
          { data: creator_total_earning_data, label: 'Total Earnings' },
          { data: creator_views_data, label: 'Total Views' },
          { data: creator_your_share_data, label: 'Total Share' },
        ]

        this.areaChartData = graph_data;
        this.areaChartLabels = creator_earning_dates;

        if (this.graphData.length == 0) {
          this.my_messages.emptyMessage = "No data found."
        }
      }
    })
  }

}
