import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CreatorService {
  private _isLoading$ = new BehaviorSubject<boolean>(false);
  private _isLoadingtable$ = new BehaviorSubject<boolean>(false);
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  get isLoading$() {
    return this._isLoading$.asObservable();
  }

  get isLoadingtable$() {
    return this._isLoadingtable$.asObservable();
  }

  create(admin: any) {
    this._isLoading$.next(true);
    return this.http.post(`${this.apiUrl}/creator/add`, admin).pipe(
      finalize(() => {
        this._isLoading$.next(false);
      })
    );
  }

  getall(params) {
    this._isLoadingtable$.next(true);
    return this.http.post(`${this.apiUrl}/admin/organization/all`, params).pipe(
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
    return this.http.put(`${this.apiUrl}/creator/change-status/${id}`, {
      status,
    });
  }

  getById(id) {
    return this.http.patch(`${this.apiUrl}/creator/detail/${id}`, {});
  }

  update(admin: any, id) {
    this._isLoading$.next(true);
    return this.http.put(`${this.apiUrl}/creator/${id}`, admin).pipe(
      finalize(() => {
        this._isLoading$.next(false);
      })
    );
  }

  sendInvitationLink(params) {
    this._isLoading$.next(true);
    return this.http
      .post(`${this.apiUrl}/creator/invitation-send`, params)
      .pipe(
        finalize(() => {
          this._isLoading$.next(false);
        })
      );
  }
}
