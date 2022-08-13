(self["webpackChunkFanzooma"] = self["webpackChunkFanzooma"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var _core_service_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/service/guard/auth.guard */ 93741);
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ 12227);
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ 36141);
/* harmony import */ var _routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/full-layout.routes */ 94074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 91477);







const appRoutes = [
    {
        path: "",
        component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__.FullLayoutComponent,
        children: _routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_3__.Full_ROUTES,
        canActivate: [_core_service_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        canLoad: [_core_service_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
    {
        path: "",
        component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_1__.ContentLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_content-pages_content-pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/content-pages/content-pages.module */ 92321)).then((m) => m.ContentPagesModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(appRoutes, { relativeLinkResolution: "legacy" }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4919);





class AppComponent {
    constructor(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.subscription = this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd))
            .subscribe(() => {
            window.scrollTo(0, 0);
            const rt = this.getChild(this.activatedRoute);
            rt.data.subscribe((data) => {
                this.titleService.setTitle(data.title + ' | Fanzooma');
            });
        });
    }
    getChild(activatedRoute) {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        }
        else {
            return activatedRoute;
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 92352);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4919);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 95684);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 74448);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 34301);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 13828);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ 60482);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-dragula */ 28899);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ 85991);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 32930);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ 12227);
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ 36141);
/* harmony import */ var _shared_services_window_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/window.service */ 60294);
/* harmony import */ var _core_http_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/http-interceptors/auth-interceptor */ 39175);
/* harmony import */ var _core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/service/auth/auth.service */ 67083);
/* harmony import */ var _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/not-found/not-found.component */ 82137);
/* harmony import */ var _core_google_auth_google_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/google-auth/google-auth.component */ 72786);










// import {
//   RECAPTCHA_SETTINGS,
//   RecaptchaFormsModule,
//   RecaptchaModule,
//   RecaptchaSettings,
// } from "ng-recaptcha";
// import { environment } from "../environments/environment";














const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false,
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
function appInitializer(authService) {
    return () => {
        return new Promise((resolve) => {
            authService.getUserByToken().subscribe().add(resolve);
        });
    };
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_11__.APP_INITIALIZER,
            useFactory: appInitializer,
            multi: true,
            deps: [_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService],
        },
        // {
        //   provide: RECAPTCHA_SETTINGS,
        //   useValue: {
        //     siteKey: environment.recaptcha.siteKey,
        //   } as RecaptchaSettings,
        // },
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.Title,
        ng2_dragula__WEBPACK_IMPORTED_MODULE_13__.DragulaService,
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        _shared_services_window_service__WEBPACK_IMPORTED_MODULE_5__.WINDOW_PROVIDERS,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HTTP_INTERCEPTORS,
            useClass: _core_http_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__.AuthInterceptor,
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule.forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient],
                },
            }),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__.PerfectScrollbarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_4__.FullLayoutComponent,
        _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__.ContentLayoutComponent,
        _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__.NotFoundComponent,
        _core_google_auth_google_auth_component__WEBPACK_IMPORTED_MODULE_9__.GoogleAuthComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__.PerfectScrollbarModule] }); })();


/***/ }),

/***/ 72786:
/*!***********************************************************!*\
  !*** ./src/app/core/google-auth/google-auth.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleAuthComponent": () => (/* binding */ GoogleAuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var _service_common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/common/common.service */ 52743);
/* harmony import */ var app_modules_channels_services_channel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/channels/_services/channel.service */ 55582);
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth/auth.service */ 67083);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 74448);







