"use strict";
(self["webpackChunkFanzooma"] = self["webpackChunkFanzooma"] || []).push([["src_app_modules_dashboard_dashboard_module_ts"],{

/***/ 8978:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-listing/creator/creator.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatorComponent": () => (/* binding */ CreatorComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 20722);
/* harmony import */ var _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/chartjs */ 26311);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/dashboard.service */ 77555);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 59298);
/* harmony import */ var app_core_service_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/service/common/common.service */ 52743);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-daterangepicker-material */ 80596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 48896);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ 57361);













function CreatorComponent_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 28);
} }
function CreatorComponent_ng_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ng-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", channel_r9._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", channel_r9.channel_title, " ");
} }
function CreatorComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r10 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r10.video_name, " ");
} }
function CreatorComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    const row_r12 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, row_r12.views, "1.0-2"), " ");
} }
function CreatorComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    const row_r13 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, row_r13.likes, "1.0-2"), " ");
} }
function CreatorComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    const row_r14 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, row_r14.dislikes, "1.0-2"), " ");
} }
function CreatorComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    const row_r15 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, row_r15.comments, "1.0-2"), " ");
} }
function CreatorComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    const row_r16 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, row_r16.total_earning, "1.0-2"), " ");
} }
function CreatorComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
class CreatorComponent {
    constructor(dashboardservice, cd, fb, commonservice, route) {
        this.dashboardservice = dashboardservice;
        this.cd = cd;
        this.fb = fb;
        this.commonservice = commonservice;
        this.route = route;
        this.offset = 0;
        this.currentdocsize = 0;
        this.order = '-1';
        this.startDate = "";
        this.endDate = "";
        this.channel = "";
        this.page = 1;
        this.limit = 10;
        this.ascDesc = "1";
        this.sortByComment = "";
        this.sortByView = "";
        this.sortByLike = "";
        this.sortByDislike = "";
        this.sortByTotalEarning = "";
        this.sortByDrmRoyaltyShare = "";
        this.sortByYourShare = "";
        this.sortByVideoName = "";
        this.sortByChannelName = "1";
        this.graphData = [];
        this.channels = [];
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.ColumnMode;
        this.subscriptions = [];
        this.my_messages = {
            'emptyMessage': 'Loading...',
            'totalMessage': 'Items'
        };
        this.areaChartData = [{ label: '' }];
        this.areaChartLabels = [];
        this.areaChartOptions = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_0__.areaChartOptions;
        this.areaChartColors = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_0__.areaChartColors;
        this.areaChartLegend = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_0__.areaChartLegend;
        this.areaChartType = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_0__.areaChartType;
        this.selectedChannel = "";
        this.filters = {
            "startDate": '',
            "endDate": '',
        };
        this.startDateformonth = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month'),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month')
        };
        this.daterangefilter = this.startDateformonth;
        this.ranges = {
            'Today': [moment__WEBPACK_IMPORTED_MODULE_1__(), moment__WEBPACK_IMPORTED_MODULE_1__()],
            'Yesterday': [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'days'), moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'days')],
            'Last 1 Week': [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(6, 'days'), moment__WEBPACK_IMPORTED_MODULE_1__()],
            'Last 28 Days': [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(27, 'days'), moment__WEBPACK_IMPORTED_MODULE_1__()],
            'Last 90 Days': [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(89, 'days'), moment__WEBPACK_IMPORTED_MODULE_1__()],
            'Last 365 Days': [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(364, 'days'), moment__WEBPACK_IMPORTED_MODULE_1__()],
            // 'This Month': [moment().startOf('month'), moment().endOf('month')],
            // 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        };
        this.invalidDates = [moment__WEBPACK_IMPORTED_MODULE_1__().add(2, 'days'), moment__WEBPACK_IMPORTED_MODULE_1__().add(3, 'days'), moment__WEBPACK_IMPORTED_MODULE_1__().add(5, 'days')];
        this.isInvalidDate = (m) => {
            return this.invalidDates.some(d => d.isSame(m, 'day'));
        };
        this.initDate = true;
        this.isLoadingtable$ = this.dashboardservice.isLoadingtable$;
    }
    ngOnInit() {
        this.daterangefilter = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(27, 'days'),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__()
        };
        this.filterForm(null);
        this.channel = history.state.id;
        this.getDashboardList();
        this.getchannellist();
    }
    getchannellist() {
        this.commonservice.getallchannel({ search: "" }).subscribe((data) => {
            if (data.result) {
                this.channels = data.result;
                const channelId = history.state.id;
                this.filterForm(channelId);
            }
            this.cd.markForCheck();
        }, err => {
        });
    }
    getByDate(event) {
        if (event.startDate && event.endDate) {
            this.filters['startDate'] = moment__WEBPACK_IMPORTED_MODULE_1__(event.startDate._d).format("YYYY-MM-DD");
            this.filters['endDate'] = moment__WEBPACK_IMPORTED_MODULE_1__(event.endDate._d).format("YYYY-MM-DD");
        }
        else {
            if (this.initDate) {
                this.filters['startDate'] = moment__WEBPACK_IMPORTED_MODULE_1__(this.daterangefilter.startDate).format('YYYY-MM-DD');
                this.filters['endDate'] = moment__WEBPACK_IMPORTED_MODULE_1__(this.daterangefilter.endDate).format('YYYY-MM-DD');
                this.initDate = false;
            }
            else {
                this.filters['startDate'] = this.filters['endDate'] = null;
            }
        }
        // if (event.startDate && event.endDate) {
        //     this.filters['startDate'] = moment(event.startDate._d).format("YYYY-MM-DD");
        //     this.filters['endDate'] = moment(event.endDate._d).format("YYYY-MM-DD");
        // } else {
        //     this.filters['startDate'] = "";
        //     this.filters['endDate'] = "";
        // }
        this.creatorgraph();
    }
    /**
     * Populate the table with new data based on the page number
     * @param page The page to select
     */
    setPage(pageInfo) {
        this.page = pageInfo.offset + 1;
        this.offset = pageInfo.offset;
        //this.limit = pageInfo.limit;
        this.getDashboardList();
    }
    /**
     * Populate the table with new data based on the page number
     * Short event
     */
    onSort(event) {
        const sort = event.sorts[0];
        const prop = sort.prop;
        const dir = sort.dir;
        this.page = 1;
        this.offset = 0;
        this.sortByComment = this.sortByView = this.sortByLike = this.sortByDislike = this.sortByTotalEarning = this.sortByDrmRoyaltyShare = this.sortByYourShare = this.sortByVideoName = this.sortByChannelName = "";
        switch (prop) {
            case 'comment':
                this.sortByComment = "1";
                break;
            case 'view':
                this.sortByView = "1";
                break;
            case 'like':
                this.sortByLike = "1";
                break;
            case 'dislike':
                this.sortByDislike = "1";
                break;
            case 'total_earning':
                this.sortByTotalEarning = "1";
                break;
            case 'drm_royalty_share':
                this.sortByDrmRoyaltyShare = "1";
                break;
            case 'your_share':
                this.sortByYourShare = "1";
                break;
            case 'vedio_name':
                this.sortByVideoName = "1";
                break;
            case 'channel_name':
                this.sortByChannelName = "1";
                break;
            default:
                this.sortByChannelName = "1";
        }
        if (dir == 'asc') {
            this.ascDesc = "1";
        }
        if (dir == 'desc') {
            this.ascDesc = "-1";
        }
        this.getDashboardList();
    }
    getDashboardList() {
        var _a, _b, _c;
        const params = {
            "startDate": this.startDate,
            "endDate": this.endDate,
            "channel": this.channel,
            "page": (_a = this.page) !== null && _a !== void 0 ? _a : 1,
            "limit": (_b = this.limit) !== null && _b !== void 0 ? _b : 10,
            "ascDesc": (_c = this.ascDesc) !== null && _c !== void 0 ? _c : 1,
            "sortByComment": this.sortByComment,
            "sortByView": this.sortByView,
            "sortByLike": this.sortByLike,
            "sortByDislike": this.sortByDislike,
            "sortByTotalEarning": this.sortByTotalEarning,
            "sortByDrmRoyaltyShare": this.sortByDrmRoyaltyShare,
            "sortByYourShare": this.sortByYourShare,
            "sortByVideoName": this.sortByVideoName,
            "sortByChannelName": this.sortByChannelName,
        };
        this.dashboardservice.getDashboardTableListing(params).subscribe((data) => {
            if (data.result) {
                this.dashboardListing = data.result.docs;
                this.count = data.result.totalDocs;
                this.offset = data.result.page - 1;
                this.currentdocsize = this.dashboardListing.length;
                if (this.dashboardListing.length == 0) {
                    this.my_messages.emptyMessage = "No data found.";
                }
            }
        });
    }
    filterForm(channelId) {
        this.filterGroup = this.fb.group({
            channel: [channelId !== null && channelId !== void 0 ? channelId : null],
        });
        this.subscriptions.push(this.filterGroup.controls.channel.valueChanges.subscribe((value) => {
            this.channel = value;
            this.page = 1;
            this.offset = 0;
            this.creatorgraph();
            this.getDashboardList();
        }));
    }
    creatorgraph() {
        const params = {
            startDate: this.filters['startDate'],
            endDate: this.filters['endDate'],
        };
        const channels = this.filterGroup.get('channel').value;
        if (channels) {
            params['channel'] = channels;
        }
        this.dashboardservice.getDashboardCreatorGraph(params).subscribe((data) => {
            if (data.result) {
                this.graphData = data.result;
                var creator_comments_data = [];
                this.graphData.forEach((item) => {
                    creator_comments_data.push(item.comments.toFixed(2));
                });
                var creator_dislikes_data = [];
                this.graphData.forEach((item) => {
                    creator_dislikes_data.push(item.dislikes.toFixed(2));
                });
                var creator_drm_royality_share_data = [];
                this.graphData.forEach((item) => {
                    creator_drm_royality_share_data.push(item.drm_royality_share.toFixed(2));
                });
                var creator_likes_data = [];
                this.graphData.forEach((item) => {
                    creator_likes_data.push(item.likes.toFixed(2));
                });
                var creator_total_earning_data = [];
                this.graphData.forEach((item) => {
                    creator_total_earning_data.push(item.total_earning.toFixed(2));
                });
                var creator_views_data = [];
                this.graphData.forEach((item) => {
                    creator_views_data.push(item.views.toFixed(2));
                });
                var creator_your_share_data = [];
                this.graphData.forEach((item) => {
                    creator_your_share_data.push(item.your_share.toFixed(2));
                });
                var creator_earning_dates = [];
                this.graphData.forEach((item) => {
                    creator_earning_dates.push(item._id);
                });
                var graph_data = [
                    { data: creator_comments_data, label: 'Total Comments' },
                    { data: creator_dislikes_data, label: 'Total DisLikes' },
                    { data: creator_drm_royality_share_data, label: 'Total Royalty Share' },
                    { data: creator_likes_data, label: 'Total Likes' },
                    { data: creator_total_earning_data, label: 'Total Earnings' },
                    { data: creator_views_data, label: 'Total Views' },
                    { data: creator_your_share_data, label: 'Total Share' },
                ];
                this.areaChartData = graph_data;
                this.areaChartLabels = creator_earning_dates;
                if (this.graphData.length == 0) {
                    this.my_messages.emptyMessage = "No data found.";
                }
            }
        });
    }
}
CreatorComponent.ɵfac = function CreatorComponent_Factory(t) { return new (t || CreatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_core_service_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
CreatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreatorComponent, selectors: [["app-dashboard-creator-listing"]], decls: 39, vars: 36, consts: [["id", "ngx-datatable-basic"], [1, "row"], [1, "col-12"], [1, "card", "customisecard"], [1, "row", "text-left"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content"], [1, "card-body"], [1, "form-group", "role_filter", "mb-2", 3, "formGroup"], ["type", "text", "ngxDaterangepickerMd", "", "placeholder", "Start Date - End Date", 1, "form-control", "form-control-sm", "d-inline-block", "width-200", "mr-1", 3, "ngModel", "showCustomRangeLabel", "alwaysShowCalendars", "ngModelOptions", "ranges", "linkedCalendars", "isInvalidDate", "showClearButton", "ngModelChange", "change"], ["class", "fa fa-spin fa-spinner mr-1", 4, "ngIf"], ["placeholder", "Select Channel", "formControlName", "channel", 1, "d-inline-block", "form-control-sm", "width-200", "mr-1"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "height-400"], ["height", "400", "baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", 3, "rows", "messages", "columnMode", "scrollbarH", "headerHeight", "footerHeight", "count", "externalPaging", "externalSorting", "limit", "offset", "page", "sort"], ["name", "Audio", "prop", "vedio_name", 1, "datatable-row-left", 3, "frozenLeft", "width"], ["ngx-datatable-cell-template", ""], ["name", "Views", "prop", "view"], ["name", "Likes", "prop", "like"], ["name", "Dislikes", "prop", "dislike"], ["name", "Comments", "prop", "comment"], ["name", "Revenue", "prop", "total_earning"], ["class", "spinner_loading", 4, "ngIf"], [1, "fa", "fa-spin", "fa-spinner", "mr-1"], [3, "value"], [1, "spinner_loading"], [1, "fa", "fa-spinner", "fa-spin"]], template: function CreatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Creators");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "fieldset", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreatorComponent_Template_input_ngModelChange_13_listener($event) { return ctx.daterangefilter = $event; })("change", function CreatorComponent_Template_input_change_13_listener($event) { return ctx.getByDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, CreatorComponent_i_14_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ng-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ng-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Select Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, CreatorComponent_ng_option_19_Template, 2, 2, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "canvas", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ngx-datatable", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function CreatorComponent_Template_ngx_datatable_page_24_listener($event) { return ctx.setPage($event); })("sort", function CreatorComponent_Template_ngx_datatable_sort_24_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ngx-datatable-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, CreatorComponent_ng_template_26_Template, 1, 1, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, CreatorComponent_ng_template_28_Template, 2, 4, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, CreatorComponent_ng_template_30_Template, 2, 4, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, CreatorComponent_ng_template_32_Template, 2, 4, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, CreatorComponent_ng_template_34_Template, 2, 4, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "ngx-datatable-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, CreatorComponent_ng_template_36_Template, 2, 4, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, CreatorComponent_div_37_Template, 3, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.filterGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.daterangefilter)("showCustomRangeLabel", true)("alwaysShowCalendars", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](35, _c0))("ranges", ctx.ranges)("linkedCalendars", true)("isInvalidDate", ctx.isInvalidDate)("showClearButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 31, ctx.isLoadingtable$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.channels);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datasets", ctx.areaChartData)("labels", ctx.areaChartLabels)("options", ctx.areaChartOptions)("colors", ctx.areaChartColors)("legend", ctx.areaChartLegend)("chartType", ctx.areaChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx.dashboardListing)("messages", ctx.my_messages)("columnMode", ctx.ColumnMode.force)("scrollbarH", true)("headerHeight", 50)("footerHeight", 50)("count", ctx.count)("externalPaging", true)("externalSorting", true)("limit", ctx.limit)("offset", ctx.offset);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("frozenLeft", true)("width", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 33, ctx.isLoadingtable$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_8__.DaterangepickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.BaseChartDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnCellDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdG9yLmNvbXBvbmVudC5zY3NzIn0= */", ".ng-dropdown-panel .ng-dropdown-panel-items .ng-option img {\n  margin-right: 0.7rem;\n}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option img + b {\n  vertical-align: middle;\n}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked {\n  background-color: #2F8BE6 !important;\n  color: #fff !important;\n}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option-selected {\n  background-color: #2F8BE6 !important;\n  color: #fff !important;\n}\n.ng-select .ng-select-container {\n  background-color: transparent !important;\n  border-color: #E0E0E0;\n  border-radius: 0.35rem;\n  color: #342E49;\n}\n.ng-select .ng-dropdown-panel {\n  border-color: #E0E0E0;\n  box-shadow: none;\n  margin: 0;\n}\n.ng-select.ng-select-opened > .ng-select-container {\n  border-color: #2F8BE6 !important;\n}\n.ng-select.ng-select-focused:not(.ng-select-opened) > .ng-select-container {\n  border-color: #2F8BE6;\n  box-shadow: none;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value {\n  background-color: #2F8BE6;\n  color: #fff;\n  border-radius: 0.35rem;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon {\n  border: 1px solid #7441DB;\n  border-right: 0 !important;\n  border-top-left-radius: 0.35rem;\n  border-bottom-left-radius: 0.35rem;\n  padding: 1px 0 1px 5px;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover {\n  background-color: inherit;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label {\n  border: 1px solid #7441DB;\n  border-left: 0 !important;\n  border-top-right-radius: 0.35rem;\n  border-bottom-right-radius: 0.35rem;\n}\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container {\n  border-color: #474748;\n  color: #B2B1B5;\n}\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container .ng-input > input,\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container .ng-input > input::placeholder {\n  color: #B2B1B5;\n}\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container {\n  border-color: rgba(238, 238, 238, 0.2);\n  color: #D6D5D8;\n}\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container .ng-input > input,\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container .ng-input > input::placeholder {\n  color: #D6D5D8;\n}\nhtml body.layout-dark .ng-dropdown-panel {\n  border-color: #474748;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  background-color: #1E1E1E;\n  color: #B2B1B5;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled {\n  color: #626164;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-optgroup.ng-option-disabled {\n  background-color: #1E1E1E;\n  color: #626164;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-header,\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-footer {\n  background-color: #101010;\n  color: #626164;\n  border-color: #474748;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5zY3NzIiwiLi4vY29yZS92YXJpYWJsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vY29yZS92YXJpYWJsZXMvYXBwLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1JO0VBQ0Usb0JBQUE7QUFMTjtBQU1NO0VBQ0Usc0JBQUE7QUFKUjtBQU9JO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtBQUxOO0FBUUU7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0FBTko7QUFVRTtFQUNFLHdDQUFBO0VBQ0EscUJDb0VXO0VEbkVYLHNCQ3FFWTtFRHBFWixjQ21EUztBRDFEYjtBQVNFO0VBQ0UscUJDK0RXO0VEOURYLGdCQUFBO0VBQ0EsU0FBQTtBQVBKO0FBU0U7RUFDRSxnQ0FBQTtBQVBKO0FBU0U7RUFDRSxxQkNUTTtFRFVOLGdCQUFBO0FBUEo7QUFTRTtFQUNFLHlCQ2JNO0VEY04sV0MzQ0k7RUQ0Q0osc0JDbURZO0FEMURoQjtBQVFJO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQytDVTtFRDlDVixrQ0M4Q1U7RUQ3Q1Ysc0JBQUE7QUFOTjtBQU9NO0VBQ0UseUJBQUE7QUFMUjtBQVFJO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQ3FDVTtFRHBDVixtQ0NvQ1U7QUQxQ2hCO0FBZ0JNO0VBQ0UscUJFYlU7RUZjVixjRW5CUTtBRk1oQjtBQWNROztFQUVFLGNFdEJNO0FGVWhCO0FBb0JNO0VBQ0Usc0NFZFU7RUZlVixjRXBCUTtBRkVoQjtBQW1CUTs7RUFFRSxjRXZCTTtBRk1oQjtBQXVCRTtFQUNFLHFCRXJDYztBRmdCbEI7QUFzQkk7RUFDRSx5QkUzQ1E7RUY0Q1IsY0U3Q1U7QUZ5QmhCO0FBcUJNO0VBQ0UsY0UzQ1k7QUZ3QnBCO0FBc0JJO0VBQ0UseUJFbERRO0VGbURSLGNFaERjO0FGNEJwQjtBQXNCSTs7RUFFRSx5QkV6RFU7RUYwRFYsY0VyRGM7RUZzRGQscUJFckRZO0FGaUNsQiIsImZpbGUiOiJzZWxlY3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9jb3JlL3ZhcmlhYmxlcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi9jb3JlL3ZhcmlhYmxlcy9hcHAtdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vY29yZS9jb2xvcnMvcGFsZXR0ZS12YXJpYWJsZXNcIjtcblxuLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gIC5uZy1vcHRpb24ge1xuICAgIGltZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcbiAgICAgICYrYiB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgfVxuICAgICYubmctb3B0aW9uLW1hcmtlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAubmctb3B0aW9uLXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgfVxufVxuLm5nLXNlbGVjdCB7XG4gIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICBjb2xvcjogJGJvZHktY29sb3I7XG4gIH1cbiAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgJi5uZy1zZWxlY3Qtb3BlbmVkPi5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgJi5uZy1zZWxlY3QtZm9jdXNlZDpub3QoLm5nLXNlbGVjdC1vcGVuZWQpPi5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgJi5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgLm5nLXZhbHVlLWljb24ge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbWFwLWdldCgkcHJpbWFyeS1jb2xvciwgZGFya2VuLTEpO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgICAgcGFkZGluZzogMXB4IDAgMXB4IDVweDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuICAgIH1cbiAgICAubmctdmFsdWUtbGFiZWwge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbWFwLWdldCgkcHJpbWFyeS1jb2xvciwgZGFya2VuLTEpO1xuICAgICAgYm9yZGVyLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICB9XG4gIH1cbn1cblxuXG5odG1sIGJvZHkubGF5b3V0LWRhcmsge1xuICAvLyBmb3IgZGFyayBsYXlvdXRcbiAgJjpub3QoLmxheW91dC10cmFuc3BhcmVudCkge1xuICAgIC5uZy1zZWxlY3Qge1xuICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICRkbC1ib3JkZXItY29sb3I7XG4gICAgICAgIGNvbG9yOiAkZGwtdGV4dC1jb2xvcjtcbiAgICAgICAgLm5nLWlucHV0PmlucHV0LFxuICAgICAgICAubmctaW5wdXQ+aW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogJGRsLXRleHQtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZm9yIHRyYW5zcGFyZW50IGxheW91dFxuICAmLmxheW91dC10cmFuc3BhcmVudCB7XG4gICAgLm5nLXNlbGVjdCB7XG4gICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRsLWJvcmRlci1jb2xvcjtcbiAgICAgICAgY29sb3I6ICR0bC10ZXh0LWNvbG9yO1xuICAgICAgICAubmctaW5wdXQ+aW5wdXQsXG4gICAgICAgIC5uZy1pbnB1dD5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiAkdGwtdGV4dC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmb3IgZGFyayBhbmQgdHJhbnNwYXJlbnQgbGF5b3V0c1xuICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgIGJvcmRlci1jb2xvcjogJGRsLWJvcmRlci1jb2xvcjtcbiAgICAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGwtYmctY29sb3I7XG4gICAgICBjb2xvcjogJGRsLXRleHQtY29sb3I7XG4gICAgICAmLm5nLW9wdGlvbi1kaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiAkZGwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICAgIC5uZy1vcHRncm91cC5uZy1vcHRpb24tZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRsLWJnLWNvbG9yO1xuICAgICAgY29sb3I6ICRkbC1kaXNhYmxlZC1jb2xvcjtcbiAgICB9XG4gICAgLm5nLWRyb3Bkb3duLWhlYWRlcixcbiAgICAubmctZHJvcGRvd24tZm9vdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci1kYXJrO1xuICAgICAgY29sb3I6ICRkbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIGJvcmRlci1jb2xvcjogJGRsLWJvcmRlci1jb2xvcjtcbiAgICB9XG4gIH1cbn1cbiIsIiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuJGdyYXlzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZ3JheXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICksXG4gICRncmF5c1xuKTtcblxuJHByaW1hcnk6ICMyRjhCRTYgIWRlZmF1bHQ7XG4kc3VjY2VzczogIzQwQzA1NyAhZGVmYXVsdDtcbiRpbmZvOiAjMkY4QkU2ICFkZWZhdWx0O1xuJHdhcm5pbmc6ICM3ZTc3NzEgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAjRjU1MjUyICFkZWZhdWx0O1xuJHNlY29uZGFyeTogIzYxNkQ4OSAhZGVmYXVsdDtcbiRsaWdodDogI0RCREVFNSAhZGVmYXVsdDtcbiRkYXJrOiAjMUEwNTFEICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInByaW1hcnlcIjogJHByaW1hcnksXG4gICAgXCJzdWNjZXNzXCI6ICRzdWNjZXNzLFxuICAgIFwiaW5mb1wiOiAkaW5mbyxcbiAgICBcIndhcm5pbmdcIjogJHdhcm5pbmcsXG4gICAgXCJkYW5nZXJcIjogJGRhbmdlcixcbiAgICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICAgIFwibGlnaHRcIjogJGxpZ2h0LFxuICAgIFwiZGFya1wiOiAkZGFya1xuICApLFxuICAkdGhlbWUtY29sb3JzXG4pO1xuXG4vLyBTcGFjaW5nXG5cbiRzcGFjZXI6IDEuNXJlbTtcbiRzcGFjZXJzOiAoXG4gIDA6IDAsXG4gIDE6IChcbiAgICAkc3BhY2VyICogMC4yNVxuICApLFxuICAyOiAoXG4gICAgJHNwYWNlciAqIDAuNVxuICApLFxuICAzOiAkc3BhY2VyLFxuICA0OiAoXG4gICAgJHNwYWNlciAqIDEuNVxuICApLFxuICA1OiAoXG4gICAgJHNwYWNlciAqIDNcbiAgKVxuKSAhZGVmYXVsdDtcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cbiRib2R5LWJnOiAjRjdGN0Y4O1xuJGJvZHktY29sb3I6ICMzNDJFNDkgIWRlZmF1bHQ7XG5cblxuLy8gTGlua3Ncbi8vXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXG5cbiRsaW5rLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGxpbmstY29sb3IsIDUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmUgIWRlZmF1bHQ7XG5cbi8vIENvbXBvbmVudHNcbi8vXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXG5cbiRib3JkZXItY29sb3I6ICNFMEUwRTAgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiAwLjM1cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNnJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xuXG5cbi8vIFR5cG9ncmFwaHlcbi8vXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJNb250c2VycmF0XCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5ncy1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuMSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogIzE3MTAyRiAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xuXG4kdGV4dC1tdXRlZDogI0JEQkRCRCAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAxLjFyZW0gIWRlZmF1bHQ7XG5cbiRoci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuJHRhYmxlLWNlbGwtcGFkZGluZzogMS4xNXJlbSAycmVtICFkZWZhdWx0O1xuJHRhYmxlLWFjY2VudC1iZzogcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogMC4zNzVyZW0gIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXg6IDEuMjVyZW0gIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0OiAxLjVyZW0gIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogMC4ycmVtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteTogJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQ6IDEuNSAhZGVmYXVsdDtcbiRpbnB1dC1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICRib2R5LWJnICFkZWZhdWx0O1xuJGlucHV0LWNvbG9yOiAjNzU3ODdkICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogI0UwRTBFMCAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6IG5vbmUgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodDogY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIDFlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXkgKiAyfSArIDNweCkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAwICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6IDIuNnJlbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG5cblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICM5RTlFOUUgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuJGRyb3Bkb3duLXBhZGRpbmcteTogMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAxMHB4ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAyMHB4ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6IGluaGVyaXQgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1iZzogI0Y1RjVGNSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogI0VFRUVFRSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAjNzU3NTc1ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICNFMEUwRTAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4vLyBDYXJkc1xuXG4kY2FyZC1zcGFjZXIteTogMS41cmVtO1xuJGNhcmQtc3BhY2VyLXg6IDEuNXJlbTtcbiRjYXJkLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4vLyBQb3BvdmVyc1xuXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjZyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xuXG4vLyBUb2FzdHNcblxuJHRvYXN0LXBhZGRpbmcteTogMC40NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogLThweCA4cHggMTRweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6IDg1JSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogNTAwICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteDogMC42NjY2NjY2NjdyZW0gIWRlZmF1bHQ7XG5cbi8vIE1vZGFsc1xuXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbi8vIEFsZXJ0c1xuLy9cbi8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxuXG4kYWxlcnQtcGFkZGluZy15OiAwLjk1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogMS40NXJlbSAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAwLjhyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogMXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogI2VlZSAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ob3Zlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogIzc1NzU3NSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogaW5oZXJpdCAhZGVmYXVsdDtcblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xuJGNvZGUtY29sb3I6ICRkYW5nZXIgIWRlZmF1bHQ7XG5cbi8vIFV0aWxpdGllc1xuXG4kb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4sIHZpc2libGUsIHNjcm9sbCAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG4vLyB2ZXJ0aWNhbCBtZW51XG4kbWVudS1leHBhbmRlZC13aWR0aC1zbTogMjIwcHg7XG4kbWVudS1leHBhbmRlZC13aWR0aDogMjUwcHg7XG4kbWVudS1leHBhbmRlZC13aWR0aC1sZzogMjgwcHg7XG4kbWVudS1jb2xsYXBzZWQtd2lkdGg6IDYwcHg7XG5cbi8vIEhvcml6b250YWwgTWVudVxuJG1lbnUtYWN0aXZlLWJnOiAjRTdFOUVDO1xuXG4kZm9udC1zaXplLXJvb3Q6IDE1cHg7XG5cbi8vIEF2YXRhclxuJGF2YXRhci1iZzogI0UwRTBFMDtcbiRhdmF0YXItdGV4dC1jb2xvcjogIzYxNjE2MTtcbiRhdmF0YXItc2l6ZTogMzJweDtcbiRhdmF0YXItc2l6ZS14bDogNzBweDtcbiRhdmF0YXItc2l6ZS1sZzogNTBweDtcbiRhdmF0YXItc2l6ZS1tZDogNDBweDtcbiRhdmF0YXItc2l6ZS1zbTogMjRweDtcbiRhdmF0YXItc3RhdHVzLXNpemU6IDExcHg7XG4kYXZhdGFyLXN0YXR1cy1zaXplLWxnOiAxN3B4O1xuXG4vLyBTaGFkb3dzXG4kc2hhZG93LXVtYnJhLW9wYWNpdHk6IDAuMiAhZGVmYXVsdDtcbiRzaGFkb3ctcGVudW1icmEtb3BhY2l0eTogMC4xNCAhZGVmYXVsdDtcbiRzaGFkb3ctYW1iaWVudC1vcGFjaXR5OiAwLjEyICFkZWZhdWx0O1xuXG4vL3ZhcmlhYmxlcyBmb3Igc29jaWFsXG4kc29jaWFsLWZhY2Vib29rOiAjM2I1OTk4O1xuJHNvY2lhbC10d2l0dGVyOiAjNTVhY2VlO1xuJHNvY2lhbC1waW50ZXJlc3Q6ICNjYzIxMjc7XG4kc29jaWFsLWdvb2dsZTogI2RkNGIzOTtcbiRzb2NpYWwtbGlua2VkaW46ICMwOTc2YjQ7XG4kc29jaWFsLWRyaWJiYmxlOiAjZWE0Yzg5O1xuJHNvY2lhbC1naXRodWI6ICMzMzMzMzM7XG4kc29jaWFsLXlvdXR1YmU6ICNlNTJkMjc7XG4kc29jaWFsLWluc3RhZ3JhbTogIzEyNTY4ODtcbiRzb2NpYWwtcmVkZGl0OiAjZmY0NTAwO1xuJHNvY2lhbC10dW1ibHI6ICMzNTQ2NWM7XG4kc29jaWFsLWJlaGFuY2U6ICMxNzY5ZmY7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFZhcmlhYmxlcyBmb3IgRGFyayBMYXlvdXRcbiRkYXJrLXN0eWxlOiB0cnVlO1xuJGJnLWNvbG9yLWRhcms6ICMxMDEwMTA7XG4kZGwtdGV4dC1jb2xvcjogI0IyQjFCNTtcbiRkbC1iZy1jb2xvcjogIzFFMUUxRTtcbiRkbC1oZWFkaW5ncy1jb2xvcjogI0JGQkVDMjtcbiRkbC10ZXh0LW11dGVkLWNvbG9yOiAjODQ4NDg0O1xuJGRsLWRpc2FibGVkLWNvbG9yOiAjNjI2MTY0O1xuJGRsLWJvcmRlci1jb2xvcjogIzQ3NDc0ODtcbiRkbC1jYXJkLXNoYWRvdzogLThweCA4cHggMTRweCAwIHJnYmEoJGJsYWNrLCAwLjI1KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBWYXJpYWJsZXMgRm9yIFRyYW5zcGFyZW50IExheW91dFxuXG4kdGwtdGV4dC1jb2xvcjogI0Q2RDVEODtcbiR0bC1oZWFkaW5ncy1jb2xvcjogI0U5RTlFQTtcbiR0bC1iZy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4kdGwtdGV4dC1tdXRlZC1jb2xvcjogI0MzQzJDNTtcbiR0bC1kaXNhYmxlZC1jb2xvcjogIzlFOUU5RTtcbiR0bC1ib3JkZXItY29sb3I6IHJnYmEoI2VlZSwgMC4yKTtcbiR0bC1jYXJkLWJnLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xMik7XG5cbiRiZy1nbGFzcy1oaWJpc2N1czogbGluZWFyLWdyYWRpZW50KFxuICB0byByaWdodCBib3R0b20sXG4gICNmMDVmNTcsXG4gICNjODNkNWMsXG4gICM5OTI0NWEsXG4gICM2NzEzNTEsXG4gICMzNjA5NDBcbik7XG4kYmctZ2xhc3MtcHVycGxlLXBpenpheno6IGxpbmVhci1ncmFkaWVudChcbiAgdG8gcmlnaHQgYm90dG9tLFxuICAjNjYyZDg2LFxuICAjOGIyYThhLFxuICAjYWUyMzg5LFxuICAjY2YxZDgzLFxuICAjZWQxZTc5XG4pO1xuJGJnLWdsYXNzLWJsdWUtbGFnb29uOiBsaW5lYXItZ3JhZGllbnQoXG4gIHRvIHJpZ2h0IGJvdHRvbSxcbiAgIzE0NGU2OCxcbiAgIzAwNmQ4MyxcbiAgIzAwOGQ5MixcbiAgIzAwYWQ5MSxcbiAgIzU3Y2E4NVxuKTtcbiRiZy1nbGFzcy1lbGVjdHJpYy12aW9sZXQ6IGxpbmVhci1ncmFkaWVudChcbiAgdG8gbGVmdCB0b3AsXG4gICM0YTAwZTAsXG4gICM2MDBkZTAsXG4gICM3MTE5ZTEsXG4gICM4MDIzZTEsXG4gICM4ZTJkZTJcbik7XG4kYmctZ2xhc3MtcG9ydGFnZTogbGluZWFyLWdyYWRpZW50KFxuICB0byBsZWZ0IHRvcCxcbiAgIzk3YWJmZixcbiAgIzc5OGNlNSxcbiAgIzViNmVjYixcbiAgIzNiNTFiMSxcbiAgIzEyMzU5N1xuKTtcbiRiZy1nbGFzcy10dW5kb3JhOiBsaW5lYXItZ3JhZGllbnQoXG4gIHRvIGxlZnQgdG9wLFxuICAjZWY0NjczLFxuICAjZmZjODQ2XG4pO1xuIl19 */", "@charset \"UTF-8\";.ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }.ngx-datatable [hidden] {\n    display: none !important; }.ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }.ngx-datatable .datatable-header .datatable-header-inner {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }.ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }.ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: flex;\n      flex-direction: column; }.ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }.ngx-datatable .datatable-body .datatable-body-row > div {\n        display: flex; }.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable .datatable-footer .selected-count .page-count {\n      flex: 1 1 40%; }.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      flex: 1 1 60%; }.ngx-datatable .datatable-footer .page-count {\n      flex: 1 1 20%; }.ngx-datatable .datatable-footer .datatable-pager {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }/*\nbootstrap table theme\n*/@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-']::before,\n[class*=' datatable-icon-']::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter::before {\n  content: '\\62';\n}.datatable-icon-collapse::before {\n  content: '\\61';\n}.datatable-icon-expand::before {\n  content: '\\63';\n}.datatable-icon-close::before {\n  content: '\\64';\n}.datatable-icon-up::before {\n  content: '\\65';\n}.datatable-icon-down::before {\n  content: '\\66';\n}.datatable-icon-sort-unset::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort::before {\n  content: '\\67';\n}.datatable-icon-done::before {\n  content: '\\68';\n}.datatable-icon-done-all::before {\n  content: '\\69';\n}.datatable-icon-search::before {\n  content: '\\6a';\n}.datatable-icon-pin::before {\n  content: '\\6b';\n}.datatable-icon-add::before {\n  content: '\\6d';\n}.datatable-icon-left::before {\n  content: '\\6f';\n}.datatable-icon-right::before {\n  content: '\\70';\n}.datatable-icon-skip::before {\n  content: '\\71';\n}.datatable-icon-prev::before {\n  content: '\\72';\n}.ngx-datatable.bootstrap {\n  box-shadow: none;\n  font-size: 13px;\n}.ngx-datatable.bootstrap .datatable-header {\n  height: unset !important;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n  vertical-align: bottom;\n  padding: 0.75rem;\n  border-bottom: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n  line-height: 24px;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row {\n  vertical-align: top;\n  border-top: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even {\n  background-color: rgba(0, 0, 0, 0.05);\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n  background-color: #1483ff;\n  color: #fff;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {\n  padding: 0.75rem;\n  text-align: left;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-body .empty-row {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n}.ngx-datatable.bootstrap .datatable-footer {\n  background: #424242;\n  color: #ededed;\n  margin-top: -1px;\n}.ngx-datatable.bootstrap .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager {\n  margin: 0 10px;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 10px 0px;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #545454;\n  font-weight: bold;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0;\n  border-radius: 3px;\n  margin: 0 3px;\n  text-align: center;\n  vertical-align: top;\n  text-decoration: none;\n  vertical-align: bottom;\n  color: #ededed;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 18px;\n  line-height: 27px;\n  padding: 0 3px;\n}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}.ngx-datatable.bootstrap.core-bootstrap.height-70-vh {\n  height: 70vh !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header {\n  background-color: #F7F7F8;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .datatable-header-cell {\n  border-bottom: 0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row {\n  border-color: #E0E0E0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.datatable-row-even {\n  background-color: initial;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active {\n  background-color: #2F8BE6;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active i {\n  color: #fff !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell-label .cell-line-height {\n  line-height: 1.25;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell {\n  display: flex;\n  align-items: center;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer {\n  background-color: transparent;\n  color: #342E49;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li {\n  margin: 0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a {\n  margin: 0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:last-child a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-child(2) a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-last-child(2) a {\n  padding: 1.1rem 1.035rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:last-child a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-child(2) a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-last-child(2) a i {\n  position: absolute;\n  top: 0.55rem;\n  left: 0.4rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li.disabled a {\n  color: #757575;\n  background-color: #E0E0E0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled) a {\n  color: #2F8BE6;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled) a:hover {\n  background-color: #EEEEEE !important;\n  border-color: #E0E0E0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled).active a {\n  z-index: 3;\n  color: #fff;\n  background-color: #2F8BE6 !important;\n  border-color: #2F8BE6;\n  font-weight: inherit;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled):hover a {\n  background-color: #F5F5F5;\n  font-weight: inherit;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li a {\n  position: relative;\n  display: block;\n  padding: 1.1rem 0.75rem;\n  margin: 0 0 0 5px;\n  line-height: 0.1;\n  background-color: #F5F5F5;\n  border: 1px solid #E0E0E0;\n  border-radius: 0.35rem;\n  font-size: 15px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li a i {\n  padding: 0;\n}.ngx-datatable.bootstrap.core-bootstrap.header-height-50 .datatable-header {\n  height: 50px !important;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  line-height: 24px;\n}@media (max-width: 768px) {\n  .page-count {\n    display: none;\n  }\n\n  .datatable-pager {\n    text-align: center !important;\n    margin: 0 !important;\n  }\n}@media screen and (max-width: 800px) {\n  .desktop-hidden {\n    display: initial;\n  }\n\n  .mobile-hidden {\n    display: none;\n  }\n}@media screen and (min-width: 800px) {\n  .desktop-hidden {\n    display: none;\n  }\n\n  .mobile-hidden {\n    display: initial;\n  }\n}html body.layout-dark .datatable-footer .pager li.disabled a {\n  color: #626164;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-header {\n  background-color: #101010;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-body-row {\n  border-color: #474748;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer {\n  color: #B2B1B5;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li.disabled a,\nhtml body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li a {\n  background-color: #1E1E1E;\n  border-color: #474748;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):hover a {\n  background-color: #1E1E1E;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):not(.active) a:hover {\n  background-color: #1E1E1E !important;\n  border-color: #474748 !important;\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-header {\n  background-color: rgba(0, 0, 0, 0.12);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-body-row {\n  border-color: rgba(238, 238, 238, 0.2);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer {\n  color: #D6D5D8;\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li.disabled a,\nhtml body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li a {\n  background-color: rgba(0, 0, 0, 0.12);\n  border-color: rgba(0, 0, 0, 0.12);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled) a {\n  color: #D6D5D8;\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):hover a {\n  background-color: rgba(0, 0, 0, 0.12);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):not(.active) a:hover {\n  background-color: rgba(0, 0, 0, 0.12) !important;\n  border-color: rgba(0, 0, 0, 0.12) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvYm9vdHN0cmFwLnNjc3MiLCJkYXRhdGFibGVzLnNjc3MiLCIuLi9jb3JlL3ZhcmlhYmxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi9jb3JlL3ZhcmlhYmxlcy9hcHAtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLENDQWhCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFLEVBQUUsQ0FDSjtJQUNFLHdCQUF3QixFQUFFLENBQzVCOzs7SUFLRSxzQkFBc0IsRUFBRSxDQUMxQjtJQUNFLGdCQUFnQixFQUFFLENBQ3BCO0lBQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxnQkFBZ0I7SUFDaEIsaUNBQWlDLEVBQUUsQ0FDckM7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsdUJBQXVCLEVBQUUsQ0FDN0I7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQixFQUFFLENBQ3JCO1FBQ0UsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBRSxDQUMzQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDL0I7OztJQU9FLGFBQWE7SUFDYixtQkFBbUI7SUFJbkIsaUJBQWlCO0lBQ2pCLGNBQWMsRUFBRSxDQUNsQjs7SUFFRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBRSxDQUNwQjs7TUFFRSxhQUFhLEVBQUUsQ0FDbkI7O0lBRUUsVUFBVSxFQUFFLENBQ2Q7Ozs7SUFJRSxrQkFBa0IsRUFBRSxDQUN0QjtJQUNFLGNBQWM7SUFDZCxnQkFBZ0IsRUFBRSxDQUNsQjtNQUNFLG9CQUFvQjtNQUNwQiw0QkFBNEIsRUFBRSxDQUNoQztNQUNFLGtCQUFrQjtNQUNsQixxQkFBcUIsRUFBRSxDQUN2QjtRQUNFLGVBQWUsRUFBRSxDQUNuQjtRQUNFLFlBQVksRUFBRSxDQUNoQjtRQUNFLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLGVBQWUsRUFBRSxDQUNuQjs7UUFFRSxxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixNQUFNO1FBQ04sU0FBUztRQUNULFVBQVU7UUFDVixjQUFjO1FBQ2Qsa0JBQWtCLEVBQUUsQ0FDdEI7UUFDRSxpQkFBaUIsRUFBRSxDQUNyQjtRQUNFLG1CQUFtQixFQUFFLENBQ3ZCO1FBQ0UsbUJBQW1CLEVBQUUsQ0FDdkI7UUFDRSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVMsRUFBRSxDQUNYO1VBQ0UsUUFBUSxFQUFFLENBQ1o7VUFDRSxPQUFPLEVBQUUsQ0FDYjtRQUNFLGVBQWUsRUFBRSxDQUN2QjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYyxFQUFFLENBQ2hCO01BQ0UscUJBQXFCLEVBQUUsQ0FDekI7TUFDRSxrQkFBa0IsRUFBRSxDQUN0QjtNQUtFLGFBQWE7TUFPYixzQkFBc0IsRUFBRSxDQUMxQjtNQUNFLGFBQWEsRUFBRSxDQUNmO1FBS0UsYUFBYSxFQUFFLENBQ3JCO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjLEVBQUUsQ0FDaEI7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFdBQVcsRUFBRSxDQUNmO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYTtNQUNiLGlCQUFpQixFQUFFLENBQ25COztRQUVFLFVBQVU7UUFDVixTQUFTO1FBQ1QscUJBQXFCO1FBQ3JCLGdCQUFnQixFQUFFLENBQ3BCOztRQUVFLGFBQWEsRUFBRSxDQUNqQjtRQUNFLGVBQWU7UUFDZixxQkFBcUIsRUFBRSxDQUN6QjtRQUNFLG1CQUFtQixFQUFFLENDck03Qjs7Q0FBQSxDRkVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUFnQztFQUNoQzs0RkFDc0c7RUFDdEcsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQixDQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdDQUErQjtFQUEvQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQyxDQUVBOztFQUVFLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdDQUErQjtFQUEvQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQyxDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZCxDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDRXBHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0VGLENEREU7RUFDRSx3QkFBQTtBQ0dKLENERkk7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNJTixDREhNO0VBQ0UsaUJBQUE7QUNLUixDREFJO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQ0VOLENERE07RUFDRSxxQ0FBQTtBQ0dSLENERE07RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNHUixDRERNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDR1IsQ0RBSTtFQUdFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0FOLENER0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0RKLENERUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FOLENERUk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNBTixDREVRO0VBQ0UsZ0JBQUE7QUNBVixDREljO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0ZoQixDRFFNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNOUixDRFFNOzs7O0VBSUUsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05SLENEYU07RUFDRSxpQkFBQTtBQ1hSLENBM0VNO0VBQ0UsdUJBQUE7QUE4RVIsQ0EzRU07RUFDRSx5QkM4REU7QURlVixDQTNFUTtFQUNFLGdCQUFBO0FBNkVWLENBekVNO0VBQ0UscUJDc0VPO0FES2YsQ0F6RVE7RUFDRSx5QkFBQTtBQTJFVixDQXhFUTtFQUNFLHlCQ0RBO0FEMkVWLENBeEVVO0VBQ0Usc0JBQUE7QUEwRVosQ0FyRVU7RUFDRSxpQkFBQTtBQXVFWixDQW5FUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQXFFVixDQWhFTTtFQUNFLDZCQUFBO0VBQ0EsY0MwQks7QUR3Q2IsQ0EvRFU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQWlFWixDQS9EWTtFQUNFLFNBQUE7QUFpRWQsQ0EvRGM7RUFDRSxTQUFBO0FBaUVoQixDQTFEZ0I7RUFDRSx3QkFBQTtBQTREbEIsQ0ExRGtCO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQTREcEIsQ0F0RGdCO0VBQ0UsY0FBQTtFQUNBLHlCQ3NITztBRDlEekIsQ0FuRGdCO0VBQ0UsY0M5RFI7QURtSFYsQ0FuRGtCO0VBQ0Usb0NBQUE7RUFDQSxxQkNGTDtBRHVEZixDQWhEa0I7RUFDRSxVQUFBO0VBQ0EsV0N0R1o7RUR1R1ksb0NBQUE7RUFDQSxxQkMzRVY7RUQ0RVUsb0JBQUE7QUFrRHBCLENBOUNnQjtFQUNFLHlCQ3NGRjtFRHJGRSxvQkFBQTtBQWdEbEIsQ0E1Q2M7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkMyRUE7RUQxRUEseUJBQUE7RUFDQSxzQkM1QkE7RUQ2QkEsZUU3R0M7QUYySmpCLENBNUNnQjtFQUNFLFVBQUE7QUE4Q2xCLENBckNRO0VBQ0UsdUJBQUE7QUF1Q1YsQ0FoQ007Ozs7RUFJRSxpQkFBQTtBQWtDUixDQTNCQTtFQUNFO0lBQ0UsYUFBQTtFQThCRjs7RUEzQkE7SUFDRSw2QkFBQTtJQUNBLG9CQUFBO0VBOEJGO0FBQ0YsQ0EzQkE7RUFDRTtJQUNFLGdCQUFBO0VBNkJGOztFQTFCQTtJQUNFLGFBQUE7RUE2QkY7QUFDRixDQTFCQTtFQUNFO0lBQ0UsYUFBQTtFQTRCRjs7RUF6QkE7SUFDRSxnQkFBQTtFQTRCRjtBQUNGLENBdEJFO0VBQ0UsY0V0SWdCO0FGOEpwQixDQWxCTTtFQUNFLHlCRWxKUTtBRnNLaEIsQ0FqQk07RUFDRSxxQkVoSlU7QUZtS2xCLENBaEJNO0VBQ0UsY0V6SlE7QUYyS2hCLENBZFU7O0VBRUUseUJFOUpFO0VGK0pGLHFCRTNKTTtBRjJLbEIsQ0FaWTtFQUNFLHlCRXBLQTtBRmtMZCxDQVhZO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtBQWFkLENBRk07RUFDRSxxQ0VwS1c7QUZ3S25CLENBRE07RUFDRSxzQ0V6S1U7QUY0S2xCLENBQU07RUFDRSxjRWxMUTtBRm9MaEIsQ0FFVTs7RUFFRSxxQ0VsTE87RUZtTFAsaUNFbkxPO0FGbUxuQixDQUlZO0VBQ0UsY0U5TEU7QUY0TGhCLENBS1k7RUFDRSxxQ0U1TEs7QUZ5TG5CLENBTVk7RUFDRSxnREFBQTtFQUNBLDRDQUFBO0FBSmQiLCJmaWxlIjoiZGF0YXRhYmxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJztcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90Jyk7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgdXJsKCdmb250cy9kYXRhLXRhYmxlLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLnN2ZyNkYXRhLXRhYmxlJykgZm9ybWF0KCdzdmcnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5bZGF0YS1pY29uXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBjb250ZW50OiBhdHRyKGRhdGEtaWNvbik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbltjbGFzc149J2RhdGF0YWJsZS1pY29uLSddOjpiZWZvcmUsXG5bY2xhc3MqPScgZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmRhdGF0YWJsZS1pY29uLWZpbHRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjInO1xufVxuXG4uZGF0YXRhYmxlLWljb24tY29sbGFwc2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYxJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWV4cGFuZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tY2xvc2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY0Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXVwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb3duOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zb3J0LXVuc2V0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY3Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvbmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY4Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvbmUtYWxsOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zZWFyY2g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZhJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXBpbjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmInO1xufVxuXG4uZGF0YXRhYmxlLWljb24tYWRkOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2ZCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1sZWZ0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Zic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1yaWdodDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzAnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc2tpcDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcHJldjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzInO1xufVxuIiwiLm5neC1kYXRhdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgLyoqXG4gICAqIFZlcnRpY2FsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEhvcml6b250YWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgSGVhZGVyIEhlaWdodCBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIHJvdyBoZWlnaHQgYWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBTaGFyZWQgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogSGVhZGVyIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEJvZHkgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogRm9vdGVyIFN0eWxlc1xuICAgKi8gfVxuICAubmd4LWRhdGF0YWJsZSBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gIC5uZ3gtZGF0YXRhYmxlICosXG4gIC5uZ3gtZGF0YXRhYmxlICo6YmVmb3JlLFxuICAubmd4LWRhdGF0YWJsZSAqOmFmdGVyIHtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsIC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteTogYXV0bzsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwudmlydHVhbGl6ZWQgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtaG9yeiAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWdyb3VwLWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktcm93LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC13ZWJraXQtZmxleC1mbG93OiByb3c7XG4gICAgLW1vei1mbGV4LWZsb3c6IHJvdztcbiAgICAtbXMtZmxleC1mbG93OiByb3c7XG4gICAgLW8tZmxleC1mbG93OiByb3c7XG4gICAgZmxleC1mbG93OiByb3c7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGwsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMS42MjU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbDpmb2N1cyxcbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctbGVmdCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIHotaW5kZXg6IDk7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctbGVmdCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1ncm91cCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnNvcnRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5sb25ncHJlc3MgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5zb3J0LWJ0biB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUtLW5vdC1yZXNpemFibGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgY3Vyc29yOiBldy1yZXNpemU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwucmVzaXplYWJsZTpob3ZlciAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6aG92ZXIgLnJlc2l6ZS1oYW5kbGUtLW5vdC1yZXNpemFibGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlci5kcmFnRnJvbUxlZnQge1xuICAgICAgICAgIHJpZ2h0OiAwOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlci5kcmFnRnJvbVJpZ2h0IHtcbiAgICAgICAgICBsZWZ0OiAwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtdGVtcGxhdGUtd3JhcCB7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLWZvb3Rlci1pbm5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSA0MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgNjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDIwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDgwJTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlcixcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbiIsIi8qXG5ib290c3RyYXAgdGFibGUgdGhlbWVcbiovXG5cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMWQ0ZDc7XG4gICAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLWxhYmVsIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5kYXRhdGFibGUtYm9keSB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMWQ0ZDc7XG4gICAgICAmLmRhdGF0YWJsZS1yb3ctZXZlbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICB9XG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDgzZmY7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgfVxuICAgIH1cbiAgICAuZW1wdHktcm93IHtcbiAgICAgICRhbGVydC1wYWRkaW5nLXk6IDAuNzVyZW0gIWRlZmF1bHQ7XG4gICAgICAkYWxlcnQtcGFkZGluZy14OiAxLjI1cmVtICFkZWZhdWx0O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZzogJGFsZXJ0LXBhZGRpbmcteSAkYWxlcnQtcGFkZGluZy14O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbiAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICM0MjQyNDI7XG4gICAgY29sb3I6ICNlZGVkZWQ7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICAucGFnZS1jb3VudCB7XG4gICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHBhZGRpbmc6IDAgMS4ycmVtO1xuICAgIH1cbiAgICAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIHVsIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgJjpub3QoLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAmLmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1NDU0O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIG1hcmdpbjogMCAzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICBjb2xvcjogI2VkZWRlZDtcbiAgICAgIH1cbiAgICAgIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4gICAgICAuZGF0YXRhYmxlLWljb24tcmlnaHQsXG4gICAgICAuZGF0YXRhYmxlLWljb24tcHJldiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBTdW1tYXJ5IHJvdyBzdHlsZXNcbiAgLmRhdGF0YWJsZS1zdW1tYXJ5LXJvdyB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyc7XG5AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL2Jvb3RzdHJhcC5zY3NzJztcbkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzJztcbkBpbXBvcnQgXCIuLi9jb3JlL3ZhcmlhYmxlcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi9jb3JlL3ZhcmlhYmxlcy9hcHAtdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vY29yZS9jb2xvcnMvcGFsZXR0ZS12YXJpYWJsZXNcIjtcblxuLm5neC1kYXRhdGFibGUge1xuICAmLmJvb3RzdHJhcCB7XG4gICAgJi5jb3JlLWJvb3RzdHJhcCB7XG4gICAgICAmLmhlaWdodC03MC12aCB7XG4gICAgICAgIGhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xuXG4gICAgICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcblxuICAgICAgICAmLmRhdGF0YWJsZS1yb3ctZXZlbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcblxuICAgICAgICAgIGkge1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsLWxhYmVsIHtcbiAgICAgICAgICAuY2VsbC1saW5lLWhlaWdodCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICRib2R5LWNvbG9yO1xuXG4gICAgICAgIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgICAgIC5wYWdlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQgYSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCxcbiAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkLFxuICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSxcbiAgICAgICAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjFyZW0gMS4wMzVyZW07XG5cbiAgICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMC41NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMC40cmVtO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJGdyZXktY29sb3IsIGRhcmtlbi0xKTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWRpc2FibGVkLWJnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICY6bm90KC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICRwYWdpbmF0aW9uLWNvbG9yO1xuXG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24taG92ZXItYmcgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6aG92ZXIgYSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnaW5hdGlvbi1iZztcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjFyZW0gJHBhZ2luYXRpb24tcGFkZGluZy14O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgNXB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjE7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24tYmc7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAkcGFnaW5hdGlvbi1ib3JkZXItd2lkdGggc29saWQgJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1yb290O1xuXG4gICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmhlYWRlci1oZWlnaHQtNTAge1xuICAgICAgICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcblxuICAgICAgLmRhdGF0YWJsZS1pY29uLWxlZnQsXG4gICAgICAuZGF0YXRhYmxlLWljb24tc2tpcCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIG1lZGlhIHF1ZXJ5IGZvciBTbWFsbCAmIE1lZGl1bSBkZXZpY2VzXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2UtY291bnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZGVza3RvcC1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cblxuICAubW9iaWxlLWhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAuZGVza3RvcC1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLWhpZGRlbiB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgfVxufVxuXG5odG1sIGJvZHkubGF5b3V0LWRhcmsge1xuXG4gIC8vIGZvciBkYXJrIGFuZCB0cmFuc3BhcmVudCBsYXlvdXRzXG4gIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlciBsaS5kaXNhYmxlZCBhIHtcbiAgICBjb2xvcjogJGRsLWRpc2FibGVkLWNvbG9yO1xuICB9XG5cbiAgLy8gZm9yIGRhcmsgbGF5b3V0XG4gICY6bm90KC5sYXlvdXQtdHJhbnNwYXJlbnQpIHtcbiAgICAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xuICAgICAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3ItZGFyaztcbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGRsLWJvcmRlci1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgICAgICBjb2xvcjogJGRsLXRleHQtY29sb3I7XG5cbiAgICAgICAgLnBhZ2VyIGxpIHtcblxuICAgICAgICAgICYuZGlzYWJsZWQgYSxcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkbC1iZy1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGRsLWJvcmRlci1jb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOm5vdCguZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICY6aG92ZXIgYSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkbC1iZy1jb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpub3QoLmFjdGl2ZSkgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkbC1iZy1jb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRkbC1ib3JkZXItY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBmb3IgdHJhbnNwYXJlbnQgbGF5b3V0XG4gICYubGF5b3V0LXRyYW5zcGFyZW50IHtcbiAgICAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xuICAgICAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGwtY2FyZC1iZy1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRsLWJvcmRlci1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgICAgICBjb2xvcjogJHRsLXRleHQtY29sb3I7XG5cbiAgICAgICAgLnBhZ2VyIGxpIHtcblxuICAgICAgICAgICYuZGlzYWJsZWQgYSxcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0bC1jYXJkLWJnLWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGwtY2FyZC1iZy1jb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOm5vdCguZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBjb2xvcjogJHRsLXRleHQtY29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIgYSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0bC1jYXJkLWJnLWNvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm5vdCguYWN0aXZlKSBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRsLWNhcmQtYmctY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGwtY2FyZC1iZy1jb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRncmF5czogbWFwLW1lcmdlKFxuICAoXG4gICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXG4gICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXG4gICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcbiAgKSxcbiAgJGdyYXlzXG4pO1xuXG4kcHJpbWFyeTogIzJGOEJFNiAhZGVmYXVsdDtcbiRzdWNjZXNzOiAjNDBDMDU3ICFkZWZhdWx0O1xuJGluZm86ICMyRjhCRTYgIWRlZmF1bHQ7XG4kd2FybmluZzogIzdlNzc3MSAhZGVmYXVsdDtcbiRkYW5nZXI6ICNGNTUyNTIgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAjNjE2RDg5ICFkZWZhdWx0O1xuJGxpZ2h0OiAjREJERUU1ICFkZWZhdWx0O1xuJGRhcms6ICMxQTA1MUQgIWRlZmF1bHQ7XG5cbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcbiAgICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsXG4gICAgXCJpbmZvXCI6ICRpbmZvLFxuICAgIFwid2FybmluZ1wiOiAkd2FybmluZyxcbiAgICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICAgIFwic2Vjb25kYXJ5XCI6ICRzZWNvbmRhcnksXG4gICAgXCJsaWdodFwiOiAkbGlnaHQsXG4gICAgXCJkYXJrXCI6ICRkYXJrXG4gICksXG4gICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIFNwYWNpbmdcblxuJHNwYWNlcjogMS41cmVtO1xuJHNwYWNlcnM6IChcbiAgMDogMCxcbiAgMTogKFxuICAgICRzcGFjZXIgKiAwLjI1XG4gICksXG4gIDI6IChcbiAgICAkc3BhY2VyICogMC41XG4gICksXG4gIDM6ICRzcGFjZXIsXG4gIDQ6IChcbiAgICAkc3BhY2VyICogMS41XG4gICksXG4gIDU6IChcbiAgICAkc3BhY2VyICogM1xuICApXG4pICFkZWZhdWx0O1xuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuJGJvZHktYmc6ICNGN0Y3Rjg7XG4kYm9keS1jb2xvcjogIzM0MkU0OSAhZGVmYXVsdDtcblxuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkbGluay1jb2xvciwgNSUpICFkZWZhdWx0O1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZSAhZGVmYXVsdDtcblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGJvcmRlci1jb2xvcjogI0UwRTBFMCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXM6IDAuMzVyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogMC42cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206IDAuMjVyZW0gIWRlZmF1bHQ7XG5cblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIk1vbnRzZXJyYXRcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS4xICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAjMTcxMDJGICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiA5MCUgIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAjQkRCREJEICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1mb250LXNpemU6IDEuMXJlbSAhZGVmYXVsdDtcblxuJGhyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAxLjE1cmVtIDJyZW0gIWRlZmF1bHQ7XG4kdGFibGUtYWNjZW50LWJnOiByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAwLjM3NXJlbSAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tcGFkZGluZy15OiAwLjRyZW0gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogMS4yNXJlbSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6IDEuNXJlbSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIEZvcm1zXG5cbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAwLjJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogMS41ICFkZWZhdWx0O1xuJGlucHV0LWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XG4kaW5wdXQtY29sb3I6ICM3NTc4N2QgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAjRTBFMEUwICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogbm9uZSAhZGVmYXVsdDtcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0OiBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtfSArICN7JGlucHV0LXBhZGRpbmcteSAqIDJ9ICsgM3B4KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC13aWR0aDogMi42cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogMCAhZGVmYXVsdDtcblxuXG4vLyBaLWluZGV4IG1hc3RlciBsaXN0XG4vL1xuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XG4vLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXG5cblxuXG4vLyBOYXZzXG5cbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogIzlFOUU5RSAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4kZHJvcGRvd24tcGFkZGluZy15OiAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6IDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDEwcHggIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDIwcHggIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogaW5oZXJpdCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkYm9keS1iZyAhZGVmYXVsdDtcbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLWJnOiAjRjVGNUY1ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAjRUVFRUVFICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICM3NTc1NzUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogI0UwRTBFMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbi8vIENhcmRzXG5cbiRjYXJkLXNwYWNlci15OiAxLjVyZW07XG4kY2FyZC1zcGFjZXIteDogMS41cmVtO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xuJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbi8vIFBvcG92ZXJzXG5cbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWJnOiAkYm9keS1iZyAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6IDAuNnJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vIFRvYXN0c1xuXG4kdG9hc3QtcGFkZGluZy15OiAwLjQ1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0b2FzdC1ib3gtc2hhZG93OiAtOHB4IDhweCAxNHB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4vLyBCYWRnZXNcblxuJGJhZGdlLWZvbnQtc2l6ZTogODUlICFkZWZhdWx0O1xuJGJhZGdlLWZvbnQtd2VpZ2h0OiA1MDAgIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy15OiAwLjRyZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAwLjY2NjY2NjY2N3JlbSAhZGVmYXVsdDtcblxuLy8gTW9kYWxzXG5cbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXk6IDAuOTVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtcGFkZGluZy14OiAxLjQ1cmVtICFkZWZhdWx0O1xuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6IDAuOHJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAxcmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLWJnOiAjZWVlICFkZWZhdWx0O1xuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAkYm9keS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAjNzU3NTc1ICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiBpbmhlcml0ICFkZWZhdWx0O1xuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbiR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vIENvZGVcblxuJGNvZGUtZm9udC1zaXplOiA5MCUgIWRlZmF1bHQ7XG4kY29kZS1jb2xvcjogJGRhbmdlciAhZGVmYXVsdDtcblxuLy8gVXRpbGl0aWVzXG5cbiRvdmVyZmxvd3M6IGF1dG8sIGhpZGRlbiwgdmlzaWJsZSwgc2Nyb2xsICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbi8vIHZlcnRpY2FsIG1lbnVcbiRtZW51LWV4cGFuZGVkLXdpZHRoLXNtOiAyMjBweDtcbiRtZW51LWV4cGFuZGVkLXdpZHRoOiAyNTBweDtcbiRtZW51LWV4cGFuZGVkLXdpZHRoLWxnOiAyODBweDtcbiRtZW51LWNvbGxhcHNlZC13aWR0aDogNjBweDtcblxuLy8gSG9yaXpvbnRhbCBNZW51XG4kbWVudS1hY3RpdmUtYmc6ICNFN0U5RUM7XG5cbiRmb250LXNpemUtcm9vdDogMTVweDtcblxuLy8gQXZhdGFyXG4kYXZhdGFyLWJnOiAjRTBFMEUwO1xuJGF2YXRhci10ZXh0LWNvbG9yOiAjNjE2MTYxO1xuJGF2YXRhci1zaXplOiAzMnB4O1xuJGF2YXRhci1zaXplLXhsOiA3MHB4O1xuJGF2YXRhci1zaXplLWxnOiA1MHB4O1xuJGF2YXRhci1zaXplLW1kOiA0MHB4O1xuJGF2YXRhci1zaXplLXNtOiAyNHB4O1xuJGF2YXRhci1zdGF0dXMtc2l6ZTogMTFweDtcbiRhdmF0YXItc3RhdHVzLXNpemUtbGc6IDE3cHg7XG5cbi8vIFNoYWRvd3NcbiRzaGFkb3ctdW1icmEtb3BhY2l0eTogMC4yICFkZWZhdWx0O1xuJHNoYWRvdy1wZW51bWJyYS1vcGFjaXR5OiAwLjE0ICFkZWZhdWx0O1xuJHNoYWRvdy1hbWJpZW50LW9wYWNpdHk6IDAuMTIgIWRlZmF1bHQ7XG5cbi8vdmFyaWFibGVzIGZvciBzb2NpYWxcbiRzb2NpYWwtZmFjZWJvb2s6ICMzYjU5OTg7XG4kc29jaWFsLXR3aXR0ZXI6ICM1NWFjZWU7XG4kc29jaWFsLXBpbnRlcmVzdDogI2NjMjEyNztcbiRzb2NpYWwtZ29vZ2xlOiAjZGQ0YjM5O1xuJHNvY2lhbC1saW5rZWRpbjogIzA5NzZiNDtcbiRzb2NpYWwtZHJpYmJibGU6ICNlYTRjODk7XG4kc29jaWFsLWdpdGh1YjogIzMzMzMzMztcbiRzb2NpYWwteW91dHViZTogI2U1MmQyNztcbiRzb2NpYWwtaW5zdGFncmFtOiAjMTI1Njg4O1xuJHNvY2lhbC1yZWRkaXQ6ICNmZjQ1MDA7XG4kc29jaWFsLXR1bWJscjogIzM1NDY1YztcbiRzb2NpYWwtYmVoYW5jZTogIzE3NjlmZjtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gVmFyaWFibGVzIGZvciBEYXJrIExheW91dFxuJGRhcmstc3R5bGU6IHRydWU7XG4kYmctY29sb3ItZGFyazogIzEwMTAxMDtcbiRkbC10ZXh0LWNvbG9yOiAjQjJCMUI1O1xuJGRsLWJnLWNvbG9yOiAjMUUxRTFFO1xuJGRsLWhlYWRpbmdzLWNvbG9yOiAjQkZCRUMyO1xuJGRsLXRleHQtbXV0ZWQtY29sb3I6ICM4NDg0ODQ7XG4kZGwtZGlzYWJsZWQtY29sb3I6ICM2MjYxNjQ7XG4kZGwtYm9yZGVyLWNvbG9yOiAjNDc0NzQ4O1xuJGRsLWNhcmQtc2hhZG93OiAtOHB4IDhweCAxNHB4IDAgcmdiYSgkYmxhY2ssIDAuMjUpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFZhcmlhYmxlcyBGb3IgVHJhbnNwYXJlbnQgTGF5b3V0XG5cbiR0bC10ZXh0LWNvbG9yOiAjRDZENUQ4O1xuJHRsLWhlYWRpbmdzLWNvbG9yOiAjRTlFOUVBO1xuJHRsLWJnLWNvbG9yOiB0cmFuc3BhcmVudDtcbiR0bC10ZXh0LW11dGVkLWNvbG9yOiAjQzNDMkM1O1xuJHRsLWRpc2FibGVkLWNvbG9yOiAjOUU5RTlFO1xuJHRsLWJvcmRlci1jb2xvcjogcmdiYSgjZWVlLCAwLjIpO1xuJHRsLWNhcmQtYmctY29sb3I6IHJnYmEoJGJsYWNrLCAwLjEyKTtcblxuJGJnLWdsYXNzLWhpYmlzY3VzOiBsaW5lYXItZ3JhZGllbnQoXG4gIHRvIHJpZ2h0IGJvdHRvbSxcbiAgI2YwNWY1NyxcbiAgI2M4M2Q1YyxcbiAgIzk5MjQ1YSxcbiAgIzY3MTM1MSxcbiAgIzM2MDk0MFxuKTtcbiRiZy1nbGFzcy1wdXJwbGUtcGl6emF6ejogbGluZWFyLWdyYWRpZW50KFxuICB0byByaWdodCBib3R0b20sXG4gICM2NjJkODYsXG4gICM4YjJhOGEsXG4gICNhZTIzODksXG4gICNjZjFkODMsXG4gICNlZDFlNzlcbik7XG4kYmctZ2xhc3MtYmx1ZS1sYWdvb246IGxpbmVhci1ncmFkaWVudChcbiAgdG8gcmlnaHQgYm90dG9tLFxuICAjMTQ0ZTY4LFxuICAjMDA2ZDgzLFxuICAjMDA4ZDkyLFxuICAjMDBhZDkxLFxuICAjNTdjYTg1XG4pO1xuJGJnLWdsYXNzLWVsZWN0cmljLXZpb2xldDogbGluZWFyLWdyYWRpZW50KFxuICB0byBsZWZ0IHRvcCxcbiAgIzRhMDBlMCxcbiAgIzYwMGRlMCxcbiAgIzcxMTllMSxcbiAgIzgwMjNlMSxcbiAgIzhlMmRlMlxuKTtcbiRiZy1nbGFzcy1wb3J0YWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gIHRvIGxlZnQgdG9wLFxuICAjOTdhYmZmLFxuICAjNzk4Y2U1LFxuICAjNWI2ZWNiLFxuICAjM2I1MWIxLFxuICAjMTIzNTk3XG4pO1xuJGJnLWdsYXNzLXR1bmRvcmE6IGxpbmVhci1ncmFkaWVudChcbiAgdG8gbGVmdCB0b3AsXG4gICNlZjQ2NzMsXG4gICNmZmM4NDZcbik7XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 16039:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-listing/right-holder/right-holder.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightHolderComponent": () => (/* binding */ RightHolderComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 20722);
/* harmony import */ var _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/chartjs */ 26311);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/dashboard.service */ 77555);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 59298);
/* harmony import */ var app_core_service_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/service/common/common.service */ 52743);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-daterangepicker-material */ 80596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 48896);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ 57361);













