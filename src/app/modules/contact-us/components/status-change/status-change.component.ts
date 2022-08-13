import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { ContactUsService } from "../../_services/contact-us.service";

@Component({
  selector: "app-status-change",
  templateUrl: "./status-change.component.html",
  styleUrls: ["./status-change.component.scss"],
})
export class StatusChangeComponent implements OnInit, OnDestroy, OnChanges {
  @Input() statusId: number;
  @Input() contactUsId: number;

  public isLoading$;
  public statusChangeForm = new FormGroup({
    status: new FormControl(null),
  });
  public statusSubscription: Subscription;

  constructor(private contactUsService: ContactUsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.statusId = changes.statusId.currentValue ?? this.statusId;
    this.contactUsId = changes.contactUsId.currentValue ?? this.contactUsId;
    this.statusChangeForm.get("status").setValue(this.statusId);
  }

  ngOnDestroy(): void {
    this.statusSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.isLoading$ = this.contactUsService.isLoading$;

    this.statusChangeForm.get("status").setValue(this.statusId);
    this.statusSubscription = this.statusChangeForm
      .get("status")
      .valueChanges.subscribe((statusId) => {
        this.contactUsService
          .setStatus(this.contactUsId, { status: statusId })
          .subscribe((response) => {});
      });
  }

  getStatusFromId(statusId) {
    switch (statusId) {
      case 1:
        return "NEW";
      case 2:
        return "NOTED";
      case 3:
        return "IN-PROGRESS";
      case 4:
        return "COMPLETED";
    }
  }
}
