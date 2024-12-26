import{aa as D}from"./chunk-CJWGKX5E.js";import{Db as v,Eb as C,Fa as f,Gb as S,Ka as g,T as I,Tb as M,Ua as t,Ub as T,Va as e,Wa as c,Wb as k,Xa as u,Y as x,Ya as b,Z as h,_a as A,cb as E,eb as d,i as y,jc as B,ob as N,pb as i,qa as r,qb as l,ra as _,rb as O,uc as P,v as w,wc as V}from"./chunk-4DR6TUO5.js";function F(o,m){if(o&1){let n=A();t(0,"tr")(1,"td"),i(2),e(),t(3,"td"),i(4),e(),t(5,"td"),i(6),e(),t(7,"td"),i(8),e(),t(9,"td"),i(10),e(),t(11,"td"),i(12),e(),t(13,"td"),i(14),e(),t(15,"td")(16,"div",28)(17,"button",29),c(18,"i",30),e(),t(19,"ul",31)(20,"li")(21,"a",32),E("click",function(){let s=x(n).$implicit,p=d(2);return h(p.singleCoach(s.id))}),c(22,"i",33),i(23," Details "),e()(),t(24,"li")(25,"a",32),E("click",function(){let s=x(n).$implicit,p=d(2);return h(p.editCoach(s.id))}),c(26,"i",34),i(27," Update "),e()(),t(28,"li")(29,"a",35),c(30,"i",36),i(31," Delete "),e()()()()()()}if(o&2){let n=m.$implicit,a=m.index;r(2),l(a+1),r(2),l(n.name),r(2),l(n.lastname),r(2),l(n.firstname),r(2),l(n.sex),r(2),l(n.phoneNumber),r(2),l(n.email)}}function j(o,m){if(o&1&&(u(0),t(1,"table",25)(2,"thead",26)(3,"tr")(4,"th"),i(5,"N\xB0"),e(),t(6,"th"),i(7,"Name"),e(),t(8,"th"),i(9,"LastName"),e(),t(10,"th"),i(11,"FirstName"),e(),t(12,"th"),i(13,"Sex"),e(),t(14,"th"),i(15,"Phone Number"),e(),t(16,"th"),i(17,"Email"),e(),t(18,"th"),i(19,"Action"),e()()(),t(20,"tbody"),f(21,F,32,7,"tr",27),v(22,"async"),e()(),b()),o&2){let n=d();r(21),g("ngForOf",C(22,1,n.coachTable))}}function L(o,m){if(o&1&&(u(0),t(1,"div",38),i(2),e(),b()),o&2){let n=d(2);r(2),O(" ",n.errorMessage," ")}}function G(o,m){o&1&&(t(0,"div",39),i(1," loading data... "),e())}function U(o,m){if(o&1&&f(0,L,3,1,"ng-container",37)(1,G,2,0,"ng-template",null,1,S),o&2){let n=d();g("ngIf",n.errorMessage)}}var K=(()=>{class o{constructor(n,a){this.service=n,this.route=a}ngOnInit(){this.onGetCoach()}onGetCoach(){this.coachTable=this.service.getCoachs().pipe(w(n=>(this.errorMessage=n.message,y(n))))}singleCoach(n){this.route.navigateByUrl("/coach/single/"+n)}editCoach(n){this.route.navigateByUrl("/coach/update/"+n)}static{this.\u0275fac=function(a){return new(a||o)(_(D),_(B))}}static{this.\u0275cmp=I({type:o,selectors:[["app-abonnement"]],decls:32,vars:4,consts:[["failureOrLoading",""],["Loading",""],[1,"content-header"],[1,"container-fluid","mt-4"],[1,"row","mb-2"],[1,"col-sm-6"],[1,"breadcrumb","float-sm-right"],[1,"breadcrumb-item"],["href","#"],[1,"breadcrumb-item","active"],[1,"content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card","shadow-none",2,"outline","none","border","none"],[1,"card-body"],[1,"d-flex","flex-row","align-items-center","justify-content-center","align-content-center"],["action",""],[1,"d-flex","flex-row","justify-content-center","align-content-center","align-items-center","gap-1","form-search-center"],[1,"btn","btn-search"],[1,"fa-thin","fa-magnifying-glass"],["type","text","name","","id","","placeholder","Search...",1,"form-control","input-search"],[1,"card"],[1,"card-body","table-responsive","p-0","mt-3",2,"height","400px"],[4,"ngIf","ngIfElse"],[1,"table","table-head-fixed"],[1,"thead"],[4,"ngFor","ngForOf"],[1,"dropdown"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-secondary"],[1,"fa-solid","fa-ellipsis"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],[1,"dropdown-item",3,"click"],[1,"fa-thin","fa-eye"],[1,"fa-thin","fa-pen-to-square"],["href","#",1,"dropdown-item"],[1,"fa-thin","fa-trash"],[4,"ngIf"],[1,"text-danger"],[1,"text-center","text-primary"]],template:function(a,s){if(a&1&&(t(0,"section",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"h3"),i(5," GESTION DES ABONNES AVEC ASSISTANCE DU COACH "),e()(),t(6,"div",5)(7,"ol",6)(8,"li",7)(9,"a",8),i(10,"Accueil"),e()(),t(11,"li",9),i(12,"Liste des abonn\xE9s"),e()()()()()(),t(13,"section",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"div",14)(18,"div",15)(19,"div",16)(20,"form",17)(21,"div",18)(22,"button",19),c(23,"i",20),e(),c(24,"input",21),e()()()()(),t(25,"div",22)(26,"div",15)(27,"div",23),f(28,j,23,3,"ng-container",24),v(29,"async"),f(30,U,3,1,"ng-template",null,0,S),e()()()()()()()),a&2){let p=N(31);r(28),g("ngIf",C(29,2,s.coachTable))("ngIfElse",p)}},dependencies:[M,T,V,P,k],styles:[".btn-secondary[_ngcontent-%COMP%]{background-color:#eee6ff;border:none}i[_ngcontent-%COMP%]{color:#000}.btn-search[_ngcontent-%COMP%]{background-color:#1976d2;margin-left:5px;border:none;outline:none;border-radius:50%;height:40px;width:40px;display:flex;flex-direction:row;align-items:center;align-content:center;justify-content:center}.fa-magnifying-glass[_ngcontent-%COMP%]{color:#fff!important}.form-search-center[_ngcontent-%COMP%]{border:none;border-radius:30px;background-color:#f5f5f5;height:50px;width:50rem}.input-search[_ngcontent-%COMP%]{background:none;border:none}"]})}}return o})();export{K as a};
