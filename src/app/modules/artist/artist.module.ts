import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { ArtistViewComponent } from './components/artist-view/artist-view.component';
import { ArtistAddComponent } from './components/artist-add/artist-add.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';


@NgModule({
  declarations: [
    ArtistListComponent,
    ArtistViewComponent,
    ArtistAddComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
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
export class ArtistModule { }
