"use strict";
(self["webpackChunkFanzooma"] = self["webpackChunkFanzooma"] || []).push([["src_app_pages_content-pages_content-pages_module_ts"],{

/***/ 41618:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 25160);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 32606);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 82867);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber, counter: 0, period }));
        return subscriber;
    });
}
function dispatch(state) {
    const { subscriber, counter, period } = state;
    subscriber.next(counter);
    this.schedule({ subscriber, counter: counter + 1, period }, period);
}


/***/ }),

/***/ 31782:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-pages/coming-soon/coming-soon-page.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComingSoonPageComponent": () => (/* binding */ ComingSoonPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 41618);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 91477);





class ComingSoonPageComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.pickDate = new Date().setMonth(new Date().getMonth() + 2);
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe('en-US');
        this.launchDate = this.datePipe.transform(this.pickDate, 'yyyy-MM-dd');
        // Set the defaults
        this.countdown = {
            weeks: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        };
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        const currDate = moment__WEBPACK_IMPORTED_MODULE_0__();
        const launchDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.launchDate);
        let diff = launchDate.diff(currDate, 'seconds');
        this.countdown = this.calculateRemainingTime(diff);
        // Create a subscribable interval
        const countDown = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(1000)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(value => {
            return diff = diff - 1;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(value => {
            return this.calculateRemainingTime(value);
        }));
        // Subscribe to the countdown interval
        countDown
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll))
            .subscribe(value => {
            this.countdown = value;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    calculateRemainingTime(seconds) {
        const timeLeft = moment__WEBPACK_IMPORTED_MODULE_0__.duration(seconds, 'seconds');
        return {
            weeks: timeLeft.asWeeks().toFixed(0),
            days: timeLeft.asDays().toFixed(0),
            hours: timeLeft.hours(),
            minutes: timeLeft.minutes(),
            seconds: timeLeft.seconds()
        };
    }
}
ComingSoonPageComponent.ɵfac = function ComingSoonPageComponent_Factory(t) { return new (t || ComingSoonPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef)); };
ComingSoonPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ComingSoonPageComponent, selectors: [["app-coming-soon-page"]], decls: 44, vars: 4, consts: [["id", "coming-soon"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "card-coming-soon", "box-shadow-0", "overflow-hidden"], [1, "card-header", "text-center", "pt-4", "pb-3"], ["alt", "avtar", "src", "assets/img/gallery/coming-soon.png", "width", "200", 1, "img-fluid"], ["id", "clockFlat", 1, "getting-started", "px-sm-2"], [1, "clockCard", "d-inline-block", "text-center", "px-3", "px-sm-4", "py-3"], [1, "lead", "m-0"], [1, "card-content"], [1, "card-body", "text-center", "pt-1"], [1, "mb-4", "mt-2"], [1, "mx-4"], [1, "input-group"], ["type", "text", "placeholder", "Email", "aria-describedby", "coming-soon-subscribe", 1, "form-control"], [1, "input-group-append"], ["type", "button", "id", "coming-soon-subscribe", 1, "btn", "btn-primary"], [1, "ft-log-in", "d-sm-none", "font-medium-2"], [1, "d-none", "d-sm-block"]], template: function ComingSoonPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "We Are Launching Soon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.countdown.days);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.countdown.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.countdown.minutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.countdown.seconds);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21pbmctc29vbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 62354:
/*!*********************************************************************!*\
  !*** ./src/app/pages/content-pages/content-pages-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentPagesRoutingModule": () => (/* binding */ ContentPagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var app_modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/not-found/not-found.component */ 82137);
/* harmony import */ var _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coming-soon/coming-soon-page.component */ 31782);
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ 27726);
/* harmony import */ var _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lock-screen/lock-screen-page.component */ 71306);
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login-page.component */ 89415);
/* harmony import */ var _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maintenance/maintenance-page.component */ 84319);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 19625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 91477);










