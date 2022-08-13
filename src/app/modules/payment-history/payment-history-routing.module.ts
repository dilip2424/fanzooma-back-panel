import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PermissionGuard } from "app/core/service/guard/permission.guard";
import { LandingComponent } from "./components/landing/landing.component";

const routes: Routes = [
  {
    path: "landing-page",
    component: LandingComponent,
    data: { title: "Payment History" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentHistoryRoutingModule {}
