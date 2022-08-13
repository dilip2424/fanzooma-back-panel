import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PaymentHistoryRoutingModule } from "./payment-history-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatchHeightModule } from "app/shared/directives/match-height.directive";
import { PipeModule } from "app/shared/pipes/pipe.module";
import { ChartsModule } from "ng2-charts";
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { LandingComponent } from "./components/landing/landing.component";

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    PaymentHistoryRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    PipeModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ChartsModule,
    NgxChartsModule,
    MatchHeightModule,
    NgxDaterangepickerMd.forRoot({
      clearLabel: "Lifetime",
    }),
  ],
})
export class PaymentHistoryModule {}
