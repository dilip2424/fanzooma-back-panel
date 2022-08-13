import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
    public filters: any;

    constructor() {
        this.filters = {};
    }

    setFilter(filterObj) {
        this.filters = Object.assign({}, filterObj);
    }

    resetFilter() {
        this.filters = {};
    }

    getFilter() {
        return this.filters;
    }
}