function RightHolderComponent_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 28);
} }
function RightHolderComponent_ng_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ng-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", channel_r9._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", channel_r9.channel_title, " ");
} }
function RightHolderComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r10 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r10.video_name, " ");
} }
function RightHolderComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    const row_r12 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, row_r12.views, "1.0-2"), " ");
} }
function RightHolderComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    const row_r13 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, row_r13.likes, "1.0-2"), " ");
} }
function RightHolderComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    const row_r14 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, row_r14.dislikes, "1.0-2"), " ");
} }
function RightHolderComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    const row_r15 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, row_r15.comments, "1.0-2"), " ");
} }
function RightHolderComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    const row_r16 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, row_r16.total_earning, "1.0-2"), " ");
} }
function RightHolderComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
class RightHolderComponent {
    constructor(dashboardservice, cd, fb, commonservice, route, router) {
        this.dashboardservice = dashboardservice;
        this.cd = cd;
        this.fb = fb;
        this.commonservice = commonservice;
        this.route = route;
        this.router = router;
        this.offset = 0;
        this.currentdocsize = 0;
        this.order = "-1";
        this.startDate = "";
        this.endDate = "";
        this.channel = "";
        this.page = 1;
        this.limit = 10;
        this.ascDesc = "1";
        this.sortByComment = "";
        this.sortByView = "";
        this.sortByLike = "";
        this.sortByDislike = "";
        this.sortByTotalEarning = "";
        this.sortByDrmRoyaltyShare = "";
        this.sortByYourShare = "";
        this.sortByVideoName = "";
        this.sortByChannelName = "1";
        this.graphData = [];
        this.channels = [];
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.ColumnMode;
        this.subscriptions = [];
        this.my_messages = {
            emptyMessage: "Loading...",
            totalMessage: "Items",
        };
        this.areaChartData = [{ label: "" }];
        this.areaChartLabels = [];
        this.areaChartOptions = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_0__.areaChartOptions;
        this.areaChartColors = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_0__.areaChartColors;
        this.areaChartLegend = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_0__.areaChartLegend;
        this.areaChartType = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_0__.areaChartType;
        this.filters = {
            startDate: "",
            endDate: "",
        };
        this.startDateformonth = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").startOf("month"),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").endOf("month"),
        };
        this.daterangefilter = this.startDateformonth;
        this.ranges = {
            Today: [moment__WEBPACK_IMPORTED_MODULE_1__(), moment__WEBPACK_IMPORTED_MODULE_1__()],
            Yesterday: [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "days"), moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "days")],
            "Last 1 Week": [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(6, "days"), moment__WEBPACK_IMPORTED_MODULE_1__()],
            "Last 28 Days": [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(27, "days"), moment__WEBPACK_IMPORTED_MODULE_1__()],
            "Last 90 Days": [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(89, "days"), moment__WEBPACK_IMPORTED_MODULE_1__()],
            "Last 365 Days": [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(364, "days"), moment__WEBPACK_IMPORTED_MODULE_1__()],
            // 'This Month': [moment().startOf('month'), moment().endOf('month')],
            // 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        };
        this.invalidDates = [
            moment__WEBPACK_IMPORTED_MODULE_1__().add(2, "days"),
            moment__WEBPACK_IMPORTED_MODULE_1__().add(3, "days"),
            moment__WEBPACK_IMPORTED_MODULE_1__().add(5, "days"),
        ];
        this.initDate = true;
        this.isInvalidDate = (m) => {
            return this.invalidDates.some((d) => d.isSame(m, "day"));
        };
        this.isLoadingtable$ = this.dashboardservice.isLoadingtable$;
    }
    ngOnInit() {
        this.daterangefilter = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(27, "days"),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__(),
        };
        this.filterForm(null);
        this.channel = history.state.id;
        this.getDashboardList();
        this.getchannellist();
    }
    getchannellist() {
        this.commonservice.getallchannel({ search: "" }).subscribe((data) => {
            if (data.result) {
                this.channels = data.result;
                const channelId = history.state.id;
                this.filterForm(channelId);
            }
            this.cd.markForCheck();
        }, (err) => { });
    }
    getByDate(event) {
        if (event.startDate && event.endDate) {
            this.filters["startDate"] = moment__WEBPACK_IMPORTED_MODULE_1__(event.startDate._d).format("YYYY-MM-DD");
            this.filters["endDate"] = moment__WEBPACK_IMPORTED_MODULE_1__(event.endDate._d).format("YYYY-MM-DD");
        }
        else {
            if (this.initDate) {
                this.filters["startDate"] = moment__WEBPACK_IMPORTED_MODULE_1__(this.daterangefilter.startDate).format("YYYY-MM-DD");
                this.filters["endDate"] = moment__WEBPACK_IMPORTED_MODULE_1__(this.daterangefilter.endDate).format("YYYY-MM-DD");
                this.initDate = false;
            }
            else {
                this.filters["startDate"] = this.filters["endDate"] = null;
            }
        }
        this.creatorgraph();
        this.cd.markForCheck();
    }
    /**
     * Populate the table with new data based on the page number
     * @param page The page to select
     */
    setPage(pageInfo) {
        this.page = pageInfo.offset + 1;
        this.offset = pageInfo.offset;
        //this.limit = pageInfo.limit;
        this.getDashboardList();
    }
    /**
     * Populate the table with new data based on the page number
     * Short event
     */
    onSort(event) {
        const sort = event.sorts[0];
        const prop = sort.prop;
        const dir = sort.dir;
        this.page = 1;
        this.offset = 0;
        this.sortByComment =
            this.sortByView =
                this.sortByLike =
                    this.sortByDislike =
                        this.sortByTotalEarning =
                            this.sortByDrmRoyaltyShare =
                                this.sortByYourShare =
                                    this.sortByVideoName =
                                        this.sortByChannelName =
                                            "";
        switch (prop) {
            case "comment":
                this.sortByComment = "1";
                break;
            case "view":
                this.sortByView = "1";
                break;
            case "like":
                this.sortByLike = "1";
                break;
            case "dislike":
                this.sortByDislike = "1";
                break;
            case "total_earning":
                this.sortByTotalEarning = "1";
                break;
            case "drm_royalty_share":
                this.sortByDrmRoyaltyShare = "1";
                break;
            case "your_share":
                this.sortByYourShare = "1";
                break;
            case "vedio_name":
                this.sortByVideoName = "1";
                break;
            case "channel_name":
                this.sortByChannelName = "1";
                break;
            default:
                this.sortByChannelName = "1";
        }
        if (dir == "asc") {
            this.ascDesc = "1";
        }
        if (dir == "desc") {
            this.ascDesc = "-1";
        }
        this.getDashboardList();
    }
    getDashboardList() {
        var _a, _b, _c;
        const params = {
            startDate: this.startDate,
            endDate: this.endDate,
            channel: this.channel,
            page: (_a = this.page) !== null && _a !== void 0 ? _a : 1,
            limit: (_b = this.limit) !== null && _b !== void 0 ? _b : 10,
            ascDesc: (_c = this.ascDesc) !== null && _c !== void 0 ? _c : 1,
            sortByComment: this.sortByComment,
            sortByView: this.sortByView,
            sortByLike: this.sortByLike,
            sortByDislike: this.sortByDislike,
            sortByTotalEarning: this.sortByTotalEarning,
            sortByDrmRoyaltyShare: this.sortByDrmRoyaltyShare,
            sortByYourShare: this.sortByYourShare,
            sortByVideoName: this.sortByVideoName,
            sortByChannelName: this.sortByChannelName,
        };
        this.dashboardservice
            .getDashboardTableListing(params)
            .subscribe((data) => {
            if (data.result) {
                this.dashboardListing = data.result.docs;
                this.count = data.result.totalDocs;
                this.offset = data.result.page - 1;
                this.currentdocsize = this.dashboardListing.length;
                if (this.dashboardListing.length == 0) {
                    this.my_messages.emptyMessage = "No data found.";
                }
            }
        });
    }
    filterForm(channelId) {
        this.filterGroup = this.fb.group({
            channel: [channelId !== null && channelId !== void 0 ? channelId : null],
        });
        this.subscriptions.push(this.filterGroup.controls.channel.valueChanges.subscribe((value) => {
            this.channel = value;
            this.page = 1;
            this.offset = 0;
            this.creatorgraph();
            this.getDashboardList();
        }));
    }
    creatorgraph() {
        const params = {
            startDate: this.filters["startDate"],
            endDate: this.filters["endDate"],
        };
        const channels = this.filterGroup.get("channel").value;
        if (channels) {
            params["channel"] = channels;
        }
        this.dashboardservice
            .getDashboardRightHolderGraph(params)
            .subscribe((data) => {
            if (data.result) {
                this.graphData = data.result;
                var creator_comments_data = [];
                this.graphData.forEach((item) => {
                    creator_comments_data.push(item.comments.toFixed(2));
                });
                var creator_dislikes_data = [];
                this.graphData.forEach((item) => {
                    creator_dislikes_data.push(item.dislikes.toFixed(2));
                });
                var creator_drm_royality_share_data = [];
                this.graphData.forEach((item) => {
                    creator_drm_royality_share_data.push(item.drm_royality_share.toFixed(2));
                });
                var creator_likes_data = [];
                this.graphData.forEach((item) => {
                    creator_likes_data.push(item.likes.toFixed(2));
                });
                var creator_total_earning_data = [];
                this.graphData.forEach((item) => {
                    creator_total_earning_data.push(item.total_earning.toFixed(2));
                });
                var creator_views_data = [];
                this.graphData.forEach((item) => {
                    creator_views_data.push(item.views.toFixed(2));
                });
                var creator_your_share_data = [];
                this.graphData.forEach((item) => {
                    creator_your_share_data.push(item.your_share.toFixed(2));
                });
                var creator_earning_dates = [];
                this.graphData.forEach((item) => {
                    creator_earning_dates.push(item._id);
                });
                var graph_data = [
                    { data: creator_comments_data, label: "Total Comments" },
                    { data: creator_dislikes_data, label: "Total DisLikes" },
                    {
                        data: creator_drm_royality_share_data,
                        label: "Total Royalty Share",
                    },
                    { data: creator_likes_data, label: "Total Likes" },
                    { data: creator_total_earning_data, label: "Total Earnings" },
                    { data: creator_views_data, label: "Total Views" },
                    { data: creator_your_share_data, label: "Total Share" },
                ];
                this.areaChartData = graph_data;
                this.areaChartLabels = creator_earning_dates;
                if (this.graphData.length == 0) {
                    this.my_messages.emptyMessage = "No data found.";
                }
                this.cd.markForCheck();
            }
        });
    }
}
RightHolderComponent.ɵfac = function RightHolderComponent_Factory(t) { return new (t || RightHolderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_core_service_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
RightHolderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RightHolderComponent, selectors: [["app-dashboard-right-holder-listing"]], decls: 39, vars: 36, consts: [["id", "ngx-datatable-basic"], [1, "row"], [1, "col-12"], [1, "card", "customisecard"], [1, "row", "text-left"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content"], [1, "card-body"], [1, "form-group", "role_filter", "mb-2", 3, "formGroup"], ["type", "text", "ngxDaterangepickerMd", "", "placeholder", "Start Date - End Date", 1, "form-control", "form-control-sm", "d-inline-block", "width-200", "mr-1", 3, "ngModel", "showCustomRangeLabel", "alwaysShowCalendars", "ngModelOptions", "ranges", "linkedCalendars", "isInvalidDate", "showClearButton", "ngModelChange", "change"], ["class", "fa fa-spin fa-spinner mr-1", 4, "ngIf"], ["placeholder", "Select Channel", "formControlName", "channel", 1, "d-inline-block", "form-control-sm", "width-200", "mr-1"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "height-400"], ["height", "400", "baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", 3, "rows", "messages", "columnMode", "scrollbarH", "headerHeight", "footerHeight", "count", "externalPaging", "externalSorting", "limit", "offset", "page", "sort"], ["name", "Audio", "prop", "vedio_name", 1, "datatable-row-left", 3, "frozenLeft", "width"], ["ngx-datatable-cell-template", ""], ["name", "Views", "prop", "view"], ["name", "Likes", "prop", "like"], ["name", "Dislikes", "prop", "dislike"], ["name", "Comments", "prop", "comment"], ["name", "Revenue", "prop", "total_earning"], ["class", "spinner_loading", 4, "ngIf"], [1, "fa", "fa-spin", "fa-spinner", "mr-1"], [3, "value"], [1, "spinner_loading"], [1, "fa", "fa-spinner", "fa-spin"]], template: function RightHolderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Rights Holder");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "fieldset", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RightHolderComponent_Template_input_ngModelChange_13_listener($event) { return ctx.daterangefilter = $event; })("change", function RightHolderComponent_Template_input_change_13_listener($event) { return ctx.getByDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, RightHolderComponent_i_14_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ng-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ng-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Select Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, RightHolderComponent_ng_option_19_Template, 2, 2, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "canvas", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ngx-datatable", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function RightHolderComponent_Template_ngx_datatable_page_24_listener($event) { return ctx.setPage($event); })("sort", function RightHolderComponent_Template_ngx_datatable_sort_24_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ngx-datatable-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, RightHolderComponent_ng_template_26_Template, 1, 1, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, RightHolderComponent_ng_template_28_Template, 2, 4, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, RightHolderComponent_ng_template_30_Template, 2, 4, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, RightHolderComponent_ng_template_32_Template, 2, 4, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, RightHolderComponent_ng_template_34_Template, 2, 4, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "ngx-datatable-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, RightHolderComponent_ng_template_36_Template, 2, 4, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, RightHolderComponent_div_37_Template, 3, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.filterGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.daterangefilter)("showCustomRangeLabel", true)("alwaysShowCalendars", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](35, _c0))("ranges", ctx.ranges)("linkedCalendars", true)("isInvalidDate", ctx.isInvalidDate)("showClearButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 31, ctx.isLoadingtable$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.channels);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datasets", ctx.areaChartData)("labels", ctx.areaChartLabels)("options", ctx.areaChartOptions)("colors", ctx.areaChartColors)("legend", ctx.areaChartLegend)("chartType", ctx.areaChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx.dashboardListing)("messages", ctx.my_messages)("columnMode", ctx.ColumnMode.force)("scrollbarH", true)("headerHeight", 50)("footerHeight", 50)("count", ctx.count)("externalPaging", true)("externalSorting", true)("limit", ctx.limit)("offset", ctx.offset);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("frozenLeft", true)("width", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 33, ctx.isLoadingtable$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_8__.DaterangepickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.BaseChartDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnCellDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1ob2xkZXIuY29tcG9uZW50LnNjc3MifQ== */", ".ng-dropdown-panel .ng-dropdown-panel-items .ng-option img {\n  margin-right: 0.7rem;\n}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option img + b {\n  vertical-align: middle;\n}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked {\n  background-color: #2F8BE6 !important;\n  color: #fff !important;\n}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option-selected {\n  background-color: #2F8BE6 !important;\n  color: #fff !important;\n}\n.ng-select .ng-select-container {\n  background-color: transparent !important;\n  border-color: #E0E0E0;\n  border-radius: 0.35rem;\n  color: #342E49;\n}\n.ng-select .ng-dropdown-panel {\n  border-color: #E0E0E0;\n  box-shadow: none;\n  margin: 0;\n}\n.ng-select.ng-select-opened > .ng-select-container {\n  border-color: #2F8BE6 !important;\n}\n.ng-select.ng-select-focused:not(.ng-select-opened) > .ng-select-container {\n  border-color: #2F8BE6;\n  box-shadow: none;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value {\n  background-color: #2F8BE6;\n  color: #fff;\n  border-radius: 0.35rem;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon {\n  border: 1px solid #7441DB;\n  border-right: 0 !important;\n  border-top-left-radius: 0.35rem;\n  border-bottom-left-radius: 0.35rem;\n  padding: 1px 0 1px 5px;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover {\n  background-color: inherit;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label {\n  border: 1px solid #7441DB;\n  border-left: 0 !important;\n  border-top-right-radius: 0.35rem;\n  border-bottom-right-radius: 0.35rem;\n}\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container {\n  border-color: #474748;\n  color: #B2B1B5;\n}\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container .ng-input > input,\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container .ng-input > input::placeholder {\n  color: #B2B1B5;\n}\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container {\n  border-color: rgba(238, 238, 238, 0.2);\n  color: #D6D5D8;\n}\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container .ng-input > input,\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container .ng-input > input::placeholder {\n  color: #D6D5D8;\n}\nhtml body.layout-dark .ng-dropdown-panel {\n  border-color: #474748;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  background-color: #1E1E1E;\n  color: #B2B1B5;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled {\n  color: #626164;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-optgroup.ng-option-disabled {\n  background-color: #1E1E1E;\n  color: #626164;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-header,\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-footer {\n  background-color: #101010;\n  color: #626164;\n  border-color: #474748;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5zY3NzIiwiLi4vY29yZS92YXJpYWJsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vY29yZS92YXJpYWJsZXMvYXBwLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1JO0VBQ0Usb0JBQUE7QUFMTjtBQU1NO0VBQ0Usc0JBQUE7QUFKUjtBQU9JO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtBQUxOO0FBUUU7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0FBTko7QUFVRTtFQUNFLHdDQUFBO0VBQ0EscUJDb0VXO0VEbkVYLHNCQ3FFWTtFRHBFWixjQ21EUztBRDFEYjtBQVNFO0VBQ0UscUJDK0RXO0VEOURYLGdCQUFBO0VBQ0EsU0FBQTtBQVBKO0FBU0U7RUFDRSxnQ0FBQTtBQVBKO0FBU0U7RUFDRSxxQkNUTTtFRFVOLGdCQUFBO0FBUEo7QUFTRTtFQUNFLHlCQ2JNO0VEY04sV0MzQ0k7RUQ0Q0osc0JDbURZO0FEMURoQjtBQVFJO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQytDVTtFRDlDVixrQ0M4Q1U7RUQ3Q1Ysc0JBQUE7QUFOTjtBQU9NO0VBQ0UseUJBQUE7QUFMUjtBQVFJO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQ3FDVTtFRHBDVixtQ0NvQ1U7QUQxQ2hCO0FBZ0JNO0VBQ0UscUJFYlU7RUZjVixjRW5CUTtBRk1oQjtBQWNROztFQUVFLGNFdEJNO0FGVWhCO0FBb0JNO0VBQ0Usc0NFZFU7RUZlVixjRXBCUTtBRkVoQjtBQW1CUTs7RUFFRSxjRXZCTTtBRk1oQjtBQXVCRTtFQUNFLHFCRXJDYztBRmdCbEI7QUFzQkk7RUFDRSx5QkUzQ1E7RUY0Q1IsY0U3Q1U7QUZ5QmhCO0FBcUJNO0VBQ0UsY0UzQ1k7QUZ3QnBCO0FBc0JJO0VBQ0UseUJFbERRO0VGbURSLGNFaERjO0FGNEJwQjtBQXNCSTs7RUFFRSx5QkV6RFU7RUYwRFYsY0VyRGM7RUZzRGQscUJFckRZO0FGaUNsQiIsImZpbGUiOiJzZWxlY3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9jb3JlL3ZhcmlhYmxlcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi9jb3JlL3ZhcmlhYmxlcy9hcHAtdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vY29yZS9jb2xvcnMvcGFsZXR0ZS12YXJpYWJsZXNcIjtcblxuLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gIC5uZy1vcHRpb24ge1xuICAgIGltZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcbiAgICAgICYrYiB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgfVxuICAgICYubmctb3B0aW9uLW1hcmtlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAubmctb3B0aW9uLXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgfVxufVxuLm5nLXNlbGVjdCB7XG4gIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICBjb2xvcjogJGJvZHktY29sb3I7XG4gIH1cbiAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgJi5uZy1zZWxlY3Qtb3BlbmVkPi5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgJi5uZy1zZWxlY3QtZm9jdXNlZDpub3QoLm5nLXNlbGVjdC1vcGVuZWQpPi5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgJi5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgLm5nLXZhbHVlLWljb24ge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbWFwLWdldCgkcHJpbWFyeS1jb2xvciwgZGFya2VuLTEpO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgICAgcGFkZGluZzogMXB4IDAgMXB4IDVweDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuICAgIH1cbiAgICAubmctdmFsdWUtbGFiZWwge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbWFwLWdldCgkcHJpbWFyeS1jb2xvciwgZGFya2VuLTEpO1xuICAgICAgYm9yZGVyLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICB9XG4gIH1cbn1cblxuXG5odG1sIGJvZHkubGF5b3V0LWRhcmsge1xuICAvLyBmb3IgZGFyayBsYXlvdXRcbiAgJjpub3QoLmxheW91dC10cmFuc3BhcmVudCkge1xuICAgIC5uZy1zZWxlY3Qge1xuICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICRkbC1ib3JkZXItY29sb3I7XG4gICAgICAgIGNvbG9yOiAkZGwtdGV4dC1jb2xvcjtcbiAgICAgICAgLm5nLWlucHV0PmlucHV0LFxuICAgICAgICAubmctaW5wdXQ+aW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogJGRsLXRleHQtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZm9yIHRyYW5zcGFyZW50IGxheW91dFxuICAmLmxheW91dC10cmFuc3BhcmVudCB7XG4gICAgLm5nLXNlbGVjdCB7XG4gICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRsLWJvcmRlci1jb2xvcjtcbiAgICAgICAgY29sb3I6ICR0bC10ZXh0LWNvbG9yO1xuICAgICAgICAubmctaW5wdXQ+aW5wdXQsXG4gICAgICAgIC5uZy1pbnB1dD5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiAkdGwtdGV4dC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmb3IgZGFyayBhbmQgdHJhbnNwYXJlbnQgbGF5b3V0c1xuICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgIGJvcmRlci1jb2xvcjogJGRsLWJvcmRlci1jb2xvcjtcbiAgICAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGwtYmctY29sb3I7XG4gICAgICBjb2xvcjogJGRsLXRleHQtY29sb3I7XG4gICAgICAmLm5nLW9wdGlvbi1kaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiAkZGwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICAgIC5uZy1vcHRncm91cC5uZy1vcHRpb24tZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRsLWJnLWNvbG9yO1xuICAgICAgY29sb3I6ICRkbC1kaXNhYmxlZC1jb2xvcjtcbiAgICB9XG4gICAgLm5nLWRyb3Bkb3duLWhlYWRlcixcbiAgICAubmctZHJvcGRvd24tZm9vdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci1kYXJrO1xuICAgICAgY29sb3I6ICRkbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIGJvcmRlci1jb2xvcjogJGRsLWJvcmRlci1jb2xvcjtcbiAgICB9XG4gIH1cbn1cbiIsIiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuJGdyYXlzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZ3JheXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICksXG4gICRncmF5c1xuKTtcblxuJHByaW1hcnk6ICMyRjhCRTYgIWRlZmF1bHQ7XG4kc3VjY2VzczogIzQwQzA1NyAhZGVmYXVsdDtcbiRpbmZvOiAjMkY4QkU2ICFkZWZhdWx0O1xuJHdhcm5pbmc6ICM3ZTc3NzEgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAjRjU1MjUyICFkZWZhdWx0O1xuJHNlY29uZGFyeTogIzYxNkQ4OSAhZGVmYXVsdDtcbiRsaWdodDogI0RCREVFNSAhZGVmYXVsdDtcbiRkYXJrOiAjMUEwNTFEICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInByaW1hcnlcIjogJHByaW1hcnksXG4gICAgXCJzdWNjZXNzXCI6ICRzdWNjZXNzLFxuICAgIFwiaW5mb1wiOiAkaW5mbyxcbiAgICBcIndhcm5pbmdcIjogJHdhcm5pbmcsXG4gICAgXCJkYW5nZXJcIjogJGRhbmdlcixcbiAgICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICAgIFwibGlnaHRcIjogJGxpZ2h0LFxuICAgIFwiZGFya1wiOiAkZGFya1xuICApLFxuICAkdGhlbWUtY29sb3JzXG4pO1xuXG4vLyBTcGFjaW5nXG5cbiRzcGFjZXI6IDEuNXJlbTtcbiRzcGFjZXJzOiAoXG4gIDA6IDAsXG4gIDE6IChcbiAgICAkc3BhY2VyICogMC4yNVxuICApLFxuICAyOiAoXG4gICAgJHNwYWNlciAqIDAuNVxuICApLFxuICAzOiAkc3BhY2VyLFxuICA0OiAoXG4gICAgJHNwYWNlciAqIDEuNVxuICApLFxuICA1OiAoXG4gICAgJHNwYWNlciAqIDNcbiAgKVxuKSAhZGVmYXVsdDtcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cbiRib2R5LWJnOiAjRjdGN0Y4O1xuJGJvZHktY29sb3I6ICMzNDJFNDkgIWRlZmF1bHQ7XG5cblxuLy8gTGlua3Ncbi8vXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXG5cbiRsaW5rLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGxpbmstY29sb3IsIDUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmUgIWRlZmF1bHQ7XG5cbi8vIENvbXBvbmVudHNcbi8vXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXG5cbiRib3JkZXItY29sb3I6ICNFMEUwRTAgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiAwLjM1cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNnJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xuXG5cbi8vIFR5cG9ncmFwaHlcbi8vXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJNb250c2VycmF0XCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5ncy1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuMSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogIzE3MTAyRiAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xuXG4kdGV4dC1tdXRlZDogI0JEQkRCRCAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAxLjFyZW0gIWRlZmF1bHQ7XG5cbiRoci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuJHRhYmxlLWNlbGwtcGFkZGluZzogMS4xNXJlbSAycmVtICFkZWZhdWx0O1xuJHRhYmxlLWFjY2VudC1iZzogcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogMC4zNzVyZW0gIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXg6IDEuMjVyZW0gIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0OiAxLjVyZW0gIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogMC4ycmVtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteTogJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQ6IDEuNSAhZGVmYXVsdDtcbiRpbnB1dC1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICRib2R5LWJnICFkZWZhdWx0O1xuJGlucHV0LWNvbG9yOiAjNzU3ODdkICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogI0UwRTBFMCAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6IG5vbmUgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodDogY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIDFlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXkgKiAyfSArIDNweCkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAwICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6IDIuNnJlbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG5cblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICM5RTlFOUUgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuJGRyb3Bkb3duLXBhZGRpbmcteTogMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAxMHB4ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAyMHB4ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6IGluaGVyaXQgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1iZzogI0Y1RjVGNSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogI0VFRUVFRSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAjNzU3NTc1ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICNFMEUwRTAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4vLyBDYXJkc1xuXG4kY2FyZC1zcGFjZXIteTogMS41cmVtO1xuJGNhcmQtc3BhY2VyLXg6IDEuNXJlbTtcbiRjYXJkLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4vLyBQb3BvdmVyc1xuXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjZyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xuXG4vLyBUb2FzdHNcblxuJHRvYXN0LXBhZGRpbmcteTogMC40NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogLThweCA4cHggMTRweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6IDg1JSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogNTAwICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteDogMC42NjY2NjY2NjdyZW0gIWRlZmF1bHQ7XG5cbi8vIE1vZGFsc1xuXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbi8vIEFsZXJ0c1xuLy9cbi8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxuXG4kYWxlcnQtcGFkZGluZy15OiAwLjk1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogMS40NXJlbSAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAwLjhyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogMXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogI2VlZSAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ob3Zlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogIzc1NzU3NSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogaW5oZXJpdCAhZGVmYXVsdDtcblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xuJGNvZGUtY29sb3I6ICRkYW5nZXIgIWRlZmF1bHQ7XG5cbi8vIFV0aWxpdGllc1xuXG4kb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4sIHZpc2libGUsIHNjcm9sbCAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG4vLyB2ZXJ0aWNhbCBtZW51XG4kbWVudS1leHBhbmRlZC13aWR0aC1zbTogMjIwcHg7XG4kbWVudS1leHBhbmRlZC13aWR0aDogMjUwcHg7XG4kbWVudS1leHBhbmRlZC13aWR0aC1sZzogMjgwcHg7XG4kbWVudS1jb2xsYXBzZWQtd2lkdGg6IDYwcHg7XG5cbi8vIEhvcml6b250YWwgTWVudVxuJG1lbnUtYWN0aXZlLWJnOiAjRTdFOUVDO1xuXG4kZm9udC1zaXplLXJvb3Q6IDE1cHg7XG5cbi8vIEF2YXRhclxuJGF2YXRhci1iZzogI0UwRTBFMDtcbiRhdmF0YXItdGV4dC1jb2xvcjogIzYxNjE2MTtcbiRhdmF0YXItc2l6ZTogMzJweDtcbiRhdmF0YXItc2l6ZS14bDogNzBweDtcbiRhdmF0YXItc2l6ZS1sZzogNTBweDtcbiRhdmF0YXItc2l6ZS1tZDogNDBweDtcbiRhdmF0YXItc2l6ZS1zbTogMjRweDtcbiRhdmF0YXItc3RhdHVzLXNpemU6IDExcHg7XG4kYXZhdGFyLXN0YXR1cy1zaXplLWxnOiAxN3B4O1xuXG4vLyBTaGFkb3dzXG4kc2hhZG93LXVtYnJhLW9wYWNpdHk6IDAuMiAhZGVmYXVsdDtcbiRzaGFkb3ctcGVudW1icmEtb3BhY2l0eTogMC4xNCAhZGVmYXVsdDtcbiRzaGFkb3ctYW1iaWVudC1vcGFjaXR5OiAwLjEyICFkZWZhdWx0O1xuXG4vL3ZhcmlhYmxlcyBmb3Igc29jaWFsXG4kc29jaWFsLWZhY2Vib29rOiAjM2I1OTk4O1xuJHNvY2lhbC10d2l0dGVyOiAjNTVhY2VlO1xuJHNvY2lhbC1waW50ZXJlc3Q6ICNjYzIxMjc7XG4kc29jaWFsLWdvb2dsZTogI2RkNGIzOTtcbiRzb2NpYWwtbGlua2VkaW46ICMwOTc2YjQ7XG4kc29jaWFsLWRyaWJiYmxlOiAjZWE0Yzg5O1xuJHNvY2lhbC1naXRodWI6ICMzMzMzMzM7XG4kc29jaWFsLXlvdXR1YmU6ICNlNTJkMjc7XG4kc29jaWFsLWluc3RhZ3JhbTogIzEyNTY4ODtcbiRzb2NpYWwtcmVkZGl0OiAjZmY0NTAwO1xuJHNvY2lhbC10dW1ibHI6ICMzNTQ2NWM7XG4kc29jaWFsLWJlaGFuY2U6ICMxNzY5ZmY7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFZhcmlhYmxlcyBmb3IgRGFyayBMYXlvdXRcbiRkYXJrLXN0eWxlOiB0cnVlO1xuJGJnLWNvbG9yLWRhcms6ICMxMDEwMTA7XG4kZGwtdGV4dC1jb2xvcjogI0IyQjFCNTtcbiRkbC1iZy1jb2xvcjogIzFFMUUxRTtcbiRkbC1oZWFkaW5ncy1jb2xvcjogI0JGQkVDMjtcbiRkbC10ZXh0LW11dGVkLWNvbG9yOiAjODQ4NDg0O1xuJGRsLWRpc2FibGVkLWNvbG9yOiAjNjI2MTY0O1xuJGRsLWJvcmRlci1jb2xvcjogIzQ3NDc0ODtcbiRkbC1jYXJkLXNoYWRvdzogLThweCA4cHggMTRweCAwIHJnYmEoJGJsYWNrLCAwLjI1KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBWYXJpYWJsZXMgRm9yIFRyYW5zcGFyZW50IExheW91dFxuXG4kdGwtdGV4dC1jb2xvcjogI0Q2RDVEODtcbiR0bC1oZWFkaW5ncy1jb2xvcjogI0U5RTlFQTtcbiR0bC1iZy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4kdGwtdGV4dC1tdXRlZC1jb2xvcjogI0MzQzJDNTtcbiR0bC1kaXNhYmxlZC1jb2xvcjogIzlFOUU5RTtcbiR0bC1ib3JkZXItY29sb3I6IHJnYmEoI2VlZSwgMC4yKTtcbiR0bC1jYXJkLWJnLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xMik7XG5cbiRiZy1nbGFzcy1oaWJpc2N1czogbGluZWFyLWdyYWRpZW50KFxuICB0byByaWdodCBib3R0b20sXG4gICNmMDVmNTcsXG4gICNjODNkNWMsXG4gICM5OTI0NWEsXG4gICM2NzEzNTEsXG4gICMzNjA5NDBcbik7XG4kYmctZ2xhc3MtcHVycGxlLXBpenpheno6IGxpbmVhci1ncmFkaWVudChcbiAgdG8gcmlnaHQgYm90dG9tLFxuICAjNjYyZDg2LFxuICAjOGIyYThhLFxuICAjYWUyMzg5LFxuICAjY2YxZDgzLFxuICAjZWQxZTc5XG4pO1xuJGJnLWdsYXNzLWJsdWUtbGFnb29uOiBsaW5lYXItZ3JhZGllbnQoXG4gIHRvIHJpZ2h0IGJvdHRvbSxcbiAgIzE0NGU2OCxcbiAgIzAwNmQ4MyxcbiAgIzAwOGQ5MixcbiAgIzAwYWQ5MSxcbiAgIzU3Y2E4NVxuKTtcbiRiZy1nbGFzcy1lbGVjdHJpYy12aW9sZXQ6IGxpbmVhci1ncmFkaWVudChcbiAgdG8gbGVmdCB0b3AsXG4gICM0YTAwZTAsXG4gICM2MDBkZTAsXG4gICM3MTE5ZTEsXG4gICM4MDIzZTEsXG4gICM4ZTJkZTJcbik7XG4kYmctZ2xhc3MtcG9ydGFnZTogbGluZWFyLWdyYWRpZW50KFxuICB0byBsZWZ0IHRvcCxcbiAgIzk3YWJmZixcbiAgIzc5OGNlNSxcbiAgIzViNmVjYixcbiAgIzNiNTFiMSxcbiAgIzEyMzU5N1xuKTtcbiRiZy1nbGFzcy10dW5kb3JhOiBsaW5lYXItZ3JhZGllbnQoXG4gIHRvIGxlZnQgdG9wLFxuICAjZWY0NjczLFxuICAjZmZjODQ2XG4pO1xuIl19 */", "@charset \"UTF-8\";.ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }.ngx-datatable [hidden] {\n    display: none !important; }.ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }.ngx-datatable .datatable-header .datatable-header-inner {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }.ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }.ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: flex;\n      flex-direction: column; }.ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }.ngx-datatable .datatable-body .datatable-body-row > div {\n        display: flex; }.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable .datatable-footer .selected-count .page-count {\n      flex: 1 1 40%; }.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      flex: 1 1 60%; }.ngx-datatable .datatable-footer .page-count {\n      flex: 1 1 20%; }.ngx-datatable .datatable-footer .datatable-pager {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }/*\nbootstrap table theme\n*/@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-']::before,\n[class*=' datatable-icon-']::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter::before {\n  content: '\\62';\n}.datatable-icon-collapse::before {\n  content: '\\61';\n}.datatable-icon-expand::before {\n  content: '\\63';\n}.datatable-icon-close::before {\n  content: '\\64';\n}.datatable-icon-up::before {\n  content: '\\65';\n}.datatable-icon-down::before {\n  content: '\\66';\n}.datatable-icon-sort-unset::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort::before {\n  content: '\\67';\n}.datatable-icon-done::before {\n  content: '\\68';\n}.datatable-icon-done-all::before {\n  content: '\\69';\n}.datatable-icon-search::before {\n  content: '\\6a';\n}.datatable-icon-pin::before {\n  content: '\\6b';\n}.datatable-icon-add::before {\n  content: '\\6d';\n}.datatable-icon-left::before {\n  content: '\\6f';\n}.datatable-icon-right::before {\n  content: '\\70';\n}.datatable-icon-skip::before {\n  content: '\\71';\n}.datatable-icon-prev::before {\n  content: '\\72';\n}.ngx-datatable.bootstrap {\n  box-shadow: none;\n  font-size: 13px;\n}.ngx-datatable.bootstrap .datatable-header {\n  height: unset !important;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n  vertical-align: bottom;\n  padding: 0.75rem;\n  border-bottom: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n  line-height: 24px;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row {\n  vertical-align: top;\n  border-top: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even {\n  background-color: rgba(0, 0, 0, 0.05);\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n  background-color: #1483ff;\n  color: #fff;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {\n  padding: 0.75rem;\n  text-align: left;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-body .empty-row {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n}.ngx-datatable.bootstrap .datatable-footer {\n  background: #424242;\n  color: #ededed;\n  margin-top: -1px;\n}.ngx-datatable.bootstrap .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager {\n  margin: 0 10px;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 10px 0px;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #545454;\n  font-weight: bold;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0;\n  border-radius: 3px;\n  margin: 0 3px;\n  text-align: center;\n  vertical-align: top;\n  text-decoration: none;\n  vertical-align: bottom;\n  color: #ededed;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 18px;\n  line-height: 27px;\n  padding: 0 3px;\n}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}.ngx-datatable.bootstrap.core-bootstrap.height-70-vh {\n  height: 70vh !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header {\n  background-color: #F7F7F8;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .datatable-header-cell {\n  border-bottom: 0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row {\n  border-color: #E0E0E0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.datatable-row-even {\n  background-color: initial;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active {\n  background-color: #2F8BE6;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active i {\n  color: #fff !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell-label .cell-line-height {\n  line-height: 1.25;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell {\n  display: flex;\n  align-items: center;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer {\n  background-color: transparent;\n  color: #342E49;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li {\n  margin: 0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a {\n  margin: 0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:last-child a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-child(2) a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-last-child(2) a {\n  padding: 1.1rem 1.035rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:last-child a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-child(2) a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-last-child(2) a i {\n  position: absolute;\n  top: 0.55rem;\n  left: 0.4rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li.disabled a {\n  color: #757575;\n  background-color: #E0E0E0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled) a {\n  color: #2F8BE6;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled) a:hover {\n  background-color: #EEEEEE !important;\n  border-color: #E0E0E0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled).active a {\n  z-index: 3;\n  color: #fff;\n  background-color: #2F8BE6 !important;\n  border-color: #2F8BE6;\n  font-weight: inherit;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled):hover a {\n  background-color: #F5F5F5;\n  font-weight: inherit;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li a {\n  position: relative;\n  display: block;\n  padding: 1.1rem 0.75rem;\n  margin: 0 0 0 5px;\n  line-height: 0.1;\n  background-color: #F5F5F5;\n  border: 1px solid #E0E0E0;\n  border-radius: 0.35rem;\n  font-size: 15px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li a i {\n  padding: 0;\n}.ngx-datatable.bootstrap.core-bootstrap.header-height-50 .datatable-header {\n  height: 50px !important;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  line-height: 24px;\n}@media (max-width: 768px) {\n  .page-count {\n    display: none;\n  }\n\n  .datatable-pager {\n    text-align: center !important;\n    margin: 0 !important;\n  }\n}@media screen and (max-width: 800px) {\n  .desktop-hidden {\n    display: initial;\n  }\n\n  .mobile-hidden {\n    display: none;\n  }\n}@media screen and (min-width: 800px) {\n  .desktop-hidden {\n    display: none;\n  }\n\n  .mobile-hidden {\n    display: initial;\n  }\n}html body.layout-dark .datatable-footer .pager li.disabled a {\n  color: #626164;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-header {\n  background-color: #101010;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-body-row {\n  border-color: #474748;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer {\n  color: #B2B1B5;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li.disabled a,\nhtml body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li a {\n  background-color: #1E1E1E;\n  border-color: #474748;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):hover a {\n  background-color: #1E1E1E;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):not(.active) a:hover {\n  background-color: #1E1E1E !important;\n  border-color: #474748 !important;\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-header {\n  background-color: rgba(0, 0, 0, 0.12);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-body-row {\n  border-color: rgba(238, 238, 238, 0.2);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer {\n  color: #D6D5D8;\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li.disabled a,\nhtml body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li a {\n  background-color: rgba(0, 0, 0, 0.12);\n  border-color: rgba(0, 0, 0, 0.12);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled) a {\n  color: #D6D5D8;\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):hover a {\n  background-color: rgba(0, 0, 0, 0.12);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):not(.active) a:hover {\n  background-color: rgba(0, 0, 0, 0.12) !important;\n  border-color: rgba(0, 0, 0, 0.12) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvYm9vdHN0cmFwLnNjc3MiLCJkYXRhdGFibGVzLnNjc3MiLCIuLi9jb3JlL3ZhcmlhYmxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi9jb3JlL3ZhcmlhYmxlcy9hcHAtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLENDQWhCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFLEVBQUUsQ0FDSjtJQUNFLHdCQUF3QixFQUFFLENBQzVCOzs7SUFLRSxzQkFBc0IsRUFBRSxDQUMxQjtJQUNFLGdCQUFnQixFQUFFLENBQ3BCO0lBQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxnQkFBZ0I7SUFDaEIsaUNBQWlDLEVBQUUsQ0FDckM7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsdUJBQXVCLEVBQUUsQ0FDN0I7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQixFQUFFLENBQ3JCO1FBQ0UsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBRSxDQUMzQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDL0I7OztJQU9FLGFBQWE7SUFDYixtQkFBbUI7SUFJbkIsaUJBQWlCO0lBQ2pCLGNBQWMsRUFBRSxDQUNsQjs7SUFFRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBRSxDQUNwQjs7TUFFRSxhQUFhLEVBQUUsQ0FDbkI7O0lBRUUsVUFBVSxFQUFFLENBQ2Q7Ozs7SUFJRSxrQkFBa0IsRUFBRSxDQUN0QjtJQUNFLGNBQWM7SUFDZCxnQkFBZ0IsRUFBRSxDQUNsQjtNQUNFLG9CQUFvQjtNQUNwQiw0QkFBNEIsRUFBRSxDQUNoQztNQUNFLGtCQUFrQjtNQUNsQixxQkFBcUIsRUFBRSxDQUN2QjtRQUNFLGVBQWUsRUFBRSxDQUNuQjtRQUNFLFlBQVksRUFBRSxDQUNoQjtRQUNFLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLGVBQWUsRUFBRSxDQUNuQjs7UUFFRSxxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixNQUFNO1FBQ04sU0FBUztRQUNULFVBQVU7UUFDVixjQUFjO1FBQ2Qsa0JBQWtCLEVBQUUsQ0FDdEI7UUFDRSxpQkFBaUIsRUFBRSxDQUNyQjtRQUNFLG1CQUFtQixFQUFFLENBQ3ZCO1FBQ0UsbUJBQW1CLEVBQUUsQ0FDdkI7UUFDRSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVMsRUFBRSxDQUNYO1VBQ0UsUUFBUSxFQUFFLENBQ1o7VUFDRSxPQUFPLEVBQUUsQ0FDYjtRQUNFLGVBQWUsRUFBRSxDQUN2QjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYyxFQUFFLENBQ2hCO01BQ0UscUJBQXFCLEVBQUUsQ0FDekI7TUFDRSxrQkFBa0IsRUFBRSxDQUN0QjtNQUtFLGFBQWE7TUFPYixzQkFBc0IsRUFBRSxDQUMxQjtNQUNFLGFBQWEsRUFBRSxDQUNmO1FBS0UsYUFBYSxFQUFFLENBQ3JCO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjLEVBQUUsQ0FDaEI7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFdBQVcsRUFBRSxDQUNmO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYTtNQUNiLGlCQUFpQixFQUFFLENBQ25COztRQUVFLFVBQVU7UUFDVixTQUFTO1FBQ1QscUJBQXFCO1FBQ3JCLGdCQUFnQixFQUFFLENBQ3BCOztRQUVFLGFBQWEsRUFBRSxDQUNqQjtRQUNFLGVBQWU7UUFDZixxQkFBcUIsRUFBRSxDQUN6QjtRQUNFLG1CQUFtQixFQUFFLENDck03Qjs7Q0FBQSxDRkVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUFnQztFQUNoQzs0RkFDc0c7RUFDdEcsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQixDQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdDQUErQjtFQUEvQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQyxDQUVBOztFQUVFLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdDQUErQjtFQUEvQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQyxDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZCxDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDRXBHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0VGLENEREU7RUFDRSx3QkFBQTtBQ0dKLENERkk7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNJTixDREhNO0VBQ0UsaUJBQUE7QUNLUixDREFJO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQ0VOLENERE07RUFDRSxxQ0FBQTtBQ0dSLENERE07RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNHUixDRERNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDR1IsQ0RBSTtFQUdFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0FOLENER0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0RKLENERUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FOLENERUk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNBTixDREVRO0VBQ0UsZ0JBQUE7QUNBVixDREljO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0ZoQixDRFFNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNOUixDRFFNOzs7O0VBSUUsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05SLENEYU07RUFDRSxpQkFBQTtBQ1hSLENBM0VNO0VBQ0UsdUJBQUE7QUE4RVIsQ0EzRU07RUFDRSx5QkM4REU7QURlVixDQTNFUTtFQUNFLGdCQUFBO0FBNkVWLENBekVNO0VBQ0UscUJDc0VPO0FES2YsQ0F6RVE7RUFDRSx5QkFBQTtBQTJFVixDQXhFUTtFQUNFLHlCQ0RBO0FEMkVWLENBeEVVO0VBQ0Usc0JBQUE7QUEwRVosQ0FyRVU7RUFDRSxpQkFBQTtBQXVFWixDQW5FUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQXFFVixDQWhFTTtFQUNFLDZCQUFBO0VBQ0EsY0MwQks7QUR3Q2IsQ0EvRFU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQWlFWixDQS9EWTtFQUNFLFNBQUE7QUFpRWQsQ0EvRGM7RUFDRSxTQUFBO0FBaUVoQixDQTFEZ0I7RUFDRSx3QkFBQTtBQTREbEIsQ0ExRGtCO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQTREcEIsQ0F0RGdCO0VBQ0UsY0FBQTtFQUNBLHlCQ3NITztBRDlEekIsQ0FuRGdCO0VBQ0UsY0M5RFI7QURtSFYsQ0FuRGtCO0VBQ0Usb0NBQUE7RUFDQSxxQkNGTDtBRHVEZixDQWhEa0I7RUFDRSxVQUFBO0VBQ0EsV0N0R1o7RUR1R1ksb0NBQUE7RUFDQSxxQkMzRVY7RUQ0RVUsb0JBQUE7QUFrRHBCLENBOUNnQjtFQUNFLHlCQ3NGRjtFRHJGRSxvQkFBQTtBQWdEbEIsQ0E1Q2M7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkMyRUE7RUQxRUEseUJBQUE7RUFDQSxzQkM1QkE7RUQ2QkEsZUU3R0M7QUYySmpCLENBNUNnQjtFQUNFLFVBQUE7QUE4Q2xCLENBckNRO0VBQ0UsdUJBQUE7QUF1Q1YsQ0FoQ007Ozs7RUFJRSxpQkFBQTtBQWtDUixDQTNCQTtFQUNFO0lBQ0UsYUFBQTtFQThCRjs7RUEzQkE7SUFDRSw2QkFBQTtJQUNBLG9CQUFBO0VBOEJGO0FBQ0YsQ0EzQkE7RUFDRTtJQUNFLGdCQUFBO0VBNkJGOztFQTFCQTtJQUNFLGFBQUE7RUE2QkY7QUFDRixDQTFCQTtFQUNFO0lBQ0UsYUFBQTtFQTRCRjs7RUF6QkE7SUFDRSxnQkFBQTtFQTRCRjtBQUNGLENBdEJFO0VBQ0UsY0V0SWdCO0FGOEpwQixDQWxCTTtFQUNFLHlCRWxKUTtBRnNLaEIsQ0FqQk07RUFDRSxxQkVoSlU7QUZtS2xCLENBaEJNO0VBQ0UsY0V6SlE7QUYyS2hCLENBZFU7O0VBRUUseUJFOUpFO0VGK0pGLHFCRTNKTTtBRjJLbEIsQ0FaWTtFQUNFLHlCRXBLQTtBRmtMZCxDQVhZO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtBQWFkLENBRk07RUFDRSxxQ0VwS1c7QUZ3S25CLENBRE07RUFDRSxzQ0V6S1U7QUY0S2xCLENBQU07RUFDRSxjRWxMUTtBRm9MaEIsQ0FFVTs7RUFFRSxxQ0VsTE87RUZtTFAsaUNFbkxPO0FGbUxuQixDQUlZO0VBQ0UsY0U5TEU7QUY0TGhCLENBS1k7RUFDRSxxQ0U1TEs7QUZ5TG5CLENBTVk7RUFDRSxnREFBQTtFQUNBLDRDQUFBO0FBSmQiLCJmaWxlIjoiZGF0YXRhYmxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJztcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90Jyk7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgdXJsKCdmb250cy9kYXRhLXRhYmxlLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLnN2ZyNkYXRhLXRhYmxlJykgZm9ybWF0KCdzdmcnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5bZGF0YS1pY29uXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBjb250ZW50OiBhdHRyKGRhdGEtaWNvbik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbltjbGFzc149J2RhdGF0YWJsZS1pY29uLSddOjpiZWZvcmUsXG5bY2xhc3MqPScgZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmRhdGF0YWJsZS1pY29uLWZpbHRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjInO1xufVxuXG4uZGF0YXRhYmxlLWljb24tY29sbGFwc2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYxJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWV4cGFuZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tY2xvc2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY0Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXVwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb3duOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zb3J0LXVuc2V0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY3Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvbmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY4Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvbmUtYWxsOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zZWFyY2g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZhJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXBpbjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmInO1xufVxuXG4uZGF0YXRhYmxlLWljb24tYWRkOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2ZCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1sZWZ0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Zic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1yaWdodDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzAnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc2tpcDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcHJldjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzInO1xufVxuIiwiLm5neC1kYXRhdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgLyoqXG4gICAqIFZlcnRpY2FsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEhvcml6b250YWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgSGVhZGVyIEhlaWdodCBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIHJvdyBoZWlnaHQgYWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBTaGFyZWQgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogSGVhZGVyIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEJvZHkgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogRm9vdGVyIFN0eWxlc1xuICAgKi8gfVxuICAubmd4LWRhdGF0YWJsZSBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gIC5uZ3gtZGF0YXRhYmxlICosXG4gIC5uZ3gtZGF0YXRhYmxlICo6YmVmb3JlLFxuICAubmd4LWRhdGF0YWJsZSAqOmFmdGVyIHtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsIC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteTogYXV0bzsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwudmlydHVhbGl6ZWQgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtaG9yeiAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWdyb3VwLWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktcm93LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC13ZWJraXQtZmxleC1mbG93OiByb3c7XG4gICAgLW1vei1mbGV4LWZsb3c6IHJvdztcbiAgICAtbXMtZmxleC1mbG93OiByb3c7XG4gICAgLW8tZmxleC1mbG93OiByb3c7XG4gICAgZmxleC1mbG93OiByb3c7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGwsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMS42MjU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbDpmb2N1cyxcbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctbGVmdCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIHotaW5kZXg6IDk7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctbGVmdCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1ncm91cCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnNvcnRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5sb25ncHJlc3MgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5zb3J0LWJ0biB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUtLW5vdC1yZXNpemFibGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgY3Vyc29yOiBldy1yZXNpemU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwucmVzaXplYWJsZTpob3ZlciAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6aG92ZXIgLnJlc2l6ZS1oYW5kbGUtLW5vdC1yZXNpemFibGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlci5kcmFnRnJvbUxlZnQge1xuICAgICAgICAgIHJpZ2h0OiAwOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlci5kcmFnRnJvbVJpZ2h0IHtcbiAgICAgICAgICBsZWZ0OiAwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtdGVtcGxhdGUtd3JhcCB7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLWZvb3Rlci1pbm5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSA0MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgNjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDIwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDgwJTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlcixcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbiIsIi8qXG5ib290c3RyYXAgdGFibGUgdGhlbWVcbiovXG5cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMWQ0ZDc7XG4gICAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLWxhYmVsIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5kYXRhdGFibGUtYm9keSB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMWQ0ZDc7XG4gICAgICAmLmRhdGF0YWJsZS1yb3ctZXZlbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICB9XG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDgzZmY7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgfVxuICAgIH1cbiAgICAuZW1wdHktcm93IHtcbiAgICAgICRhbGVydC1wYWRkaW5nLXk6IDAuNzVyZW0gIWRlZmF1bHQ7XG4gICAgICAkYWxlcnQtcGFkZGluZy14OiAxLjI1cmVtICFkZWZhdWx0O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZzogJGFsZXJ0LXBhZGRpbmcteSAkYWxlcnQtcGFkZGluZy14O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbiAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICM0MjQyNDI7XG4gICAgY29sb3I6ICNlZGVkZWQ7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICAucGFnZS1jb3VudCB7XG4gICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHBhZGRpbmc6IDAgMS4ycmVtO1xuICAgIH1cbiAgICAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIHVsIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgJjpub3QoLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAmLmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1NDU0O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIG1hcmdpbjogMCAzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICBjb2xvcjogI2VkZWRlZDtcbiAgICAgIH1cbiAgICAgIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4gICAgICAuZGF0YXRhYmxlLWljb24tcmlnaHQsXG4gICAgICAuZGF0YXRhYmxlLWljb24tcHJldiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBTdW1tYXJ5IHJvdyBzdHlsZXNcbiAgLmRhdGF0YWJsZS1zdW1tYXJ5LXJvdyB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyc7XG5AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL2Jvb3RzdHJhcC5zY3NzJztcbkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzJztcbkBpbXBvcnQgXCIuLi9jb3JlL3ZhcmlhYmxlcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi9jb3JlL3ZhcmlhYmxlcy9hcHAtdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vY29yZS9jb2xvcnMvcGFsZXR0ZS12YXJpYWJsZXNcIjtcblxuLm5neC1kYXRhdGFibGUge1xuICAmLmJvb3RzdHJhcCB7XG4gICAgJi5jb3JlLWJvb3RzdHJhcCB7XG4gICAgICAmLmhlaWdodC03MC12aCB7XG4gICAgICAgIGhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xuXG4gICAgICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcblxuICAgICAgICAmLmRhdGF0YWJsZS1yb3ctZXZlbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcblxuICAgICAgICAgIGkge1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsLWxhYmVsIHtcbiAgICAgICAgICAuY2VsbC1saW5lLWhlaWdodCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICRib2R5LWNvbG9yO1xuXG4gICAgICAgIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgICAgIC5wYWdlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQgYSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCxcbiAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkLFxuICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSxcbiAgICAgICAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjFyZW0gMS4wMzVyZW07XG5cbiAgICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMC41NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMC40cmVtO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJGdyZXktY29sb3IsIGRhcmtlbi0xKTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWRpc2FibGVkLWJnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICY6bm90KC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICRwYWdpbmF0aW9uLWNvbG9yO1xuXG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24taG92ZXItYmcgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6aG92ZXIgYSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnaW5hdGlvbi1iZztcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjFyZW0gJHBhZ2luYXRpb24tcGFkZGluZy14O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgNXB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjE7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24tYmc7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAkcGFnaW5hdGlvbi1ib3JkZXItd2lkdGggc29saWQgJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1yb290O1xuXG4gICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmhlYWRlci1oZWlnaHQtNTAge1xuICAgICAgICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcblxuICAgICAgLmRhdGF0YWJsZS1pY29uLWxlZnQsXG4gICAgICAuZGF0YXRhYmxlLWljb24tc2tpcCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIG1lZGlhIHF1ZXJ5IGZvciBTbWFsbCAmIE1lZGl1bSBkZXZpY2VzXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2UtY291bnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZGVza3RvcC1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cblxuICAubW9iaWxlLWhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAuZGVza3RvcC1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLWhpZGRlbiB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgfVxufVxuXG5odG1sIGJvZHkubGF5b3V0LWRhcmsge1xuXG4gIC8vIGZvciBkYXJrIGFuZCB0cmFuc3BhcmVudCBsYXlvdXRzXG4gIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlciBsaS5kaXNhYmxlZCBhIHtcbiAgICBjb2xvcjogJGRsLWRpc2FibGVkLWNvbG9yO1xuICB9XG5cbiAgLy8gZm9yIGRhcmsgbGF5b3V0XG4gICY6bm90KC5sYXlvdXQtdHJhbnNwYXJlbnQpIHtcbiAgICAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xuICAgICAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3ItZGFyaztcbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGRsLWJvcmRlci1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgICAgICBjb2xvcjogJGRsLXRleHQtY29sb3I7XG5cbiAgICAgICAgLnBhZ2VyIGxpIHtcblxuICAgICAgICAgICYuZGlzYWJsZWQgYSxcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkbC1iZy1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGRsLWJvcmRlci1jb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOm5vdCguZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICY6aG92ZXIgYSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkbC1iZy1jb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpub3QoLmFjdGl2ZSkgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkbC1iZy1jb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRkbC1ib3JkZXItY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBmb3IgdHJhbnNwYXJlbnQgbGF5b3V0XG4gICYubGF5b3V0LXRyYW5zcGFyZW50IHtcbiAgICAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xuICAgICAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGwtY2FyZC1iZy1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRsLWJvcmRlci1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgICAgICBjb2xvcjogJHRsLXRleHQtY29sb3I7XG5cbiAgICAgICAgLnBhZ2VyIGxpIHtcblxuICAgICAgICAgICYuZGlzYWJsZWQgYSxcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0bC1jYXJkLWJnLWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGwtY2FyZC1iZy1jb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOm5vdCguZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBjb2xvcjogJHRsLXRleHQtY29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIgYSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0bC1jYXJkLWJnLWNvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm5vdCguYWN0aXZlKSBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRsLWNhcmQtYmctY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGwtY2FyZC1iZy1jb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRncmF5czogbWFwLW1lcmdlKFxuICAoXG4gICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXG4gICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXG4gICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcbiAgKSxcbiAgJGdyYXlzXG4pO1xuXG4kcHJpbWFyeTogIzJGOEJFNiAhZGVmYXVsdDtcbiRzdWNjZXNzOiAjNDBDMDU3ICFkZWZhdWx0O1xuJGluZm86ICMyRjhCRTYgIWRlZmF1bHQ7XG4kd2FybmluZzogIzdlNzc3MSAhZGVmYXVsdDtcbiRkYW5nZXI6ICNGNTUyNTIgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAjNjE2RDg5ICFkZWZhdWx0O1xuJGxpZ2h0OiAjREJERUU1ICFkZWZhdWx0O1xuJGRhcms6ICMxQTA1MUQgIWRlZmF1bHQ7XG5cbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcbiAgICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsXG4gICAgXCJpbmZvXCI6ICRpbmZvLFxuICAgIFwid2FybmluZ1wiOiAkd2FybmluZyxcbiAgICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICAgIFwic2Vjb25kYXJ5XCI6ICRzZWNvbmRhcnksXG4gICAgXCJsaWdodFwiOiAkbGlnaHQsXG4gICAgXCJkYXJrXCI6ICRkYXJrXG4gICksXG4gICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIFNwYWNpbmdcblxuJHNwYWNlcjogMS41cmVtO1xuJHNwYWNlcnM6IChcbiAgMDogMCxcbiAgMTogKFxuICAgICRzcGFjZXIgKiAwLjI1XG4gICksXG4gIDI6IChcbiAgICAkc3BhY2VyICogMC41XG4gICksXG4gIDM6ICRzcGFjZXIsXG4gIDQ6IChcbiAgICAkc3BhY2VyICogMS41XG4gICksXG4gIDU6IChcbiAgICAkc3BhY2VyICogM1xuICApXG4pICFkZWZhdWx0O1xuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuJGJvZHktYmc6ICNGN0Y3Rjg7XG4kYm9keS1jb2xvcjogIzM0MkU0OSAhZGVmYXVsdDtcblxuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkbGluay1jb2xvciwgNSUpICFkZWZhdWx0O1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZSAhZGVmYXVsdDtcblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGJvcmRlci1jb2xvcjogI0UwRTBFMCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXM6IDAuMzVyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogMC42cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206IDAuMjVyZW0gIWRlZmF1bHQ7XG5cblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIk1vbnRzZXJyYXRcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS4xICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAjMTcxMDJGICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiA5MCUgIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAjQkRCREJEICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1mb250LXNpemU6IDEuMXJlbSAhZGVmYXVsdDtcblxuJGhyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAxLjE1cmVtIDJyZW0gIWRlZmF1bHQ7XG4kdGFibGUtYWNjZW50LWJnOiByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAwLjM3NXJlbSAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tcGFkZGluZy15OiAwLjRyZW0gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogMS4yNXJlbSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6IDEuNXJlbSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIEZvcm1zXG5cbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAwLjJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogMS41ICFkZWZhdWx0O1xuJGlucHV0LWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XG4kaW5wdXQtY29sb3I6ICM3NTc4N2QgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAjRTBFMEUwICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogbm9uZSAhZGVmYXVsdDtcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0OiBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtfSArICN7JGlucHV0LXBhZGRpbmcteSAqIDJ9ICsgM3B4KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC13aWR0aDogMi42cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogMCAhZGVmYXVsdDtcblxuXG4vLyBaLWluZGV4IG1hc3RlciBsaXN0XG4vL1xuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XG4vLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXG5cblxuXG4vLyBOYXZzXG5cbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogIzlFOUU5RSAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4kZHJvcGRvd24tcGFkZGluZy15OiAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6IDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDEwcHggIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDIwcHggIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogaW5oZXJpdCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkYm9keS1iZyAhZGVmYXVsdDtcbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLWJnOiAjRjVGNUY1ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAjRUVFRUVFICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICM3NTc1NzUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogI0UwRTBFMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbi8vIENhcmRzXG5cbiRjYXJkLXNwYWNlci15OiAxLjVyZW07XG4kY2FyZC1zcGFjZXIteDogMS41cmVtO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xuJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbi8vIFBvcG92ZXJzXG5cbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWJnOiAkYm9keS1iZyAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6IDAuNnJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vIFRvYXN0c1xuXG4kdG9hc3QtcGFkZGluZy15OiAwLjQ1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0b2FzdC1ib3gtc2hhZG93OiAtOHB4IDhweCAxNHB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4vLyBCYWRnZXNcblxuJGJhZGdlLWZvbnQtc2l6ZTogODUlICFkZWZhdWx0O1xuJGJhZGdlLWZvbnQtd2VpZ2h0OiA1MDAgIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy15OiAwLjRyZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAwLjY2NjY2NjY2N3JlbSAhZGVmYXVsdDtcblxuLy8gTW9kYWxzXG5cbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXk6IDAuOTVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtcGFkZGluZy14OiAxLjQ1cmVtICFkZWZhdWx0O1xuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6IDAuOHJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAxcmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLWJnOiAjZWVlICFkZWZhdWx0O1xuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAkYm9keS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAjNzU3NTc1ICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiBpbmhlcml0ICFkZWZhdWx0O1xuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbiR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vIENvZGVcblxuJGNvZGUtZm9udC1zaXplOiA5MCUgIWRlZmF1bHQ7XG4kY29kZS1jb2xvcjogJGRhbmdlciAhZGVmYXVsdDtcblxuLy8gVXRpbGl0aWVzXG5cbiRvdmVyZmxvd3M6IGF1dG8sIGhpZGRlbiwgdmlzaWJsZSwgc2Nyb2xsICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbi8vIHZlcnRpY2FsIG1lbnVcbiRtZW51LWV4cGFuZGVkLXdpZHRoLXNtOiAyMjBweDtcbiRtZW51LWV4cGFuZGVkLXdpZHRoOiAyNTBweDtcbiRtZW51LWV4cGFuZGVkLXdpZHRoLWxnOiAyODBweDtcbiRtZW51LWNvbGxhcHNlZC13aWR0aDogNjBweDtcblxuLy8gSG9yaXpvbnRhbCBNZW51XG4kbWVudS1hY3RpdmUtYmc6ICNFN0U5RUM7XG5cbiRmb250LXNpemUtcm9vdDogMTVweDtcblxuLy8gQXZhdGFyXG4kYXZhdGFyLWJnOiAjRTBFMEUwO1xuJGF2YXRhci10ZXh0LWNvbG9yOiAjNjE2MTYxO1xuJGF2YXRhci1zaXplOiAzMnB4O1xuJGF2YXRhci1zaXplLXhsOiA3MHB4O1xuJGF2YXRhci1zaXplLWxnOiA1MHB4O1xuJGF2YXRhci1zaXplLW1kOiA0MHB4O1xuJGF2YXRhci1zaXplLXNtOiAyNHB4O1xuJGF2YXRhci1zdGF0dXMtc2l6ZTogMTFweDtcbiRhdmF0YXItc3RhdHVzLXNpemUtbGc6IDE3cHg7XG5cbi8vIFNoYWRvd3NcbiRzaGFkb3ctdW1icmEtb3BhY2l0eTogMC4yICFkZWZhdWx0O1xuJHNoYWRvdy1wZW51bWJyYS1vcGFjaXR5OiAwLjE0ICFkZWZhdWx0O1xuJHNoYWRvdy1hbWJpZW50LW9wYWNpdHk6IDAuMTIgIWRlZmF1bHQ7XG5cbi8vdmFyaWFibGVzIGZvciBzb2NpYWxcbiRzb2NpYWwtZmFjZWJvb2s6ICMzYjU5OTg7XG4kc29jaWFsLXR3aXR0ZXI6ICM1NWFjZWU7XG4kc29jaWFsLXBpbnRlcmVzdDogI2NjMjEyNztcbiRzb2NpYWwtZ29vZ2xlOiAjZGQ0YjM5O1xuJHNvY2lhbC1saW5rZWRpbjogIzA5NzZiNDtcbiRzb2NpYWwtZHJpYmJibGU6ICNlYTRjODk7XG4kc29jaWFsLWdpdGh1YjogIzMzMzMzMztcbiRzb2NpYWwteW91dHViZTogI2U1MmQyNztcbiRzb2NpYWwtaW5zdGFncmFtOiAjMTI1Njg4O1xuJHNvY2lhbC1yZWRkaXQ6ICNmZjQ1MDA7XG4kc29jaWFsLXR1bWJscjogIzM1NDY1YztcbiRzb2NpYWwtYmVoYW5jZTogIzE3NjlmZjtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gVmFyaWFibGVzIGZvciBEYXJrIExheW91dFxuJGRhcmstc3R5bGU6IHRydWU7XG4kYmctY29sb3ItZGFyazogIzEwMTAxMDtcbiRkbC10ZXh0LWNvbG9yOiAjQjJCMUI1O1xuJGRsLWJnLWNvbG9yOiAjMUUxRTFFO1xuJGRsLWhlYWRpbmdzLWNvbG9yOiAjQkZCRUMyO1xuJGRsLXRleHQtbXV0ZWQtY29sb3I6ICM4NDg0ODQ7XG4kZGwtZGlzYWJsZWQtY29sb3I6ICM2MjYxNjQ7XG4kZGwtYm9yZGVyLWNvbG9yOiAjNDc0NzQ4O1xuJGRsLWNhcmQtc2hhZG93OiAtOHB4IDhweCAxNHB4IDAgcmdiYSgkYmxhY2ssIDAuMjUpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFZhcmlhYmxlcyBGb3IgVHJhbnNwYXJlbnQgTGF5b3V0XG5cbiR0bC10ZXh0LWNvbG9yOiAjRDZENUQ4O1xuJHRsLWhlYWRpbmdzLWNvbG9yOiAjRTlFOUVBO1xuJHRsLWJnLWNvbG9yOiB0cmFuc3BhcmVudDtcbiR0bC10ZXh0LW11dGVkLWNvbG9yOiAjQzNDMkM1O1xuJHRsLWRpc2FibGVkLWNvbG9yOiAjOUU5RTlFO1xuJHRsLWJvcmRlci1jb2xvcjogcmdiYSgjZWVlLCAwLjIpO1xuJHRsLWNhcmQtYmctY29sb3I6IHJnYmEoJGJsYWNrLCAwLjEyKTtcblxuJGJnLWdsYXNzLWhpYmlzY3VzOiBsaW5lYXItZ3JhZGllbnQoXG4gIHRvIHJpZ2h0IGJvdHRvbSxcbiAgI2YwNWY1NyxcbiAgI2M4M2Q1YyxcbiAgIzk5MjQ1YSxcbiAgIzY3MTM1MSxcbiAgIzM2MDk0MFxuKTtcbiRiZy1nbGFzcy1wdXJwbGUtcGl6emF6ejogbGluZWFyLWdyYWRpZW50KFxuICB0byByaWdodCBib3R0b20sXG4gICM2NjJkODYsXG4gICM4YjJhOGEsXG4gICNhZTIzODksXG4gICNjZjFkODMsXG4gICNlZDFlNzlcbik7XG4kYmctZ2xhc3MtYmx1ZS1sYWdvb246IGxpbmVhci1ncmFkaWVudChcbiAgdG8gcmlnaHQgYm90dG9tLFxuICAjMTQ0ZTY4LFxuICAjMDA2ZDgzLFxuICAjMDA4ZDkyLFxuICAjMDBhZDkxLFxuICAjNTdjYTg1XG4pO1xuJGJnLWdsYXNzLWVsZWN0cmljLXZpb2xldDogbGluZWFyLWdyYWRpZW50KFxuICB0byBsZWZ0IHRvcCxcbiAgIzRhMDBlMCxcbiAgIzYwMGRlMCxcbiAgIzcxMTllMSxcbiAgIzgwMjNlMSxcbiAgIzhlMmRlMlxuKTtcbiRiZy1nbGFzcy1wb3J0YWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gIHRvIGxlZnQgdG9wLFxuICAjOTdhYmZmLFxuICAjNzk4Y2U1LFxuICAjNWI2ZWNiLFxuICAjM2I1MWIxLFxuICAjMTIzNTk3XG4pO1xuJGJnLWdsYXNzLXR1bmRvcmE6IGxpbmVhci1ncmFkaWVudChcbiAgdG8gbGVmdCB0b3AsXG4gICNlZjQ2NzMsXG4gICNmZmM4NDZcbik7XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 7126:
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var app_core_service_guard_permission_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/service/guard/permission.guard */ 90368);
/* harmony import */ var _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-dashboard/main-dashboard.component */ 53619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 91477);





const routes = [
    {
        path: '',
        component: _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.MainDashboardComponent,
        canActivate: [app_core_service_guard_permission_guard__WEBPACK_IMPORTED_MODULE_0__.PermissionGuard],
        data: {
            title: 'Dashboard',
            permissionS: "ALLOW-ALL"
        }
    },
    // {
    //   path: ':id',
    //   component: MainDashboardComponent,
    //   data: {
    //     title: 'Dashboard'
    //   }
    // },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 6957:
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/chartjs */ 26311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var app_modules_dashboard_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/dashboard/_services/dashboard.service */ 77555);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 59298);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var app_core_service_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/service/common/common.service */ 52743);
/* harmony import */ var app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/service/auth/auth.service */ 67083);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 95684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-daterangepicker-material */ 80596);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ 57361);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 48896);













