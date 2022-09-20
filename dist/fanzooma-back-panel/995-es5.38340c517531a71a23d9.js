!function(){"use strict";function a(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function t(a,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,o.key,o)}}function e(a,e,o){return e&&t(a.prototype,e),o&&t(a,o),Object.defineProperty(a,"prototype",{writable:!1}),a}(self.webpackChunkFanzooma=self.webpackChunkFanzooma||[]).push([[995],{29995:function(t,o,r){r.r(o),r.d(o,{SubAccountModule:function(){return N}});var l,n=r(12057),d=r(92636),i=r(84051),b=r(16738),s=r(74788),g=r(92340),c=r(26215),p=r(68939),f=r(58497),u=((l=function(){function t(e){a(this,t),this.http=e,this._isLoading$=new c.X(!1),this._isLoadingtable$=new c.X(!1),this.apiUrl=g.N.apiUrl}return e(t,[{key:"isLoading$",get:function(){return this._isLoading$.asObservable()}},{key:"isLoadingtable$",get:function(){return this._isLoadingtable$.asObservable()}},{key:"getAll",value:function(a){var t=this;return this._isLoadingtable$.next(!0),this.http.post("".concat(this.apiUrl,"/admin/organization/sub-accounts"),a).pipe((0,p.x)(function(){t._isLoadingtable$.next(!1)}))}}]),t}()).\u0275fac=function(a){return new(a||l)(s.LFG(f.eN))},l.\u0275prov=s.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l),h=r(24751),m=r(55618),x=r(49250),y=r(91370);function w(a,t){if(1&a&&(s.TgZ(0,"ng-option",24),s._uU(1),s.qZA()),2&a){var e=t.$implicit;s.Q6J("value",e.id),s.xp6(1),s.Oqu(e.name)}}var v=function(a){return["/organization/view",a]},k=function(a,t){return{"bg-light-success":a,"bg-light-danger":t}};function Z(a,t){if(1&a&&(s.TgZ(0,"div",25),s.TgZ(1,"div",26),s._UZ(2,"img",27),s.qZA(),s.TgZ(3,"div",28),s.TgZ(4,"p",29),s._uU(5),s.qZA(),s.TgZ(6,"p",30),s._uU(7),s.qZA(),s.TgZ(8,"p",31),s.TgZ(9,"span",32),s._uU(10),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&a){var e=t.row;s.xp6(1),s.Q6J("routerLink",s.VKq(5,v,e._id)),s.xp6(4),s.Oqu(e.name),s.xp6(2),s.hij(" ",e.email," "),s.xp6(2),s.Q6J("ngClass",s.WLB(7,k,"active"==e.status,"inactive"==e.status)),s.xp6(1),s.hij(" ","active"==e.status?"Active":"InActive"," ")}}function z(a,t){1&a&&(s._uU(0),s.ALo(1,"date")),2&a&&s.hij(" ",s.lcZ(1,1,t.row.created_at)," ")}function A(a,t){1&a&&s._uU(0),2&a&&s.hij(" ",t.row.organization.name," ")}function q(a,t){1&a&&(s.TgZ(0,"div",33),s._UZ(1,"i",34),s._uU(2," Loading... "),s.qZA())}var _=function(){var t=function(){function t(e,o,r,l){a(this,t),this.subAccService=e,this.cd=o,this.fb=r,this.orgService=l,this.page=1,this.limit=10,this.offset=0,this.currentdocsize=0,this.columnName="",this.order="desc",this.searchTerm="",this.plans=[],this.my_messages={emptyMessage:"Loading...",totalMessage:"Subaccounts"},this.rows=[],this.ColumnMode=i.hq,this.ranges={Today:[b(),b()],Yesterday:[b().subtract(1,"days"),b().subtract(1,"days")],"Last 1 Week":[b().subtract(6,"days"),b()],"Last 28 Days":[b().subtract(27,"days"),b()],"Last 90 Days":[b().subtract(89,"days"),b()],"Last 365 Days":[b().subtract(364,"days"),b()]},this.organizationsNames=[],this.isLoadingtable$=this.subAccService.isLoadingtable$}return e(t,[{key:"ngOnInit",value:function(){this.initFilterForm(),this.getOrganizationNames(),this.filterForm.patchValue({org_id:history.state.org_id})}},{key:"getOrganizationNames",value:function(){var a=this;this.orgService.getAllNames({}).subscribe(function(t){var e=t.data;a.organizationsNames=e.docs},function(a){})}},{key:"initFilterForm",value:function(){var a=this;this.filterForm=this.fb.group({date_range:[{startDate:null,endDate:null}],org_id:[],status:[],search:[]}),this.filterForm.valueChanges.subscribe(function(){a.resetPage(),a.getSubaccounts()})}},{key:"resetPage",value:function(){this.page=1,this.offset=0}},{key:"setPage",value:function(a){this.page=a.offset+1,this.offset=a.offset,this.getSubaccounts()}},{key:"onSort",value:function(a){var t=a.sorts[0];this.columnName=t.prop,this.order=t.dir,this.resetPage(),this.getSubaccounts()}},{key:"getSubaccounts",value:function(){var a=this,t=Object.assign(Object.assign(Object.assign({},this.pageParams()),this.sortParams()),this.filterParams());this.subAccService.getAll(t).subscribe(function(t){var e=t.data;a.rows=e.docs,a.count=e.count,a.offset=a.page-1,a.currentdocsize=a.rows.length,0==a.rows.length&&(a.my_messages.emptyMessage="No data found."),a.cd.markForCheck()},function(a){})}},{key:"filterParams",value:function(){return this.filterForm.value}},{key:"sortParams",value:function(){return{orderByParam:this.columnName,orderByType:this.order}}},{key:"pageParams",value:function(){return{limit:this.limit,page:this.page}}}]),t}();return t.\u0275fac=function(a){return new(a||t)(s.Y36(u),s.Y36(s.sBO),s.Y36(h.qu),s.Y36(m.M))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-listing"]],decls:32,vars:26,consts:[["id","ngx-datatable-basic"],[1,"row"],[1,"col-12"],[1,"card","customisecard"],[1,"card-header"],[1,"col-md-6"],[1,"card-title","mt-1"],[1,"card-content"],[1,"card-body"],[1,"form-group","role_filter",3,"formGroup"],[1,"mr-1"],["type","text","placeholder","Search","formControlName","search",1,"form-control","form-control-sm","d-inline-block","width-200","mr-1"],["type","text","ngxDaterangepickerMd","","formControlName","date_range","placeholder","Start Date - End Date",1,"form-control","form-control-sm","d-inline-block","width-200","mr-1",3,"showCustomRangeLabel","alwaysShowCalendars","ranges","linkedCalendars","showClearButton"],["formControlName","status","placeholder","Select Status",1,"d-inline-block","form-control-sm","width-200","mr-1"],["value","active"],["value","inactive"],["formControlName","org_id","placeholder","Select Organization",1,"d-inline-block","form-control-sm","width-200","mr-1"],[3,"value",4,"ngFor","ngForOf"],["rowHeight","auto",1,"bootstrap","core-bootstrap",3,"rows","messages","columnMode","scrollbarH","headerHeight","footerHeight","count","externalPaging","externalSorting","limit","offset","page","sort"],["name","Name","prop","name",1,"datatable-row-left",3,"frozenLeft","width"],["ngx-datatable-cell-template",""],["name","Created at","prop","created_at",3,"width"],["name","Organization",3,"sortable","width"],["class","spinner_loading",4,"ngIf"],[3,"value"],[1,"d-flex","align-items-center"],[1,"avatar","avatar-admins","mr-2","ml-0",3,"routerLink"],["height","60","width","60","alt","Fanzooma","src","assets/img/default.jpg",1,"rounded-circle"],[1,"cell-line-height"],[1,"font-medium-1","line-height-1","mb-0"],[1,"text-muted","font-small-2","margintopbotton"],[1,"margintopbotton"],[1,"badge","badge-pill","font-small",3,"ngClass"],[1,"spinner_loading"],[1,"fa","fa-spinner","fa-spin"]],template:function(a,t){1&a&&(s.TgZ(0,"section",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"div",4),s.TgZ(5,"div",1),s.TgZ(6,"div",5),s.TgZ(7,"h4",6),s._uU(8,"Subaccounts"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(9,"div",7),s.TgZ(10,"div",8),s.TgZ(11,"fieldset",9),s.TgZ(12,"label",10),s._uU(13,"Search:"),s.qZA(),s._UZ(14,"input",11),s._UZ(15,"input",12),s.TgZ(16,"ng-select",13),s.TgZ(17,"ng-option",14),s._uU(18,"Active"),s.qZA(),s.TgZ(19,"ng-option",15),s._uU(20,"Inactive"),s.qZA(),s.qZA(),s.TgZ(21,"ng-select",16),s.YNc(22,w,2,2,"ng-option",17),s.qZA(),s.qZA(),s.TgZ(23,"ngx-datatable",18),s.NdJ("page",function(a){return t.setPage(a)})("sort",function(a){return t.onSort(a)}),s.TgZ(24,"ngx-datatable-column",19),s.YNc(25,Z,11,10,"ng-template",20),s.qZA(),s.TgZ(26,"ngx-datatable-column",21),s.YNc(27,z,2,3,"ng-template",20),s.qZA(),s.TgZ(28,"ngx-datatable-column",22),s.YNc(29,A,1,1,"ng-template",20),s.qZA(),s.qZA(),s.YNc(30,q,3,0,"div",23),s.ALo(31,"async"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&a&&(s.xp6(11),s.Q6J("formGroup",t.filterForm),s.xp6(4),s.Q6J("showCustomRangeLabel",!0)("alwaysShowCalendars",!0)("ranges",t.ranges)("linkedCalendars",!0)("showClearButton",!0),s.xp6(7),s.Q6J("ngForOf",t.organizationsNames),s.xp6(1),s.Q6J("rows",t.rows)("messages",t.my_messages)("columnMode",t.ColumnMode.force)("scrollbarH",!0)("headerHeight",50)("footerHeight",50)("count",t.count)("externalPaging",!0)("externalSorting",!0)("limit",t.limit)("offset",t.offset),s.xp6(1),s.Q6J("frozenLeft",!0)("width",260),s.xp6(2),s.Q6J("width",150),s.xp6(2),s.Q6J("sortable",!1)("width",150),s.xp6(2),s.Q6J("ngIf",s.lcZ(31,24,t.isLoadingtable$)))},directives:[h.JL,h.sg,h.Fj,h.JJ,h.u,x.SP,y.w9,y.xv,n.sg,i.nE,i.UC,i.vq,n.O5,d.rH,n.mk],pipes:[n.Ov,n.uU],styles:["",".ng-dropdown-panel .ng-dropdown-panel-items .ng-option img{margin-right:.7rem}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option img+b{vertical-align:middle}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#2f8be6!important;color:#fff!important}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option-selected{background-color:#2f8be6!important;color:#fff!important}.ng-select .ng-select-container{background-color:transparent!important;border-color:#e0e0e0;border-radius:.35rem;color:#342e49}.ng-select .ng-dropdown-panel{border-color:#e0e0e0;box-shadow:none;margin:0}.ng-select.ng-select-opened>.ng-select-container{border-color:#2f8be6!important}.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#2f8be6;box-shadow:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{background-color:#2f8be6;color:#fff;border-radius:.35rem}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{border:1px solid #7441DB;border-right:0!important;border-top-left-radius:.35rem;border-bottom-left-radius:.35rem;padding:1px 0 1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:inherit}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{border:1px solid #7441DB;border-left:0!important;border-top-right-radius:.35rem;border-bottom-right-radius:.35rem}html body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container{border-color:#474748;color:#b2b1b5}html body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container .ng-input>input::-moz-placeholder{color:#b2b1b5}html body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container .ng-input>input,html body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container .ng-input>input::placeholder{color:#b2b1b5}html body.layout-dark.layout-transparent .ng-select .ng-select-container{border-color:#eee3;color:#d6d5d8}html body.layout-dark.layout-transparent .ng-select .ng-select-container .ng-input>input::-moz-placeholder{color:#d6d5d8}html body.layout-dark.layout-transparent .ng-select .ng-select-container .ng-input>input,html body.layout-dark.layout-transparent .ng-select .ng-select-container .ng-input>input::placeholder{color:#d6d5d8}html body.layout-dark .ng-dropdown-panel{border-color:#474748}html body.layout-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#1e1e1e;color:#b2b1b5}html body.layout-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#626164}html body.layout-dark .ng-dropdown-panel .ng-optgroup.ng-option-disabled{background-color:#1e1e1e;color:#626164}html body.layout-dark .ng-dropdown-panel .ng-dropdown-header,html body.layout-dark .ng-dropdown-panel .ng-dropdown-footer{background-color:#101010;color:#626164;border-color:#474748}\n",'@charset "UTF-8";.ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable *:before,.ngx-datatable *:after{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-header-inner{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}@font-face{font-family:"data-table";src:url(data-table.40742b4faed98d0250a5.eot);src:url(data-table.40742b4faed98d0250a5.eot?#iefix) format("embedded-opentype"),url(data-table.53c319729491b7686d65.woff) format("woff"),url(data-table.93be7e0fc94594d266a2.ttf) format("truetype"),url(data-table.7eda0c04830dac128c76.svg#data-table) format("svg");font-weight:normal;font-style:normal}[data-icon]:before{font-family:"data-table"!important;content:attr(data-icon);font-style:normal!important;font-weight:normal!important;font-feature-settings:normal!important;font-variant:normal!important;text-transform:none!important;speak:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}[class^=datatable-icon-]:before,[class*=" datatable-icon-"]:before{font-family:"data-table"!important;font-style:normal!important;font-weight:normal!important;font-feature-settings:normal!important;font-variant:normal!important;text-transform:none!important;speak:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.datatable-icon-filter:before{content:"b"}.datatable-icon-collapse:before{content:"a"}.datatable-icon-expand:before{content:"c"}.datatable-icon-close:before{content:"d"}.datatable-icon-up:before{content:"e"}.datatable-icon-down:before{content:"f"}.datatable-icon-sort-unset:before{content:"c";opacity:.5}.datatable-icon-sort:before{content:"g"}.datatable-icon-done:before{content:"h"}.datatable-icon-done-all:before{content:"i"}.datatable-icon-search:before{content:"j"}.datatable-icon-pin:before{content:"k"}.datatable-icon-add:before{content:"m"}.datatable-icon-left:before{content:"o"}.datatable-icon-right:before{content:"p"}.datatable-icon-skip:before{content:"q"}.datatable-icon-prev:before{content:"r"}.ngx-datatable.bootstrap{box-shadow:none;font-size:13px}.ngx-datatable.bootstrap .datatable-header{height:unset!important}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.bootstrap .datatable-body .datatable-body-row{vertical-align:top;border-top:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even{background-color:#0000000d}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active{background-color:#1483ff;color:#fff}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.ngx-datatable.bootstrap .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.ngx-datatable.bootstrap .datatable-footer{background:#424242;color:#ededed;margin-top:-1px}.ngx-datatable.bootstrap .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.bootstrap .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#545454;font-weight:bold}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;vertical-align:top;text-decoration:none;vertical-align:bottom;color:#ededed}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev{font-size:18px;line-height:27px;padding:0 3px}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:bold}.ngx-datatable.bootstrap.core-bootstrap.height-70-vh{height:70vh!important}.ngx-datatable.bootstrap.core-bootstrap .datatable-header{background-color:#f7f7f8}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .datatable-header-cell{border-bottom:0}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row{border-color:#e0e0e0}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.datatable-row-even{background-color:transparent;background-color:initial}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active{background-color:#2f8be6}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active i{color:#fff!important}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell-label .cell-line-height{line-height:1.25}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell{display:flex;align-items:center}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer{background-color:transparent;color:#342e49}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager{display:flex;justify-content:flex-end;align-items:center}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li{margin:0}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a{margin:0}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a,.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:last-child a,.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-child(2) a,.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-last-child(2) a{padding:1.1rem 1.035rem}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a i,.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:last-child a i,.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-child(2) a i,.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-last-child(2) a i{position:absolute;top:.55rem;left:.4rem}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li.disabled a{color:#757575;background-color:#e0e0e0}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled) a{color:#2f8be6}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled) a:hover{background-color:#eee!important;border-color:#e0e0e0}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled).active a{z-index:3;color:#fff;background-color:#2f8be6!important;border-color:#2f8be6;font-weight:inherit}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled):hover a{background-color:#f5f5f5;font-weight:inherit}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li a{position:relative;display:block;padding:1.1rem .75rem;margin:0 0 0 5px;line-height:.1;background-color:#f5f5f5;border:1px solid #E0E0E0;border-radius:.35rem;font-size:15px}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li a i{padding:0}.ngx-datatable.bootstrap.core-bootstrap.header-height-50 .datatable-header{height:50px!important}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev{line-height:24px}@media (max-width: 768px){.page-count{display:none}.datatable-pager{text-align:center!important;margin:0!important}}@media screen and (max-width: 800px){.desktop-hidden{display:inline;display:initial}.mobile-hidden{display:none}}@media screen and (min-width: 800px){.desktop-hidden{display:none}.mobile-hidden{display:inline;display:initial}}html body.layout-dark .datatable-footer .pager li.disabled a{color:#626164}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-header{background-color:#101010}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-body-row{border-color:#474748}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer{color:#b2b1b5}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li.disabled a,html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li a{background-color:#1e1e1e;border-color:#474748}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):hover a{background-color:#1e1e1e}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):not(.active) a:hover{background-color:#1e1e1e!important;border-color:#474748!important}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-header{background-color:#0000001f}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-body-row{border-color:#eee3}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer{color:#d6d5d8}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li.disabled a,html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li a{background-color:#0000001f;border-color:#0000001f}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled) a{color:#d6d5d8}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):hover a{background-color:#0000001f}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):not(.active) a:hover{background-color:#0000001f!important;border-color:#0000001f!important}\n'],encapsulation:2}),t}(),T=r(90610),L=r(67361),S=r(22181),C=[{path:"",component:_,data:{title:"Sub accounts"}}],N=function(){var t=e(function t(){a(this,t)});return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[d.Bz.forChild(C),n.ez,i.xD,L.d,T.IJ,y.A0,h.u5,h.UX,S.mZ,x.n1.forRoot({clearLabel:"Lifetime"})],d.Bz]}),t}()}}])}();