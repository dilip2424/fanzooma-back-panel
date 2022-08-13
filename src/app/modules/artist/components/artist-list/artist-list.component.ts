import { HttpClient } from "@angular/common/http";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { AuthService } from "app/core/service/auth/auth.service";
import { ArtistService } from "app/modules/artist/_services/artist.service";
import * as moment from "moment";

import { Subscription } from "rxjs";
import swal from "sweetalert2";

@Component({
  selector: "app-artist-list",
  templateUrl: "./artist-list.component.html",
  styleUrls: [
    "./artist-list.component.scss",
    "../../../../../assets/sass/libs/select.scss",
    "../../../../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ArtistListComponent implements OnInit {
  isOpen = false;
  @ViewChild("customizer") customizer: ElementRef;

  //paginatin start
  public page: number = 1;
  public count: any;
  public limit: number = 10;
  public searchTerm = "";
  public columnName = "";
  public youtubeVideoSort = "";
  public clipSort = "";
  public sortCreatedAt = "1";
  public channelSort = "1";
  public offset = 0;
  public currentdocsize = 0;
  public order = "-1";
  public rows: Array<any> = [];
  loading = false;
  public ColumnMode = ColumnMode;
  //paginatin start

  //spinner loading...
  isLoadingtable$;
  filterGroup: FormGroup;
  private subscriptions: Subscription[] = [];

  my_messages = {
    emptyMessage: "Loading...",
    totalMessage: "Speakers",
  };

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

  /**
   * Constructor
   *
   * @param {HttpClient} http
   */
  constructor(
    private renderer: Renderer2,
    private http: HttpClient,
    private artistservice: ArtistService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    public authService: AuthService
  ) {
    this.isLoadingtable$ = this.artistservice.isLoadingtable$;
  }

  /**
   * On init
   */
  ngOnInit() {
    // Initially load first page
    this.filterForm();
    this.getadminlist();
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
    this.getadminlist();
  }

  filterForm() {
    this.filterGroup = this.fb.group({
      status: [],
    });

    this.subscriptions.push(
      this.filterGroup.controls.status.valueChanges.subscribe(() => {
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
    this.youtubeVideoSort = this.clipSort = this.sortCreatedAt = "";
    switch (prop) {
      case "youtube_videos":
        this.youtubeVideoSort = "1";
        break;
      case "clips":
        this.clipSort = "1";
        break;
      case "channels":
        this.channelSort = "1";
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

  getadminlist() {
    const params = {
      limit: this.limit,
      page: this.page,
      youtubeVideoSort: this.youtubeVideoSort,
      clipSort: this.clipSort,
      createdAtSort: this.sortCreatedAt,
      ascDesc: this.order,
      search: this.searchTerm,
      channelSort: this.channelSort,
      startDate: this.filters["startDate"],
      endDate: this.filters["endDate"],
    };

    const status = this.filterGroup.get("status").value;
    if (status) {
      params["status"] = status;
    }

    this.artistservice.getall(params).subscribe(
      (data: any) => {
        if (data.result) {
          this.rows = data.result.docs;
          this.count = data.result.totalDocs;
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
    if (status != "3") {
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
            this.artistservice
              .changestatus(id, sendstatus)
              .subscribe((data: any) => {
                this.getadminlist();
              });
          }
        });
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }
}
