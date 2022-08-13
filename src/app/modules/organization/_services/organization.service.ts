import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
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

  getAll(params) {
    this._isLoadingtable$.next(true);
    return this.http.post(`${this.apiUrl}/admin/organization/all`, params).pipe(
      finalize(() => {
        this._isLoadingtable$.next(false);
      })
    );
  }

  getAllNames(params) {
    this._isLoadingtable$.next(true);
    return this.http
      .post(`${this.apiUrl}/admin/organization/all-names`, params)
      .pipe(
        finalize(() => {
          this._isLoadingtable$.next(false);
        })
      );
  }

  changestatus(id, status) {
    return this.http.put(`${this.apiUrl}/admin/organization/status/${id}`, {
      status,
    });
  }

  getById(id) {
    return this.http.post(`${this.apiUrl}/admin/organization/${id}`, {});
  }
}
