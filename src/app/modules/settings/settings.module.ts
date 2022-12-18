import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { LazyLoadImageModule } from "ng-lazyload-image";
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { PipeModule } from "../../shared/pipes/pipe.module";
import { ViewComponent } from "./components/view/view.component";
import { AddPlanComponent } from './components/add-plan/add-plan.component';

const routes: Routes = [
  {
    path: "",
    component: ViewComponent,
    data: { title: "Settings" },
  },
  {
    path: "add-new",
    component: AddPlanComponent,
    data: { title: "Settings" },
  },
];

@NgModule({
  declarations: [ViewComponent, AddPlanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    PipeModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    NgxDaterangepickerMd.forRoot({
      clearLabel: "Lifetime",
    }),
  ],
  exports: [RouterModule],
})
export class SettingsModule {}
