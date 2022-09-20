import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { PipeModule } from "app/shared/pipes/pipe.module";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { ViewComponent } from "./components/view/view.component";

const routes: Routes = [
  {
    path: "",
    component: ViewComponent,
    data: { title: "Settings" },
  },
];

@NgModule({
  declarations: [ViewComponent],
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
