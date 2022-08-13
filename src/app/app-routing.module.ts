import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GoogleAuthComponent } from "./core/google-auth/google-auth.component";

import { AuthGuard } from "./core/service/guard/auth.guard";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { NotFoundComponent } from "./modules/not-found/not-found.component";

import { Full_ROUTES } from "./routes/full-layout.routes";

const appRoutes: Routes = [
  {
    path: "",
    component: FullLayoutComponent,
    children: Full_ROUTES,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: "",
    component: ContentLayoutComponent,
    loadChildren: () =>
      import("./pages/content-pages/content-pages.module").then(
        (m) => m.ContentPagesModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: "legacy" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
