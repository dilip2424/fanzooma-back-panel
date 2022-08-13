import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    UpdateProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgxDatatableModule,
    PipeModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ProfileModule { }
