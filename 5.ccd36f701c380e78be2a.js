(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{iqqH:function(t,e,n){"use strict";n.r(e),n.d(e,"AudioElementModule",(function(){return y}));var i=n("ofXK"),a=n("tyNb"),c=n("fXoL"),b=n("JvCA"),o=n("/t3+"),r=n("bTqV"),s=n("NFeN"),l=n("Wp6s"),p=n("MutI"),m=n("FKr1"),u=n("sYmb");const d=["audio"];function h(t,e){if(1&t){const t=c.Qb();c.Pb(0,"mat-icon",12),c.Wb("click",(function(){return c.gc(t),c.Yb().play()})),c.pc(1,"play_arrow"),c.Ob()}}function g(t,e){if(1&t){const t=c.Qb();c.Pb(0,"mat-icon",13),c.Wb("click",(function(){return c.gc(t),c.Yb().pause()})),c.pc(1,"pause"),c.Ob()}}function f(t,e){if(1&t){const t=c.Qb();c.Pb(0,"mat-card",14),c.Pb(1,"mat-card-content"),c.Pb(2,"mat-list"),c.Pb(3,"div",15),c.pc(4),c.Zb(5,"translate"),c.Ob(),c.Pb(6,"mat-list-item",16),c.Wb("click",(function(){c.gc(t);const e=c.Yb();return e.navigate(e.nextElement)})),c.Lb(7,"img",17),c.Pb(8,"h3",18),c.pc(9),c.Zb(10,"translate"),c.Ob(),c.Pb(11,"div",18),c.pc(12),c.Ob(),c.Pb(13,"mat-icon"),c.pc(14,"chevron_right"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()}if(2&t){const t=c.Yb();c.zb(4),c.qc(c.ac(5,4,"element.nextElement.label")),c.zb(3),c.dc("src",t.nextElement.image,c.hc),c.zb(2),c.qc(c.ac(10,6,t.nextElement.name)),c.zb(3),c.qc(t.nextElement.id)}}function O(t,e){if(1&t){const t=c.Qb();c.Pb(0,"mat-card",14),c.Pb(1,"mat-card-content"),c.Pb(2,"mat-list"),c.Pb(3,"div",15),c.pc(4),c.Zb(5,"translate"),c.Ob(),c.Pb(6,"mat-list-item",16),c.Wb("click",(function(){c.gc(t);const e=c.Yb();return e.navigate(e.prevElement)})),c.Pb(7,"mat-icon",19),c.pc(8,"chevron_left"),c.Ob(),c.Pb(9,"h3",18),c.pc(10),c.Zb(11,"translate"),c.Ob(),c.Pb(12,"div",18),c.pc(13),c.Ob(),c.Lb(14,"img",17),c.Ob(),c.Ob(),c.Ob(),c.Ob()}if(2&t){const t=c.Yb();c.zb(4),c.qc(c.ac(5,4,"element.prevElement.label")),c.zb(6),c.qc(c.ac(11,6,t.prevElement.name)),c.zb(3),c.qc(t.prevElement.id),c.zb(1),c.dc("src",t.prevElement.image,c.hc)}}const P=[{path:"",component:(()=>{class t{constructor(t,e,n){this.router=t,this.route=e,this.exhibitionService=n,this.playing=!1}ngOnInit(){this.sub=this.route.params.subscribe(t=>{const e=this.route.snapshot.paramMap.get("id"),n=this.route.snapshot.paramMap.get("elem");this.playing=!1,this.exhibition=this.exhibitionService.getExhibition(e),this.element=this.exhibition.elements.find(t=>t.id===parseInt(n,10)),this.nextElement=this.exhibition.elements.find(t=>t.id===parseInt(n,10)+1),this.prevElement=this.exhibition.elements.find(t=>t.id===parseInt(n,10)-1)})}ngOnDestroy(){this.sub.unsubscribe()}navigate(t){const e=this.route.snapshot.paramMap.get("id");this.router.navigate([`guide/${e}/element/${t.id}`],{replaceUrl:!0})}back(){window.history.back()}play(){this.playing=!0,this.audio.nativeElement.play()}pause(){this.playing=!1,this.audio.nativeElement.pause()}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(a.b),c.Kb(a.a),c.Kb(b.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-audio-element"]],viewQuery:function(t,e){var n;1&t&&c.sc(d,!0),2&t&&c.ec(n=c.Xb())&&(e.audio=n.first)},decls:27,vars:16,consts:[["color","primary"],["mat-icon-button","","aria-label","back",1,"example-icon",3,"click"],[1,"container"],[1,"exhibition"],[3,"src"],["audio",""],[1,"player"],[1,"overlay"],["width","600","height","405","mat-card-image","","alt","",3,"src"],["style","color: white;","inline","true","class","play",3,"click",4,"ngIf"],["style","color: white;","inline","true","class","pause",3,"click",4,"ngIf"],["class","list",4,"ngIf"],["inline","true",1,"play",2,"color","white",3,"click"],["inline","true",1,"pause",2,"color","white",3,"click"],[1,"list"],["mat-subheader",""],["mat-list-item","",3,"click"],["height","40","width","40","matListAvatar","","alt","...",3,"src"],["mat-line",""],["mat-list-icon",""]],template:function(t,e){1&t&&(c.Pb(0,"mat-toolbar",0),c.Pb(1,"button",1),c.Wb("click",(function(){return e.back()})),c.Pb(2,"mat-icon"),c.pc(3,"arrow_back"),c.Ob(),c.Ob(),c.Pb(4,"span"),c.pc(5),c.Zb(6,"translate"),c.Ob(),c.Ob(),c.Pb(7,"div",2),c.Pb(8,"mat-card",3),c.Lb(9,"audio",4,5),c.Pb(11,"div",6),c.Lb(12,"div",7),c.Lb(13,"img",8),c.oc(14,h,2,0,"mat-icon",9),c.oc(15,g,2,0,"mat-icon",10),c.Ob(),c.Pb(16,"mat-card-subtitle"),c.pc(17),c.Ob(),c.Pb(18,"mat-card-title"),c.pc(19),c.Zb(20,"translate"),c.Ob(),c.Pb(21,"mat-card-content"),c.Pb(22,"p"),c.pc(23),c.Zb(24,"translate"),c.Ob(),c.Ob(),c.Ob(),c.oc(25,f,15,8,"mat-card",11),c.oc(26,O,15,8,"mat-card",11),c.Ob()),2&t&&(c.zb(5),c.qc(c.ac(6,10,e.element.name)),c.zb(4),c.dc("src",e.element.audio,c.hc),c.zb(4),c.dc("src",e.element.image,c.hc),c.zb(1),c.dc("ngIf",!e.playing),c.zb(1),c.dc("ngIf",e.playing),c.zb(2),c.qc(e.element.year),c.zb(2),c.qc(c.ac(20,12,e.element.name)),c.zb(4),c.rc(" ",c.ac(24,14,e.element.description)," "),c.zb(2),c.dc("ngIf",e.nextElement),c.zb(1),c.dc("ngIf",e.prevElement))},directives:[o.a,r.a,s.a,l.a,l.c,i.j,l.e,l.f,l.b,p.a,p.f,p.d,p.b,m.f,p.c],pipes:[u.c],styles:[".container[_ngcontent-%COMP%]{display:block;max-width:600px;margin:0 auto;padding:0 8px;position:relative}mat-card[_ngcontent-%COMP%]{margin-top:16px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.player[_ngcontent-%COMP%]{position:relative;margin:0 -16px 16px}.player[_ngcontent-%COMP%]   .mat-card-image[_ngcontent-%COMP%]{margin:0;width:100%}.overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.38)}.player[_ngcontent-%COMP%]   .pause[_ngcontent-%COMP%], .player[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%]{position:absolute;z-index:1;font-size:150px;left:50%;margin-left:-75px;top:50%;margin-top:-25px}"]}),t})()}];let v=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[a.c.forChild(P)],a.c]}),t})(),y=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[i.b,v,u.b,o.b,r.b,l.d,p.e,s.b]]}),t})()}}]);