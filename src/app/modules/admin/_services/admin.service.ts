import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterService } from 'app/core/service/FilterService.service';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService extends FilterService {
  private _isLoading$ = new BehaviorSubject<boolean>(false);
  private _isLoadingtable$ = new BehaviorSubject<boolean>(false);

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
    super();
  }

  get isLoading$() {
    return this._isLoading$.asObservable();
  }

  get isLoadingtable$() {
    return this._isLoadingtable$.asObservable();
  }

  create(admin: any) {
    this._isLoading$.next(true);
    return this.http.post(`${this.apiUrl}/user/add`, admin).pipe(
      finalize(() => {
        this._isLoading$.next(false);
      })
    );
  }

  getAll(params) {
    this._isLoadingtable$.next(true);
    return this.http.post(`${this.apiUrl}/admin/user/all`, params).pipe(
      finalize(() => {
        this._isLoadingtable$.next(false);
      })
    );
  }

  delete(id) {
    return this.http.put(`${this.apiUrl}/user/change-status/${id}`, {
      status: 3,
    });
    // return this.http.delete(`${this.apiUrl}/user/${id}`);
  }

  changestatus(id, status) {
    return this.http.put(`${this.apiUrl}/user/change-status/${id}`, { status });
  }

  getById(id) {
    return this.http.patch(`${this.apiUrl}/user/detail/${id}`, {});
  }

  updateBasicProfile(body) {
    this._isLoading$.next(true);

    return this.http
      .post(`${this.apiUrl}/admin/user/profile-update`, body)
      .pipe(
        finalize(() => {
          this._isLoading$.next(false);
        })
      );
  }

  updateBasicImage(body) {
    this._isLoading$.next(true);

    return this.http
      .post(`${this.apiUrl}/admin/user/profile-update`, body)
      .pipe(
        finalize(() => {
          this._isLoading$.next(false);
        })
      );
  }

  updatePassword(body) {
    this._isLoading$.next(true);

    return this.http
      .post(`${this.apiUrl}/admin/user/profile-password`, body)
      .pipe(
        finalize(() => {
          this._isLoading$.next(false);
        })
      );
  }
}
