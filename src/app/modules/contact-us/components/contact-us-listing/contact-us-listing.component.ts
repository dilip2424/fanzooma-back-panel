import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { AuthService } from "app/core/service/auth/auth.service";
import { ToastrService } from "ngx-toastr";
import { ContactUsService } from "../../_services/contact-us.service";

@Component({
  selector: "app-contact-us-listing",
  templateUrl: "./contact-us-listing.component.html",
  styleUrls: [
    "./contact-us-listing.component.scss",
    "../../../../../assets/sass/libs/select.scss",
    "../../../../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ContactUsListingComponent implements OnInit {
  public rows: Array<any> = [];
  my_messages = {
    emptyMessage: "Loading...",
    totalMessage: "Inquires",
  };
  public ColumnMode = ColumnMode;

  public count: any;
  public page: number = 1;
  public offset = 0;
  public limit: number = 10;

  public search = "";
  public nameSort = "";
  public subjectSort = "";
  public messageSort = "";
  public createdAtSort = "1";

  public ascDesc = "-1";
  public isLoadingtable$;
  role: any;
  constructor(
    private contactUsService: ContactUsService,
    private toastr: ToastrService,
    public authservice: AuthService,
  ) {
    this.isLoadingtable$ = this.contactUsService.isLoadingTable$;
  }

  ngOnInit(): void {
    this.role = this.authservice.currentusertype();
    this.getAllContactUs("init");
  }

  getAllContactUs(type = "defaut") {

    const params = {
      limit: this.limit,
      page: this.page,
      search: this.search,
      nameSort: this.nameSort,
      subjectSort: this.subjectSort,
      messageSort: this.messageSort,
      createdAtSort: this.createdAtSort,
      ascDesc: this.ascDesc,
    };

    this.contactUsService.getContactUs(params).subscribe(
      (response) => {
        if (response["result"]) {
          this.rows = response["result"].docs;
          this.count = response["result"].totalDocs;
          this.offset = response["result"].page - 1;

          if (this.rows.length == 0) {
            this.my_messages.emptyMessage = "No data found.";
          }
        }
      },
      (err) => {
      }
    );
  }

  /**
   * Populate the table with new data based on the page number
   * Filter option
   */
  filterUpdate(event) {
    this.page = 1;
    this.offset = 0;
    const val = event.target.value.toLowerCase();

    this.search = val;
    this.getAllContactUs();
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
      this.subjectSort =
      this.messageSort =
      this.createdAtSort =
      "";

    switch (prop) {
      case "creatorData.name":
        this.nameSort = "1";
        break;
      case "message":
        this.messageSort = "1";
        break;
      case "createdAt":
        this.createdAtSort = "1";
        break;
      case "subject":
        this.subjectSort = "1";
        break;

      default:
        this.createdAtSort = "1";
    }
    if (dir == "asc") {
      this.ascDesc = "1";
    }
    if (dir == "desc") {
      this.ascDesc = "-1";
    }

    this.getAllContactUs("sort");
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page = pageInfo.offset + 1;
    this.offset = pageInfo.offset;

    this.getAllContactUs("page");
  }

  changeStatus(event, id) {
    if (event.target.value) {
      this.contactUsService
        .setStatus(id, { status: event.target.value })
        .subscribe((response) => {
          this.toastr.success("Status has been updated.", "Success", {
            positionClass: "toast-top-right",
          });
          this.getAllContactUs("change stauts");
        });
    }
  }
}
