import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './components/listing/listing.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

const routes: Routes = [
  {
    path: '',
    component: ListingComponent,
    data: { title: 'Fans' },
  },
];

@NgModule({
  declarations: [ListingComponent],
  imports: [
    RouterModule.forChild(routes),
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
    }),
  ],
  exports: [RouterModule],
})
export class FansModule {}
