import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "app/core/service/auth/auth.service";
import { CommonService } from "app/core/service/common/common.service";
import { DashboardService } from "app/modules/dashboard/_services/dashboard.service";
import * as moment from "moment";
import { Subscription } from "rxjs/internal/Subscription";
import * as chartsData from "../../shared/data/chartjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: [
    "./dashboard.component.scss",
    "../../../assets/sass/pages/page-users.scss",
    "../../../assets/sass/libs/select.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit, OnDestroy {
  // lineChart
  public lineChartDataForRoyalties: Array<any> = [{ label: "" }];
  public lineChartLabelsForRoyalties: Array<any> = [];
  public lineChartOptionsForRoyalties =
    chartsData.lineChartOptionsForAccChannel;
  public lineChartOptionsForAnalyticsChart =
    chartsData.lineChartOptionsForAnalyticsChart;
  public lineChartColorsForRoyalties = chartsData.lineChartColorsForAccChannel;
  public lineChartLegend = chartsData.lineChartLegend;
  public lineChartType = chartsData.lineChartType;

  public lineChartDataForContent: Array<any> = [{ label: "" }];
  public lineChartDataForAll: Array<any> = [{ label: "" }];
  public lineChartDataForAnalysis: Array<any> = [{ label: "" }];

  public lineChartLabelsForContent: Array<any> = [];
  public lineChartLabelsForAll: Array<any> = [];
  public lineChartLabelsForAnalysis: Array<any> = [];
  public lineChartColorsForContent = chartsData.lineChartColorsForContent;
  public lineChartColorsForAll = chartsData.lineChartColorsForAll;
  public lineChartColorsForAnalysis = chartsData.lineChartColorsForAnalysis;
  private subscriptions: Subscription[] = [];

  public accountdata: any;
  public contentdata: any;
  public revenuedata: any;

  public rows: Array<any> = [];
  public graphData: any;
  public graphDataContent: any;
  public graphDataRevenue: any;
  public graphDataAnalysis: any;
  public channels: Array<any> = [];
  public creators: Array<any> = [];
  public right_holders: Array<any> = [];
  public filter_chart_data_var: string;
  public currenttab: string;
  isLoadingtable$;
  filterGroup: FormGroup;

  // ngbNav's active parameter
  activeTab = 1;

  public filters = <any>{
    startDate: "",
    endDate: "",
  };

  public startDateformonth: any = {
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  };
  daterangefilter: any = {};
  alwaysShowCalendars: boolean;
  ranges: any = {
    Today: [moment(), moment()],
    "Last 1 Week": [moment().subtract(6, "days"), moment()],
    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Last 28 Days": [moment().subtract(27, "days"), moment()],
    "Last 90 Days": [moment().subtract(89, "days"), moment()],
    "Last 365 Days": [moment().subtract(364, "days"), moment()],
    // 'This Month': [moment().startOf('month'), moment().endOf('month')],
    // 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  };
  invalidDates: moment.Moment[] = [
    moment().add(2, "days"),
    moment().add(3, "days"),
    moment().add(5, "days"),
  ];

  isInvalidDate = (m: moment.Moment) => {
    return this.invalidDates.some((d) => d.isSame(m, "day"));
  };
  initDate = true;
  @ViewChild("dateInput") dateInput: ElementRef;

  constructor(
    private dashboardservice: DashboardService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private commonService: CommonService,
    public authService: AuthService
  ) {
    this.isLoadingtable$ = this.dashboardservice.isLoadingtable$;
    this.alwaysShowCalendars = true;
  }

  ngOnInit(): void {
    this.filter_chart_data_var = "channel";
    this.currenttab = "account";
    this.filterForm(null);
    // this.daterangefilter = this.startDateformonth;
    this.initDateRangeFilter();

    if (history.state.isAnalyticsTab) {
      this.changetab("analysis");
      this.activeTab = 4;
    } else {
      // this.loaddata();
    }
  }

  private initDateRangeFilter() {
    this.daterangefilter.startDate = moment().subtract(27, "days");
    this.daterangefilter.endDate = moment();
  }

  getchannellist() {
    this.commonService.getallchannel({ search: "" }).subscribe(
      (data: any) => {
        if (data.result) {
          this.channels = data.result;
          const channelId = history.state.id;
          this.filterForm(channelId);
          this.getGraphdataAnalysis();
        }
        this.cd.markForCheck();
      },
      (err) => {}
    );
  }

  loaddata() {
    if (this.currenttab == "account") {
      this.getaccountcount();
    }
    if (this.currenttab == "content") {
      this.getcontentcount();
    }
    if (this.currenttab == "revenue") {
      this.getrevenuecount();
    }
    if (this.currenttab == "analysis") {
      // No need to call any count method as there are no cards
    }
    this.graphload();
  }

  graphload() {
    if (this.currenttab == "account") {
      this.getGraphdataAccount();
    }
    if (this.currenttab == "content") {
      this.getGraphdataContent();
    }
    if (this.currenttab == "revenue") {
      this.getGraphdataRevenue();
    }
    if (this.currenttab == "analysis") {
      this.getGraphdataAnalysis();
    }
  }

  reset_chart_data() {
    this.lineChartDataForRoyalties = [{ label: "" }];
    this.lineChartLabelsForRoyalties = [];
    this.lineChartDataForContent = [{ label: "" }];
    this.lineChartDataForAll = [{ label: "" }];
    this.lineChartDataForAnalysis = [{ label: "" }];
    this.lineChartLabelsForContent = [];
    this.lineChartLabelsForAll = [];
    this.lineChartLabelsForAnalysis = [];
  }

  changetab(tabtype) {
    this.initDate = true;
    this.reset_chart_data();
    if (tabtype == "account") {
      this.filter_chart_data_var = "channel";
    }
    if (tabtype == "content") {
      this.filter_chart_data_var = "youtube_video";
    }
    if (tabtype == "revenue") {
      this.filter_chart_data_var = "All";
    }
    if (tabtype == "analysis") {
      this.filter_chart_data_var = "analysis";
      this.currenttab = tabtype;
      this.getchannellist();
      return;
    }
    this.currenttab = tabtype;
    // this.loaddata();
    // No need as getByDate will be called already
  }

  getByDate(event) {
    if (event.startDate && event.endDate) {
      this.filters["startDate"] = moment(event.startDate._d).format(
        "YYYY-MM-DD"
      );
      this.filters["endDate"] = moment(event.endDate._d).format("YYYY-MM-DD");
    } else {
      if (this.initDate) {
        this.initDateRangeFilter();

        this.filters["startDate"] = moment(
          this.daterangefilter.startDate
        ).format("YYYY-MM-DD");
        this.filters["endDate"] = moment(this.daterangefilter.endDate).format(
          "YYYY-MM-DD"
        );
        this.initDate = false;
        // return;
      } else {
        this.filters["startDate"] = this.filters["endDate"] = null;
      }
    }

    this.loaddata();
  }

  filterForm(channelId) {
    this.filterGroup = this.fb.group({
      channel: [channelId ?? null],
    });
    this.subscriptions.push(
      this.filterGroup.controls.channel.valueChanges.subscribe(() => {
        this.getGraphdataAnalysis();
      })
    );
  }

  getaccountcount() {
    const params = {
      startDate: this.filters["startDate"] ?? "",
      endDate: this.filters["endDate"] ?? "",
    };
    this.dashboardservice.getaccountdata(params).subscribe((data: any) => {
      this.cd.markForCheck();
      if (data.result) {
        this.accountdata = data.result;
      }
    });
  }

  getcontentcount() {
    const params = {
      startDate: this.filters["startDate"] ?? "",
      endDate: this.filters["endDate"] ?? "",
    };
    this.dashboardservice.getcontentdata(params).subscribe((data: any) => {
      this.cd.markForCheck();
      if (data.result) {
        this.contentdata = data.result;
      }
    });
  }

  getrevenuecount() {
    const params = {
      startDate: this.filters["startDate"] ?? "",
      endDate: this.filters["endDate"] ?? "",
    };
    this.dashboardservice.getrevenuedata(params).subscribe((data: any) => {
      this.cd.markForCheck();
      if (data.result) {
        this.revenuedata = data.result;
      }
    });
  }

  getGraphdataAccount() {
    const params = {
      startDate: this.filters["startDate"] ?? "",
      endDate: this.filters["endDate"] ?? "",
    };
    this.dashboardservice.getallDataGraphAccount(params).subscribe(
      (data: any) => {
        this.cd.markForCheck();
        if (data.result) {
          this.graphData = data.result;
          this.changecard(this.filter_chart_data_var);
        }
      },
      (err) => {}
    );
  }

  getGraphdataContent() {
    const params = {
      startDate: this.filters["startDate"] ?? "",
      endDate: this.filters["endDate"] ?? "",
    };
    this.dashboardservice.getallDataGraphContent(params).subscribe(
      (data: any) => {
        this.cd.markForCheck();
        if (data.result) {
          this.graphDataContent = data.result;
          this.changecard(this.filter_chart_data_var);
        }
      },
      (err) => {}
    );
  }

  getGraphdataRevenue() {
    const params = {
      startDate: this.filters["startDate"] ?? "",
      endDate: this.filters["endDate"] ?? "",
    };
    this.dashboardservice.getallDataGraphRevenue(params).subscribe(
      (data: any) => {
        this.cd.markForCheck();
        if (data.result) {
          this.graphDataRevenue = data.result;
          this.changecard(this.filter_chart_data_var);
        }
      },
      (err) => {}
    );
  }

  getGraphdataAnalysis() {
    const params = {
      startDate: this.filters["startDate"] ?? "",
      endDate: this.filters["endDate"] ?? "",
    };
    const channels = this.filterGroup.get("channel").value;
    if (channels) {
      params["channel"] = channels;
    }
    this.dashboardservice.getDashboardCreatorGraph(params).subscribe(
      (data: any) => {
        if (data.result) {
          this.graphDataAnalysis = data.result;
          this.changecard(this.filter_chart_data_var);
        }
        this.cd.markForCheck();
      },
      (err) => {}
    );
  }

  changecard(chart_type) {
    this.filter_chart_data_var = chart_type;
    if (chart_type === "channel") {
      var chart_channel_count = [];
      this.graphData.channel.forEach((item) => {
        chart_channel_count.push(item.count.toFixed(2));
      });
      var chart_channel_dates = [];
      this.graphData.channel.forEach((item) => {
        chart_channel_dates.push(item._id);
      });
      var graph_data = [{ data: chart_channel_count, label: "Channels" }];
      this.lineChartDataForRoyalties = graph_data;
      this.lineChartLabelsForRoyalties = chart_channel_dates;
      this.lineChartColorsForRoyalties =
        chartsData.lineChartColorsForAccChannel;
    }
    if (chart_type === "creators") {
      var chart_creator_count = [];
      this.graphData.creator.forEach((item) => {
        chart_creator_count.push(item.count.toFixed(2));
      });
      var chart_creator_dates = [];
      this.graphData.creator.forEach((item) => {
        chart_creator_dates.push(item._id);
      });
      var graph_data = [{ data: chart_creator_count, label: "Creators" }];
      this.lineChartDataForRoyalties = graph_data;
      this.lineChartLabelsForRoyalties = chart_creator_dates;
      this.lineChartColorsForRoyalties =
        chartsData.lineChartColorsForAccCreator;
    }
    if (chart_type === "rights_holder") {
      var chart_rights_holder_count = [];
      this.graphData.rights_holder.forEach((item) => {
        chart_rights_holder_count.push(item.count.toFixed(2));
      });
      var chart_rights_holder_dates = [];
      this.graphData.rights_holder.forEach((item) => {
        chart_rights_holder_dates.push(item._id);
      });
      var graph_data = [
        { data: chart_rights_holder_count, label: "Rights Holder" },
      ];
      this.lineChartDataForRoyalties = graph_data;
      this.lineChartLabelsForRoyalties = chart_rights_holder_dates;
      this.lineChartColorsForRoyalties =
        chartsData.lineChartColorsForAccRightsHolder;
    }
    if (chart_type === "artist") {
      var chart_artist_count = [];
      this.graphData.artist.forEach((item) => {
        chart_artist_count.push(item.count.toFixed(2));
      });
      var chart_artist_dates = [];
      this.graphData.artist.forEach((item) => {
        chart_artist_dates.push(item._id);
      });
      var graph_data = [{ data: chart_artist_count, label: "Speakers" }];
      this.lineChartDataForRoyalties = graph_data;
      this.lineChartLabelsForRoyalties = chart_artist_dates;
      this.lineChartColorsForRoyalties = chartsData.lineChartColorsForAccArtist;
    }
    if (chart_type === "youtube_video") {
      var chart_youtube_count = [];
      this.graphDataContent.youtube_video.forEach((item) => {
        chart_youtube_count.push(item.count.toFixed(2));
      });
      var chart_youtube_dates = [];
      this.graphDataContent.youtube_video.forEach((item) => {
        chart_youtube_dates.push(item._id);
      });
      var graph_data = [{ data: chart_youtube_count, label: "Youtube Videos" }];
      this.lineChartDataForContent = graph_data;
      this.lineChartLabelsForContent = chart_youtube_dates;
      this.lineChartColorsForContent = chartsData.lineChartColorsForContent;
    }
    if (chart_type === "clips") {
      var chart_youtube_count = [];
      this.graphDataContent.clips.forEach((item) => {
        chart_youtube_count.push(item.count);
      });
      var chart_youtube_dates = [];
      this.graphDataContent.clips.forEach((item) => {
        chart_youtube_dates.push(item._id);
      });
      var graph_data = [
        { data: chart_youtube_count, label: "Audios Available" },
      ];
      this.lineChartDataForContent = graph_data;
      this.lineChartLabelsForContent = chart_youtube_dates;
      this.lineChartColorsForContent =
        chartsData.lineChartColorsForAudioAvailable;
    }
    if (chart_type === "contract") {
      var chart_youtube_count = [];
      this.graphDataContent.contract.forEach((item) => {
        chart_youtube_count.push(item.count.toFixed(2));
      });
      var chart_youtube_dates = [];
      this.graphDataContent.contract.forEach((item) => {
        chart_youtube_dates.push(item._id);
      });
      var graph_data = [
        { data: chart_youtube_count, label: "Creatoe Agreement" },
      ];
      this.lineChartDataForContent = graph_data;
      this.lineChartLabelsForContent = chart_youtube_dates;
      this.lineChartColorsForContent =
        chartsData.lineChartColorsForCreatorAgreement;
    }
    if (chart_type === "contract_assigned") {
      var chart_youtube_count = [];
      this.graphDataContent.contract_assigned.forEach((item) => {
        chart_youtube_count.push(item.count.toFixed(2));
      });
      var chart_youtube_dates = [];
      this.graphDataContent.contract_assigned.forEach((item) => {
        chart_youtube_dates.push(item._id);
      });
      var graph_data = [
        { data: chart_youtube_count, label: "Contract Assigned" },
      ];
      this.lineChartDataForContent = graph_data;
      this.lineChartLabelsForContent = chart_youtube_dates;
      this.lineChartColorsForContent =
        chartsData.lineChartColorsForContractAssigned;
    }
    if (chart_type === "All") {
      var rights_holder_earning = [];
      this.graphDataRevenue.forEach((item) => {
        rights_holder_earning.push(item.rights_holder_earning.toFixed(2));
      });
      var creator_earning = [];
      this.graphDataRevenue.forEach((item) => {
        creator_earning.push(item.creator_earning.toFixed(2));
      });
      var mindset_earning = [];
      this.graphDataRevenue.forEach((item) => {
        mindset_earning.push(item.mindset_earning.toFixed(2));
      });
      var chart_youtube_dates = [];
      this.graphDataRevenue.forEach((item) => {
        chart_youtube_dates.push(item._id);
      });
      var graph_data = [
        { data: rights_holder_earning, label: "Rights Holder Revenue" },
        { data: creator_earning, label: "Creator Revenue" },
        { data: mindset_earning, label: "Mindset Revenue" },
      ];
      this.lineChartDataForAll = graph_data;
      this.lineChartLabelsForAll = chart_youtube_dates;
      this.lineChartColorsForAll = chartsData.lineChartColorsForAll;
    }
    if (chart_type === "analysis") {
      var creator_comments_data = [];
      this.graphDataAnalysis.forEach((item) => {
        creator_comments_data.push(item.comments.toFixed(2));
      });
      var creator_dislikes_data = [];
      this.graphDataAnalysis.forEach((item) => {
        creator_dislikes_data.push(item.dislikes.toFixed(2));
      });
      var creator_drm_royality_share_data = [];
      this.graphDataAnalysis.forEach((item) => {
        creator_drm_royality_share_data.push(
          item.drm_royality_share.toFixed(2)
        );
      });
      var creator_likes_data = [];
      this.graphDataAnalysis.forEach((item) => {
        creator_likes_data.push(item.likes.toFixed(2));
      });
      var creator_total_earning_data = [];
      this.graphDataAnalysis.forEach((item) => {
        creator_total_earning_data.push(item.total_earning.toFixed(2));
      });
      var creator_views_data = [];
      this.graphDataAnalysis.forEach((item) => {
        creator_views_data.push(item.views.toFixed(2));
      });
      var creator_your_share_data = [];
      this.graphDataAnalysis.forEach((item) => {
        creator_your_share_data.push(item.your_share.toFixed(2));
      });

      var creator_earning_dates = [];
      this.graphDataAnalysis.forEach((item) => {
        creator_earning_dates.push(item._id);
      });

      var graph_data = [
        { data: creator_comments_data, label: "Total Comments" },
        { data: creator_dislikes_data, label: "Total DisLikes" },
        { data: creator_drm_royality_share_data, label: "Total Royalty Share" },
        { data: creator_likes_data, label: "Total Likes" },
        { data: creator_total_earning_data, label: "Total Revenue" },
        { data: creator_views_data, label: "Total Views" },
        { data: creator_your_share_data, label: "Total Share" },
      ];

      this.lineChartDataForAnalysis = graph_data;
      this.lineChartLabelsForAnalysis = creator_earning_dates;
      this.lineChartColorsForAnalysis = chartsData.lineChartColorsForAnalysis;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
