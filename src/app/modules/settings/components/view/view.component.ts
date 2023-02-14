import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ColumnMode } from "@swimlane/ngx-datatable";
import * as moment from "moment";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";
import { AdminService } from "../../../admin/_services/admin.service";
import { SettingsService } from "../../_services/settings.service";
import swal from 'sweetalert2';
@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss", '../../../../../assets/sass/libs/select.scss',
    '../../../../../assets/sass/libs/datatables.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ViewComponent implements OnInit {
  tpSettings = [];
  isLoading$: any;
  form: FormGroup;
  tpForm: FormGroup;

  isOpen = false;
  @ViewChild('customizer') customizer: ElementRef;

  //paginatin start
  public page: number = 1;
  public count: any;
  public limit: number = 10;
  public searchTerm = '';
  public columnName = '';
  public offset = 0;
  public currentdocsize = 0;
  public order = 'desc';
  public orderByParam = ""
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
    totalMessage: 'Plans',
  };


  /**
   * Constructor
   *
   * @param {HttpClient} http
   */


  constructor(
    private renderer: Renderer2,
    private http: HttpClient,
    private adminservice: AdminService,
    private settingsService: SettingsService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.isLoadingtable$ = this.adminservice.isLoadingtable$;


  }





  filterForm() {
    this.filterGroup = this.fb.group({
      type : [],
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
    this.orderByParam = prop;
    this.order = dir;
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


  gettotalprice(price){
   
    var char = price.charAt(price.length-1);
    
    let finalprice = price;
    if(char == 0){
      finalprice = price.substring(0,price.length-1);
    }else{
      finalprice = price;
    }
    
    return finalprice;
  }
  getadminlist() {
    const params = {
      limit: this.limit,
      page: this.page,
      orderByParam: this.orderByParam,
      orderByType : this.order,
      ...this.filterGroup.value,
    };

    this.settingsService.getAll(params).subscribe(
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
      (err) => { }
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
          this.settingsService
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
          this.settingsService.delete(id).subscribe((data: any) => {
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


  ngOnInit(): void {
    this.isLoading$ = this.settingsService.isLoading$;
    this.initForm();
    this.initTPForm();
    this.loadSettings();
    this.filterForm();
    this.getadminlist();
  }

  initForm() {
    this.form = new FormGroup({
      0: new FormControl(null, [Validators.required]),
      1: new FormControl(null, [Validators.required]),
      2: new FormControl(null, [Validators.required]),
      3: new FormControl(null, [Validators.required]),
      4: new FormControl(null, [Validators.required]),
      5: new FormControl(null, [Validators.required]),
      6: new FormControl(null, [Validators.required]),
    });
  }

  initTPForm() {
    this.tpForm = new FormGroup({
      sms: new FormControl(null, [Validators.required]),
      mms: new FormControl(null, [Validators.required]),
      reply_message: new FormControl(null, [Validators.required]),
    });
  }

  loadSettings() {
    this.settingsService.getSettings().subscribe(
      (resp: any) => {
        const { data, message } = resp;
        const dataToObj = {};
        data.forEach((d) => {
          if (d.key == "tp_price_structure") {
            this.tpSettings = JSON.parse(d.value);
            const prices = this.tpSettings.map((ts) => ts.price);
            const pricesObj = {};
            prices.forEach((p, i) => {
              pricesObj[i.toString()] = p;
            });
            this.form.patchValue(pricesObj);
          
          }

          dataToObj[d.key] = d.value;
        });

        this.tpForm.patchValue(dataToObj);

        this.cd.markForCheck();
      },
      (err) => { }
    );
  }

  saveTPCounts() {
    if (this.tpForm.invalid) return;

    const value = this.tpForm.value;
    this.settingsService
      .setTPCounts({
        ...value,
      })
      .subscribe(
        (resp: any) => {
          this.loadSettings();
          this.toastr.success(resp.message, "Success", {
            positionClass: "toast-top-right",
          });
        },
        (err) => {
          this.toastr.error("Cannot update at the moment", "Error", {
            positionClass: "toast-top-right",
          });
        }
      );
  }

  save() {
    if (this.form.invalid) return;

    const updatedTP = [...this.tpSettings];
    const value = this.form.value;
    for (let key in value) {
      const ind = parseInt(key);
      updatedTP[ind].price = value[key];
    }
    this.settingsService
      .setTPSettings({
        tp_price_structure: JSON.stringify(updatedTP),
      })
      .subscribe(
        (resp: any) => {
          this.loadSettings();
          this.toastr.success(resp.message, "Success", {
            positionClass: "toast-top-right",
          });
        },
        (err) => {
          this.toastr.error("Cannot update at the moment", "Error", {
            positionClass: "toast-top-right",
          });
        }
      );
  }
}
