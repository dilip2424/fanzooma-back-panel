import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ChangeDetectorRef,
  Input,
  Renderer2,
  ElementRef,
  AbstractType,
} from "@angular/core";

import { ColumnMode } from "@swimlane/ngx-datatable";
import { HttpClient } from "@angular/common/http";
import swal from "sweetalert2";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { ChannelService } from "app/modules/channels/_services/channel.service";
import { CommonService } from "app/core/service/common/common.service";
import { ActivatedRoute } from "@angular/router";
import * as moment from "moment";
import { AuthService } from "app/core/service/auth/auth.service";

@Component({
  selector: "app-list-channel",
  templateUrl: "./list-channel.component.html",
  styleUrls: [
    "./list-channel.component.scss",
    "../../../../../assets/sass/libs/select.scss",
    "../../../../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ListChannelComponent implements OnInit {
  isOpen = false;
  @ViewChild("customizer") customizer: ElementRef;

  //paginatin start
  public page: number = 1;
  public count: any;
  public limit: number = 10;
  public searchTerm = "";
  public columnName = "";
  public subscribersSort = "";
  public viewsSort = "";
  public youtubeVideosSort = "";
  public youtubeEarningSort = "";
  public sortCreatedAt = "1";
  public offset = 0;
  public currentdocsize = 0;
  public order = "-1";
  public rows: Array<any> = [];
  loading = false;
  contracts: any;
  public ColumnMode = ColumnMode;
  public rightholders: Array<any> = [];
  //paginatin start

  //spinner loading...
  isLoadingtable$;
  filterGroup: FormGroup;
  creators: any;
  creator_id: string;
  public artists: Array<any> = [];
  private subscriptions: Subscription[] = [];
  public rights_holder_id: any;
  public artist_id: string;
  public role: any;

  my_messages = {
    emptyMessage: "Loading...",
    totalMessage: "Channels",
  };
  public columns = [
    { name: "Name", prop: "name" },
    { name: "Subscribers", prop: "subscribers" },
    { name: "Youtube Earning", prop: "youtube_earning" },
    { name: "Youtube Videos", prop: "youtube_videos" },
    { name: "Views", prop: "views" },
  ];

  public filters = <any>{
    startDate: "",
    endDate: "",
  };

  daterangefilter: any;
  alwaysShowCalendars: boolean;
  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Last 1 Week": [moment().subtract(6, "days"), moment()],
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
  isFilterIncoming: boolean;

  /**
   * Constructor
   *
   * @param {HttpClient} http
   */
  constructor(
    private renderer: Renderer2,
    private http: HttpClient,
    private channelservice: ChannelService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private commonservice: CommonService,
    public authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.isLoadingtable$ = this.channelservice.isLoadingtable$;
  }

  /**
   * On init
   */
  ngOnInit() {
    this.role = this.authService.currentusertype();

    // Initially load first page
    this.route.params.subscribe((paramsid) => {
      this.creator_id = paramsid.creator_id;
      this.artist_id = paramsid.artist_id;
      this.rights_holder_id = paramsid.rights_holder_id;

      this.isFilterIncoming = Object.keys(paramsid).length > 0 ? true : false;
    });

    // filter-form init
    this.filterForm();

    // main list
    // this.getchannellist();

    // list for filter dropdowns
    this.getcreatorslist();
    this.getcontractlist();
    this.getartistlist();
    this.getRightholderlist();
  }

  getRightholderlist() {
    this.commonservice.getall({ type: 4 }).subscribe(
      (data: any) => {
        if (data.result) {
          this.rightholders = data.result;
        }
        this.cd.markForCheck();
      },
      (err) => { }
    );
  }

  getartistlist() {
    this.commonservice.getallartist().subscribe(
      (data: any) => {
        this.cd.markForCheck();
        if (data.result) {
          this.artists = data.result;
        }
      },
      (err) => { }
    );
  }

  getcontractlist() {
    const params = {
      search: "",
    };
    this.commonservice.getallcontracts(params).subscribe(
      (data: any) => {
        this.cd.markForCheck();
        if (data.result) {
          this.contracts = data.result;
        }
      },
      (err) => { }
    );
  }

  public getByDate(event) {
    if (event.startDate && event.endDate) {
      this.filters["startDate"] = moment(event.startDate._d).format(
        "YYYY-MM-DD"
      );
      this.filters["endDate"] = moment(event.endDate._d).format("YYYY-MM-DD");
    } else {
      this.filters["startDate"] = "";
      this.filters["endDate"] = "";
    }
    this.getchannellist();
  }

  getcreatorslist() {
    this.commonservice.getall({ type: 3 }).subscribe(
      (data: any) => {
        if (data.result) {
          this.creators = data.result;
        }
        this.cd.markForCheck();
      },
      (err) => { }
    );
  }

  filterForm(type = "0") {
    const incomingFilter = {
      creator: this.creator_id,
      contract: null,
      rights_holder: this.rights_holder_id,
      artist: this.artist_id,
    };

    this.filterGroup = this.fb.group({
      creator: [incomingFilter.creator],
      contract: [incomingFilter.contract],
      rights_holder: [incomingFilter.rights_holder],
      artist: [incomingFilter.artist],
      status: [],
    });

    this.page = 1;
    this.offset = 0;
    this.getchannellist();
    // this.channelservice.setFilter(this.filterGroup.value);

    this.subscriptions.push(
      this.filterGroup.valueChanges.subscribe(() => {
        this.page = 1;
        this.offset = 0;
        this.getchannellist();
        // this.channelservice.setFilter(this.filterGroup.value);
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

    this.getchannellist();
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
    this.subscribersSort =
      this.viewsSort =
      this.youtubeVideosSort =
      this.sortCreatedAt =
      this.youtubeEarningSort =
      "";
    switch (prop) {
      case "subscribers":
        this.subscribersSort = "1";
        break;
      case "views":
        this.viewsSort = "1";
        break;
      case "youtube_videos":
        this.youtubeVideosSort = "1";
        break;
      case "youtube_earning":
        this.youtubeEarningSort = "1";
        break;

      default:
        this.sortCreatedAt = "1";
    }
    if (dir == "asc") {
      this.order = "1";
    }
    if (dir == "desc") {
      this.order = "-1";
    }
    this.getchannellist();
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
    this.getchannellist();
  }

  toggleCustomizer() {
    if (this.isOpen) {
      this.renderer.removeClass(this.customizer.nativeElement, "open");
      this.isOpen = false;
    } else {
      this.renderer.addClass(this.customizer.nativeElement, "open");
      this.isOpen = true;
    }
  }

  closeCustomizer() {
    this.renderer.removeClass(this.customizer.nativeElement, "open");
    this.isOpen = false;
  }

  getchannellist() {
    const params = {
      limit: this.limit,
      page: this.page,
      subscribersSort: this.subscribersSort,
      viewsSort: this.viewsSort,
      youtubeVideosSort: this.youtubeVideosSort,
      youtubeEarningSort: this.youtubeEarningSort,
      sortCreatedAt: this.sortCreatedAt,
      ascDesc: this.order,
      search: this.searchTerm,
      startDate: this.filters["startDate"],
      endDate: this.filters["endDate"],
    };

    // const role = this.filterGroup.get('role').value;
    // if (role) {
    //     params['type'] = role;
    // }
    const creator = this.filterGroup.get("creator").value;
    if (creator) {
      params["creator"] = creator;
    }
    const rights_holder = this.filterGroup.get("rights_holder").value;
    if (rights_holder) {
      params["rights_holder"] = rights_holder;
    }

    const artist = this.filterGroup.get("artist").value;
    if (artist) {
      params["artist"] = artist;
    }

    const contract = this.filterGroup.get("contract").value;
    if (contract) {
      params["contract"] = contract;
    }
    const status = this.filterGroup.get("status").value;
    if (status) {
      params["status"] = status;
    }

    // const filteropt = { type: 'channel', filter: params }
    // const getfilter = this.commonservice.getFilters();
    // let finaladded = []
    // if (getfilter) {
    //     let finaladded = getfilter.find((findfilter: any) => {
    //         findfilter.type != 'channel'
    //     })
    // }
    // const fil = [...finaladded, filteropt];
    // this.commonservice.setFilters(fil);

    this.channelservice.setFilter(params);
    this.channelservice.getall(params).subscribe(
      (data: any) => {
        if (data.result) {
          this.rows = data.result.docs;
          // this.count = data.result.totalDocs;
          this.count = this.rows.length;
          this.offset = data.result.page - 1;

          this.currentdocsize = this.rows.length;
          if (this.rows.length == 0) {
            this.my_messages.emptyMessage = "No data found.";
          }
        }
        this.cd.markForCheck();
      },
      (err) => { }
    );
  }

  changestatus(id, status) {
    if (this.role != "right_holder") {
      let titlestatus = "Active";
      let sendstatus = 1;
      if (status == "1") {
        titlestatus = "Inactive";
        sendstatus = 2;
      }
      swal
        .fire({
          title: `Are you sure?`,
          text: `you want to change status as ${titlestatus}?`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#2F8BE6",
          cancelButtonColor: "#F55252",
          confirmButtonText: `Yes, ${titlestatus} it!`,
          customClass: {
            confirmButton: "btn btn-warning",
            cancelButton: "btn btn-danger ml-1",
          },
          buttonsStyling: false,
        })
        .then((result) => {
          if (result.value) {
            this.channelservice
              .changestatus(id, sendstatus)
              .subscribe((data: any) => {
                this.getchannellist();
              });
          }
        });
    }
  }

  delete(id: number) {
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2F8BE6",
        cancelButtonColor: "#F55252",
        confirmButtonText: "Yes, delete it!",
        customClass: {
          confirmButton: "btn btn-warning",
          cancelButton: "btn btn-danger ml-1",
        },
        buttonsStyling: false,
      })
      .then((result) => {
        if (result.value) {
          this.channelservice.delete(id).subscribe((data: any) => {
            swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "Your channel has been deleted.",
              customClass: {
                confirmButton: "btn btn-success",
              },
            });
            if (this.currentdocsize == 1 && this.page != 1) {
              this.page = this.page - 1;
            }
            this.getchannellist();
          });
        }
      });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }
}
