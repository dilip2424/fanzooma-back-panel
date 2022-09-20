import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { environment } from "environments/environment";
import * as moment from "moment";
import swal from "sweetalert2";
import { OrganizationService } from "../../_services/organization.service";
import { PlanService } from "../../_services/plan.service";

@Component({
  selector: "app-listing",
  templateUrl: "./listing.component.html",
  styleUrls: [
    "./listing.component.scss",
    "../../../../../assets/sass/libs/select.scss",
    "../../../../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ListingComponent implements OnInit {
  public count: any;
  public page: number = 1;
  public limit: number = 10;
  public offset = 0;
  public currentdocsize = 0;

  public columnName = "";
  public order = "desc";

  public searchTerm = "";
  filterForm: FormGroup;

  public plans: any = [];

  isLoadingtable$;

  my_messages = {
    emptyMessage: "Loading...",
    totalMessage: "Organizations",
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

  constructor(
    private orgService: OrganizationService,
    private cd: ChangeDetectorRef,
    private planService: PlanService,
    private fb: FormBuilder
  ) {
    this.isLoadingtable$ = this.orgService.isLoadingtable$;
  }

  ngOnInit() {
    this.initFilterForm();
    this.getOrganizations();
    this.getPlans();
  }

  getPlans() {
    this.planService.getPlans().subscribe(
      (resp: any) => {
        const { data, message } = resp;
        this.plans = data;
        this.cd.markForCheck();
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
      search: [],
      status: [],
      is_subscribed: [],
      cancelled_plan: [],
      plan: [],
    });

    this.filterForm.valueChanges.subscribe(() => {
      this.resetPage();
      this.getOrganizations();
    });
  }

  getPlanName(id) {
    const plan = this.plans.find((plan) => plan.id == id);
    return plan?.name;
  }

  resetPage() {
    this.page = 1;
    this.offset = 0;
  }

  setPage(pageInfo) {
    this.page = pageInfo.offset + 1;
    this.offset = pageInfo.offset;
    this.getOrganizations();
  }

  onSort(event) {
    const sort = event.sorts[0];
    this.columnName = sort.prop;
    this.order = sort.dir;

    this.resetPage();
    this.getOrganizations();
  }

  getOrganizations() {
    const params = {
      ...this.pageParams(),
      ...this.sortParams(),
      ...this.filterParams(),
    };

    this.orgService.getAll(params).subscribe(
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

  orgLogin(id) {
    this.orgService.login(id).subscribe((resp: any) => {
      window.open(`${environment.frontUrl}?token=${resp.data.token}`, "_blank");
    });
  }

  changestatus(id, status) {
    let titlestatus = "Active";
    let sendstatus = "active";
    if (status == "active") {
      titlestatus = "Inactive";
      sendstatus = "inactive";
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
          this.orgService
            .changestatus(id, sendstatus)
            .subscribe((data: any) => {
              this.getOrganizations();
            });
        }
      });
  }
}