const routes = [
    {
        path: "",
        children: [
            {
                path: "comingsoon",
                component: _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_1__.ComingSoonPageComponent,
                data: {
                    title: "Coming Soon page",
                },
            },
            {
                path: "forgotpassword",
                component: _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordPageComponent,
                data: {
                    title: "Forgot Password",
                },
            },
            {
                path: "reset-password/:token",
                component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__.ResetPasswordComponent,
                data: {
                    title: "Reset Password",
                },
            },
            {
                path: "lockscreen",
                component: _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_3__.LockScreenPageComponent,
                data: {
                    title: "Lock Screen page",
                },
            },
            {
                path: "login",
                component: _login_login_page_component__WEBPACK_IMPORTED_MODULE_4__.LoginPageComponent,
                data: {
                    title: "Login Page",
                },
            },
            {
                path: "maintenance",
                component: _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_5__.MaintenancePageComponent,
                data: {
                    title: "Maintenance Page",
                },
            },
            {
                path: "**",
                component: app_modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent,
                data: {
                    title: "Error Page",
                },
            },
        ],
    },
];
class ContentPagesRoutingModule {
}
ContentPagesRoutingModule.ɵfac = function ContentPagesRoutingModule_Factory(t) { return new (t || ContentPagesRoutingModule)(); };
ContentPagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ContentPagesRoutingModule });
ContentPagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ContentPagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 92321:
/*!*************************************************************!*\
  !*** ./src/app/pages/content-pages/content-pages.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "ContentPagesModule": () => (/* binding */ ContentPagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 59298);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 95684);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 85991);
/* harmony import */ var _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-pages-routing.module */ 62354);
/* harmony import */ var _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coming-soon/coming-soon-page.component */ 31782);
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error-page.component */ 15243);
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ 27726);
/* harmony import */ var _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-screen/lock-screen-page.component */ 71306);
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login-page.component */ 89415);
/* harmony import */ var _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maintenance/maintenance-page.component */ 84319);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 13828);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 34301);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 60482);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 19625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 91477);

















// import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
class ContentPagesModule {
}
ContentPagesModule.ɵfac = function ContentPagesModule_Factory(t) { return new (t || ContentPagesModule)(); };
ContentPagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ContentPagesModule });
ContentPagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContentPagesRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule,
            // RecaptchaModule,
            // RecaptchaFormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient],
                },
            }),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ContentPagesModule, { declarations: [_coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_1__.ComingSoonPageComponent,
        _error_error_page_component__WEBPACK_IMPORTED_MODULE_2__.ErrorPageComponent,
        _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordPageComponent,
        _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_4__.LockScreenPageComponent,
        _login_login_page_component__WEBPACK_IMPORTED_MODULE_5__.LoginPageComponent,
        _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_6__.MaintenancePageComponent,
        _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__.ResetPasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContentPagesRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerModule] }); })();


/***/ }),

/***/ 15243:
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-pages/error/error-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPageComponent": () => (/* binding */ ErrorPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 79661);


