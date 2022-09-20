!function(){"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var i=0;i<r.length;i++){var t=r[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function i(e,i,t){return i&&r(e.prototype,i),t&&r(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkFanzooma=self.webpackChunkFanzooma||[]).push([[100],{29100:function(r,t,n){n.r(t),n.d(t,{ContentPagesModule:function(){return Te},createTranslateLoader:function(){return Ae}});var o,s=n(12057),a=n(24751),c=n(90610),l=n(79866),u=n(92636),d=n(74788),g=function(){return["/"]},f=((o=function(){function r(){e(this,r)}return i(r,[{key:"ngOnInit",value:function(){}}]),r}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=d.Xpm({type:o,selectors:[["app-not-found"]],decls:14,vars:2,consts:[["id","error"],[1,"container-fluid"],[1,"row","auth-height","full-height-vh"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[1,"row"],[1,"col-12","text-center"],["src","assets/img/gallery/error.png","alt","","height","300","width","400",1,"img-fluid","error-img","mt-2"],[1,"mt-4"],[1,"w-75","error-text","mx-auto","mt-4"],[1,"btn","btn-warning","my-2",3,"routerLink"]],template:function(e,r){1&e&&(d.TgZ(0,"section",0),d.TgZ(1,"div",1),d.TgZ(2,"div",2),d.TgZ(3,"div",3),d.TgZ(4,"div",4),d.TgZ(5,"div",5),d._UZ(6,"img",6),d.TgZ(7,"h1",7),d._uU(8,"404 - Page Not Found!"),d.qZA(),d.TgZ(9,"div",8),d.TgZ(10,"p"),d._uU(11,"The page you are looking for might have beel removed, had it's name changed, or is temporarily unavailable."),d.qZA(),d.qZA(),d.TgZ(12,"a",9),d._uU(13,"Back To Home"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(12),d.Q6J("routerLink",d.DdM(1,g)))},directives:[u.yS],styles:[""]}),o),m=n(79765),p=n(67574),h=n(33637),Z=n(26561);function v(e){var r=e.subscriber,i=e.counter,t=e.period;r.next(i),this.schedule({subscriber:r,counter:i+1,period:t},t)}var b=n(88002),q=n(46782),w=n(16738),A=function(){var r=function(){function r(i){e(this,r),this.cdr=i,this.pickDate=(new Date).setMonth((new Date).getMonth()+2),this.datePipe=new s.uU("en-US"),this.launchDate=this.datePipe.transform(this.pickDate,"yyyy-MM-dd"),this.countdown={weeks:"",days:"",hours:"",minutes:"",seconds:""},this._unsubscribeAll=new m.xQ}return i(r,[{key:"ngOnInit",value:function(){var e=this,r=w(),i=w(this.launchDate).diff(r,"seconds");this.countdown=this.calculateRemainingTime(i),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.P;return(!(0,Z.k)(e)||e<0)&&(e=0),(!r||"function"!=typeof r.schedule)&&(r=h.P),new p.y(function(i){return i.add(r.schedule(v,e,{subscriber:i,counter:0,period:e})),i})}(1e3).pipe((0,b.U)(function(e){return i-=1}),(0,b.U)(function(r){return e.calculateRemainingTime(r)})).pipe((0,q.R)(this._unsubscribeAll)).subscribe(function(r){e.countdown=r,e.cdr.detectChanges()})}},{key:"ngOnDestroy",value:function(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}},{key:"calculateRemainingTime",value:function(e){var r=w.duration(e,"seconds");return{weeks:r.asWeeks().toFixed(0),days:r.asDays().toFixed(0),hours:r.hours(),minutes:r.minutes(),seconds:r.seconds()}}}]),r}();return r.\u0275fac=function(e){return new(e||r)(d.Y36(d.sBO))},r.\u0275cmp=d.Xpm({type:r,selectors:[["app-coming-soon-page"]],decls:44,vars:4,consts:[["id","coming-soon"],[1,"container-fluid"],[1,"row","auth-height","full-height-vh"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[1,"card","card-coming-soon","box-shadow-0","overflow-hidden"],[1,"card-header","text-center","pt-4","pb-3"],["alt","avtar","src","assets/img/gallery/coming-soon.png","width","200",1,"img-fluid"],["id","clockFlat",1,"getting-started","px-sm-2"],[1,"clockCard","d-inline-block","text-center","px-3","px-sm-4","py-3"],[1,"lead","m-0"],[1,"card-content"],[1,"card-body","text-center","pt-1"],[1,"mb-4","mt-2"],[1,"mx-4"],[1,"input-group"],["type","text","placeholder","Email","aria-describedby","coming-soon-subscribe",1,"form-control"],[1,"input-group-append"],["type","button","id","coming-soon-subscribe",1,"btn","btn-primary"],[1,"ft-log-in","d-sm-none","font-medium-2"],[1,"d-none","d-sm-block"]],template:function(e,r){1&e&&(d.TgZ(0,"section",0),d.TgZ(1,"div",1),d.TgZ(2,"div",2),d.TgZ(3,"div",3),d.TgZ(4,"div",4),d.TgZ(5,"div",5),d._UZ(6,"img",6),d.qZA(),d.TgZ(7,"div",7),d.TgZ(8,"div",8),d.TgZ(9,"span"),d._uU(10),d.qZA(),d._UZ(11,"br"),d.TgZ(12,"p",9),d._uU(13,"Days"),d.qZA(),d.qZA(),d.TgZ(14,"div",8),d.TgZ(15,"span"),d._uU(16),d.qZA(),d._UZ(17,"br"),d.TgZ(18,"p",9),d._uU(19,"Hours"),d.qZA(),d.qZA(),d.TgZ(20,"div",8),d.TgZ(21,"span"),d._uU(22),d.qZA(),d._UZ(23,"br"),d.TgZ(24,"p",9),d._uU(25,"Minutes"),d.qZA(),d.qZA(),d.TgZ(26,"div",8),d.TgZ(27,"span"),d._uU(28),d.qZA(),d._UZ(29,"br"),d.TgZ(30,"p",9),d._uU(31,"Seconds"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(32,"div",10),d.TgZ(33,"div",11),d.TgZ(34,"h2",12),d._uU(35,"We Are Launching Soon."),d.qZA(),d.TgZ(36,"div",13),d.TgZ(37,"div",14),d._UZ(38,"input",15),d.TgZ(39,"div",16),d.TgZ(40,"button",17),d._UZ(41,"i",18),d.TgZ(42,"span",19),d._uU(43,"Subscribe"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(10),d.Oqu(r.countdown.days),d.xp6(6),d.Oqu(r.countdown.hours),d.xp6(6),d.Oqu(r.countdown.minutes),d.xp6(6),d.Oqu(r.countdown.seconds))},styles:[""],changeDetection:0}),r}(),T=n(67083),y=n(91376),x=["f"];function k(e,r){if(1&e&&(d.TgZ(0,"li"),d._uU(1),d.qZA()),2&e){var i=r.$implicit;d.xp6(1),d.hij(" ",i," ")}}function _(e,r){if(1&e&&(d.TgZ(0,"ul",23),d.YNc(1,k,2,1,"li",24),d.qZA()),2&e){var i=d.oxw();d.xp6(1),d.Q6J("ngForOf",i.finalsuccess)}}function F(e,r){if(1&e&&(d.TgZ(0,"li"),d._uU(1),d.qZA()),2&e){var i=r.$implicit;d.xp6(1),d.hij(" ",i," ")}}function U(e,r){if(1&e&&(d.TgZ(0,"ul",25),d.YNc(1,F,2,1,"li",24),d.qZA()),2&e){var i=d.oxw();d.xp6(1),d.Q6J("ngForOf",i.finalerror)}}function S(e,r){1&e&&(d.TgZ(0,"div",26),d._uU(1," Email is required. "),d.qZA())}function I(e,r){1&e&&(d.TgZ(0,"div",26),d._uU(1," Invalid Email."),d.qZA())}function J(e,r){1&e&&(d.TgZ(0,"div",26),d._UZ(1,"i",27),d._uU(2," Please verify you're not robot. "),d.qZA())}function Y(e,r){1&e&&d._UZ(0,"i",28)}var Q=function(e,r){return{"is-invalid":e,"is-valid":r}},L=function(){return["/login"]},N=function(){var r=function(){function r(i,t,n,o,s,a,c,l){e(this,r),this.router=i,this.location=t,this.locationStrategy=n,this.route=o,this.fb=s,this.authService=a,this.toastr=c,this.cd=l,this.forgotpasswordFormSubmitted=!1,this.isforgotpasswordFailed=!1,this.unsubscribe=[],this.finalerror=[],this.finalsuccess=[],this.isLoading$=this.authService.isLoading$}return i(r,[{key:"ngOnInit",value:function(){this.initForm()}},{key:"initForm",value:function(){this.forgotpassword=this.fb.group({email:["",[a.kI.required,a.kI.email]],token:["",[a.kI.required]]})}},{key:"lf",get:function(){return this.forgotpassword.controls}},{key:"onSubmit",value:function(){var e=this;if(this.forgotpasswordFormSubmitted=!0,!this.forgotpassword.invalid){var r=this.authService.forgotpassword({email:this.lf.email.value,url:location.origin+"/reset-password/"}).subscribe(function(r){e.forgotpasswordFormSubmitted=!1,e.finalerror=[],e.finalsuccess.push(r.message),e.forgotpassword.reset()},function(r){if(e.finalerror=[],422===r.status){if(r.error.errors){var i=r.error.errors;for(var t in i)void 0!==i[t]&&e.finalerror.push(t+" : "+i[t].message)}e.toastr.error(r.error.message,"Error",{positionClass:"toast-top-right"})}else e.finalerror.push(r.error.message);e.cd.markForCheck()});this.unsubscribe.push(r)}}}]),r}();return r.\u0275fac=function(e){return new(e||r)(d.Y36(u.F0),d.Y36(s.Ye),d.Y36(s.S$),d.Y36(u.gz),d.Y36(a.qu),d.Y36(T.e),d.Y36(y._W),d.Y36(d.sBO))},r.\u0275cmp=d.Xpm({type:r,selectors:[["app-forgot-password-page"]],viewQuery:function(e,r){var i;(1&e&&d.Gf(x,5),2&e)&&(d.iGM(i=d.CRH())&&(r.forogtPasswordForm=i.first))},decls:31,vars:15,consts:[[3,"formGroup","ngSubmit"],["id","forgot-password"],[1,"row","auth-height","full-height-vh","m-0","d-flex","align-items-center","justify-content-center"],[1,"col-md-7","col-12"],[1,"card","overflow-hidden"],[1,"card-content"],[1,"card-body","auth-img"],[1,"row","m-0"],[1,"col-lg-6","d-none","d-lg-flex","justify-content-center","align-items-center","text-center","auth-img-bg","py-2"],["src","assets/img/gallery/forgot.png","alt","","width","260","height","230",1,"img-fluid"],[1,"col-lg-6","col-md-12","px-4","py-3"],[1,"mb-2","card-title"],[1,"card-text","mb-3"],["class","successclass",4,"ngIf"],["class","errorsclass",4,"ngIf"],[1,"form-group"],["type","text","formControlName","email","placeholder","email","required","",1,"form-control",3,"ngClass"],["class","help-block mt-1 text-danger",4,"ngIf"],["formControlName","token"],[1,"d-flex","flex-sm-row","flex-column","justify-content-between"],[1,"btn","bg-light-primary","mb-2","mb-sm-0",3,"routerLink"],[1,"btn","btn-primary","ml-sm-1"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"successclass"],[4,"ngFor","ngForOf"],[1,"errorsclass"],[1,"help-block","mt-1","text-danger"],[1,"ft-alert-circle","align-middle"],[1,"fa","fa-spinner","fa-spin"]],template:function(e,r){1&e&&(d.TgZ(0,"form",0),d.NdJ("ngSubmit",function(){return r.onSubmit()}),d.TgZ(1,"section",1),d.TgZ(2,"div",2),d.TgZ(3,"div",3),d.TgZ(4,"div",4),d.TgZ(5,"div",5),d.TgZ(6,"div",6),d.TgZ(7,"div",7),d.TgZ(8,"div",8),d._UZ(9,"img",9),d.qZA(),d.TgZ(10,"div",10),d.TgZ(11,"h4",11),d._uU(12,"Recover Password"),d.qZA(),d.TgZ(13,"p",12),d._uU(14,"Please enter your email address and we'll send you instructions on how to reset your password."),d.qZA(),d.YNc(15,_,2,1,"ul",13),d.YNc(16,U,2,1,"ul",14),d.TgZ(17,"div",15),d._UZ(18,"input",16),d.YNc(19,S,2,0,"div",17),d.YNc(20,I,2,0,"div",17),d.qZA(),d.TgZ(21,"div",15),d._UZ(22,"re-captcha",18),d.YNc(23,J,3,0,"div",17),d.qZA(),d.TgZ(24,"div",19),d.TgZ(25,"a",20),d._uU(26,"Back To Login"),d.qZA(),d.TgZ(27,"button",21),d._uU(28,"Recover "),d.YNc(29,Y,1,0,"i",22),d.ALo(30,"async"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.Q6J("formGroup",r.forgotpassword),d.xp6(15),d.Q6J("ngIf",r.finalsuccess),d.xp6(1),d.Q6J("ngIf",r.finalerror),d.xp6(2),d.Q6J("ngClass",d.WLB(11,Q,r.forgotpasswordFormSubmitted&&r.lf.email.invalid,r.forgotpasswordFormSubmitted&&!r.lf.email.invalid)),d.xp6(1),d.Q6J("ngIf",r.forgotpasswordFormSubmitted&&(null==r.lf.email.errors?null:r.lf.email.errors.required)),d.xp6(1),d.Q6J("ngIf",r.forgotpasswordFormSubmitted&&(null==r.lf.email.errors?null:r.lf.email.errors.email)),d.xp6(3),d.Q6J("ngIf",r.forgotpasswordFormSubmitted&&(r.lf.token.invalid||(null==r.lf.token.errors?null:r.lf.token.errors.required))),d.xp6(2),d.Q6J("routerLink",d.DdM(14,L)),d.xp6(4),d.Q6J("ngIf",d.lcZ(30,9,r.isLoading$)))},directives:[a._Y,a.JL,a.sg,s.O5,a.Fj,a.JJ,a.u,a.Q7,s.mk,u.yS,s.sg],pipes:[s.Ov],styles:[""]}),r}(),C=["f"],E=function(){return["/dashboard/dashboard1"]},O=function(){var r=function(){function r(){e(this,r)}return i(r,[{key:"onSubmit",value:function(){this.lockScreenForm.reset()}}]),r}();return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=d.Xpm({type:r,selectors:[["app-lock-screen-page"]],viewQuery:function(e,r){var i;(1&e&&d.Gf(C,5),2&e)&&(d.iGM(i=d.CRH())&&(r.lockScreenForm=i.first))},decls:18,vars:2,consts:[["id","lock-screen"],[1,"row","auth-height","full-height-vh","m-0"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[1,"card","overflow-hidden"],[1,"card-content"],[1,"card-body","auth-img"],[1,"row","m-0"],[1,"col-lg-6","d-lg-flex","justify-content-center","align-items-center","d-none","text-center","auth-img-bg","p-3"],["src","assets/img/gallery/lock.png","alt","","height","230","width","280",1,"img-fluid"],[1,"col-lg-6","col-md-12","py-3","px-4"],[1,"card-title","mb-3"],["type","email","placeholder","Email",1,"form-control","mb-2"],["type","password","placeholder","Password",1,"form-control","mb-2"],["href","javascript:;"],[1,"btn","btn-block","btn-primary","mt-2",3,"routerLink"]],template:function(e,r){1&e&&(d.TgZ(0,"section",0),d.TgZ(1,"div",1),d.TgZ(2,"div",2),d.TgZ(3,"div",3),d.TgZ(4,"div",4),d.TgZ(5,"div",5),d.TgZ(6,"div",6),d.TgZ(7,"div",7),d._UZ(8,"img",8),d.qZA(),d.TgZ(9,"div",9),d.TgZ(10,"h4",10),d._uU(11,"Your Session is Locked"),d.qZA(),d._UZ(12,"input",11),d._UZ(13,"input",12),d.TgZ(14,"a",13),d._uU(15,"Are You Not John Doe ?"),d.qZA(),d.TgZ(16,"a",14),d._uU(17,"Unlock"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(16),d.Q6J("routerLink",d.DdM(1,E)))},directives:[u.yS],styles:[""]}),r}(),P=n(27452),j=n(28049);function M(e,r){if(1&e&&(d.TgZ(0,"p",25),d._uU(1),d.qZA()),2&e){var i=r.$implicit;d.xp6(1),d.hij(" ",i," ")}}function B(e,r){if(1&e){var i=d.EpF();d.TgZ(0,"ngb-alert",23),d.NdJ("closed",function(){return d.CHM(i),d.oxw().serverErrors.resetErrors()}),d.YNc(1,M,2,1,"p",24),d.qZA()}if(2&e){var t=d.oxw();d.xp6(1),d.Q6J("ngForOf",t.serverErrors.errors)}}function D(e,r){1&e&&(d.TgZ(0,"div",26),d._UZ(1,"i",27),d._uU(2,"Email is required. "),d.qZA())}function $(e,r){1&e&&(d.TgZ(0,"div",26),d._UZ(1,"i",27),d._uU(2," Invalid Email. "),d.qZA())}function W(e,r){if(1&e){var i=d.EpF();d.TgZ(0,"span",28),d.NdJ("click",function(){d.CHM(i);var e=d.oxw();return e.hide=!e.hide}),d.qZA()}}function R(e,r){if(1&e){var i=d.EpF();d.TgZ(0,"span",29),d.NdJ("click",function(){d.CHM(i);var e=d.oxw();return e.hide=!e.hide}),d.qZA()}}function G(e,r){1&e&&(d.TgZ(0,"div",26),d._UZ(1,"i",27),d._uU(2," This is required "),d.qZA())}function H(e,r){1&e&&d._UZ(0,"i",30)}var z=function(e,r){return{"is-invalid":e,"is-valid":r}},X=function(){var r=function(){function r(i,t,n,o,s,a){e(this,r),this.router=i,this.authService=t,this.route=n,this.fb=o,this.toastr=s,this.cdr=a,this.isLoginFailed=!1,this.loginFormSubmitted=!1,this.serverErrors=new P.Z,this.hide=!0,this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/dashboard"])}return i(r,[{key:"ngOnInit",value:function(){this.initForm()}},{key:"initForm",value:function(){this.loginForm=this.fb.group({email:["",[a.kI.required,a.kI.email]],password:["",[a.kI.required]]})}},{key:"lf",get:function(){return this.loginForm.controls}},{key:"onSubmit",value:function(){var e=this;this.loginFormSubmitted=!0,this.loginForm.invalid||(this.serverErrors.resetErrors(),this.authService.login({email:this.lf.email.value,password:this.lf.password.value}).pipe((0,j.P)()).subscribe(function(r){console.log("In submit"),e.router.navigate(["/dashboard"])},function(r){console.log("In errors");var i=r.error,t=i.errors,n=i.message;e.serverErrors.errors=t,e.isLoginFailed=!0,e.toastr.error(n,"Error!")}))}}]),r}();return r.\u0275fac=function(e){return new(e||r)(d.Y36(u.F0),d.Y36(T.e),d.Y36(u.gz),d.Y36(a.qu),d.Y36(y._W),d.Y36(d.sBO))},r.\u0275cmp=d.Xpm({type:r,selectors:[["app-login-page"]],decls:30,vars:19,consts:[["id","login"],[1,"row","auth-height","full-height-vh","m-0"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[1,"card","overflow-hidden"],[1,"card-content"],[1,"card-body","auth-img"],[1,"row","m-0"],[1,"col-lg-6","d-none","d-lg-flex","justify-content-center","align-items-center","auth-img-bg","p-0"],["src","assets/img/gallery/login.png","alt","",1,"img-fluid"],[1,"col-lg-6","col-12","px-3","py-5"],[1,"mb-2","card-title"],["type","light-danger","class","mb-2",3,"closed",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","formControlName","email","placeholder","Email","required","",1,"form-control",3,"ngClass"],["class","help-block mt-1 text-danger",4,"ngIf"],[1,"form-group","relative"],["formControlName","password","placeholder","Password","required","",1,"form-control",3,"type","ngClass"],["class","fa fa-eye set_eye_icon",3,"click",4,"ngIf"],["class","fa fa-eye-slash set_eye_icon",3,"click",4,"ngIf"],[1,"d-flex","justify-content-between","flex-sm-row","flex-column"],["type","submit",1,"btn","btn-primary"],["class","fa fa-spinner fa-spin",4,"ngIf"],["type","light-danger",1,"mb-2",3,"closed"],["class","mb-0",4,"ngFor","ngForOf"],[1,"mb-0"],[1,"help-block","mt-1","text-danger"],[1,"ft-alert-circle","align-middle"],[1,"fa","fa-eye","set_eye_icon",3,"click"],[1,"fa","fa-eye-slash","set_eye_icon",3,"click"],[1,"fa","fa-spinner","fa-spin"]],template:function(e,r){1&e&&(d.TgZ(0,"section",0),d.TgZ(1,"div",1),d.TgZ(2,"div",2),d.TgZ(3,"div",3),d.TgZ(4,"div",4),d.TgZ(5,"div",5),d.TgZ(6,"div",6),d.TgZ(7,"div",7),d._UZ(8,"img",8),d.qZA(),d.TgZ(9,"div",9),d.TgZ(10,"h4",10),d._uU(11,"Login"),d.qZA(),d.TgZ(12,"p"),d._uU(13,"Welcome back, please login to your account."),d.qZA(),d.YNc(14,B,2,1,"ngb-alert",11),d.TgZ(15,"form",12),d.NdJ("ngSubmit",function(){return r.onSubmit()}),d.TgZ(16,"div",13),d._UZ(17,"input",14),d.YNc(18,D,3,0,"div",15),d.YNc(19,$,3,0,"div",15),d.qZA(),d.TgZ(20,"div",16),d._UZ(21,"input",17),d.YNc(22,W,1,0,"span",18),d.YNc(23,R,1,0,"span",19),d.YNc(24,G,3,0,"div",15),d.qZA(),d.TgZ(25,"div",20),d.TgZ(26,"button",21),d._uU(27," Login "),d.YNc(28,H,1,0,"i",22),d.ALo(29,"async"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(14),d.Q6J("ngIf",r.serverErrors.hasError),d.xp6(1),d.Q6J("formGroup",r.loginForm),d.xp6(2),d.Q6J("ngClass",d.WLB(13,z,r.loginFormSubmitted&&r.lf.email.invalid,r.loginFormSubmitted&&!r.lf.email.invalid)),d.xp6(1),d.Q6J("ngIf",r.loginFormSubmitted&&(null==r.lf.email.errors?null:r.lf.email.errors.required)),d.xp6(1),d.Q6J("ngIf",r.loginFormSubmitted&&(null==r.lf.email.errors?null:r.lf.email.errors.email)),d.xp6(2),d.Q6J("type",r.hide?"password":"text")("ngClass",d.WLB(16,z,r.loginFormSubmitted&&r.lf.password.invalid,r.loginFormSubmitted&&!r.lf.password.invalid)),d.xp6(1),d.Q6J("ngIf",r.hide),d.xp6(1),d.Q6J("ngIf",!r.hide),d.xp6(1),d.Q6J("ngIf",r.loginFormSubmitted&&(r.lf.password.invalid||(null==r.lf.password.errors?null:r.lf.password.errors.required))),d.xp6(4),d.Q6J("ngIf",d.lcZ(29,11,r.isLoading$)))},directives:[s.O5,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,a.Q7,s.mk,c.xm,s.sg],pipes:[s.Ov],styles:[".alert-light-danger[_ngcontent-%COMP%]{background-color:#feefd0!important;color:#f55252!important;border-color:#feefd0}"]}),r}(),V=function(){return["/"]},K=function(){var r=i(function r(){e(this,r)});return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=d.Xpm({type:r,selectors:[["app-maintenance-page"]],decls:14,vars:2,consts:[["id","maintenance"],[1,"container-fluid"],[1,"row","auth-height","full-height-vh"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[1,"row"],[1,"col-12","text-center"],["src","assets/img/gallery/maintenance.png","alt","","height","300","width","300",1,"img-fluid","maintenance-img","mt-2"],[1,"mt-4"],[1,"maintenance-text","w-75","mx-auto","mt-4"],[1,"btn","btn-warning","my-2",3,"routerLink"]],template:function(e,r){1&e&&(d.TgZ(0,"section",0),d.TgZ(1,"div",1),d.TgZ(2,"div",2),d.TgZ(3,"div",3),d.TgZ(4,"div",4),d.TgZ(5,"div",5),d._UZ(6,"img",6),d.TgZ(7,"h1",7),d._uU(8,"Under Maintenance!"),d.qZA(),d.TgZ(9,"div",8),d.TgZ(10,"p"),d._uU(11,"Ice cream caramels lemon drops candy. Cake toffee topping cookie tart wafer gummies. Sweet gummi bears jujubes bonbon gingerbread apple pie marshmallow."),d.qZA(),d.qZA(),d.TgZ(12,"a",9),d._uU(13,"Back To Home"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(12),d.Q6J("routerLink",d.DdM(1,V)))},directives:[u.yS],styles:[""]}),r}();function ee(e,r){1&e&&(d.TgZ(0,"div",2),d._UZ(1,"img",3),d.qZA())}var re=function(){return["/"]};function ie(e,r){1&e&&(d.TgZ(0,"section",6),d.TgZ(1,"div",7),d.TgZ(2,"div",8),d.TgZ(3,"div",9),d.TgZ(4,"div",10),d.TgZ(5,"div",11),d._UZ(6,"img",12),d.TgZ(7,"h1",13),d._uU(8,"Your reset password link is expired."),d.qZA(),d.TgZ(9,"div",14),d.TgZ(10,"p"),d._uU(11,"Either your link is expired or you've already changed your password with this link."),d.qZA(),d.qZA(),d.TgZ(12,"a",15),d._uU(13,"Back To Home"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(12),d.Q6J("routerLink",d.DdM(1,re)))}function te(e,r){if(1&e&&(d.TgZ(0,"li"),d._uU(1),d.qZA()),2&e){var i=r.$implicit;d.xp6(1),d.hij(" ",i," ")}}function ne(e,r){if(1&e&&(d.TgZ(0,"ul",37),d.YNc(1,te,2,1,"li",38),d.qZA()),2&e){var i=d.oxw(3);d.xp6(1),d.Q6J("ngForOf",i.finalsuccess)}}function oe(e,r){if(1&e&&(d.TgZ(0,"li"),d._uU(1),d.qZA()),2&e){var i=r.$implicit;d.xp6(1),d.hij(" ",i," ")}}function se(e,r){if(1&e&&(d.TgZ(0,"ul",39),d.YNc(1,oe,2,1,"li",38),d.qZA()),2&e){var i=d.oxw(3);d.xp6(1),d.Q6J("ngForOf",i.finalerror)}}function ae(e,r){1&e&&(d.TgZ(0,"div",40),d.TgZ(1,"span"),d._uU(2,"Password is required"),d.qZA(),d.qZA())}function ce(e,r){1&e&&(d.TgZ(0,"div",40),d.TgZ(1,"span"),d._uU(2,"password should be minimum 6 characters."),d.qZA(),d.qZA())}function le(e,r){1&e&&(d.TgZ(0,"div",40),d.TgZ(1,"span"),d._uU(2,"Passwords do not match."),d.qZA(),d.qZA())}function ue(e,r){1&e&&(d.TgZ(0,"div",40),d.TgZ(1,"span"),d._uU(2,"Password is required"),d.qZA(),d.qZA())}function de(e,r){1&e&&d._UZ(0,"i",41)}var ge=function(e,r){return{"is-invalid":e,"is-valid":r}},fe=function(e){return{"is-invalid":e}},me=function(){return["/login"]};function pe(e,r){if(1&e){var i=d.EpF();d.TgZ(0,"section",16),d.TgZ(1,"div",17),d.TgZ(2,"div",9),d.TgZ(3,"div",18),d.TgZ(4,"div",19),d.TgZ(5,"div",20),d.TgZ(6,"div",21),d.TgZ(7,"div",22),d._UZ(8,"img",23),d.qZA(),d.TgZ(9,"div",24),d.TgZ(10,"h4",25),d._uU(11,"Reset Password"),d.qZA(),d.TgZ(12,"p"),d._uU(13,"Please enter your password and confirm password."),d.qZA(),d.YNc(14,ne,2,1,"ul",26),d.YNc(15,se,2,1,"ul",27),d.TgZ(16,"form",28),d.NdJ("ngSubmit",function(){return d.CHM(i),d.oxw(2).onSubmit()}),d.TgZ(17,"div",29),d._UZ(18,"input",30),d.YNc(19,ae,3,0,"div",31),d.YNc(20,ce,3,0,"div",31),d.qZA(),d.TgZ(21,"div",29),d._UZ(22,"input",32),d.YNc(23,le,3,0,"div",31),d.YNc(24,ue,3,0,"div",31),d.qZA(),d.TgZ(25,"div",33),d.TgZ(26,"a",34),d._uU(27,"Back To Login"),d.qZA(),d.TgZ(28,"button",35),d._uU(29,"Reset "),d.YNc(30,de,1,0,"i",36),d.ALo(31,"async"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()}if(2&e){var t=d.oxw(2);d.xp6(14),d.Q6J("ngIf",t.finalsuccess),d.xp6(1),d.Q6J("ngIf",t.finalerror),d.xp6(1),d.Q6J("formGroup",t.resetForm),d.xp6(2),d.Q6J("ngClass",d.WLB(14,ge,t.resetFormSubmitted&&t.lf.password.invalid,t.resetFormSubmitted&&!t.lf.password.invalid)),d.xp6(1),d.Q6J("ngIf",t.resetFormSubmitted&&t.resetForm.get("password").errors&&t.resetForm.get("password").hasError("required")),d.xp6(1),d.Q6J("ngIf",t.resetFormSubmitted&&t.resetForm.get("password").errors&&t.resetForm.get("password").hasError("minlength")),d.xp6(2),d.Q6J("ngClass",d.VKq(17,fe,t.resetFormSubmitted&&t.resetForm.hasError("notSame")))("ngClass",d.WLB(19,ge,t.resetFormSubmitted&&t.lf.confirm_password.invalid,t.resetFormSubmitted&&!t.lf.confirm_password.invalid)),d.xp6(1),d.Q6J("ngIf",t.resetFormSubmitted&&t.resetForm.hasError("notSame")),d.xp6(1),d.Q6J("ngIf",t.resetFormSubmitted&&t.resetForm.get("confirm_password").errors&&t.resetForm.get("confirm_password").hasError("required")),d.xp6(2),d.Q6J("routerLink",d.DdM(22,me)),d.xp6(4),d.Q6J("ngIf",d.lcZ(31,12,t.isLoading$))}}function he(e,r){if(1&e&&(d.YNc(0,ie,14,2,"section",4),d.YNc(1,pe,32,23,"section",5)),2&e){var i=d.oxw();d.Q6J("ngIf",i.pagehaserror),d.xp6(1),d.Q6J("ngIf",!i.pagehaserror)}}var Ze=[{path:"",children:[{path:"comingsoon",component:A,data:{title:"Coming Soon page"}},{path:"forgotpassword",component:N,data:{title:"Forgot Password"}},{path:"reset-password/:token",component:function(){var r=function(){function r(i,t,n,o,s,a){e(this,r),this.router=i,this.authService=t,this.route=n,this.fb=o,this.toastr=s,this.cd=a,this.resetFormSubmitted=!1,this.isresetFailed=!1,this.unsubscribe=[],this.finalerror=[],this.finalsuccess=[],this.pagehaserror=!1,this.loading=!0,this.checkPasswords=function(e){return e.get("password").value===e.get("confirm_password").value?null:{notSame:!0}},this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/dashboard"])}return i(r,[{key:"ngOnInit",value:function(){var e=this;this.route.params.subscribe(function(r){e.token=r.token}),this.checktokenisvalid(),this.initForm()}},{key:"checktokenisvalid",value:function(){var e=this;this.authService.checktokenisvalid({reset_password_code:this.token}).pipe((0,j.P)()).subscribe(function(r){e.pagehaserror=!1,e.loading=!1,e.cd.markForCheck()},function(r){e.pagehaserror=!0,e.loading=!1,e.cd.markForCheck()})}},{key:"initForm",value:function(){this.resetForm=this.fb.group({password:["",[a.kI.minLength(6),a.kI.required]],confirm_password:["",a.kI.required]},{validator:this.checkPasswords})}},{key:"lf",get:function(){return this.resetForm.controls}},{key:"onSubmit",value:function(){var e=this;if(this.resetFormSubmitted=!0,!this.resetForm.invalid){var r=this.authService.resetpassword({password:this.lf.password.value,confirm_password:this.lf.confirm_password.value,reset_password_code:this.token}).pipe((0,j.P)()).subscribe(function(r){e.resetFormSubmitted=!1,e.finalerror=[],e.finalsuccess.push(r.message),e.resetForm.reset()},function(r){if(e.finalerror=[],422===r.status){if(r.error.errors){var i=r.error.errors;for(var t in i)void 0!==i[t]&&e.finalerror.push(i[t].message)}e.toastr.error(r.error.message,"Error",{positionClass:"toast-top-right"})}else e.finalerror.push(r.error.message);e.cd.markForCheck()});this.unsubscribe.push(r)}}}]),r}();return r.\u0275fac=function(e){return new(e||r)(d.Y36(u.F0),d.Y36(T.e),d.Y36(u.gz),d.Y36(a.qu),d.Y36(y._W),d.Y36(d.sBO))},r.\u0275cmp=d.Xpm({type:r,selectors:[["app-reset-password"]],decls:3,vars:2,consts:[["class","ddpage-loading",4,"ngIf","ngIfElse"],["loaded",""],[1,"ddpage-loading"],["src","assets/img/oval.svg",1,"ddloading-icon"],["id","error",4,"ngIf"],["id","login",4,"ngIf"],["id","error"],[1,"container-fluid"],[1,"row","auth-height","full-height-vh"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[1,"row"],[1,"col-12","text-center"],["src","assets/img/gallery/error.png","alt","","height","300","width","400",1,"img-fluid","error-img","mt-2"],[1,"mt-4"],[1,"w-75","error-text","mx-auto","mt-4"],[1,"btn","btn-warning","my-2",3,"routerLink"],["id","login"],[1,"row","auth-height","full-height-vh","m-0"],[1,"card","overflow-hidden"],[1,"card-content"],[1,"card-body","auth-img"],[1,"row","m-0"],[1,"col-lg-6","d-none","d-lg-flex","justify-content-center","align-items-center","auth-img-bg","p-3"],["src","assets/img/gallery/login.png","alt","","width","300","height","230",1,"img-fluid"],[1,"col-lg-6","col-12","px-4","py-3"],[1,"mb-2","card-title"],["class","successclass",4,"ngIf"],["class","errorsclass",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","password","formControlName","password","placeholder","Password","required","",1,"form-control",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","password","formControlName","confirm_password","placeholder","Confirm Password",1,"form-control",3,"ngClass"],[1,"d-flex","flex-sm-row","flex-column","justify-content-between"],[1,"btn","bg-light-primary","mb-2","mb-sm-0",3,"routerLink"],[1,"btn","btn-primary","ml-sm-1"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"successclass"],[4,"ngFor","ngForOf"],[1,"errorsclass"],[1,"text-danger"],[1,"fa","fa-spinner","fa-spin"]],template:function(e,r){if(1&e&&(d.YNc(0,ee,2,0,"div",0),d.YNc(1,he,2,2,"ng-template",null,1,d.W1O)),2&e){var i=d.MAs(2);d.Q6J("ngIf",r.loading)("ngIfElse",i)}},directives:[s.O5,u.yS,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,a.Q7,s.mk,s.sg],pipes:[s.Ov],styles:[""]}),r}(),data:{title:"Reset Password"}},{path:"lockscreen",component:O,data:{title:"Lock Screen page"}},{path:"login",component:X,data:{title:"Login Page"}},{path:"maintenance",component:K,data:{title:"Maintenance Page"}},{path:"**",component:f,data:{title:"Error Page"}}]}],ve=function(){var r=i(function r(){e(this,r)});return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=d.oAB({type:r}),r.\u0275inj=d.cJS({imports:[[u.Bz.forChild(Ze)],u.Bz]}),r}(),be=n(75629),qe=n(58497),we=n(93555);function Ae(e){return new we.w(e,"./assets/i18n/",".json")}var Te=function(){var r=i(function r(){e(this,r)});return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=d.oAB({type:r}),r.\u0275inj=d.cJS({imports:[[s.ez,ve,a.u5,a.UX,c.IJ,be.aw.forChild({loader:{provide:be.Zw,useFactory:Ae,deps:[qe.eN]}}),l.ef]]}),r}()}}])}();