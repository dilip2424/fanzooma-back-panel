import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ArtistService {

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

    getall(params) {
        this._isLoadingtable$.next(true);
        return this.http.post(`${this.apiUrl}/artist`, params).pipe(
            finalize(() => {
                this._isLoadingtable$.next(false)
            })
        );
    }

    getallartist() {

        return this.http.post(`${this.apiUrl}/artist/dropdown`, { search: "" });
    }


    changestatus(id, status) {
        return this.http.put(`${this.apiUrl}/artist/change-status/${id}`, { status });
    }

    getById(id) {
        return this.http.patch(`${this.apiUrl}/artist/detail/${id}`, {});
    }

    create(params) {
        this._isLoading$.next(true);
       
        return this.http.post(`${this.apiUrl}/artist/add`, params).pipe(
            finalize(() => {
                this._isLoading$.next(false)
            })
        );
    }



}

