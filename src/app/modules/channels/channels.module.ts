import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { ListChannelComponent } from './components/list-channel/list-channel.component';
import { AddChannelComponent } from './components/add-channel/add-channel.component';
import { ViewChannelComponent } from './components/view-channel/view-channel.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditChannelComponent } from './components/edit-channel/edit-channel.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';


@NgModule({
  declarations: [
    ListChannelComponent,
    AddChannelComponent,
    ViewChannelComponent,
    EditChannelComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    CommonModule,
    NgxDatatableModule,
    PipeModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot({
      clearLabel: 'Lifetime',
    })
  ]
})
export class ChannelsModule { }
