"use strict";(self.webpackChunkboulangerie_m=self.webpackChunkboulangerie_m||[]).push([[592],{8630:(f,p,c)=>{c.d(p,{o:()=>l});const l=["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","decembre"]},390:(f,p,c)=>{c.d(p,{g:()=>t});var l=c(28),n=c(5e3),d=c(9808);function i(e,s){1&e&&(n.TgZ(0,"span"),n._uU(1,"s"),n.qZA())}function a(e,s){1&e&&(n.TgZ(0,"span"),n._uU(1,"\xa0/\xa0Tranch\xe9"),n.qZA())}function o(e,s){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const r=n.oxw().$implicit;n.xp6(1),n.hij("\xa0/\xa0Commentaire\xa0:\xa0",r.comment,"")}}function u(e,s){if(1&e&&(n.TgZ(0,"li"),n._uU(1),n.YNc(2,i,2,0,"span",1),n.YNc(3,a,2,0,"span",1),n.YNc(4,o,2,1,"span",1),n.qZA()),2&e){const r=s.$implicit,m=n.oxw();n.xp6(1),n.lnq(" ",null==r?null:r.product," : ",null==r?null:r.quantity," ",r.unit===m.PRODUCTUNIT.KG?m.PRODUCTUNITWORDING.KG:m.PRODUCTUNITWORDING.UNIT,""),n.xp6(1),n.Q6J("ngIf",r&&r.quantity&&r.quantity>1),n.xp6(1),n.Q6J("ngIf",r&&r.isSliced),n.xp6(1),n.Q6J("ngIf",r&&r.comment)}}let t=(()=>{class e{constructor(){this.PRODUCTUNITWORDING=l.oo,this.PRODUCTUNIT=l.A$,this.allUserOrdersProducts=[]}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-list-recap-products"]],inputs:{allUserOrdersProducts:"allUserOrdersProducts"},decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(r,m){1&r&&(n.TgZ(0,"ul"),n.YNc(1,u,5,6,"li",0),n.qZA()),2&r&&(n.xp6(1),n.Q6J("ngForOf",m.allUserOrdersProducts))},directives:[d.sg,d.O5],encapsulation:2}),e})()},6568:(f,p,c)=>{function l(d){let i=[];const a=[];return d.forEach(o=>{i=[...i,...o.order]}),i.forEach(o=>{i.filter(t=>t.product===o.product).forEach(t=>{if(t.comment)a.push(t);else if(t.isSliced){const e=a.findIndex(s=>s.product===t.product&&!s.comment&&s.isSliced);e>=0?a[e].quantity+=t.quantity:a.push(t)}else{const e=a.findIndex(s=>s.product===t.product&&!s.comment&&!s.isSliced);e>=0?a[e].quantity+=t.quantity:a.push(t)}}),i=i.filter(t=>t.product!==o.product)}),a.forEach(o=>o.quantity=+o.quantity.toFixed(2)),a.sort((o,u)=>o.product<u.product?-1:o.product>u.product?1:0)}function n(d){let i=[];const a=[];return d.forEach(o=>{i=[...i,...o.order]}),i.forEach(o=>{i.filter(t=>t.product===o.product).forEach(t=>{const e=a.findIndex(s=>s.product===t.product);e>=0?a[e].quantity+=t.quantity:a.push(t)}),i=i.filter(t=>t.product!==o.product)}),a.forEach(o=>{o.quantity=+o.quantity.toFixed(2),delete o.comment,delete o.isSliced}),a.sort((o,u)=>o.product<u.product?-1:o.product>u.product?1:0)}c.d(p,{T:()=>l,m:()=>n})},9558:(f,p,c)=>{c.d(p,{Z:()=>d});var l=c(953),n=c(833);function d(i){(0,n.Z)(1,arguments);var a=(0,l.Z)(i),o=a.getMonth();return o}},6424:(f,p,c)=>{c.d(p,{Z:()=>o});var l=c(953),n=c(1998),d=c(833);function i(u){(0,d.Z)(1,arguments);var t=(0,l.Z)(u),e=t.getFullYear(),s=t.getMonth(),r=new Date(0);return r.setFullYear(e,s+1,0),r.setHours(0,0,0,0),r.getDate()}function a(u,t){(0,d.Z)(2,arguments);var e=(0,l.Z)(u),s=(0,n.Z)(t),r=e.getFullYear(),m=e.getDate(),_=new Date(0);_.setFullYear(r,s,15),_.setHours(0,0,0,0);var h=i(_);return e.setMonth(s,Math.min(m,h)),e}function o(u,t){if((0,d.Z)(2,arguments),"object"!=typeof t||null===t)throw new RangeError("values parameter must be an object");var e=(0,l.Z)(u);return isNaN(e.getTime())?new Date(NaN):(null!=t.year&&e.setFullYear(t.year),null!=t.month&&(e=a(e,t.month)),null!=t.date&&e.setDate((0,n.Z)(t.date)),null!=t.hours&&e.setHours((0,n.Z)(t.hours)),null!=t.minutes&&e.setMinutes((0,n.Z)(t.minutes)),null!=t.seconds&&e.setSeconds((0,n.Z)(t.seconds)),null!=t.milliseconds&&e.setMilliseconds((0,n.Z)(t.milliseconds)),e)}}}]);