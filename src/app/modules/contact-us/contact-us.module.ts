import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContactUsRoutingModule } from "./contact-us-routing.module";
import { ContactUsListingComponent } from "./components/contact-us-listing/contact-us-listing.component";
import { AddContactUsComponent } from "./components/add-contact-us/add-contact-us.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ReadMoreComponent } from "./components/contact-us-listing/read-more.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { StatusChangeComponent } from './components/status-change/status-change.component';

@NgModule({
  declarations: [
    ContactUsListingComponent,
    AddContactUsComponent,
    ReadMoreComponent,
    StatusChangeComponent,
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
  ],
})
export class ContactUsModule {}
