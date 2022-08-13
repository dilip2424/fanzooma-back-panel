import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { AddNewComponent } from './components/add-new/add-new.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [
    AdminListComponent,
    AddNewComponent,
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    PipeModule,
    AdminRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot({
      clearLabel: 'Lifetime',
    })

  ]
})
export class AdminModule { }
