import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private _isLoading$ = new BehaviorSubject<boolean>(false);
  private _isLoadingtable$ = new BehaviorSubject<boolean>(false);
  private _filterSource = new BehaviorSubject<any>([]);
  filter$ = this._filterSource.asObservable();
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private location: Location) {}

  get isLoading$() {
    return this._isLoading$.asObservable();
  }

  get isLoadingtable$() {
    return this._isLoadingtable$.asObservable();
  }

  getFilters() {
    return this._filterSource.getValue();
  }

  setFilters(filter): void {
    this._filterSource.next(filter);
  }

  getall(params) {
    this._isLoadingtable$.next(true);
    return this.http.post(`${this.apiUrl}/general/account`, params).pipe(
      finalize(() => {
        this._isLoadingtable$.next(false);
      })
    );
  }

  getPlans() {
    this._isLoading$.next(true);
    return this.http.get(`${this.apiUrl}/admin/plans`).pipe(
      finalize(() => {
        this._isLoading$.next(false);
      })
    );
  }
  getallcategory(params) {
    this._isLoadingtable$.next(true);
    return this.http.post(`${this.apiUrl}/general/category`, params).pipe(
      finalize(() => {
        this._isLoadingtable$.next(false);
      })
    );
  }

  getallenergyleavel(params) {
    this._isLoadingtable$.next(true);
    return this.http.post(`${this.apiUrl}/general/energy/level`, params).pipe(
      finalize(() => {
        this._isLoadingtable$.next(false);
      })
    );
  }

  creatorrightholder(params) {
    this._isLoadingtable$.next(true);
    return this.http
      .post(`${this.apiUrl}/general/creator/rights/holder`, params)
      .pipe(
        finalize(() => {
          this._isLoadingtable$.next(false);
        })
      );
  }

  getallchannel(params) {
    this._isLoadingtable$.next(true);
    return this.http.post(`${this.apiUrl}/general/channel`, params).pipe(
      finalize(() => {
        this._isLoadingtable$.next(false);
      })
    );
  }

  getallartist() {
    return this.http.get(`${this.apiUrl}/general/artist`);
  }

  getallcontracts(params) {
    return this.http.post(`${this.apiUrl}/general/contract`, params);
  }

  getactivecontract(params) {
    return this.http.post(
      `${this.apiUrl}/general/rights/holders/contract`,
      params
    );
  }

  verifychennal(params) {
    this._isLoadingtable$.next(true);
    return this.http.post(`${this.apiUrl}/general/channel/info`, params).pipe(
      finalize(() => {
        this._isLoadingtable$.next(false);
      })
    );
  }

  accesstoken(channel_id, json) {
    return this.http.put(
      `${this.apiUrl}/channel/access-token/${channel_id}`,
      json
    );
  }

  getAccessToken(code, redirect_uri) {
    return this.http.post(`${this.apiUrl}/channel/google/access-token`, {
      code,
      redirect_uri,
    });
  }

  getGoogleAuth(redirect_uri, state = '') {
    return this.http.post(`${this.apiUrl}/channel/google/code`, {
      redirect_uri,
      state,
    });
  }
}
