import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "app/core/service/auth/auth.service";
import { environment } from "environments/environment";
import { BehaviorSubject } from "rxjs";
import { finalize } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  private _isLoading$ = new BehaviorSubject<boolean>(false);
  private _isLoadingtable$ = new BehaviorSubject<boolean>(false);

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private authService: AuthService) {}

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
    const role = this.authService.currentusertype();
    let paginateAPI = `${this.apiUrl}/dashboard/creator/paginate`;
    if (role == "right_holder") {
      paginateAPI = `${this.apiUrl}/dashboard/rights/holder/paginate`;
    }
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
    const role = this.authService.currentusertype();
    let paginateAPI = `${this.apiUrl}/dashboard/rights/holder/graph`;
    return this.http.post(paginateAPI, params).pipe(
      finalize(() => {
        this._isLoadingtable$.next(false);
      })
    );
  }
}
