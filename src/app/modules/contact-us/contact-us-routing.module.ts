import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddContactUsComponent } from "./components/add-contact-us/add-contact-us.component";
import { ContactUsListingComponent } from "./components/contact-us-listing/contact-us-listing.component";

const routes: Routes = [
  {
    path: "",
    component: ContactUsListingComponent,

    data: {
      title: "Contact Us",
    },
  },
  {
    path: "add-new",
    component: AddContactUsComponent,

    data: {
      title: "Contact Us",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactUsRoutingModule {}
