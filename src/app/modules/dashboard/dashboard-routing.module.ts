import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'app/core/service/guard/permission.guard';
import { DashboardComponent } from './dashboard.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainDashboardComponent,
    canActivate: [PermissionGuard],
    data: {
      title: 'Dashboard',
      permissionS: "ALLOW-ALL"
    }
  },
  // {
  //   path: ':id',
  //   component: MainDashboardComponent,
  //   data: {
  //     title: 'Dashboard'
  //   }
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
