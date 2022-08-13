import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCreatorComponent } from "./components/add-creator/add-creator.component";
import { CreatorListComponent } from "./components/creator-list/creator-list.component";
import { InvitationFormComponent } from "./components/invitation-form/invitation-form.component";
import { ViewCreatorComponent } from "./view-creator/view-creator.component";

const routes: Routes = [
  {
    path: "",
    component: CreatorListComponent,
    data: { title: "Creators / Channel Owners" },
  },
  {
    path: "profile",
    component: ViewCreatorComponent,
    data: { title: "Creators / Channel Owners" },
  },
  {
    path: "add-new",
    component: AddCreatorComponent,
    data: { title: "Creators / Channel Owners" },
  },
  {
    path: "edit/:id",
    component: AddCreatorComponent,
    data: { title: "Creators / Channel Owners" },
  },
  {
    path: "view/:id",
    component: ViewCreatorComponent,
    data: { title: "Creators / Channel Owners" },
  },
  {
    path: "invite",
    component: InvitationFormComponent,
    data: { title: "Invite Creator" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatorRoutingModule {}