const _c0 = ["dateInput"];
function DashboardComponent_ng_template_12_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 40);
} }
function DashboardComponent_ng_template_12_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 40);
} }
function DashboardComponent_ng_template_12_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r8.accountdata.channels, " ");
} }
function DashboardComponent_ng_template_12_i_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 40);
} }
function DashboardComponent_ng_template_12_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r10.accountdata.creators, " ");
} }
function DashboardComponent_ng_template_12_i_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 40);
} }
function DashboardComponent_ng_template_12_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r12.accountdata.rights_holders, " ");
} }
function DashboardComponent_ng_template_12_i_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 40);
} }
function DashboardComponent_ng_template_12_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r14.accountdata.artists, " ");
} }
function DashboardComponent_ng_template_12_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Channels");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_12_span_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Creators");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_12_span_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Rights Holder");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_12_span_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Speakers");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_12_ng_container_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" - (", ctx_r19.filters.startDate, " To ", ctx_r19.filters.endDate, ")");
} }
const _c1 = function () { return { standalone: true }; };
function DashboardComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "fieldset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_12_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.daterangefilter = $event; })("change", function DashboardComponent_ng_template_12_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.getByDate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DashboardComponent_ng_template_12_i_4_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_ng_template_12_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r23.changecard("channel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, DashboardComponent_ng_template_12_i_14_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, DashboardComponent_ng_template_12_ng_container_15_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Channels");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_ng_template_12_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r24.changecard("creators"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, DashboardComponent_ng_template_12_i_27_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, DashboardComponent_ng_template_12_ng_container_28_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Creators");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_ng_template_12_Template_div_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r25.changecard("rights_holder"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, DashboardComponent_ng_template_12_i_40_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, DashboardComponent_ng_template_12_ng_container_41_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Rights Holders");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_ng_template_12_Template_div_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r26.changecard("artist"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, DashboardComponent_ng_template_12_i_53_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, DashboardComponent_ng_template_12_ng_container_54_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Speakers");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, DashboardComponent_ng_template_12_span_64_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, DashboardComponent_ng_template_12_span_65_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, DashboardComponent_ng_template_12_span_66_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, DashboardComponent_ng_template_12_span_67_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, DashboardComponent_ng_template_12_ng_container_68_Template, 2, 2, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "canvas", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.daterangefilter)("showCustomRangeLabel", true)("alwaysShowCalendars", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](38, _c1))("ranges", ctx_r1.ranges)("linkedCalendars", true)("isInvalidDate", ctx_r1.isInvalidDate)("showClearButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 36, ctx_r1.isLoadingtable$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("card-active", ctx_r1.filter_chart_data_var == "channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.accountdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.accountdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("card-active", ctx_r1.filter_chart_data_var == "creators");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.accountdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.accountdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("card-active", ctx_r1.filter_chart_data_var == "rights_holder");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.accountdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.accountdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("card-active", ctx_r1.filter_chart_data_var == "artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.accountdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.accountdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.filter_chart_data_var == "channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.filter_chart_data_var == "creators");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.filter_chart_data_var == "rights_holder");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.filter_chart_data_var == "artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.filters.startDate && ctx_r1.filters.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("datasets", ctx_r1.lineChartDataForRoyalties)("labels", ctx_r1.lineChartLabelsForRoyalties)("options", ctx_r1.lineChartOptionsForRoyalties)("colors", ctx_r1.lineChartColorsForRoyalties)("legend", ctx_r1.lineChartLegend)("chartType", ctx_r1.lineChartType);
} }
function DashboardComponent_ng_template_17_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 40);
} }
function DashboardComponent_ng_template_17_i_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 40);
} }
function DashboardComponent_ng_template_17_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r29.contentdata.youtube_video, " ");
} }
function DashboardComponent_ng_template_17_i_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 40);
} }
function DashboardComponent_ng_template_17_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r31.contentdata.clips, " ");
} }
function DashboardComponent_ng_template_17_i_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 40);
} }
function DashboardComponent_ng_template_17_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r33.contentdata.contract, " ");
} }
function DashboardComponent_ng_template_17_i_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 40);
} }
function DashboardComponent_ng_template_17_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r35.contentdata.contract_assigned, " ");
} }
function DashboardComponent_ng_template_17_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Youtube Video");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_17_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Audio Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_17_span_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Contract Agreements");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_17_span_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Contract Assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_17_ng_container_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" - (", ctx_r40.filters.startDate, " To ", ctx_r40.filters.endDate, ")");
} }
function DashboardComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "fieldset", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_17_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r41.daterangefilter = $event; })("change", function DashboardComponent_ng_template_17_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r43.getByDate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DashboardComponent_ng_template_17_i_3_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_ng_template_17_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r44.changecard("youtube_video"); return ctx_r44.getGraphdataContent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, DashboardComponent_ng_template_17_i_13_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, DashboardComponent_ng_template_17_ng_container_14_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "YouTube Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_ng_template_17_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r45.changecard("clips"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, DashboardComponent_ng_template_17_i_26_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, DashboardComponent_ng_template_17_ng_container_27_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Audios Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_ng_template_17_Template_div_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r46.changecard("contract"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, DashboardComponent_ng_template_17_i_39_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, DashboardComponent_ng_template_17_ng_container_40_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Creator Agreements");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_ng_template_17_Template_div_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r47.changecard("contract_assigned"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, DashboardComponent_ng_template_17_i_52_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, DashboardComponent_ng_template_17_ng_container_53_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Contracts Assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, DashboardComponent_ng_template_17_span_63_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, DashboardComponent_ng_template_17_span_64_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, DashboardComponent_ng_template_17_span_65_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, DashboardComponent_ng_template_17_span_66_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, DashboardComponent_ng_template_17_ng_container_67_Template, 2, 2, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "canvas", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r2.filterGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.daterangefilter)("showCustomRangeLabel", true)("alwaysShowCalendars", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](39, _c1))("ranges", ctx_r2.ranges)("linkedCalendars", true)("isInvalidDate", ctx_r2.isInvalidDate)("showClearButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 37, ctx_r2.isLoadingtable$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("card-active", ctx_r2.filter_chart_data_var == "youtube_video");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.contentdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.contentdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("card-active", ctx_r2.filter_chart_data_var == "clips");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.contentdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.contentdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("card-active", ctx_r2.filter_chart_data_var == "contract");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.contentdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.contentdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("card-active", ctx_r2.filter_chart_data_var == "contract_assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.contentdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.contentdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.filter_chart_data_var == "youtube_video");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.filter_chart_data_var == "clips");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.filter_chart_data_var == "contract");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.filter_chart_data_var == "contract_assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.filters.startDate && ctx_r2.filters.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("datasets", ctx_r2.lineChartDataForContent)("labels", ctx_r2.lineChartLabelsForContent)("options", ctx_r2.lineChartOptionsForRoyalties)("colors", ctx_r2.lineChartColorsForContent)("legend", ctx_r2.lineChartLegend)("chartType", ctx_r2.lineChartType);
} }
function DashboardComponent_li_18_ng_template_4_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 40);
} }
function DashboardComponent_li_18_ng_template_4_i_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 40);
} }
function DashboardComponent_li_18_ng_template_4_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r51.revenuedata.rights_holder_earning, "1.0-2"), " ");
} }
function DashboardComponent_li_18_ng_template_4_i_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 40);
} }
function DashboardComponent_li_18_ng_template_4_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r53.revenuedata.creator_earning, "1.0-2"), " ");
} }
function DashboardComponent_li_18_ng_template_4_i_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 40);
} }
function DashboardComponent_li_18_ng_template_4_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r55.revenuedata.mindset_earning, "1.0-2"), " ");
} }
function DashboardComponent_li_18_ng_template_4_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Revenue - ", ctx_r56.filters.startDate, " To ", ctx_r56.filters.endDate, "");
} }
function DashboardComponent_li_18_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "fieldset", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DashboardComponent_li_18_ng_template_4_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r57.daterangefilter = $event; })("change", function DashboardComponent_li_18_ng_template_4_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r59.getByDate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DashboardComponent_li_18_ng_template_4_i_3_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, DashboardComponent_li_18_ng_template_4_i_13_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, DashboardComponent_li_18_ng_template_4_ng_container_14_Template, 3, 4, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Rights Holder Revenue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, DashboardComponent_li_18_ng_template_4_i_26_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, DashboardComponent_li_18_ng_template_4_ng_container_27_Template, 3, 4, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Creator Revenue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, DashboardComponent_li_18_ng_template_4_i_39_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, DashboardComponent_li_18_ng_template_4_ng_container_40_Template, 3, 4, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Mindset Revenue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, DashboardComponent_li_18_ng_template_4_ng_container_50_Template, 2, 2, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "canvas", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r48.filterGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r48.daterangefilter)("showCustomRangeLabel", true)("alwaysShowCalendars", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](25, _c1))("ranges", ctx_r48.ranges)("linkedCalendars", true)("isInvalidDate", ctx_r48.isInvalidDate)("showClearButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 23, ctx_r48.isLoadingtable$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r48.revenuedata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r48.revenuedata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r48.revenuedata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r48.revenuedata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r48.revenuedata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r48.revenuedata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r48.filters.startDate && ctx_r48.filters.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("datasets", ctx_r48.lineChartDataForAll)("labels", ctx_r48.lineChartLabelsForAll)("options", ctx_r48.lineChartOptionsForRoyalties)("colors", ctx_r48.lineChartColorsForAll)("legend", ctx_r48.lineChartLegend)("chartType", ctx_r48.lineChartType);
} }
function DashboardComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_li_18_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r60.changetab("revenue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Revenue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DashboardComponent_li_18_ng_template_4_Template, 55, 26, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavItem", 3);
} }
function DashboardComponent_ng_template_23_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 56);
} }
function DashboardComponent_ng_template_23_ng_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", channel_r65._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", channel_r65.channel_title, " ");
} }
function DashboardComponent_ng_template_23_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Analytics - ", ctx_r64.filters.startDate, " To ", ctx_r64.filters.endDate, "");
} }
function DashboardComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "fieldset", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_23_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r66.daterangefilter = $event; })("change", function DashboardComponent_ng_template_23_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r68.getByDate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DashboardComponent_ng_template_23_i_3_Template, 1, 0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ng-select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Select Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DashboardComponent_ng_template_23_ng_option_8_Template, 2, 2, "ng-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, DashboardComponent_ng_template_23_ng_container_14_Template, 2, 2, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "canvas", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r4.filterGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r4.daterangefilter)("showCustomRangeLabel", true)("alwaysShowCalendars", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](20, _c1))("ranges", ctx_r4.ranges)("linkedCalendars", true)("isInvalidDate", ctx_r4.isInvalidDate)("showClearButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 18, ctx_r4.isLoadingtable$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.channels);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.filters.startDate && ctx_r4.filters.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("datasets", ctx_r4.lineChartDataForAnalysis)("labels", ctx_r4.lineChartLabelsForAnalysis)("options", ctx_r4.lineChartOptionsForAnalyticsChart)("colors", ctx_r4.lineChartColorsForAnalysis)("legend", ctx_r4.lineChartLegend)("chartType", ctx_r4.lineChartType);
} }
class DashboardComponent {
    constructor(dashboardservice, cd, fb, route, commonService, authService) {
        this.dashboardservice = dashboardservice;
        this.cd = cd;
        this.fb = fb;
        this.route = route;
        this.commonService = commonService;
        this.authService = authService;
        // lineChart
        this.lineChartDataForRoyalties = [{ label: "" }];
        this.lineChartLabelsForRoyalties = [];
        this.lineChartOptionsForRoyalties = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartOptionsForAccChannel;
        this.lineChartOptionsForAnalyticsChart = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartOptionsForAnalyticsChart;
        this.lineChartColorsForRoyalties = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartColorsForAccChannel;
        this.lineChartLegend = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartLegend;
        this.lineChartType = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartType;
        this.lineChartDataForContent = [{ label: "" }];
        this.lineChartDataForAll = [{ label: "" }];
        this.lineChartDataForAnalysis = [{ label: "" }];
        this.lineChartLabelsForContent = [];
        this.lineChartLabelsForAll = [];
        this.lineChartLabelsForAnalysis = [];
        this.lineChartColorsForContent = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartColorsForContent;
        this.lineChartColorsForAll = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartColorsForAll;
        this.lineChartColorsForAnalysis = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartColorsForAnalysis;
        this.subscriptions = [];
        this.rows = [];
        this.channels = [];
        this.creators = [];
        this.right_holders = [];
        // ngbNav's active parameter
        this.activeTab = 1;
        this.filters = {
            startDate: "",
            endDate: "",
        };
        this.startDateformonth = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_0__().startOf("month"),
            endDate: moment__WEBPACK_IMPORTED_MODULE_0__().endOf("month"),
        };
        this.daterangefilter = {};
        this.ranges = {
            Today: [moment__WEBPACK_IMPORTED_MODULE_0__(), moment__WEBPACK_IMPORTED_MODULE_0__()],
            "Last 1 Week": [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(6, "days"), moment__WEBPACK_IMPORTED_MODULE_0__()],
            Yesterday: [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, "days"), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, "days")],
            "Last 28 Days": [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(27, "days"), moment__WEBPACK_IMPORTED_MODULE_0__()],
            "Last 90 Days": [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(89, "days"), moment__WEBPACK_IMPORTED_MODULE_0__()],
            "Last 365 Days": [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(364, "days"), moment__WEBPACK_IMPORTED_MODULE_0__()],
            // 'This Month': [moment().startOf('month'), moment().endOf('month')],
            // 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        };
        this.invalidDates = [
            moment__WEBPACK_IMPORTED_MODULE_0__().add(2, "days"),
            moment__WEBPACK_IMPORTED_MODULE_0__().add(3, "days"),
            moment__WEBPACK_IMPORTED_MODULE_0__().add(5, "days"),
        ];
        this.isInvalidDate = (m) => {
            return this.invalidDates.some((d) => d.isSame(m, "day"));
        };
        this.initDate = true;
        this.isLoadingtable$ = this.dashboardservice.isLoadingtable$;
        this.alwaysShowCalendars = true;
    }
    ngOnInit() {
        this.filter_chart_data_var = "channel";
        this.currenttab = "account";
        this.filterForm(null);
        // this.daterangefilter = this.startDateformonth;
        this.initDateRangeFilter();
        if (history.state.isAnalyticsTab) {
            this.changetab("analysis");
            this.activeTab = 4;
        }
        else {
            // this.loaddata();
        }
    }
    initDateRangeFilter() {
        this.daterangefilter.startDate = moment__WEBPACK_IMPORTED_MODULE_0__().subtract(27, "days");
        this.daterangefilter.endDate = moment__WEBPACK_IMPORTED_MODULE_0__();
    }
    getchannellist() {
        this.commonService.getallchannel({ search: "" }).subscribe((data) => {
            if (data.result) {
                this.channels = data.result;
                const channelId = history.state.id;
                this.filterForm(channelId);
                this.getGraphdataAnalysis();
            }
            this.cd.markForCheck();
        }, (err) => { });
    }
    loaddata() {
        if (this.currenttab == "account") {
            this.getaccountcount();
        }
        if (this.currenttab == "content") {
            this.getcontentcount();
        }
        if (this.currenttab == "revenue") {
            this.getrevenuecount();
        }
        if (this.currenttab == "analysis") {
            // No need to call any count method as there are no cards
        }
        this.graphload();
    }
    graphload() {
        if (this.currenttab == "account") {
            this.getGraphdataAccount();
        }
        if (this.currenttab == "content") {
            this.getGraphdataContent();
        }
        if (this.currenttab == "revenue") {
            this.getGraphdataRevenue();
        }
        if (this.currenttab == "analysis") {
            this.getGraphdataAnalysis();
        }
    }
    reset_chart_data() {
        this.lineChartDataForRoyalties = [{ label: "" }];
        this.lineChartLabelsForRoyalties = [];
        this.lineChartDataForContent = [{ label: "" }];
        this.lineChartDataForAll = [{ label: "" }];
        this.lineChartDataForAnalysis = [{ label: "" }];
        this.lineChartLabelsForContent = [];
        this.lineChartLabelsForAll = [];
        this.lineChartLabelsForAnalysis = [];
    }
    changetab(tabtype) {
        this.initDate = true;
        this.reset_chart_data();
        if (tabtype == "account") {
            this.filter_chart_data_var = "channel";
        }
        if (tabtype == "content") {
            this.filter_chart_data_var = "youtube_video";
        }
        if (tabtype == "revenue") {
            this.filter_chart_data_var = "All";
        }
        if (tabtype == "analysis") {
            this.filter_chart_data_var = "analysis";
            this.currenttab = tabtype;
            this.getchannellist();
            return;
        }
        this.currenttab = tabtype;
        // this.loaddata();
        // No need as getByDate will be called already
    }
    getByDate(event) {
        if (event.startDate && event.endDate) {
            this.filters["startDate"] = moment__WEBPACK_IMPORTED_MODULE_0__(event.startDate._d).format("YYYY-MM-DD");
            this.filters["endDate"] = moment__WEBPACK_IMPORTED_MODULE_0__(event.endDate._d).format("YYYY-MM-DD");
        }
        else {
            if (this.initDate) {
                this.initDateRangeFilter();
                this.filters["startDate"] = moment__WEBPACK_IMPORTED_MODULE_0__(this.daterangefilter.startDate).format("YYYY-MM-DD");
                this.filters["endDate"] = moment__WEBPACK_IMPORTED_MODULE_0__(this.daterangefilter.endDate).format("YYYY-MM-DD");
                this.initDate = false;
                // return;
            }
            else {
                this.filters["startDate"] = this.filters["endDate"] = null;
            }
        }
        this.loaddata();
    }
    filterForm(channelId) {
        this.filterGroup = this.fb.group({
            channel: [channelId !== null && channelId !== void 0 ? channelId : null],
        });
        this.subscriptions.push(this.filterGroup.controls.channel.valueChanges.subscribe(() => {
            this.getGraphdataAnalysis();
        }));
    }
    getaccountcount() {
        var _a, _b;
        const params = {
            startDate: (_a = this.filters["startDate"]) !== null && _a !== void 0 ? _a : "",
            endDate: (_b = this.filters["endDate"]) !== null && _b !== void 0 ? _b : "",
        };
        this.dashboardservice.getaccountdata(params).subscribe((data) => {
            this.cd.markForCheck();
            if (data.result) {
                this.accountdata = data.result;
            }
        });
    }
    getcontentcount() {
        var _a, _b;
        const params = {
            startDate: (_a = this.filters["startDate"]) !== null && _a !== void 0 ? _a : "",
            endDate: (_b = this.filters["endDate"]) !== null && _b !== void 0 ? _b : "",
        };
        this.dashboardservice.getcontentdata(params).subscribe((data) => {
            this.cd.markForCheck();
            if (data.result) {
                this.contentdata = data.result;
            }
        });
    }
    getrevenuecount() {
        var _a, _b;
        const params = {
            startDate: (_a = this.filters["startDate"]) !== null && _a !== void 0 ? _a : "",
            endDate: (_b = this.filters["endDate"]) !== null && _b !== void 0 ? _b : "",
        };
        this.dashboardservice.getrevenuedata(params).subscribe((data) => {
            this.cd.markForCheck();
            if (data.result) {
                this.revenuedata = data.result;
            }
        });
    }
    getGraphdataAccount() {
        var _a, _b;
        const params = {
            startDate: (_a = this.filters["startDate"]) !== null && _a !== void 0 ? _a : "",
            endDate: (_b = this.filters["endDate"]) !== null && _b !== void 0 ? _b : "",
        };
        this.dashboardservice.getallDataGraphAccount(params).subscribe((data) => {
            this.cd.markForCheck();
            if (data.result) {
                this.graphData = data.result;
                this.changecard(this.filter_chart_data_var);
            }
        }, (err) => { });
    }
    getGraphdataContent() {
        var _a, _b;
        const params = {
            startDate: (_a = this.filters["startDate"]) !== null && _a !== void 0 ? _a : "",
            endDate: (_b = this.filters["endDate"]) !== null && _b !== void 0 ? _b : "",
        };
        this.dashboardservice.getallDataGraphContent(params).subscribe((data) => {
            this.cd.markForCheck();
            if (data.result) {
                this.graphDataContent = data.result;
                this.changecard(this.filter_chart_data_var);
            }
        }, (err) => { });
    }
    getGraphdataRevenue() {
        var _a, _b;
        const params = {
            startDate: (_a = this.filters["startDate"]) !== null && _a !== void 0 ? _a : "",
            endDate: (_b = this.filters["endDate"]) !== null && _b !== void 0 ? _b : "",
        };
        this.dashboardservice.getallDataGraphRevenue(params).subscribe((data) => {
            this.cd.markForCheck();
            if (data.result) {
                this.graphDataRevenue = data.result;
                this.changecard(this.filter_chart_data_var);
            }
        }, (err) => { });
    }
    getGraphdataAnalysis() {
        var _a, _b;
        const params = {
            startDate: (_a = this.filters["startDate"]) !== null && _a !== void 0 ? _a : "",
            endDate: (_b = this.filters["endDate"]) !== null && _b !== void 0 ? _b : "",
        };
        const channels = this.filterGroup.get("channel").value;
        if (channels) {
            params["channel"] = channels;
        }
        this.dashboardservice.getDashboardCreatorGraph(params).subscribe((data) => {
            if (data.result) {
                this.graphDataAnalysis = data.result;
                this.changecard(this.filter_chart_data_var);
            }
            this.cd.markForCheck();
        }, (err) => { });
    }
    changecard(chart_type) {
        this.filter_chart_data_var = chart_type;
        if (chart_type === "channel") {
            var chart_channel_count = [];
            this.graphData.channel.forEach((item) => {
                chart_channel_count.push(item.count.toFixed(2));
            });
            var chart_channel_dates = [];
            this.graphData.channel.forEach((item) => {
                chart_channel_dates.push(item._id);
            });
            var graph_data = [{ data: chart_channel_count, label: "Channels" }];
            this.lineChartDataForRoyalties = graph_data;
            this.lineChartLabelsForRoyalties = chart_channel_dates;
            this.lineChartColorsForRoyalties =
                _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartColorsForAccChannel;
        }
        if (chart_type === "creators") {
            var chart_creator_count = [];
            this.graphData.creator.forEach((item) => {
                chart_creator_count.push(item.count.toFixed(2));
            });
            var chart_creator_dates = [];
            this.graphData.creator.forEach((item) => {
                chart_creator_dates.push(item._id);
            });
            var graph_data = [{ data: chart_creator_count, label: "Creators" }];
            this.lineChartDataForRoyalties = graph_data;
            this.lineChartLabelsForRoyalties = chart_creator_dates;
            this.lineChartColorsForRoyalties =
                _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartColorsForAccCreator;
        }
        if (chart_type === "rights_holder") {
            var chart_rights_holder_count = [];
            this.graphData.rights_holder.forEach((item) => {
                chart_rights_holder_count.push(item.count.toFixed(2));
            });
            var chart_rights_holder_dates = [];
            this.graphData.rights_holder.forEach((item) => {
                chart_rights_holder_dates.push(item._id);
            });
            var graph_data = [
                { data: chart_rights_holder_count, label: "Rights Holder" },
            ];
            this.lineChartDataForRoyalties = graph_data;
            this.lineChartLabelsForRoyalties = chart_rights_holder_dates;
            this.lineChartColorsForRoyalties =
                _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartColorsForAccRightsHolder;
        }
        if (chart_type === "artist") {
            var chart_artist_count = [];
            this.graphData.artist.forEach((item) => {
                chart_artist_count.push(item.count.toFixed(2));
            });
            var chart_artist_dates = [];
            this.graphData.artist.forEach((item) => {
                chart_artist_dates.push(item._id);
            });
            var graph_data = [{ data: chart_artist_count, label: "Speakers" }];
            this.lineChartDataForRoyalties = graph_data;
            this.lineChartLabelsForRoyalties = chart_artist_dates;
            this.lineChartColorsForRoyalties = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartColorsForAccArtist;
        }
        if (chart_type === "youtube_video") {
            var chart_youtube_count = [];
            this.graphDataContent.youtube_video.forEach((item) => {
                chart_youtube_count.push(item.count.toFixed(2));
            });
            var chart_youtube_dates = [];
            this.graphDataContent.youtube_video.forEach((item) => {
                chart_youtube_dates.push(item._id);
            });
            var graph_data = [{ data: chart_youtube_count, label: "Youtube Videos" }];
            this.lineChartDataForContent = graph_data;
            this.lineChartLabelsForContent = chart_youtube_dates;
            this.lineChartColorsForContent = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartColorsForContent;
        }
        if (chart_type === "clips") {
            var chart_youtube_count = [];
            this.graphDataContent.clips.forEach((item) => {
                chart_youtube_count.push(item.count);
            });
            var chart_youtube_dates = [];
            this.graphDataContent.clips.forEach((item) => {
                chart_youtube_dates.push(item._id);
            });
            var graph_data = [
                { data: chart_youtube_count, label: "Audios Available" },
            ];
            this.lineChartDataForContent = graph_data;
            this.lineChartLabelsForContent = chart_youtube_dates;
            this.lineChartColorsForContent =
                _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartColorsForAudioAvailable;
        }
        if (chart_type === "contract") {
            var chart_youtube_count = [];
            this.graphDataContent.contract.forEach((item) => {
                chart_youtube_count.push(item.count.toFixed(2));
            });
            var chart_youtube_dates = [];
            this.graphDataContent.contract.forEach((item) => {
                chart_youtube_dates.push(item._id);
            });
            var graph_data = [
                { data: chart_youtube_count, label: "Creatoe Agreement" },
            ];
            this.lineChartDataForContent = graph_data;
            this.lineChartLabelsForContent = chart_youtube_dates;
            this.lineChartColorsForContent =
                _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartColorsForCreatorAgreement;
        }
        if (chart_type === "contract_assigned") {
            var chart_youtube_count = [];
            this.graphDataContent.contract_assigned.forEach((item) => {
                chart_youtube_count.push(item.count.toFixed(2));
            });
            var chart_youtube_dates = [];
            this.graphDataContent.contract_assigned.forEach((item) => {
                chart_youtube_dates.push(item._id);
            });
            var graph_data = [
                { data: chart_youtube_count, label: "Contract Assigned" },
            ];
            this.lineChartDataForContent = graph_data;
            this.lineChartLabelsForContent = chart_youtube_dates;
            this.lineChartColorsForContent =
                _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartColorsForContractAssigned;
        }
        if (chart_type === "All") {
            var rights_holder_earning = [];
            this.graphDataRevenue.forEach((item) => {
                rights_holder_earning.push(item.rights_holder_earning.toFixed(2));
            });
            var creator_earning = [];
            this.graphDataRevenue.forEach((item) => {
                creator_earning.push(item.creator_earning.toFixed(2));
            });
            var mindset_earning = [];
            this.graphDataRevenue.forEach((item) => {
                mindset_earning.push(item.mindset_earning.toFixed(2));
            });
            var chart_youtube_dates = [];
            this.graphDataRevenue.forEach((item) => {
                chart_youtube_dates.push(item._id);
            });
            var graph_data = [
                { data: rights_holder_earning, label: "Rights Holder Revenue" },
                { data: creator_earning, label: "Creator Revenue" },
                { data: mindset_earning, label: "Mindset Revenue" },
            ];
            this.lineChartDataForAll = graph_data;
            this.lineChartLabelsForAll = chart_youtube_dates;
            this.lineChartColorsForAll = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartColorsForAll;
        }
        if (chart_type === "analysis") {
            var creator_comments_data = [];
            this.graphDataAnalysis.forEach((item) => {
                creator_comments_data.push(item.comments.toFixed(2));
            });
            var creator_dislikes_data = [];
            this.graphDataAnalysis.forEach((item) => {
                creator_dislikes_data.push(item.dislikes.toFixed(2));
            });
            var creator_drm_royality_share_data = [];
            this.graphDataAnalysis.forEach((item) => {
                creator_drm_royality_share_data.push(item.drm_royality_share.toFixed(2));
            });
            var creator_likes_data = [];
            this.graphDataAnalysis.forEach((item) => {
                creator_likes_data.push(item.likes.toFixed(2));
            });
            var creator_total_earning_data = [];
            this.graphDataAnalysis.forEach((item) => {
                creator_total_earning_data.push(item.total_earning.toFixed(2));
            });
            var creator_views_data = [];
            this.graphDataAnalysis.forEach((item) => {
                creator_views_data.push(item.views.toFixed(2));
            });
            var creator_your_share_data = [];
            this.graphDataAnalysis.forEach((item) => {
                creator_your_share_data.push(item.your_share.toFixed(2));
            });
            var creator_earning_dates = [];
            this.graphDataAnalysis.forEach((item) => {
                creator_earning_dates.push(item._id);
            });
            var graph_data = [
                { data: creator_comments_data, label: "Total Comments" },
                { data: creator_dislikes_data, label: "Total DisLikes" },
                { data: creator_drm_royality_share_data, label: "Total Royalty Share" },
                { data: creator_likes_data, label: "Total Likes" },
                { data: creator_total_earning_data, label: "Total Revenue" },
                { data: creator_views_data, label: "Total Views" },
                { data: creator_your_share_data, label: "Total Share" },
            ];
            this.lineChartDataForAnalysis = graph_data;
            this.lineChartLabelsForAnalysis = creator_earning_dates;
            this.lineChartColorsForAnalysis = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__.lineChartColorsForAnalysis;
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_modules_dashboard_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_core_service_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.dateInput = _t.first);
    } }, decls: 26, vars: 6, consts: [[1, "users-edit", "dashboard"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-content"], [1, "card-body"], ["ngbNav", "", 1, "nav-tabs", "dashboard-tabs", "justify-content-left", 3, "activeId"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", "", 1, "nav-link", "d-flex", "align-items-center", 3, "click"], [1, "d-none", "d-sm-block"], ["ngbNavContent", ""], [3, "ngbNavItem", 4, "ngIf"], [1, "tab-content"], [3, "ngbNavOutlet"], ["id", "minimal-statistics"], [1, "form-group", "role_filter", "mt-2"], ["type", "text", "name", "dateInput", "ngxDaterangepickerMd", "", "placeholder", "Start Date - End Date", 1, "form-control", "form-control-sm", "d-inline-block", "width-200", "mr-1", 3, "ngModel", "showCustomRangeLabel", "alwaysShowCalendars", "ngModelOptions", "ranges", "linkedCalendars", "isInvalidDate", "showClearButton", "ngModelChange", "change"], ["dateInput", ""], ["class", "fa fa-spin fa-spinner", 4, "ngIf"], ["role", "button", 1, "col-xl-3", "col-lg-6", "col-12", 3, "click"], [1, "card-body", "box-shadow-block"], [1, "media"], [1, "media-body", "text-left"], [1, "mb-1", "danger"], [4, "ngIf"], [1, "media-right", "align-self-center"], [1, "ft-briefcase", "danger", "font-large-2", "float-right"], [1, "mb-1", "success"], [1, "ft-user", "success", "font-large-2", "float-right"], [1, "mb-1", "warning"], [1, "ft-pie-chart", "warning", "font-large-2", "float-right"], [1, "mb-1", "info"], [1, "ft-life-buoy", "info", "font-large-2", "float-right"], [1, "row", "text-left"], [1, "col-sm-12"], [1, "card-header"], [1, "card-title"], [1, "height-400"], ["height", "400", "baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], [1, "fa", "fa-spin", "fa-spinner"], [1, "form-group", "role_filter", "mt-2", 3, "formGroup"], ["type", "text", "ngxDaterangepickerMd", "", "placeholder", "Start Date - End Date", 1, "form-control", "form-control-sm", "d-inline-block", "width-200", "mr-1", 3, "ngModel", "showCustomRangeLabel", "alwaysShowCalendars", "ngModelOptions", "ranges", "linkedCalendars", "isInvalidDate", "showClearButton", "ngModelChange", "change"], [1, "ft-video", "danger", "font-large-2", "float-right"], [1, "ft-music", "success", "font-large-2", "float-right"], [1, "ft-file-text", "warning", "font-large-2", "float-right"], [1, "ft-mic", "info", "font-large-2", "float-right"], ["role", "button", 1, "col-xl-4", "col-lg-6", "col-12"], [1, "ft-dollar-sign", "danger", "font-large-2", "float-right"], [1, "ft-dollar-sign", "success", "font-large-2", "float-right"], [1, "ft-dollar-sign", "warning", "font-large-2", "float-right"], [1, "form-group", "role_filter", "mb-2", 3, "formGroup"], ["class", "fa fa-spin fa-spinner mr-1", 4, "ngIf"], ["placeholder", "Select Channel", "formControlName", "channel", 1, "d-inline-block", "form-control-sm", "width-200", "mr-1"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "fa", "fa-spin", "fa-spinner", "mr-1"], [3, "value"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ul", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_9_listener() { return ctx.changetab("account"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, DashboardComponent_ng_template_12_Template, 73, 39, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_14_listener() { return ctx.changetab("content"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, DashboardComponent_ng_template_17_Template, 72, 40, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, DashboardComponent_li_18_Template, 5, 1, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_20_listener() { return ctx.changetab("analysis"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, DashboardComponent_ng_template_23_Template, 19, 21, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("activeId", ctx.activeTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.authService.isEarningAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavItem", ctx.authService.isEarningAdmin() ? 4 : 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavContent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavOutlet, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_10__.DaterangepickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.BaseChartDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */", "/* user page css */\n/*---------------*/\n.users-list-wrapper .dataTables_length {\n  margin-top: 0 !important;\n}\n.users-list-wrapper .dataTables_length select {\n  margin: 0 0.5rem;\n}\n.users-list-wrapper .dataTables_filter {\n  margin-top: 0 !important;\n}\n.users-list-wrapper .dataTables_wrapper .dataTables_paginate .pagination {\n  margin: 0;\n}\n.users-list-wrapper .dataTables_wrapper .dataTable thead tr th {\n  border: none;\n}\n.users-view .table-borderless td {\n  padding: 0.3rem 0;\n}\n.users-view .table-borderless td:first-child {\n  width: 10rem;\n}\n.users-view h6.text-primary span.text-bold-400 {\n  color: #2F8BE6 !important;\n}\n.users-view .users-avatar-shadow,\n.users-edit .users-avatar-shadow {\n  box-shadow: 2px 4px 14px 0 rgba(0, 0, 0, 0.4);\n}\n.users-view .users-module .table th,\n.users-edit .users-module .table th {\n  border-top: none;\n}\n.users-view .users-module .table th,\n.users-view .users-module .table td,\n.users-edit .users-module .table th,\n.users-edit .users-module .table td {\n  padding: 0.7rem 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtdXNlcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxrQkFBQTtBQUNBLGtCQUFBO0FBR0k7RUFDRSx3QkFBQTtBQUpOO0FBS007RUFDRSxnQkFBQTtBQUhSO0FBT0k7RUFDRSx3QkFBQTtBQUxOO0FBVVE7RUFDRSxTQUFBO0FBUlY7QUFlWTtFQUNFLFlBQUE7QUFiZDtBQXlCSTtFQUNFLGlCQUFBO0FBdEJOO0FBdUJNO0VBQ0UsWUFBQTtBQXJCUjtBQTBCSTtFQUNFLHlCQUFBO0FBeEJOO0FBK0JFOztFQUNFLDZDQUFBO0FBM0JKO0FBOEJJOztFQUNFLGdCQUFBO0FBM0JOO0FBNkJJOzs7O0VBRUUsc0JBQUE7QUF6Qk4iLCJmaWxlIjoicGFnZS11c2Vycy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL2NvcmUvdmFyaWFibGVzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uL2NvcmUvdmFyaWFibGVzL2FwcC12YXJpYWJsZXNcIjtcblxuLyogdXNlciBwYWdlIGNzcyAqL1xuLyotLS0tLS0tLS0tLS0tLS0qL1xuLnVzZXJzLWxpc3Qtd3JhcHBlciB7XG4gIC5kYXRhVGFibGVzIHtcbiAgICAmX2xlbmd0aCB7XG4gICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICBzZWxlY3Qge1xuICAgICAgICBtYXJnaW46IDAgMC41cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgICZfZmlsdGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmX3dyYXBwZXIge1xuICAgICAgLmRhdGFUYWJsZXNfcGFnaW5hdGUge1xuICAgICAgICAucGFnaW5hdGlvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kYXRhVGFibGUge1xuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgdHIge1xuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIHVzZXJzIHZpZXcgcGFnZSBjc3Ncbi51c2Vycy12aWV3IHtcbiAgLnRhYmxlLWJvcmRlcmxlc3Mge1xuICAgIHRkIHtcbiAgICAgIHBhZGRpbmc6IDAuM3JlbSAwO1xuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaDYudGV4dC1wcmltYXJ5IHtcbiAgICBzcGFuLnRleHQtYm9sZC00MDAge1xuICAgICAgY29sb3I6IHRoZW1lLWNvbG9yKHByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4vLyB1c2VycyB2aWV3ICYgdXNlcnMgZWRpdCBwYWdlIGNvbW1vbiBjc3Ncbi51c2Vycy12aWV3LFxuLnVzZXJzLWVkaXQge1xuICAudXNlcnMtYXZhdGFyLXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMnB4IDRweCAxNHB4IDAgcmdiYSgkYmxhY2ssIDAuNCk7XG4gIH1cbiAgLnVzZXJzLW1vZHVsZSB7XG4gICAgLnRhYmxlIHRoIHtcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgfVxuICAgIC50YWJsZSB0aCxcbiAgICAudGFibGUgdGQge1xuICAgICAgcGFkZGluZzogMC43cmVtIDIuNXJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */", ".ng-dropdown-panel .ng-dropdown-panel-items .ng-option img {\n  margin-right: 0.7rem;\n}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option img + b {\n  vertical-align: middle;\n}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked {\n  background-color: #2F8BE6 !important;\n  color: #fff !important;\n}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option-selected {\n  background-color: #2F8BE6 !important;\n  color: #fff !important;\n}\n.ng-select .ng-select-container {\n  background-color: transparent !important;\n  border-color: #E0E0E0;\n  border-radius: 0.35rem;\n  color: #342E49;\n}\n.ng-select .ng-dropdown-panel {\n  border-color: #E0E0E0;\n  box-shadow: none;\n  margin: 0;\n}\n.ng-select.ng-select-opened > .ng-select-container {\n  border-color: #2F8BE6 !important;\n}\n.ng-select.ng-select-focused:not(.ng-select-opened) > .ng-select-container {\n  border-color: #2F8BE6;\n  box-shadow: none;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value {\n  background-color: #2F8BE6;\n  color: #fff;\n  border-radius: 0.35rem;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon {\n  border: 1px solid #7441DB;\n  border-right: 0 !important;\n  border-top-left-radius: 0.35rem;\n  border-bottom-left-radius: 0.35rem;\n  padding: 1px 0 1px 5px;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover {\n  background-color: inherit;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label {\n  border: 1px solid #7441DB;\n  border-left: 0 !important;\n  border-top-right-radius: 0.35rem;\n  border-bottom-right-radius: 0.35rem;\n}\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container {\n  border-color: #474748;\n  color: #B2B1B5;\n}\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container .ng-input > input,\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container .ng-input > input::placeholder {\n  color: #B2B1B5;\n}\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container {\n  border-color: rgba(238, 238, 238, 0.2);\n  color: #D6D5D8;\n}\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container .ng-input > input,\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container .ng-input > input::placeholder {\n  color: #D6D5D8;\n}\nhtml body.layout-dark .ng-dropdown-panel {\n  border-color: #474748;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  background-color: #1E1E1E;\n  color: #B2B1B5;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled {\n  color: #626164;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-optgroup.ng-option-disabled {\n  background-color: #1E1E1E;\n  color: #626164;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-header,\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-footer {\n  background-color: #101010;\n  color: #626164;\n  border-color: #474748;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5zY3NzIiwiLi4vY29yZS92YXJpYWJsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vY29yZS92YXJpYWJsZXMvYXBwLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1JO0VBQ0Usb0JBQUE7QUFMTjtBQU1NO0VBQ0Usc0JBQUE7QUFKUjtBQU9JO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtBQUxOO0FBUUU7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0FBTko7QUFVRTtFQUNFLHdDQUFBO0VBQ0EscUJDb0VXO0VEbkVYLHNCQ3FFWTtFRHBFWixjQ21EUztBRDFEYjtBQVNFO0VBQ0UscUJDK0RXO0VEOURYLGdCQUFBO0VBQ0EsU0FBQTtBQVBKO0FBU0U7RUFDRSxnQ0FBQTtBQVBKO0FBU0U7RUFDRSxxQkNUTTtFRFVOLGdCQUFBO0FBUEo7QUFTRTtFQUNFLHlCQ2JNO0VEY04sV0MzQ0k7RUQ0Q0osc0JDbURZO0FEMURoQjtBQVFJO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQytDVTtFRDlDVixrQ0M4Q1U7RUQ3Q1Ysc0JBQUE7QUFOTjtBQU9NO0VBQ0UseUJBQUE7QUFMUjtBQVFJO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQ3FDVTtFRHBDVixtQ0NvQ1U7QUQxQ2hCO0FBZ0JNO0VBQ0UscUJFYlU7RUZjVixjRW5CUTtBRk1oQjtBQWNROztFQUVFLGNFdEJNO0FGVWhCO0FBb0JNO0VBQ0Usc0NFZFU7RUZlVixjRXBCUTtBRkVoQjtBQW1CUTs7RUFFRSxjRXZCTTtBRk1oQjtBQXVCRTtFQUNFLHFCRXJDYztBRmdCbEI7QUFzQkk7RUFDRSx5QkUzQ1E7RUY0Q1IsY0U3Q1U7QUZ5QmhCO0FBcUJNO0VBQ0UsY0UzQ1k7QUZ3QnBCO0FBc0JJO0VBQ0UseUJFbERRO0VGbURSLGNFaERjO0FGNEJwQjtBQXNCSTs7RUFFRSx5QkV6RFU7RUYwRFYsY0VyRGM7RUZzRGQscUJFckRZO0FGaUNsQiIsImZpbGUiOiJzZWxlY3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9jb3JlL3ZhcmlhYmxlcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi9jb3JlL3ZhcmlhYmxlcy9hcHAtdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vY29yZS9jb2xvcnMvcGFsZXR0ZS12YXJpYWJsZXNcIjtcblxuLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gIC5uZy1vcHRpb24ge1xuICAgIGltZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcbiAgICAgICYrYiB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgfVxuICAgICYubmctb3B0aW9uLW1hcmtlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAubmctb3B0aW9uLXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgfVxufVxuLm5nLXNlbGVjdCB7XG4gIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICBjb2xvcjogJGJvZHktY29sb3I7XG4gIH1cbiAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgJi5uZy1zZWxlY3Qtb3BlbmVkPi5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgJi5uZy1zZWxlY3QtZm9jdXNlZDpub3QoLm5nLXNlbGVjdC1vcGVuZWQpPi5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgJi5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgLm5nLXZhbHVlLWljb24ge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbWFwLWdldCgkcHJpbWFyeS1jb2xvciwgZGFya2VuLTEpO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgICAgcGFkZGluZzogMXB4IDAgMXB4IDVweDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuICAgIH1cbiAgICAubmctdmFsdWUtbGFiZWwge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbWFwLWdldCgkcHJpbWFyeS1jb2xvciwgZGFya2VuLTEpO1xuICAgICAgYm9yZGVyLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICB9XG4gIH1cbn1cblxuXG5odG1sIGJvZHkubGF5b3V0LWRhcmsge1xuICAvLyBmb3IgZGFyayBsYXlvdXRcbiAgJjpub3QoLmxheW91dC10cmFuc3BhcmVudCkge1xuICAgIC5uZy1zZWxlY3Qge1xuICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICRkbC1ib3JkZXItY29sb3I7XG4gICAgICAgIGNvbG9yOiAkZGwtdGV4dC1jb2xvcjtcbiAgICAgICAgLm5nLWlucHV0PmlucHV0LFxuICAgICAgICAubmctaW5wdXQ+aW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogJGRsLXRleHQtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZm9yIHRyYW5zcGFyZW50IGxheW91dFxuICAmLmxheW91dC10cmFuc3BhcmVudCB7XG4gICAgLm5nLXNlbGVjdCB7XG4gICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRsLWJvcmRlci1jb2xvcjtcbiAgICAgICAgY29sb3I6ICR0bC10ZXh0LWNvbG9yO1xuICAgICAgICAubmctaW5wdXQ+aW5wdXQsXG4gICAgICAgIC5uZy1pbnB1dD5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiAkdGwtdGV4dC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmb3IgZGFyayBhbmQgdHJhbnNwYXJlbnQgbGF5b3V0c1xuICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgIGJvcmRlci1jb2xvcjogJGRsLWJvcmRlci1jb2xvcjtcbiAgICAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGwtYmctY29sb3I7XG4gICAgICBjb2xvcjogJGRsLXRleHQtY29sb3I7XG4gICAgICAmLm5nLW9wdGlvbi1kaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiAkZGwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICAgIC5uZy1vcHRncm91cC5uZy1vcHRpb24tZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRsLWJnLWNvbG9yO1xuICAgICAgY29sb3I6ICRkbC1kaXNhYmxlZC1jb2xvcjtcbiAgICB9XG4gICAgLm5nLWRyb3Bkb3duLWhlYWRlcixcbiAgICAubmctZHJvcGRvd24tZm9vdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci1kYXJrO1xuICAgICAgY29sb3I6ICRkbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIGJvcmRlci1jb2xvcjogJGRsLWJvcmRlci1jb2xvcjtcbiAgICB9XG4gIH1cbn1cbiIsIiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuJGdyYXlzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZ3JheXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICksXG4gICRncmF5c1xuKTtcblxuJHByaW1hcnk6ICMyRjhCRTYgIWRlZmF1bHQ7XG4kc3VjY2VzczogIzQwQzA1NyAhZGVmYXVsdDtcbiRpbmZvOiAjMkY4QkU2ICFkZWZhdWx0O1xuJHdhcm5pbmc6ICM3ZTc3NzEgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAjRjU1MjUyICFkZWZhdWx0O1xuJHNlY29uZGFyeTogIzYxNkQ4OSAhZGVmYXVsdDtcbiRsaWdodDogI0RCREVFNSAhZGVmYXVsdDtcbiRkYXJrOiAjMUEwNTFEICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInByaW1hcnlcIjogJHByaW1hcnksXG4gICAgXCJzdWNjZXNzXCI6ICRzdWNjZXNzLFxuICAgIFwiaW5mb1wiOiAkaW5mbyxcbiAgICBcIndhcm5pbmdcIjogJHdhcm5pbmcsXG4gICAgXCJkYW5nZXJcIjogJGRhbmdlcixcbiAgICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICAgIFwibGlnaHRcIjogJGxpZ2h0LFxuICAgIFwiZGFya1wiOiAkZGFya1xuICApLFxuICAkdGhlbWUtY29sb3JzXG4pO1xuXG4vLyBTcGFjaW5nXG5cbiRzcGFjZXI6IDEuNXJlbTtcbiRzcGFjZXJzOiAoXG4gIDA6IDAsXG4gIDE6IChcbiAgICAkc3BhY2VyICogMC4yNVxuICApLFxuICAyOiAoXG4gICAgJHNwYWNlciAqIDAuNVxuICApLFxuICAzOiAkc3BhY2VyLFxuICA0OiAoXG4gICAgJHNwYWNlciAqIDEuNVxuICApLFxuICA1OiAoXG4gICAgJHNwYWNlciAqIDNcbiAgKVxuKSAhZGVmYXVsdDtcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cbiRib2R5LWJnOiAjRjdGN0Y4O1xuJGJvZHktY29sb3I6ICMzNDJFNDkgIWRlZmF1bHQ7XG5cblxuLy8gTGlua3Ncbi8vXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXG5cbiRsaW5rLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGxpbmstY29sb3IsIDUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmUgIWRlZmF1bHQ7XG5cbi8vIENvbXBvbmVudHNcbi8vXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXG5cbiRib3JkZXItY29sb3I6ICNFMEUwRTAgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiAwLjM1cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNnJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xuXG5cbi8vIFR5cG9ncmFwaHlcbi8vXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJNb250c2VycmF0XCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5ncy1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuMSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogIzE3MTAyRiAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xuXG4kdGV4dC1tdXRlZDogI0JEQkRCRCAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAxLjFyZW0gIWRlZmF1bHQ7XG5cbiRoci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuJHRhYmxlLWNlbGwtcGFkZGluZzogMS4xNXJlbSAycmVtICFkZWZhdWx0O1xuJHRhYmxlLWFjY2VudC1iZzogcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogMC4zNzVyZW0gIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXg6IDEuMjVyZW0gIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0OiAxLjVyZW0gIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogMC4ycmVtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteTogJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQ6IDEuNSAhZGVmYXVsdDtcbiRpbnB1dC1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICRib2R5LWJnICFkZWZhdWx0O1xuJGlucHV0LWNvbG9yOiAjNzU3ODdkICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogI0UwRTBFMCAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6IG5vbmUgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodDogY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIDFlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXkgKiAyfSArIDNweCkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAwICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6IDIuNnJlbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG5cblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICM5RTlFOUUgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuJGRyb3Bkb3duLXBhZGRpbmcteTogMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAxMHB4ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAyMHB4ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6IGluaGVyaXQgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1iZzogI0Y1RjVGNSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogI0VFRUVFRSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAjNzU3NTc1ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICNFMEUwRTAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4vLyBDYXJkc1xuXG4kY2FyZC1zcGFjZXIteTogMS41cmVtO1xuJGNhcmQtc3BhY2VyLXg6IDEuNXJlbTtcbiRjYXJkLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4vLyBQb3BvdmVyc1xuXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjZyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xuXG4vLyBUb2FzdHNcblxuJHRvYXN0LXBhZGRpbmcteTogMC40NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogLThweCA4cHggMTRweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6IDg1JSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogNTAwICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteDogMC42NjY2NjY2NjdyZW0gIWRlZmF1bHQ7XG5cbi8vIE1vZGFsc1xuXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbi8vIEFsZXJ0c1xuLy9cbi8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxuXG4kYWxlcnQtcGFkZGluZy15OiAwLjk1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogMS40NXJlbSAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAwLjhyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogMXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogI2VlZSAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ob3Zlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogIzc1NzU3NSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogaW5oZXJpdCAhZGVmYXVsdDtcblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xuJGNvZGUtY29sb3I6ICRkYW5nZXIgIWRlZmF1bHQ7XG5cbi8vIFV0aWxpdGllc1xuXG4kb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4sIHZpc2libGUsIHNjcm9sbCAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG4vLyB2ZXJ0aWNhbCBtZW51XG4kbWVudS1leHBhbmRlZC13aWR0aC1zbTogMjIwcHg7XG4kbWVudS1leHBhbmRlZC13aWR0aDogMjUwcHg7XG4kbWVudS1leHBhbmRlZC13aWR0aC1sZzogMjgwcHg7XG4kbWVudS1jb2xsYXBzZWQtd2lkdGg6IDYwcHg7XG5cbi8vIEhvcml6b250YWwgTWVudVxuJG1lbnUtYWN0aXZlLWJnOiAjRTdFOUVDO1xuXG4kZm9udC1zaXplLXJvb3Q6IDE1cHg7XG5cbi8vIEF2YXRhclxuJGF2YXRhci1iZzogI0UwRTBFMDtcbiRhdmF0YXItdGV4dC1jb2xvcjogIzYxNjE2MTtcbiRhdmF0YXItc2l6ZTogMzJweDtcbiRhdmF0YXItc2l6ZS14bDogNzBweDtcbiRhdmF0YXItc2l6ZS1sZzogNTBweDtcbiRhdmF0YXItc2l6ZS1tZDogNDBweDtcbiRhdmF0YXItc2l6ZS1zbTogMjRweDtcbiRhdmF0YXItc3RhdHVzLXNpemU6IDExcHg7XG4kYXZhdGFyLXN0YXR1cy1zaXplLWxnOiAxN3B4O1xuXG4vLyBTaGFkb3dzXG4kc2hhZG93LXVtYnJhLW9wYWNpdHk6IDAuMiAhZGVmYXVsdDtcbiRzaGFkb3ctcGVudW1icmEtb3BhY2l0eTogMC4xNCAhZGVmYXVsdDtcbiRzaGFkb3ctYW1iaWVudC1vcGFjaXR5OiAwLjEyICFkZWZhdWx0O1xuXG4vL3ZhcmlhYmxlcyBmb3Igc29jaWFsXG4kc29jaWFsLWZhY2Vib29rOiAjM2I1OTk4O1xuJHNvY2lhbC10d2l0dGVyOiAjNTVhY2VlO1xuJHNvY2lhbC1waW50ZXJlc3Q6ICNjYzIxMjc7XG4kc29jaWFsLWdvb2dsZTogI2RkNGIzOTtcbiRzb2NpYWwtbGlua2VkaW46ICMwOTc2YjQ7XG4kc29jaWFsLWRyaWJiYmxlOiAjZWE0Yzg5O1xuJHNvY2lhbC1naXRodWI6ICMzMzMzMzM7XG4kc29jaWFsLXlvdXR1YmU6ICNlNTJkMjc7XG4kc29jaWFsLWluc3RhZ3JhbTogIzEyNTY4ODtcbiRzb2NpYWwtcmVkZGl0OiAjZmY0NTAwO1xuJHNvY2lhbC10dW1ibHI6ICMzNTQ2NWM7XG4kc29jaWFsLWJlaGFuY2U6ICMxNzY5ZmY7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFZhcmlhYmxlcyBmb3IgRGFyayBMYXlvdXRcbiRkYXJrLXN0eWxlOiB0cnVlO1xuJGJnLWNvbG9yLWRhcms6ICMxMDEwMTA7XG4kZGwtdGV4dC1jb2xvcjogI0IyQjFCNTtcbiRkbC1iZy1jb2xvcjogIzFFMUUxRTtcbiRkbC1oZWFkaW5ncy1jb2xvcjogI0JGQkVDMjtcbiRkbC10ZXh0LW11dGVkLWNvbG9yOiAjODQ4NDg0O1xuJGRsLWRpc2FibGVkLWNvbG9yOiAjNjI2MTY0O1xuJGRsLWJvcmRlci1jb2xvcjogIzQ3NDc0ODtcbiRkbC1jYXJkLXNoYWRvdzogLThweCA4cHggMTRweCAwIHJnYmEoJGJsYWNrLCAwLjI1KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBWYXJpYWJsZXMgRm9yIFRyYW5zcGFyZW50IExheW91dFxuXG4kdGwtdGV4dC1jb2xvcjogI0Q2RDVEODtcbiR0bC1oZWFkaW5ncy1jb2xvcjogI0U5RTlFQTtcbiR0bC1iZy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4kdGwtdGV4dC1tdXRlZC1jb2xvcjogI0MzQzJDNTtcbiR0bC1kaXNhYmxlZC1jb2xvcjogIzlFOUU5RTtcbiR0bC1ib3JkZXItY29sb3I6IHJnYmEoI2VlZSwgMC4yKTtcbiR0bC1jYXJkLWJnLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xMik7XG5cbiRiZy1nbGFzcy1oaWJpc2N1czogbGluZWFyLWdyYWRpZW50KFxuICB0byByaWdodCBib3R0b20sXG4gICNmMDVmNTcsXG4gICNjODNkNWMsXG4gICM5OTI0NWEsXG4gICM2NzEzNTEsXG4gICMzNjA5NDBcbik7XG4kYmctZ2xhc3MtcHVycGxlLXBpenpheno6IGxpbmVhci1ncmFkaWVudChcbiAgdG8gcmlnaHQgYm90dG9tLFxuICAjNjYyZDg2LFxuICAjOGIyYThhLFxuICAjYWUyMzg5LFxuICAjY2YxZDgzLFxuICAjZWQxZTc5XG4pO1xuJGJnLWdsYXNzLWJsdWUtbGFnb29uOiBsaW5lYXItZ3JhZGllbnQoXG4gIHRvIHJpZ2h0IGJvdHRvbSxcbiAgIzE0NGU2OCxcbiAgIzAwNmQ4MyxcbiAgIzAwOGQ5MixcbiAgIzAwYWQ5MSxcbiAgIzU3Y2E4NVxuKTtcbiRiZy1nbGFzcy1lbGVjdHJpYy12aW9sZXQ6IGxpbmVhci1ncmFkaWVudChcbiAgdG8gbGVmdCB0b3AsXG4gICM0YTAwZTAsXG4gICM2MDBkZTAsXG4gICM3MTE5ZTEsXG4gICM4MDIzZTEsXG4gICM4ZTJkZTJcbik7XG4kYmctZ2xhc3MtcG9ydGFnZTogbGluZWFyLWdyYWRpZW50KFxuICB0byBsZWZ0IHRvcCxcbiAgIzk3YWJmZixcbiAgIzc5OGNlNSxcbiAgIzViNmVjYixcbiAgIzNiNTFiMSxcbiAgIzEyMzU5N1xuKTtcbiRiZy1nbGFzcy10dW5kb3JhOiBsaW5lYXItZ3JhZGllbnQoXG4gIHRvIGxlZnQgdG9wLFxuICAjZWY0NjczLFxuICAjZmZjODQ2XG4pO1xuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 88757:
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 7126);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ 6957);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 95684);
/* harmony import */ var app_shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/directives/match-height.directive */ 59313);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-charts */ 71278);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 57361);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-daterangepicker-material */ 80596);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 59298);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 48896);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 20722);
/* harmony import */ var _dashboard_listing_creator_creator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-listing/creator/creator.component */ 8978);
/* harmony import */ var _dashboard_listing_right_holder_right_holder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-listing/right-holder/right-holder.component */ 16039);
/* harmony import */ var _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-dashboard/main-dashboard.component */ 53619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 91477);
















