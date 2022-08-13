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
import { AdminService } from 'app/modules/admin/_services/admin.service';
import swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: [
    './admin-list.component.scss',
    '../../../../../assets/sass/libs/select.scss',
    '../../../../../assets/sass/libs/datatables.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AdminListComponent implements OnInit {
  isOpen = false;
  @ViewChild('customizer') customizer: ElementRef;

  //paginatin start
  public page: number = 1;
  public count: any;
  public limit: number = 10;
  public searchTerm = '';
  public columnName = '';
  public nameSort = '';
  public emailSort = '';
  public phoneSort = '';
  public sortCreatedAt = '1';
  public offset = 0;
  public currentdocsize = 0;
  public order = '-1';
  public rows: Array<any> = [];
  loading = false;
  public ColumnMode = ColumnMode;
  //paginatin start

  //spinner loading...
  isLoadingtable$;
  filterGroup: FormGroup;
  private subscriptions: Subscription[] = [];

  my_messages = {
    emptyMessage: 'Loading...',
    totalMessage: 'Admins',
  };
  public columns = [
    { name: 'Name', prop: 'name' },
    { name: 'Email', prop: 'email' },
    { name: 'Age', prop: 'phone' },
    { name: 'Role', prop: 'type' },
  ];

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
  };
  invalidDates: moment.Moment[] = [
    moment().add(2, 'days'),
    moment().add(3, 'days'),
    moment().add(5, 'days'),
  ];

  isInvalidDate = (m: moment.Moment) => {
    return this.invalidDates.some((d) => d.isSame(m, 'day'));
  };

  currentFilter;

  /**
   * Constructor
   *
   * @param {HttpClient} http
   */
  constructor(
    private renderer: Renderer2,
    private http: HttpClient,
    private adminservice: AdminService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
    this.isLoadingtable$ = this.adminservice.isLoadingtable$;
    this.alwaysShowCalendars = true;
    this.currentFilter = this.adminservice.filters;
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

  filterForm() {
    this.filterGroup = this.fb.group({
      date_range: [
        {
          startDate: null,
          endDate: null,
        },
      ],
      role: [],
      status: [],
      search: '',
    });

    this.subscriptions.push(
      this.filterGroup.valueChanges.subscribe(() => {
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
    this.nameSort = this.emailSort = this.sortCreatedAt = '';
    switch (prop) {
      case 'name':
        this.nameSort = '1';
        break;
      case 'email':
        this.emailSort = '1';
        break;
      case 'phone':
        this.phoneSort = '1';
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
      ...this.filterGroup.value,
    };

    this.adminservice.getAll(params).subscribe(
      (resp: any) => {
        this.cd.markForCheck();
        const { message, data } = resp;
        this.rows = data.docs;
        this.count = data.count;
        this.offset = this.page - 1;
        this.currentdocsize = this.rows.length;
        if (this.rows.length == 0) {
          this.my_messages.emptyMessage = 'No data found.';
        }
      },
      (err) => {}
    );
  }

  changestatus(id, status) {
    let titlestatus = 'Active';
    let sendstatus = 'active';
    if (status == 'active') {
      titlestatus = 'Inactive';
      sendstatus = 'inactive';
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
          this.adminservice
            .changestatus(id, sendstatus)
            .subscribe((data: any) => {
              this.getadminlist();
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
          this.adminservice.delete(id).subscribe((data: any) => {
            swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your admin has been deleted.',
              customClass: {
                confirmButton: 'btn btn-success',
              },
            });
            if (this.currentdocsize == 1) {
              this.page = this.page - 1;
            }
            this.getadminlist();
          });
        }
      });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }
}
