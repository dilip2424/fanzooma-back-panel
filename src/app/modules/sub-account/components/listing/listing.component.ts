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
import { OrganizationService } from 'app/modules/organization/_services/organization.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import swal from 'sweetalert2';
import { SubAccountService } from '../../_services/sub-account.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: [
    './listing.component.scss',
    '../../../../../assets/sass/libs/select.scss',
    '../../../../../assets/sass/libs/datatables.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ListingComponent implements OnInit {
  public count: any;
  public page: number = 1;
  public limit: number = 10;
  public offset = 0;
  public currentdocsize = 0;

  public columnName = '';
  public order = 'desc';

  public searchTerm = '';
  filterForm: FormGroup;

  public plans: any = [];

  isLoadingtable$;

  my_messages = {
    emptyMessage: 'Loading...',
    totalMessage: 'Subaccounts',
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
  organizationsNames: any = [];

  constructor(
    private subAccService: SubAccountService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private orgService: OrganizationService
  ) {
    this.isLoadingtable$ = this.subAccService.isLoadingtable$;
  }

  ngOnInit() {
    this.initFilterForm();
    this.getOrganizationNames();

    this.filterForm.patchValue({
      org_id: history.state.org_id,
    });
  }

  getOrganizationNames() {
    this.orgService.getAllNames({}).subscribe(
      (resp: any) => {
        const { data, message } = resp;
        this.organizationsNames = data.docs;
      },
      (err) => {}
    );
  }

  initFilterForm() {
    this.filterForm = this.fb.group({
      date_range: [
        {
          startDate: null,
          endDate: null,
        },
      ],
      org_id: [], // "required|exists:users,id",
      status: [], // 'in:active,inactive|nullable',
      search: [], // 'nullable'
    });

    this.filterForm.valueChanges.subscribe(() => {
      this.resetPage();
      this.getSubaccounts();
    });
  }

  resetPage() {
    this.page = 1;
    this.offset = 0;
  }

  setPage(pageInfo) {
    this.page = pageInfo.offset + 1;
    this.offset = pageInfo.offset;
    this.getSubaccounts();
  }

  onSort(event) {
    const sort = event.sorts[0];
    this.columnName = sort.prop;
    this.order = sort.dir;

    this.resetPage();
    this.getSubaccounts();
  }

  getSubaccounts() {
    const params = {
      ...this.pageParams(),
      ...this.sortParams(),
      ...this.filterParams(),
    };

    this.subAccService.getAll(params).subscribe(
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
}
