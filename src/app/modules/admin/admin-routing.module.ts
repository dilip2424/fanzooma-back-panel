import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'app/core/service/guard/permission.guard';
import { AddNewComponent } from './components/add-new/add-new.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { Roles } from 'app/roles';

const routes: Routes = [
  {
    path: '',
    component: AdminListComponent,
    data: { title: 'Admins' },
  },
  {
    path: 'add-new',
    component: AddNewComponent,
    data: { title: 'Admins' },
  },
  {
    path: 'edit/:id',
    component: AddNewComponent,
    data: { title: 'Admins' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
