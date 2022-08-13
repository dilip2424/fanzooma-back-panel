import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'app/core/models/user.model';
import { Roles } from 'app/roles';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private unsubscribe: Subscription[] = [];
  //for spinner
  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  //for store user detail
  currentUserSubject: BehaviorSubject<any>;
  currentUser$: Observable<any>;
  private apiUrl = environment.apiUrl;

  get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  set currentUserValue(user: any) {
    this.currentUserSubject.next(user);
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
    this.currentUserSubject = new BehaviorSubject<any>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  login(data) {
    this.isLoadingSubject.next(true);

    return this.http.post(`${this.apiUrl}/admin/login`, data).pipe(
      map((auth: any) => {
        const result = this.setStorage(auth.data);
        this.currentUserSubject.next(auth.data.user);
        return auth;
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  checktokenisvalid(data) {
    return this.http.post(`${this.apiUrl}/user/verify/token`, data).pipe(
      map((auth: any) => {
        return auth;
      })
    );
  }

  forgotpassword(data) {
    this.isLoadingSubject.next(true);
    return this.http.post(`${this.apiUrl}/user/reset-password`, data).pipe(
      map((auth: any) => {
        return auth;
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  resetpassword(data) {
    this.isLoadingSubject.next(true);
    return this.http.post(`${this.apiUrl}/user/change/password`, data).pipe(
      map((auth: any) => {
        return auth;
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getUserByToken(): Observable<UserModel> {
    const token = this.getStorage();

    if (!token) {
      return of(undefined);
    } else {
      this.isLoadingSubject.next(true);
      return this.http.get(`${this.apiUrl}/admin/user`, {}).pipe(
        map((user: any) => {
          if (user) {
            this.currentUserSubject = new BehaviorSubject<any>(user?.data);
          } else {
            this.logout();
          }
          return user;
        }),
        finalize(() => this.isLoadingSubject.next(false))
      );
    }
  }

  currentusertype() {
    const user = this.currentUserValue;
    return user.role;
  }

  isAdminCategory() {
    const admins = [1, 2, 5, 6, 7];
    return admins.includes(this.currentUserValue?.type);
  }

  isCRUDAdmin() {
    const admins = [1, 2, 5];
    return admins.includes(this.currentUserValue?.type);
  }

  isNonCRUDAdmin() {
    const admins = [6, 7];
    return admins.includes(this.currentUserValue?.type);
  }

  isEarningAdmin() {
    const admins = [1, 2, 6];
    return admins.includes(this.currentUserValue?.type);
  }

  isNonEarningAdmin() {
    const admins = [5, 7];
    return admins.includes(this.currentUserValue?.type);
  }

  isCreator() {
    const admins = [3];
    return admins.includes(this.currentUserValue?.type);
  }

  isRH() {
    const admins = [4];
    return admins.includes(this.currentUserValue?.type);
  }

  private getStorage(): any {
    try {
      const authData = localStorage.getItem('token');
      return authData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(undefined);
    this.router.navigate(['/login']);
  }

  setStorage(auth: any) {
    if (auth?.token) {
      localStorage.setItem('token', auth.token);
      localStorage.setItem('user_id', auth.user.id);
    }
  }

  clearStorage() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(undefined);
  }
}
