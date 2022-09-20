import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { LocationService } from "app/modules/locations/_services/location.service";
import * as moment from "moment";
import { BroadcastService } from "../../_services/broadcast.service";

@Component({
  selector: "app-listing",
  templateUrl: "./listing.component.html",
  styleUrls: [
    "./listing.component.scss",
    "./listing.component.scss",
    "../../../../../assets/sass/libs/select.scss",
    "../../../../../assets/sass/libs/datatables.scss",
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

  public columnName = "";
  public order = "desc";

  public searchTerm = "";
  filterForm: FormGroup;

  isLoadingtable$;

  my_messages = {
    emptyMessage: "Loading...",
    totalMessage: "Broadcasts",
  };

  public rows: Array<any> = [];
  public ColumnMode = ColumnMode;

  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Last 1 Week": [moment().subtract(6, "days"), moment()],
    "Last 28 Days": [moment().subtract(27, "days"), moment()],
    "Last 90 Days": [moment().subtract(89, "days"), moment()],
    "Last 365 Days": [moment().subtract(364, "days"), moment()],
  };

  resetPage() {
    this.page = 1;
    this.offset = 0;
  }

  setPage(pageInfo) {
    this.page = pageInfo.offset + 1;
    this.offset = pageInfo.offset;
    this.getBroadcasts();
  }

  onSort(event) {
    const sort = event.sorts[0];
    this.columnName = sort.prop;
    this.order = sort.dir;

    this.resetPage();
    this.getBroadcasts();
  }

  filterParams() {
    return this.filterForm.value;
  }

  sortParams() {
    return {
      orderByParam: this.columnName,
      orderByType: this.order,
    };
  }

  pageParams() {
    return {
      limit: this.limit,
      page: this.page,
    };
  }

  getBroadcasts() {
    const params = {
      ...this.pageParams(),
      ...this.sortParams(),
      ...this.filterParams(),
    };

    if (params.location) {
      params.location = [params.location];
    }

    this.broadcastService.getAll(params).subscribe(
      (resp: any) => {
        const { data, message } = resp;
        this.rows = data.docs;
        this.count = data.count;
        this.offset = this.page - 1;
        this.currentdocsize = this.rows.length;

        if (this.rows.length == 0) {
          this.my_messages.emptyMessage = "No data found.";
        }
        this.cd.markForCheck();
      },
      (err) => {}
    );
  }

  /** ------------------------------------------------------------------------- */

  locNames = [];

  constructor(
    private broadcastService: BroadcastService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private locService: LocationService
  ) {
    this.isLoadingtable$ = this.broadcastService.isLoadingtable$;
  }

  ngOnInit() {
    this.initFilterForm();
    this.getLocationNames();

    this.filterForm.patchValue({
      location: history.state.location,
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
      location: [], // 'exists:orgs,id|nullable',
      search: [], // 'nullable',
      send_email: [], // 'in:yes,no|nullable',
      send_sms: [], // 'in:yes,no|nullable',
      send_whatsapp: [], // 'in:yes,no|nullable',
    });

    this.filterForm.valueChanges.subscribe(() => {
      this.resetPage();
      this.getBroadcasts();
    });
  }

  getLocationNames() {
    this.locService.getAllNames({}).subscribe(
      (resp: any) => {
        const { data, message } = resp;
        this.locNames = data.docs;
      },
      (err) => {}
    );
  }
}
