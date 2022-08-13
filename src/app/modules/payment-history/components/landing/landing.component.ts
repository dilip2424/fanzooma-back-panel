import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ChangeDetectorRef,
  Input,
  Renderer2,
  ElementRef,
} from '@angular/core';

import { ColumnMode } from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonService } from 'app/core/service/common/common.service';
import * as chartsData from '../../../../shared/data/chartjs';
import { DashboardService } from 'app/modules/dashboard/_services/dashboard.service';
import * as moment from 'moment';
import { AuthService } from 'app/core/service/auth/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [
    './landing.component.scss',
    '../../../../../assets/sass/libs/select.scss',
    '../../../../../assets/sass/libs/datatables.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class LandingComponent implements OnInit {
  isOpen = false;
  @ViewChild('customizer') customizer: ElementRef;

  //paginatin start
  public page: number = 1;
  public count: any;
  public limit: number = 10;
  public searchTerm = '';
  public sortByRightsHolderEarning;
  public sortByMindsetEarning = '';
  public sortByCreatorEarning = '';
  public sortByChannelOwedEarning = '';
  public sortByUserName = '';
  public sortByTotalEarning = '1';
  public offset = 0;
  public currentdocsize = 0;
  public order = '-1';
  public rows: Array<any> = [];
  public graphData: Array<any> = [];
  public channels: Array<any> = [];
  public creators: Array<any> = [];
  public right_holders: Array<any> = [];
  loading = false;
  public ColumnMode = ColumnMode;
  //paginatin start

  //spinner loading...
  isLoadingtable$;
  filterGroup: FormGroup;
  private subscriptions: Subscription[] = [];

  // lineChart
  public lineChartDataForRoyalties: Array<any> = [];
  public lineChartLabelsForRoyalties: Array<any> = [];
  public lineChartOptionsForRoyalties =
    chartsData.lineChartOptionsForPaymentHistory;
  public lineChartColorsForRoyalties = chartsData.lineChartColorsForRoyalties;
  public lineChartLegend = chartsData.lineChartLegend;
  public lineChartType = chartsData.lineChartType;
  public accountdata: any;
  public role: string;

  my_messages = {
    emptyMessage: 'Loading...',
    totalMessage: 'Months',
  };

  public columns = [
    { name: 'Speaker', prop: 'artist' },
    { name: 'Total Revenue', prop: 'total_revenue' },
    { name: 'Channel Amount Owed', prop: 'channel_amount_owed' },
    { name: 'Speaker Share', prop: 'artist_share' },
    { name: 'Mindset Share', prop: 'mindset_share' },
    { name: 'Channel Share', prop: 'channel_share' },
  ];
  public select_month: any;

  public filters = <any>{
    startDate: '',
    endDate: '',
  };

  public startDateformonth: any = {
    startDate: moment().subtract(12, 'month').startOf('month'),
    endDate: moment().subtract(1, 'month').endOf('month'),
  };

  daterangefilter = this.startDateformonth;
  alwaysShowCalendars: boolean;
  ranges: any = {
    'Last 1 Month': [
      moment().subtract(1, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month'),
    ],
    'Last 3 Month': [
      moment().subtract(3, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month'),
    ],
    'Last 6 Month': [
      moment().subtract(6, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month'),
    ],
    'Last 12 Month': [
      moment().subtract(12, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month'),
    ],
  };
  invalidDates: moment.Moment[] = [
    moment().add(2, 'days'),
    moment().add(3, 'days'),
    moment().add(5, 'days'),
  ];

  isInvalidDate = (m: moment.Moment) => {
    return this.invalidDates.some((d) => d.isSame(m, 'day'));
  };

  /**
   * Constructor
   *
   * @param {HttpClient} http
   */
  constructor(
    private renderer: Renderer2,
    private http: HttpClient,
    // private royaltiesservice: RoyaltiesService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private commonservice: CommonService,
    private authService: AuthService,
    private dashboardservice: DashboardService
  ) {
    // this.isLoadingtable$ = this.royaltiesservice.isLoadingtable$;
  }

  /**
   * On init
   */
  ngOnInit() {
    this.role = this.authService.currentusertype();
    // Initially load first page
    this.filterForm();
    this.getadminlist();
    this.getchannellist();
    this.getcreatorslist();
    this.getrightholderslist();
  }

  public getByDate(event) {
    if (event.startDate && event.endDate) {
      this.filters['startDate'] = moment(event.startDate._d).format(
        'YYYY-MM-DD'
      );
      this.filters['endDate'] = moment(event.endDate._d).format('YYYY-MM-DD');
    } else {
      this.filters['startDate'] = '';
      this.filters['endDate'] = '';
    }
    this.getadminlist();
  }

  getchannellist() {
    this.commonservice.getallchannel({ search: '' }).subscribe(
      (data: any) => {
        if (data.result) {
          this.channels = data.result;
        }
        this.cd.markForCheck();
      },
      (err) => {}
    );
  }

  getcreatorslist() {
    this.commonservice.getall({ type: 3 }).subscribe(
      (data: any) => {
        if (data.result) {
          this.creators = data.result;
        }
        this.cd.markForCheck();
      },
      (err) => {}
    );
  }

  getrightholderslist() {
    this.commonservice.getall({ type: 4 }).subscribe(
      (data: any) => {
        if (data.result) {
          this.right_holders = data.result;
        }
        this.cd.markForCheck();
      },
      (err) => {}
    );
  }

  filterForm() {
    this.filterGroup = this.fb.group({
      role: [],
      right_holders: [],
      creator: [],
      channel: [],
    });
    this.subscriptions.push(
      this.filterGroup.controls.role.valueChanges.subscribe(() => {
        this.page = 1;
        this.offset = 0;
        this.getadminlist();
      })
    );
    this.subscriptions.push(
      this.filterGroup.controls.right_holders.valueChanges.subscribe(() => {
        this.page = 1;
        this.offset = 0;
        this.getadminlist();
      })
    );
    this.subscriptions.push(
      this.filterGroup.controls.creator.valueChanges.subscribe(() => {
        this.page = 1;
        this.offset = 0;
        this.getadminlist();
      })
    );
    this.subscriptions.push(
      this.filterGroup.controls.channel.valueChanges.subscribe(() => {
        this.page = 1;
        this.offset = 0;
        this.getadminlist();
      })
    );
  }
  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page = pageInfo.offset + 1;
    this.offset = pageInfo.offset;
    //this.limit = pageInfo.limit;

    this.getadminlist();
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
    this.sortByRightsHolderEarning =
      this.sortByMindsetEarning =
      this.sortByCreatorEarning =
      this.sortByChannelOwedEarning =
      this.sortByUserName =
      this.sortByTotalEarning =
        '';
    switch (prop) {
      case 'name':
        this.sortByRightsHolderEarning = '1';
        break;
      case 'mindset_earning':
        this.sortByMindsetEarning = '1';
        break;
      case 'phone':
        this.sortByCreatorEarning = '1';
        break;
      case 'channel_owed_earning':
        this.sortByChannelOwedEarning = '1';
        break;
      case 'total_earning':
        this.sortByTotalEarning = '1';
        break;
      case 'user_name':
        this.sortByUserName = '1';
        break;
      default:
        this.sortByTotalEarning = '1';
    }
    if (dir == 'asc') {
      this.order = '1';
    }
    if (dir == 'desc') {
      this.order = '-1';
    }
    this.getadminlist();
  }

  /**
   * Populate the table with new data based on the page number
   * Filter option
   */
  filterUpdate(event) {
    this.page = 1;
    this.offset = 0;
    const val = event.target.value.toLowerCase();
    // Whenever the filter changes, always go back to the first page
    this.searchTerm = val;
    this.getadminlist();
  }

  toggleCustomizer() {
    if (this.isOpen) {
      this.renderer.removeClass(this.customizer.nativeElement, 'open');
      this.isOpen = false;
    } else {
      this.renderer.addClass(this.customizer.nativeElement, 'open');
      this.isOpen = true;
    }
  }

  closeCustomizer() {
    this.renderer.removeClass(this.customizer.nativeElement, 'open');
    this.isOpen = false;
  }

  getadminlist() {
    const params = {
      limit: this.limit,
      page: this.page,
      ascDesc: this.order,
      sortByRightsHolderEarning: this.sortByChannelOwedEarning,
      sortByMindsetEarning: this.sortByMindsetEarning,
      sortByCreatorEarning: this.sortByCreatorEarning,
      sortByTotalEarning: this.sortByTotalEarning,
      sortByChannelOwedEarning: this.sortByChannelOwedEarning,
      sortByUserName: this.sortByUserName,
      startDate: this.filters['startDate'],
      endDate: this.filters['endDate'],
    };

    const creator = this.filterGroup.get('creator').value;
    if (creator) {
      params['creator'] = creator;
    }
    const channels = this.filterGroup.get('channel').value;
    if (channels) {
      params['channel'] = channels;
    }
    const right_holders = this.filterGroup.get('right_holders').value;
    if (right_holders) {
      params['right_holders'] = right_holders;
    }

    // this.royaltiesservice.getallPaymentDataGraph(params).subscribe(
    //   (data: any) => {
    //     if (data.result) {
    //       this.rows = data.result;
    //       this.count = this.rows.length;
    //       this.offset = data.result.page - 1;
    //       this.currentdocsize = this.rows.length;
    //       this.graphData = data.result;

    //       var rights_holder_earning_data = [];
    //       this.graphData.forEach((item) => {
    //         rights_holder_earning_data.push(
    //           item.rights_holder_earning.toFixed(2)
    //         );
    //       });
    //       var mindset_earning_data = [];
    //       this.graphData.forEach((item) => {
    //         mindset_earning_data.push(item.mindset_earning.toFixed(2));
    //       });
    //       var creator_earning_data = [];
    //       this.graphData.forEach((item) => {
    //         creator_earning_data.push(item.creator_earning.toFixed(2));
    //       });

    //       var DRM_earning_data = [];
    //       this.graphData.forEach((item) => {
    //         DRM_earning_data.push(
    //           parseFloat(item.rights_holder_earning.toFixed(2)) +
    //             parseFloat(item.mindset_earning.toFixed(2))
    //         );
    //       });

    //       var creator_earning_dates = [];
    //       this.graphData.forEach((item) => {
    //         creator_earning_dates.push(item.month);
    //       });

    //       if (this.role == "admin" || this.role == "staff") {
    //         var graph_data = [
    //           {
    //             data: rights_holder_earning_data,
    //             label: "Rights Holder Earnings",
    //           },
    //           { data: creator_earning_data, label: "Creator Earnings" },
    //           { data: mindset_earning_data, label: "Mindset Earnings" },
    //         ];
    //       }

    //       if (this.role == "creator") {
    //         var graph_data = [
    //           { data: creator_earning_data, label: "Creator Earnings" },
    //           { data: DRM_earning_data, label: "Fanzooma Royalty Sharing" },
    //         ];
    //       }

    //       if (this.role == "right_holder") {
    //         var graph_data = [
    //           { data: rights_holder_earning_data, label: "Your Earnings" },
    //         ];
    //       }

    //       this.lineChartDataForRoyalties = graph_data;
    //       this.lineChartLabelsForRoyalties = creator_earning_dates;

    //       // this.count = data.result;
    //       // this.offset = data.result.page - 1;
    //       // this.currentdocsize = this.rows.length;
    //       if (this.graphData.length == 0) {
    //         this.my_messages.emptyMessage = "No data found.";
    //       }
    //     }
    //     this.cd.markForCheck();
    //   },
    //   (err) => {}
    // );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }
}
