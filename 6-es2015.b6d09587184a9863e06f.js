(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"n1/D":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS");class i{onMouseEnter(){this.isZoomed=!0}onMouseLeave(){this.isZoomed=!1}}var s=u("SVse");class a{transform(l){return l?`${l.substr(0,3)}-${l.substr(3)}`:null}}class r{ngOnInit(){}}var d=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function c(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"img",[["bmZoom",""],["class","ui tiny image"]],[[8,"src",4],[2,"small",null]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,u){var t=!0;return"mouseenter"===n&&(t=!1!==e["\u0275nov"](l,1).onMouseEnter()&&t),"mouseleave"===n&&(t=!1!==e["\u0275nov"](l,1).onMouseLeave()&&t),t},null,null)),e["\u0275did"](1,16384,null,0,i,[],null,null)],null,function(l,n){l(n,0,0,n.component.book.thumbnails[0].url,e["\u0275nov"](n,1).isZoomed)})}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","description"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.book.subtitle)})}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[", "]))],null,null)}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" ",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](3,16384,null,0,s.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,!n.context.last)},function(l,n){l(n,1,0,n.context.$implicit)})}function m(l){return e["\u0275vid"](0,[e["\u0275pid"](0,a,[]),(l()(),e["\u0275and"](16777216,null,null,1,null,c)),e["\u0275did"](2,16384,null,0,s.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](3,0,null,null,10,"div",[["class","content"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"div",[["class","header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](7,16384,null,0,s.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](8,0,null,null,5,"div",[["class","metadata"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](10,278528,null,0,s.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,[" ISBN "," "])),e["\u0275ppd"](13,1)],function(l,n){var u=n.component;l(n,2,0,u.book.thumbnails&&u.book.thumbnails[0]&&u.book.thumbnails[0].url),l(n,7,0,u.book.subtitle),l(n,10,0,u.book.authors)},function(l,n){var u=n.component;l(n,5,0,u.book.title);var t=e["\u0275unv"](n,12,0,l(n,13,0,e["\u0275nov"](n,0),u.book.isbn));l(n,12,0,t)})}var v=u("iInd"),g=u("DQLy"),k=u("ZCvc"),h=u("WymO");class O{constructor(l){this.store=l}ngOnInit(){this.books$=this.store.pipe(Object(g.y)(h.a)),this.loading$=this.store.pipe(Object(g.y)(h.c)),this.store.dispatch(new k.g)}}var I=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"bm-book-list-item",[["class","item"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,1).onClick()&&t),t},m,d)),e["\u0275did"](1,16384,null,0,v.l,[v.k,v.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275did"](2,114688,null,0,r,[],{book:[0,"book"]},null)],function(l,n){l(n,1,0,n.context.$implicit.isbn),l(n,2,0,n.context.$implicit)},null)}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Es wurden noch keine B\xfccher eingetragen. "]))],null,null)}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](2,278528,null,0,s.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](4,16384,null,0,s.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](0,null,null,0))],function(l,n){l(n,2,0,n.context.ngIf),l(n,4,0,!n.context.ngIf.length)},null)}function j(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","ui active dimmer"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"div",[["class","ui large text loader"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Daten werden geladen... "]))],null,null)}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"div",[["class","ui middle aligned selection divided list"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,2,null,y)),e["\u0275did"](2,16384,null,0,s.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275pid"](131072,s.b,[e.ChangeDetectorRef]),(l()(),e["\u0275and"](16777216,null,null,2,null,j)),e["\u0275did"](5,16384,null,0,s.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275pid"](131072,s.b,[e.ChangeDetectorRef])],function(l,n){var u=n.component;l(n,2,0,e["\u0275unv"](n,2,0,e["\u0275nov"](n,3).transform(u.books$))),l(n,5,0,e["\u0275unv"](n,5,0,e["\u0275nov"](n,6).transform(u.loading$)))},null)}function B(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"bm-book-list",[],null,null,null,C,I)),e["\u0275did"](1,114688,null,0,O,[g.o],null,null)],function(l,n){l(n,1,0)},null)}var $=e["\u0275ccf"]("bm-book-list",O,B,{},{},[]);class D{constructor(l,n){this.templateRef=l,this.viewContainerRef=n}ngOnInit(){setTimeout(()=>{this.viewContainerRef.createEmbeddedView(this.templateRef)},this.bmDelay)}}var x=u("Mc/V");class L{constructor(l,n,u,e){this.bs=l,this.router=n,this.route=u,this.store=e}ngOnInit(){const l=this.getIsbn();this.book$=this.store.pipe(Object(g.y)(h.b,{isbn:l})),this.store.dispatch(new k.d({isbn:l}))}getRating(l){return new Array(l)}removeBook(){if(confirm("Buch wirklich l\xf6schen?")){const l=this.getIsbn();this.store.dispatch(new k.b({isbn:l}))}}getIsbn(){return this.route.snapshot.paramMap.get("isbn")}}var F=e["\u0275crt"]({encapsulation:0,styles:[["p[_ngcontent-%COMP%]{white-space:pre-wrap}"]],data:{}});function V(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.parent.context.ngIf.subtitle)})}function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" ",""])),(l()(),e["\u0275eld"](2,0,null,null,0,"br",[],null,null,null,null,null))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"i",[["class","yellow star icon"]],null,null,null,null,null))],null,null)}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,T)),e["\u0275did"](2,81920,null,0,D,[e.TemplateRef,e.ViewContainerRef],{bmDelay:[0,"bmDelay"]},null),(l()(),e["\u0275and"](0,null,null,0))],function(l,n){l(n,2,0,500+200*n.context.index)},null)}function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.context.$implicit.url)})}function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,43,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,V)),e["\u0275did"](4,16384,null,0,s.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](5,0,null,null,0,"div",[["class","ui divider"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,20,"div",[["class","ui grid"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Autoren "])),(l()(),e["\u0275and"](16777216,null,null,1,null,S)),e["\u0275did"](11,278528,null,0,s.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](12,0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" ISBN "])),(l()(),e["\u0275ted"](15,null,[" "," "])),e["\u0275ppd"](16,1),(l()(),e["\u0275eld"](17,0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Erschienen "])),(l()(),e["\u0275ted"](20,null,[" "," "])),e["\u0275ppd"](21,2),(l()(),e["\u0275eld"](22,0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Rating "])),(l()(),e["\u0275and"](16777216,null,null,1,null,E)),e["\u0275did"](26,278528,null,0,s.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](27,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Beschreibung "])),(l()(),e["\u0275eld"](29,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](30,null,["",""])),(l()(),e["\u0275eld"](31,0,null,null,2,"div",[["class","ui small images"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,M)),e["\u0275did"](33,278528,null,0,s.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](34,0,null,null,3,"button",[["class","ui tiny red labeled icon button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.removeBook()&&e),e},null,null)),(l()(),e["\u0275eld"](35,0,null,null,0,"i",[["class","remove icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](36,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Buch l\xf6schen "])),(l()(),e["\u0275eld"](38,0,null,null,5,"a",[["class","ui tiny yellow labeled icon button"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,39).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](39,671744,null,0,v.n,[v.k,v.a,s.i],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](40,2),(l()(),e["\u0275eld"](41,0,null,null,0,"i",[["class","write icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Buch bearbeiten "]))],function(l,n){var u=n.component;l(n,4,0,n.context.ngIf.subtitle),l(n,11,0,n.context.ngIf.authors),l(n,26,0,u.getRating(n.context.ngIf.rating)),l(n,33,0,n.context.ngIf.thumbnails);var e=l(n,40,0,"../../admin/edit",n.context.ngIf.isbn);l(n,39,0,e)},function(l,n){l(n,2,0,n.context.ngIf.title);var u=e["\u0275unv"](n,15,0,l(n,16,0,e["\u0275nov"](n.parent,0),n.context.ngIf.isbn));l(n,15,0,u);var t=e["\u0275unv"](n,20,0,l(n,21,0,e["\u0275nov"](n.parent,1),n.context.ngIf.published,"longDate"));l(n,20,0,t),l(n,30,0,n.context.ngIf.description),l(n,38,0,e["\u0275nov"](n,39).target,e["\u0275nov"](n,39).href)})}function Z(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"div",[["class","ui active centered inline loader"]],null,null,null,null,null))],null,null)}function J(l){return e["\u0275vid"](0,[e["\u0275pid"](0,a,[]),e["\u0275pid"](0,s.e,[e.LOCALE_ID]),(l()(),e["\u0275and"](16777216,null,null,2,null,A)),e["\u0275did"](3,16384,null,0,s.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),e["\u0275pid"](131072,s.b,[e.ChangeDetectorRef]),(l()(),e["\u0275and"](0,[["loading",2]],null,0,null,Z))],function(l,n){var u=n.component;l(n,3,0,e["\u0275unv"](n,3,0,e["\u0275nov"](n,4).transform(u.book$)),e["\u0275nov"](n,5))},null)}function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"bm-book-details",[],null,null,null,J,F)),e["\u0275did"](1,114688,null,0,L,[x.a,v.k,v.a,g.o],null,null)],function(l,n){l(n,1,0)},null)}var _=e["\u0275ccf"]("bm-book-details",L,N,{},{},[]);class G{}var K=u("LBrA");const q={books:[],loading:!1};function Y(l=q,n){switch(n.type){case k.a.LoadBooks:return Object.assign({},l,{loading:!0});case k.a.LoadBooksSuccess:return Object.assign({},l,{books:n.payload.books,loading:!1});case k.a.LoadBookSuccess:{const{book:u}=n.payload,e=[...l.books.filter(l=>l.isbn!==u.isbn),u];return Object.assign({},l,{books:e})}case k.a.DeleteBookSuccess:return Object.assign({},l,{books:l.books.filter(l=>l.isbn!==n.payload.isbn)});case K.a.CreateBookSuccess:{const{book:u}=n.payload,e=[...l.books,u];return Object.assign({},l,{books:e})}case K.a.UpdateBookSuccess:{const{book:u}=n.payload,e=l.books.map(l=>l.isbn===u.isbn?u:l);return Object.assign({},l,{books:e})}default:return l}}var z=u("mrSG"),P=u("Yml6"),Q=u("eIep"),U=u("lJxs"),W=u("JIr8"),H=u("5+tZ"),X=u("vkgz"),ll=u("LRne");const nl=(()=>{class l{constructor(l,n,u){this.actions$=l,this.bs=n,this.router=u,this.loadBooks$=this.actions$.pipe(Object(P.d)(k.a.LoadBooks),Object(Q.a)(()=>this.bs.getAll().pipe(Object(U.a)(l=>new k.i({books:l})),Object(W.a)(l=>Object(ll.a)(new k.h({error:l})))))),this.loadBook$=this.actions$.pipe(Object(P.d)(k.a.LoadBook),Object(U.a)(l=>l.payload.isbn),Object(H.a)(l=>this.bs.getSingle(l).pipe(Object(U.a)(l=>new k.f({book:l})),Object(W.a)(l=>Object(ll.a)(new k.e({error:l})))))),this.deleteBook$=this.actions$.pipe(Object(P.d)(k.a.DeleteBook),Object(U.a)(l=>l.payload.isbn),Object(H.a)(l=>this.bs.remove(l).pipe(Object(U.a)(()=>new k.c({isbn:l}))))),this.deleteBookSuccess$=this.actions$.pipe(Object(P.d)(k.a.DeleteBookSuccess),Object(X.a)(()=>this.router.navigate(["/books"])))}}return z.a([Object(P.b)(),z.b("design:type",Object)],l.prototype,"loadBooks$",void 0),z.a([Object(P.b)(),z.b("design:type",Object)],l.prototype,"loadBook$",void 0),z.a([Object(P.b)(),z.b("design:type",Object)],l.prototype,"deleteBook$",void 0),z.a([Object(P.b)({dispatch:!1}),z.b("design:type",Object)],l.prototype,"deleteBookSuccess$",void 0),l})();u.d(n,"BooksModuleNgFactory",function(){return ul});var ul=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,$,_]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,s.m,s.l,[e.LOCALE_ID,[2,s.t]]),e["\u0275mpd"](1073742336,s.c,s.c,[]),e["\u0275mpd"](1073742336,v.o,v.o,[[2,v.t],[2,v.k]]),e["\u0275mpd"](1073742336,G,G,[]),e["\u0275mpd"](1024,g.E,function(){return[{}]},[]),e["\u0275mpd"](1024,g.k,function(){return[{key:"book",reducerFactory:g.t,metaReducers:[],initialState:void 0}]},[]),e["\u0275mpd"](1024,g.F,g.L,[e.Injector,g.E,g.k]),e["\u0275mpd"](1024,g.D,function(){return[Y]},[]),e["\u0275mpd"](1024,g.G,function(l){return[l]},[g.D]),e["\u0275mpd"](1024,g.b,function(l,n,u){return[g.M(l,n,u)]},[e.Injector,g.D,g.G]),e["\u0275mpd"](1073873408,g.p,g.p,[g.F,g.b,g.h,g.q]),e["\u0275mpd"](512,nl,nl,[P.a,x.a,v.k]),e["\u0275mpd"](1024,P.i,function(l){return[P.e(l)]},[nl]),e["\u0275mpd"](1073742336,P.g,P.g,[P.f,P.i,[2,g.q],[2,g.p]]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](256,e.LOCALE_ID,"de",[]),e["\u0275mpd"](1024,v.i,function(){return[[{path:"",component:O},{path:":isbn",component:L}]]},[])])})}}]);