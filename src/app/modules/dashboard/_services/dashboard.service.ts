import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


import { BehaviorSubject } from "rxjs";
import { finalize } from "rxjs/operators";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  private _isLoading$ = new BehaviorSubject<boolean>(false);
  private _isLoadingtable$ = new BehaviorSubject<boolean>(false);

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  get isLoading$() {
    return this._isLoading$.asObservable();
  }

  get isLoadingtable$() {
    return this._isLoadingtable$.asObservable();
  }

  getaccountdata(params) {
    return this.http.post(`${this.apiUrl}/dashboard/account`, params);
  }
  getcontentdata(params) {
    return this.http.post(`${this.apiUrl}/dashboard/content`, params);
  }
  getrevenuedata(params) {
    return this.http.post(`${this.apiUrl}/dashboard/revenue`, params);
  }

  getcounts() {
    this._isLoading$.next(true);
    return this.http.get(`${this.apiUrl}/admin/getcounts`).pipe(
      finalize(() => {
        this._isLoading$.next(false);
      })
    );
  }
  getallDataGraphAccount(params) {
    this._isLoadingtable$.next(true);
    return this.http
      .post(`${this.apiUrl}/dashboard/account/all/request`, params)
      .pipe(
        finalize(() => {
          this._isLoadingtable$.next(false);
        })
      );
  }
  getallDataGraphContent(params) {
    this._isLoadingtable$.next(true);
    return this.http
      .post(`${this.apiUrl}/dashboard/content/all/request`, params)
      .pipe(
        finalize(() => {
          this._isLoadingtable$.next(false);
        })
      );
  }
  getallDataGraphRevenue(params) {
    this._isLoadingtable$.next(true);
    return this.http
      .post(`${this.apiUrl}/dashboard/revenue/all/request`, params)
      .pipe(
        finalize(() => {
          this._isLoadingtable$.next(false);
        })
      );
  }
  getDashboardTableListing(params) {
    this._isLoading$.next(true);

    let paginateAPI = `${this.apiUrl}/dashboard/creator/paginate`;

    return this.http.post(paginateAPI, params).pipe(
      finalize(() => {
        this._isLoading$.next(false);
      })
    );
  }

  getDashboardCreatorGraph(params) {
    this._isLoadingtable$.next(true);
    let paginateAPI = `${this.apiUrl}/dashboard/creator/graph`;
    return this.http.post(paginateAPI, params).pipe(
      finalize(() => {
        this._isLoadingtable$.next(false);
      })
    );
  }

  getDashboardRightHolderGraph(params) {
    this._isLoadingtable$.next(true);

    let paginateAPI = `${this.apiUrl}/dashboard/rights/holder/graph`;
    return this.http.post(paginateAPI, params).pipe(
      finalize(() => {
        this._isLoadingtable$.next(false);
      })
    );
  }
}
