"use strict";
(self["webpackChunkFanzooma"] = self["webpackChunkFanzooma"] || []).push([["common"],{

/***/ 27452:
/*!*********************************************!*\
  !*** ./src/app/core/shared/serverErrors.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServerErrors)
/* harmony export */ });
class ServerErrors {
    constructor() {
        this._errors = [];
    }
    get errors() {
        return this._errors.slice();
    }
    get hasError() {
        return this._errors.length > 0;
    }
    set errors(errorObj) {
        for (let err of Object.keys(errorObj)) {
            this._errors.push(errorObj[err][0]);
        }
    }
    resetErrors() {
        this._errors = [];
    }
}


/***/ }),

/***/ 20121:
/*!**********************************************************!*\
  !*** ./src/app/modules/clubs/_services/clubs.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClubsService": () => (/* binding */ ClubsService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 71435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 34301);





class ClubsService {
    constructor(http) {
        this.http = http;
        this._isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this._isLoadingtable$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.apiUrl = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    get isLoading$() {
        return this._isLoading$.asObservable();
    }
    get isLoadingtable$() {
        return this._isLoadingtable$.asObservable();
    }
    getAll(params) {
        this._isLoadingtable$.next(true);
        return this.http.post(`${this.apiUrl}/admin/club/all`, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoadingtable$.next(false);
        }));
    }
    getAllNames(params) {
        this._isLoadingtable$.next(true);
        return this.http.post(`${this.apiUrl}/admin/club/all-names`, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoadingtable$.next(false);
        }));
    }
    getById(id) {
        return this.http.post(`${this.apiUrl}/admin/club/${id}`, {});
    }
}
ClubsService.ɵfac = function ClubsService_Factory(t) { return new (t || ClubsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
ClubsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ClubsService, factory: ClubsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6717:
/*!*****************************************************************!*\
  !*** ./src/app/modules/locations/_services/location.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationService": () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 71435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 34301);





class LocationService {
    constructor(http) {
        this.http = http;
        this._isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this._isLoadingtable$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.apiUrl = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    get isLoading$() {
        return this._isLoading$.asObservable();
    }
    get isLoadingtable$() {
        return this._isLoadingtable$.asObservable();
    }
    getAll(params) {
        this._isLoadingtable$.next(true);
        return this.http.post(`${this.apiUrl}/admin/location/all`, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoadingtable$.next(false);
        }));
    }
    getAllNames(params) {
        this._isLoadingtable$.next(true);
        return this.http
            .post(`${this.apiUrl}/admin/location/all-names`, params)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoadingtable$.next(false);
        }));
    }
    getById(id) {
        return this.http.post(`${this.apiUrl}/admin/location/${id}`, {});
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
LocationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 55618:
/*!************************************************************************!*\
  !*** ./src/app/modules/organization/_services/organization.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizationService": () => (/* binding */ OrganizationService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 71435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 34301);





class OrganizationService {
    constructor(http) {
        this.http = http;
        this._isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this._isLoadingtable$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.apiUrl = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    get isLoading$() {
        return this._isLoading$.asObservable();
    }
    get isLoadingtable$() {
        return this._isLoadingtable$.asObservable();
    }
    getAll(params) {
        this._isLoadingtable$.next(true);
        return this.http.post(`${this.apiUrl}/admin/organization/all`, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoadingtable$.next(false);
        }));
    }
    getAllNames(params) {
        this._isLoadingtable$.next(true);
        return this.http
            .post(`${this.apiUrl}/admin/organization/all-names`, params)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoadingtable$.next(false);
        }));
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
OrganizationService.ɵfac = function OrganizationService_Factory(t) { return new (t || OrganizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
OrganizationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: OrganizationService, factory: OrganizationService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map