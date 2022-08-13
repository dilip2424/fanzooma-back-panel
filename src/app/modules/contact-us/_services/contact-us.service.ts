import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { BehaviorSubject } from "rxjs";
import { finalize, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ContactUsService {
  private _isLoading$ = new BehaviorSubject<boolean>(false);
  private _isLoadingTable$ = new BehaviorSubject<boolean>(false);

  private _badgeCount$ = new BehaviorSubject<number>(0);
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get isLoading$() {
    return this._isLoading$.asObservable();
  }

  get isLoadingTable$() {
    return this._isLoadingTable$.asObservable();
  }

  get badgeCount$() {
    return this._badgeCount$.asObservable();
  }

  addContactUs(contactData: { subject: string; messge: string }) {
    this._isLoading$.next(true);
    return this.http.post(`${this.apiUrl}/contact-us/add`, contactData).pipe(
      finalize(() => {
        this._isLoading$.next(false);
      })
    );
  }

  getContactUs(params) {
    this._isLoadingTable$.next(true);
    return this.http.post(`${this.apiUrl}/contact-us`, params).pipe(
      finalize(() => {
        this._isLoadingTable$.next(false);
      })
    );
  }

  setStatus(id, body) {
    this._isLoading$.next(true);
    return this.http
      .put(`${this.apiUrl}/contact-us/change-status/${id}`, body)
      .pipe(
        finalize(() => {
          this._isLoading$.next(false);
          this.getBadgeCount();
        })
      );
  }

  getBadgeCount() {
    this._isLoading$.next(true);
    return this.http
      .get(`${this.apiUrl}/contact-us/badge/count`)
      .pipe(
        finalize(() => {
          this._isLoading$.next(false);
        }),
      ).subscribe((response: any) => {
        this._badgeCount$.next(response.result);
      });
  }
}