class GoogleAuthComponent {
    constructor(route, router, commonservice, channelservice, authService, toastr) {
        this.route = route;
        this.router = router;
        this.commonservice = commonservice;
        this.channelservice = channelservice;
        this.authService = authService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
            if (params.code) {
                this.commonservice.getAccessToken(params.code, location.origin).subscribe((response) => {
                    const tokendata = response.result;
                    const access_token = tokendata.access_token;
                    const refresh_token = tokendata.refresh_token;
                    if (params.state) {
                        if (params.state.includes("allow_")) {
                            const channel_id = params.state.replace("allow_", "");
                            this.commonservice.accesstoken(channel_id, { access_token, refresh_token, status: 1 }).subscribe((chenaldata) => {
                                console.log(chenaldata);
                                return this.router.navigate(['channels/view/' + channel_id]);
                            });
                        }
                        else {
                            const loginuserdata = this.authService.currentUserValue;
                            const channel_id = params.state;
                            if (access_token && channel_id) {
                                this.commonservice.verifychennal({ channel_id, access_token }).subscribe((chenaldata) => {
                                    if (chenaldata.result) {
                                        const channel_title = chenaldata.result.title;
                                        const channel_description = chenaldata.result.description;
                                        const channel_start_date = chenaldata.result.date ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(chenaldata.result.date, 'yyyy-MM-dd', 'en-US') : '';
                                        const channeladd = {
                                            icon_type: '1',
                                            channel_icon_url: chenaldata.result.icon,
                                            creator: loginuserdata._id,
                                            channel_title,
                                            channel_description,
                                            channel_start_date,
                                            channel_id,
                                            access_token,
                                            refresh_token,
                                            status: '1'
                                        };
                                        this.channelservice.create(channeladd).subscribe((task) => {
                                            this.toastr.success(`Your Channel : ${channel_title} has been added successfully.`, "Success");
                                            this.router.navigate(['step-3']);
                                        }, err => {
                                            this.toastr.error(err.error.message, 'Error!');
                                            this.router.navigate(['step-2']);
                                        });
                                        return false;
                                    }
                                }, err => {
                                    this.toastr.error('Invalid Channel Id', 'Error!');
                                    this.router.navigate(['step-2']);
                                });
                            }
                            return false;
                        }
                    }
                    localStorage.setItem('access_token', tokendata.access_token);
                    localStorage.setItem('refresh_token', tokendata.refresh_token);
                    this.router.navigate(['/channels/add-new']);
                });
            }
            else {
                this.router.navigate(['/dashboard']);
            }
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
GoogleAuthComponent.ɵfac = function GoogleAuthComponent_Factory(t) { return new (t || GoogleAuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_modules_channels_services_channel_service__WEBPACK_IMPORTED_MODULE_1__.ChannelService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
GoogleAuthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GoogleAuthComponent, selectors: [["app-google-auth"]], decls: 2, vars: 0, consts: [[1, "page-loading"], ["src", "assets/img/oval.svg", 1, "loading-icon"]], template: function GoogleAuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb29nbGUtYXV0aC5jb21wb25lbnQuc2NzcyJ9 */", ".pace[_ngcontent-%COMP%]   .pace-activity[_ngcontent-%COMP%] {\n        top: 19px;\n        right: 19px;\n        display: none;\n    }\n\n    .page-loading[_ngcontent-%COMP%] {\n        position: fixed;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        overflow: hidden;\n        background: rgba(51, 51, 51, 1.00);\n        opacity: 1;\n        transition: opacity 1s ease-in-out;\n    }\n\n    .loading-icon[_ngcontent-%COMP%] {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        width: 38px;\n        height: 38px;\n        margin-left: -19px;\n        margin-top: -19px;\n    }\n\n    app-root[_ngcontent-%COMP%]:empty ~ .page-loading[_ngcontent-%COMP%] {\n        opacity: 1;\n        z-index: 1;\n    }"] });


/***/ }),

/***/ 39175:
/*!************************************************************!*\
  !*** ./src/app/core/http-interceptors/auth-interceptor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 34301);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth/auth.service */ 67083);






class AuthInterceptor {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    intercept(req, next) {
        const token = localStorage.getItem('token');
        const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`),
        });
        return next.handle(authReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => {
            console.log('Err :: ', err);
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
                console.log({ err });
                // Check for unauthorized user
                if (err.status == 401) {
                    this.authService.currentUserSubject.next(undefined);
                    this.router.navigate(['/login']);
                }
                // this.errorMessage = err.error?.message ?? 'Something went wrong';
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(err);
            }
            else {
                console.log('Client error');
            }
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 45071:
/*!*******************************************************!*\
  !*** ./src/app/core/service/FilterService.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterService": () => (/* binding */ FilterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 91477);

class FilterService {
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
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(); };
FilterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 67083:
/*!***************************************************!*\
  !*** ./src/app/core/service/auth/auth.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 71435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 34301);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 79661);






class AuthService {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.unsubscribe = [];
        this.apiUrl = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.isLoading$ = this.isLoadingSubject.asObservable();
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
        this.currentUser$ = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    set currentUserValue(user) {
        this.currentUserSubject.next(user);
    }
    login(data) {
        this.isLoadingSubject.next(true);
        return this.http.post(`${this.apiUrl}/admin/login`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((auth) => {
            const result = this.setStorage(auth.data);
            this.currentUserSubject.next(auth.data.user);
            return auth;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.isLoadingSubject.next(false)));
    }
    checktokenisvalid(data) {
        return this.http.post(`${this.apiUrl}/user/verify/token`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((auth) => {
            return auth;
        }));
    }
    forgotpassword(data) {
        this.isLoadingSubject.next(true);
        return this.http.post(`${this.apiUrl}/user/reset-password`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((auth) => {
            return auth;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.isLoadingSubject.next(false)));
    }
    resetpassword(data) {
        this.isLoadingSubject.next(true);
        return this.http.post(`${this.apiUrl}/user/change/password`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((auth) => {
            return auth;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.isLoadingSubject.next(false)));
    }
    getUserByToken() {
        const token = this.getStorage();
        if (!token) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(undefined);
        }
        else {
            this.isLoadingSubject.next(true);
            return this.http.get(`${this.apiUrl}/admin/user`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((user) => {
                if (user) {
                    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(user === null || user === void 0 ? void 0 : user.data);
                }
                else {
                    this.logout();
                }
                return user;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.isLoadingSubject.next(false)));
        }
    }
    currentusertype() {
        const user = this.currentUserValue;
        return user.role;
    }
    isAdminCategory() {
        var _a;
        const admins = [1, 2, 5, 6, 7];
        return admins.includes((_a = this.currentUserValue) === null || _a === void 0 ? void 0 : _a.type);
    }
    isCRUDAdmin() {
        var _a;
        const admins = [1, 2, 5];
        return admins.includes((_a = this.currentUserValue) === null || _a === void 0 ? void 0 : _a.type);
    }
    isNonCRUDAdmin() {
        var _a;
        const admins = [6, 7];
        return admins.includes((_a = this.currentUserValue) === null || _a === void 0 ? void 0 : _a.type);
    }
    isEarningAdmin() {
        var _a;
        const admins = [1, 2, 6];
        return admins.includes((_a = this.currentUserValue) === null || _a === void 0 ? void 0 : _a.type);
    }
    isNonEarningAdmin() {
        var _a;
        const admins = [5, 7];
        return admins.includes((_a = this.currentUserValue) === null || _a === void 0 ? void 0 : _a.type);
    }
    isCreator() {
        var _a;
        const admins = [3];
        return admins.includes((_a = this.currentUserValue) === null || _a === void 0 ? void 0 : _a.type);
    }
    isRH() {
        var _a;
        const admins = [4];
        return admins.includes((_a = this.currentUserValue) === null || _a === void 0 ? void 0 : _a.type);
    }
    getStorage() {
        try {
            const authData = localStorage.getItem('token');
            return authData;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    }
    logout() {
        localStorage.removeItem('token');
        this.currentUserSubject.next(undefined);
        this.router.navigate(['/login']);
    }
    setStorage(auth) {
        if (auth === null || auth === void 0 ? void 0 : auth.token) {
            localStorage.setItem('token', auth.token);
            localStorage.setItem('user_id', auth.user.id);
        }
    }
    clearStorage() {
        localStorage.removeItem('token');
        this.currentUserSubject.next(undefined);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 52743:
/*!*******************************************************!*\
  !*** ./src/app/core/service/common/common.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 71435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 34301);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 40093);






class CommonService {
    constructor(http, location) {
        this.http = http;
        this.location = location;
        this._isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this._isLoadingtable$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this._filterSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.filter$ = this._filterSource.asObservable();
        this.apiUrl = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    get isLoading$() {
        return this._isLoading$.asObservable();
    }
    get isLoadingtable$() {
        return this._isLoadingtable$.asObservable();
    }
    getFilters() {
        return this._filterSource.getValue();
    }
    setFilters(filter) {
        this._filterSource.next(filter);
    }
    getall(params) {
        this._isLoadingtable$.next(true);
        return this.http.post(`${this.apiUrl}/general/account`, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoadingtable$.next(false);
        }));
    }
    getPlans() {
        this._isLoading$.next(true);
        return this.http.get(`${this.apiUrl}/admin/plans`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoading$.next(false);
        }));
    }
    getallcategory(params) {
        this._isLoadingtable$.next(true);
        return this.http.post(`${this.apiUrl}/general/category`, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoadingtable$.next(false);
        }));
    }
    getallenergyleavel(params) {
        this._isLoadingtable$.next(true);
        return this.http.post(`${this.apiUrl}/general/energy/level`, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoadingtable$.next(false);
        }));
    }
    creatorrightholder(params) {
        this._isLoadingtable$.next(true);
        return this.http
            .post(`${this.apiUrl}/general/creator/rights/holder`, params)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoadingtable$.next(false);
        }));
    }
    getallchannel(params) {
        this._isLoadingtable$.next(true);
        return this.http.post(`${this.apiUrl}/general/channel`, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoadingtable$.next(false);
        }));
    }
    getallartist() {
        return this.http.get(`${this.apiUrl}/general/artist`);
    }
    getallcontracts(params) {
        return this.http.post(`${this.apiUrl}/general/contract`, params);
    }
    getactivecontract(params) {
        return this.http.post(`${this.apiUrl}/general/rights/holders/contract`, params);
    }
    verifychennal(params) {
        this._isLoadingtable$.next(true);
        return this.http.post(`${this.apiUrl}/general/channel/info`, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoadingtable$.next(false);
        }));
    }
    accesstoken(channel_id, json) {
        return this.http.put(`${this.apiUrl}/channel/access-token/${channel_id}`, json);
    }
    getAccessToken(code, redirect_uri) {
        return this.http.post(`${this.apiUrl}/channel/google/access-token`, {
            code,
            redirect_uri,
        });
    }
    getGoogleAuth(redirect_uri, state = '') {
        return this.http.post(`${this.apiUrl}/channel/google/code`, {
            redirect_uri,
            state,
        });
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location)); };
CommonService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 93741:
/*!**************************************************!*\
  !*** ./src/app/core/service/guard/auth.guard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 67083);



class AuthGuard {
    constructor(router, authservice) {
        this.router = router;
        this.authservice = authservice;
    }
    canActivate(route, state) {
        if (this.isLoggedIn()) {
            return true;
        }
        return false;
    }
    canLoad() {
        return this.isLoggedIn();
    }
    isLoggedIn() {
        const currentUser = this.authservice.currentUserValue;
        const hasToken = localStorage.getItem('token');
        if (currentUser && hasToken) {
            return true;
        }
        this.authservice.logout();
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 90368:
/*!********************************************************!*\
  !*** ./src/app/core/service/guard/permission.guard.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionGuard": () => (/* binding */ PermissionGuard)
/* harmony export */ });
/* harmony import */ var app_roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/roles */ 21733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 67083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 74448);





class PermissionGuard {
    constructor(authService, route, toaster) {
        this.authService = authService;
        this.route = route;
        this.toaster = toaster;
    }
    canActivate(route, state) {
        var _a;
        const userType = (_a = this.authService.currentUserValue) === null || _a === void 0 ? void 0 : _a.role;
        const hasAccess = route.data.permissions;
        const isAllowed = hasAccess.includes(userType) || hasAccess.includes(app_roles__WEBPACK_IMPORTED_MODULE_0__.Roles.ALLOW_ALL);
        if (isAllowed)
            return true;
        this.toaster.error('You are not authorized to access this page.', 'error', {
            positionClass: 'toast-bottom-right',
        });
        this.route.navigate(['/dashboard']);
        return false;
    }
}
PermissionGuard.ɵfac = function PermissionGuard_Factory(t) { return new (t || PermissionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService)); };
PermissionGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PermissionGuard, factory: PermissionGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 12227:
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentLayoutComponent": () => (/* binding */ ContentLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/config.service */ 36955);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 13828);
/* harmony import */ var app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/customizer.service */ 60360);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 79661);






const _c0 = ["content-wrapper"];
class ContentLayoutComponent {
    constructor(configService, translate, document, renderer, cdr, customizerService) {
        this.configService = configService;
        this.translate = translate;
        this.document = document;
        this.renderer = renderer;
        this.cdr = cdr;
        this.customizerService = customizerService;
        this.config = {};
        this.config = this.configService.templateConf;
        this.renderer.addClass(this.document.body, "auth-page");
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    ngOnInit() {
        this.layoutSub = this.configService.templateConf$.subscribe((templateConf) => {
            if (templateConf) {
                this.config = templateConf;
            }
            this.loadLayout();
            this.cdr.markForCheck();
        });
    }
    loadLayout() {
        this.removeTransparentBGClasses();
        if (this.config.layout.variant === "Light") {
            this.renderer.removeClass(this.document.body, "layout-dark");
            this.renderer.removeClass(this.document.body, "layout-transparent");
        }
        else if (this.config.layout.variant === "Dark") {
            this.renderer.removeClass(this.document.body, "layout-transparent");
            this.renderer.addClass(this.document.body, "layout-dark");
        }
        else if (this.config.layout.variant === "Transparent") {
            this.renderer.addClass(this.document.body, "layout-dark");
            this.renderer.addClass(this.document.body, "layout-transparent");
            this.renderer.addClass(this.document.body, this.config.layout.sidebar.backgroundColor);
        }
        this.renderer.removeClass(this.document.body, "menu-expanded");
        this.renderer.removeClass(this.document.body, "navbar-static");
        this.renderer.removeClass(this.document.body, "menu-open");
        this.renderer.addClass(this.document.body, "blank-page");
    }
    removeTransparentBGClasses() {
        this.customizerService.transparent_colors.forEach(_ => {
            this.renderer.removeClass(this.document.body, _.class);
        });
        this.customizerService.transparent_colors_with_shade.forEach(_ => {
            this.renderer.removeClass(this.document.body, _.class);
        });
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, "auth-page");
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    }
}
ContentLayoutComponent.ɵfac = function ContentLayoutComponent_Factory(t) { return new (t || ContentLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_1__.CustomizerService)); };
ContentLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContentLayoutComponent, selectors: [["app-content-layout"]], viewQuery: function ContentLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
    } }, decls: 6, vars: 0, consts: [[1, "wrapper"], [1, "main-panel"], [1, "main-content"], [1, "content-overlay"], [1, "content-wrapper", "p-0"]], template: function ContentLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 36141:
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullLayoutComponent": () => (/* binding */ FullLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/window.service */ 60294);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/config.service */ 36955);
/* harmony import */ var app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/service/auth/auth.service */ 67083);
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/layout.service */ 85682);
/* harmony import */ var app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/customizer.service */ 60360);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-device-detector */ 94593);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ 54696);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);
/* harmony import */ var _shared_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/notification-sidebar/notification-sidebar.component */ 76430);
/* harmony import */ var _shared_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/horizontal-menu/horizontal-menu.component */ 22185);
/* harmony import */ var _shared_directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/directives/topmenu.directive */ 60342);
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/directives/sidebar.directive */ 57744);
/* harmony import */ var _shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/vertical-menu/vertical-menu.component */ 82329);



















function FullLayoutComponent_app_horizontal_menu_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-horizontal-menu", 11);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function FullLayoutComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", 14);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r3.bgImage + ")"));
} }
const _c1 = function (a0, a1, a2) { return { "main-menu": a0, "menu-fixed": a1, "menu-native-scroll": a2 }; };
function FullLayoutComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("mouseenter", function FullLayoutComponent_div_3_Template_div_mouseenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r4.sidebarMouseenter($event); })("mouseleave", function FullLayoutComponent_div_3_Template_div_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r6.sidebarMouseleave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, FullLayoutComponent_div_3_div_2_Template, 1, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction3"](4, _c1, ctx_r1.menuPosition === "Side" || ctx_r1.displayOverlayMenu, ctx_r1.menuPosition === "Side" || ctx_r1.displayOverlayMenu, !ctx_r1.perfectScrollbarEnable));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("data-background-color", (ctx_r1.config == null ? null : ctx_r1.config.layout.variant) === "Transparent" ? "black" : ctx_r1.bgColor)("data-image", ctx_r1.bgImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.config == null ? null : ctx_r1.config.layout.sidebar.backgroundImage);
} }
function FullLayoutComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FullLayoutComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r7.scrollToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "show-overlay": a0 }; };
const _c3 = function (a0, a1) { return { "d-none": a0, "d-block": a1 }; };
class FullLayoutComponent {
    constructor(configService, authserive, layoutService, router, customizerService, document, window, renderer, cdr, deviceService) {
        this.configService = configService;
        this.authserive = authserive;
        this.layoutService = layoutService;
        this.router = router;
        this.customizerService = customizerService;
        this.document = document;
        this.window = window;
        this.renderer = renderer;
        this.cdr = cdr;
        this.deviceService = deviceService;
        this.hideSidebar = true;
        this.overlayContent = false;
        this.isSmallScreen = false;
        this.menuPosition = 'Side';
        this.displayOverlayMenu = false; // Vertical Side menu for screenSize < 1200
        this.config = {};
        this.isMenuCollapsedOnHover = false;
        this.isNavbarSeachTextEmpty = true;
        this.isScrollTopVisible = false;
        this.config = this.configService.templateConf;
        this.innerWidth = window.innerWidth;
        // On toggle sidebar menu
        this.layoutSub = layoutService.toggleSidebar$.subscribe((isShow) => {
            this.hideSidebar = !isShow;
            if (this.hideSidebar) {
                this.overlayContent = false;
            }
            else {
                this.overlayContent = true;
            }
            this.toggleSidebar();
        });
    }
    ngOnInit() {
        this.userdata = this.authserive.currentUserValue;
        this.configSub = this.configService.templateConf$.subscribe((templateConf) => {
            if (templateConf) {
                const themetype = this.userdata.theme ? this.userdata.theme : 'light';
                if (themetype == 'light') {
                    this.config = {
                        layout: {
                            variant: 'Light',
                            menuPosition: 'Side',
                            customizer: {
                                hidden: true,
                            },
                            navbar: {
                                type: 'Static',
                            },
                            sidebar: {
                                collapsed: this.configService.templateConf.layout.sidebar.collapsed,
                                size: 'sidebar-md',
                                backgroundColor: 'warning',
                                backgroundImage: false,
                                backgroundImageURL: 'assets/img/sidebar-bg/01.jpg',
                            },
                        },
                    };
                }
                else {
                    this.config = {
                        layout: {
                            variant: 'Dark',
                            menuPosition: 'Side',
                            customizer: {
                                hidden: true,
                            },
                            navbar: {
                                type: 'Static',
                            },
                            sidebar: {
                                collapsed: this.configService.templateConf.layout.sidebar.collapsed,
                                size: 'sidebar-md',
                                backgroundColor: 'black',
                                backgroundImage: true,
                                backgroundImageURL: 'assets/img/sidebar-bg/01.jpg',
                            },
                        },
                    };
                }
            }
            //load layout
            this.loadLayout();
            this.cdr.markForCheck();
        });
        //hide overlay class on router change
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_14__.NavigationEnd))
            .subscribe((routeChange) => {
            if (this.config.layout.menuPosition === 'Side' ||
                this.displayOverlayMenu) {
                // Vertical Menu
                if (this.innerWidth < 1200) {
                    this.layoutService.toggleSidebarSmallScreen(false);
                    this.overlayContent = false;
                    this.renderer.removeClass(this.document.body, 'overflow-hidden');
                }
            }
        });
    }
    ngAfterViewInit() {
        this.setMenuLayout();
    }
    ngOnDestroy() {
        //Unsubcribe subscriptions
        if (this.configSub) {
            this.configSub.unsubscribe();
        }
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    }
    //adjust layout
    setMenuLayout() {
        this.overlayContent = false;
        this.renderer.removeClass(this.document.body, 'blank-page');
        if (this.config.layout.menuPosition === 'Top') {
            // Horizontal Menu
            if (this.innerWidth < 1200) {
                // Screen size < 1200
                this.displayOverlayMenu = true;
                this.hideSidebar = true;
                this.renderer.removeClass(this.document.body, 'horizontal-menu');
                this.renderer.removeClass(this.document.body, 'menu-open');
                this.renderer.addClass(this.document.body, 'horizontal-layout');
                this.renderer.addClass(this.document.body, 'horizontal-menu-padding');
                this.renderer.addClass(this.document.body, 'vertical-layout');
                this.renderer.addClass(this.document.body, 'vertical-overlay-menu');
                this.renderer.addClass(this.document.body, 'fixed-navbar');
                this.renderer.addClass(this.document.body, 'menu-hide');
            }
            else {
                // Screen size > 1200
                this.displayOverlayMenu = false;
                this.hideSidebar = false;
                this.renderer.setAttribute(this.document.body, 'data-menu', 'horizontal-menu');
                this.renderer.removeClass(this.document.body, 'vertical-layout');
                this.renderer.removeClass(this.document.body, 'vertical-overlay-menu');
                this.renderer.removeClass(this.document.body, 'fixed-navbar');
                this.renderer.removeClass(this.document.body, 'menu-hide');
                this.renderer.removeClass(this.document.body, 'vertical-menu');
                // this.renderer.removeClass(this.document.body, "blank-page");
                this.renderer.addClass(this.document.body, 'horizontal-menu');
                this.renderer.addClass(this.document.body, 'horizontal-layout');
                this.renderer.addClass(this.document.body, 'horizontal-menu-padding');
            }
        }
        else if (this.config.layout.menuPosition === 'Side') {
            // Vertical Menu
            if (this.innerWidth < 1200) {
                // If Screen size < 1200
                this.displayOverlayMenu = true;
                this.renderer.removeClass(this.document.body, 'horizontal-layout');
                this.renderer.removeClass(this.document.body, 'horizontal-menu');
                this.renderer.removeClass(this.document.body, 'horizontal-menu-padding');
                this.renderer.removeClass(this.document.body, 'menu-expanded');
                this.renderer.removeClass(this.document.body, 'vertical-menu');
                this.renderer.removeClass(this.document.body, 'menu-open');
                this.renderer.removeClass(this.document.body, 'nav-collapsed');
                this.renderer.addClass(this.document.body, 'vertical-layout');
                this.renderer.addClass(this.document.body, 'menu-hide');
            }
            else {
                // If Screen size > 1200
                this.displayOverlayMenu = false;
                this.renderer.removeClass(this.document.body, 'horizontal-layout');
                this.renderer.removeClass(this.document.body, 'horizontal-menu');
                this.renderer.removeClass(this.document.body, 'horizontal-menu-padding');
                // this.renderer.removeClass(this.document.body, "blank-page");
                this.renderer.setAttribute(this.document.body, 'data-menu', 'vertical-menu');
                this.renderer.addClass(this.document.body, 'vertical-layout');
                if (!this.config.layout.sidebar.collapsed) {
                    this.renderer.addClass(this.document.body, 'menu-expanded');
                    this.renderer.addClass(this.document.body, 'menu-open');
                }
                this.renderer.addClass(this.document.body, 'vertical-menu');
                this.renderer.removeClass(this.document.body, 'menu-hide');
                this.renderer.removeClass(this.document.body, 'vertical-overlay-menu');
            }
        }
    }
    loadLayout() {
        //menu position "SIDE" or "TOP"
        if (this.config.layout.menuPosition &&
            this.config.layout.menuPosition.toString().trim() != '') {
            this.menuPosition = this.config.layout.menuPosition;
        }
        //Hide/show sidebar menu background image
        if (!this.config.layout.sidebar.backgroundImage) {
            this.bgImage = '';
        }
        else {
            this.bgImage = this.config.layout.sidebar.backgroundImageURL;
        }
        //Set sidebar menu background color
        if (!this.config.layout.sidebar.backgroundColor) {
            this.bgColor = this.customizerService.light_dark_colors[7].code;
        }
        else {
            this.bgColor = this.config.layout.sidebar.backgroundColor;
        }
        //toggle side menu
        if (this.config.layout.menuPosition === 'Side') {
            if (this.config.layout.sidebar.collapsed) {
                this.isMenuCollapsedOnHover = true;
            }
            else {
                this.isMenuCollapsedOnHover = true;
            }
            this.toggleSidebar();
        }
        this.removeTransparentBGClasses();
        // Layout variants
        if (this.config.layout.variant === 'Light') {
            this.renderer.removeClass(this.document.body, 'layout-dark');
            this.renderer.removeClass(this.document.body, 'layout-transparent');
        }
        else if (this.config.layout.variant === 'Dark') {
            this.renderer.removeClass(this.document.body, 'layout-transparent');
            this.renderer.addClass(this.document.body, 'layout-dark');
        }
        else if (this.config.layout.variant === 'Transparent') {
            this.renderer.addClass(this.document.body, 'layout-dark');
            this.renderer.addClass(this.document.body, 'layout-transparent');
            this.renderer.addClass(this.document.body, this.bgColor);
            this.bgImage = '';
        }
        this.setMenuLayout();
        // For Sidebar width
        if (this.config.layout.sidebar.size === 'sidebar-sm') {
            this.renderer.removeClass(this.document.body, 'sidebar-lg');
            this.renderer.addClass(this.document.body, 'sidebar-sm');
        }
        else if (this.config.layout.sidebar.size === 'sidebar-lg') {
            this.renderer.removeClass(this.document.body, 'sidebar-sm');
            this.renderer.addClass(this.document.body, 'sidebar-lg');
        }
        else {
            this.renderer.removeClass(this.document.body, 'sidebar-sm');
            this.renderer.removeClass(this.document.body, 'sidebar-lg');
        }
        if (this.config.layout.menuPosition === 'Side') {
            // vertical/Side menu expanded/collapse
            if (this.config.layout.sidebar.collapsed && !this.isSmallScreen) {
                // collapse side menu
                this.renderer.removeClass(this.document.body, 'menu-expanded');
                this.renderer.addClass(this.document.body, 'nav-collapsed');
            }
            else {
                // expand side menu
                this.renderer.removeClass(this.document.body, 'nav-collapsed');
                this.renderer.addClass(this.document.body, 'menu-expanded');
            }
        }
        //Navbar types
        if (this.config.layout.navbar.type === 'Static') {
            this.renderer.removeClass(this.document.body, 'navbar-sticky');
            this.renderer.addClass(this.document.body, 'navbar-static');
        }
        else if (this.config.layout.navbar.type === 'Fixed') {
            this.renderer.removeClass(this.document.body, 'navbar-static');
            this.renderer.addClass(this.document.body, 'navbar-sticky');
        }
    }
    toggleSidebar() {
        if (this.hideSidebar) {
            // on sidebar collapse
            this.renderer.removeClass(this.document.body, 'menu-expanded');
            this.renderer.removeClass(this.document.body, 'vertical-menu');
            this.renderer.removeClass(this.document.body, 'menu-open');
            this.renderer.addClass(this.document.body, 'vertical-layout');
            this.renderer.addClass(this.document.body, 'menu-hide');
            if (this.config.layout.menuPosition === 'Top') {
                this.renderer.addClass(this.document.body, 'vertical-overlay-menu');
            }
        }
        else {
            // on sidebar expand
            this.renderer.addClass(this.document.body, 'vertical-layout');
            this.renderer.addClass(this.document.body, 'menu-expanded');
            this.renderer.addClass(this.document.body, 'vertical-menu');
            if (this.config.layout.sidebar.collapsed) {
                this.renderer.removeClass(this.document.body, 'menu-open');
            }
            else {
                this.renderer.addClass(this.document.body, 'menu-open');
            }
            this.renderer.removeClass(this.document.body, 'menu-hide');
        }
        this.isTouchDevice();
    }
    isTouchDevice() {
        const isMobile = this.deviceService.isMobile();
        const isTablet = this.deviceService.isTablet();
        if (isMobile || isTablet) {
            if (!this.hideSidebar) {
                this.renderer.addClass(this.document.body, 'overflow-hidden');
            }
            else {
                this.renderer.removeClass(this.document.body, 'overflow-hidden');
            }
        }
    }
    hideCompactMenuOnSmallScreen() {
        if (this.innerWidth < 1200) {
            let conf = this.config;
            conf.layout.sidebar.collapsed = false;
            this.configService.applyTemplateConfigChange({ layout: conf.layout });
        }
    }
    //Remove transparent layout classes
    removeTransparentBGClasses() {
        this.customizerService.transparent_colors.forEach((_) => {
            this.renderer.removeClass(this.document.body, _.class);
        });
        this.customizerService.transparent_colors_with_shade.forEach((_) => {
            this.renderer.removeClass(this.document.body, _.class);
        });
    }
    sidebarMouseenter(e) {
        if (this.config.layout.sidebar.collapsed) {
            this.isMenuCollapsedOnHover = false;
            this.layoutService.overlaySidebartoggle(this.isMenuCollapsedOnHover);
        }
    }
    sidebarMouseleave(e) {
        if (this.config.layout.sidebar.collapsed) {
            this.isMenuCollapsedOnHover = true;
            this.layoutService.overlaySidebartoggle(this.isMenuCollapsedOnHover);
        }
    }
    //scroll to top on click
    scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
    onOutsideClick(e) {
        if (this.innerWidth < 1200) {
            if (!e.target.classList.contains('toggleSidebarNavbarButton')) {
                this.layoutService.toggleSidebarSmallScreen(false);
            }
        }
    }
    onWrapperClick() {
        this.isNavbarSeachTextEmpty = true;
    }
    checkNavbarSeachTextEmpty($event) {
        this.isNavbarSeachTextEmpty = $event;
    }
    onResize(event) {
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout((() => {
            this.innerWidth = event.target.innerWidth;
            this.setMenuLayout();
            this.hideCompactMenuOnSmallScreen();
        }).bind(this), 500);
    }
    //Add/remove classes on page scroll
    onWindowScroll() {
        let number = this.window.pageYOffset ||
            this.document.documentElement.scrollTop ||
            this.document.body.scrollTop ||
            0;
        if (number > 60) {
            this.renderer.addClass(this.document.body, 'navbar-scrolled');
        }
        else {
            this.renderer.removeClass(this.document.body, 'navbar-scrolled');
        }
        if (number > 400) {
            this.isScrollTopVisible = true;
        }
        else {
            this.isScrollTopVisible = false;
        }
        if (number > 20) {
            this.renderer.addClass(this.document.body, 'page-scrolled');
        }
        else {
            this.renderer.removeClass(this.document.body, 'page-scrolled');
        }
    }
}
FullLayoutComponent.ɵfac = function FullLayoutComponent_Factory(t) { return new (t || FullLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_4__.CustomizerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_0__.WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_16__.DeviceDetectorService)); };
FullLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: FullLayoutComponent, selectors: [["app-full-layout"]], hostBindings: function FullLayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("resize", function FullLayoutComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"])("scroll", function FullLayoutComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"]);
    } }, decls: 14, vars: 10, consts: [[3, "seachTextEmpty"], [1, "wrapper", 3, "ngClass", "click", "resize"], ["appTopMenu", "", 4, "ngIf"], ["appSidebar", "", "class", "app-sidebar", "data-active-color", "white", 3, "ngClass", "mouseenter", "mouseleave", 4, "ngIf"], [1, "main-panel"], [1, "main-content"], [1, "content-overlay"], [1, "content-wrapper"], ["class", "btn btn-primary scroll-top", "type", "button", 3, "click", 4, "ngIf"], [1, "sidenav-overlay", 3, "ngClass", "click"], [1, "drag-target"], ["appTopMenu", ""], ["appSidebar", "", "data-active-color", "white", 1, "app-sidebar", 3, "ngClass", "mouseenter", "mouseleave"], ["class", "sidebar-background", 3, "ngStyle", 4, "ngIf"], [1, "sidebar-background", 3, "ngStyle"], ["type", "button", 1, "btn", "btn-primary", "scroll-top", 3, "click"], [1, "ft-arrow-up"]], template: function FullLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("seachTextEmpty", function FullLayoutComponent_Template_app_navbar_seachTextEmpty_0_listener($event) { return ctx.checkNavbarSeachTextEmpty($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_1_listener() { return ctx.onWrapperClick(); })("resize", function FullLayoutComponent_Template_div_resize_1_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, FullLayoutComponent_app_horizontal_menu_2_Template, 1, 0, "app-horizontal-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, FullLayoutComponent_div_3_Template, 3, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, FullLayoutComponent_button_10_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "app-notification-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_12_listener($event) { return ctx.onOutsideClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](5, _c2, !ctx.isNavbarSeachTextEmpty));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.menuPosition === "Top" && !ctx.displayOverlayMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.menuPosition === "Side" || ctx.displayOverlayMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isScrollTopVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](7, _c3, ctx.displayOverlayMenu && ctx.hideSidebar && !ctx.overlayContent, ctx.displayOverlayMenu && !ctx.hideSidebar && ctx.overlayContent && ctx.innerWidth < 1200));
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _shared_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.NotificationSidebarComponent, _shared_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_8__.HorizontalMenuComponent, _shared_directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_9__.TopMenuDirective, _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_10__.SidebarDirective, _shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_11__.VerticalMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 55582:
/*!***************************************************************!*\
  !*** ./src/app/modules/channels/_services/channel.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelService": () => (/* binding */ ChannelService)
/* harmony export */ });
/* harmony import */ var app_core_service_FilterService_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/service/FilterService.service */ 45071);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 71435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 34301);






class ChannelService extends app_core_service_FilterService_service__WEBPACK_IMPORTED_MODULE_0__.FilterService {
    constructor(http) {
        super();
        this.http = http;
        this._isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this._isLoadingDelete$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this._isLoadingtable$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.apiUrl = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
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
    create(admin) {
        this._isLoading$.next(true);
        return this.http.post(`${this.apiUrl}/channel/add`, admin).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
            this._isLoading$.next(false);
        }));
    }
    getall(params) {
        this._isLoadingtable$.next(true);
        return this.http.post(`${this.apiUrl}/channel`, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
            this._isLoadingtable$.next(false);
        }));
    }
    delete(id) {
        this._isLoadingDelete$.next(true);
        return this.http.put(`${this.apiUrl}/channel/change-status/${id}`, { status: 3 }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
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
    update(admin, id) {
        this._isLoading$.next(true);
        return this.http.put(`${this.apiUrl}/channel/${id}`, admin).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
            this._isLoading$.next(false);
        }));
    }
}
ChannelService.ɵfac = function ChannelService_Factory(t) { return new (t || ChannelService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
ChannelService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ChannelService, factory: ChannelService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 74443:
/*!********************************************************************!*\
  !*** ./src/app/modules/contact-us/_services/contact-us.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsService": () => (/* binding */ ContactUsService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 71435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 34301);





class ContactUsService {
    constructor(http) {
        this.http = http;
        this._isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this._isLoadingTable$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this._badgeCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this.apiUrl = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    get isLoading$() {
        return this._isLoading$.asObservable();
    }
    get isLoadingTable$() {
        return this._isLoadingTable$.asObservable();
    }
    get badgeCount$() {
        return this._badgeCount$.asObservable();
    }
    addContactUs(contactData) {
        this._isLoading$.next(true);
        return this.http.post(`${this.apiUrl}/contact-us/add`, contactData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoading$.next(false);
        }));
    }
    getContactUs(params) {
        this._isLoadingTable$.next(true);
        return this.http.post(`${this.apiUrl}/contact-us`, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoadingTable$.next(false);
        }));
    }
    setStatus(id, body) {
        this._isLoading$.next(true);
        return this.http
            .put(`${this.apiUrl}/contact-us/change-status/${id}`, body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoading$.next(false);
            this.getBadgeCount();
        }));
    }
    getBadgeCount() {
        this._isLoading$.next(true);
        return this.http
            .get(`${this.apiUrl}/contact-us/badge/count`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this._isLoading$.next(false);
        })).subscribe((response) => {
            this._badgeCount$.next(response.result);
        });
    }
}
ContactUsService.ɵfac = function ContactUsService_Factory(t) { return new (t || ContactUsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
ContactUsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ContactUsService, factory: ContactUsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 82137:
/*!**********************************************************!*\
  !*** ./src/app/modules/not-found/not-found.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 79661);


const _c0 = function () { return ["/"]; };
class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 14, vars: 2, consts: [["id", "error"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], [1, "col-12", "text-center"], ["src", "assets/img/gallery/error.png", "alt", "", "height", "300", "width", "400", 1, "img-fluid", "error-img", "mt-2"], [1, "mt-4"], [1, "w-75", "error-text", "mx-auto", "mt-4"], [1, "btn", "btn-warning", "my-2", 3, "routerLink"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 21733:
/*!**************************!*\
  !*** ./src/app/roles.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Roles": () => (/* binding */ Roles)
/* harmony export */ });
const Roles = Object.freeze({
    ALLOW_ALL: 0,
    ADMIN: 'admin',
    SUPER_ADMIN: 'super_admin',
});


/***/ }),

/***/ 94074:
/*!**********************************************!*\
  !*** ./src/app/routes/full-layout.routes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Full_ROUTES": () => (/* binding */ Full_ROUTES)
/* harmony export */ });
/* harmony import */ var app_core_service_guard_permission_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/service/guard/permission.guard */ 90368);
/* harmony import */ var app_roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/roles */ 21733);


const { ALLOW_ALL, SUPER_ADMIN, ADMIN } = app_roles__WEBPACK_IMPORTED_MODULE_1__.Roles;
//Route for content layout with sidebar, navbar and footer.
const Full_ROUTES = [
    {
        path: 'dashboard',
        data: { permissions: [ALLOW_ALL] },
        canActivate: [app_core_service_guard_permission_guard__WEBPACK_IMPORTED_MODULE_0__.PermissionGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_ngx-daterangepicker-material_fesm2015_ngx-daterangepicker-material_js"), __webpack_require__.e("default-node_modules_swimlane_ngx-charts_fesm2015_swimlane-ngx-charts_js-node_modules_ng2-cha-12eb6a"), __webpack_require__.e("src_app_modules_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/modules/dashboard/dashboard.module */ 88757)).then((m) => m.DashboardModule),
    },
    {
        path: 'admins',
        data: { permissions: [SUPER_ADMIN, ADMIN] },
        canActivate: [app_core_service_guard_permission_guard__WEBPACK_IMPORTED_MODULE_0__.PermissionGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_ngx-daterangepicker-material_fesm2015_ngx-daterangepicker-material_js"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_modules_admin_admin-routing_module_ts"), __webpack_require__.e("src_app_modules_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/modules/admin/admin.module */ 27442)).then((m) => m.AdminModule),
    },
    {
        path: 'organization',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_ngx-daterangepicker-material_fesm2015_ngx-daterangepicker-material_js"), __webpack_require__.e("default-node_modules_ng-lazyload-image_fesm2015_ng-lazyload-image_mjs"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_organization_organization_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/modules/organization/organization.module */ 53611)).then((m) => m.OrganizationModule),
    },
    {
        path: 'sub-account',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_ngx-daterangepicker-material_fesm2015_ngx-daterangepicker-material_js"), __webpack_require__.e("default-node_modules_ng-lazyload-image_fesm2015_ng-lazyload-image_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_sub-account_sub-account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/modules/sub-account/sub-account.module */ 32548)).then((m) => m.SubAccountModule),
    },
    {
        path: 'locations',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_ngx-daterangepicker-material_fesm2015_ngx-daterangepicker-material_js"), __webpack_require__.e("default-node_modules_ng-lazyload-image_fesm2015_ng-lazyload-image_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_locations_locations_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/modules/locations/locations.module */ 62244)).then((m) => m.LocationsModule),
    },
    {
        path: 'clubs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_ngx-daterangepicker-material_fesm2015_ngx-daterangepicker-material_js"), __webpack_require__.e("default-node_modules_ng-lazyload-image_fesm2015_ng-lazyload-image_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_clubs_clubs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/modules/clubs/clubs.module */ 48475)).then((m) => m.ClubsModule),
    },
    {
        path: 'fans',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_ngx-daterangepicker-material_fesm2015_ngx-daterangepicker-material_js"), __webpack_require__.e("default-node_modules_ng-lazyload-image_fesm2015_ng-lazyload-image_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_fans_fans_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/modules/fans/fans.module */ 95093)).then((m) => m.FansModule),
    },
    {
        path: 'broadcasts',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_ngx-daterangepicker-material_fesm2015_ngx-daterangepicker-material_js"), __webpack_require__.e("default-node_modules_ng-lazyload-image_fesm2015_ng-lazyload-image_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_broadcast_broadcast_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/modules/broadcast/broadcast.module */ 10425)).then((m) => m.BroadcastModule),
    },
    /************************************* */
    {
        path: 'artists',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_ngx-daterangepicker-material_fesm2015_ngx-daterangepicker-material_js"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_modules_admin_admin-routing_module_ts"), __webpack_require__.e("src_app_modules_artist_artist_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/modules/artist/artist.module */ 86711)).then((m) => m.ArtistModule),
    },
    {
        path: 'admin/profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/modules/profile/profile.module */ 69267)).then((m) => m.ProfileModule),
    },
    {
        path: 'payment-history',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_ngx-daterangepicker-material_fesm2015_ngx-daterangepicker-material_js"), __webpack_require__.e("default-node_modules_swimlane_ngx-charts_fesm2015_swimlane-ngx-charts_js-node_modules_ng2-cha-12eb6a"), __webpack_require__.e("src_app_modules_payment-history_payment-history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/modules/payment-history/payment-history.module */ 46378)).then((m) => m.PaymentHistoryModule),
    },
    {
        path: 'contact-us',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("src_app_modules_contact-us_contact-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/modules/contact-us/contact-us.module */ 29926)).then((m) => m.ContactUsModule),
    },
];


/***/ }),

/***/ 21138:
/*!********************************************************!*\
  !*** ./src/app/shared/animations/custom-animations.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAnimations": () => (/* binding */ customAnimations)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 82458);

const customAnimations = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('slideInOut', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: '*' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: '0px' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('1 <=> 0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(200))
    ])
];


/***/ }),

/***/ 64609:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete-content.directive.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteContentDirective": () => (/* binding */ AutocompleteContentDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 91477);

class AutocompleteContentDirective {
    constructor(tpl) {
        this.tpl = tpl;
    }
}
AutocompleteContentDirective.ɵfac = function AutocompleteContentDirective_Factory(t) { return new (t || AutocompleteContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
AutocompleteContentDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutocompleteContentDirective, selectors: [["", "appAutocompleteContent", ""]] });


/***/ }),

/***/ 7575:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteComponent": () => (/* binding */ AutocompleteComponent)
/* harmony export */ });
/* harmony import */ var _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete-content.directive */ 64609);
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option/option.component */ 17606);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 40093);






const _c0 = ["root"];
function AutocompleteComponent_ng_template_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function AutocompleteComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AutocompleteComponent_ng_template_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.content ? ctx_r1.content.tpl : null);
} }
class AutocompleteComponent {
    optionsClick() {
        return this.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(options => {
            const clicks$ = options.map(option => option.click$);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(...clicks$);
        }));
    }
}
AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) { return new (t || AutocompleteComponent)(); };
AutocompleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AutocompleteComponent, selectors: [["app-autocomplete"]], contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_0__.AutocompleteContentDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _option_option_component__WEBPACK_IMPORTED_MODULE_1__.OptionComponent, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
    } }, viewQuery: function AutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.rootTemplate = _t.first);
    } }, exportAs: ["appAutocomplete"], decls: 2, vars: 0, consts: [["root", ""], [1, "autocomplete", "search-list"], [4, "ngTemplateOutlet"]], template: function AutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AutocompleteComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet], styles: [".autocomplete[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n.search-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  background: #FFFFFF;\n  width: 100%;\n  margin-top: 1rem;\n  padding-left: 0;\n  border-radius: 0.267rem;\n  z-index: 1200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZiIsImZpbGUiOiJhdXRvY29tcGxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRvY29tcGxldGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWFyY2gtbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBib3JkZXItcmFkaXVzOiAwLjI2N3JlbTtcbiAgei1pbmRleDogMTIwMDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 86780:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete.directive.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteDirective": () => (/* binding */ AutocompleteDirective),
/* harmony export */   "overlayClickOutside": () => (/* binding */ overlayClickOutside)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 82516);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ 2897);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ 16529);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-take-until-destroy */ 15818);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 59298);










class AutocompleteDirective {
    constructor(host, ngControl, vcr, overlay, router) {
        this.host = host;
        this.ngControl = ngControl;
        this.vcr = vcr;
        this.overlay = overlay;
        this.router = router;
    }
    get control() {
        return this.ngControl.control;
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(this.origin, 'focus').pipe((0,ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_1__.untilDestroyed)(this)).subscribe(() => {
            this.openDropdown();
            this.appAutocomplete.optionsClick()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.overlayRef.detachments()))
                .subscribe((value) => {
                this.control.setValue(value);
                this.close();
            });
        });
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe((routeChange) => {
            this.close();
        });
    }
    openDropdown() {
        this.close();
        this.overlayRef = this.overlay.create({
            width: this.origin.offsetWidth,
            maxHeight: 40 * 3,
            backdropClass: '',
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            positionStrategy: this.getOverlayPosition()
        });
        const template = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.TemplatePortal(this.appAutocomplete.rootTemplate, this.vcr);
        this.overlayRef.attach(template);
        overlayClickOutside(this.overlayRef, this.origin).subscribe(() => this.close());
    }
    ngOnDestroy() { }
    close() {
        if (this.overlayRef) {
            this.overlayRef.detach();
        }
        this.overlayRef = null;
    }
    getOverlayPosition() {
        const positions = [
            new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        return this.overlay
            .position()
            .flexibleConnectedTo(this.origin)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
    }
    get origin() {
        return this.host.nativeElement;
    }
}
AutocompleteDirective.ɵfac = function AutocompleteDirective_Factory(t) { return new (t || AutocompleteDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AutocompleteDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({ type: AutocompleteDirective, selectors: [["", "appAutocomplete", ""]], inputs: { appAutocomplete: "appAutocomplete" } });
function overlayClickOutside(overlayRef, origin) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(document, 'click')
        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => {
        const clickTarget = event.target;
        const notOrigin = clickTarget !== origin; // the input
        const notOverlay = !!overlayRef && (overlayRef.overlayElement.contains(clickTarget) === false); // the autocomplete
        return notOrigin && notOverlay;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(overlayRef.detachments()));
}


/***/ }),

/***/ 10322:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteModule": () => (/* binding */ AutocompleteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _autocomplete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete.component */ 7575);
/* harmony import */ var _autocomplete_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete.directive */ 86780);
/* harmony import */ var _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autocomplete-content.directive */ 64609);
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option/option.component */ 17606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 91477);






const publicApi = [
    _autocomplete_component__WEBPACK_IMPORTED_MODULE_0__.AutocompleteComponent,
    _autocomplete_directive__WEBPACK_IMPORTED_MODULE_1__.AutocompleteDirective,
    _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_2__.AutocompleteContentDirective,
    _option_option_component__WEBPACK_IMPORTED_MODULE_3__.OptionComponent
];
class AutocompleteModule {
}
AutocompleteModule.ɵfac = function AutocompleteModule_Factory(t) { return new (t || AutocompleteModule)(); };
AutocompleteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AutocompleteModule });
AutocompleteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AutocompleteModule, { declarations: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__.AutocompleteComponent,
        _autocomplete_directive__WEBPACK_IMPORTED_MODULE_1__.AutocompleteDirective,
        _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_2__.AutocompleteContentDirective,
        _option_option_component__WEBPACK_IMPORTED_MODULE_3__.OptionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule], exports: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__.AutocompleteComponent,
        _autocomplete_directive__WEBPACK_IMPORTED_MODULE_1__.AutocompleteDirective,
        _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_2__.AutocompleteContentDirective,
        _option_option_component__WEBPACK_IMPORTED_MODULE_3__.OptionComponent] }); })();


/***/ }),

/***/ 17606:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/option/option.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionComponent": () => (/* binding */ OptionComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 82516);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 67202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 91477);



const _c0 = ["*"];
class OptionComponent {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        this.click$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(this.element, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mapTo)(this.value));
    }
    get element() {
        return this.host.nativeElement;
    }
}
OptionComponent.ɵfac = function OptionComponent_Factory(t) { return new (t || OptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
OptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OptionComponent, selectors: [["app-option"]], inputs: { value: "value", url: "url" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "option"]], template: function OptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.no-result[_nghost-%COMP%] {\n  pointer-events: none;\n}\n\n.option[_ngcontent-%COMP%] {\n  padding: 0.8rem 1rem;\n  cursor: pointer;\n  display: block;\n}\n\n[_nghost-%COMP%]:first-child   .option[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.35rem;\n  border-top-right-radius: 0.35rem;\n}\n\n[_nghost-%COMP%]:last-child   .option[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0.35rem;\n  border-bottom-right-radius: 0.35rem;\n}\n\n.option[_ngcontent-%COMP%]:hover {\n  background-color: #F5F5F5;\n}\n\n.first-active-item[_nghost-%COMP%]   .option[_ngcontent-%COMP%] {\n  background-color: #F5F5F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUdFO0VBQ0UseUJBQUE7QUFBSiIsImZpbGUiOiJvcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46aG9zdC5uby1yZXN1bHQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm9wdGlvbiB7XG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46aG9zdDpmaXJzdC1jaGlsZCAub3B0aW9uIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zNXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMzVyZW07XG59XG5cbjpob3N0Omxhc3QtY2hpbGQgLm9wdGlvbiB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMzVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjM1cmVtO1xufVxuXG4ub3B0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuOmhvc3QuZmlyc3QtYWN0aXZlLWl0ZW0ge1xuICAub3B0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 93495:
/*!***********************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizerComponent": () => (/* binding */ CustomizerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var _services_customizer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/customizer.service */ 60360);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 32930);






const _c0 = ["customizer"];
const _c1 = function (a0) { return { "selected": a0 }; };
function CustomizerComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_div_68_Template_span_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const color_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.customizerService.changeSidebarBGColor(color_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", color_r7.class, " d-block rounded");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, color_r7.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-bg-color", color_r7.code);
} }
function CustomizerComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_div_70_Template_span_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const color_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.customizerService.changeSidebarBGColor(color_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", color_r10.class, " d-block rounded");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, color_r10.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-bg-color", color_r10.code);
} }
function CustomizerComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_div_77_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const color_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.customizerService.changeSidebarTransparentBGColor(color_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("rounded ", color_r13.class, " ct-glass-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, color_r13.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-bg-image", color_r13.class);
} }
function CustomizerComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_div_85_Template_img_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const img_r16 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.customizerService.changeSidebarBgImage(img_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r16.src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, img_r16.active));
} }
function CustomizerComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_div_93_Template_span_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const color_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.customizerService.changeSidebarTransparentBGColor(color_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", color_r19.class, " d-block rounded  ct-color-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, color_r19.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-bg-color", color_r19.class);
} }
const _c2 = function (a0) { return { "active": a0 }; };
function CustomizerComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Sidebar Width");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CustomizerComponent_div_114_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.changeSidebarWidth("sidebar-sm"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CustomizerComponent_div_114_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.changeSidebarWidth("sidebar-md"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CustomizerComponent_div_114_Template_input_change_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.changeSidebarWidth("sidebar-lg"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Large");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c2, ctx_r6.size === "sidebar-sm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c2, ctx_r6.size === "sidebar-md"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-md");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c2, ctx_r6.size === "sidebar-lg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-lg");
} }
const _c3 = function (a0) { return { open: a0 }; };
class CustomizerComponent {
    constructor(renderer, configService, customizerService) {
        this.renderer = renderer;
        this.configService = configService;
        this.customizerService = customizerService;
        this.isBgImageDisplay = true;
        this.isOpen = true;
        this.config = {};
        this.directionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.config = this.configService.templateConf;
        this.isOpen = !this.config.layout.customizer.hidden;
        if (this.config.layout.sidebar.size) {
            this.size = this.config.layout.sidebar.size;
        }
    }
    ngOnInit() {
    }
    changeSidebarWidth(value) {
        this.size = value;
        this.customizerService.changeSidebarWidth(value);
    }
    toggleCustomizer() {
        if (this.isOpen) {
            this.renderer.removeClass(this.customizer.nativeElement, "open");
            this.isOpen = false;
        }
        else {
            this.renderer.addClass(this.customizer.nativeElement, "open");
            this.isOpen = true;
        }
    }
    closeCustomizer() {
        this.renderer.removeClass(this.customizer.nativeElement, "open");
        this.isOpen = false;
    }
    bgImageDisplay(e) {
        if (e.target.checked) {
            this.isBgImageDisplay = true;
        }
        else {
            this.isBgImageDisplay = false;
        }
        //emit event to FUll Layout
        this.customizerService.bgImageDisplay(e);
    }
    ngOnDestroy() {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    }
}
CustomizerComponent.ɵfac = function CustomizerComponent_Factory(t) { return new (t || CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_customizer_service__WEBPACK_IMPORTED_MODULE_1__.CustomizerService)); };
CustomizerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomizerComponent, selectors: [["app-customizer"]], viewQuery: function CustomizerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customizer = _t.first);
    } }, outputs: { directionEvent: "directionEvent" }, decls: 115, vars: 17, consts: [[1, "customizer", "d-none", "d-lg-none", "d-xl-block", 3, "ngClass"], ["customizer", ""], [1, "customizer-close", 3, "click"], [1, "ft-x", "font-medium-3"], ["id", "customizer-toggle-icon", 1, "customizer-toggle", "bg-primary", 3, "click"], [1, "ft-settings", "font-medium-1", "spinner", "white", "align-middle"], ["data-ps-id", "df6a5ce4-a175-9172-4402-dabd98fc9c0a", 1, "customizer-content", "p-3", "ps-container", "ps-theme-dark", 3, "perfectScrollbar"], [1, "text-uppercase"], [1, "ct-layout"], [1, "mb-3", "d-flex", "align-items-center"], [1, "ft-layout", "font-medium-2", "mr-2"], [1, "layout-switch"], [1, "radio", "radio-sm", "d-inline-block", "light-layout", "mr-3"], ["id", "ll-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "ll-switch"], [1, "radio", "radio-sm", "d-inline-block", "dark-layout", "mr-3"], ["id", "dl-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "dl-switch"], [1, "radio", "radio-sm", "d-inline-block", "transparent-layout"], ["id", "tl-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "tl-switch"], [1, "ct-menu-type"], [1, "ft-credit-card", "font-medium-2", "mr-2"], [1, "menu-switch"], [1, "radio", "radio-sm", "d-inline-block", "menu-side", "mr-3"], ["id", "menu-side", "type", "radio", "name", "menu-switch", 3, "checked", "click"], ["for", "menu-side"], [1, "radio", "radio-sm", "d-inline-block", "menu-top"], ["id", "menu-top", "type", "radio", "name", "menu-switch", 3, "checked", "click"], ["for", "menu-top"], [1, "ct-navbar-type"], [1, "ft-more-horizontal", "font-medium-2", "mr-2"], [1, "navbar-switch"], [1, "radio", "radio-sm", "d-inline-block", "nav-static", "mr-3"], ["id", "nav-static", "type", "radio", "name", "navbar-switch", 3, "checked", "click"], ["for", "nav-static"], [1, "radio", "radio-sm", "d-inline-block", "nav-fixed"], ["id", "nav-fixed", "type", "radio", "name", "navbar-switch", 3, "checked", "click"], ["for", "nav-fixed"], [1, "ct-bg-color"], [1, "sb-options", "d-flex", "align-items-center", "mb-3"], [1, "ft-droplet", "font-medium-2", "mr-2"], [1, "cz-bg-color", "sb-color-options"], [1, "row", "mb-3"], ["class", "col px-2", 4, "ngFor", "ngForOf"], [1, "row"], [1, "tl-bg-img"], [1, "d-flex", "align-items-center", "mb-3"], [1, "ft-star", "font-medium-2", "mr-2"], [1, "cz-tl-bg-image", "row"], ["class", "col-sm-3", 4, "ngFor", "ngForOf"], [1, "ct-bg-image"], [1, "sb-bg-img", "d-flex", "align-items-center", "mb-3"], [1, "ft-sidebar", "font-medium-2", "mr-2"], [1, "cz-bg-image", "row", "sb-bg-img"], ["class", "col-2 px-2", 4, "ngFor", "ngForOf"], [1, "tl-color-option"], [1, "tl-color-options", "d-flex", "align-items-center", "mb-3"], [1, "cz-tl-bg-color"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "ct-bg-image-toggler"], [1, "togglebutton", "toggle-sb-bg-img"], [1, "float-right"], [1, "checkbox"], ["id", "sidebar-bg-img", "type", "checkbox", "checked", "", 1, "cz-bg-image-display", 3, "change"], ["for", "sidebar-bg-img"], [1, "ct-compact-toggler"], [1, "togglebutton"], ["id", "cz-compact-menu", "type", "checkbox", 1, "cz-compact-menu", 3, "checked", "change"], ["for", "cz-compact-menu"], ["class", "ct-sidebar-size", 4, "ngIf"], [1, "col", "px-2"], [2, "width", "30px", "height", "30px", 3, "ngClass", "click"], [1, "col-sm-3"], [3, "ngClass", "click"], [1, "col-2", "px-2"], ["alt", "sidebar bg image", "width", "90", 1, "rounded", 3, "src", "ngClass", "click"], [1, "col"], [1, "ct-sidebar-size"], ["id", "cz-sidebar-width", "data-toggle", "buttons", 1, "cz-sidebar-width", "btn-group", "btn-group-toggle"], [1, "btn", "btn-outline-primary", 3, "ngClass"], ["id", "cz-btn-radio-1", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-sm", 3, "checked", "change"], ["id", "cz-btn-radio-2", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-md", 3, "checked", "change"], ["id", "cz-btn-radio-3", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-lg", 3, "checked", "change"]], template: function CustomizerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_2_listener() { return ctx.closeCustomizer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_4_listener() { return ctx.toggleCustomizer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Theme Customizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Customize & Preview in Real Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Layout Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_19_listener() { return ctx.customizerService.switchLayout("light", ctx.isBgImageDisplay); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_23_listener() { return ctx.customizerService.switchLayout("dark", ctx.isBgImageDisplay); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_27_listener() { return ctx.customizerService.switchLayout("transparent", ctx.isBgImageDisplay); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Transparent");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Navigation Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_38_listener() { return ctx.customizerService.toggleMenuPosition("Side"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_42_listener() { return ctx.customizerService.toggleMenuPosition("Top"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Navbar Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_53_listener() { return ctx.customizerService.toggleNavbarType("Static"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Static");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_57_listener() { return ctx.customizerService.toggleNavbarType("Fixed"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Fixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Sidebar Color Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, CustomizerComponent_div_68_Template, 2, 7, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, CustomizerComponent_div_70_Template, 2, 7, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Background Colors with Shades");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, CustomizerComponent_div_77_Template, 2, 7, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "h6", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Sidebar Bg Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, CustomizerComponent_div_85_Template, 2, 4, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Background Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, CustomizerComponent_div_93_Template, 2, 7, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Sidebar Bg Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CustomizerComponent_Template_input_change_102_listener($event) { return ctx.bgImageDisplay($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Compact Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CustomizerComponent_Template_input_change_112_listener($event) { return ctx.customizerService.toggleCompactMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](114, CustomizerComponent_div_114_Template, 17, 12, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c3, ctx.isOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Transparent");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.menuPosition === "Side");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.menuPosition === "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.navbar.type === "Static");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.navbar.type === "Fixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutGradientBGColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutSolidBGColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customizerService.transparentLayoutBGColorsWithShades);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutBGImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customizerService.transparentLayoutBGColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.sidebar.collapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.config.layout.sidebar.collapsed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 91918:
/*!************************************************!*\
  !*** ./src/app/shared/data/template-search.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LISTITEMS": () => (/* binding */ LISTITEMS)
/* harmony export */ });
const ADMIN = 1, STAFF = 2, CREATOR = 3, RIGHT_HOLDER = 4;
const LISTITEMS = [
    {
        url: '/dashboard',
        name: 'Dashboard',
        icon: 'ft-home',
        hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
    },
    {
        url: '/creators/profile',
        name: 'Profile',
        icon: 'ft-user',
        hasaccess: [CREATOR],
    },
    {
        url: '/right-holders/profile',
        name: 'Profile',
        icon: 'ft-user',
        hasaccess: [RIGHT_HOLDER],
    },
    {
        url: '/admins',
        name: 'Admin',
        icon: 'ft-user',
        hasaccess: [ADMIN, STAFF],
    },
    {
        url: '/creators',
        name: 'Creators / Channel Owners',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF],
    },
    {
        url: '/right-holders',
        name: 'Rights Holders / Speech Owners',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF],
    },
    {
        url: '/contracts',
        name: 'All Agreements',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF],
    },
    {
        url: '/contracts',
        name: 'All Agreements',
        icon: 'ft-users',
        hasaccess: [CREATOR],
    },
    {
        url: '/channels',
        name: 'Channels',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
    },
    {
        url: '/Fanzooma-youtube-videos',
        name: 'Fanzooma YouTube videos',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
    },
    {
        url: '/monitoring-channels',
        name: 'Monitoring Channels',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF],
    },
    {
        url: '/monitoring-youtube-videos',
        name: 'Monitoring Youtube videos',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF],
    },
    {
        url: '/content-library',
        name: 'Library',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
    },
    {
        url: '/energy-level',
        name: 'Energy',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF],
    },
    {
        url: '/categories',
        name: 'Categories',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF],
    },
    {
        url: '/content-library',
        name: 'Library',
        icon: 'ft-play',
        hasaccess: [CREATOR, RIGHT_HOLDER],
    },
    {
        url: '/artists',
        name: 'Speakers',
        icon: 'ft-mic',
        hasaccess: [ADMIN, STAFF],
    },
    {
        url: '/browse',
        name: 'Browse',
        icon: 'ft-shopping-cart',
        hasaccess: [CREATOR],
    },
    {
        url: 'royalties-earnings',
        name: 'Royalties earnings Overview',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
    },
    {
        url: 'royalties/by-creator',
        name: 'Royalties earnings by Creators',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF],
    },
    {
        url: 'royalties/by-right-holders',
        name: 'Royalties earnings byRights Holders',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF, CREATOR],
    },
    {
        url: 'royalties/by-videos',
        name: 'Royalties earnings byYoutube Videos',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
    },
    {
        url: '/payment-setting',
        name: 'Payment Setting',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF],
    },
    {
        url: 'payment-history/landing-page',
        name: 'Payment overview',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
    },
    {
        url: 'payment-history/by-creator',
        name: 'Payment history by Creators',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF],
    },
    {
        url: 'payment-history/by-right-holders',
        name: 'Payment history by Rights Holders',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF, CREATOR],
    },
    {
        url: 'payment-history/by-channel',
        name: 'Payment history by Channel',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
    },
    {
        url: 'payment-history/by-videos',
        name: 'Payment history by Youtube videos',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
    },
    {
        url: '/inquiry-list',
        name: 'Inquiry List',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF],
    },
    {
        url: '/contact-us',
        name: 'Contact Us',
        icon: 'ft-arrow-right submenu-icon',
        hasaccess: [ADMIN, STAFF],
    },
    {
        url: '/contact-us',
        name: 'Messages',
        icon: 'ft-mail',
        hasaccess: [CREATOR],
    },
    {
        url: 'https://mindsetdrm.com/faq-speakers/',
        name: 'FAQ',
        icon: 'ft-external-link',
        hasaccess: [CREATOR],
    },
];


/***/ }),

/***/ 48327:
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-anchor-toggle.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarAnchorToggleDirective": () => (/* binding */ SidebarAnchorToggleDirective)
/* harmony export */ });
/* harmony import */ var _sidebar_link_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-link.directive */ 7883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);



class SidebarAnchorToggleDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick() {
        this.navlink.toggle();
    }
}
SidebarAnchorToggleDirective.ɵfac = function SidebarAnchorToggleDirective_Factory(t) { return new (t || SidebarAnchorToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_0__.SidebarLinkDirective)); };
SidebarAnchorToggleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SidebarAnchorToggleDirective, selectors: [["", "appSidebarAnchorToggle", ""]], hostBindings: function SidebarAnchorToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarAnchorToggleDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ 83273:
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-dropdown.directive.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarDropdownDirective": () => (/* binding */ SidebarDropdownDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 79661);


class SidebarDropdownDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
    }
    ngOnInit() {
        //write your code here!
    }
}
SidebarDropdownDirective.ɵfac = function SidebarDropdownDirective_Factory(t) { return new (t || SidebarDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
SidebarDropdownDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarDropdownDirective, selectors: [["", "appSidebarDropdown", ""]] });


/***/ }),

/***/ 7883:
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-link.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarLinkDirective": () => (/* binding */ SidebarLinkDirective)
/* harmony export */ });
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.directive */ 57744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);



class SidebarLinkDirective {
    constructor(sideNav) {
        this.sideNav = sideNav;
    }
    get open() {
        return this._open;
    }
    set open(value) {
        this._open = value;
    }
    get sidebarGroupActive() {
        return this._sidebarGroupActive;
    }
    set sidebarGroupActive(value) {
        this._sidebarGroupActive = value;
    }
    get navCollapsedOpen() {
        return this._navCollapsedOpen;
    }
    set navCollapsedOpen(value) {
        this._navCollapsedOpen = value;
    }
    ngOnInit() {
        this.sideNav.addLink(this);
    }
    ngOnDestroy() {
    }
    //when side menu (vertical menu) item gets clicked
    toggle() {
        this.open = !this.open;
        if (this.open) {
            this.sideNav.closeOtherLinks(this);
        }
        if (!this.open && this.level.toString() === "1" && this.hasSub) {
            this.sidebarGroupActive = false;
        }
    }
}
SidebarLinkDirective.ɵfac = function SidebarLinkDirective_Factory(t) { return new (t || SidebarLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sidebar_directive__WEBPACK_IMPORTED_MODULE_0__.SidebarDirective)); };
SidebarLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SidebarLinkDirective, selectors: [["", "appSidebarlink", ""]], hostVars: 6, hostBindings: function SidebarLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.open)("sidebar-group-active", ctx.sidebarGroupActive)("nav-collapsed-open", ctx.navCollapsedOpen);
    } }, inputs: { parent: "parent", level: "level", hasSub: "hasSub", path: "path", open: "open", sidebarGroupActive: "sidebarGroupActive", navCollapsedOpen: "navCollapsedOpen" } });


/***/ }),

/***/ 57744:
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarDirective": () => (/* binding */ SidebarDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/layout.service */ 85682);




class SidebarDirective {
    constructor(cdr, router, configService, layoutService) {
        this.cdr = cdr;
        this.router = router;
        this.configService = configService;
        this.layoutService = layoutService;
        this.navlinks = [];
        this.config = {};
        this.mouseEnter = false;
        this.sidebarExpanded = true;
        this.config = this.configService.templateConf;
        this.sidebarExpanded = !this.config.layout.sidebar.collapsed;
    }
    get navExpanded() {
        return this._navExpanded;
    }
    set navExpanded(value) {
        this._navExpanded = value;
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.layoutSub = this.configService.templateConf$.subscribe((templateConf) => {
            if (templateConf) {
                this.config = templateConf;
            }
            this.loadLayout();
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    }
    //load layout when changes in the config
    loadLayout() {
        this.sidebarExpanded = !this.config.layout.sidebar.collapsed;
        if (this.config.layout.sidebar.collapsed && !this.mouseEnter) {
            this.setSidebarGroupActiveCollapsed();
            this.navExpanded = false;
        }
        else {
            this.setSidebarGroupActive();
            this.navExpanded = true;
        }
    }
    //add menu links to the link list
    addLink(link) {
        this.navlinks.push(link);
    }
    //close all other menu items other than active one
    closeOtherLinks(openLink) {
        this.navlinks.forEach((link) => {
            if (link != openLink && (openLink.level.toString() === "1" || link.level === openLink.level)) {
                link.open = false;
                link.sidebarGroupActive = false;
            }
            else if (link === openLink && (openLink.level.toString() === "1") && link.hasSub === true) {
                link.sidebarGroupActive = true;
            }
            else if (link === openLink && (openLink.level.toString() === "1") && link.hasSub === false) {
                link.sidebarGroupActive = false;
                link.open = false;
            }
            else if (link === openLink && openLink.level.toString() != "1" && link.hasSub === false) {
                link.open = false;
                link.sidebarGroupActive = false;
                return;
            }
        });
    }
    ngAfterViewInit() {
    }
    // call when sidebar toggle is collapsed but still in expand mode on mouse hover
    setSidebarGroupActive() {
        if (this.navlinks.length > 0) {
            this.navlinks.forEach((link) => {
                link.sidebarGroupActive = false;
                link.navCollapsedOpen = false;
            });
            let matched = this.navlinks.find(link => link.path === this.router.url);
            if (matched) {
                let parent = this.navlinks.find(link => link.parent === matched.parent && link.level.toString() === "1" && link.hasSub === true);
                if (parent) {
                    parent.sidebarGroupActive = true;
                    parent.navCollapsedOpen = false;
                    parent.open = true;
                }
            }
        }
    }
    // call when sidebar toggle is collapsed and is in collapse mode on mouse out
    setSidebarGroupActiveCollapsed() {
        this.closeOtherLinks(this.navlinks.find(link => link.path === this.router.url));
        if (this.navlinks.length > 0) {
            this.navlinks.forEach((link) => {
                link.sidebarGroupActive = false;
                link.navCollapsedOpen = false;
            });
            let matched = this.navlinks.find(link => link.path === this.router.url);
            if (matched) {
                let parent = this.navlinks.find(link => link.parent === matched.parent && link.level.toString() === "1" && link.hasSub === true);
                if (parent) {
                    parent.sidebarGroupActive = true;
                    parent.navCollapsedOpen = true;
                    parent.open = false;
                }
            }
        }
    }
    // mouse enter event of side menu
    onMouseOver(e) {
        this.mouseEnter = true;
        if (this.config.layout.sidebar.collapsed) {
            this.setSidebarGroupActive();
            this.navExpanded = true;
        }
    }
    // mouse leave event of side menu
    onMouseOut(e) {
        this.mouseEnter = false;
        if (this.config.layout.sidebar.collapsed) {
            this.setSidebarGroupActiveCollapsed();
            this.navExpanded = false;
        }
    }
}
SidebarDirective.ɵfac = function SidebarDirective_Factory(t) { return new (t || SidebarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService)); };
SidebarDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: SidebarDirective, selectors: [["", "appSidebar", ""]], hostVars: 2, hostBindings: function SidebarDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function SidebarDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseOver($event); })("mouseleave", function SidebarDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseOut($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("expanded", ctx.navExpanded);
    } }, inputs: { navExpanded: "navExpanded" } });


/***/ }),

/***/ 53418:
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleFullscreenDirective": () => (/* binding */ ToggleFullscreenDirective)
/* harmony export */ });
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! screenfull */ 15950);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);


class ToggleFullscreenDirective {
    onClick() {
        if (screenfull__WEBPACK_IMPORTED_MODULE_0__.isEnabled) {
            screenfull__WEBPACK_IMPORTED_MODULE_0__.toggle();
        }
    }
}
ToggleFullscreenDirective.ɵfac = function ToggleFullscreenDirective_Factory(t) { return new (t || ToggleFullscreenDirective)(); };
ToggleFullscreenDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ToggleFullscreenDirective, selectors: [["", "appToggleFullscreen", ""]], hostBindings: function ToggleFullscreenDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToggleFullscreenDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } } });


/***/ }),

/***/ 91354:
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-anchor-toggle.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuAnchorToggleDirective": () => (/* binding */ TopMenuAnchorToggleDirective)
/* harmony export */ });
/* harmony import */ var _topmenu_link_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topmenu-link.directive */ 31793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);



class TopMenuAnchorToggleDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    // @HostListener("click", ["$event"])
    // onClick() {
    //   this.navlink.toggle();
    // }
    onMouseOver(e) {
        this.navlink.openDropdown();
    }
}
TopMenuAnchorToggleDirective.ɵfac = function TopMenuAnchorToggleDirective_Factory(t) { return new (t || TopMenuAnchorToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_0__.TopMenuLinkDirective)); };
TopMenuAnchorToggleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TopMenuAnchorToggleDirective, selectors: [["", "appTopMenuAnchorToggle", ""]], hostBindings: function TopMenuAnchorToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function TopMenuAnchorToggleDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseOver($event); });
    } } });


/***/ }),

/***/ 90235:
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-dropdown.directive.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuDropdownDirective": () => (/* binding */ TopMenuDropdownDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 79661);


class TopMenuDropdownDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
    }
    ngOnInit() {
        //write your code here!
    }
}
TopMenuDropdownDirective.ɵfac = function TopMenuDropdownDirective_Factory(t) { return new (t || TopMenuDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
TopMenuDropdownDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TopMenuDropdownDirective, selectors: [["", "appTopMenuDropdown", ""]] });


/***/ }),

/***/ 31793:
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-link.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuLinkDirective": () => (/* binding */ TopMenuLinkDirective)
/* harmony export */ });
/* harmony import */ var _topmenu_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topmenu.directive */ 60342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);



class TopMenuLinkDirective {
    constructor(topNav) {
        this.topNav = topNav;
    }
    get show() {
        return this._show;
    }
    set show(value) {
        this._show = value;
        if (value) {
            this.topNav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.topNav.addLink(this);
    }
    ngOnDestroy() {
    }
    // public toggle(): any {
    //   this.show = !this.show;
    // }
    openDropdown() {
        this.show = true;
    }
}
TopMenuLinkDirective.ɵfac = function TopMenuLinkDirective_Factory(t) { return new (t || TopMenuLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_topmenu_directive__WEBPACK_IMPORTED_MODULE_0__.TopMenuDirective)); };
TopMenuLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TopMenuLinkDirective, selectors: [["", "appTopMenulink", ""]], hostVars: 2, hostBindings: function TopMenuLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show);
    } }, inputs: { parent: "parent", level: "level", show: "show" } });


/***/ }),

/***/ 60342:
/*!********************************************************!*\
  !*** ./src/app/shared/directives/topmenu.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuDirective": () => (/* binding */ TopMenuDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 91477);

class TopMenuDirective {
    constructor() {
        this.navlinks = [];
    }
    ngOnInit() {
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    closeOtherLinks(openLink) {
        this.navlinks.forEach((link) => {
            if (link != openLink && (openLink.level.toString() === "1" || link.level === openLink.level)) {
                link.show = false;
            }
        });
    }
    onMouseOut(e) {
        this.navlinks.forEach((link) => {
            link.show = false;
        });
    }
}
TopMenuDirective.ɵfac = function TopMenuDirective_Factory(t) { return new (t || TopMenuDirective)(); };
TopMenuDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TopMenuDirective, selectors: [["", "appTopMenu", ""]], hostBindings: function TopMenuDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function TopMenuDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseOut($event); });
    } } });


/***/ }),

/***/ 45227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 40093);


class FooterComponent {
    constructor() {
        //Variables
        this.currentDate = new Date();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 4, consts: [[1, "footer"], [1, "copyright", "clearfix", "text-muted", "m-0"], [1, "d-none", "d-sm-inline-block"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ", All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Copyright \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.currentDate, "yyyy"), " Fanzooma ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 22185:
/*!*********************************************************************!*\
  !*** ./src/app/shared/horizontal-menu/horizontal-menu.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuComponent": () => (/* binding */ HorizontalMenuComponent)
/* harmony export */ });
/* harmony import */ var _navigation_routes_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-routes.config */ 7015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/layout.service */ 85682);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/topmenu-dropdown.directive */ 90235);
/* harmony import */ var _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/topmenu-link.directive */ 31793);
/* harmony import */ var _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/topmenu-anchor-toggle.directive */ 91354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 13828);










const _c0 = function (a0) { return [a0]; };
function HorizontalMenuComponent_li_3_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, menuItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 2, menuItem_r1.title));
} }
function HorizontalMenuComponent_li_3_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c0, menuItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 3, menuItem_r1.title));
} }
function HorizontalMenuComponent_li_3_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c0, menuItem_r1.path), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c0, menuItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 3, menuItem_r1.title));
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", "dropdown-toggle dropdown-item d-flex align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c0, menuSubItem_r10.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 3, menuSubItem_r10.title));
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r10.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c0, menuSubItem_r10.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, menuSubItem_r10.title));
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c0, menuSubItem_r10.path), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("ngClass", "dropdown-item d-flex align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c0, menuSubItem_r10.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, menuSubItem_r10.title));
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubsubItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, menuSubsubItem_r19.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c0, menuSubsubItem_r19.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](menuSubsubItem_r19.title);
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubsubItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center")("href", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, menuSubsubItem_r19.path), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c0, menuSubsubItem_r19.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](menuSubsubItem_r19.title);
} }
const _c1 = function () { return { exact: true }; };
function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_a_1_Template, 4, 8, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_ng_template_2_Template, 4, 8, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubsubItem_r19 = ctx.$implicit;
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("level", ctx_r18.level + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("parent", menuItem_r1.title)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !menuSubsubItem_r19.isExternalLink)("ngIfElse", _r21);
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_Template, 4, 6, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", menuSubItem_r10.submenu);
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_a_1_Template, 5, 7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HorizontalMenuComponent_li_3_ul_4_li_1_a_2_Template, 5, 8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_ul_4_li_1_a_3_Template, 5, 10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_Template, 2, 1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubItem_r10 = ctx.$implicit;
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("level", ctx_r9.level + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("parent", menuItem_r1.title)("routerLinkActive", menuSubItem_r10.submenu.length != 0 ? "active" : "active")("ngClass", menuSubItem_r10.class === "dropdown-item" ? "" : "has-sub dropdown dropdown-submenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-menu", menuSubItem_r10.class === "dropdown-item" ? "" : "dropdown-submenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuSubItem_r10.submenu.length > 0 && !menuSubItem_r10.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuSubItem_r10.submenu.length === 0 && !menuSubItem_r10.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuSubItem_r10.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuSubItem_r10.submenu.length > 0);
} }
function HorizontalMenuComponent_li_3_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_Template, 5, 9, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", menuItem_r1.submenu);
} }
function HorizontalMenuComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_a_1_Template, 5, 6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HorizontalMenuComponent_li_3_a_2_Template, 5, 7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_a_3_Template, 5, 9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HorizontalMenuComponent_li_3_ul_4_Template, 2, 1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("level", ctx_r0.level + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("parent", menuItem_r1.title)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c0, menuItem_r1.class))("routerLinkActive", menuItem_r1.submenu.length != 0 ? "active" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-menu", menuItem_r1.class === "dropdown nav-item" ? "dropdown" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuItem_r1.submenu.length > 0 && !menuItem_r1.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuItem_r1.submenu.length === 0 && !menuItem_r1.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuItem_r1.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuItem_r1.submenu.length > 0);
} }
const _c2 = function (a0, a1) { return { "navbar-sticky": a0, "navbar-fixed": a1 }; };
class HorizontalMenuComponent {
    constructor(layoutService, configService, cdr, router) {
        this.layoutService = layoutService;
        this.configService = configService;
        this.cdr = cdr;
        this.router = router;
        this.config = {};
        this.level = 0;
        this.transparentBGClass = "";
        this.menuPosition = 'Side';
        this.config = this.configService.templateConf;
    }
    ngOnInit() {
        this.menuItems = _navigation_routes_config__WEBPACK_IMPORTED_MODULE_0__.HROUTES;
    }
    ngAfterViewInit() {
        this.layoutSub = this.configService.templateConf$.subscribe((templateConf) => {
            if (templateConf) {
                this.config = templateConf;
            }
            this.loadLayout();
            this.cdr.markForCheck();
        });
    }
    loadLayout() {
        if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
            this.menuPosition = this.config.layout.menuPosition;
        }
        if (this.config.layout.variant === "Transparent") {
            this.transparentBGClass = this.config.layout.sidebar.backgroundColor;
        }
        else {
            this.transparentBGClass = "";
        }
    }
    ngOnDestroy() {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    }
}
HorizontalMenuComponent.ɵfac = function HorizontalMenuComponent_Factory(t) { return new (t || HorizontalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
HorizontalMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: HorizontalMenuComponent, selectors: [["app-horizontal-menu"]], decls: 4, vars: 8, consts: [["role", "navigation", "data-menu", "menu-wrapper", "data-nav", "brand-center", 3, "ngClass"], ["data-menu", "menu-container", 1, "navbar-container", "main-menu-content", "center-layout"], ["appTopMenuDropdown", "", "id", "main-menu-navigation", "data-menu", "menu-navigation", 1, "navigation-main", "nav", "navbar-nav"], ["appTopMenulink", "", 3, "parent", "level", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", 3, "parent", "level", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", "class", "dropdown-toggle nav-link d-flex align-items-center", 4, "ngIf"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", "class", "nav-link d-flex align-items-center", 3, "routerLink", 4, "ngIf"], ["target", "_blank", "data-toggle", "dropdown", "class", "nav-link d-flex align-items-center", 3, "href", 4, "ngIf"], ["appTopMenuDropdown", "", "class", "dropdown-menu", 4, "ngIf"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], [3, "ngClass"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 1, "nav-link", "d-flex", "align-items-center", 3, "routerLink"], ["target", "_blank", "data-toggle", "dropdown", 1, "nav-link", "d-flex", "align-items-center", 3, "href"], ["appTopMenuDropdown", "", 1, "dropdown-menu"], ["appTopMenulink", "", 3, "parent", "level", "routerLinkActive", "ngClass", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", 3, "parent", "level", "routerLinkActive", "ngClass"], ["appTopMenuAnchorToggle", "", 3, "ngClass", 4, "ngIf"], ["appTopMenuAnchorToggle", "", 3, "routerLink", "ngClass", 4, "ngIf"], [3, "href", "ngClass", 4, "ngIf"], ["appTopMenuAnchorToggle", "", 3, "ngClass"], ["appTopMenuAnchorToggle", "", 3, "routerLink", "ngClass"], [3, "href", "ngClass"], ["appTopMenulink", "", "data-menu", "", "data-toggle", "dropdown", "routerLinkActive", "active", 3, "parent", "level", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", "data-menu", "", "data-toggle", "dropdown", "routerLinkActive", "active", 3, "parent", "level", "routerLinkActiveOptions"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 3, "ngClass", "routerLink", 4, "ngIf", "ngIfElse"], ["externalSubSubLinkBlock", ""], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 3, "ngClass", "routerLink"], [1, ""], ["data-toggle", "dropdown", "target", "_blank", 3, "ngClass", "href"]], template: function HorizontalMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_Template, 5, 13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("header-navbar navbar-expand-sm navbar navbar-horizontal navbar-fixed navbar-light navbar-shadow menu-border navbar-brand-center  ", ctx.transparentBGClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](5, _c2, ctx.menuPosition === "Top" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Static", ctx.menuPosition === "Top" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Fixed"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__.TopMenuDropdownDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_4__.TopMenuLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_5__.TopMenuAnchorToggleDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7015:
/*!********************************************************************!*\
  !*** ./src/app/shared/horizontal-menu/navigation-routes.config.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HROUTES": () => (/* binding */ HROUTES)
/* harmony export */ });
const HROUTES = [
    {
        path: '', title: 'Dashboard', icon: 'ft-home', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            { path: '/dashboard/dashboard1', title: 'Dashboard 1', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Dashboard 2', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Apps', icon: 'ft-box', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            { path: '/inbox', title: 'Email', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/chat', title: 'Chat', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/chat-ngrx', title: 'Chat NgRx', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/taskboard', title: 'Task Board', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/taskboard-ngrx', title: 'Task Board NgRx', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/calendar', title: 'Calendar', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'UI Kit', icon: 'ft-aperture', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            { path: '/uikit/grids', title: 'Grid', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/uikit/typography', title: 'Typography', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/uikit/syntaxhighlighter', title: 'Syntax Highlighter', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/uikit/helperclasses', title: 'Helper Classes', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/uikit/textutilities', title: 'Text Utilities', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/uikit/colorpalettes', title: 'Color Palette', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            {
                path: '', title: 'Icons', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/uikit/feather', title: 'Feather Icon', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/uikit/font-awesome', title: 'Font Awesome Icon', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/uikit/simple-line', title: 'Simple Line Icon', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
        ]
    },
    {
        path: '', title: 'Components', icon: 'ft-briefcase', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Cards', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/cards/basic', title: 'Basic Cards', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/cards/advanced', title: 'Advanced Cards', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Bootstrap', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/components/buttons', title: 'Buttons', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/ng-buttons', title: 'NG Buttons', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/alerts', title: 'Alerts', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/badges', title: 'Badges', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/dropdowns', title: 'Dropdowns', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/media', title: 'Media Objects', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/pagination', title: 'Pagination', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/progress', title: 'Progress Bars', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/models', title: 'Modals', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/collapse', title: 'Collapse', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/lists', title: 'List', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/accordion', title: 'Accordion', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/carousel', title: 'Carousel', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/popover', title: 'Popover', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/rating', title: 'Rating', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/navs', title: 'Navs', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/tooltip', title: 'Tooltip', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/typeahead', title: 'Typeahead', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Extra', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/components/sweetalerts', title: 'Sweet Alert', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/toastr', title: 'Toastr', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/nouislider', title: 'NoUI Slider', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/upload', title: 'Upload', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/dragndrop', title: 'Drag and Drop', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/tour', title: 'Tour', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/cropper', title: 'Image Cropper', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/avatar', title: 'Avatar', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/swiper', title: 'Swiper', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            }
        ]
    },
    {
        path: '', title: 'Forms', icon: 'ft-edit', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Elements', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/forms/inputs', title: 'Inputs', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/input-groups', title: 'Input Groups', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/radio', title: 'Radio', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/checkbox', title: 'Checkbox', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/switch', title: 'Switch', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/select', title: 'Select', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/editor', title: 'Editor', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/tags', title: 'Input Tags', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/datepicker', title: 'Datepicker', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/timepicker', title: 'Timepicker', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                ]
            },
            { path: '/forms/layout', title: 'Layouts', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/forms/validation', title: 'Validation', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/forms/archwizard', title: 'Wizard', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Tables', icon: 'ft-grid', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Bootstrap Tables', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/tables/basic', title: 'Basic', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/tables/extended', title: 'Extended', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/tables/angular', title: 'Angular', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '/datatables', title: 'DataTables', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', title: 'Charts & Maps', icon: 'ft-bar-chart-2', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Charts', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/charts/chartjs', title: 'ChartJs', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/charts/chartist', title: 'Chartist', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/charts/apex', title: 'Apex', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/charts/ngx', title: 'NGX', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                ]
            },
            {
                path: '', title: 'Maps', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/maps/google', title: 'Google Map', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/maps/fullscreen', title: 'Full Screen Map', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            }
        ]
    },
    {
        path: '', title: 'Pages', icon: 'ft-file-text', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Authentication', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/pages/forgotpassword', title: 'Forgot Password', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/pages/login', title: 'Login', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/pages/register', title: 'Register', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/pages/lockscreen', title: 'Lock Screen', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
            { path: '/pages/horizontaltimeline', title: 'Horizontal Timeline', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            {
                path: '', title: 'Vertical Timeline', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/pages/timeline-vertical-center', title: 'Center', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/pages/timeline-vertical-left', title: 'Left', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/pages/timeline-vertical-right', title: 'Right', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Users', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/pages/users-list', title: 'List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/pages/users-view', title: 'View', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/pages/users-edit', title: 'Edit', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            { path: '/pages/account-settings', title: 'Account Settings', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/profile', title: 'User Profile', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/invoice', title: 'Invoice', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/error', title: 'Error', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/comingsoon', title: 'Coming Soon', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/maintenance', title: 'Maintenance', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/gallery', title: 'Gallery', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/search', title: 'Search', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/faq', title: 'FAQ', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/kb', title: 'Knowledge Base', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
        ]
    }
];


/***/ }),

/***/ 54696:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 59298);
/* harmony import */ var _data_template_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/template-search */ 91918);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 13828);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/layout.service */ 85682);
/* harmony import */ var app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/service/auth/auth.service */ 67083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-click-outside */ 25754);
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/toggle-fullscreen.directive */ 53418);
/* harmony import */ var _components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/autocomplete/autocomplete.directive */ 86780);
/* harmony import */ var _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/autocomplete/autocomplete.component */ 7575);
/* harmony import */ var _components_autocomplete_autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/autocomplete/autocomplete-content.directive */ 64609);
/* harmony import */ var _components_autocomplete_option_option_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/autocomplete/option/option.component */ 17606);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 95684);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipes/filter.pipe */ 68738);



















const _c0 = ["search"];
const _c1 = ["searchResults"];
function NavbarComponent_ng_template_21_ng_container_0_app_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-option", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NavbarComponent_ng_template_21_ng_container_0_app_option_1_Template_app_option_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12); const option_r9 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return ctx_r11.redirectTo(option_r9.url); })("mouseenter", function NavbarComponent_ng_template_21_ng_container_0_app_option_1_Template_app_option_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return ctx_r13.removeActiveClass(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("url", option_r9.url)("value", option_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMapInterpolate1"]("", option_r9.icon, " mr-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](option_r9.name);
} }
function NavbarComponent_ng_template_21_ng_container_0_app_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_template_21_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, NavbarComponent_ng_template_21_ng_container_0_app_option_1_Template, 7, 6, "app-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, NavbarComponent_ng_template_21_ng_container_0_app_option_2_Template, 2, 0, "app-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const result_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", result_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !result_r6.length);
} }
function NavbarComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, NavbarComponent_ng_template_21_ng_container_0_Template, 3, 2, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "filter");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](1, 1, ctx_r2.listItems, ctx_r2.control.value));
} }
const _c2 = function () { return ["/"]; };
function NavbarComponent_a_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "APEX");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r3.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
} }
function NavbarComponent_ul_30_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Super Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} }
function NavbarComponent_ul_30_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} }
const _c3 = function () { return ["/admin/profile"]; };
function NavbarComponent_ul_30_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, NavbarComponent_ul_30_ng_container_7_Template, 2, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, NavbarComponent_ul_30_ng_container_8_Template, 2, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Edit Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NavbarComponent_ul_30_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r17.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _user_r14 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _user_r14.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _user_r14.role == "super_admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _user_r14.role == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](4, _c3));
} }
const _c4 = function (a0, a1, a2, a3) { return { "navbar-brand-center": a0, "navbar-static": a1, "navbar-sticky": a2, "fixed-top": a3 }; };
class NavbarComponent {
    constructor(translate, layoutService, authservice, router, configService, cdr, authserive) {
        this.translate = translate;
        this.layoutService = layoutService;
        this.authservice = authservice;
        this.router = router;
        this.configService = configService;
        this.cdr = cdr;
        this.authserive = authserive;
        this.currentLang = "en";
        this.selectedLanguageText = "English";
        this.selectedLanguageFlag = "./assets/img/flags/us.png";
        this.toggleClass = "ft-maximize";
        this.placement = "bottom-right";
        this.logoUrl = 'assets/mindset/logo.png';
        this.menuPosition = 'Side';
        this.isSmallScreen = false;
        this.searchOpenClass = "";
        this.transparentBGClass = "";
        this.hideSidebar = true;
        this.isCollapsed = true;
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.seachTextEmpty = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.ctrlF = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.listItems = [];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl();
        this.config = {};
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : "en");
        this.config = this.configService.templateConf;
        this.innerWidth = window.innerWidth;
        this.layoutSub = layoutService.toggleSidebar$.subscribe(isShow => {
            this.hideSidebar = !isShow;
        });
    }
    ngOnInit() {
        this.user$ = this.authserive.currentUserSubject.asObservable();
        this.listItems = _data_template_search__WEBPACK_IMPORTED_MODULE_0__.LISTITEMS;
        this.listItems = this.listItems.filter(li => {
            var _a;
            return li.hasaccess.includes((_a = this.authserive.currentUserValue) === null || _a === void 0 ? void 0 : _a.type);
        });
        if (this.innerWidth < 1200) {
            this.isSmallScreen = true;
        }
        else {
            this.isSmallScreen = false;
        }
    }
    ngAfterViewInit() {
        this.configSub = this.configService.templateConf$.subscribe((templateConf) => {
            if (templateConf) {
                this.config = templateConf;
            }
            this.loadLayout();
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
        if (this.configSub) {
            this.configSub.unsubscribe();
        }
    }
    onResize(event) {
        this.innerWidth = event.target.innerWidth;
        if (this.innerWidth < 1200) {
            this.isSmallScreen = true;
        }
        else {
            this.isSmallScreen = false;
        }
    }
    loadLayout() {
        if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
            this.menuPosition = this.config.layout.menuPosition;
        }
        if (this.config.layout.variant === "Light") {
            this.logoUrl = 'assets/img/logo-dark.png';
        }
        else {
            this.logoUrl = 'assets/mindset/logo.png';
        }
        if (this.config.layout.variant === "Transparent") {
            this.transparentBGClass = this.config.layout.sidebar.backgroundColor;
        }
        else {
            this.transparentBGClass = "";
        }
    }
    onSearchKey(event) {
        if (this.searchResults && this.searchResults.length > 0) {
            this.searchResults.first.host.nativeElement.classList.add('first-active-item');
        }
        if (event.target.value === "") {
            this.seachTextEmpty.emit(true);
        }
        else {
            this.seachTextEmpty.emit(false);
        }
    }
    removeActiveClass() {
        if (this.searchResults && this.searchResults.length > 0) {
            this.searchResults.first.host.nativeElement.classList.remove('first-active-item');
        }
    }
    onEscEvent() {
        this.control.setValue("");
        this.searchOpenClass = '';
        this.seachTextEmpty.emit(true);
    }
    onEnter() {
        if (this.searchResults && this.searchResults.length > 0) {
            let url = this.searchResults.first.url;
            if (url && url != '') {
                this.control.setValue("");
                this.searchOpenClass = '';
                this.router.navigate([url]);
                this.seachTextEmpty.emit(true);
            }
        }
    }
    redirectTo(value) {
        this.router.navigate([value]);
        this.seachTextEmpty.emit(true);
    }
    ChangeLanguage(language) {
        this.translate.use(language);
        if (language === 'en') {
            this.selectedLanguageText = "English";
            this.selectedLanguageFlag = "./assets/img/flags/us.png";
        }
        else if (language === 'es') {
            this.selectedLanguageText = "Spanish";
            this.selectedLanguageFlag = "./assets/img/flags/es.png";
        }
        else if (language === 'pt') {
            this.selectedLanguageText = "Portuguese";
            this.selectedLanguageFlag = "./assets/img/flags/pt.png";
        }
        else if (language === 'de') {
            this.selectedLanguageText = "German";
            this.selectedLanguageFlag = "./assets/img/flags/de.png";
        }
    }
    ToggleClass() {
        if (this.toggleClass === "ft-maximize") {
            this.toggleClass = "ft-minimize";
        }
        else {
            this.toggleClass = "ft-maximize";
        }
    }
    toggleSearchOpenClass(display) {
        this.control.setValue("");
        if (display) {
            this.searchOpenClass = 'open';
            setTimeout(() => {
                this.searchElement.nativeElement.focus();
            }, 0);
        }
        else {
            this.searchOpenClass = '';
        }
        this.seachTextEmpty.emit(true);
    }
    // @HostListener('window:keydown', ['$event'])
    // onKeyDown(event: KeyboardEvent): void {
    //   if (event.keyCode === 70) {
    //     this.toggleSearchOpenClass(true);
    //   }
    // }
    toggleNotificationSidebar() {
        this.layoutService.toggleNotificationSidebar(true);
    }
    toggleSidebar() {
        this.layoutService.toggleSidebarSmallScreen(this.hideSidebar);
    }
    logout() {
        this.authservice.logout();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], viewQuery: function NavbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.searchElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.searchResults = _t);
    } }, hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("resize", function NavbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveWindow"]);
    } }, outputs: { toggleHideSidebar: "toggleHideSidebar", seachTextEmpty: "seachTextEmpty", ctrlF: "ctrlF" }, decls: 32, vars: 21, consts: [[3, "ngClass"], [1, "container-fluid", "navbar-wrapper"], [1, "navbar-header", "d-flex"], ["data-toggle", "collapse", 1, "navbar-toggle", "menu-toggle", "d-xl-none", "d-block", "float-left", "align-items-center", "justify-content-center", 3, "click"], [1, "ft-menu", "font-medium-3"], [1, "navbar-nav", 3, "clickOutside"], [1, "nav-item", "mr-2", "d-none", "d-lg-block"], ["id", "navbar-fullscreen", "href", "javascript:;", "appToggleFullscreen", "", 1, "nav-link", "apptogglefullscreen", 3, "click"], [1, "nav-item", "nav-search"], ["id", "navbar-search", "href", "javascript:", 1, "nav-link", "nav-link-search", 3, "ctrlF", "click"], [1, "ft-search", "font-medium-3"], [1, "search-input-icon"], ["type", "text", "placeholder", "Explore Fanzooma...", "tabindex", "0", "autofocus", "", "data-search", "template-search", 1, "input", 3, "formControl", "appAutocomplete", "keyup.enter", "keydown.esc", "keyup"], ["search", ""], [1, "search-input-close", 3, "click"], [1, "ft-x", "font-medium-3"], ["autocomplete", "appAutocomplete"], ["appAutocompleteContent", ""], [1, "navbar-brand-center"], [1, "navbar-header"], [1, "navbar-nav"], [1, "nav-item"], [1, "logo"], ["class", "logo-text", 3, "routerLink", 4, "ngIf"], [1, "navbar-container"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "d-block"], ["class", "navbar-nav", 4, "ngIf"], [4, "ngIf"], [3, "url", "value", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["class", "no-result", 4, "ngIf"], [3, "url", "value", "click", "mouseenter"], ["searchResults", ""], [1, "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "d-flex", "align-items-center", "justify-content-start"], [1, "no-result"], [1, "logo-text", 3, "routerLink"], [1, "logo-img"], ["alt", "Apex logo", 1, "logo-img", 3, "src"], [1, "text"], ["placement", "bottom-left", "display", "static", "ngbDropdown", "", 1, "dropdown", "nav-item", "mr-1"], ["id", "dropdownBasic2", "href", "javascript:;", "data-toggle", "dropdown", "ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle", "user-dropdown", "d-flex", "align-items-end"], [1, "user", "d-md-flex", "d-none", "mr-2"], [1, "text-right"], [1, "text-right", "text-muted", "font-small-3"], ["src", "assets/img/default.jpg", "alt", "avatar", "height", "35", "width", "35", 1, "avatar"], ["aria-labelledby", "dropdownBasic2", "ngbDropdownMenu", "", 1, "dropdown-menu", "text-left", "dropdown-menu-right", "m-0", "pb-0"], [1, "dropdown-item", 3, "routerLink"], [1, "d-flex", "align-items-center"], [1, "ft-edit", "mr-2"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"], [1, "ft-power", "mr-2"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_3_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("clickOutside", function NavbarComponent_Template_ul_clickOutside_5_listener() { return ctx.toggleSearchOpenClass(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_7_listener() { return ctx.ToggleClass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ctrlF", function NavbarComponent_Template_a_ctrlF_10_listener() { return ctx.toggleSearchOpenClass(true); })("click", function NavbarComponent_Template_a_click_10_listener() { return ctx.toggleSearchOpenClass(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup.enter", function NavbarComponent_Template_input_keyup_enter_15_listener() { return ctx.onEnter(); })("keydown.esc", function NavbarComponent_Template_input_keydown_esc_15_listener() { return ctx.onEscEvent(); })("keyup", function NavbarComponent_Template_input_keyup_15_listener($event) { return ctx.onSearchKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_17_listener() { return ctx.toggleSearchOpenClass(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "app-autocomplete", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, NavbarComponent_ng_template_21_Template, 2, 4, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, NavbarComponent_a_27_Template, 5, 3, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, NavbarComponent_ul_30_Template, 22, 5, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMapInterpolate1"]("navbar navbar-expand-lg navbar-light header-navbar ", ctx.transparentBGClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction4"](16, _c4, ctx.menuPosition === "Top", ctx.menuPosition === "Side" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Static", ctx.menuPosition === "Side" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Fixed", ctx.isSmallScreen && ctx.menuPosition === "Top"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMapInterpolate1"](" ", ctx.toggleClass, " font-medium-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMapInterpolate1"]("search-input ", ctx.searchOpenClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.control)("appAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.config == null ? null : ctx.config.layout.menuPosition) === "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](31, 14, ctx.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, ng_click_outside__WEBPACK_IMPORTED_MODULE_4__.ClickOutsideDirective, _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_5__.ToggleFullscreenDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlDirective, _components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_6__.AutocompleteDirective, _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__.AutocompleteComponent, _components_autocomplete_autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_8__.AutocompleteContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _components_autocomplete_option_option_component__WEBPACK_IMPORTED_MODULE_9__.OptionComponent, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownMenu], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__.FilterPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 76430:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSidebarComponent": () => (/* binding */ NotificationSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/layout.service */ 85682);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 32930);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 95684);





function NotificationSidebarComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "System Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "New Update Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "1 min ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Android Pie 9.0.0_r52v availabe (658MB).");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Download Now!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Reminder!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "52 min ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Your meeting is scheduled with Mr. Derrick Walters at 16:00. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Snooze");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Recieved a File");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "4 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Christina Rogers sent you a file for the next conference. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Diamond.sketch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Voice Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "10 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Natalya Parker sent you a voice message.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Listen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Weather Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Yesterday");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Hi John! It is a rainy day with 16\u00B0C.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Applications Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Gmail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Just now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Victoria Hampton sent you a mail and has a file attachment with it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Register.pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "MakeMyTrip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "7 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Your next flight for San Francisco will be on 24th March. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Important");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "CNN");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "16 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "U.S. investigating report says email account linked to CIA Director was hacked.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Read full article");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Maps");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Yesterday");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "You visited Walmart Supercenter in Chicago.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Write a Review!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Updates Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "2 days ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "19 app updates found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NotificationSidebarComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "General Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Use switches when looking for yes or no answers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Show recent activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "The \"for\" attribute is necessary to bind checkbox with the input.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Product Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Message and mail me on weekly product updates.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Email on Follow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Mail me when someone follows me.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Announcements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Receive all the news and announcements from my clients.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Date and Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Show date and time on top of every page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Email on Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Mail me when someone comments on my article.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { open: a0 }; };
class NotificationSidebarComponent {
    constructor(layoutService) {
        this.layoutService = layoutService;
        this.isOpen = false;
        this.layoutSub = layoutService.toggleNotiSidebar$.subscribe(open => {
            this.isOpen = open;
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    }
    onClose() {
        this.layoutService.toggleNotificationSidebar(false);
    }
}
NotificationSidebarComponent.ɵfac = function NotificationSidebarComponent_Factory(t) { return new (t || NotificationSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService)); };
NotificationSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotificationSidebarComponent, selectors: [["app-notification-sidebar"]], decls: 17, vars: 4, consts: [["id", "notification-sidebar", 1, "notification-sidebar", "d-none", "d-sm-none", "d-md-block", 3, "ngClass"], [1, "notification-sidebar-close", 3, "click"], [1, "ft-x", "font-medium-3", "grey", "darken-1"], [1, "side-nav", "notification-sidebar-content", 3, "perfectScrollbar"], [1, "row"], [1, "col-12", "notification-tab-content"], ["ngbNav", "", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", "", 1, "nav-item"], ["ngbNavLink", "", 1, "nav-link"], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], ["id", "activity-tab", "role", "tabpanel", "aria-expanded", "true", "aria-labelledby", "base-tab1", 1, "row", "tab-pane"], ["id", "activity", 1, "col-12"], [1, "my-2", "text-bold-500"], ["id", "timeline-1", 1, "timeline-left", "timeline-wrapper", "mb-3"], [1, "timeline"], [1, "timeline-line", "mt-4"], [1, "timeline-item"], [1, "timeline-badge"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-primary", "bg-lighten-4"], [1, "ft-download", "primary"], [1, "activity-list-text"], [1, "mb-1"], [1, "float-right", "grey", "font-italic", "font-small-2"], [1, "mt-0", "mb-2", "font-small-3"], [1, "notification-note"], [1, "p-1", "pl-2"], [1, "text-bold-500"], ["src", "assets/img/portrait/small/avatar-s-15.png", "alt", "avatar", "width", "40", 1, "avatar"], ["src", "assets/img/portrait/small/avatar-s-16.png", "alt", "avatar", "width", "40", 1, "avatar"], ["src", "assets/img/icons/sketch-mac-icon.png", "alt", "icon", "width", "20"], [1, "text-bold-500", "ml-2"], [1, "ft-mic", "primary"], [1, "ft-cloud-drizzle", "primary"], ["id", "timeline-2", 1, "timeline-left", "timeline-wrapper"], ["src", "assets/img/portrait/small/avatar-s-26.png", "alt", "avatar", "width", "40", 1, "avatar"], ["src", "assets/img/icons/pdf.png", "alt", "pdf icon", "width", "20"], [1, "ft-droplet", "primary"], ["src", "assets/img/portrait/small/avatar-s-23.png", "alt", "avatar", "width", "40", 1, "avatar"], [1, "ft-map", "primary"], [1, "ft-package", "primary"], ["id", "settings-tab", "aria-labelledby", "base-tab2", 1, "row", "tab-pane"], ["id", "settings", 1, "col-12"], [1, "mt-2", "mb-3"], [1, "list-unstyled", "mb-0", "mx-2"], [1, "mb-3"], [1, "float-right"], [1, "custom-switch"], ["id", "noti-s-switch-1", "type", "checkbox", 1, "custom-control-input"], ["for", "noti-s-switch-1", 1, "custom-control-label"], [1, "font-small-3", "m-0"], [1, "checkbox"], ["id", "noti-s-checkbox-1", "type", "checkbox", "checked", "checked"], ["for", "noti-s-checkbox-1"], ["id", "noti-s-switch-4", "type", "checkbox", "checked", "checked", 1, "custom-control-input"], ["for", "noti-s-switch-4", 1, "custom-control-label"], ["id", "noti-s-switch-3", "type", "checkbox", 1, "custom-control-input"], ["for", "noti-s-switch-3", 1, "custom-control-label"], ["id", "noti-s-checkbox-2", "type", "checkbox", "checked", "checked"], ["for", "noti-s-checkbox-2"], ["id", "noti-s-checkbox-3", "type", "checkbox"], ["for", "noti-s-checkbox-3"], ["id", "noti-s-switch-2", "type", "checkbox", "checked", "checked", 1, "custom-control-input"], ["for", "noti-s-switch-2", 1, "custom-control-label"]], template: function NotificationSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationSidebarComponent_Template_a_click_1_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NotificationSidebarComponent_ng_template_11_Template, 166, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NotificationSidebarComponent_ng_template_15_Template, 75, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.isOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__.PerfectScrollbarDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 68738:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 91477);

class FilterPipe {
    transform(items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return null;
        }
        return items.filter(item => item[labelKey || 'name']
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) === true).slice(0, 10);
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });


/***/ }),

/***/ 67361:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/pipe.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipeModule": () => (/* binding */ PipeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.pipe */ 68738);
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.pipe */ 96903);
/* harmony import */ var _short_name_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./short-name.pipe */ 93100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 91477);





class PipeModule {
}
PipeModule.ɵfac = function PipeModule_Factory(t) { return new (t || PipeModule)(); };
PipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PipeModule });
PipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PipeModule, { declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe, _search_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchPipe, _short_name_pipe__WEBPACK_IMPORTED_MODULE_2__.ShortNamePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe, _search_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchPipe, _short_name_pipe__WEBPACK_IMPORTED_MODULE_2__.ShortNamePipe] }); })();


/***/ }),

/***/ 96903:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPipe": () => (/* binding */ SearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 91477);

class SearchPipe {
    transform(value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });


/***/ }),

/***/ 93100:
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/short-name.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortNamePipe": () => (/* binding */ ShortNamePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 91477);

class ShortNamePipe {
    transform(fullName) {
        return fullName
            .split(' ')
            .map((n) => n[0])
            .join('');
    }
}
ShortNamePipe.ɵfac = function ShortNamePipe_Factory(t) { return new (t || ShortNamePipe)(); };
ShortNamePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shortName", type: ShortNamePipe, pure: true });


/***/ }),

/***/ 36955:
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);


class ConfigService {
    constructor() {
        this.templateConf = this.setConfigValue();
        this.templateConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.templateConf);
        this.templateConf$ = this.templateConfSubject.asObservable();
    }
    // Default configurations for Light layout. Please check *customizer.service.ts* for different colors and bg images options
    setConfigValue() {
        return this.templateConf = {
            layout: {
                variant: "Light",
                menuPosition: "Side",
                customizer: {
                    hidden: true
                },
                navbar: {
                    type: 'Static'
                },
                sidebar: {
                    collapsed: false,
                    size: "sidebar-md",
                    backgroundColor: "warning",
                    backgroundImage: false,
                    backgroundImageURL: "assets/img/sidebar-bg/01.jpg"
                }
            }
        };
    }
    // Default configurations for Dark layout. Please check *customizer.service.ts* for different colors and bg images options
    // setConfigValue() {
    //     return this.templateConf = {
    //         layout: {
    //             variant: "Dark",
    //             menuPosition: "Side",
    //             customizer: {
    //                 hidden: true
    //             },
    //             navbar: {
    //                 type: 'Static'
    //             },
    //             sidebar: {
    //                 collapsed: false,
    //                 size: "sidebar-md",
    //                 backgroundColor: "black",
    //                 backgroundImage: true,
    //                 backgroundImageURL: "assets/img/sidebar-bg/01.jpg"
    //             }
    //         }
    //     };
    // }
    // Default configurations for Transparent layout. Please check *customizer.service.ts* for different colors and bg images options
    // setConfigValue() {
    //   return this.templateConf = {
    //     layout: {
    //       variant: "Transparent",
    //       menuPosition: "Side",
    //       customizer: {
    //         hidden: true
    //       },
    //       navbar: {
    //         type: 'Static'
    //       },
    //       sidebar: {
    //         collapsed: false,
    //         size: "sidebar-md",
    //         backgroundColor: "bg-glass-1",
    //         backgroundImage: true,
    //         backgroundImageURL: ""
    //       }
    //     }
    //   };
    // }
    applyTemplateConfigChange(tempConfig) {
        this.templateConf = Object.assign(this.templateConf, tempConfig);
        this.templateConfSubject.next(this.templateConf);
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 60360:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/customizer.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizerService": () => (/* binding */ CustomizerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.service */ 36955);


class CustomizerService {
    constructor(config) {
        this.config = config;
        // sidebar BG colors for Light & Dark Layout
        this.light_dark_colors = [
            {
                code: "mint",
                class: "gradient-mint",
                active: false,
                type: 'gradient'
            },
            {
                code: "king-yna",
                class: "gradient-king-yna",
                active: false,
                type: 'gradient'
            },
            {
                code: "ibiza-sunset",
                class: "gradient-ibiza-sunset",
                active: false,
                type: 'gradient'
            },
            {
                code: "flickr",
                class: "gradient-flickr",
                active: false,
                type: 'gradient'
            },
            {
                code: "purple-bliss",
                class: "gradient-purple-bliss",
                active: false,
                type: 'gradient'
            },
            {
                code: "man-of-steel",
                class: "gradient-man-of-steel",
                active: false,
                type: 'gradient'
            },
            {
                code: "purple-love",
                class: "gradient-purple-love",
                active: false,
                type: 'gradient'
            },
            {
                code: "black",
                class: "bg-black",
                active: false,
                type: 'solid'
            },
            {
                code: "white",
                class: "bg-grey",
                active: false,
                type: 'solid'
            },
            {
                code: "primary",
                class: "bg-primary",
                active: false,
                type: 'solid'
            },
            {
                code: "success",
                class: "bg-success",
                active: false,
                type: 'solid'
            },
            {
                code: "warning",
                class: "bg-warning",
                active: false,
                type: 'solid'
            },
            {
                code: "info",
                class: "bg-info",
                active: false,
                type: 'solid'
            },
            {
                code: "danger",
                class: "bg-danger",
                active: false,
                type: 'solid'
            }
        ];
        // sidebar BG colors for Transparent Layout
        this.transparent_colors = [
            {
                class: "bg-glass-hibiscus",
                active: false
            },
            {
                class: "bg-glass-purple-pizzazz",
                active: false
            },
            {
                class: "bg-glass-blue-lagoon",
                active: false
            },
            {
                class: "bg-glass-electric-violet",
                active: false
            },
            {
                class: "bg-glass-portage",
                active: false
            },
            {
                class: "bg-glass-tundora",
                active: false
            }
        ];
        // sidebar BG images for Light & Dark Layout
        this.light_dark_bg_images = [
            {
                src: "assets/img/sidebar-bg/01.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/02.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/03.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/04.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/05.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/06.jpg",
                active: false
            },
        ];
        // Background Colors with Shades for Transparent Layout
        this.transparent_colors_with_shade = [
            {
                class: "bg-glass-1",
                active: false
            },
            {
                class: "bg-glass-2",
                active: false
            },
            {
                class: "bg-glass-3",
                active: false
            },
            {
                class: "bg-glass-4",
                active: false
            },
        ];
        this.lightDarkLayoutGradientBGColors = [];
        this.lightDarkLayoutSolidBGColors = [];
        this.transparentLayoutBGColors = [];
        this.transparentLayoutBGColorsWithShades = [];
        this.lightDarkLayoutBGImages = [];
        this.getData();
    }
    getData() {
        this.lightDarkLayoutGradientBGColors = this.getlightDarkLayoutGradientBGColors();
        this.lightDarkLayoutSolidBGColors = this.getlightDarkLayoutSolidBGColors();
        this.transparentLayoutBGColors = this.getTransparentLayoutBGColors();
        this.transparentLayoutBGColorsWithShades = this.GetTransparentLayoutBGColorsWithShades();
        this.lightDarkLayoutBGImages = this.getLightDarkLayoutBGImages();
    }
    getlightDarkLayoutGradientBGColors() {
        return this.light_dark_colors.filter(_ => _.type === 'gradient')
            .map(color => {
            color.active = (color.code === this.config.templateConf.layout.sidebar.backgroundColor);
            return Object.assign({}, color);
        });
    }
    getlightDarkLayoutSolidBGColors() {
        return this.light_dark_colors.filter(_ => _.type === 'solid')
            .map(color => {
            color.active = (color.code === this.config.templateConf.layout.sidebar.backgroundColor);
            return Object.assign({}, color);
        });
    }
    getTransparentLayoutBGColors() {
        return this.transparent_colors
            .map(color => {
            color.active = (color.class === this.config.templateConf.layout.sidebar.backgroundColor);
            return Object.assign({}, color);
        });
    }
    GetTransparentLayoutBGColorsWithShades() {
        return this.transparent_colors_with_shade
            .map(color => {
            color.active = (color.class === this.config.templateConf.layout.sidebar.backgroundColor);
            return Object.assign({}, color);
        });
    }
    getLightDarkLayoutBGImages() {
        return this.light_dark_bg_images
            .map(image => {
            image.active = (image.src === this.config.templateConf.layout.sidebar.backgroundImageURL);
            return Object.assign({}, image);
        });
    }
    //called when click to change on any Gradient/Solid color for Light & Dark layout in customizer
    changeSidebarBGColor(color) {
        let conf = this.config.templateConf;
        conf.layout.sidebar.backgroundColor = color.code;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    }
    //called when click to change on any Transparent color for Transparent layout in customizer
    changeSidebarTransparentBGColor(color) {
        let conf = this.config.templateConf;
        conf.layout.sidebar.backgroundColor = color.class;
        conf.layout.sidebar.backgroundImage = false;
        conf.layout.sidebar.backgroundImageURL = '';
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    }
    //called when click to change on any image for Light & Dark layout in customizer
    changeSidebarBgImage(image) {
        let conf = this.config.templateConf;
        conf.layout.sidebar.backgroundImageURL = image.src;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    }
    bgImageDisplay(e) {
        let conf = this.config.templateConf;
        if (e.target.checked) {
            conf.layout.sidebar.backgroundImage = true;
        }
        else {
            conf.layout.sidebar.backgroundImage = false;
        }
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    }
    toggleCompactMenu(e) {
        let conf = this.config.templateConf;
        if (e.target.checked) {
            conf.layout.sidebar.collapsed = true;
        }
        else {
            conf.layout.sidebar.collapsed = false;
        }
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    }
    changeSidebarWidth(value) {
        let conf = this.config.templateConf;
        conf.layout.sidebar.size = value;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    }
    toggleNavbarType(value) {
        let conf = this.config.templateConf;
        conf.layout.navbar.type = value;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    }
    // position: "Side" for vertical menu and position: "Top" for horizontal menu
    toggleMenuPosition(position) {
        let conf = this.config.templateConf;
        conf.layout.menuPosition = position;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    }
    switchLayout(layout, isBgImageDisplay) {
        let conf = this.config.templateConf;
        if (layout.toLowerCase() === 'light') {
            conf.layout.variant = 'Light';
            conf.layout.sidebar.backgroundImageURL = this.light_dark_bg_images[0].src;
            conf.layout.sidebar.backgroundColor = this.light_dark_colors[5].code;
            conf.layout.sidebar.backgroundImage = isBgImageDisplay;
        }
        else if (layout.toLowerCase() === 'dark') {
            conf.layout.variant = 'Dark';
            conf.layout.sidebar.backgroundImageURL = this.light_dark_bg_images[2].src;
            conf.layout.sidebar.backgroundColor = this.light_dark_colors[7].code;
            conf.layout.sidebar.backgroundImage = isBgImageDisplay;
        }
        else if (layout.toLowerCase() === 'transparent') {
            conf.layout.variant = 'Transparent';
            conf.layout.sidebar.backgroundImageURL = "";
            conf.layout.sidebar.backgroundColor = this.transparent_colors_with_shade[0].class;
        }
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    }
}
CustomizerService.ɵfac = function CustomizerService_Factory(t) { return new (t || CustomizerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService)); };
CustomizerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomizerService, factory: CustomizerService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 85682:
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);


class LayoutService {
    constructor() {
        this.toggleSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject(); // small screen
        this.overlaySidebarToggle = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.toggleNotiSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        // Observable
        this.toggleSidebar$ = this.toggleSidebar.asObservable();
        this.overlaySidebarToggle$ = this.overlaySidebarToggle.asObservable();
        this.toggleNotiSidebar$ = this.toggleNotiSidebar.asObservable();
    }
    toggleSidebarSmallScreen(toggle) {
        this.toggleSidebar.next(toggle);
    }
    overlaySidebartoggle(toggle) {
        this.overlaySidebarToggle.next(toggle);
    }
    toggleNotificationSidebar(toggle) {
        this.toggleNotiSidebar.next(toggle);
    }
}
LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(); };
LayoutService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 60294:
/*!***************************************************!*\
  !*** ./src/app/shared/services/window.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WINDOW": () => (/* binding */ WINDOW),
/* harmony export */   "WindowRef": () => (/* binding */ WindowRef),
/* harmony export */   "BrowserWindowRef": () => (/* binding */ BrowserWindowRef),
/* harmony export */   "windowFactory": () => (/* binding */ windowFactory),
/* harmony export */   "browserWindowProvider": () => (/* binding */ browserWindowProvider),
/* harmony export */   "windowProvider": () => (/* binding */ windowProvider),
/* harmony export */   "WINDOW_PROVIDERS": () => (/* binding */ WINDOW_PROVIDERS)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 91477);



/* Create a new injection token for injecting the window into a component. */
const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */
class WindowRef {
    get nativeWindow() {
        throw new Error('Not implemented.');
    }
}
/* Define class that implements the abstract class and returns the native window object. */
class BrowserWindowRef extends WindowRef {
    constructor() {
        super();
    }
    get nativeWindow() {
        return window;
    }
}
BrowserWindowRef.ɵfac = function BrowserWindowRef_Factory(t) { return new (t || BrowserWindowRef)(); };
BrowserWindowRef.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrowserWindowRef, factory: BrowserWindowRef.ɵfac });
/* Create an factory function that returns the native window object. */
function windowFactory(browserWindowRef, platformId) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
const browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
const windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
};
/* Create an array of providers. */
const WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider
];


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 59298);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/overlay */ 2897);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 95684);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 13828);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 32930);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-click-outside */ 25754);
/* harmony import */ var _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/autocomplete/autocomplete.module */ 10322);
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ 67361);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 45227);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ 54696);
/* harmony import */ var _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./horizontal-menu/horizontal-menu.component */ 22185);
/* harmony import */ var _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vertical-menu/vertical-menu.component */ 82329);
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customizer/customizer.component */ 93495);
/* harmony import */ var _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notification-sidebar/notification-sidebar.component */ 76430);
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ 53418);
/* harmony import */ var _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/sidebar-link.directive */ 7883);
/* harmony import */ var _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/sidebar-dropdown.directive */ 83273);
/* harmony import */ var _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/sidebar-anchor-toggle.directive */ 48327);
/* harmony import */ var _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/sidebar.directive */ 57744);
/* harmony import */ var _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/topmenu.directive */ 60342);
/* harmony import */ var _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/topmenu-link.directive */ 31793);
/* harmony import */ var _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/topmenu-dropdown.directive */ 90235);
/* harmony import */ var _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/topmenu-anchor-toggle.directive */ 91354);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-select/ng-select */ 48896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 91477);










//COMPONENTS






//DIRECTIVES











class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgSelectModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__.OverlayModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__.PerfectScrollbarModule,
            ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
            _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_1__.AutocompleteModule,
            app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
        ], _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent,
        _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_6__.VerticalMenuComponent,
        _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_5__.HorizontalMenuComponent,
        _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_7__.CustomizerComponent,
        _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.NotificationSidebarComponent,
        _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_9__.ToggleFullscreenDirective,
        _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_10__.SidebarLinkDirective,
        _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__.SidebarDropdownDirective,
        _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_12__.SidebarAnchorToggleDirective,
        _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__.SidebarDirective,
        _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_15__.TopMenuLinkDirective,
        _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_16__.TopMenuDropdownDirective,
        _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_17__.TopMenuAnchorToggleDirective,
        _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_14__.TopMenuDirective], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgSelectModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__.OverlayModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__.PerfectScrollbarModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
        _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_1__.AutocompleteModule,
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent,
        _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_6__.VerticalMenuComponent,
        _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_5__.HorizontalMenuComponent,
        _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_7__.CustomizerComponent,
        _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.NotificationSidebarComponent,
        _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_9__.ToggleFullscreenDirective,
        _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__.SidebarDirective,
        _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_14__.TopMenuDirective,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule] }); })();


/***/ }),

/***/ 31530:
/*!*********************************************************************!*\
  !*** ./src/app/shared/vertical-menu/vertical-menu-routes.config.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var app_roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/roles */ 21733);

const { ADMIN, SUPER_ADMIN } = app_roles__WEBPACK_IMPORTED_MODULE_0__.Roles;
//Sidebar menu Routes and data
const ROUTES = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'ft-home',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [],
        hasaccess: [SUPER_ADMIN, ADMIN],
    },
    {
        path: '/admin/profile',
        title: 'Profile',
        icon: 'ft-user',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [],
        hasaccess: [SUPER_ADMIN, ADMIN],
    },
    {
        path: '/admins',
        title: 'Admin',
        icon: 'ft-user',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [],
        hasaccess: [SUPER_ADMIN],
    },
    {
        path: '',
        title: 'Accounts',
        icon: 'ft-users',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        hasaccess: [SUPER_ADMIN, ADMIN],
        submenu: [
            {
                path: '/organization',
                title: 'Organizations',
                icon: 'ft-arrow-right submenu-icon',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: [],
                hasaccess: [SUPER_ADMIN, ADMIN],
            },
            {
                path: '/sub-account',
                title: 'Sub-Accounts',
                icon: 'ft-arrow-right submenu-icon',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: [],
                hasaccess: [SUPER_ADMIN, ADMIN],
            },
        ],
    },
    {
        path: '/locations',
        title: 'Locations',
        icon: 'ft-map-pin',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [],
        hasaccess: [SUPER_ADMIN, ADMIN],
    },
    {
        path: '/clubs',
        title: 'Clubs',
        icon: 'ft-list',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [],
        hasaccess: [SUPER_ADMIN, ADMIN],
    },
    {
        path: '/fans',
        title: 'Fans',
        icon: 'ft-heart',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [],
        hasaccess: [SUPER_ADMIN, ADMIN],
    },
    {
        path: '/broadcasts',
        title: 'Broadcasts',
        icon: 'ft-speaker',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [],
        hasaccess: [SUPER_ADMIN, ADMIN],
    },
    // {
    //   path: '',
    //   title: 'Payments',
    //   icon: 'ft-dollar-sign',
    //   class: 'has-sub',
    //   badge: '',
    //   badgeClass: '',
    //   isExternalLink: false,
    //   submenu: [
    //     {
    //       path: '',
    //       title: 'Payment History',
    //       icon: 'ft-arrow-right submenu-icon',
    //       class: 'has-sub',
    //       badge: '',
    //       badgeClass: '',
    //       isExternalLink: false,
    //       submenu: [
    //         {
    //           path: 'payment-history/landing-page',
    //           title: 'Overview',
    //           icon: 'ft-arrow-right submenu-icon',
    //           class: '',
    //           badge: '',
    //           badgeClass: '',
    //           isExternalLink: false,
    //           submenu: [],
    //           hasaccess: [SUPER_ADMIN, ADMIN],
    //         },
    //         {
    //           path: 'payment-history/by-subscriptions',
    //           title: 'By Creators',
    //           icon: 'ft-arrow-right submenu-icon',
    //           class: '',
    //           badge: '',
    //           badgeClass: '',
    //           isExternalLink: false,
    //           submenu: [],
    //           hasaccess: [SUPER_ADMIN, ADMIN],
    //         },
    //         {
    //           path: 'payment-history/by-tp',
    //           title: 'By Rights Holders',
    //           icon: 'ft-arrow-right submenu-icon',
    //           class: '',
    //           badge: '',
    //           badgeClass: '',
    //           isExternalLink: false,
    //           submenu: [],
    //           hasaccess: [SUPER_ADMIN, ADMIN],
    //         },
    //       ],
    //       hasaccess: [SUPER_ADMIN, ADMIN],
    //     },
    //   ],
    //   hasaccess: [SUPER_ADMIN, ADMIN],
    // },
    // {
    //   path: '/contact-us',
    //   title: 'Messages',
    //   icon: 'ft-mail',
    //   class: '',
    //   badge: '',
    //   badgeClass: '',
    //   isExternalLink: false,
    //   submenu: [],
    //   hasaccess: [SUPER_ADMIN, ADMIN],
    // },
];


/***/ }),

/***/ 82329:
/*!*****************************************************************!*\
  !*** ./src/app/shared/vertical-menu/vertical-menu.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuComponent": () => (/* binding */ VerticalMenuComponent)
/* harmony export */ });
/* harmony import */ var _vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertical-menu-routes.config */ 31530);
/* harmony import */ var _horizontal_menu_navigation_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../horizontal-menu/navigation-routes.config */ 7015);
/* harmony import */ var _animations_custom_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/custom-animations */ 21138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 13828);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ 85682);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-device-detector */ 94593);
/* harmony import */ var app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/service/auth/auth.service */ 67083);
/* harmony import */ var app_modules_contact_us_services_contact_us_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/modules/contact-us/_services/contact-us.service */ 74443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 32930);
/* harmony import */ var _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/sidebar-dropdown.directive */ 83273);
/* harmony import */ var _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/sidebar-link.directive */ 7883);
/* harmony import */ var _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/sidebar-anchor-toggle.directive */ 48327);
















const _c0 = ["toggleIcon"];
const _c1 = function () { return ["/"]; };
const _c2 = function (a0, a1) { return { "ft-toggle-left": a0, "ft-toggle-right": a1 }; };
function VerticalMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Fanzooma");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r3.toggleSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "i", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r5.CloseSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](3, _c2, ctx_r0.config.layout.sidebar.collapsed, !ctx_r0.config.layout.sidebar.collapsed));
} }
const _c3 = function (a0) { return [a0]; };
function VerticalMenuComponent_ng_container_4_li_1_a_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuItem_r6.badge);
} }
function VerticalMenuComponent_ng_container_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, VerticalMenuComponent_ng_container_4_li_1_a_1_span_4_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](3, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuItem_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
} }
function VerticalMenuComponent_ng_container_4_li_1_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuItem_r6.badge);
} }
function VerticalMenuComponent_ng_container_4_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_ng_container_4_li_1_a_2_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r6.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
} }
function VerticalMenuComponent_ng_container_4_li_1_a_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuItem_r6.badge);
} }
function VerticalMenuComponent_ng_container_4_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_ng_container_4_li_1_a_3_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c3, menuItem_r6.path), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](8, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
} }
function VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubItem_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuSubItem_r22.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuSubItem_r22.badge);
} }
function VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_a_1_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubItem_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](5, _c3, menuSubItem_r22.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 3, menuSubItem_r22.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r22.badge && menuSubItem_r22.badge != "");
} }
function VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubItem_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuSubItem_r22.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuSubItem_r22.badge);
} }
function VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_a_2_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubItem_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r22.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c3, menuSubItem_r22.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, menuSubItem_r22.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r22.badge && menuSubItem_r22.badge != "");
} }
function VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_a_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubItem_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuSubItem_r22.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuSubItem_r22.badge);
} }
function VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_a_3_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubItem_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r22.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c3, menuSubItem_r22.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, menuSubItem_r22.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r22.badge && menuSubItem_r22.badge != "");
} }
function VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_ul_4_ng_container_1_li_1_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubsubItem_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuSubsubItem_r38.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuSubsubItem_r38.badge);
} }
function VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_ul_4_ng_container_1_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_ul_4_ng_container_1_li_1_a_1_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubsubItem_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r38.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c3, menuSubsubItem_r38.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r38.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubsubItem_r38.badge && menuSubsubItem_r38.badge != "");
} }
function VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_ul_4_ng_container_1_li_1_ng_template_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubsubItem_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuSubsubItem_r38.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuSubsubItem_r38.badge);
} }
function VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_ul_4_ng_container_1_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_ul_4_ng_container_1_li_1_ng_template_2_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubsubItem_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r38.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c3, menuSubsubItem_r38.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r38.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubsubItem_r38.badge && menuSubsubItem_r38.badge != "");
} }
const _c4 = function () { return { exact: true }; };
function VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_ul_4_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_ul_4_ng_container_1_li_1_a_1_Template, 6, 8, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_ul_4_ng_container_1_li_1_ng_template_2_Template, 6, 8, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const menuSubsubItem_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6).$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("level", ctx_r39.level + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("parent", menuItem_r6.title)("hasSub", false)("path", menuSubsubItem_r38.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](8, _c4))("ngClass", ctx_r39.config.layout.menuPosition === "Side" ? menuSubsubItem_r38.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !menuSubsubItem_r38.isExternalLink)("ngIfElse", _r41);
} }
function VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_ul_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_ul_4_ng_container_1_li_1_Template, 4, 9, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menuSubsubItem_r38 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubsubItem_r38.hasaccess.includes(ctx_r37.type));
} }
function VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_ul_4_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubItem_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", menuSubItem_r22.submenu);
} }
const _c5 = function (a0) { return { "has-sub": a0 }; };
function VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_a_1_Template, 6, 7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_a_2_Template, 6, 8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_a_3_Template, 6, 8, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_ul_4_Template, 2, 1, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubItem_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("level", ctx_r23.level + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("parent", menuItem_r6.title)("hasSub", menuSubItem_r22.class.includes("has-sub") ? true : false)("path", menuSubItem_r22.path)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](10, _c5, menuSubItem_r22.class.includes("has-sub") ? true : false))("routerLinkActive", menuSubItem_r22.submenu.length != 0 ? "open" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r22.submenu.length > 0 && !menuSubItem_r22.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r22.submenu.length === 0 && !menuSubItem_r22.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r22.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r22.submenu.length > 0);
} }
function VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_li_1_Template, 5, 12, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menuSubItem_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r22.hasaccess.includes(ctx_r21.type));
} }
function VerticalMenuComponent_ng_container_4_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_ng_container_4_li_1_ul_4_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", menuItem_r6.submenu);
} }
const _c6 = function () { return { exact: false }; };
function VerticalMenuComponent_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_ng_container_4_li_1_a_1_Template, 5, 5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, VerticalMenuComponent_ng_container_4_li_1_a_2_Template, 6, 8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, VerticalMenuComponent_ng_container_4_li_1_a_3_Template, 6, 10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, VerticalMenuComponent_ng_container_4_li_1_ul_4_Template, 2, 1, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("level", ctx_r7.level + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("parent", menuItem_r6.title)("path", menuItem_r6.path)("hasSub", menuItem_r6.class.includes("has-sub") ? true : false)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](11, _c5, menuItem_r6.class.includes("has-sub") ? true : false))("routerLinkActive", menuItem_r6.submenu.length != 0 ? "open" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](13, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length > 0 && !menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length === 0 && !menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length > 0);
} }
function VerticalMenuComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_ng_container_4_li_1_Template, 5, 14, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menuItem_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r6.hasaccess.includes(ctx_r1.type));
} }
class VerticalMenuComponent {
    constructor(router, translate, layoutService, configService, cdr, deviceService, authservice, contactUsService) {
        this.router = router;
        this.translate = translate;
        this.layoutService = layoutService;
        this.configService = configService;
        this.cdr = cdr;
        this.deviceService = deviceService;
        this.authservice = authservice;
        this.contactUsService = contactUsService;
        this.level = 0;
        this.logoUrl = 'assets/mindset/logo.png';
        this.config = {};
        this.perfectScrollbarEnable = true;
        this.collapseSidebar = false;
        this.contactUsCount = 0;
        this.inquiryCount = 0;
        this.fireRefreshEventOnWindow = function () {
            const evt = document.createEvent('HTMLEvents');
            evt.initEvent('resize', true, false);
            window.dispatchEvent(evt);
        };
        this.config = this.configService.templateConf;
        this.innerWidth = window.innerWidth;
        this.isTouchDevice();
    }
    // insertBadge(title, count) {
    //   const mergedCount = this.contactUsCount + this.inquiryCount;
    //   for (let config of this.menuItems) {
    //     if (config.title === 'Communication') {
    //       for (let submenu of config.submenu) {
    //         if (submenu.title == title) {
    //           submenu.badge = count;
    //           config.badge = mergedCount;
    //           submenu.badgeClass = 'badge badge-pill badge-danger float-right mr-1 mt-1';
    //           config.badgeClass = 'badge badge-pill badge-danger float-right mr-1 mt-1';
    //           break;
    //         }
    //       }
    //       break;
    //     }
    //   }
    // }
    ngOnInit() {
        this.authservice.currentUser$.subscribe((user) => {
            this.type = this.authservice.currentUserValue.role;
            this.menuItems = _vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_0__.ROUTES;
            // if (this.authservice.isAdminCategory()) {
            //   this.menuItems = this.menuItems.filter(m => {
            //     return m.title != "Contact Us";
            //   })
            //   for (let config of this.menuItems) {
            //     if (config.title === 'Communication') {
            //       config.badge = "";
            //       break;
            //     }
            //   }
            //   this.contactUsService.getBadgeCount();
            //   this.contactUsService.badgeCount$.subscribe((count) => {
            //     this.contactUsCount = count;
            //     this.insertBadge('Contact Us', count);
            //     this.cdr.markForCheck();
            //   })
            //   this.inquiryService.getBadgeCount();
            //   this.inquiryService.badgeCount$.subscribe((count) => {
            //     this.inquiryCount = count;
            //     this.insertBadge('Inquiry List', count)
            //     this.cdr.markForCheck();
            //   })
            // } else {
            //   this.menuItems = this.menuItems.filter(m => {
            //     return m.title != "Communication";
            //   })
            // }
            this.cdr.markForCheck();
        });
    }
    ngAfterViewInit() {
        this.configSub = this.configService.templateConf$.subscribe((templateConf) => {
            if (templateConf) {
                this.config = templateConf;
            }
            this.loadLayout();
            this.cdr.markForCheck();
        });
        this.layoutSub = this.layoutService.overlaySidebarToggle$.subscribe((collapse) => {
            if (this.config.layout.menuPosition === 'Side') {
                this.collapseSidebar = collapse;
            }
        });
    }
    onWindowResize(event) {
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout((() => {
            this.innerWidth = event.target.innerWidth;
            this.loadLayout();
        }).bind(this), 500);
    }
    loadLayout() {
        if (this.config.layout.menuPosition === 'Top') {
            // Horizontal Menu
            if (this.innerWidth < 1200) {
                // Screen size < 1200
                this.menuItems = _horizontal_menu_navigation_routes_config__WEBPACK_IMPORTED_MODULE_1__.HROUTES;
            }
        }
        else if (this.config.layout.menuPosition === 'Side') {
            // Vertical Menu{
            this.menuItems = _vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_0__.ROUTES;
        }
        if (this.config.layout.sidebar.backgroundColor === 'white') {
            this.logoUrl = 'assets/img/logo-dark.png';
        }
        else {
            this.logoUrl = 'assets/mindset/logo.png';
        }
        if (this.config.layout.sidebar.collapsed) {
            this.collapseSidebar = true;
        }
        else {
            this.collapseSidebar = false;
        }
    }
    toggleSidebar() {
        let conf = this.config;
        conf.layout.sidebar.collapsed = !this.config.layout.sidebar.collapsed;
        this.configService.applyTemplateConfigChange({ layout: conf.layout });
        setTimeout(() => {
            this.fireRefreshEventOnWindow();
        }, 300);
    }
    CloseSidebar() {
        this.layoutService.toggleSidebarSmallScreen(false);
    }
    isTouchDevice() {
        const isMobile = this.deviceService.isMobile();
        const isTablet = this.deviceService.isTablet();
        if (isMobile || isTablet) {
            this.perfectScrollbarEnable = false;
        }
        else {
            this.perfectScrollbarEnable = true;
        }
    }
    ngOnDestroy() {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
        if (this.configSub) {
            this.configSub.unsubscribe();
        }
    }
}
VerticalMenuComponent.ɵfac = function VerticalMenuComponent_Factory(t) { return new (t || VerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_modules_contact_us_services_contact_us_service__WEBPACK_IMPORTED_MODULE_6__.ContactUsService)); };
VerticalMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: VerticalMenuComponent, selectors: [["app-sidebar"]], viewQuery: function VerticalMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.toggleIcon = _t.first);
    } }, hostBindings: function VerticalMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("resize", function VerticalMenuComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
    } }, decls: 5, vars: 3, consts: [["class", "sidebar-header", 4, "ngIf"], [1, "sidebar-content", "main-menu-content", 3, "perfectScrollbar", "disabled"], [1, "nav-container"], ["appSidebarDropdown", "", 1, "navigation"], [4, "ngFor", "ngForOf"], [1, "sidebar-header"], [1, "logo", "clearfix"], [1, "logo-text", "float-left", 3, "routerLink"], [1, "text", "align-middle"], ["id", "sidebarToggle", "href", "javascript:;", 1, "nav-toggle", "d-none", "d-lg-none", "d-xl-block", 3, "click"], [1, "toggle-icon", 3, "ngClass"], ["toggleIcon", ""], ["id", "sidebarClose", "href", "javascript:;", 1, "nav-close", "d-block", "d-lg-block", "d-xl-none", 3, "click"], [1, "ft-x"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["appSidebarAnchorToggle", "", 4, "ngIf"], ["appSidebarAnchorToggle", "", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["appSidebarDropdown", "", "class", "menu-content", 4, "ngIf"], ["appSidebarAnchorToggle", ""], [3, "ngClass"], [1, "menu-title"], [3, "ngClass", 4, "ngIf"], ["appSidebarAnchorToggle", "", 3, "routerLink"], ["target", "_blank", 3, "href"], ["appSidebarDropdown", "", 1, "menu-content"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive", 4, "ngIf"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive"], ["target", "_blank", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "routerLink"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass", 4, "ngIf"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass"], ["appSidebarAnchorToggle", "", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["externalSubSubLinkBlock", ""]], template: function VerticalMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, VerticalMenuComponent_div_0_Template, 10, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, VerticalMenuComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.config == null ? null : ctx.config.layout.menuPosition) === "Side");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.perfectScrollbarEnable);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarDirective, _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__.SidebarDropdownDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_8__.SidebarLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive, _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_9__.SidebarAnchorToggleDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], encapsulation: 2, data: { animation: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_2__.customAnimations } });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    apiUrl: 'http://ec2-3-13-184-88.us-east-2.compute.amazonaws.com/fanzooma-backend-laravel/api',
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map