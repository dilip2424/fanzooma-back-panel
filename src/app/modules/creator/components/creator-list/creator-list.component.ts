import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AuthService } from 'app/core/service/auth/auth.service';
import { CommonService } from 'app/core/service/common/common.service';
import { CreatorService } from 'app/modules/creator/_services/creator.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-creator-list',
  templateUrl: './creator-list.component.html',
  styleUrls: [
    './creator-list.component.scss',
    '../../../../../assets/sass/libs/select.scss',
    '../../../../../assets/sass/libs/datatables.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CreatorListComponent implements OnInit {
  public page: number = 1;
  public count: any;
  public limit: number = 10;

  public searchTerm = '';
  public columnName = '';
  public nameSort = '';
  public emailSort = '';
  public channelSort = '';
  public youtubeVideoSort = '';
  public clipSort = '';
  public sortCreatedAt = '1';
  public youtubeEarningSort = '';
  public clips: any;
  public offset = 0;
  filterGroup: FormGroup;
  public currentdocsize = 0;
  private subscriptions: Subscription[] = [];

  public order = '-1';
  isLoadingtable$;
  my_messages = {
    emptyMessage: 'Loading...',
    totalMessage: 'Creators',
  };
  public rows: Array<any> = [];
  // column header
  loading = false;
  public ColumnMode = ColumnMode;

  public filters = <any>{
    startDate: '',
    endDate: '',
  };

  daterangefilter: any;
  alwaysShowCalendars: boolean;
  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 1 Week': [moment().subtract(6, 'days'), moment()],
    'Last 28 Days': [moment().subtract(27, 'days'), moment()],
    'Last 90 Days': [moment().subtract(89, 'days'), moment()],
    'Last 365 Days': [moment().subtract(364, 'days'), moment()],
    // 'This Month': [moment().startOf('month'), moment().endOf('month')],
    // 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
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
    private http: HttpClient,
    private creatorservice: CreatorService,
    private cd: ChangeDetectorRef,
    private commonservice: CommonService,
    public authService: AuthService,
    private fb: FormBuilder
  ) {
    this.isLoadingtable$ = this.creatorservice.isLoadingtable$;
  }

  /**
   * On init
   */
  ngOnInit() {
    // Initially load first page
    this.filterForm();
    this.getcreatorlist();
    // this.getcliplist();
  }
  // getcliplist() {
  //   this.commonservice.getclip().subscribe(
  //     (data: any) => {
  //       this.cd.markForCheck();
  //       if (data.result) {
  //         this.clips = data.result;
  //       }
  //     },
  //     (err) => {}
  //   );
  // }

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
    this.getcreatorlist();
  }

  filterForm() {
    this.filterGroup = this.fb.group({
      status: [],
      clip: [],
    });
    this.subscriptions.push(
      this.filterGroup.controls.status.valueChanges.subscribe(() => {
        this.page = 1;
        this.offset = 0;
        this.getcreatorlist();
      })
    );
    this.subscriptions.push(
      this.filterGroup.controls.clip.valueChanges.subscribe(() => {
        this.page = 1;
        this.offset = 0;
        this.getcreatorlist();
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
    this.getcreatorlist();
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
    this.nameSort =
      this.emailSort =
      this.sortCreatedAt =
      this.channelSort =
      this.youtubeEarningSort =
      this.clipSort =
      this.youtubeVideoSort =
        '';
    switch (prop) {
      case 'name':
        this.nameSort = '1';
        break;
      case 'email':
        this.emailSort = '1';
        break;
      case 'channels':
        this.channelSort = '1';
        break;
      case 'youtube_videos':
        this.youtubeVideoSort = '1';
        break;
      case 'youtube_earning':
        this.youtubeEarningSort = '1';
        break;
      case 'clips':
        this.clipSort = '1';
        break;
      default:
        this.sortCreatedAt = '1';
    }

    if (dir == 'asc') {
      this.order = '1';
    }
    if (dir == 'desc') {
      this.order = '-1';
    }

    this.getcreatorlist();
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
    this.getcreatorlist();
  }

  getcreatorlist() {
    const params = {
      limit: this.limit,
      page: this.page,
      nameSort: this.nameSort,
      emailSort: this.emailSort,
      channelSort: this.channelSort,
      youtubeVideoSort: this.youtubeVideoSort,
      youtubeEarningSort: this.youtubeEarningSort,
      clipSort: this.clipSort,
      sortCreatedAt: this.sortCreatedAt,
      ascDesc: this.order,
      search: this.searchTerm,
      startDate: this.filters['startDate'],
      endDate: this.filters['endDate'],
    };

    const status = this.filterGroup.get('status').value;
    if (status) {
      params['status'] = status;
    }
    const clip = this.filterGroup.get('clip').value;
    if (clip) {
      params['clip'] = clip;
    }

    this.creatorservice.getall(params).subscribe(
      (resp: any) => {
        const { data, message } = resp;
        this.rows = data.docs;
        this.count = data.count;
        this.offset = this.page - 1;
        this.currentdocsize = this.rows.length;

        if (this.rows.length == 0) {
          this.my_messages.emptyMessage = 'No data found.';
        }
        this.cd.markForCheck();
      },
      (err) => {}
    );
  }

  changestatus(id, status) {
    let titlestatus = 'Active';
    let sendstatus = 1;
    if (status == '1') {
      titlestatus = 'Inactive';
      sendstatus = 2;
    }
    swal
      .fire({
        title: `Are you sure?`,
        text: `you want to change status as ${titlestatus}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2F8BE6',
        cancelButtonColor: '#F55252',
        confirmButtonText: `Yes, ${titlestatus} it!`,
        customClass: {
          confirmButton: 'btn btn-warning',
          cancelButton: 'btn btn-danger ml-1',
        },
        buttonsStyling: false,
      })
      .then((result) => {
        if (result.value) {
          this.creatorservice
            .changestatus(id, sendstatus)
            .subscribe((data: any) => {
              this.getcreatorlist();
            });
        }
      });
  }

  delete(id: number) {
    swal
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2F8BE6',
        cancelButtonColor: '#F55252',
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          confirmButton: 'btn btn-warning',
          cancelButton: 'btn btn-danger ml-1',
        },
        buttonsStyling: false,
      })
      .then((result) => {
        if (result.value) {
          this.creatorservice.delete(id).subscribe((data: any) => {
            swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your creator has been deleted.',
              customClass: {
                confirmButton: 'btn btn-success',
              },
            });
            if (this.currentdocsize == 1) {
              this.page = this.page - 1;
            }
            this.getcreatorlist();
          });
        }
      });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }
}
