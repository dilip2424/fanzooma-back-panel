import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Roles } from 'app/roles';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private route: Router,
    private toaster: ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userType = this.authService.currentUserValue?.role;
    const hasAccess = route.data.permissions;

    const isAllowed =
      hasAccess.includes(userType) || hasAccess.includes(Roles.ALLOW_ALL);

    if (isAllowed) return true;

    this.toaster.error('You are not authorized to access this page.', 'error', {
      positionClass: 'toast-bottom-right',
    });
    this.route.navigate(['/dashboard']);

    return false;
  }
}
