import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "app/modules/not-found/not-found.component";

import { ComingSoonPageComponent } from "./coming-soon/coming-soon-page.component";
import { ErrorPageComponent } from "./error/error-page.component";
import { ForgotPasswordPageComponent } from "./forgot-password/forgot-password-page.component";
import { LockScreenPageComponent } from "./lock-screen/lock-screen-page.component";
import { LoginPageComponent } from "./login/login-page.component";
import { MaintenancePageComponent } from "./maintenance/maintenance-page.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "comingsoon",
        component: ComingSoonPageComponent,
        data: {
          title: "Coming Soon page",
        },
      },

      {
        path: "forgotpassword",
        component: ForgotPasswordPageComponent,
        data: {
          title: "Forgot Password",
        },
      },
      {
        path: "reset-password/:token",
        component: ResetPasswordComponent,
        data: {
          title: "Reset Password",
        },
      },
      {
        path: "lockscreen",
        component: LockScreenPageComponent,
        data: {
          title: "Lock Screen page",
        },
      },
      {
        path: "login",
        component: LoginPageComponent,
        data: {
          title: "Login Page",
        },
      },
      {
        path: "maintenance",
        component: MaintenancePageComponent,
        data: {
          title: "Maintenance Page",
        },
      },
      {
        path: "**",
        component: NotFoundComponent,
        data: {
          title: "Error Page",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentPagesRoutingModule {}
