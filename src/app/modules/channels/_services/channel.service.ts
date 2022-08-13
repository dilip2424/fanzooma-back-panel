import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterService } from 'app/core/service/FilterService.service';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ChannelService extends FilterService {
    private _isLoading$ = new BehaviorSubject<boolean>(false);
    private _isLoadingDelete$ = new BehaviorSubject<boolean>(false);
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

    get isLoadingDelete$() {
      return this._isLoadingDelete$.asObservable();
    }

    create(admin: any) {
        this._isLoading$.next(true);
        return this.http.post(`${this.apiUrl}/channel/add`, admin).pipe(
            finalize(() => {
                this._isLoading$.next(false)
            })
        );
    }

    getall(params) {
        this._isLoadingtable$.next(true);
        return this.http.post(`${this.apiUrl}/channel`, params).pipe(
            finalize(() => {
                this._isLoadingtable$.next(false)
            })
        );
    }

    delete(id) {
        this._isLoadingDelete$.next(true);
        return this.http.put(`${this.apiUrl}/channel/change-status/${id}`, { status: 3 }).pipe(finalize(() => {
          this._isLoadingDelete$.next(false);
        }));
        // return this.http.delete(`${this.apiUrl}/user/${id}`);
    }

    changestatus(id, status) {
        return this.http.put(`${this.apiUrl}/channel/change-status/${id}`, { status });
    }

    getById(id) {
        return this.http.patch(`${this.apiUrl}/channel/detail/${id}`, {});
    }

    update(admin: any, id: any) {
        this._isLoading$.next(true);
        return this.http.put(`${this.apiUrl}/channel/${id}`, admin).pipe(
            finalize(() => {
                this._isLoading$.next(false)
            })
        );
    }

}
