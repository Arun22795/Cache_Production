(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{OpKh:function(t,n,o){"use strict";o.r(n),o.d(n,"AuthenticationModule",(function(){return x}));var e=o("ofXK"),i=o("tyNb"),r=o("mrSG"),a=o("fXoL"),s=o("5pZN"),d=o("AytR"),c=o("2Vo4"),l=o("N+K7");let b=(()=>{class t{constructor(t){this.httpService=t,this.detectModal$=new c.a("")}setModal(t){this.detectModal$.next(t)}getLoginCredentials(t){return new Promise((n,o)=>{this.httpService.post(d.a.host+"account/"+d.a.apiVersion.login+"login",{email:t.email,password:t.password},!0).toPromise().then(t=>{n(t)}).catch(t=>{o(t)})})}getLoginCredentialsFirst(t){return new Promise((n,o)=>{this.httpService.post(d.a.host+"account/"+d.a.apiVersion.login+"login",{email:t.email,password:t.password,useADAuth:!1},!0).toPromise().then(t=>{n(t)})})}getLoginCredentialsSecond(t){return new Promise((n,o)=>{this.httpService.post(d.a.host+"account/"+d.a.apiVersion.login+"login",{email:t.email,password:t.password,useADAuth:!1},!1).toPromise().then(t=>{n(t)})})}getLoginCredentialsThird(t){return new Promise((n,o)=>{this.httpService.post(d.a.host+"account/"+d.a.apiVersion.login+"login",{email:t.email,password:t.password,useADAuth:!1},!1).toPromise().then(t=>{n(t)})})}}return t.\u0275fac=function(n){return new(n||t)(a.cc(l.a))},t.\u0275prov=a.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=o("3Pt+"),g=o("Ymxs"),m=o("rUYn");const u=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class t{constructor(t,n,o,e,i){this.router=t,this.labelsService=n,this.loginService=o,this.formBuilder=e,this.toasterService=i,this.labels={}}ngOnInit(){this.isLoginRequried=!0,this.labelSubcribe=this.labelsService.getLabelsData().subscribe(t=>{this.labels=t,console.log("Labels",this.labels)}),this.loginForm=this.formBuilder.group({userName:[null],password:[null]})}ngOnChanges(){this.showAlertModal=!1}login(){return Object(r.a)(this,void 0,void 0,(function*(){if(this.isDirty=!0,this.loginForm.invalid)return void this.loginForm.reset();this.inputModal={title:"Login Details",content:"",okLabel:"OK",cancelLabel:"cancel"},console.log(this.loginForm.value);const t={email:this.loginForm.value.userName,password:this.loginForm.value.password,longTermToken:!0};let n;try{n=yield this.loginService.getLoginCredentials(t),console.log("getLoginData",n),n.token&&(localStorage.setItem("token",n.token),localStorage.setItem("loginRequired",""+this.isLoginRequried),this.router.navigate(["/dashboard"]))}catch(o){console.log("Error",o),this.toasterService.showError("User Name & Password mismatching","Login Failed"),this.loginForm.reset(),this.isDirty=!1}}))}okData(){this.showAlertModal=!1}cancelData(){this.showAlertModal=!1}ngOnDestroy(){this.labelSubcribe.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(a.Sb(i.f),a.Sb(s.a),a.Sb(b),a.Sb(p.b),a.Sb(g.a))},t.\u0275cmp=a.Mb({type:t,selectors:[["app-login"]],features:[a.Fb],decls:86,vars:14,consts:[[1,"container"],[1,"row"],[1,"col-lg-6","col-md-6","col-sm-12","col-xs-12"],["src","../../../../assets/image/logo-sample.png",1,"img-wid"],[1,"col-12",3,"formGroup"],[1,"main-content"],[1,"col-12"],["for","username",1,"col-12","mar-top-10","blue_text"],["for","email",1,"col-12","col-form-label"],["formControlName","userName",3,"id","placeHolder","isRequired","isDirty","type"],["for","password",1,"col-12","col-form-label"],["formControlName","password",3,"id","placeHolder","isRequired","isDirty","type"],[1,"col-12","mar-top-30"],["id","",1,"check_btn"],["type","checkbox","id","eye","onclick","if(reg_password.type=='text')reg_password.type='password'; else reg_password.type='text';"],["type","password","id","reg_password","name","reg_password","placeholder","\xa0 \xa0 Forgot Email","ng-model","register_password","readonly","",1,"form-control","input-lg"],["type","text","id","create_new","name","create_new","placeholder","\xa0 \xa0 Create New Account / Register ","ng-model","register_password","readonly","",1,"form-control","input-lg"],[1,"col-md-12","text-center"],["type","submit","data-toggle","modal","data-target","#myModal_newcampaign",1,"btn","btn-blue","submit-btn","m-3","p-2",3,"click"],[1,"col-lg-6","col-md-6","col-sm-12","col-xs-12","second-div"],[1,"row","mar-80"],[1,"square-box"],[1,"img-content"],["src","../../../../assets/image/process.png"],[1,"text-content"],[1,"card-font"],[1,"mar-5"],[1,"grey-font"],["src","../../../../assets/image/customer-insight.png"],["src","../../../../assets/image/artificial-intelligence.png"],["src","../../../../assets/image/headset.png"]],template:function(t,n){1&t&&(a.Yb(0,"div",0),a.Yb(1,"div",1),a.Yb(2,"div",2),a.Tb(3,"img",3),a.Yb(4,"form",4),a.Yb(5,"div",5),a.Yb(6,"div",6),a.Yb(7,"label",7),a.Gc(8,"Use your Twixor Account"),a.Xb(),a.Yb(9,"label",8),a.Gc(10),a.Xb(),a.Yb(11,"div",6),a.Tb(12,"app-custom-input",9),a.Xb(),a.Xb(),a.Yb(13,"div",6),a.Yb(14,"label",10),a.Gc(15),a.Xb(),a.Yb(16,"div",6),a.Tb(17,"app-custom-input",11),a.Xb(),a.Xb(),a.Yb(18,"div",6),a.Yb(19,"div",12),a.Yb(20,"span",13),a.Tb(21,"input",14),a.Xb(),a.Tb(22,"input",15),a.Xb(),a.Xb(),a.Yb(23,"div",6),a.Yb(24,"div",12),a.Yb(25,"span",13),a.Tb(26,"input",14),a.Xb(),a.Tb(27,"input",16),a.Xb(),a.Xb(),a.Yb(28,"div",17),a.Yb(29,"button",18),a.fc("click",(function(){return n.login()})),a.Gc(30),a.Xb(),a.Xb(),a.Xb(),a.Xb(),a.Xb(),a.Yb(31,"div",19),a.Yb(32,"div",20),a.Yb(33,"div",21),a.Yb(34,"div",1),a.Yb(35,"div",22),a.Tb(36,"img",23),a.Xb(),a.Yb(37,"div",24),a.Yb(38,"label",25),a.Gc(39,"Intelligent Process Automation"),a.Xb(),a.Xb(),a.Xb(),a.Yb(40,"div"),a.Tb(41,"hr",26),a.Yb(42,"p",27),a.Gc(43,"Low-Code"),a.Tb(44,"br"),a.Gc(45,"Smart BPM Solutions"),a.Xb(),a.Xb(),a.Xb(),a.Yb(46,"div",21),a.Yb(47,"div",1),a.Yb(48,"div",22),a.Tb(49,"img",28),a.Xb(),a.Yb(50,"div",24),a.Yb(51,"label",25),a.Gc(52,"Hyper Personiliation"),a.Xb(),a.Xb(),a.Xb(),a.Yb(53,"div"),a.Tb(54,"hr",26),a.Yb(55,"p",27),a.Gc(56,"Actionable Conversation"),a.Tb(57,"br"),a.Gc(58,"Dynamic Richards"),a.Xb(),a.Xb(),a.Xb(),a.Yb(59,"div",21),a.Yb(60,"div",1),a.Yb(61,"div",22),a.Tb(62,"img",29),a.Xb(),a.Yb(63,"div",24),a.Yb(64,"label",25),a.Gc(65,"Natural Language Processing"),a.Xb(),a.Xb(),a.Xb(),a.Yb(66,"div"),a.Tb(67,"hr",26),a.Yb(68,"p",27),a.Gc(69,"Intent Fulfilment"),a.Tb(70,"br"),a.Gc(71," End-to-End workflows"),a.Xb(),a.Xb(),a.Xb(),a.Yb(72,"div",21),a.Yb(73,"div",1),a.Yb(74,"div",22),a.Tb(75,"img",30),a.Xb(),a.Yb(76,"div",24),a.Yb(77,"label",25),a.Gc(78,"Cloud Support"),a.Xb(),a.Xb(),a.Xb(),a.Yb(79,"div"),a.Tb(80,"hr",26),a.Yb(81,"p",27),a.Gc(82,"Live Agent"),a.Tb(83,"br"),a.Gc(84,"Real time Support"),a.Xb(),a.Xb(),a.Xb(),a.Xb(),a.Xb(),a.Xb(),a.Xb(),a.Tb(85,"router-outlet")),2&t&&(a.Hb(4),a.oc("formGroup",n.loginForm),a.Hb(6),a.Hc(null==n.labels?null:n.labels.email),a.Hb(2),a.oc("id","email")("placeHolder","E-mail")("isRequired","E-mail is Mandatory")("isDirty",n.isDirty)("type","email"),a.Hb(3),a.Hc(null==n.labels?null:n.labels.password),a.Hb(2),a.oc("id","password")("placeHolder","Password")("isRequired","Password is Mandatory")("isDirty",n.isDirty)("type","password"),a.Hb(13),a.Ic("",null==n.labels?null:n.labels.signIn," "))},directives:[p.q,p.l,p.f,m.a,p.k,p.d,i.h],styles:[".container[_ngcontent-%COMP%]{box-shadow:0 0 5px 2px #ddd;border:1px solid #ddd;border-radius:5px;top:50%;left:50%;transform:translate(-50%,-50%);position:absolute}.mar-auto[_ngcontent-%COMP%]{margin:auto}.mar-top[_ngcontent-%COMP%]{margin-top:40px}.mar-top-30[_ngcontent-%COMP%]{margin-top:30px}.mar-top-10[_ngcontent-%COMP%]{margin-top:10px}.mar-top-30[_ngcontent-%COMP%] > [_ngcontent-%COMP%]::-webkit-input-placeholder{color:#848ddb!important;font-weight:700}.card[_ngcontent-%COMP%], .mar-top-30[_ngcontent-%COMP%] > input[readonly][_ngcontent-%COMP%]{background-color:#f7f8ff;border:none}.card[_ngcontent-%COMP%]{box-shadow:0 0 30px 0 #ddd;margin-top:4px;margin-bottom:4px;padding:3px}.blue_text[_ngcontent-%COMP%]{color:#848ddb;font-weight:700;font-size:18px}.img-wid[_ngcontent-%COMP%]{width:40%}#create_new[_ngcontent-%COMP%], #reg_password[_ngcontent-%COMP%]{border-radius:12px}.text-container[_ngcontent-%COMP%]{display:inline-block;position:relative;overflow:hidden}.check_btn[_ngcontent-%COMP%]{position:absolute;top:8px;height:35px;padding-left:15px}.email_box[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:5px;background-color:#f7f8ff;line-height:1.6rem;margin:15px}.col-form-label[_ngcontent-%COMP%]{padding-left:30px}.main-content[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:10px;width:70%;margin:20px auto 40px}.second-div[_ngcontent-%COMP%]{background:#d0d6ff}.square-box[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ddd;border-radius:10px;width:40%;margin:20px auto;padding:20px;box-shadow:5px 5px 8px 5px #a4a8c6}.square-box[_ngcontent-%COMP%]   .card-font[_ngcontent-%COMP%]{font-weight:700;font-size:12px;color:#000}.grey-font[_ngcontent-%COMP%]{color:#707070;font-size:12px}.login-icon[_ngcontent-%COMP%]{position:relative;top:36px;margin:5px}.btn-fa[_ngcontent-%COMP%]{background-color:#1f7daf;border:none;border-radius:5px;box-shadow:0 0 7px 2px #b4b4b4}.fa-lock[_ngcontent-%COMP%], .fa-user[_ngcontent-%COMP%]{padding:8px;background:#1f7daf;color:#fff}.submit-btn[_ngcontent-%COMP%]{padding:5px 20px;border-radius:25px;width:30%;box-shadow:inset 1px 6px 12px #848ddb,inset -1px -10px 5px #848ddb;background-color:#848ddb;color:#fff;font-weight:700}.submit-btn[_ngcontent-%COMP%]:hover{background-color:#848ddb;box-shadow:none}.img-content[_ngcontent-%COMP%]{width:30%}.img-content[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:90%;padding:0 5px}.text-content[_ngcontent-%COMP%]{width:70%}.mar-5[_ngcontent-%COMP%]{margin:5px}.mar-80[_ngcontent-%COMP%]{margin:80px auto}@media screen and (max-width:600px){.mrg-login[_ngcontent-%COMP%]{margin:10%}.submit-btn[_ngcontent-%COMP%]{width:50%}.main-content[_ngcontent-%COMP%]{width:100%}.blue_text[_ngcontent-%COMP%]{padding:0}.square-box[_ngcontent-%COMP%]{width:80%}.img-content[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:70%;padding:0 5px}}@media screen and (min-width:500px) and (max-width:600px){.card[_ngcontent-%COMP%]{background-color:#f7f8ff;box-shadow:0 0 30px 0 #ddd;border:none;margin:auto}.square-box[_ngcontent-%COMP%]{width:40%}.img-content[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:70%;padding:0 5px}}@media screen and (min-width:769px) and (max-width:900px){.submit-btn[_ngcontent-%COMP%]{width:40%}}@media screen and (min-width:901px) and (max-width:1000px){.submit-btn[_ngcontent-%COMP%]{width:50%}.main-content[_ngcontent-%COMP%]{width:90%}.blue_text[_ngcontent-%COMP%]{padding:0}}"]}),t})(),children:[{path:"fail",component:o("BeUn").a}]}];let h=(()=>{class t{}return t.\u0275mod=a.Qb({type:t}),t.\u0275inj=a.Pb({factory:function(n){return new(n||t)},imports:[[i.g.forChild(u)],i.g]}),t})();var w=o("FpXt");let x=(()=>{class t{}return t.\u0275mod=a.Qb({type:t}),t.\u0275inj=a.Pb({factory:function(n){return new(n||t)},imports:[[e.c,h,p.o,p.g,w.a]]}),t})()}}]);