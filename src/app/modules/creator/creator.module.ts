import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorRoutingModule } from './creator-routing.module';
import { AddCreatorComponent } from './components/add-creator/add-creator.component';
import { CreatorListComponent } from './components/creator-list/creator-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { ViewCreatorComponent } from './view-creator/view-creator.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { InvitationFormComponent } from './components/invitation-form/invitation-form.component';


@NgModule({
  declarations: [
    AddCreatorComponent,
    CreatorListComponent,
    ViewCreatorComponent,
    InvitationFormComponent,

  ],
  imports: [
    CreatorRoutingModule,
    CommonModule,
    NgxDatatableModule,
    PipeModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    NgxDaterangepickerMd.forRoot({
      clearLabel: 'Lifetime',
    })
  ]
})
export class CreatorModule { }