class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_8__.ChartsModule,
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__.NgxChartsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule,
            app_shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__.MatchHeightModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.NgxDatatableModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_14__.NgxDaterangepickerMd.forRoot({
                clearLabel: 'Lifetime',
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        _dashboard_listing_creator_creator_component__WEBPACK_IMPORTED_MODULE_3__.CreatorComponent,
        _dashboard_listing_right_holder_right_holder_component__WEBPACK_IMPORTED_MODULE_4__.RightHolderComponent,
        _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.MainDashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_8__.ChartsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__.NgxChartsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule,
        app_shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__.MatchHeightModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.NgxDatatableModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_14__.NgxDaterangepickerMd] }); })();


/***/ }),

/***/ 53619:
/*!******************************************************************************!*\
  !*** ./src/app/modules/dashboard/main-dashboard/main-dashboard.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainDashboardComponent": () => (/* binding */ MainDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/service/auth/auth.service */ 67083);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard.component */ 6957);
/* harmony import */ var _dashboard_listing_creator_creator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard-listing/creator/creator.component */ 8978);
/* harmony import */ var _dashboard_listing_right_holder_right_holder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard-listing/right-holder/right-holder.component */ 16039);






function MainDashboardComponent_app_dashboard_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-dashboard");
} }
function MainDashboardComponent_app_dashboard_creator_listing_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-dashboard-creator-listing");
} }
function MainDashboardComponent_app_dashboard_right_holder_listing_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-dashboard-right-holder-listing");
} }
class MainDashboardComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
MainDashboardComponent.ɵfac = function MainDashboardComponent_Factory(t) { return new (t || MainDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
MainDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MainDashboardComponent, selectors: [["app-main-dashboard"]], decls: 3, vars: 3, consts: [[4, "ngIf"]], template: function MainDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MainDashboardComponent_app_dashboard_0_Template, 1, 0, "app-dashboard", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MainDashboardComponent_app_dashboard_creator_listing_1_Template, 1, 0, "app-dashboard-creator-listing", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MainDashboardComponent_app_dashboard_right_holder_listing_2_Template, 1, 0, "app-dashboard-right-holder-listing", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.authService.isAdminCategory());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.authService.isCreator());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.authService.isRH());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, _dashboard_listing_creator_creator_component__WEBPACK_IMPORTED_MODULE_2__.CreatorComponent, _dashboard_listing_right_holder_right_holder_component__WEBPACK_IMPORTED_MODULE_3__.RightHolderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_dashboard_dashboard_module_ts.js.map