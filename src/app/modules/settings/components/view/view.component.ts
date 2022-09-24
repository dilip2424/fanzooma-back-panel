import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { SettingsService } from "../../_services/settings.service";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"],
})
export class ViewComponent implements OnInit {
  tpSettings = [];
  isLoading$: any;
  form: FormGroup;
  tpForm: FormGroup;

  constructor(
    private settingsService: SettingsService,
    private cd: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.settingsService.isLoading$;
    this.initForm();
    this.initTPForm();
    this.loadSettings();
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
            console.log(this.form.value);
          }

          dataToObj[d.key] = d.value;
        });

        this.tpForm.patchValue(dataToObj);

        console.log(data);

        this.cd.markForCheck();
      },
      (err) => {}
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
