import { Routes, RouterModule } from '@angular/router';
import { PermissionGuard } from 'app/core/service/guard/permission.guard';
import { Roles } from 'app/roles';
const { ALLOW_ALL, SUPER_ADMIN, ADMIN } = Roles;

//Route for content layout with sidebar, navbar and footer.
export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    data: { permissions: [ALLOW_ALL] },
    canActivate: [PermissionGuard],
    loadChildren: () =>
      import('app/modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'admins',
    data: { permissions: [SUPER_ADMIN, ADMIN] },
    canActivate: [PermissionGuard],
    loadChildren: () =>
      import('app/modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'organization',
    loadChildren: () =>
      import('app/modules/organization/organization.module').then(
        (m) => m.OrganizationModule
      ),
  },
  {
    path: 'sub-account',
    loadChildren: () =>
      import('app/modules/sub-account/sub-account.module').then(
        (m) => m.SubAccountModule
      ),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('app/modules/locations/locations.module').then(
        (m) => m.LocationsModule
      ),
  },
  {
    path: 'clubs',
    loadChildren: () =>
      import('app/modules/clubs/clubs.module').then((m) => m.ClubsModule),
  },
  {
    path: 'fans',
    loadChildren: () =>
      import('app/modules/fans/fans.module').then((m) => m.FansModule),
  },
  {
    path: 'broadcasts',
    loadChildren: () =>
      import('app/modules/broadcast/broadcast.module').then(
        (m) => m.BroadcastModule
      ),
  },

  /************************************* */
  {
    path: 'artists',
    loadChildren: () =>
      import('app/modules/artist/artist.module').then((m) => m.ArtistModule),
  },
  {
    path: 'admin/profile',
    loadChildren: () =>
      import('app/modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'payment-history',
    loadChildren: () =>
      import('app/modules/payment-history/payment-history.module').then(
        (m) => m.PaymentHistoryModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('app/modules/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
];
