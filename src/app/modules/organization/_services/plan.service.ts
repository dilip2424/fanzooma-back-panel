import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
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

  getPlans() {
    this._isLoading$.next(true);
    return this.http.get(`${this.apiUrl}/admin/plans`).pipe(
      finalize(() => {
        this._isLoading$.next(false);
      })
    );
  }
}
