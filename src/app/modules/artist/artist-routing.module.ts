import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArtistAddComponent } from "./components/artist-add/artist-add.component";
import { ArtistListComponent } from "./components/artist-list/artist-list.component";
import { ArtistViewComponent } from "./components/artist-view/artist-view.component";

import { Roles } from "app/roles";
const { ADMIN } = Roles;

const routes: Routes = [
  {
    path: "",
    component: ArtistListComponent,
    data: { title: "Speaker" },
  },
  {
    path: "view/:id",
    component: ArtistViewComponent,
    data: {
      title: "Speaker",
    },
  },
  {
    path: "add-new",
    component: ArtistAddComponent,
    data: {
      title: "Speaker",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistRoutingModule {}
