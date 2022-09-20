import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { BehaviorSubject } from "rxjs";
import { finalize } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
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

  getSettings() {
    this._isLoadingtable$.next(true);
    return this.http.get(`${this.apiUrl}/admin/settings`).pipe(
      finalize(() => {
        this._isLoadingtable$.next(false);
      })
    );
  }

  setTPSettings(body) {
    this._isLoadingtable$.next(true);
    return this.http.post(`${this.apiUrl}/admin/settings/tp`, body).pipe(
      finalize(() => {
        this._isLoadingtable$.next(false);
      })
    );
  }
}
