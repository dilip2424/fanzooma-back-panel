import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PendingChangesGuard } from "app/core/service/guard/pending-changes.guard";
import { AddChannelComponent } from "./components/add-channel/add-channel.component";
import { EditChannelComponent } from "./components/edit-channel/edit-channel.component";
import { ListChannelComponent } from "./components/list-channel/list-channel.component";
import { ViewChannelComponent } from "./components/view-channel/view-channel.component";

const routes: Routes = [
  {
    path: "",
    component: ListChannelComponent,
    data: { title: "Channels" },
  },
  {
    path: "add-new",
    component: AddChannelComponent,
    pathMatch: "full",
    data: {
      title: "Channels",
    },
    canDeactivate: [PendingChangesGuard],
  },
  {
    path: "creator/:creator_id",
    component: ListChannelComponent,
    data: { title: "Channels" },
  },
  {
    path: "right-holder/:rights_holder_id",
    component: ListChannelComponent,
    data: { title: "Channels" },
  },
  {
    path: "edit/:id",
    component: EditChannelComponent,
    data: {
      title: "Channels",
    },
  },
  {
    path: "view/:id",
    component: ViewChannelComponent,
    data: {
      title: "Channels",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelsRoutingModule {}
