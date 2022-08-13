import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from 'app/shared/directives/match-height.directive';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CreatorComponent } from './dashboard-listing/creator/creator.component';
import { RightHolderComponent } from './dashboard-listing/right-holder/right-holder.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CreatorComponent,
    RightHolderComponent,
    MainDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    NgxChartsModule,
    NgbModule,
    MatchHeightModule,
    CommonModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot({
      clearLabel: 'Lifetime',
    })
  ]
})
export class DashboardModule { }
