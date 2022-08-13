import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ClubsService } from 'app/modules/clubs/_services/clubs.service';
import { LocationService } from 'app/modules/locations/_services/location.service';
import * as moment from 'moment';
import { FansService } from '../../_services/fans.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: [
    './listing.component.scss',
    './listing.component.scss',
    '../../../../../assets/sass/libs/select.scss',
    '../../../../../assets/sass/libs/datatables.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ListingComponent implements OnInit {
  /*---------------------------------------------------------------------*/
  public count: any;
  public page: number = 1;
  public limit: number = 10;
  public offset = 0;
  public currentdocsize = 0;

  public columnName = '';
  public order = 'desc';

  public searchTerm = '';
  filterForm: FormGroup;

  isLoadingtable$;

  my_messages = {
    emptyMessage: 'Loading...',
    totalMessage: 'Fans',
  };

  public rows: Array<any> = [];
  public ColumnMode = ColumnMode;

  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 1 Week': [moment().subtract(6, 'days'), moment()],
    'Last 28 Days': [moment().subtract(27, 'days'), moment()],
    'Last 90 Days': [moment().subtract(89, 'days'), moment()],
    'Last 365 Days': [moment().subtract(364, 'days'), moment()],
  };

  resetPage() {
    this.page = 1;
    this.offset = 0;
  }

  setPage(pageInfo) {
    this.page = pageInfo.offset + 1;
    this.offset = pageInfo.offset;
    this.getFans();
  }

  onSort(event) {
    const sort = event.sorts[0];
    this.columnName = sort.prop;
    this.order = sort.dir;

    this.resetPage();
    this.getFans();
  }

  filterParams() {
    return this.filterForm.value;
  }

  sortParams() {
    return {
      orderybyparam: this.columnName,
      orderybytype: this.order,
    };
  }

  pageParams() {
    return {
      limit: this.limit,
      page: this.page,
    };
  }

  getFans() {
    const params = {
      ...this.pageParams(),
      ...this.sortParams(),
      ...this.filterParams(),
    };

    this.fansService.getAll(params).subscribe(
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

  /** ------------------------------------------------------------------------- */

  clubNames = [];

  constructor(
    private fansService: FansService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private clubService: ClubsService
  ) {
    this.isLoadingtable$ = this.fansService.isLoadingtable$;
  }

  ngOnInit() {
    this.initFilterForm();
    this.getClubNames();

    this.filterForm.patchValue({
      club: history.state.club,
    });
  }

  initFilterForm() {
    this.filterForm = this.fb.group({
      date_range: [
        {
          startDate: null,
          endDate: null,
        },
      ],
      search: [],
      club: [],
      frequency: [], // 'in:daily,weekly,bi_weekly,monthly,quarterly,always|nullable',
      send_email: [], // 'in:yes,no|nullable',
      send_sms: [], // 'in:yes,no|nullable',
      send_whatsapp: [], // 'in:yes,no|nullable',
      status: [],
    });

    this.filterForm.valueChanges.subscribe(() => {
      this.resetPage();
      this.getFans();
    });
  }

  getClubNames() {
    this.clubService.getAllNames({}).subscribe(
      (resp: any) => {
        const { data, message } = resp;
        this.clubNames = data.docs;
      },
      (err) => {}
    );
  }
}