const _c0 = function () { return ["/"]; };
class ErrorPageComponent {
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 14, vars: 2, consts: [["id", "error"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], [1, "col-12", "text-center"], ["src", "assets/img/gallery/error.png", "alt", "", "height", "300", "width", "400", 1, "img-fluid", "error-img", "mt-2"], [1, "mt-4"], [1, "w-75", "error-text", "mx-auto", "mt-4"], [1, "btn", "btn-warning", "my-2", 3, "routerLink"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "404 - Page Not Found!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "The page you are looking for might have beel removed, had it's name changed, or is temporarily unavailable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back To Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 27726:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/content-pages/forgot-password/forgot-password-page.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageComponent": () => (/* binding */ ForgotPasswordPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 59298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/service/auth/auth.service */ 67083);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 74448);







const _c0 = ["f"];
function ForgotPasswordPageComponent_ul_15_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r7, " ");
} }
function ForgotPasswordPageComponent_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ForgotPasswordPageComponent_ul_15_li_1_Template, 2, 1, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.finalsuccess);
} }
function ForgotPasswordPageComponent_ul_16_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r9, " ");
} }
function ForgotPasswordPageComponent_ul_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ForgotPasswordPageComponent_ul_16_li_1_Template, 2, 1, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.finalerror);
} }
function ForgotPasswordPageComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgotPasswordPageComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Invalid Email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgotPasswordPageComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Please verify you're not robot. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgotPasswordPageComponent_i_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 28);
} }
const _c1 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
const _c2 = function () { return ["/login"]; };
class ForgotPasswordPageComponent {
    constructor(router, location, locationStrategy, route, fb, authService, toastr, cd) {
        this.router = router;
        this.location = location;
        this.locationStrategy = locationStrategy;
        this.route = route;
        this.fb = fb;
        this.authService = authService;
        this.toastr = toastr;
        this.cd = cd;
        this.forgotpasswordFormSubmitted = false;
        this.isforgotpasswordFailed = false;
        this.unsubscribe = [];
        this.finalerror = [];
        this.finalsuccess = [];
        this.isLoading$ = this.authService.isLoading$;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.forgotpassword = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
            token: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
    }
    get lf() {
        return this.forgotpassword.controls;
    }
    onSubmit() {
        this.forgotpasswordFormSubmitted = true;
        if (this.forgotpassword.invalid) {
            return;
        }
        const loginSubscr = this.authService
            .forgotpassword({ email: this.lf.email.value, url: location.origin + '/reset-password/' })
            .subscribe(data => {
            this.forgotpasswordFormSubmitted = false;
            this.finalerror = [];
            this.finalsuccess.push(data.message);
            this.forgotpassword.reset();
        }, err => {
            this.finalerror = [];
            if (err.status === 422) {
                if (err.error.errors) {
                    const receivederror = err.error.errors;
                    for (var key in receivederror) {
                        if (typeof receivederror[key] !== 'undefined') {
                            this.finalerror.push(key + ' : ' + receivederror[key].message);
                        }
                    }
                }
                this.toastr.error(err.error.message, 'Error', {
                    positionClass: 'toast-top-right'
                });
            }
            else {
                this.finalerror.push(err.error.message);
            }
            this.cd.markForCheck();
        });
        this.unsubscribe.push(loginSubscr);
    }
}
ForgotPasswordPageComponent.ɵfac = function ForgotPasswordPageComponent_Factory(t) { return new (t || ForgotPasswordPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.LocationStrategy), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
ForgotPasswordPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForgotPasswordPageComponent, selectors: [["app-forgot-password-page"]], viewQuery: function ForgotPasswordPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.forogtPasswordForm = _t.first);
    } }, decls: 31, vars: 15, consts: [[3, "formGroup", "ngSubmit"], ["id", "forgot-password"], [1, "row", "auth-height", "full-height-vh", "m-0", "d-flex", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-12"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "text-center", "auth-img-bg", "py-2"], ["src", "assets/img/gallery/forgot.png", "alt", "", "width", "260", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-md-12", "px-4", "py-3"], [1, "mb-2", "card-title"], [1, "card-text", "mb-3"], ["class", "successclass", 4, "ngIf"], ["class", "errorsclass", 4, "ngIf"], [1, "form-group"], ["type", "text", "formControlName", "email", "placeholder", "email", "required", "", 1, "form-control", 3, "ngClass"], ["class", "help-block mt-1 text-danger", 4, "ngIf"], ["formControlName", "token"], [1, "d-flex", "flex-sm-row", "flex-column", "justify-content-between"], [1, "btn", "bg-light-primary", "mb-2", "mb-sm-0", 3, "routerLink"], [1, "btn", "btn-primary", "ml-sm-1"], ["class", "fa fa-spinner fa-spin", 4, "ngIf"], [1, "successclass"], [4, "ngFor", "ngForOf"], [1, "errorsclass"], [1, "help-block", "mt-1", "text-danger"], [1, "ft-alert-circle", "align-middle"], [1, "fa", "fa-spinner", "fa-spin"]], template: function ForgotPasswordPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPageComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Recover Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Please enter your email address and we'll send you instructions on how to reset your password.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ForgotPasswordPageComponent_ul_15_Template, 2, 1, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ForgotPasswordPageComponent_ul_16_Template, 2, 1, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ForgotPasswordPageComponent_div_19_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ForgotPasswordPageComponent_div_20_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "re-captcha", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ForgotPasswordPageComponent_div_23_Template, 3, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Back To Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Recover ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ForgotPasswordPageComponent_i_29_Template, 1, 0, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.forgotpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.finalsuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.finalerror);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, ctx.forgotpasswordFormSubmitted && ctx.lf.email.invalid, ctx.forgotpasswordFormSubmitted && !ctx.lf.email.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.forgotpasswordFormSubmitted && (ctx.lf.email.errors == null ? null : ctx.lf.email.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.forgotpasswordFormSubmitted && (ctx.lf.email.errors == null ? null : ctx.lf.email.errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.forgotpasswordFormSubmitted && (ctx.lf.token.invalid || (ctx.lf.token.errors == null ? null : ctx.lf.token.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 9, ctx.isLoading$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 71306:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-pages/lock-screen/lock-screen-page.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockScreenPageComponent": () => (/* binding */ LockScreenPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 79661);


