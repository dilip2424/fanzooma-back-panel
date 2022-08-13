import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authservice: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggedIn()) {
      return true
    }
    return false;
  }

  canLoad() {
    return this.isLoggedIn()
  }

  isLoggedIn(): boolean {
    const currentUser = this.authservice.currentUserValue;

    const hasToken = localStorage.getItem('token');
    if (currentUser && hasToken) {
      return true;
    }
    this.authservice.logout()
    return false;
  }
}