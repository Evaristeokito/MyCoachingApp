import{Ab as ue,Bb as q,Cb as _e,F as Me,Fa as v,G as b,Ga as ce,Gb as A,Hb as Pe,I as Se,Ia as de,J as ae,Ja as O,Ka as N,M as F,Ma as E,N as l,Na as j,O as Oe,Pa as H,Pb as Z,Q as r,Qa as Ee,Qb as X,Sa as Re,T as U,Ta as Ie,U as c,Ua as f,V as S,Va as g,Vb as Be,W as re,X as Ne,Y as P,Z as B,_a as V,b as ve,bb as z,c as y,ca as L,cb as G,da as Q,ea as J,eb as u,fb as Ae,g as De,gb as ke,h as ne,hb as R,ia as le,ib as Fe,j as se,jb as T,kb as M,o as w,ob as I,p as we,pb as he,qa as h,qb as xe,r as Y,s as Ce,t as W,ta as C,x as oe,yb as K,z as Te}from"./chunk-4DR6TUO5.js";import{a as ie,b as ye}from"./chunk-EQDQRRRY.js";var ct=["*"];var dt=["dialog"];var ht=(e,s,t)=>({$implicit:e,pages:s,disabled:t}),ut=e=>({disabled:!0,currentPage:e}),_t=(e,s,t)=>({disabled:e,$implicit:s,currentPage:t}),me=(e,s)=>({disabled:e,currentPage:s}),pt=e=>({disabled:e});function ft(e,s){e&1&&(f(0,"span",13),z(1,7),g())}function gt(e,s){e&1&&(f(0,"span",13),z(1,8),g())}function mt(e,s){e&1&&(f(0,"span",13),z(1,9),g())}function bt(e,s){e&1&&(f(0,"span",13),z(1,10),g())}function yt(e,s){e&1&&he(0,"...")}function vt(e,s){if(e&1&&he(0),e&2){let t=s.$implicit;xe(t)}}function Dt(e,s){}function wt(e,s){if(e&1&&(f(0,"a",16),v(1,Dt,0,0,"ng-template",12),g()),e&2){let t=u(2).$implicit,i=u(),n=I(9);h(),N("ngTemplateOutlet",(i.tplEllipsis==null?null:i.tplEllipsis.templateRef)||n)("ngTemplateOutletContext",ue(2,ut,t))}}function Ct(e,s){}function Tt(e,s){if(e&1){let t=V();f(0,"a",18),G("click",function(n){P(t);let o=u().$implicit;return u(2).selectPage(o),B(n.preventDefault())}),v(1,Ct,0,0,"ng-template",12),g()}if(e&2){let t=u().$implicit,i=u(),n=i.$implicit,o=i.disabled,a=u(),d=I(11);O("tabindex",o?"-1":null)("aria-disabled",o?"true":null),h(),N("ngTemplateOutlet",(a.tplNumber==null?null:a.tplNumber.templateRef)||d)("ngTemplateOutletContext",_e(4,_t,o,t,n))}}function Mt(e,s){if(e&1&&(f(0,"li",15),v(1,wt,2,4,"a",16)(2,Tt,2,8,"a",17),g()),e&2){let t=s.$implicit,i=u(),n=i.$implicit,o=i.disabled,a=u();E("active",t===n)("disabled",a.isEllipsis(t)||o),O("aria-current",t===n?"page":null),h(),H(a.isEllipsis(t)?1:2)}}function St(e,s){if(e&1&&Re(0,Mt,3,6,"li",14,Ee),e&2){let t=s.pages;Ie(t)}}function Ot(e,s){}function Nt(e,s){if(e&1){let t=V();f(0,"li",15)(1,"a",19),G("click",function(n){return P(t),u().selectPage(1),B(n.preventDefault())}),v(2,Ot,0,0,"ng-template",12),g()()}if(e&2){let t=u(),i=I(1);E("disabled",t.previousDisabled()),h(),O("tabindex",t.previousDisabled()?"-1":null)("aria-disabled",t.previousDisabled()?"true":null),h(),N("ngTemplateOutlet",(t.tplFirst==null?null:t.tplFirst.templateRef)||i)("ngTemplateOutletContext",q(6,me,t.previousDisabled(),t.page))}}function Et(e,s){}function Rt(e,s){if(e&1){let t=V();f(0,"li",15)(1,"a",20),G("click",function(n){P(t);let o=u();return o.selectPage(o.page-1),B(n.preventDefault())}),v(2,Et,0,0,"ng-template",12),g()()}if(e&2){let t=u(),i=I(3);E("disabled",t.previousDisabled()),h(),O("tabindex",t.previousDisabled()?"-1":null)("aria-disabled",t.previousDisabled()?"true":null),h(),N("ngTemplateOutlet",(t.tplPrevious==null?null:t.tplPrevious.templateRef)||i)("ngTemplateOutletContext",ue(6,pt,t.previousDisabled()))}}function It(e,s){}function At(e,s){}function kt(e,s){if(e&1){let t=V();f(0,"li",15)(1,"a",21),G("click",function(n){P(t);let o=u();return o.selectPage(o.page+1),B(n.preventDefault())}),v(2,At,0,0,"ng-template",12),g()()}if(e&2){let t=u(),i=I(5);E("disabled",t.nextDisabled()),h(),O("tabindex",t.nextDisabled()?"-1":null)("aria-disabled",t.nextDisabled()?"true":null),h(),N("ngTemplateOutlet",(t.tplNext==null?null:t.tplNext.templateRef)||i)("ngTemplateOutletContext",q(6,me,t.nextDisabled(),t.page))}}function Ft(e,s){}function xt(e,s){if(e&1){let t=V();f(0,"li",15)(1,"a",22),G("click",function(n){P(t);let o=u();return o.selectPage(o.pageCount),B(n.preventDefault())}),v(2,Ft,0,0,"ng-template",12),g()()}if(e&2){let t=u(),i=I(7);E("disabled",t.nextDisabled()),h(),O("tabindex",t.nextDisabled()?"-1":null)("aria-disabled",t.nextDisabled()?"true":null),h(),N("ngTemplateOutlet",(t.tplLast==null?null:t.tplLast.templateRef)||i)("ngTemplateOutletContext",q(6,me,t.nextDisabled(),t.page))}}var He={animation:!0,transitionTimerDelayMs:5},Pt=(()=>{class e{constructor(){this.animation=He.animation}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Bt(e){let{transitionDelay:s,transitionDuration:t}=window.getComputedStyle(e),i=parseFloat(s),n=parseFloat(t);return(i+n)*1e3}function Lt(e){return parseInt(`${e}`,10)}function Ht(e,s,t=0){return Math.max(Math.min(e,s),t)}function Ve(e){return typeof e=="string"}function Le(e){return!isNaN(Lt(e))}function pe(e){return e!=null}function Vt(e){return e&&e.then}function Ge(e){return(e||document.body).getBoundingClientRect()}function Gt(e){return s=>new ve(t=>{let i=a=>e.run(()=>t.next(a)),n=a=>e.run(()=>t.error(a)),o=()=>e.run(()=>t.complete());return s.subscribe({next:i,error:n,complete:o})})}var $t=()=>{},{transitionTimerDelayMs:Yt}=He,ee=new Map,x=(e,s,t,i)=>{let n=i.context||{},o=ee.get(s);if(o)switch(i.runningTransition){case"continue":return De;case"stop":e.run(()=>o.transition$.complete()),n=Object.assign(o.context,n),ee.delete(s)}let a=t(s,i.animation,n)||$t;if(!i.animation||window.getComputedStyle(s).transitionProperty==="none")return e.run(()=>a()),ne(void 0).pipe(Gt(e));let d=new y,_=new y,p=d.pipe(Te(!0));ee.set(s,{transition$:d,complete:()=>{_.next(),_.complete()},context:n});let m=Bt(s);return e.runOutsideAngular(()=>{let D=w(s,"transitionend").pipe(b(p),Y(({target:rt})=>rt===s)),k=we(m+Yt).pipe(b(p));Ce(k,D,_).pipe(b(p)).subscribe(()=>{ee.delete(s),e.run(()=>{a(),d.next(),d.complete()})})}),d.asObservable()};var $e=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})();var Ye=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})();var je=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})(),ze=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})();var _n=(()=>{let e=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,s=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(e()||s()):!1})();var jt=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function We(e){let s=Array.from(e.querySelectorAll(jt)).filter(t=>t.tabIndex!==-1);return[s[0],s[s.length-1]]}var zt=(e,s,t,i=!1)=>{e.runOutsideAngular(()=>{let n=w(s,"focusin").pipe(b(t),se(o=>o.target));w(s,"keydown").pipe(b(t),Y(o=>o.key==="Tab"),ae(n)).subscribe(([o,a])=>{let[d,_]=We(s);(a===d||a===s)&&o.shiftKey&&(_.focus(),o.preventDefault()),a===_&&!o.shiftKey&&(d.focus(),o.preventDefault())}),i&&w(s,"click").pipe(b(t),ae(n),se(o=>o[1])).subscribe(o=>o.focus())})};var pn=new Date(1882,10,12),fn=new Date(2174,10,25);var gn=1e3*60*60*24;var be=1080,Wt=24*be,Ut=12*be+793,mn=29*Wt+Ut,bn=11*be+204;var Ue=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})();var Qe=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})(),Qt=(()=>{class e{constructor(){this._ngbConfig=r(Pt),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(t){this._animation=t}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),$=class{constructor(s,t,i){this.nodes=s,this.viewRef=t,this.componentRef=i}};var Jt=(()=>{class e{constructor(){this._document=r(X)}hide(){let t=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),i=this._document.body,n=i.style,{overflow:o,paddingRight:a}=n;if(t>0){let d=parseFloat(window.getComputedStyle(i).paddingRight);n.paddingRight=`${d+t}px`}return n.overflow="hidden",()=>{t>0&&(n.paddingRight=a),n.overflow=o}}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Kt=(()=>{class e{constructor(){this._nativeElement=r(le).nativeElement,this._zone=r(J),this._injector=r(L)}ngOnInit(){de(()=>x(this._zone,this._nativeElement,(t,i)=>{i&&Ge(t),t.classList.add("show")},{animation:this.animation,runningTransition:"continue"}),{injector:this._injector,phase:ce.MixedReadWrite})}hide(){return x(this._zone,this._nativeElement,({classList:t})=>t.remove("show"),{animation:this.animation,runningTransition:"stop"})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=U({type:e,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(i,n){i&2&&(j("modal-backdrop"+(n.backdropClass?" "+n.backdropClass:"")),E("show",!n.animation)("fade",n.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[K],decls:0,vars:0,template:function(i,n){},encapsulation:2})}}return e})(),te=class{update(s){}close(s){}dismiss(s){}},qt=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],Zt=["animation","backdropClass"],fe=class{_applyWindowOptions(s,t){qt.forEach(i=>{pe(t[i])&&(s[i]=t[i])})}_applyBackdropOptions(s,t){Zt.forEach(i=>{pe(t[i])&&(s[i]=t[i])})}update(s){this._applyWindowOptions(this._windowCmptRef.instance,s),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,s)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(b(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(b(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(s,t,i,n){this._windowCmptRef=s,this._contentRef=t,this._backdropCmptRef=i,this._beforeDismiss=n,this._closed=new y,this._dismissed=new y,this._hidden=new y,s.instance.dismissEvent.subscribe(o=>{this.dismiss(o)}),this.result=new Promise((o,a)=>{this._resolve=o,this._reject=a}),this.result.then(null,()=>{})}close(s){this._windowCmptRef&&(this._closed.next(s),this._resolve(s),this._removeModalElements())}_dismiss(s){this._dismissed.next(s),this._reject(s),this._removeModalElements()}dismiss(s){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(s);else{let t=this._beforeDismiss();Vt(t)?t.then(i=>{i!==!1&&this._dismiss(s)},()=>{}):t!==!1&&this._dismiss(s)}}_removeModalElements(){let s=this._windowCmptRef.instance.hide(),t=this._backdropCmptRef?this._backdropCmptRef.instance.hide():ne(void 0);s.subscribe(()=>{let{nativeElement:i}=this._windowCmptRef.location;i.parentNode.removeChild(i),this._windowCmptRef.destroy(),this._contentRef?.viewRef?.destroy(),this._windowCmptRef=null,this._contentRef=null}),t.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:i}=this._backdropCmptRef.location;i.parentNode.removeChild(i),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),W(s,t).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},ge=function(e){return e[e.BACKDROP_CLICK=0]="BACKDROP_CLICK",e[e.ESC=1]="ESC",e}(ge||{}),Xt=(()=>{class e{constructor(){this._document=r(X),this._elRef=r(le),this._zone=r(J),this._injector=r(L),this._closed$=new y,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new Q,this.shown=new y,this.hidden=new y}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":Ve(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(t){this.dismissEvent.emit(t)}ngOnInit(){this._elWithFocus=this._document.activeElement,de(()=>this._show(),{injector:this._injector,phase:ce.MixedReadWrite})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:t}=this._elRef,i={animation:this.animation,runningTransition:"stop"},n=x(this._zone,t,()=>t.classList.remove("show"),i),o=x(this._zone,this._dialogEl.nativeElement,()=>{},i),a=W(n,o);return a.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),a}_show(){let t={animation:this.animation,runningTransition:"continue"},i=x(this._zone,this._elRef.nativeElement,(o,a)=>{a&&Ge(o),o.classList.add("show")},t),n=x(this._zone,this._dialogEl.nativeElement,()=>{},t);W(i,n).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:t}=this._elRef;this._zone.runOutsideAngular(()=>{w(t,"keydown").pipe(b(this._closed$),Y(n=>n.key==="Escape")).subscribe(n=>{this.keyboard?requestAnimationFrame(()=>{n.defaultPrevented||this._zone.run(()=>this.dismiss(ge.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let i=!1;w(this._dialogEl.nativeElement,"mousedown").pipe(b(this._closed$),Se(()=>i=!1),Me(()=>w(t,"mouseup").pipe(b(this._closed$),oe(1))),Y(({target:n})=>t===n)).subscribe(()=>{i=!0}),w(t,"click").pipe(b(this._closed$)).subscribe(({target:n})=>{t===n&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!i&&this._zone.run(()=>this.dismiss(ge.BACKDROP_CLICK))),i=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:t}=this._elRef;if(!t.contains(document.activeElement)){let i=t.querySelector("[ngbAutofocus]"),n=We(t)[0];(i||n||t).focus()}}_restoreFocus(){let t=this._document.body,i=this._elWithFocus,n;i&&i.focus&&t.contains(i)?n=i:n=t,this._zone.runOutsideAngular(()=>{setTimeout(()=>n.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&x(this._zone,this._elRef.nativeElement,({classList:t})=>(t.add("modal-static"),()=>t.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=U({type:e,selectors:[["ngb-modal-window"]],viewQuery:function(i,n){if(i&1&&Fe(dt,7),i&2){let o;T(o=M())&&(n._dialogEl=o.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(i,n){i&2&&(O("aria-modal",!0)("aria-labelledby",n.ariaLabelledBy)("aria-describedby",n.ariaDescribedBy),j("modal d-block"+(n.windowClass?" "+n.windowClass:"")),E("fade",n.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[K],ngContentSelectors:ct,decls:4,vars:2,consts:[["dialog",""],["role","document"],[1,"modal-content"]],template:function(i,n){i&1&&(Ae(),f(0,"div",1,0)(2,"div",2),ke(3),g()()),i&2&&j("modal-dialog"+(n.size?" modal-"+n.size:"")+(n.centered?" modal-dialog-centered":"")+n.fullscreenClass+(n.scrollable?" modal-dialog-scrollable":"")+(n.modalDialogClass?" "+n.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2})}}return e})(),ei=(()=>{class e{constructor(){this._applicationRef=r(Pe),this._injector=r(L),this._environmentInjector=r(re),this._document=r(X),this._scrollBar=r(Jt),this._activeWindowCmptHasChanged=new y,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new Q;let t=r(J);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let i=this._windowCmpts[this._windowCmpts.length-1];zt(t,i.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(i.location.nativeElement)}})}_restoreScrollBar(){let t=this._scrollBarRestoreFn;t&&(this._scrollBarRestoreFn=null,t())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(t,i,n){let o=n.container instanceof HTMLElement?n.container:pe(n.container)?this._document.querySelector(n.container):this._document.body;if(!o)throw new Error(`The specified modal container "${n.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let a=new te;t=n.injector||t;let d=t.get(re,null)||this._environmentInjector,_=this._getContentRef(t,d,i,a,n),p=n.backdrop!==!1?this._attachBackdrop(o):void 0,m=this._attachWindowComponent(o,_.nodes),D=new fe(m,_,p,n.beforeDismiss);return this._registerModalRef(D),this._registerWindowCmpt(m),D.hidden.pipe(oe(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),a.close=k=>{D.close(k)},a.dismiss=k=>{D.dismiss(k)},a.update=k=>{D.update(k)},D.update(n),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),p&&p.instance&&p.changeDetectorRef.detectChanges(),m.changeDetectorRef.detectChanges(),D}get activeInstances(){return this._activeInstances}dismissAll(t){this._modalRefs.forEach(i=>i.dismiss(t))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(t){let i=Z(Kt,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(i.hostView),t.appendChild(i.location.nativeElement),i}_attachWindowComponent(t,i){let n=Z(Xt,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:i});return this._applicationRef.attachView(n.hostView),t.appendChild(n.location.nativeElement),n}_getContentRef(t,i,n,o,a){return n?n instanceof C?this._createFromTemplateRef(n,o):Ve(n)?this._createFromString(n):this._createFromComponent(t,i,n,o,a):new $([])}_createFromTemplateRef(t,i){let n={$implicit:i,close(a){i.close(a)},dismiss(a){i.dismiss(a)}},o=t.createEmbeddedView(n);return this._applicationRef.attachView(o),new $([o.rootNodes],o)}_createFromString(t){let i=this._document.createTextNode(`${t}`);return new $([[i]])}_createFromComponent(t,i,n,o,a){let d=L.create({providers:[{provide:te,useValue:o}],parent:t}),_=Z(n,{environmentInjector:i,elementInjector:d}),p=_.location.nativeElement;return a.scrollable&&p.classList.add("component-host-scrollable"),this._applicationRef.attachView(_.hostView),new $([[p]],_.hostView,_)}_setAriaHidden(t){let i=t.parentElement;i&&t!==this._document.body&&(Array.from(i.children).forEach(n=>{n!==t&&n.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"))}),this._setAriaHidden(i))}_revertAriaHidden(){this._ariaHiddenValues.forEach((t,i)=>{t?i.setAttribute("aria-hidden",t):i.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(t){let i=()=>{let n=this._modalRefs.indexOf(t);n>-1&&(this._modalRefs.splice(n,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(t),this._activeInstances.emit(this._modalRefs),t.result.then(i,i)}_registerWindowCmpt(t){this._windowCmpts.push(t),this._activeWindowCmptHasChanged.next(),t.onDestroy(()=>{let i=this._windowCmpts.indexOf(t);i>-1&&(this._windowCmpts.splice(i,1),this._activeWindowCmptHasChanged.next())})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),ti=(()=>{class e{constructor(){this._injector=r(L),this._modalStack=r(ei),this._config=r(Qt)}open(t,i={}){let n=ie(ye(ie({},this._config),{animation:this._config.animation}),i);return this._modalStack.open(this._injector,t,n)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(t){this._modalStack.dismissAll(t)}hasOpenModals(){return this._modalStack.hasOpenModals()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Je=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({providers:[ti]})}}return e})();var Ke=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})(),ii=(()=>{class e{constructor(){this.disabled=!1,this.boundaryLinks=!1,this.directionLinks=!0,this.ellipses=!0,this.maxSize=0,this.pageSize=10,this.rotate=!1}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),ni=(()=>{class e{constructor(){this.templateRef=r(C)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=S({type:e,selectors:[["ng-template","ngbPaginationEllipsis",""]],standalone:!0})}}return e})(),si=(()=>{class e{constructor(){this.templateRef=r(C)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=S({type:e,selectors:[["ng-template","ngbPaginationFirst",""]],standalone:!0})}}return e})(),oi=(()=>{class e{constructor(){this.templateRef=r(C)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=S({type:e,selectors:[["ng-template","ngbPaginationLast",""]],standalone:!0})}}return e})(),ai=(()=>{class e{constructor(){this.templateRef=r(C)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=S({type:e,selectors:[["ng-template","ngbPaginationNext",""]],standalone:!0})}}return e})(),ri=(()=>{class e{constructor(){this.templateRef=r(C)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=S({type:e,selectors:[["ng-template","ngbPaginationNumber",""]],standalone:!0})}}return e})(),li=(()=>{class e{constructor(){this.templateRef=r(C)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=S({type:e,selectors:[["ng-template","ngbPaginationPrevious",""]],standalone:!0})}}return e})(),ci=(()=>{class e{constructor(){this.templateRef=r(C)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=S({type:e,selectors:[["ng-template","ngbPaginationPages",""]],standalone:!0})}}return e})(),yn=(()=>{class e{constructor(){this._config=r(ii),this.pageCount=0,this.pages=[],this.disabled=this._config.disabled,this.boundaryLinks=this._config.boundaryLinks,this.directionLinks=this._config.directionLinks,this.ellipses=this._config.ellipses,this.rotate=this._config.rotate,this.maxSize=this._config.maxSize,this.page=1,this.pageSize=this._config.pageSize,this.pageChange=new Q(!0),this.size=this._config.size}hasPrevious(){return this.page>1}hasNext(){return this.page<this.pageCount}nextDisabled(){return!this.hasNext()||this.disabled}previousDisabled(){return!this.hasPrevious()||this.disabled}selectPage(t){this._updatePages(t)}ngOnChanges(t){this._updatePages(this.page)}isEllipsis(t){return t===-1}_applyEllipses(t,i){this.ellipses&&(t>0&&(t>2?this.pages.unshift(-1):t===2&&this.pages.unshift(2),this.pages.unshift(1)),i<this.pageCount&&(i<this.pageCount-2?this.pages.push(-1):i===this.pageCount-2&&this.pages.push(this.pageCount-1),this.pages.push(this.pageCount)))}_applyRotation(){let t=0,i=this.pageCount,n=Math.floor(this.maxSize/2),o=this.maxSize%2===0?n-1:n;return this.page<=n?i=this.maxSize:this.pageCount-this.page<n?t=this.pageCount-this.maxSize:(t=this.page-n-1,i=this.page+o),[t,i]}_applyPagination(){let i=(Math.ceil(this.page/this.maxSize)-1)*this.maxSize,n=i+this.maxSize;return[i,n]}_setPageInRange(t){let i=this.page;this.page=Ht(t,this.pageCount,1),this.page!==i&&Le(this.collectionSize)&&this.pageChange.emit(this.page)}_updatePages(t){this.pageCount=Math.ceil(this.collectionSize/this.pageSize),Le(this.pageCount)||(this.pageCount=0),this.pages.length=0;for(let i=1;i<=this.pageCount;i++)this.pages.push(i);if(this._setPageInRange(t),this.maxSize>0&&this.pageCount>this.maxSize){let i=0,n=this.pageCount;this.rotate?[i,n]=this._applyRotation():[i,n]=this._applyPagination(),this.pages=this.pages.slice(i,n),this._applyEllipses(i,n)}}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=U({type:e,selectors:[["ngb-pagination"]],contentQueries:function(i,n,o){if(i&1&&(R(o,ni,5),R(o,si,5),R(o,oi,5),R(o,ai,5),R(o,ri,5),R(o,li,5),R(o,ci,5)),i&2){let a;T(a=M())&&(n.tplEllipsis=a.first),T(a=M())&&(n.tplFirst=a.first),T(a=M())&&(n.tplLast=a.first),T(a=M())&&(n.tplNext=a.first),T(a=M())&&(n.tplNumber=a.first),T(a=M())&&(n.tplPrevious=a.first),T(a=M())&&(n.tplPages=a.first)}},hostAttrs:["role","navigation"],inputs:{disabled:"disabled",boundaryLinks:"boundaryLinks",directionLinks:"directionLinks",ellipses:"ellipses",rotate:"rotate",collectionSize:"collectionSize",maxSize:"maxSize",page:"page",pageSize:"pageSize",size:"size"},outputs:{pageChange:"pageChange"},standalone:!0,features:[Ne,K],decls:20,vars:12,consts:()=>{let t;t=$localize`:@@ngb.pagination.first:««`;let i;i=$localize`:@@ngb.pagination.previous:«`;let n;n=$localize`:@@ngb.pagination.next:»`;let o;o=$localize`:@@ngb.pagination.last:»»`;let a;a=$localize`:@@ngb.pagination.first-aria:First`;let d;d=$localize`:@@ngb.pagination.previous-aria:Previous`;let _;_=$localize`:@@ngb.pagination.next-aria:Next`;let p;return p=$localize`:@@ngb.pagination.last-aria:Last`,[["first",""],["previous",""],["next",""],["last",""],["ellipsis",""],["defaultNumber",""],["defaultPages",""],t,i,n,o,[1,"page-item",3,"disabled"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["aria-hidden","true"],[1,"page-item",3,"active","disabled"],[1,"page-item"],["tabindex","-1","aria-disabled","true",1,"page-link"],["href","",1,"page-link"],["href","",1,"page-link",3,"click"],["aria-label",a,"href","",1,"page-link",3,"click"],["aria-label",d,"href","",1,"page-link",3,"click"],["aria-label",_,"href","",1,"page-link",3,"click"],["aria-label",p,"href","",1,"page-link",3,"click"]]},template:function(i,n){if(i&1&&(v(0,ft,2,0,"ng-template",null,0,A)(2,gt,2,0,"ng-template",null,1,A)(4,mt,2,0,"ng-template",null,2,A)(6,bt,2,0,"ng-template",null,3,A)(8,yt,1,0,"ng-template",null,4,A)(10,vt,1,1,"ng-template",null,5,A)(12,St,2,0,"ng-template",null,6,A),f(14,"ul"),v(15,Nt,3,9,"li",11)(16,Rt,3,8,"li",11)(17,It,0,0,"ng-template",12)(18,kt,3,9,"li",11)(19,xt,3,9,"li",11),g()),i&2){let o=I(13);h(14),j("pagination"+(n.size?" pagination-"+n.size:"")),h(),H(n.boundaryLinks?15:-1),h(),H(n.directionLinks?16:-1),h(),N("ngTemplateOutlet",(n.tplPages==null?null:n.tplPages.templateRef)||o)("ngTemplateOutletContext",_e(8,ht,n.page,n.pages,n.disabled)),h(),H(n.directionLinks?18:-1),h(),H(n.boundaryLinks?19:-1)}},dependencies:[Be],encapsulation:2,changeDetection:0})}}return e})();var qe=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})();var Ze=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})();var Xe=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})();var et=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})();var tt=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})();var it=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})();var nt=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})();var st=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})();var vn=new Oe("live announcer delay",{providedIn:"root",factory:()=>100});var ot=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})();var at=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({})}}return e})(),di=[$e,Ye,je,ze,Ue,Qe,Je,Ke,at,qe,Ze,Xe,et,tt,it,nt,st,ot],Dn=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({imports:[di,$e,Ye,je,ze,Ue,Qe,Je,Ke,at,qe,Ze,Xe,et,tt,it,nt,st,ot]})}}return e})();export{yn as a,Dn as b};