const _c0 = ["f"];
const _c1 = function () { return ["/dashboard/dashboard1"]; };
class LockScreenPageComponent {
    onSubmit() {
        this.lockScreenForm.reset();
    }
}
LockScreenPageComponent.ɵfac = function LockScreenPageComponent_Factory(t) { return new (t || LockScreenPageComponent)(); };
LockScreenPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LockScreenPageComponent, selectors: [["app-lock-screen-page"]], viewQuery: function LockScreenPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lockScreenForm = _t.first);
    } }, decls: 18, vars: 2, consts: [["id", "lock-screen"], [1, "row", "auth-height", "full-height-vh", "m-0"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-lg-flex", "justify-content-center", "align-items-center", "d-none", "text-center", "auth-img-bg", "p-3"], ["src", "assets/img/gallery/lock.png", "alt", "", "height", "230", "width", "280", 1, "img-fluid"], [1, "col-lg-6", "col-md-12", "py-3", "px-4"], [1, "card-title", "mb-3"], ["type", "email", "placeholder", "Email", 1, "form-control", "mb-2"], ["type", "password", "placeholder", "Password", 1, "form-control", "mb-2"], ["href", "javascript:;"], [1, "btn", "btn-block", "btn-primary", "mt-2", 3, "routerLink"]], template: function LockScreenPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Your Session is Locked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Are You Not John Doe ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Unlock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NrLXNjcmVlbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 89415:
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-pages/login/login-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 59298);
/* harmony import */ var app_core_shared_serverErrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/shared/serverErrors */ 27452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 20088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/service/auth/auth.service */ 67083);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 74448);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 95684);










function LoginPageComponent_ngb_alert_14_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const err_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", err_r8, " ");
} }
function LoginPageComponent_ngb_alert_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function LoginPageComponent_ngb_alert_14_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.serverErrors.resetErrors(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginPageComponent_ngb_alert_14_p_1_Template, 2, 1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.serverErrors.errors);
} }
function LoginPageComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Invalid Email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginPageComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_span_22_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.hide = !ctx_r11.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginPageComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_span_23_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.hide = !ctx_r13.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " This is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginPageComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 30);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class LoginPageComponent {
    constructor(router, authService, route, fb, toastr, cdr) {
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.fb = fb;
        this.toastr = toastr;
        this.cdr = cdr;
        this.isLoginFailed = false;
        this.loginFormSubmitted = false;
        this.serverErrors = new app_core_shared_serverErrors__WEBPACK_IMPORTED_MODULE_0__.default();
        this.hide = true;
        this.isLoading$ = this.authService.isLoading$;
        if (this.authService.currentUserValue) {
            this.router.navigate(['/dashboard']);
        }
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    get lf() {
        return this.loginForm.controls;
    }
    // On submit button click
    onSubmit() {
        this.loginFormSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.serverErrors.resetErrors();
        const loginSubscr = this.authService
            .login({ email: this.lf.email.value, password: this.lf.password.value })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
            .subscribe((data) => {
            this.router.navigate(['/dashboard']);
        }, (err) => {
            const { errors, message } = err.error;
            this.serverErrors.errors = errors;
            this.isLoginFailed = true;
            this.toastr.error(message, 'Error!');
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
LoginPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 30, vars: 19, consts: [["id", "login"], [1, "row", "auth-height", "full-height-vh", "m-0"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "auth-img-bg", "p-0"], ["src", "assets/img/gallery/login.png", "alt", "", 1, "img-fluid"], [1, "col-lg-6", "col-12", "px-3", "py-5"], [1, "mb-2", "card-title"], ["type", "light-danger", "class", "mb-2", 3, "closed", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "email", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngClass"], ["class", "help-block mt-1 text-danger", 4, "ngIf"], [1, "form-group", "relative"], ["formControlName", "password", "placeholder", "Password", "required", "", 1, "form-control", 3, "type", "ngClass"], ["class", "fa fa-eye set_eye_icon", 3, "click", 4, "ngIf"], ["class", "fa fa-eye-slash set_eye_icon", 3, "click", 4, "ngIf"], [1, "d-flex", "justify-content-between", "flex-sm-row", "flex-column"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "fa fa-spinner fa-spin", 4, "ngIf"], ["type", "light-danger", 1, "mb-2", 3, "closed"], ["class", "mb-0", 4, "ngFor", "ngForOf"], [1, "mb-0"], [1, "help-block", "mt-1", "text-danger"], [1, "ft-alert-circle", "align-middle"], [1, "fa", "fa-eye", "set_eye_icon", 3, "click"], [1, "fa", "fa-eye-slash", "set_eye_icon", 3, "click"], [1, "fa", "fa-spinner", "fa-spin"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Welcome back, please login to your account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, LoginPageComponent_ngb_alert_14_Template, 2, 1, "ngb-alert", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_15_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, LoginPageComponent_div_18_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, LoginPageComponent_div_19_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, LoginPageComponent_span_22_Template, 1, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, LoginPageComponent_span_23_Template, 1, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, LoginPageComponent_div_24_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, LoginPageComponent_i_28_Template, 1, 0, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.serverErrors.hasError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](13, _c0, ctx.loginFormSubmitted && ctx.lf.email.invalid, ctx.loginFormSubmitted && !ctx.lf.email.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginFormSubmitted && (ctx.lf.email.errors == null ? null : ctx.lf.email.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginFormSubmitted && (ctx.lf.email.errors == null ? null : ctx.lf.email.errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](16, _c0, ctx.loginFormSubmitted && ctx.lf.password.invalid, ctx.loginFormSubmitted && !ctx.lf.password.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginFormSubmitted && (ctx.lf.password.invalid || (ctx.lf.password.errors == null ? null : ctx.lf.password.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 11, ctx.isLoading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAlert, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], styles: [".alert-light-danger[_ngcontent-%COMP%] {\n  background-color: #FEEFD0 !important;\n  color: #F55252 !important;\n  border-color: #FEEFD0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LWxpZ2h0LWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUVGRDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGNTUyNTIgICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI0ZFRUZEMDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 84319:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-pages/maintenance/maintenance-page.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenancePageComponent": () => (/* binding */ MaintenancePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 79661);


const _c0 = function () { return ["/"]; };
class MaintenancePageComponent {
}
MaintenancePageComponent.ɵfac = function MaintenancePageComponent_Factory(t) { return new (t || MaintenancePageComponent)(); };
MaintenancePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaintenancePageComponent, selectors: [["app-maintenance-page"]], decls: 14, vars: 2, consts: [["id", "maintenance"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], [1, "col-12", "text-center"], ["src", "assets/img/gallery/maintenance.png", "alt", "", "height", "300", "width", "300", 1, "img-fluid", "maintenance-img", "mt-2"], [1, "mt-4"], [1, "maintenance-text", "w-75", "mx-auto", "mt-4"], [1, "btn", "btn-warning", "my-2", 3, "routerLink"]], template: function MaintenancePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Under Maintenance!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ice cream caramels lemon drops candy. Cake toffee topping cookie tart wafer gummies. Sweet gummi bears jujubes bonbon gingerbread apple pie marshmallow.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back To Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWludGVuYW5jZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 19625:
/*!********************************************************************************!*\
  !*** ./src/app/pages/content-pages/reset-password/reset-password.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 59298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 20088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/service/auth/auth.service */ 67083);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 74448);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 40093);








function ResetPasswordComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/"]; };
function ResetPasswordComponent_ng_template_1_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Your reset password link is expired.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Either your link is expired or you've already changed your password with this link.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Back To Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function ResetPasswordComponent_ng_template_1_section_1_ul_14_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r13, " ");
} }
function ResetPasswordComponent_ng_template_1_section_1_ul_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ResetPasswordComponent_ng_template_1_section_1_ul_14_li_1_Template, 2, 1, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.finalsuccess);
} }
function ResetPasswordComponent_ng_template_1_section_1_ul_15_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r15, " ");
} }
function ResetPasswordComponent_ng_template_1_section_1_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ResetPasswordComponent_ng_template_1_section_1_ul_15_li_1_Template, 2, 1, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.finalerror);
} }
function ResetPasswordComponent_ng_template_1_section_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_ng_template_1_section_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "password should be minimum 6 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_ng_template_1_section_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Passwords do not match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_ng_template_1_section_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_ng_template_1_section_1_i_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 41);
} }
const _c1 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
const _c2 = function (a0) { return { "is-invalid": a0 }; };
const _c3 = function () { return ["/login"]; };
function ResetPasswordComponent_ng_template_1_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Reset Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Please enter your password and confirm password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ResetPasswordComponent_ng_template_1_section_1_ul_14_Template, 2, 1, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ResetPasswordComponent_ng_template_1_section_1_ul_15_Template, 2, 1, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_ng_template_1_section_1_Template_form_ngSubmit_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ResetPasswordComponent_ng_template_1_section_1_div_19_Template, 3, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ResetPasswordComponent_ng_template_1_section_1_div_20_Template, 3, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ResetPasswordComponent_ng_template_1_section_1_div_23_Template, 3, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ResetPasswordComponent_ng_template_1_section_1_div_24_Template, 3, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Back To Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ResetPasswordComponent_ng_template_1_section_1_i_30_Template, 1, 0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.finalsuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.finalerror);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r4.resetForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c1, ctx_r4.resetFormSubmitted && ctx_r4.lf.password.invalid, ctx_r4.resetFormSubmitted && !ctx_r4.lf.password.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.resetFormSubmitted && ctx_r4.resetForm.get("password").errors && ctx_r4.resetForm.get("password").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.resetFormSubmitted && ctx_r4.resetForm.get("password").errors && ctx_r4.resetForm.get("password").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c2, ctx_r4.resetFormSubmitted && ctx_r4.resetForm.hasError("notSame")))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](19, _c1, ctx_r4.resetFormSubmitted && ctx_r4.lf.confirm_password.invalid, ctx_r4.resetFormSubmitted && !ctx_r4.lf.confirm_password.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.resetFormSubmitted && ctx_r4.resetForm.hasError("notSame"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.resetFormSubmitted && ctx_r4.resetForm.get("confirm_password").errors && ctx_r4.resetForm.get("confirm_password").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 12, ctx_r4.isLoading$));
} }
function ResetPasswordComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ResetPasswordComponent_ng_template_1_section_0_Template, 14, 2, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ResetPasswordComponent_ng_template_1_section_1_Template, 32, 23, "section", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.pagehaserror);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.pagehaserror);
} }
class ResetPasswordComponent {
    constructor(router, authService, route, fb, toastr, cd) {
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.fb = fb;
        this.toastr = toastr;
        this.cd = cd;
        this.resetFormSubmitted = false;
        this.isresetFailed = false;
        this.unsubscribe = [];
        this.finalerror = [];
        this.finalsuccess = [];
        this.pagehaserror = false;
        this.loading = true;
        this.checkPasswords = (group) => {
            let pass = group.get('password').value;
            let confirmPass = group.get('confirm_password').value;
            return pass === confirmPass ? null : { notSame: true };
        };
        this.isLoading$ = this.authService.isLoading$;
        if (this.authService.currentUserValue) {
            this.router.navigate(['/dashboard']);
        }
    }
    ngOnInit() {
        this.route.params.subscribe((paramsid) => {
            this.token = paramsid.token;
        });
        this.checktokenisvalid();
        this.initForm();
    }
    checktokenisvalid() {
        this.authService
            .checktokenisvalid({ reset_password_code: this.token })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)())
            .subscribe(data => {
            this.pagehaserror = false;
            this.loading = false;
            this.cd.markForCheck();
        }, err => {
            this.pagehaserror = true;
            this.loading = false;
            this.cd.markForCheck();
        });
    }
    initForm() {
        this.resetForm = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        }, { validator: this.checkPasswords });
    }
    get lf() {
        return this.resetForm.controls;
    }
    // On submit button click
    onSubmit() {
        this.resetFormSubmitted = true;
        if (this.resetForm.invalid) {
            return;
        }
        const loginSubscr = this.authService
            .resetpassword({ password: this.lf.password.value, confirm_password: this.lf.confirm_password.value, reset_password_code: this.token })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)())
            .subscribe(data => {
            this.resetFormSubmitted = false;
            this.finalerror = [];
            this.finalsuccess.push(data.message);
            this.resetForm.reset();
        }, err => {
            this.finalerror = [];
            if (err.status === 422) {
                if (err.error.errors) {
                    const receivederror = err.error.errors;
                    for (var key in receivederror) {
                        if (typeof receivederror[key] !== 'undefined') {
                            this.finalerror.push(receivederror[key].message);
                        }
                    }
                }
                this.toastr.error(err.error.message, 'Error', {
                    positionClass: 'toast-top-right'
                });
            }
            else {
                this.finalerror.push(err.error.message);
            }
            this.cd.markForCheck();
        });
        this.unsubscribe.push(loginSubscr);
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
ResetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 3, vars: 2, consts: [["class", "ddpage-loading", 4, "ngIf", "ngIfElse"], ["loaded", ""], [1, "ddpage-loading"], ["src", "assets/img/oval.svg", 1, "ddloading-icon"], ["id", "error", 4, "ngIf"], ["id", "login", 4, "ngIf"], ["id", "error"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], [1, "col-12", "text-center"], ["src", "assets/img/gallery/error.png", "alt", "", "height", "300", "width", "400", 1, "img-fluid", "error-img", "mt-2"], [1, "mt-4"], [1, "w-75", "error-text", "mx-auto", "mt-4"], [1, "btn", "btn-warning", "my-2", 3, "routerLink"], ["id", "login"], [1, "row", "auth-height", "full-height-vh", "m-0"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "auth-img-bg", "p-3"], ["src", "assets/img/gallery/login.png", "alt", "", "width", "300", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-12", "px-4", "py-3"], [1, "mb-2", "card-title"], ["class", "successclass", 4, "ngIf"], ["class", "errorsclass", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "formControlName", "confirm_password", "placeholder", "Confirm Password", 1, "form-control", 3, "ngClass"], [1, "d-flex", "flex-sm-row", "flex-column", "justify-content-between"], [1, "btn", "bg-light-primary", "mb-2", "mb-sm-0", 3, "routerLink"], [1, "btn", "btn-primary", "ml-sm-1"], ["class", "fa fa-spinner fa-spin", 4, "ngIf"], [1, "successclass"], [4, "ngFor", "ngForOf"], [1, "errorsclass"], [1, "text-danger"], [1, "fa", "fa-spinner", "fa-spin"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ResetPasswordComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ResetPasswordComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_content-pages_content-pages_module_ts.js.map