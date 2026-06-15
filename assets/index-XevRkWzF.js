const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginView-WWmAnwAy.js","assets/auth-C5KGabb9.js","assets/AdminLayout-BvNuqAdx.js","assets/DashboardView-BbxQmkzd.js","assets/db-CIlUvpYl.js","assets/video-Bmkl2PKs.js","assets/EmpresasView-BHyUzTtb.js","assets/EmpresaDetailView-DKhtQ_MG.js","assets/PessoaDetailView-BUekKnV9.js","assets/notificacoes-B6JjRnUl.js","assets/CanalTags.vue_vue_type_script_setup_true_lang-CEyq4ydj.js","assets/VideosView-pL_oRD17.js","assets/ConfigView-DnHbsZIq.js","assets/VerView-BG0OdFrj.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},Br=[],Zt=()=>{},Id=()=>!1,Ko=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Go=t=>t.startsWith("onUpdate:"),nt=Object.assign,rl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},k_=Object.prototype.hasOwnProperty,Re=(t,e)=>k_.call(t,e),re=Array.isArray,jr=t=>vi(t)==="[object Map]",cs=t=>vi(t)==="[object Set]",oh=t=>vi(t)==="[object Date]",he=t=>typeof t=="function",Ue=t=>typeof t=="string",Mt=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",Td=t=>(Se(t)||he(t))&&he(t.then)&&he(t.catch),wd=Object.prototype.toString,vi=t=>wd.call(t),x_=t=>vi(t).slice(8,-1),Ad=t=>vi(t)==="[object Object]",zo=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$s=nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},M_=/-\w/g,yt=Qo(t=>t.replace(M_,e=>e.slice(1).toUpperCase())),L_=/\B([A-Z])/g,tr=Qo(t=>t.replace(L_,"-$1").toLowerCase()),Yo=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ha=Qo(t=>t?`on${Yo(t)}`:""),Xt=(t,e)=>!Object.is(t,e),ao=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Rd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Jo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ah;const Xo=()=>ah||(ah=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sl(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?j_(r):sl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||Se(t))return t}const F_=/;(?![^(]*\))/g,U_=/:([^]+)/,B_=/\/\*[^]*?\*\//g;function j_(t){const e={};return t.replace(B_,"").split(F_).forEach(n=>{if(n){const r=n.split(U_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function il(t){let e="";if(Ue(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=il(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const q_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$_=nl(q_);function bd(t){return!!t||t===""}function H_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ls(t[r],e[r]);return n}function ls(t,e){if(t===e)return!0;let n=oh(t),r=oh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Mt(t),r=Mt(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?H_(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!ls(t[o],e[o]))return!1}}return String(t)===String(e)}function ol(t,e){return t.findIndex(n=>ls(n,e))}const Sd=t=>!!(t&&t.__v_isRef===!0),W_=t=>Ue(t)?t:t==null?"":re(t)||Se(t)&&(t.toString===wd||!he(t.toString))?Sd(t)?W_(t.value):JSON.stringify(t,Pd,2):String(t),Pd=(t,e)=>Sd(e)?Pd(t,e.value):jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Wa(r,i)+" =>"]=s,n),{})}:cs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wa(n))}:Mt(e)?Wa(e):Se(e)&&!re(e)&&!Ad(e)?String(e):e,Wa=(t,e="")=>{var n;return Mt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xe;class Cd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Xe&&(Xe.active?(this.parent=Xe,this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Xe;try{return Xe=this,e()}finally{Xe=n}}}on(){++this._on===1&&(this.prevScope=Xe,Xe=this)}off(){if(this._on>0&&--this._on===0){if(Xe===this)Xe=this.prevScope;else{let e=Xe;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function K_(t){return new Cd(t)}function G_(){return Xe}let Ne;const Ka=new WeakSet;class Nd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xe&&(Xe.active?Xe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ka.has(this)&&(Ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ch(this),Vd(this);const e=Ne,n=jt;Ne=this,jt=!0;try{return this.fn()}finally{kd(this),Ne=e,jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ll(e);this.deps=this.depsTail=void 0,ch(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yc(this)&&this.run()}get dirty(){return yc(this)}}let Od=0,Hs,Ws;function Dd(t,e=!1){if(t.flags|=8,e){t.next=Ws,Ws=t;return}t.next=Hs,Hs=t}function al(){Od++}function cl(){if(--Od>0)return;if(Ws){let e=Ws;for(Ws=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Hs;){let e=Hs;for(Hs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Vd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ll(r),z_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function yc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function xd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ni)||(t.globalVersion=ni,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!yc(t))))return;t.flags|=2;const e=t.dep,n=Ne,r=jt;Ne=t,jt=!0;try{Vd(t);const s=t.fn(t._value);(e.version===0||Xt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,jt=r,kd(t),t.flags&=-3}}function ll(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ll(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function z_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let jt=!0;const Md=[];function Tn(){Md.push(jt),jt=!1}function wn(){const t=Md.pop();jt=t===void 0?!0:t}function ch(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let ni=0;class Q_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ul{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ne||!jt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new Q_(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,Ld(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,ni++,this.notify(e)}notify(e){al();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{cl()}}}function Ld(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ld(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Io=new WeakMap,mr=Symbol(""),vc=Symbol(""),ri=Symbol("");function lt(t,e,n){if(jt&&Ne){let r=Io.get(t);r||Io.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ul),s.map=r,s.key=n),s.track()}}function pn(t,e,n,r,s,i){const o=Io.get(t);if(!o){ni++;return}const c=l=>{l&&l.trigger()};if(al(),e==="clear")o.forEach(c);else{const l=re(t),h=l&&zo(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===ri||!Mt(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(ri)),e){case"add":l?h&&c(o.get("length")):(c(o.get(mr)),jr(t)&&c(o.get(vc)));break;case"delete":l||(c(o.get(mr)),jr(t)&&c(o.get(vc)));break;case"set":jr(t)&&c(o.get(mr));break}}cl()}function Y_(t,e){const n=Io.get(t);return n&&n.get(e)}function Vr(t){const e=we(t);return e===t?e:(lt(e,"iterate",ri),Ot(t)?e:e.map($t))}function Zo(t){return lt(t=we(t),"iterate",ri),t}function Yt(t,e){return An(t)?zr(gr(t)?$t(e):e):$t(e)}const J_={__proto__:null,[Symbol.iterator](){return Ga(this,Symbol.iterator,t=>Yt(this,t))},concat(...t){return Vr(this).concat(...t.map(e=>re(e)?Vr(e):e))},entries(){return Ga(this,"entries",t=>(t[1]=Yt(this,t[1]),t))},every(t,e){return cn(this,"every",t,e,void 0,arguments)},filter(t,e){return cn(this,"filter",t,e,n=>n.map(r=>Yt(this,r)),arguments)},find(t,e){return cn(this,"find",t,e,n=>Yt(this,n),arguments)},findIndex(t,e){return cn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return cn(this,"findLast",t,e,n=>Yt(this,n),arguments)},findLastIndex(t,e){return cn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return cn(this,"forEach",t,e,void 0,arguments)},includes(...t){return za(this,"includes",t)},indexOf(...t){return za(this,"indexOf",t)},join(t){return Vr(this).join(t)},lastIndexOf(...t){return za(this,"lastIndexOf",t)},map(t,e){return cn(this,"map",t,e,void 0,arguments)},pop(){return Ns(this,"pop")},push(...t){return Ns(this,"push",t)},reduce(t,...e){return lh(this,"reduce",t,e)},reduceRight(t,...e){return lh(this,"reduceRight",t,e)},shift(){return Ns(this,"shift")},some(t,e){return cn(this,"some",t,e,void 0,arguments)},splice(...t){return Ns(this,"splice",t)},toReversed(){return Vr(this).toReversed()},toSorted(t){return Vr(this).toSorted(t)},toSpliced(...t){return Vr(this).toSpliced(...t)},unshift(...t){return Ns(this,"unshift",t)},values(){return Ga(this,"values",t=>Yt(this,t))}};function Ga(t,e,n){const r=Zo(t),s=r[e]();return r!==t&&!Ot(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const X_=Array.prototype;function cn(t,e,n,r,s,i){const o=Zo(t),c=o!==t&&!Ot(t),l=o[e];if(l!==X_[e]){const p=l.apply(t,i);return c?$t(p):p}let h=n;o!==t&&(c?h=function(p,g){return n.call(this,Yt(t,p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function lh(t,e,n,r){const s=Zo(t),i=s!==t&&!Ot(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(h,f,p){return c&&(c=!1,h=Yt(t,h)),n.call(this,h,Yt(t,f),p,t)}):n.length>3&&(o=function(h,f,p){return n.call(this,h,f,p,t)}));const l=s[e](o,...r);return c?Yt(t,l):l}function za(t,e,n){const r=we(t);lt(r,"iterate",ri);const s=r[e](...n);return(s===-1||s===!1)&&ta(n[0])?(n[0]=we(n[0]),r[e](...n)):s}function Ns(t,e,n=[]){Tn(),al();const r=we(t)[e].apply(t,n);return cl(),wn(),r}const Z_=nl("__proto__,__v_isRef,__isVue"),Fd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mt));function ey(t){Mt(t)||(t=String(t));const e=we(this);return lt(e,"has",t),e.hasOwnProperty(t)}class Ud{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?uy:$d:i?qd:jd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!s){let l;if(o&&(l=J_[n]))return l;if(n==="hasOwnProperty")return ey}const c=Reflect.get(e,n,Qe(e)?e:r);if((Mt(n)?Fd.has(n):Z_(n))||(s||lt(e,"get",n),i))return c;if(Qe(c)){const l=o&&zo(n)?c:c.value;return s&&Se(l)?Ic(l):l}return Se(c)?s?Ic(c):ea(c):c}}class Bd extends Ud{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=re(e)&&zo(n);if(!this._isShallow){const h=An(i);if(!Ot(r)&&!An(r)&&(i=we(i),r=we(r)),!o&&Qe(i)&&!Qe(r))return h||(i.value=r),!0}const c=o?Number(n)<e.length:Re(e,n),l=Reflect.set(e,n,r,Qe(e)?e:s);return e===we(s)&&(c?Xt(r,i)&&pn(e,"set",n,r):pn(e,"add",n,r)),l}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&pn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Mt(n)||!Fd.has(n))&&lt(e,"has",n),r}ownKeys(e){return lt(e,"iterate",re(e)?"length":mr),Reflect.ownKeys(e)}}class ty extends Ud{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ny=new Bd,ry=new ty,sy=new Bd(!0);const Ec=t=>t,Zi=t=>Reflect.getPrototypeOf(t);function iy(t,e,n){return function(...r){const s=this.__v_raw,i=we(s),o=jr(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?Ec:e?zr:$t;return!e&&lt(i,"iterate",l?vc:mr),nt(Object.create(h),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}}})}}function eo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function oy(t,e){const n={get(s){const i=this.__v_raw,o=we(i),c=we(s);t||(Xt(s,c)&&lt(o,"get",s),lt(o,"get",c));const{has:l}=Zi(o),h=e?Ec:t?zr:$t;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&lt(we(s),"iterate",mr),s.size},has(s){const i=this.__v_raw,o=we(i),c=we(s);return t||(Xt(s,c)&&lt(o,"has",s),lt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=we(c),h=e?Ec:t?zr:$t;return!t&&lt(l,"iterate",mr),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return nt(n,t?{add:eo("add"),set:eo("set"),delete:eo("delete"),clear:eo("clear")}:{add(s){const i=we(this),o=Zi(i),c=we(s),l=!e&&!Ot(s)&&!An(s)?c:s;return o.has.call(i,l)||Xt(s,l)&&o.has.call(i,s)||Xt(c,l)&&o.has.call(i,c)||(i.add(l),pn(i,"add",l,l)),this},set(s,i){!e&&!Ot(i)&&!An(i)&&(i=we(i));const o=we(this),{has:c,get:l}=Zi(o);let h=c.call(o,s);h||(s=we(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?Xt(i,f)&&pn(o,"set",s,i):pn(o,"add",s,i),this},delete(s){const i=we(this),{has:o,get:c}=Zi(i);let l=o.call(i,s);l||(s=we(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&pn(i,"delete",s,void 0),h},clear(){const s=we(this),i=s.size!==0,o=s.clear();return i&&pn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=iy(s,t,e)}),n}function hl(t,e){const n=oy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const ay={get:hl(!1,!1)},cy={get:hl(!1,!0)},ly={get:hl(!0,!1)};const jd=new WeakMap,qd=new WeakMap,$d=new WeakMap,uy=new WeakMap;function hy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ea(t){return An(t)?t:fl(t,!1,ny,ay,jd)}function Hd(t){return fl(t,!1,sy,cy,qd)}function Ic(t){return fl(t,!0,ry,ly,$d)}function fl(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=hy(x_(t));if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function gr(t){return An(t)?gr(t.__v_raw):!!(t&&t.__v_isReactive)}function An(t){return!!(t&&t.__v_isReadonly)}function Ot(t){return!!(t&&t.__v_isShallow)}function ta(t){return t?!!t.__v_raw:!1}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function Wd(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Rd(t,"__v_skip",!0),t}const $t=t=>Se(t)?ea(t):t,zr=t=>Se(t)?Ic(t):t;function Qe(t){return t?t.__v_isRef===!0:!1}function Kd(t){return Gd(t,!1)}function fy(t){return Gd(t,!0)}function Gd(t,e){return Qe(t)?t:new dy(t,e)}class dy{constructor(e,n){this.dep=new ul,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:we(e),this._value=n?e:$t(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ot(e)||An(e);e=r?e:we(e),Xt(e,n)&&(this._rawValue=e,this._value=r?e:$t(e),this.dep.trigger())}}function _r(t){return Qe(t)?t.value:t}const py={get:(t,e,n)=>e==="__v_raw"?t:_r(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Qe(s)&&!Qe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function zd(t){return gr(t)?t:new Proxy(t,py)}function dS(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=gy(t,n);return e}class my{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Mt(n)?n:String(n),this._raw=we(e);let s=!0,i=e;if(!re(e)||Mt(this._key)||!zo(this._key))do s=!ta(i)||Ot(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=_r(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Qe(this._raw[this._key])){const n=this._object[this._key];if(Qe(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Y_(this._raw,this._key)}}function gy(t,e,n){return new my(t,e,n)}class _y{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ul(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ni-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return Dd(this,!0),!0}get value(){const e=this.dep.track();return xd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function yy(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new _y(r,s,n)}const to={},To=new WeakMap;let hr;function vy(t,e=!1,n=hr){if(n){let r=To.get(n);r||To.set(n,r=[]),r.push(t)}}function Ey(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=W=>s?W:Ot(W)||s===!1||s===0?mn(W,1):mn(W);let f,p,g,v,N=!1,O=!1;if(Qe(t)?(p=()=>t.value,N=Ot(t)):gr(t)?(p=()=>h(t),N=!0):re(t)?(O=!0,N=t.some(W=>gr(W)||Ot(W)),p=()=>t.map(W=>{if(Qe(W))return W.value;if(gr(W))return h(W);if(he(W))return l?l(W,2):W()})):he(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){Tn();try{g()}finally{wn()}}const W=hr;hr=f;try{return l?l(t,3,[v]):t(v)}finally{hr=W}}:p=Zt,e&&s){const W=p,de=s===!0?1/0:s;p=()=>mn(W(),de)}const k=G_(),K=()=>{f.stop(),k&&k.active&&rl(k.effects,f)};if(i&&e){const W=e;e=(...de)=>{const fe=W(...de);return K(),fe}}let B=O?new Array(t.length).fill(to):to;const q=W=>{if(!(!(f.flags&1)||!f.dirty&&!W))if(e){const de=f.run();if(W||s||N||(O?de.some((fe,w)=>Xt(fe,B[w])):Xt(de,B))){g&&g();const fe=hr;hr=f;try{const w=[de,B===to?void 0:O&&B[0]===to?[]:B,v];B=de,l?l(e,3,w):e(...w)}finally{hr=fe}}}else f.run()};return c&&c(q),f=new Nd(p),f.scheduler=o?()=>o(q,!1):q,v=W=>vy(W,!1,f),g=f.onStop=()=>{const W=To.get(f);if(W){if(l)l(W,4);else for(const de of W)de();To.delete(f)}},e?r?q(!0):B=f.run():o?o(q.bind(null,!0),!0):f.run(),K.pause=f.pause.bind(f),K.resume=f.resume.bind(f),K.stop=K,K}function mn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Qe(t))mn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)mn(t[r],e,n);else if(cs(t)||jr(t))t.forEach(r=>{mn(r,e,n)});else if(Ad(t)){for(const r in t)mn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&mn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ei(t,e,n,r){try{return r?t(...r):t()}catch(s){na(s,e,n)}}function Ht(t,e,n,r){if(he(t)){const s=Ei(t,e,n,r);return s&&Td(s)&&s.catch(i=>{na(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ht(t[i],e,n,r));return s}}function na(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){Tn(),Ei(i,null,10,[t,l,h]),wn();return}}Iy(t,n,s,r,o)}function Iy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const _t=[];let Qt=-1;const qr=[];let Fn=null,kr=0;const Qd=Promise.resolve();let wo=null;function dl(t){const e=wo||Qd;return t?e.then(this?t.bind(this):t):e}function Ty(t){let e=Qt+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=si(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function pl(t){if(!(t.flags&1)){const e=si(t),n=_t[_t.length-1];!n||!(t.flags&2)&&e>=si(n)?_t.push(t):_t.splice(Ty(e),0,t),t.flags|=1,Yd()}}function Yd(){wo||(wo=Qd.then(Xd))}function wy(t){re(t)?qr.push(...t):Fn&&t.id===-1?Fn.splice(kr+1,0,t):t.flags&1||(qr.push(t),t.flags|=1),Yd()}function uh(t,e,n=Qt+1){for(;n<_t.length;n++){const r=_t[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;_t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Jd(t){if(qr.length){const e=[...new Set(qr)].sort((n,r)=>si(n)-si(r));if(qr.length=0,Fn){Fn.push(...e);return}for(Fn=e,kr=0;kr<Fn.length;kr++){const n=Fn[kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fn=null,kr=0}}const si=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Xd(t){try{for(Qt=0;Qt<_t.length;Qt++){const e=_t[Qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ei(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qt<_t.length;Qt++){const e=_t[Qt];e&&(e.flags&=-2)}Qt=-1,_t.length=0,Jd(),wo=null,(_t.length||qr.length)&&Xd()}}let St=null,Zd=null;function Ao(t){const e=St;return St=t,Zd=t&&t.type.__scopeId||null,e}function Ay(t,e=St,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&So(-1);const i=Ao(e);let o;try{o=t(...s)}finally{Ao(i),r._d&&So(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function pS(t,e){if(St===null)return t;const n=oa(St),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ce]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&mn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Tn(),Ht(l,n,8,[t.el,c,t,e]),wn())}}function co(t,e){if(ht){let n=ht.provides;const r=ht.parent&&ht.parent.provides;r===n&&(n=ht.provides=Object.create(r)),n[t]=e}}function qt(t,e,n=!1){const r=bv();if(r||$r){let s=$r?$r._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}const Ry=Symbol.for("v-scx"),by=()=>qt(Ry);function lo(t,e,n){return ep(t,e,n)}function ep(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,c=nt({},n),l=e&&r||!e&&i!=="post";let h;if(oi){if(i==="sync"){const v=by();h=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=Zt,v.resume=Zt,v.pause=Zt,v}}const f=ht;c.call=(v,N,O)=>Ht(v,f,N,O);let p=!1;i==="post"?c.scheduler=v=>{Tt(v,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(v,N)=>{N?v():pl(v)}),c.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const g=Ey(t,e,c);return oi&&(h?h.push(g):l&&g()),g}function Sy(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?tp(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=Ii(this),c=ep(s,i.bind(r),n);return o(),c}function tp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Py=Symbol("_vte"),Cy=t=>t.__isTeleport,Qa=Symbol("_leaveCb");function ml(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ml(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function np(t,e){return he(t)?nt({name:t.name},e,{setup:t}):t}function rp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function hh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ro=new WeakMap;function Ks(t,e,n,r,s=!1){if(re(t)){t.forEach((O,k)=>Ks(O,e&&(re(e)?e[k]:e),n,r,s));return}if(Gs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ks(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?oa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Ce?c.refs={}:c.refs,p=c.setupState,g=we(p),v=p===Ce?Id:O=>hh(f,O)?!1:Re(g,O),N=(O,k)=>!(k&&hh(f,k));if(h!=null&&h!==l){if(fh(e),Ue(h))f[h]=null,v(h)&&(p[h]=null);else if(Qe(h)){const O=e;N(h,O.k)&&(h.value=null),O.k&&(f[O.k]=null)}}if(he(l))Ei(l,c,12,[o,f]);else{const O=Ue(l),k=Qe(l);if(O||k){const K=()=>{if(t.f){const B=O?v(l)?p[l]:f[l]:N()||!t.k?l.value:f[t.k];if(s)re(B)&&rl(B,i);else if(re(B))B.includes(i)||B.push(i);else if(O)f[l]=[i],v(l)&&(p[l]=f[l]);else{const q=[i];N(l,t.k)&&(l.value=q),t.k&&(f[t.k]=q)}}else O?(f[l]=o,v(l)&&(p[l]=o)):k&&(N(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const B=()=>{K(),Ro.delete(t)};B.id=-1,Ro.set(t,B),Tt(B,n)}else fh(t),K()}}}function fh(t){const e=Ro.get(t);e&&(e.flags|=8,Ro.delete(t))}Xo().requestIdleCallback;Xo().cancelIdleCallback;const Gs=t=>!!t.type.__asyncLoader,sp=t=>t.type.__isKeepAlive;function Ny(t,e){ip(t,"a",e)}function Oy(t,e){ip(t,"da",e)}function ip(t,e,n=ht){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ra(e,r,n),n){let s=n.parent;for(;s&&s.parent;)sp(s.parent.vnode)&&Dy(r,e,n,s),s=s.parent}}function Dy(t,e,n,r){const s=ra(e,t,r,!0);op(()=>{rl(r[e],s)},n)}function ra(t,e,n=ht,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Tn();const c=Ii(n),l=Ht(e,n,t,o);return c(),wn(),l});return r?s.unshift(i):s.push(i),i}}const Cn=t=>(e,n=ht)=>{(!oi||t==="sp")&&ra(t,(...r)=>e(...r),n)},Vy=Cn("bm"),ky=Cn("m"),xy=Cn("bu"),My=Cn("u"),Ly=Cn("bum"),op=Cn("um"),Fy=Cn("sp"),Uy=Cn("rtg"),By=Cn("rtc");function jy(t,e=ht){ra("ec",t,e)}const qy="components";function $y(t,e){return Wy(qy,t,!0,e)||t}const Hy=Symbol.for("v-ndc");function Wy(t,e,n=!0,r=!1){const s=St||ht;if(s){const i=s.type;{const c=Ov(i,!1);if(c&&(c===e||c===yt(e)||c===Yo(yt(e))))return i}const o=dh(s[t]||i[t],e)||dh(s.appContext[t],e);return!o&&r?i:o}}function dh(t,e){return t&&(t[e]||t[yt(e)]||t[Yo(yt(e))])}function mS(t,e,n,r){let s;const i=n,o=re(t);if(o||Ue(t)){const c=o&&gr(t);let l=!1,h=!1;c&&(l=!Ot(t),h=An(t),t=Zo(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?h?zr($t(t[f])):$t(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Tc=t=>t?Cp(t)?oa(t):Tc(t.parent):null,zs=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tc(t.parent),$root:t=>Tc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>cp(t),$forceUpdate:t=>t.f||(t.f=()=>{pl(t.update)}),$nextTick:t=>t.n||(t.n=dl.bind(t.proxy)),$watch:t=>Sy.bind(t)}),Ya=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Re(t,e),Ky={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ya(r,e))return o[e]=1,r[e];if(s!==Ce&&Re(s,e))return o[e]=2,s[e];if(Re(i,e))return o[e]=3,i[e];if(n!==Ce&&Re(n,e))return o[e]=4,n[e];wc&&(o[e]=0)}}const h=zs[e];let f,p;if(h)return e==="$attrs"&&lt(t.attrs,"get",""),h(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==Ce&&Re(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Re(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ya(s,e)?(s[e]=n,!0):r!==Ce&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Ce&&c[0]!=="$"&&Re(t,c)||Ya(e,c)||Re(i,c)||Re(r,c)||Re(zs,c)||Re(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ph(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wc=!0;function Gy(t){const e=cp(t),n=t.proxy,r=t.ctx;wc=!1,e.beforeCreate&&mh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:v,updated:N,activated:O,deactivated:k,beforeDestroy:K,beforeUnmount:B,destroyed:q,unmounted:W,render:de,renderTracked:fe,renderTriggered:w,errorCaptured:y,serverPrefetch:T,expose:A,inheritAttrs:R,components:S,directives:E,filters:dt}=e;if(h&&zy(h,r,null),o)for(const ye in o){const me=o[ye];he(me)&&(r[ye]=me.bind(n))}if(s){const ye=s.call(n,n);Se(ye)&&(t.data=ea(ye))}if(wc=!0,i)for(const ye in i){const me=i[ye],At=he(me)?me.bind(n,n):he(me.get)?me.get.bind(n,n):Zt,Ft=!he(me)&&he(me.set)?me.set.bind(n):Zt,Vt=Bt({get:At,set:Ft});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:Ve=>Vt.value=Ve})}if(c)for(const ye in c)ap(c[ye],r,n,ye);if(l){const ye=he(l)?l.call(n):l;Reflect.ownKeys(ye).forEach(me=>{co(me,ye[me])})}f&&mh(f,t,"c");function je(ye,me){re(me)?me.forEach(At=>ye(At.bind(n))):me&&ye(me.bind(n))}if(je(Vy,p),je(ky,g),je(xy,v),je(My,N),je(Ny,O),je(Oy,k),je(jy,y),je(By,fe),je(Uy,w),je(Ly,B),je(op,W),je(Fy,T),re(A))if(A.length){const ye=t.exposed||(t.exposed={});A.forEach(me=>{Object.defineProperty(ye,me,{get:()=>n[me],set:At=>n[me]=At,enumerable:!0})})}else t.exposed||(t.exposed={});de&&t.render===Zt&&(t.render=de),R!=null&&(t.inheritAttrs=R),S&&(t.components=S),E&&(t.directives=E),T&&rp(t)}function zy(t,e,n=Zt){re(t)&&(t=Ac(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=qt(s.from||r,s.default,!0):i=qt(s.from||r):i=qt(s),Qe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function mh(t,e,n){Ht(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ap(t,e,n,r){let s=r.includes(".")?tp(n,r):()=>n[r];if(Ue(t)){const i=e[t];he(i)&&lo(s,i)}else if(he(t))lo(s,t.bind(n));else if(Se(t))if(re(t))t.forEach(i=>ap(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&lo(s,i,t)}}function cp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>bo(l,h,o,!0)),bo(l,e,o)),Se(e)&&i.set(e,l),l}function bo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&bo(t,i,n,!0),s&&s.forEach(o=>bo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Qy[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Qy={data:gh,props:_h,emits:_h,methods:xs,computed:xs,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:xs,directives:xs,watch:Jy,provide:gh,inject:Yy};function gh(t,e){return e?t?function(){return nt(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function Yy(t,e){return xs(Ac(t),Ac(e))}function Ac(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function xs(t,e){return t?nt(Object.create(null),t,e):e}function _h(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:nt(Object.create(null),ph(t),ph(e??{})):e}function Jy(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function lp(){return{app:null,config:{isNativeTag:Id,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xy=0;function Zy(t,e){return function(r,s=null){he(r)||(r=nt({},r)),s!=null&&!Se(s)&&(s=null);const i=lp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Xy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Vv,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&he(f.install)?(o.add(f),f.install(h,...p)):he(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!l){const v=h._ceVNode||Ct(r,s);return v.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(v,f,g),l=!0,h._container=f,f.__vue_app__=h,oa(v.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Ht(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=$r;$r=h;try{return f()}finally{$r=p}}};return h}}let $r=null;const ev=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${yt(e)}Modifiers`]||t[`${tr(e)}Modifiers`];function tv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&ev(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ue(f)?f.trim():f)),o.number&&(s=n.map(Jo)));let c,l=r[c=Ha(e)]||r[c=Ha(yt(e))];!l&&i&&(l=r[c=Ha(tr(e))]),l&&Ht(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ht(h,t,6,s)}}const nv=new WeakMap;function up(t,e,n=!1){const r=n?nv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!he(t)){const l=h=>{const f=up(h,e,!0);f&&(c=!0,nt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Se(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>o[l]=null):nt(o,i),Se(t)&&r.set(t,o),o)}function sa(t,e){return!t||!Ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,tr(e))||Re(t,e))}function yh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:v,ctx:N,inheritAttrs:O}=t,k=Ao(t);let K,B;try{if(n.shapeFlag&4){const W=s||r,de=W;K=Jt(h.call(de,W,f,p,v,g,N)),B=c}else{const W=e;K=Jt(W.length>1?W(p,{attrs:c,slots:o,emit:l}):W(p,null)),B=e.props?c:rv(c)}}catch(W){Qs.length=0,na(W,t,1),K=Ct(Jn)}let q=K;if(B&&O!==!1){const W=Object.keys(B),{shapeFlag:de}=q;W.length&&de&7&&(i&&W.some(Go)&&(B=sv(B,i)),q=Qr(q,B,!1,!0))}return n.dirs&&(q=Qr(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&ml(q,n.transition),K=q,Ao(k),K}const rv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ko(n))&&((e||(e={}))[n]=t[n]);return e},sv=(t,e)=>{const n={};for(const r in t)(!Go(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function iv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?vh(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(hp(o,r,g)&&!sa(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?vh(r,o,h):!0:!!o;return!1}function vh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(hp(e,t,i)&&!sa(n,i))return!0}return!1}function hp(t,e,n){const r=t[n],s=e[n];return n==="style"&&Se(r)&&Se(s)?!ls(r,s):r!==s}function ov({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const fp={},dp=()=>Object.create(fp),pp=t=>Object.getPrototypeOf(t)===fp;function av(t,e,n,r=!1){const s={},i=dp();t.propsDefaults=Object.create(null),mp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Hd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function cv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=we(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(sa(t.emitsOptions,g))continue;const v=e[g];if(l)if(Re(i,g))v!==i[g]&&(i[g]=v,h=!0);else{const N=yt(g);s[N]=Rc(l,c,N,v,t,!1)}else v!==i[g]&&(i[g]=v,h=!0)}}}else{mp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=tr(p))===p||!Re(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Rc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&pn(t.attrs,"set","")}function mp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if($s(l))continue;const h=e[l];let f;s&&Re(s,f=yt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:sa(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=we(n),h=c||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Rc(s,l,p,h[p],t,!Re(h,p))}}return o}function Rc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Re(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Ii(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===tr(n))&&(r=!0))}return r}const lv=new WeakMap;function gp(t,e,n=!1){const r=n?lv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!he(t)){const f=p=>{l=!0;const[g,v]=gp(p,e,!0);nt(o,g),v&&c.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Se(t)&&r.set(t,Br),Br;if(re(i))for(let f=0;f<i.length;f++){const p=yt(i[f]);Eh(p)&&(o[p]=Ce)}else if(i)for(const f in i){const p=yt(f);if(Eh(p)){const g=i[f],v=o[p]=re(g)||he(g)?{type:g}:nt({},g),N=v.type;let O=!1,k=!0;if(re(N))for(let K=0;K<N.length;++K){const B=N[K],q=he(B)&&B.name;if(q==="Boolean"){O=!0;break}else q==="String"&&(k=!1)}else O=he(N)&&N.name==="Boolean";v[0]=O,v[1]=k,(O||Re(v,"default"))&&c.push(p)}}const h=[o,c];return Se(t)&&r.set(t,h),h}function Eh(t){return t[0]!=="$"&&!$s(t)}const gl=t=>t==="_"||t==="_ctx"||t==="$stable",_l=t=>re(t)?t.map(Jt):[Jt(t)],uv=(t,e,n)=>{if(e._n)return e;const r=Ay((...s)=>_l(e(...s)),n);return r._c=!1,r},_p=(t,e,n)=>{const r=t._ctx;for(const s in t){if(gl(s))continue;const i=t[s];if(he(i))e[s]=uv(s,i,r);else if(i!=null){const o=_l(i);e[s]=()=>o}}},yp=(t,e)=>{const n=_l(e);t.slots.default=()=>n},vp=(t,e,n)=>{for(const r in e)(n||!gl(r))&&(t[r]=e[r])},hv=(t,e,n)=>{const r=t.slots=dp();if(t.vnode.shapeFlag&32){const s=e._;s?(vp(r,e,n),n&&Rd(r,"_",s,!0)):_p(e,r)}else e&&yp(t,e)},fv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:vp(s,e,n):(i=!e.$stable,_p(e,s)),o=e}else e&&(yp(t,e),o={default:1});if(i)for(const c in s)!gl(c)&&o[c]==null&&delete s[c]},Tt=_v;function dv(t){return pv(t)}function pv(t,e){const n=Xo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:v=Zt,insertStaticContent:N}=t,O=(_,I,b,D=null,L=null,V=null,G=void 0,$=null,j=!!I.dynamicChildren)=>{if(_===I)return;_&&!Os(_,I)&&(D=x(_),Ve(_,L,V,!0),_=null),I.patchFlag===-2&&(j=!1,I.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:Q}=I;switch(F){case ia:k(_,I,b,D);break;case Jn:K(_,I,b,D);break;case Xa:_==null&&B(I,b,D,G);break;case fn:S(_,I,b,D,L,V,G,$,j);break;default:Q&1?de(_,I,b,D,L,V,G,$,j):Q&6?E(_,I,b,D,L,V,G,$,j):(Q&64||Q&128)&&F.process(_,I,b,D,L,V,G,$,j,Z)}ne!=null&&L?Ks(ne,_&&_.ref,V,I||_,!I):ne==null&&_&&_.ref!=null&&Ks(_.ref,null,V,_,!0)},k=(_,I,b,D)=>{if(_==null)r(I.el=c(I.children),b,D);else{const L=I.el=_.el;I.children!==_.children&&h(L,I.children)}},K=(_,I,b,D)=>{_==null?r(I.el=l(I.children||""),b,D):I.el=_.el},B=(_,I,b,D)=>{[_.el,_.anchor]=N(_.children,I,b,D,_.el,_.anchor)},q=({el:_,anchor:I},b,D)=>{let L;for(;_&&_!==I;)L=g(_),r(_,b,D),_=L;r(I,b,D)},W=({el:_,anchor:I})=>{let b;for(;_&&_!==I;)b=g(_),s(_),_=b;s(I)},de=(_,I,b,D,L,V,G,$,j)=>{if(I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),_==null)fe(I,b,D,L,V,G,$,j);else{const F=_.el&&_.el._isVueCE?_.el:null;try{F&&F._beginPatch(),T(_,I,L,V,G,$,j)}finally{F&&F._endPatch()}}},fe=(_,I,b,D,L,V,G,$)=>{let j,F;const{props:ne,shapeFlag:Q,transition:ee,dirs:ie}=_;if(j=_.el=o(_.type,V,ne&&ne.is,ne),Q&8?f(j,_.children):Q&16&&y(_.children,j,null,D,L,Ja(_,V),G,$),ie&&lr(_,null,D,"created"),w(j,_,_.scopeId,G,D),ne){for(const ue in ne)ue!=="value"&&!$s(ue)&&i(j,ue,null,ne[ue],V,D);"value"in ne&&i(j,"value",null,ne.value,V),(F=ne.onVnodeBeforeMount)&&zt(F,D,_)}ie&&lr(_,null,D,"beforeMount");const se=mv(L,ee);se&&ee.beforeEnter(j),r(j,I,b),((F=ne&&ne.onVnodeMounted)||se||ie)&&Tt(()=>{try{F&&zt(F,D,_),se&&ee.enter(j),ie&&lr(_,null,D,"mounted")}finally{}},L)},w=(_,I,b,D,L)=>{if(b&&v(_,b),D)for(let V=0;V<D.length;V++)v(_,D[V]);if(L){let V=L.subTree;if(I===V||wp(V.type)&&(V.ssContent===I||V.ssFallback===I)){const G=L.vnode;w(_,G,G.scopeId,G.slotScopeIds,L.parent)}}},y=(_,I,b,D,L,V,G,$,j=0)=>{for(let F=j;F<_.length;F++){const ne=_[F]=$?dn(_[F]):Jt(_[F]);O(null,ne,I,b,D,L,V,G,$)}},T=(_,I,b,D,L,V,G)=>{const $=I.el=_.el;let{patchFlag:j,dynamicChildren:F,dirs:ne}=I;j|=_.patchFlag&16;const Q=_.props||Ce,ee=I.props||Ce;let ie;if(b&&ur(b,!1),(ie=ee.onVnodeBeforeUpdate)&&zt(ie,b,I,_),ne&&lr(I,_,b,"beforeUpdate"),b&&ur(b,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&f($,""),F?A(_.dynamicChildren,F,$,b,D,Ja(I,L),V):G||me(_,I,$,null,b,D,Ja(I,L),V,!1),j>0){if(j&16)R($,Q,ee,b,L);else if(j&2&&Q.class!==ee.class&&i($,"class",null,ee.class,L),j&4&&i($,"style",Q.style,ee.style,L),j&8){const se=I.dynamicProps;for(let ue=0;ue<se.length;ue++){const Ee=se[ue],xe=Q[Ee],qe=ee[Ee];(qe!==xe||Ee==="value")&&i($,Ee,xe,qe,L,b)}}j&1&&_.children!==I.children&&f($,I.children)}else!G&&F==null&&R($,Q,ee,b,L);((ie=ee.onVnodeUpdated)||ne)&&Tt(()=>{ie&&zt(ie,b,I,_),ne&&lr(I,_,b,"updated")},D)},A=(_,I,b,D,L,V,G)=>{for(let $=0;$<I.length;$++){const j=_[$],F=I[$],ne=j.el&&(j.type===fn||!Os(j,F)||j.shapeFlag&198)?p(j.el):b;O(j,F,ne,null,D,L,V,G,!0)}},R=(_,I,b,D,L)=>{if(I!==b){if(I!==Ce)for(const V in I)!$s(V)&&!(V in b)&&i(_,V,I[V],null,L,D);for(const V in b){if($s(V))continue;const G=b[V],$=I[V];G!==$&&V!=="value"&&i(_,V,$,G,L,D)}"value"in b&&i(_,"value",I.value,b.value,L)}},S=(_,I,b,D,L,V,G,$,j)=>{const F=I.el=_?_.el:c(""),ne=I.anchor=_?_.anchor:c("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:ie}=I;ie&&($=$?$.concat(ie):ie),_==null?(r(F,b,D),r(ne,b,D),y(I.children||[],b,ne,L,V,G,$,j)):Q>0&&Q&64&&ee&&_.dynamicChildren&&_.dynamicChildren.length===ee.length?(A(_.dynamicChildren,ee,b,L,V,G,$),(I.key!=null||L&&I===L.subTree)&&Ep(_,I,!0)):me(_,I,b,ne,L,V,G,$,j)},E=(_,I,b,D,L,V,G,$,j)=>{I.slotScopeIds=$,_==null?I.shapeFlag&512?L.ctx.activate(I,b,D,G,j):dt(I,b,D,L,V,G,j):Dt(_,I,j)},dt=(_,I,b,D,L,V,G)=>{const $=_.component=Rv(_,D,L);if(sp(_)&&($.ctx.renderer=Z),Sv($,!1,G),$.asyncDep){if(L&&L.registerDep($,je,G),!_.el){const j=$.subTree=Ct(Jn);K(null,j,I,b),_.placeholder=j.el}}else je($,_,I,b,L,V,G)},Dt=(_,I,b)=>{const D=I.component=_.component;if(iv(_,I,b))if(D.asyncDep&&!D.asyncResolved){ye(D,I,b);return}else D.next=I,D.update();else I.el=_.el,D.vnode=I},je=(_,I,b,D,L,V,G)=>{const $=()=>{if(_.isMounted){let{next:Q,bu:ee,u:ie,parent:se,vnode:ue}=_;{const st=Ip(_);if(st){Q&&(Q.el=ue.el,ye(_,Q,G)),st.asyncDep.then(()=>{Tt(()=>{_.isUnmounted||F()},L)});return}}let Ee=Q,xe;ur(_,!1),Q?(Q.el=ue.el,ye(_,Q,G)):Q=ue,ee&&ao(ee),(xe=Q.props&&Q.props.onVnodeBeforeUpdate)&&zt(xe,se,Q,ue),ur(_,!0);const qe=yh(_),kt=_.subTree;_.subTree=qe,O(kt,qe,p(kt.el),x(kt),_,L,V),Q.el=qe.el,Ee===null&&ov(_,qe.el),ie&&Tt(ie,L),(xe=Q.props&&Q.props.onVnodeUpdated)&&Tt(()=>zt(xe,se,Q,ue),L)}else{let Q;const{el:ee,props:ie}=I,{bm:se,m:ue,parent:Ee,root:xe,type:qe}=_,kt=Gs(I);ur(_,!1),se&&ao(se),!kt&&(Q=ie&&ie.onVnodeBeforeMount)&&zt(Q,Ee,I),ur(_,!0);{xe.ce&&xe.ce._hasShadowRoot()&&xe.ce._injectChildStyle(qe,_.parent?_.parent.type:void 0);const st=_.subTree=yh(_);O(null,st,b,D,_,L,V),I.el=st.el}if(ue&&Tt(ue,L),!kt&&(Q=ie&&ie.onVnodeMounted)){const st=I;Tt(()=>zt(Q,Ee,st),L)}(I.shapeFlag&256||Ee&&Gs(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&_.a&&Tt(_.a,L),_.isMounted=!0,I=b=D=null}};_.scope.on();const j=_.effect=new Nd($);_.scope.off();const F=_.update=j.run.bind(j),ne=_.job=j.runIfDirty.bind(j);ne.i=_,ne.id=_.uid,j.scheduler=()=>pl(ne),ur(_,!0),F()},ye=(_,I,b)=>{I.component=_;const D=_.vnode.props;_.vnode=I,_.next=null,cv(_,I.props,D,b),fv(_,I.children,b),Tn(),uh(_),wn()},me=(_,I,b,D,L,V,G,$,j=!1)=>{const F=_&&_.children,ne=_?_.shapeFlag:0,Q=I.children,{patchFlag:ee,shapeFlag:ie}=I;if(ee>0){if(ee&128){Ft(F,Q,b,D,L,V,G,$,j);return}else if(ee&256){At(F,Q,b,D,L,V,G,$,j);return}}ie&8?(ne&16&&It(F,L,V),Q!==F&&f(b,Q)):ne&16?ie&16?Ft(F,Q,b,D,L,V,G,$,j):It(F,L,V,!0):(ne&8&&f(b,""),ie&16&&y(Q,b,D,L,V,G,$,j))},At=(_,I,b,D,L,V,G,$,j)=>{_=_||Br,I=I||Br;const F=_.length,ne=I.length,Q=Math.min(F,ne);let ee;for(ee=0;ee<Q;ee++){const ie=I[ee]=j?dn(I[ee]):Jt(I[ee]);O(_[ee],ie,b,null,L,V,G,$,j)}F>ne?It(_,L,V,!0,!1,Q):y(I,b,D,L,V,G,$,j,Q)},Ft=(_,I,b,D,L,V,G,$,j)=>{let F=0;const ne=I.length;let Q=_.length-1,ee=ne-1;for(;F<=Q&&F<=ee;){const ie=_[F],se=I[F]=j?dn(I[F]):Jt(I[F]);if(Os(ie,se))O(ie,se,b,null,L,V,G,$,j);else break;F++}for(;F<=Q&&F<=ee;){const ie=_[Q],se=I[ee]=j?dn(I[ee]):Jt(I[ee]);if(Os(ie,se))O(ie,se,b,null,L,V,G,$,j);else break;Q--,ee--}if(F>Q){if(F<=ee){const ie=ee+1,se=ie<ne?I[ie].el:D;for(;F<=ee;)O(null,I[F]=j?dn(I[F]):Jt(I[F]),b,se,L,V,G,$,j),F++}}else if(F>ee)for(;F<=Q;)Ve(_[F],L,V,!0),F++;else{const ie=F,se=F,ue=new Map;for(F=se;F<=ee;F++){const Ye=I[F]=j?dn(I[F]):Jt(I[F]);Ye.key!=null&&ue.set(Ye.key,F)}let Ee,xe=0;const qe=ee-se+1;let kt=!1,st=0;const Dn=new Array(qe);for(F=0;F<qe;F++)Dn[F]=0;for(F=ie;F<=Q;F++){const Ye=_[F];if(xe>=qe){Ve(Ye,L,V,!0);continue}let xt;if(Ye.key!=null)xt=ue.get(Ye.key);else for(Ee=se;Ee<=ee;Ee++)if(Dn[Ee-se]===0&&Os(Ye,I[Ee])){xt=Ee;break}xt===void 0?Ve(Ye,L,V,!0):(Dn[xt-se]=F+1,xt>=st?st=xt:kt=!0,O(Ye,I[xt],b,null,L,V,G,$,j),xe++)}const _s=kt?gv(Dn):Br;for(Ee=_s.length-1,F=qe-1;F>=0;F--){const Ye=se+F,xt=I[Ye],Li=I[Ye+1],Pr=Ye+1<ne?Li.el||Tp(Li):D;Dn[F]===0?O(null,xt,b,Pr,L,V,G,$,j):kt&&(Ee<0||F!==_s[Ee]?Vt(xt,b,Pr,2):Ee--)}}},Vt=(_,I,b,D,L=null)=>{const{el:V,type:G,transition:$,children:j,shapeFlag:F}=_;if(F&6){Vt(_.component.subTree,I,b,D);return}if(F&128){_.suspense.move(I,b,D);return}if(F&64){G.move(_,I,b,Z);return}if(G===fn){r(V,I,b);for(let Q=0;Q<j.length;Q++)Vt(j[Q],I,b,D);r(_.anchor,I,b);return}if(G===Xa){q(_,I,b);return}if(D!==2&&F&1&&$)if(D===0)$.persisted&&!V[Qa]?r(V,I,b):($.beforeEnter(V),r(V,I,b),Tt(()=>$.enter(V),L));else{const{leave:Q,delayLeave:ee,afterLeave:ie}=$,se=()=>{_.ctx.isUnmounted?s(V):r(V,I,b)},ue=()=>{const Ee=V._isLeaving||!!V[Qa];V._isLeaving&&V[Qa](!0),$.persisted&&!Ee?se():Q(V,()=>{se(),ie&&ie()})};ee?ee(V,se,ue):ue()}else r(V,I,b)},Ve=(_,I,b,D=!1,L=!1)=>{const{type:V,props:G,ref:$,children:j,dynamicChildren:F,shapeFlag:ne,patchFlag:Q,dirs:ee,cacheIndex:ie,memo:se}=_;if(Q===-2&&(L=!1),$!=null&&(Tn(),Ks($,null,b,_,!0),wn()),ie!=null&&(I.renderCache[ie]=void 0),ne&256){I.ctx.deactivate(_);return}const ue=ne&1&&ee,Ee=!Gs(_);let xe;if(Ee&&(xe=G&&G.onVnodeBeforeUnmount)&&zt(xe,I,_),ne&6)Rt(_.component,b,D);else{if(ne&128){_.suspense.unmount(b,D);return}ue&&lr(_,null,I,"beforeUnmount"),ne&64?_.type.remove(_,I,b,Z,D):F&&!F.hasOnce&&(V!==fn||Q>0&&Q&64)?It(F,I,b,!1,!0):(V===fn&&Q&384||!L&&ne&16)&&It(j,I,b),D&&ke(_)}const qe=se!=null&&ie==null;(Ee&&(xe=G&&G.onVnodeUnmounted)||ue||qe)&&Tt(()=>{xe&&zt(xe,I,_),ue&&lr(_,null,I,"unmounted"),qe&&(_.el=null)},b)},ke=_=>{const{type:I,el:b,anchor:D,transition:L}=_;if(I===fn){On(b,D);return}if(I===Xa){W(_);return}const V=()=>{s(b),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(_.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:$}=L,j=()=>G(b,V);$?$(_.el,V,j):j()}else V()},On=(_,I)=>{let b;for(;_!==I;)b=g(_),s(_),_=b;s(I)},Rt=(_,I,b)=>{const{bum:D,scope:L,job:V,subTree:G,um:$,m:j,a:F}=_;Ih(j),Ih(F),D&&ao(D),L.stop(),V&&(V.flags|=8,Ve(G,_,I,b)),$&&Tt($,I),Tt(()=>{_.isUnmounted=!0},I)},It=(_,I,b,D=!1,L=!1,V=0)=>{for(let G=V;G<_.length;G++)Ve(_[G],I,b,D,L)},x=_=>{if(_.shapeFlag&6)return x(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const I=g(_.anchor||_.el),b=I&&I[Py];return b?g(b):I};let J=!1;const z=(_,I,b)=>{let D;_==null?I._vnode&&(Ve(I._vnode,null,null,!0),D=I._vnode.component):O(I._vnode||null,_,I,null,null,null,b),I._vnode=_,J||(J=!0,uh(D),Jd(),J=!1)},Z={p:O,um:Ve,m:Vt,r:ke,mt:dt,mc:y,pc:me,pbc:A,n:x,o:t};return{render:z,hydrate:void 0,createApp:Zy(z)}}function Ja({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function mv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ep(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=dn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Ep(o,c)),c.type===ia&&(c.patchFlag===-1&&(c=s[i]=dn(c)),c.el=o.el),c.type===Jn&&!c.el&&(c.el=o.el)}}function gv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ip(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ip(e)}function Ih(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Tp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Tp(e.subTree):null}const wp=t=>t.__isSuspense;function _v(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):wy(t)}const fn=Symbol.for("v-fgt"),ia=Symbol.for("v-txt"),Jn=Symbol.for("v-cmt"),Xa=Symbol.for("v-stc"),Qs=[];let Pt=null;function Ap(t=!1){Qs.push(Pt=t?null:[])}function yv(){Qs.pop(),Pt=Qs[Qs.length-1]||null}let ii=1;function So(t,e=!1){ii+=t,t<0&&Pt&&e&&(Pt.hasOnce=!0)}function Rp(t){return t.dynamicChildren=ii>0?Pt||Br:null,yv(),ii>0&&Pt&&Pt.push(t),t}function gS(t,e,n,r,s,i){return Rp(Pp(t,e,n,r,s,i,!0))}function bp(t,e,n,r,s){return Rp(Ct(t,e,n,r,s,!0))}function Po(t){return t?t.__v_isVNode===!0:!1}function Os(t,e){return t.type===e.type&&t.key===e.key}const Sp=({key:t})=>t??null,uo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||Qe(t)||he(t)?{i:St,r:t,k:e,f:!!n}:t:null);function Pp(t,e=null,n=null,r=0,s=null,i=t===fn?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sp(e),ref:e&&uo(e),scopeId:Zd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:St};return c?(yl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),ii>0&&!o&&Pt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pt.push(l),l}const Ct=vv;function vv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Hy)&&(t=Jn),Po(t)){const c=Qr(t,e,!0);return n&&yl(c,n),ii>0&&!i&&Pt&&(c.shapeFlag&6?Pt[Pt.indexOf(t)]=c:Pt.push(c)),c.patchFlag=-2,c}if(Dv(t)&&(t=t.__vccOpts),e){e=Ev(e);let{class:c,style:l}=e;c&&!Ue(c)&&(e.class=il(c)),Se(l)&&(ta(l)&&!re(l)&&(l=nt({},l)),e.style=sl(l))}const o=Ue(t)?1:wp(t)?128:Cy(t)?64:Se(t)?4:he(t)?2:0;return Pp(t,e,n,r,s,o,i,!0)}function Ev(t){return t?ta(t)||pp(t)?nt({},t):t:null}function Qr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?Tv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Sp(h),ref:e&&e.ref?n&&i?re(i)?i.concat(uo(e)):[i,uo(e)]:uo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==fn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qr(t.ssContent),ssFallback:t.ssFallback&&Qr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ml(f,l.clone(f)),f}function Iv(t=" ",e=0){return Ct(ia,null,t,e)}function _S(t="",e=!1){return e?(Ap(),bp(Jn,null,t)):Ct(Jn,null,t)}function Jt(t){return t==null||typeof t=="boolean"?Ct(Jn):re(t)?Ct(fn,null,t.slice()):Po(t)?dn(t):Ct(ia,null,String(t))}function dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qr(t)}function yl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),yl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!pp(e)?e._ctx=St:s===3&&St&&(St.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:St},n=32):(e=String(e),r&64?(n=16,e=[Iv(e)]):n=8);t.children=e,t.shapeFlag|=n}function Tv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=il([e.class,r.class]));else if(s==="style")e.style=sl([e.style,r.style]);else if(Ko(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Go(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function zt(t,e,n,r=null){Ht(t,e,7,[n,r])}const wv=lp();let Av=0;function Rv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||wv,i={uid:Av++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gp(r,s),emitsOptions:up(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=tv.bind(null,i),t.ce&&t.ce(i),i}let ht=null;const bv=()=>ht||St;let Co,bc;{const t=Xo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Co=e("__VUE_INSTANCE_SETTERS__",n=>ht=n),bc=e("__VUE_SSR_SETTERS__",n=>oi=n)}const Ii=t=>{const e=ht;return Co(t),t.scope.on(),()=>{t.scope.off(),Co(e)}},Th=()=>{ht&&ht.scope.off(),Co(null)};function Cp(t){return t.vnode.shapeFlag&4}let oi=!1;function Sv(t,e=!1,n=!1){e&&bc(e);const{props:r,children:s}=t.vnode,i=Cp(t);av(t,r,i,e),hv(t,s,n||e);const o=i?Pv(t,e):void 0;return e&&bc(!1),o}function Pv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ky);const{setup:r}=n;if(r){Tn();const s=t.setupContext=r.length>1?Nv(t):null,i=Ii(t),o=Ei(r,t,0,[t.props,s]),c=Td(o);if(wn(),i(),(c||t.sp)&&!Gs(t)&&rp(t),c){if(o.then(Th,Th),e)return o.then(l=>{wh(t,l)}).catch(l=>{na(l,t,0)});t.asyncDep=o}else wh(t,o)}else Np(t)}function wh(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=zd(e)),Np(t)}function Np(t,e,n){const r=t.type;t.render||(t.render=r.render||Zt);{const s=Ii(t);Tn();try{Gy(t)}finally{wn(),s()}}}const Cv={get(t,e){return lt(t,"get",""),t[e]}};function Nv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Cv),slots:t.slots,emit:t.emit,expose:e}}function oa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(zd(Wd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zs)return zs[n](t)},has(e,n){return n in e||n in zs}})):t.proxy}function Ov(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function Dv(t){return he(t)&&"__vccOpts"in t}const Bt=(t,e)=>yy(t,e,oi);function Op(t,e,n){try{So(-1);const r=arguments.length;return r===2?Se(e)&&!re(e)?Po(e)?Ct(t,null,[e]):Ct(t,e):Ct(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Po(n)&&(n=[n]),Ct(t,e,n))}finally{So(1)}}const Vv="3.5.38";/**
* @vue/runtime-dom v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sc;const Ah=typeof window<"u"&&window.trustedTypes;if(Ah)try{Sc=Ah.createPolicy("vue",{createHTML:t=>t})}catch{}const Dp=Sc?t=>Sc.createHTML(t):t=>t,kv="http://www.w3.org/2000/svg",xv="http://www.w3.org/1998/Math/MathML",hn=typeof document<"u"?document:null,Rh=hn&&hn.createElement("template"),Mv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?hn.createElementNS(kv,t):e==="mathml"?hn.createElementNS(xv,t):n?hn.createElement(t,{is:n}):hn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>hn.createTextNode(t),createComment:t=>hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Rh.innerHTML=Dp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Rh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Lv=Symbol("_vtc");function Fv(t,e,n){const r=t[Lv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bh=Symbol("_vod"),Uv=Symbol("_vsh"),Bv=Symbol(""),jv=/(?:^|;)\s*display\s*:/;function qv(t,e,n){const r=t.style,s=Ue(n);let i=!1;if(n&&!s){if(e)if(Ue(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Ms(r,c,"")}else for(const o in e)n[o]==null&&Ms(r,o,"");for(const o in n){o==="display"&&(i=!0);const c=n[o];c!=null?Hv(t,o,!Ue(e)&&e?e[o]:void 0,c)||Ms(r,o,c):Ms(r,o,"")}}else if(s){if(e!==n){const o=r[Bv];o&&(n+=";"+o),r.cssText=n,i=jv.test(n)}}else e&&t.removeAttribute("style");bh in t&&(t[bh]=i?r.display:"",t[Uv]&&(r.display="none"))}const Sh=/\s*!important$/;function Ms(t,e,n){if(re(n))n.forEach(r=>Ms(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=$v(t,e);Sh.test(n)?t.setProperty(tr(r),n.replace(Sh,""),"important"):t[r]=n}}const Ph=["Webkit","Moz","ms"],Za={};function $v(t,e){const n=Za[e];if(n)return n;let r=yt(e);if(r!=="filter"&&r in t)return Za[e]=r;r=Yo(r);for(let s=0;s<Ph.length;s++){const i=Ph[s]+r;if(i in t)return Za[e]=i}return e}function Hv(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ue(r)&&n===r}const Ch="http://www.w3.org/1999/xlink";function Nh(t,e,n,r,s,i=$_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ch,e.slice(6,e.length)):t.setAttributeNS(Ch,e,n):n==null||i&&!bd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Mt(n)?String(n):n)}function Oh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Dp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=bd(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Bn(t,e,n,r){t.addEventListener(e,n,r)}function Wv(t,e,n,r){t.removeEventListener(e,n,r)}const Dh=Symbol("_vei");function Kv(t,e,n,r,s=null){const i=t[Dh]||(t[Dh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=Gv(e);if(r){const h=i[e]=Yv(r,s);Bn(t,c,h,l)}else o&&(Wv(t,c,o,l),i[e]=void 0)}}const Vh=/(?:Once|Passive|Capture)$/;function Gv(t){let e;if(Vh.test(t)){e={};let r;for(;r=t.match(Vh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):tr(t.slice(2)),e]}let ec=0;const zv=Promise.resolve(),Qv=()=>ec||(zv.then(()=>ec=0),ec=Date.now());function Yv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(re(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),c=[r];for(let l=0;l<o.length&&!r._stopped;l++){const h=o[l];h&&Ht(h,e,5,c)}}else Ht(s,e,5,[r])};return n.value=t,n.attached=Qv(),n}const kh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Jv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Fv(t,r,o):e==="style"?qv(t,n,r):Ko(e)?Go(e)||Kv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xv(t,e,r,o))?(Oh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nh(t,e,r,o,i,e!=="value")):t._isVueCE&&(Zv(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ue(r)))?Oh(t,yt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Nh(t,e,r,o))};function Xv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&kh(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return kh(e)&&Ue(n)?!1:e in t}function Zv(t,e){const n=t._def.props;if(!n)return!1;const r=yt(e);return Array.isArray(n)?n.some(s=>yt(s)===r):Object.keys(n).some(s=>yt(s)===r)}const Yr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>ao(e,n):e};function eE(t){t.target.composing=!0}function xh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const En=Symbol("_assign");function Mh(t,e,n){return e&&(t=t.trim()),n&&(t=Jo(t)),t}const yS={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[En]=Yr(s);const i=r||s.props&&s.props.type==="number";Bn(t,e?"change":"input",o=>{o.target.composing||t[En](Mh(t.value,n,i))}),(n||i)&&Bn(t,"change",()=>{t.value=Mh(t.value,n,i)}),e||(Bn(t,"compositionstart",eE),Bn(t,"compositionend",xh),Bn(t,"change",xh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[En]=Yr(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Jo(t.value):t.value,l=e??"";if(c===l)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l)}},vS={deep:!0,created(t,e,n){t[En]=Yr(n),Bn(t,"change",()=>{const r=t._modelValue,s=ai(t),i=t.checked,o=t[En];if(re(r)){const c=ol(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const h=[...r];h.splice(c,1),o(h)}}else if(cs(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(Vp(t,i))})},mounted:Lh,beforeUpdate(t,e,n){t[En]=Yr(n),Lh(t,e,n)}};function Lh(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(re(e))s=ol(e,r.props.value)>-1;else if(cs(e))s=e.has(r.props.value);else{if(e===n)return;s=ls(e,Vp(t,!0))}t.checked!==s&&(t.checked=s)}const ES={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=cs(e);Bn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Jo(ai(o)):ai(o));t[En](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,dl(()=>{t._assigning=!1})}),t[En]=Yr(r)},mounted(t,{value:e}){Fh(t,e)},beforeUpdate(t,e,n){t[En]=Yr(n)},updated(t,{value:e}){t._assigning||Fh(t,e)}};function Fh(t,e){const n=t.multiple,r=re(e);if(!(n&&!r&&!cs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=ai(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(c)):o.selected=ol(e,c)>-1}else o.selected=e.has(c);else if(ls(ai(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ai(t){return"_value"in t?t._value:t.value}function Vp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const tE=["ctrl","shift","alt","meta"],nE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>tE.some(n=>t[`${n}Key`]&&!e.includes(n))},IS=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=nE[e[o]];if(c&&c(s,e))return}return t(s,...i)})},rE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},TS=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=tr(s.key);if(e.some(o=>o===i||rE[o]===i))return t(s)})},sE=nt({patchProp:Jv},Mv);let Uh;function iE(){return Uh||(Uh=dv(sE))}const oE=(...t)=>{const e=iE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=cE(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,aE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function aE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function cE(t){return Ue(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const lE=Symbol();var Bh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Bh||(Bh={}));function uE(){const t=K_(!0),e=t.run(()=>Kd({}));let n=[],r=[];const s=Wd({install(i){s._a=i,i.provide(lE,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const hE=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},fE={};function dE(t,e){const n=$y("router-view");return Ap(),bp(n)}const pE=hE(fE,[["render",dE]]),mE="modulepreload",gE=function(t){return"/luna-videomaker/"+t},jh={},ln=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=gE(l),l in jh)return;jh[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":mE,h||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((g,v)=>{p.addEventListener("load",g),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const xr=typeof document<"u";function kp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _E(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&kp(t.default)}const Ae=Object.assign;function tc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Wt(s)?s.map(t):t(s)}return n}const Ys=()=>{},Wt=Array.isArray;function qh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const xp=/#/g,yE=/&/g,vE=/\//g,EE=/=/g,IE=/\?/g,Mp=/\+/g,TE=/%5B/g,wE=/%5D/g,Lp=/%5E/g,AE=/%60/g,Fp=/%7B/g,RE=/%7C/g,Up=/%7D/g,bE=/%20/g;function vl(t){return t==null?"":encodeURI(""+t).replace(RE,"|").replace(TE,"[").replace(wE,"]")}function SE(t){return vl(t).replace(Fp,"{").replace(Up,"}").replace(Lp,"^")}function Pc(t){return vl(t).replace(Mp,"%2B").replace(bE,"+").replace(xp,"%23").replace(yE,"%26").replace(AE,"`").replace(Fp,"{").replace(Up,"}").replace(Lp,"^")}function PE(t){return Pc(t).replace(EE,"%3D")}function CE(t){return vl(t).replace(xp,"%23").replace(IE,"%3F")}function NE(t){return CE(t).replace(vE,"%2F")}function ci(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const OE=/\/$/,DE=t=>t.replace(OE,"");function nc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=ME(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:ci(o)}}function VE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function $h(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Jr(e.matched[r],n.matched[s])&&Bp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!xE(t[n],e[n]))return!1;return!0}function xE(t,e){return Wt(t)?Hh(t,e):Wt(e)?Hh(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Hh(t,e){return Wt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ME(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Cc=function(t){return t.pop="pop",t.push="push",t}({}),rc=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function LE(t){if(!t)if(xr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),DE(t)}const FE=/^[^#]+#/;function UE(t,e){return t.replace(FE,"#")+e}function BE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const aa=()=>({left:window.scrollX,top:window.scrollY});function jE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=BE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Wh(t,e){return(history.state?history.state.position-e:-1)+t}const Nc=new Map;function qE(t,e){Nc.set(t,e)}function $E(t){const e=Nc.get(t);return Nc.delete(t),e}function HE(t){return typeof t=="string"||t&&typeof t=="object"}function jp(t){return typeof t=="string"||typeof t=="symbol"}let Fe=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const qp=Symbol("");Fe.MATCHER_NOT_FOUND+"",Fe.NAVIGATION_GUARD_REDIRECT+"",Fe.NAVIGATION_ABORTED+"",Fe.NAVIGATION_CANCELLED+"",Fe.NAVIGATION_DUPLICATED+"";function Xr(t,e){return Ae(new Error,{type:t,[qp]:!0},e)}function un(t,e){return t instanceof Error&&qp in t&&(e==null||!!(t.type&e))}const WE=["params","query","hash"];function KE(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of WE)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function GE(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Mp," "),i=s.indexOf("="),o=ci(i<0?s:s.slice(0,i)),c=i<0?null:ci(s.slice(i+1));if(o in e){let l=e[o];Wt(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function Kh(t){let e="";for(let n in t){const r=t[n];if(n=PE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wt(r)?r.map(s=>s&&Pc(s)):[r&&Pc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function zE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Wt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const QE=Symbol(""),Gh=Symbol(""),ca=Symbol(""),El=Symbol(""),Oc=Symbol("");function Ds(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Un(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(Xr(Fe.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?l(g):HE(g)?l(Xr(Fe.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function sc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(kp(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Un(h,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=_E(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const g=(p.__vccOpts||p)[e];return g&&Un(g,n,r,o,c,s)()}))}}return i}function YE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>Jr(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>Jr(h,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let JE=()=>location.protocol+"//"+location.host;function $p(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),$h(c,"")}return $h(n,t)+r+s}function XE(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const v=$p(t,location),N=n.value,O=e.value;let k=0;if(g){if(n.value=v,e.value=g,o&&o===N){o=null;return}k=O?g.position-O.position:0}else r(v);s.forEach(K=>{K(n.value,N,{delta:k,type:Cc.pop,direction:k?k>0?rc.forward:rc.back:rc.unknown})})};function l(){o=n.value}function h(g){s.push(g);const v=()=>{const N=s.indexOf(g);N>-1&&s.splice(N,1)};return i.push(v),v}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Ae({},g.state,{scroll:aa()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:h,destroy:p}}function zh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?aa():null}}function ZE(t){const{history:e,location:n}=window,r={value:$p(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:JE()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(v){console.error(v),n[f?"replace":"assign"](g)}}function o(l,h){i(l,Ae({},e.state,zh(s.value.back,l,s.value.forward,!0),h,{position:s.value.position}),!0),r.value=l}function c(l,h){const f=Ae({},s.value,e.state,{forward:l,scroll:aa()});i(f.current,f,!0),i(l,Ae({},zh(r.value,l,null),{position:f.position+1},h),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function eI(t){t=LE(t);const e=ZE(t),n=XE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ae({location:"",base:t,go:r,createHref:UE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let dr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Ke=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Ke||{});const tI={type:dr.Static,value:""},nI=/[a-zA-Z0-9_]/;function rI(t){if(!t)return[[]];if(t==="/")return[[tI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=Ke.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===Ke.Static?i.push({type:dr.Static,value:h}):n===Ke.Param||n===Ke.ParamRegExp||n===Ke.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:dr.Param,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==Ke.ParamRegExp){r=n,n=Ke.EscapeNext;continue}switch(n){case Ke.Static:l==="/"?(h&&p(),o()):l===":"?(p(),n=Ke.Param):g();break;case Ke.EscapeNext:g(),n=r;break;case Ke.Param:l==="("?n=Ke.ParamRegExp:nI.test(l)?g():(p(),n=Ke.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case Ke.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Ke.ParamRegExpEnd:f+=l;break;case Ke.ParamRegExpEnd:p(),n=Ke.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===Ke.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}const Qh="[^/]+?",sI={sensitive:!1,strict:!1,start:!0,end:!0};var gt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(gt||{});const iI=/[.+*?^${}()[\]/\\]/g;function oI(t,e){const n=Ae({},sI,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[gt.Root];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let v=gt.Segment+(n.sensitive?gt.BonusCaseSensitive:0);if(g.type===dr.Static)p||(s+="/"),s+=g.value.replace(iI,"\\$&"),v+=gt.Static;else if(g.type===dr.Param){const{value:N,repeatable:O,optional:k,regexp:K}=g;i.push({name:N,repeatable:O,optional:k});const B=K||Qh;if(B!==Qh){v+=gt.BonusCustomRegExp;try{`${B}`}catch(W){throw new Error(`Invalid custom RegExp for param "${N}" (${B}): `+W.message)}}let q=O?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(q=k&&h.length<2?`(?:/${q})`:"/"+q),k&&(q+="?"),s+=q,v+=gt.Dynamic,k&&(v+=gt.BonusOptional),O&&(v+=gt.BonusRepeatable),B===".*"&&(v+=gt.BonusWildcard)}f.push(v)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=gt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const v=f[g]||"",N=i[g-1];p[N.name]=v&&N.repeatable?v.split("/"):v}return p}function l(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of g)if(v.type===dr.Static)f+=v.value;else if(v.type===dr.Param){const{value:N,repeatable:O,optional:k}=v,K=N in h?h[N]:"";if(Wt(K)&&!O)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const B=Wt(K)?K.join("/"):K;if(!B)if(k)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${N}"`);f+=B}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function aI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===gt.Static+gt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===gt.Static+gt.Segment?1:-1:0}function Hp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=aI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Yh(r))return 1;if(Yh(s))return-1}return s.length-r.length}function Yh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const cI={strict:!1,end:!0,sensitive:!1};function lI(t,e,n){const r=oI(rI(t.path),n),s=Ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function uI(t,e){const n=[],r=new Map;e=qh(cI,e);function s(p){return r.get(p)}function i(p,g,v){const N=!v,O=Xh(p);O.aliasOf=v&&v.record;const k=qh(e,p),K=[O];if("alias"in p){const W=typeof p.alias=="string"?[p.alias]:p.alias;for(const de of W)K.push(Xh(Ae({},O,{components:v?v.record.components:O.components,path:de,aliasOf:v?v.record:O})))}let B,q;for(const W of K){const{path:de}=W;if(g&&de[0]!=="/"){const fe=g.record.path,w=fe[fe.length-1]==="/"?"":"/";W.path=g.record.path+(de&&w+de)}if(B=lI(W,g,k),v?v.alias.push(B):(q=q||B,q!==B&&q.alias.push(B),N&&p.name&&!Zh(B)&&o(p.name)),Wp(B)&&l(B),O.children){const fe=O.children;for(let w=0;w<fe.length;w++)i(fe[w],B,v&&v.children[w])}v=v||B}return q?()=>{o(q)}:Ys}function o(p){if(jp(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=dI(p,n);n.splice(g,0,p),p.record.name&&!Zh(p)&&r.set(p.record.name,p)}function h(p,g){let v,N={},O,k;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw Xr(Fe.MATCHER_NOT_FOUND,{location:p});k=v.record.name,N=Ae(Jh(g.params,v.keys.filter(q=>!q.optional).concat(v.parent?v.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&Jh(p.params,v.keys.map(q=>q.name))),O=v.stringify(N)}else if(p.path!=null)O=p.path,v=n.find(q=>q.re.test(O)),v&&(N=v.parse(O),k=v.record.name);else{if(v=g.name?r.get(g.name):n.find(q=>q.re.test(g.path)),!v)throw Xr(Fe.MATCHER_NOT_FOUND,{location:p,currentLocation:g});k=v.record.name,N=Ae({},g.params,p.params),O=v.stringify(N)}const K=[];let B=v;for(;B;)K.unshift(B.record),B=B.parent;return{name:k,path:O,params:N,matched:K,meta:fI(K)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Jh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Xh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:hI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function hI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Zh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fI(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function dI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Hp(t,e[i])<0?r=i:n=i+1}const s=pI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function pI(t){let e=t;for(;e=e.parent;)if(Wp(e)&&Hp(t,e)===0)return e}function Wp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ef(t){const e=qt(ca),n=qt(El),r=Bt(()=>{const l=_r(t.to);return e.resolve(l)}),s=Bt(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(Jr.bind(null,f));if(g>-1)return g;const v=tf(l[h-2]);return h>1&&tf(f)===v&&p[p.length-1].path!==v?p.findIndex(Jr.bind(null,l[h-2])):g}),i=Bt(()=>s.value>-1&&vI(n.params,r.value.params)),o=Bt(()=>s.value>-1&&s.value===n.matched.length-1&&Bp(n.params,r.value.params));function c(l={}){if(yI(l)){const h=e[_r(t.replace)?"replace":"push"](_r(t.to)).catch(Ys);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Bt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function mI(t){return t.length===1?t[0]:t}const gI=np({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ef,setup(t,{slots:e}){const n=ea(ef(t)),{options:r}=qt(ca),s=Bt(()=>({[nf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[nf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&mI(e.default(n));return t.custom?i:Op("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),_I=gI;function yI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function vI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Wt(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function tf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const nf=(t,e,n)=>t??e??n,EI=np({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=qt(Oc),s=Bt(()=>t.route||r.value),i=qt(Gh,0),o=Bt(()=>{let h=_r(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=Bt(()=>s.value.matched[o.value]);co(Gh,Bt(()=>o.value+1)),co(QE,c),co(Oc,s);const l=Kd();return lo(()=>[l.value,c.value,t.name],([h,f,p],[g,v,N])=>{f&&(f.instances[p]=h,v&&v!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),h&&f&&(!v||!Jr(f,v)||!g)&&(f.enterCallbacks[p]||[]).forEach(O=>O(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return rf(n.default,{Component:g,route:h});const v=p.props[f],N=v?v===!0?h.params:typeof v=="function"?v(h):v:null,k=Op(g,Ae({},N,e,{onVnodeUnmounted:K=>{K.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return rf(n.default,{Component:k,route:h})||k}}});function rf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const II=EI;function TI(t){const e=uI(t.routes,t),n=t.parseQuery||GE,r=t.stringifyQuery||Kh,s=t.history,i=Ds(),o=Ds(),c=Ds(),l=fy(Mn);let h=Mn;xr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=tc.bind(null,x=>""+x),p=tc.bind(null,NE),g=tc.bind(null,ci);function v(x,J){let z,Z;return jp(x)?(z=e.getRecordMatcher(x),Z=J):Z=x,e.addRoute(Z,z)}function N(x){const J=e.getRecordMatcher(x);J&&e.removeRoute(J)}function O(){return e.getRoutes().map(x=>x.record)}function k(x){return!!e.getRecordMatcher(x)}function K(x,J){if(J=Ae({},J||l.value),typeof x=="string"){const b=nc(n,x,J.path),D=e.resolve({path:b.path},J),L=s.createHref(b.fullPath);return Ae(b,D,{params:g(D.params),hash:ci(b.hash),redirectedFrom:void 0,href:L})}let z;if(x.path!=null)z=Ae({},x,{path:nc(n,x.path,J.path).path});else{const b=Ae({},x.params);for(const D in b)b[D]==null&&delete b[D];z=Ae({},x,{params:p(b)}),J.params=p(J.params)}const Z=e.resolve(z,J),pe=x.hash||"";Z.params=f(g(Z.params));const _=VE(r,Ae({},x,{hash:SE(pe),path:Z.path})),I=s.createHref(_);return Ae({fullPath:_,hash:pe,query:r===Kh?zE(x.query):x.query||{}},Z,{redirectedFrom:void 0,href:I})}function B(x){return typeof x=="string"?nc(n,x,l.value.path):Ae({},x)}function q(x,J){if(h!==x)return Xr(Fe.NAVIGATION_CANCELLED,{from:J,to:x})}function W(x){return w(x)}function de(x){return W(Ae(B(x),{replace:!0}))}function fe(x,J){const z=x.matched[x.matched.length-1];if(z&&z.redirect){const{redirect:Z}=z;let pe=typeof Z=="function"?Z(x,J):Z;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=B(pe):{path:pe},pe.params={}),Ae({query:x.query,hash:x.hash,params:pe.path!=null?{}:x.params},pe)}}function w(x,J){const z=h=K(x),Z=l.value,pe=x.state,_=x.force,I=x.replace===!0,b=fe(z,Z);if(b)return w(Ae(B(b),{state:typeof b=="object"?Ae({},pe,b.state):pe,force:_,replace:I}),J||z);const D=z;D.redirectedFrom=J;let L;return!_&&kE(r,Z,z)&&(L=Xr(Fe.NAVIGATION_DUPLICATED,{to:D,from:Z}),Vt(Z,Z,!0,!1)),(L?Promise.resolve(L):A(D,Z)).catch(V=>un(V)?un(V,Fe.NAVIGATION_GUARD_REDIRECT)?V:Ft(V):me(V,D,Z)).then(V=>{if(V){if(un(V,Fe.NAVIGATION_GUARD_REDIRECT))return w(Ae({replace:I},B(V.to),{state:typeof V.to=="object"?Ae({},pe,V.to.state):pe,force:_}),J||D)}else V=S(D,Z,!0,I,pe);return R(D,Z,V),V})}function y(x,J){const z=q(x,J);return z?Promise.reject(z):Promise.resolve()}function T(x){const J=On.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(x):x()}function A(x,J){let z;const[Z,pe,_]=YE(x,J);z=sc(Z.reverse(),"beforeRouteLeave",x,J);for(const b of Z)b.leaveGuards.forEach(D=>{z.push(Un(D,x,J))});const I=y.bind(null,x,J);return z.push(I),It(z).then(()=>{z=[];for(const b of i.list())z.push(Un(b,x,J));return z.push(I),It(z)}).then(()=>{z=sc(pe,"beforeRouteUpdate",x,J);for(const b of pe)b.updateGuards.forEach(D=>{z.push(Un(D,x,J))});return z.push(I),It(z)}).then(()=>{z=[];for(const b of _)if(b.beforeEnter)if(Wt(b.beforeEnter))for(const D of b.beforeEnter)z.push(Un(D,x,J));else z.push(Un(b.beforeEnter,x,J));return z.push(I),It(z)}).then(()=>(x.matched.forEach(b=>b.enterCallbacks={}),z=sc(_,"beforeRouteEnter",x,J,T),z.push(I),It(z))).then(()=>{z=[];for(const b of o.list())z.push(Un(b,x,J));return z.push(I),It(z)}).catch(b=>un(b,Fe.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function R(x,J,z){c.list().forEach(Z=>T(()=>Z(x,J,z)))}function S(x,J,z,Z,pe){const _=q(x,J);if(_)return _;const I=J===Mn,b=xr?history.state:{};z&&(Z||I?s.replace(x.fullPath,Ae({scroll:I&&b&&b.scroll},pe)):s.push(x.fullPath,pe)),l.value=x,Vt(x,J,z,I),Ft()}let E;function dt(){E||(E=s.listen((x,J,z)=>{if(!Rt.listening)return;const Z=K(x),pe=fe(Z,Rt.currentRoute.value);if(pe){w(Ae(pe,{replace:!0,force:!0}),Z).catch(Ys);return}h=Z;const _=l.value;xr&&qE(Wh(_.fullPath,z.delta),aa()),A(Z,_).catch(I=>un(I,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_CANCELLED)?I:un(I,Fe.NAVIGATION_GUARD_REDIRECT)?(w(Ae(B(I.to),{force:!0}),Z).then(b=>{un(b,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_DUPLICATED)&&!z.delta&&z.type===Cc.pop&&s.go(-1,!1)}).catch(Ys),Promise.reject()):(z.delta&&s.go(-z.delta,!1),me(I,Z,_))).then(I=>{I=I||S(Z,_,!1),I&&(z.delta&&!un(I,Fe.NAVIGATION_CANCELLED)?s.go(-z.delta,!1):z.type===Cc.pop&&un(I,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),R(Z,_,I)}).catch(Ys)}))}let Dt=Ds(),je=Ds(),ye;function me(x,J,z){Ft(x);const Z=je.list();return Z.length?Z.forEach(pe=>pe(x,J,z)):console.error(x),Promise.reject(x)}function At(){return ye&&l.value!==Mn?Promise.resolve():new Promise((x,J)=>{Dt.add([x,J])})}function Ft(x){return ye||(ye=!x,dt(),Dt.list().forEach(([J,z])=>x?z(x):J()),Dt.reset()),x}function Vt(x,J,z,Z){const{scrollBehavior:pe}=t;if(!xr||!pe)return Promise.resolve();const _=!z&&$E(Wh(x.fullPath,0))||(Z||!z)&&history.state&&history.state.scroll||null;return dl().then(()=>pe(x,J,_)).then(I=>I&&jE(I)).catch(I=>me(I,x,J))}const Ve=x=>s.go(x);let ke;const On=new Set,Rt={currentRoute:l,listening:!0,addRoute:v,removeRoute:N,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:O,resolve:K,options:t,push:W,replace:de,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:je.add,isReady:At,install(x){x.component("RouterLink",_I),x.component("RouterView",II),x.config.globalProperties.$router=Rt,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>_r(l)}),xr&&!ke&&l.value===Mn&&(ke=!0,W(s.location).catch(Z=>{}));const J={};for(const Z in Mn)Object.defineProperty(J,Z,{get:()=>l.value[Z],enumerable:!0});x.provide(ca,Rt),x.provide(El,Hd(J)),x.provide(Oc,l);const z=x.unmount;On.add(x),x.unmount=function(){On.delete(x),On.size<1&&(h=Mn,E&&E(),E=null,l.value=Mn,ke=!1,ye=!1),z()}}};function It(x){return x.reduce((J,z)=>J.then(()=>T(z)),Promise.resolve())}return Rt}function wS(){return qt(ca)}function AS(t){return qt(El)}var sf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},wI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,v=h&63;l||(v=64,o||(g=64)),r.push(n[f],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new AI;const g=i<<2|c>>4;if(r.push(g),h!==64){const v=c<<4&240|h>>2;if(r.push(v),p!==64){const N=h<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RI=function(t){const e=Kp(t);return Gp.encodeByteArray(e,!0)},No=function(t){return RI(t).replace(/\./g,"")},zp=function(t){try{return Gp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=()=>bI().__FIREBASE_DEFAULTS__,PI=()=>{if(typeof process>"u"||typeof sf>"u")return;const t=sf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zp(t[1]);return e&&JSON.parse(e)},la=()=>{try{return SI()||PI()||CI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qp=t=>{var e,n;return(n=(e=la())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},NI=t=>{const e=Qp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Yp=()=>{var t;return(t=la())===null||t===void 0?void 0:t.config},Jp=t=>{var e;return(e=la())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[No(JSON.stringify(n)),No(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function kI(){var t;const e=(t=la())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function LI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FI(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UI(){return!kI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BI(){try{return typeof indexedDB=="object"}catch{return!1}}function jI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qI,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$I(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Nn(s,c,r)}}function $I(t,e){return t.replace(HI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const HI=/\{\$([^}]+)}/g;function WI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(of(i)&&of(o)){if(!Oo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function of(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Fs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function KI(t,e){const n=new GI(t,e);return n.subscribe.bind(n)}class GI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ic),s.error===void 0&&(s.error=ic),s.complete===void 0&&(s.complete=ic);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ic(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return t&&t._delegate?t._delegate:t}class vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new OI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JI(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YI(t){return t===fr?void 0:t}function JI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const ZI={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},eT=_e.INFO,tT={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},nT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=tT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Il{constructor(e){this.name=e,this._logLevel=eT,this._logHandler=nT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const rT=(t,e)=>e.some(n=>t instanceof n);let af,cf;function sT(){return af||(af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iT(){return cf||(cf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xp=new WeakMap,Dc=new WeakMap,Zp=new WeakMap,oc=new WeakMap,Tl=new WeakMap;function oT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Kn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xp.set(n,t)}).catch(()=>{}),Tl.set(e,t),e}function aT(t){if(Dc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Dc.set(t,e)}let Vc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cT(t){Vc=t(Vc)}function lT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ac(this),e,...n);return Zp.set(r,e.sort?e.sort():[e]),Kn(r)}:iT().includes(t)?function(...e){return t.apply(ac(this),e),Kn(Xp.get(this))}:function(...e){return Kn(t.apply(ac(this),e))}}function uT(t){return typeof t=="function"?lT(t):(t instanceof IDBTransaction&&aT(t),rT(t,sT())?new Proxy(t,Vc):t)}function Kn(t){if(t instanceof IDBRequest)return oT(t);if(oc.has(t))return oc.get(t);const e=uT(t);return e!==t&&(oc.set(t,e),Tl.set(e,t)),e}const ac=t=>Tl.get(t);function hT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Kn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Kn(o.result),l.oldVersion,l.newVersion,Kn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const fT=["get","getKey","getAll","getAllKeys","count"],dT=["put","add","delete","clear"],cc=new Map;function lf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cc.get(e))return cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=dT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return cc.set(e,i),i}cT(t=>({...t,get:(e,n,r)=>lf(e,n)||t.get(e,n,r),has:(e,n)=>!!lf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kc="@firebase/app",uf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Il("@firebase/app"),gT="@firebase/app-compat",_T="@firebase/analytics-compat",yT="@firebase/analytics",vT="@firebase/app-check-compat",ET="@firebase/app-check",IT="@firebase/auth",TT="@firebase/auth-compat",wT="@firebase/database",AT="@firebase/data-connect",RT="@firebase/database-compat",bT="@firebase/functions",ST="@firebase/functions-compat",PT="@firebase/installations",CT="@firebase/installations-compat",NT="@firebase/messaging",OT="@firebase/messaging-compat",DT="@firebase/performance",VT="@firebase/performance-compat",kT="@firebase/remote-config",xT="@firebase/remote-config-compat",MT="@firebase/storage",LT="@firebase/storage-compat",FT="@firebase/firestore",UT="@firebase/vertexai-preview",BT="@firebase/firestore-compat",jT="firebase",qT="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="[DEFAULT]",$T={[kc]:"fire-core",[gT]:"fire-core-compat",[yT]:"fire-analytics",[_T]:"fire-analytics-compat",[ET]:"fire-app-check",[vT]:"fire-app-check-compat",[IT]:"fire-auth",[TT]:"fire-auth-compat",[wT]:"fire-rtdb",[AT]:"fire-data-connect",[RT]:"fire-rtdb-compat",[bT]:"fire-fn",[ST]:"fire-fn-compat",[PT]:"fire-iid",[CT]:"fire-iid-compat",[NT]:"fire-fcm",[OT]:"fire-fcm-compat",[DT]:"fire-perf",[VT]:"fire-perf-compat",[kT]:"fire-rc",[xT]:"fire-rc-compat",[MT]:"fire-gcs",[LT]:"fire-gcs-compat",[FT]:"fire-fst",[BT]:"fire-fst-compat",[UT]:"fire-vertex","fire-js":"fire-js",[jT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map,HT=new Map,Mc=new Map;function hf(t,e){try{t.container.addComponent(e)}catch(n){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(Mc.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;Mc.set(e,t);for(const n of Do.values())hf(n,t);for(const n of HT.values())hf(n,t);return!0}function wl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new Ti("app","Firebase",WT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=qT;function em(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Gn.create("bad-app-name",{appName:String(s)});if(n||(n=Yp()),!n)throw Gn.create("no-options");const i=Do.get(s);if(i){if(Oo(n,i.options)&&Oo(r,i.config))return i;throw Gn.create("duplicate-app",{appName:s})}const o=new XI(s);for(const l of Mc.values())o.addComponent(l);const c=new KT(n,r,o);return Do.set(s,c),c}function tm(t=xc){const e=Do.get(t);if(!e&&t===xc&&Yp())return em();if(!e)throw Gn.create("no-app",{appName:t});return e}function zn(t,e,n){var r;let s=(r=$T[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(c.join(" "));return}Zr(new vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="firebase-heartbeat-database",zT=1,li="firebase-heartbeat-store";let lc=null;function nm(){return lc||(lc=hT(GT,zT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(li)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),lc}async function QT(t){try{const n=(await nm()).transaction(li),r=await n.objectStore(li).get(rm(t));return await n.done,r}catch(e){if(e instanceof Nn)Rn.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rn.warn(n.message)}}}async function ff(t,e){try{const r=(await nm()).transaction(li,"readwrite");await r.objectStore(li).put(e,rm(t)),await r.done}catch(n){if(n instanceof Nn)Rn.warn(n.message);else{const r=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rn.warn(r.message)}}}function rm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=1024,JT=30*24*60*60*1e3;class XT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ew(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=df();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=JT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=df(),{heartbeatsToSend:r,unsentEntries:s}=ZT(this._heartbeatsCache.heartbeats),i=No(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Rn.warn(n),""}}}function df(){return new Date().toISOString().substring(0,10)}function ZT(t,e=YT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ew{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BI()?jI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await QT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pf(t){return No(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t){Zr(new vr("platform-logger",e=>new pT(e),"PRIVATE")),Zr(new vr("heartbeat",e=>new XT(e),"PRIVATE")),zn(kc,uf,t),zn(kc,uf,"esm2017"),zn("fire-js","")}tw("");var nw="firebase",rw="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn(nw,rw,"app");var mf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yr,sm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function T(){}T.prototype=y.prototype,w.D=y.prototype,w.prototype=new T,w.prototype.constructor=w,w.C=function(A,R,S){for(var E=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)E[dt-2]=arguments[dt];return y.prototype[R].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(R=0;16>R;++R)A[R]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=w.g[0],T=w.g[1],R=w.g[2];var S=w.g[3],E=y+(S^T&(R^S))+A[0]+3614090360&4294967295;y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[1]+3905402710&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[2]+606105819&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[3]+3250441966&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(S^T&(R^S))+A[4]+4118548399&4294967295,y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[5]+1200080426&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[6]+2821735955&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[7]+4249261313&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(S^T&(R^S))+A[8]+1770035416&4294967295,y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[9]+2336552879&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[10]+4294925233&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[11]+2304563134&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(S^T&(R^S))+A[12]+1804603682&4294967295,y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[13]+4254626195&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[14]+2792965006&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[15]+1236535329&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(R^S&(T^R))+A[1]+4129170786&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[6]+3225465664&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[11]+643717713&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[0]+3921069994&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(R^S&(T^R))+A[5]+3593408605&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[10]+38016083&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[15]+3634488961&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[4]+3889429448&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(R^S&(T^R))+A[9]+568446438&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[14]+3275163606&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[3]+4107603335&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[8]+1163531501&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(R^S&(T^R))+A[13]+2850285829&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[2]+4243563512&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[7]+1735328473&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[12]+2368359562&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(T^R^S)+A[5]+4294588738&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[8]+2272392833&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[11]+1839030562&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[14]+4259657740&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(T^R^S)+A[1]+2763975236&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[4]+1272893353&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[7]+4139469664&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[10]+3200236656&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(T^R^S)+A[13]+681279174&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[0]+3936430074&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[3]+3572445317&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[6]+76029189&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(T^R^S)+A[9]+3654602809&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[12]+3873151461&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[15]+530742520&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[2]+3299628645&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(R^(T|~S))+A[0]+4096336452&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[7]+1126891415&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[14]+2878612391&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[5]+4237533241&4294967295,T=R+(E<<21&4294967295|E>>>11),E=y+(R^(T|~S))+A[12]+1700485571&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[3]+2399980690&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[10]+4293915773&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[1]+2240044497&4294967295,T=R+(E<<21&4294967295|E>>>11),E=y+(R^(T|~S))+A[8]+1873313359&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[15]+4264355552&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[6]+2734768916&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[13]+1309151649&4294967295,T=R+(E<<21&4294967295|E>>>11),E=y+(R^(T|~S))+A[4]+4149444226&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[11]+3174756917&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[2]+718787259&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var T=y-this.blockSize,A=this.B,R=this.h,S=0;S<y;){if(R==0)for(;S<=T;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<y;)if(A[R++]=w.charCodeAt(S++),R==this.blockSize){s(this,A),R=0;break}}else for(;S<y;)if(A[R++]=w[S++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var T=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=T&255,T/=256;for(this.u(w),w=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)w[T++]=this.g[y]>>>A&255;return w};function i(w,y){var T=c;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=y(w)}function o(w,y){this.h=y;for(var T=[],A=!0,R=w.length-1;0<=R;R--){var S=w[R]|0;A&&S==y||(T[R]=S,A=!1)}this.g=T}var c={};function l(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return k(h(-w));for(var y=[],T=1,A=0;w>=T;A++)y[A]=w/T|0,T*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return k(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(y,8)),A=p,R=0;R<w.length;R+=8){var S=Math.min(8,w.length-R),E=parseInt(w.substring(R,R+S),y);8>S?(S=h(Math.pow(y,S)),A=A.j(S).add(h(E))):(A=A.j(T),A=A.add(h(E)))}return A}var p=l(0),g=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(O(this))return-k(this).m();for(var w=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);w+=(0<=A?A:4294967296+A)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(O(this))return"-"+k(this).toString(w);for(var y=h(Math.pow(w,6)),T=this,A="";;){var R=W(T,y).g;T=K(T,R.j(y));var S=((0<T.g.length?T.g[0]:T.h)>>>0).toString(w);if(T=R,N(T))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function O(w){return w.h==-1}t.l=function(w){return w=K(this,w),O(w)?-1:N(w)?0:1};function k(w){for(var y=w.g.length,T=[],A=0;A<y;A++)T[A]=~w.g[A];return new o(T,~w.h).add(g)}t.abs=function(){return O(this)?k(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],A=0,R=0;R<=y;R++){var S=A+(this.i(R)&65535)+(w.i(R)&65535),E=(S>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);A=E>>>16,S&=65535,E&=65535,T[R]=E<<16|S}return new o(T,T[T.length-1]&-2147483648?-1:0)};function K(w,y){return w.add(k(y))}t.j=function(w){if(N(this)||N(w))return p;if(O(this))return O(w)?k(this).j(k(w)):k(k(this).j(w));if(O(w))return k(this.j(k(w)));if(0>this.l(v)&&0>w.l(v))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<w.g.length;R++){var S=this.i(A)>>>16,E=this.i(A)&65535,dt=w.i(R)>>>16,Dt=w.i(R)&65535;T[2*A+2*R]+=E*Dt,B(T,2*A+2*R),T[2*A+2*R+1]+=S*Dt,B(T,2*A+2*R+1),T[2*A+2*R+1]+=E*dt,B(T,2*A+2*R+1),T[2*A+2*R+2]+=S*dt,B(T,2*A+2*R+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new o(T,0)};function B(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function q(w,y){this.g=w,this.h=y}function W(w,y){if(N(y))throw Error("division by zero");if(N(w))return new q(p,p);if(O(w))return y=W(k(w),y),new q(k(y.g),k(y.h));if(O(y))return y=W(w,k(y)),new q(k(y.g),y.h);if(30<w.g.length){if(O(w)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=y;0>=A.l(w);)T=de(T),A=de(A);var R=fe(T,1),S=fe(A,1);for(A=fe(A,2),T=fe(T,2);!N(A);){var E=S.add(A);0>=E.l(w)&&(R=R.add(T),S=E),A=fe(A,1),T=fe(T,1)}return y=K(w,R.j(y)),new q(R,y)}for(R=p;0<=w.l(y);){for(T=Math.max(1,Math.floor(w.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(T),E=S.j(y);O(E)||0<E.l(w);)T-=A,S=h(T),E=S.j(y);N(S)&&(S=g),R=R.add(S),w=K(w,E)}return new q(R,w)}t.A=function(w){return W(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&w.i(A);return new o(T,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|w.i(A);return new o(T,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^w.i(A);return new o(T,this.h^w.h)};function de(w){for(var y=w.g.length+1,T=[],A=0;A<y;A++)T[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(T,w.h)}function fe(w,y){var T=y>>5;y%=32;for(var A=w.g.length-T,R=[],S=0;S<A;S++)R[S]=0<y?w.i(S+T)>>>y|w.i(S+T+1)<<32-y:w.i(S+T);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,sm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,yr=o}).apply(typeof mf<"u"?mf:typeof self<"u"?self:typeof window<"u"?window:{});var no=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var im,Us,om,ho,Lc,am,cm,lm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof no=="object"&&no];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,P={next:function(){if(!m&&d<a.length){var C=d++;return{value:u(C,a[C]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function v(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function N(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,P,C){for(var H=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)H[Pe-2]=arguments[Pe];return u.prototype[P].apply(m,H)}}function O(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function k(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const P=a.length||0,C=m.length||0;a.length=P+C;for(let H=0;H<C;H++)a[P+H]=m[H]}else a.push(m)}}class K{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var de=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function fe(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function w(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function y(a){const u={};for(const d in a)u[d]=a[d];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let C=0;C<T.length;C++)d=T[C],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function R(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function E(){var a=At;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class dt{constructor(){this.h=this.g=null}add(u,d){const m=Dt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Dt=new K(()=>new je,a=>a.reset());class je{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,me=!1,At=new dt,Ft=()=>{const a=c.Promise.resolve(void 0);ye=()=>{a.then(Vt)}};var Vt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){S(d)}var u=Dt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}me=!1};function Ve(){this.s=this.s,this.C=this.C}Ve.prototype.s=!1,Ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var On=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function Rt(a,u){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(de){e:{try{W(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:It[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Rt.aa.h.call(this)}}N(Rt,ke);var It={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),J=0;function z(a,u,d,m,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=P,this.key=++J,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function pe(a){this.src=a,this.g={},this.h=0}pe.prototype.add=function(a,u,d,m,P){var C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);var H=I(a,u,m,P);return-1<H?(u=a[H],d||(u.fa=!1)):(u=new z(u,this.src,C,!!m,P),u.fa=d,a.push(u)),u};function _(a,u){var d=u.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,u,void 0),C;(C=0<=P)&&Array.prototype.splice.call(m,P,1),C&&(Z(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function I(a,u,d,m){for(var P=0;P<a.length;++P){var C=a[P];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==m)return P}return-1}var b="closure_lm_"+(1e6*Math.random()|0),D={};function L(a,u,d,m,P){if(Array.isArray(u)){for(var C=0;C<u.length;C++)L(a,u[C],d,m,P);return null}return d=ie(d),a&&a[x]?a.K(u,d,h(m)?!!m.capture:!1,P):V(a,u,d,!1,m,P)}function V(a,u,d,m,P,C){if(!u)throw Error("Invalid event type");var H=h(P)?!!P.capture:!!P,Pe=Q(a);if(Pe||(a[b]=Pe=new pe(a)),d=Pe.add(u,d,m,H,C),d.proxy)return d;if(m=G(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)On||(P=H),P===void 0&&(P=!1),a.addEventListener(u.toString(),m,P);else if(a.attachEvent)a.attachEvent(F(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return u.call(a.src,a.listener,d)}const u=ne;return a}function $(a,u,d,m,P){if(Array.isArray(u))for(var C=0;C<u.length;C++)$(a,u[C],d,m,P);else m=h(m)?!!m.capture:!!m,d=ie(d),a&&a[x]?(a=a.i,u=String(u).toString(),u in a.g&&(C=a.g[u],d=I(C,d,m,P),-1<d&&(Z(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete a.g[u],a.h--)))):a&&(a=Q(a))&&(u=a.g[u.toString()],a=-1,u&&(a=I(u,d,m,P)),(d=-1<a?u[a]:null)&&j(d))}function j(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[x])_(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(F(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=Q(u))?(_(d,a),d.h==0&&(d.src=null,u[b]=null)):Z(a)}}}function F(a){return a in D?D[a]:D[a]="on"+a}function ne(a,u){if(a.da)a=!0;else{u=new Rt(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&j(a),a=d.call(m,u)}return a}function Q(a){return a=a[b],a instanceof pe?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(u){return a.handleEvent(u)}),a[ee])}function se(){Ve.call(this),this.i=new pe(this),this.M=this,this.F=null}N(se,Ve),se.prototype[x]=!0,se.prototype.removeEventListener=function(a,u,d,m){$(this,a,u,d,m)};function ue(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new ke(u,a);else if(u instanceof ke)u.target=u.target||a;else{var P=u;u=new ke(m,a),A(u,P)}if(P=!0,d)for(var C=d.length-1;0<=C;C--){var H=u.g=d[C];P=Ee(H,m,!0,u)&&P}if(H=u.g=a,P=Ee(H,m,!0,u)&&P,P=Ee(H,m,!1,u)&&P,d)for(C=0;C<d.length;C++)H=u.g=d[C],P=Ee(H,m,!1,u)&&P}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Z(d[m]);delete a.g[u],a.h--}}this.F=null},se.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},se.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Ee(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,C=0;C<u.length;++C){var H=u[C];if(H&&!H.da&&H.capture==d){var Pe=H.listener,Je=H.ha||H.src;H.fa&&_(a.i,H),P=Pe.call(Je,m)!==!1&&P}}return P&&!m.defaultPrevented}function xe(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function qe(a){a.g=xe(()=>{a.g=null,a.i&&(a.i=!1,qe(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class kt extends Ve{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:qe(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function st(a){Ve.call(this),this.h=a,this.g={}}N(st,Ve);var Dn=[];function _s(a){fe(a.g,function(u,d){this.g.hasOwnProperty(d)&&j(u)},a),a.g={}}st.prototype.N=function(){st.aa.N.call(this),_s(this)},st.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ye=c.JSON.stringify,xt=c.JSON.parse,Li=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Pr(){}Pr.prototype.h=null;function mu(a){return a.h||(a.h=a.i())}function gu(){}var ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Na(){ke.call(this,"d")}N(Na,ke);function Oa(){ke.call(this,"c")}N(Oa,ke);var ir={},_u=null;function Fi(){return _u=_u||new se}ir.La="serverreachability";function yu(a){ke.call(this,ir.La,a)}N(yu,ke);function vs(a){const u=Fi();ue(u,new yu(u))}ir.STAT_EVENT="statevent";function vu(a,u){ke.call(this,ir.STAT_EVENT,a),this.stat=u}N(vu,ke);function pt(a){const u=Fi();ue(u,new vu(u,a))}ir.Ma="timingevent";function Eu(a,u){ke.call(this,ir.Ma,a),this.size=u}N(Eu,ke);function Es(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Is(){this.g=!0}Is.prototype.xa=function(){this.g=!1};function h_(a,u,d,m,P,C){a.info(function(){if(a.g)if(C)for(var H="",Pe=C.split("&"),Je=0;Je<Pe.length;Je++){var Ie=Pe[Je].split("=");if(1<Ie.length){var it=Ie[0];Ie=Ie[1];var ot=it.split("_");H=2<=ot.length&&ot[1]=="type"?H+(it+"="+Ie+"&"):H+(it+"=redacted&")}}else H=null;else H=C;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+d+`
`+H})}function f_(a,u,d,m,P,C,H){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+d+`
`+C+" "+H})}function Cr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+p_(a,d)+(m?" "+m:"")})}function d_(a,u){a.info(function(){return"TIMEOUT: "+u})}Is.prototype.info=function(){};function p_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var C=P[0];if(C!="noop"&&C!="stop"&&C!="close")for(var H=1;H<P.length;H++)P[H]=""}}}}return Ye(d)}catch{return u}}var Ui={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Iu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Da;function Bi(){}N(Bi,Pr),Bi.prototype.g=function(){return new XMLHttpRequest},Bi.prototype.i=function(){return{}},Da=new Bi;function Vn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new st(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tu}function Tu(){this.i=null,this.g="",this.h=!1}var wu={},Va={};function ka(a,u,d){a.L=1,a.v=Hi(on(u)),a.m=d,a.P=!0,Au(a,null)}function Au(a,u){a.F=Date.now(),ji(a),a.A=on(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Fu(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Tu,a.g=nh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new kt(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Dn[0]=P.toString()),P=Dn);for(var C=0;C<P.length;C++){var H=L(d,P[C],m||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),vs(),h_(a.i,a.u,a.A,a.l,a.R,a.m)}Vn.prototype.ca=function(a){a=a.target;const u=this.M;u&&an(a)==3?u.j():this.Y(a)},Vn.prototype.Y=function(a){try{if(a==this.g)e:{const ot=an(this.g);var u=this.g.Ba();const Dr=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Wu(this.g)))){this.J||ot!=4||u==7||(u==8||0>=Dr?vs(3):vs(2)),xa(this);var d=this.g.Z();this.X=d;t:if(Ru(this)){var m=Wu(this.g);a="";var P=m.length,C=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),Ts(this);var H="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(C&&u==P-1)});m.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=d==200,f_(this.i,this.u,this.A,this.l,this.R,ot,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,Je=this.g;if((Pe=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Pe)){var Ie=Pe;break t}}Ie=null}if(d=Ie)Cr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ma(this,d);else{this.o=!1,this.s=3,pt(12),or(this),Ts(this);break e}}if(this.P){d=!0;let Ut;for(;!this.J&&this.C<H.length;)if(Ut=m_(this,H),Ut==Va){ot==4&&(this.s=4,pt(14),d=!1),Cr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==wu){this.s=4,pt(15),Cr(this.i,this.l,H,"[Invalid Chunk]"),d=!1;break}else Cr(this.i,this.l,Ut,null),Ma(this,Ut);if(Ru(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||H.length!=0||this.h.h||(this.s=1,pt(16),d=!1),this.o=this.o&&d,!d)Cr(this.i,this.l,H,"[Invalid Chunked Response]"),or(this),Ts(this);else if(0<H.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),qa(it),it.M=!0,pt(11))}}else Cr(this.i,this.l,H,null),Ma(this,H);ot==4&&or(this),this.o&&!this.J&&(ot==4?Xu(this.j,this):(this.o=!1,ji(this)))}else D_(this.g),d==400&&0<H.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),or(this),Ts(this)}}}catch{}finally{}};function Ru(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function m_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Va:(d=Number(u.substring(d,m)),isNaN(d)?wu:(m+=1,m+d>u.length?Va:(u=u.slice(m,m+d),a.C=m+d,u)))}Vn.prototype.cancel=function(){this.J=!0,or(this)};function ji(a){a.S=Date.now()+a.I,bu(a,a.I)}function bu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Es(g(a.ba,a),u)}function xa(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Vn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(d_(this.i,this.A),this.L!=2&&(vs(),pt(17)),or(this),this.s=2,Ts(this)):bu(this,this.S-a)};function Ts(a){a.j.G==0||a.J||Xu(a.j,a)}function or(a){xa(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,_s(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ma(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||La(d.h,a))){if(!a.K&&La(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Yi(d),zi(d);else break e;ja(d),pt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Es(g(d.Za,d),6e3));if(1>=Cu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else cr(d,11)}else if((a.K||d.g==a)&&Yi(d),!B(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Ie=P[u];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const it=Ie[3];it!=null&&(d.la=it,d.j.info("VER="+d.la));const ot=Ie[4];ot!=null&&(d.Aa=ot,d.j.info("SVER="+d.Aa));const Dr=Ie[5];Dr!=null&&typeof Dr=="number"&&0<Dr&&(m=1.5*Dr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ut=a.g;if(Ut){const Xi=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xi){var C=m.h;C.g||Xi.indexOf("spdy")==-1&&Xi.indexOf("quic")==-1&&Xi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Fa(C,C.h),C.h=null))}if(m.D){const $a=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;$a&&(m.ya=$a,Oe(m.I,m.D,$a))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var H=a;if(m.qa=th(m,m.J?m.ia:null,m.W),H.K){Nu(m.h,H);var Pe=H,Je=m.L;Je&&(Pe.I=Je),Pe.B&&(xa(Pe),ji(Pe)),m.g=H}else Yu(m);0<d.i.length&&Qi(d)}else Ie[0]!="stop"&&Ie[0]!="close"||cr(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?cr(d,7):Ba(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}vs(4)}catch{}}var g_=class{constructor(a,u){this.g=a,this.map=u}};function Su(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Cu(a){return a.h?1:a.g?a.g.size:0}function La(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Fa(a,u){a.g?a.g.add(u):a.h=u}function Nu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Su.prototype.cancel=function(){if(this.i=Ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ou(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return O(a.i)}function __(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function y_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function Du(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=y_(a),m=__(a),P=m.length,C=0;C<P;C++)u.call(void 0,m[C],d&&d[C],a)}var Vu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function v_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),P=null;if(0<=m){var C=a[d].substring(0,m);P=a[d].substring(m+1)}else C=a[d];u(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function ar(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ar){this.h=a.h,qi(this,a.j),this.o=a.o,this.g=a.g,$i(this,a.s),this.l=a.l;var u=a.i,d=new Rs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),ku(this,d),this.m=a.m}else a&&(u=String(a).match(Vu))?(this.h=!1,qi(this,u[1]||"",!0),this.o=ws(u[2]||""),this.g=ws(u[3]||"",!0),$i(this,u[4]),this.l=ws(u[5]||"",!0),ku(this,u[6]||"",!0),this.m=ws(u[7]||"")):(this.h=!1,this.i=new Rs(null,this.h))}ar.prototype.toString=function(){var a=[],u=this.j;u&&a.push(As(u,xu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(As(u,xu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(As(d,d.charAt(0)=="/"?T_:I_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",As(d,A_)),a.join("")};function on(a){return new ar(a)}function qi(a,u,d){a.j=d?ws(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function $i(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function ku(a,u,d){u instanceof Rs?(a.i=u,R_(a.i,a.h)):(d||(u=As(u,w_)),a.i=new Rs(u,a.h))}function Oe(a,u,d){a.i.set(u,d)}function Hi(a){return Oe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ws(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function As(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,E_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function E_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xu=/[#\/\?@]/g,I_=/[#\?:]/g,T_=/[#\?]/g,w_=/[#\?@]/g,A_=/#/g;function Rs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function kn(a){a.g||(a.g=new Map,a.h=0,a.i&&v_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Rs.prototype,t.add=function(a,u){kn(this),this.i=null,a=Nr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Mu(a,u){kn(a),u=Nr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Lu(a,u){return kn(a),u=Nr(a,u),a.g.has(u)}t.forEach=function(a,u){kn(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(u,P,m,this)},this)},this)},t.na=function(){kn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const P=a[m];for(let C=0;C<P.length;C++)d.push(u[m])}return d},t.V=function(a){kn(this);let u=[];if(typeof a=="string")Lu(this,a)&&(u=u.concat(this.g.get(Nr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return kn(this),this.i=null,a=Nr(this,a),Lu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Fu(a,u,d){Mu(a,u),0<d.length&&(a.i=null,a.g.set(Nr(a,u),O(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const C=encodeURIComponent(String(m)),H=this.V(m);for(m=0;m<H.length;m++){var P=C;H[m]!==""&&(P+="="+encodeURIComponent(String(H[m]))),a.push(P)}}return this.i=a.join("&")};function Nr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function R_(a,u){u&&!a.j&&(kn(a),a.i=null,a.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&(Mu(this,m),Fu(this,P,d))},a)),a.j=u}function b_(a,u){const d=new Is;if(c.Image){const m=new Image;m.onload=v(xn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=v(xn,d,"TestLoadImage: error",!1,u,m),m.onabort=v(xn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=v(xn,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function S_(a,u){const d=new Is,m=new AbortController,P=setTimeout(()=>{m.abort(),xn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(C=>{clearTimeout(P),C.ok?xn(d,"TestPingServer: ok",!0,u):xn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),xn(d,"TestPingServer: error",!1,u)})}function xn(a,u,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function P_(){this.g=new Li}function C_(a,u,d){const m=d||"";try{Du(a,function(P,C){let H=P;h(P)&&(H=Ye(P)),u.push(m+C+"="+encodeURIComponent(H))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function Wi(a){this.l=a.Ub||null,this.j=a.eb||!1}N(Wi,Pr),Wi.prototype.g=function(){return new Ki(this.l,this.j)},Wi.prototype.i=function(a){return function(){return a}}({});function Ki(a,u){se.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Ki,se),t=Ki.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ss(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ss(this)),this.g&&(this.readyState=3,Ss(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Uu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Uu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?bs(this):Ss(this),this.readyState==3&&Uu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,bs(this))},t.Qa=function(a){this.g&&(this.response=a,bs(this))},t.ga=function(){this.g&&bs(this)};function bs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ss(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ss(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Bu(a){let u="";return fe(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Ua(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Bu(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Oe(a,u,d))}function Le(a){se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Le,se);var N_=/^https?$/i,O_=["POST","PUT"];t=Le.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Da.g(),this.v=this.o?mu(this.o):mu(Da),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){ju(this,C);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())d.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(O_,u,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,H]of d)this.g.setRequestHeader(C,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hu(this),this.u=!0,this.g.send(a),this.u=!1}catch(C){ju(this,C)}};function ju(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,qu(a),Gi(a)}function qu(a){a.A||(a.A=!0,ue(a,"complete"),ue(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ue(this,"complete"),ue(this,"abort"),Gi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gi(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?$u(this):this.bb())},t.bb=function(){$u(this)};function $u(a){if(a.h&&typeof o<"u"&&(!a.v[1]||an(a)!=4||a.Z()!=2)){if(a.u&&an(a)==4)xe(a.Ea,0,a);else if(ue(a,"readystatechange"),an(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=H===0){var P=String(a.D).match(Vu)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),m=!N_.test(P?P.toLowerCase():"")}d=m}if(d)ue(a,"complete"),ue(a,"success");else{a.m=6;try{var C=2<an(a)?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.Z()+"]",qu(a)}}finally{Gi(a)}}}}function Gi(a,u){if(a.g){Hu(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ue(a,"ready");try{d.onreadystatechange=m}catch{}}}function Hu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function an(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),xt(u)}};function Wu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function D_(a){const u={};a=(a.g&&2<=an(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(B(a[m]))continue;var d=R(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[P]||[];u[P]=C,C.push(d)}w(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ps(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Ku(a){this.Aa=0,this.i=[],this.j=new Is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ps("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ps("baseRetryDelayMs",5e3,a),this.cb=Ps("retryDelaySeedMs",1e4,a),this.Wa=Ps("forwardChannelMaxRetries",2,a),this.wa=Ps("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Su(a&&a.concurrentRequestLimit),this.Da=new P_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ku.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){pt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=th(this,null,this.W),Qi(this)};function Ba(a){if(Gu(a),a.G==3){var u=a.U++,d=on(a.I);if(Oe(d,"SID",a.K),Oe(d,"RID",u),Oe(d,"TYPE","terminate"),Cs(a,d),u=new Vn(a,a.j,u),u.L=2,u.v=Hi(on(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=nh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ji(u)}eh(a)}function zi(a){a.g&&(qa(a),a.g.cancel(),a.g=null)}function Gu(a){zi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Yi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Qi(a){if(!Pu(a.h)&&!a.s){a.s=!0;var u=a.Ga;ye||Ft(),me||(ye(),me=!0),At.add(u,a),a.B=0}}function V_(a,u){return Cu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Es(g(a.Ga,a,u),Zu(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Vn(this,this.j,a);let C=this.o;if(this.S&&(C?(C=y(C),A(C,this.S)):C=this.S),this.m!==null||this.O||(P.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Qu(this,P,u),d=on(this.I),Oe(d,"RID",a),Oe(d,"CVER",22),this.D&&Oe(d,"X-HTTP-Session-Id",this.D),Cs(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(Bu(C)))+"&"+u:this.m&&Ua(d,this.m,C)),Fa(this.h,P),this.Ua&&Oe(d,"TYPE","init"),this.P?(Oe(d,"$req",u),Oe(d,"SID","null"),P.T=!0,ka(P,d,null)):ka(P,d,u),this.G=2}}else this.G==3&&(a?zu(this,a):this.i.length==0||Pu(this.h)||zu(this))};function zu(a,u){var d;u?d=u.l:d=a.U++;const m=on(a.I);Oe(m,"SID",a.K),Oe(m,"RID",d),Oe(m,"AID",a.T),Cs(a,m),a.m&&a.o&&Ua(m,a.m,a.o),d=new Vn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Qu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Fa(a.h,d),ka(d,m,u)}function Cs(a,u){a.H&&fe(a.H,function(d,m){Oe(u,m,d)}),a.l&&Du({},function(d,m){Oe(u,m,d)})}function Qu(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let C=-1;for(;;){const H=["count="+d];C==-1?0<d?(C=P[0].g,H.push("ofs="+C)):C=0:H.push("ofs="+C);let Pe=!0;for(let Je=0;Je<d;Je++){let Ie=P[Je].g;const it=P[Je].map;if(Ie-=C,0>Ie)C=Math.max(0,P[Je].g-100),Pe=!1;else try{C_(it,H,"req"+Ie+"_")}catch{m&&m(it)}}if(Pe){m=H.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Yu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ye||Ft(),me||(ye(),me=!0),At.add(u,a),a.v=0}}function ja(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Es(g(a.Fa,a),Zu(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ju(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Es(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),zi(this),Ju(this))};function qa(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Ju(a){a.g=new Vn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=on(a.qa);Oe(u,"RID","rpc"),Oe(u,"SID",a.K),Oe(u,"AID",a.T),Oe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Oe(u,"TO",a.ja),Oe(u,"TYPE","xmlhttp"),Cs(a,u),a.m&&a.o&&Ua(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Hi(on(u)),d.m=null,d.P=!0,Au(d,a)}t.Za=function(){this.C!=null&&(this.C=null,zi(this),ja(this),pt(19))};function Yi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Xu(a,u){var d=null;if(a.g==u){Yi(a),qa(a),a.g=null;var m=2}else if(La(a.h,u))d=u.D,Nu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;m=Fi(),ue(m,new Eu(m,d)),Qi(a)}else Yu(a);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&V_(a,u)||m==2&&ja(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),P){case 1:cr(a,5);break;case 4:cr(a,10);break;case 3:cr(a,6);break;default:cr(a,2)}}}function Zu(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function cr(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const P=!m;m=new ar(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||qi(m,"https"),Hi(m),P?b_(m.toString(),d):S_(m.toString(),d)}else pt(2);a.G=0,a.l&&a.l.sa(u),eh(a),Gu(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function eh(a){if(a.G=0,a.ka=[],a.l){const u=Ou(a.h);(u.length!=0||a.i.length!=0)&&(k(a.ka,u),k(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function th(a,u,d){var m=d instanceof ar?on(d):new ar(d);if(m.g!="")u&&(m.g=u+"."+m.g),$i(m,m.s);else{var P=c.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var C=new ar(null);m&&qi(C,m),u&&(C.g=u),P&&$i(C,P),d&&(C.l=d),m=C}return d=a.D,u=a.ya,d&&u&&Oe(m,d,u),Oe(m,"VER",a.la),Cs(a,m),m}function nh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Le(new Wi({eb:d})):new Le(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rh(){}t=rh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ji(){}Ji.prototype.g=function(a,u){return new bt(a,u)};function bt(a,u){se.call(this),this.g=new Ku(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Or(this)}N(bt,se),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){Ba(this.g)},bt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Ye(a),a=d);u.i.push(new g_(u.Ya++,a)),u.G==3&&Qi(u)},bt.prototype.N=function(){this.g.l=null,delete this.j,Ba(this.g),delete this.g,bt.aa.N.call(this)};function sh(a){Na.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}N(sh,Na);function ih(){Oa.call(this),this.status=1}N(ih,Oa);function Or(a){this.g=a}N(Or,rh),Or.prototype.ua=function(){ue(this.g,"a")},Or.prototype.ta=function(a){ue(this.g,new sh(a))},Or.prototype.sa=function(a){ue(this.g,new ih)},Or.prototype.ra=function(){ue(this.g,"b")},Ji.prototype.createWebChannel=Ji.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,lm=function(){return new Ji},cm=function(){return Fi()},am=ir,Lc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ui.NO_ERROR=0,Ui.TIMEOUT=8,Ui.HTTP_ERROR=6,ho=Ui,Iu.COMPLETE="complete",om=Iu,gu.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",se.prototype.listen=se.prototype.K,Us=gu,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,im=Le}).apply(typeof no<"u"?no:typeof self<"u"?self:typeof window<"u"?window:{});const gf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Il("@firebase/firestore");function Vs(){return Er.logLevel}function X(t,...e){if(Er.logLevel<=_e.DEBUG){const n=e.map(Al);Er.debug(`Firestore (${hs}): ${t}`,...n)}}function bn(t,...e){if(Er.logLevel<=_e.ERROR){const n=e.map(Al);Er.error(`Firestore (${hs}): ${t}`,...n)}}function es(t,...e){if(Er.logLevel<=_e.WARN){const n=e.map(Al);Er.warn(`Firestore (${hs}): ${t}`,...n)}}function Al(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw bn(e),new Error(e)}function be(t,e){t||ae()}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class iw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ow{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new In;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new In,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new In)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new um(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new ct(e)}}class aw{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new aw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){be(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new lw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=hw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function ts(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Ge(0,0))}static max(){return new ce(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ui.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ui?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends ui{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new De(n)}static emptyPath(){return new De([])}}const fw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends ui{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return fw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Y(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Y(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(De.fromString(e))}static fromName(e){return new te(De.fromString(e).popFirst(5))}static empty(){return new te(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new De(e.slice()))}}function dw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new Xn(s,te.empty(),e)}function pw(t){return new Xn(t.readTime,t.key,-1)}class Xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xn(ce.min(),te.empty(),-1)}static max(){return new Xn(ce.max(),te.empty(),-1)}}function mw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _w{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==gw)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function yw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ri(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Rl.oe=-1;function ua(t){return t==null}function Vo(t){return t===0&&1/t==-1/0}function vw(t){return typeof t=="number"&&Number.isInteger(t)&&!Vo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ro(this.root,e,this.comparator,!0)}}class ro{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yf(this.data.getIterator())}getIteratorFrom(e){return new yf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class yf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new tt(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new dm("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const Ew=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(t){if(be(!!t),typeof t=="string"){let e=0;const n=Ew.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sl(t){const e=t.mapValue.fields.__previous_value__;return bl(e)?Sl(e):e}function hi(t){const e=Zn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class fi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so={mapValue:{}};function Tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bl(t)?4:ww(t)?9007199254740991:Tw(t)?10:11:ae()}function sn(t,e){if(t===e)return!0;const n=Tr(t);if(n!==Tr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hi(t).isEqual(hi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Zn(s.timestampValue),c=Zn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ir(s.bytesValue).isEqual(Ir(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),c=Be(i.doubleValue);return o===c?Vo(o)===Vo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ts(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(_f(o)!==_f(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!sn(o[l],c[l])))return!1;return!0}(t,e);default:return ae()}}function di(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function ns(t,e){if(t===e)return 0;const n=Tr(t),r=Tr(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Be(i.integerValue||i.doubleValue),l=Be(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return vf(t.timestampValue,e.timestampValue);case 4:return vf(hi(t),hi(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Ir(i),l=Ir(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Te(c[h],l[h]);if(f!==0)return f}return Te(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Te(Be(i.latitude),Be(o.latitude));return c!==0?c:Te(Be(i.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ef(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},g=o.fields||{},v=(c=p.value)===null||c===void 0?void 0:c.arrayValue,N=(l=g.value)===null||l===void 0?void 0:l.arrayValue,O=Te(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((f=N==null?void 0:N.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:Ef(v,N)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===so.mapValue&&o===so.mapValue)return 0;if(i===so.mapValue)return 1;if(o===so.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=Te(l[p],f[p]);if(g!==0)return g;const v=ns(c[l[p]],h[f[p]]);if(v!==0)return v}return Te(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ae()}}function vf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Zn(t),r=Zn(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function Ef(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ns(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function rs(t){return Fc(t)}function Fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fc(n.fields[o])}`;return s+"}"}(t.mapValue):ae()}function If(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Uc(t){return!!t&&"integerValue"in t}function Pl(t){return!!t&&"arrayValue"in t}function Tf(t){return!!t&&"nullValue"in t}function wf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fo(t){return!!t&&"mapValue"in t}function Tw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ar(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ww(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(n)}setAll(e){let n=et.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Js(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());fo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];fo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ar(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wt(Js(this.value))}}function pm(t){const e=[];return Ar(t.fields,(n,r)=>{const s=new et([n]);if(fo(r)){const i=pm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ut(e,0,ce.min(),ce.min(),ce.min(),wt.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,ce.min(),ce.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,ce.min(),ce.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.position=e,this.inclusive=n}}function Af(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=ns(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Aw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{}class He extends mm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bw(e,n,r):n==="array-contains"?new Cw(e,r):n==="in"?new Nw(e,r):n==="not-in"?new Ow(e,r):n==="array-contains-any"?new Dw(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Sw(e,r):new Pw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ns(n,this.value)):n!==null&&Tr(this.value)===Tr(n)&&this.matchesComparison(ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends mm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kt(e,n)}matches(e){return gm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function gm(t){return t.op==="and"}function _m(t){return Rw(t)&&gm(t)}function Rw(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function Bc(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+rs(t.value);if(_m(t))return t.filters.map(e=>Bc(e)).join(",");{const e=t.filters.map(n=>Bc(n)).join(",");return`${t.op}(${e})`}}function ym(t,e){return t instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&sn(r.value,s.value)}(t,e):t instanceof Kt?function(r,s){return s instanceof Kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&ym(o,s.filters[c]),!0):!1}(t,e):void ae()}function vm(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${rs(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(vm).join(" ,")+"}"}(t):"Filter"}class bw extends He{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class Sw extends He{constructor(e,n){super(e,"in",n),this.keys=Em("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Pw extends He{constructor(e,n){super(e,"not-in",n),this.keys=Em("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Em(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class Cw extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pl(n)&&di(n.arrayValue,this.value)}}class Nw extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&di(this.value.arrayValue,n)}}class Ow extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!di(this.value.arrayValue,n)}}class Dw extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>di(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function bf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Vw(t,e,n,r,s,i,o)}function Cl(t){const e=le(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>rs(r)).join(",")),e.ue=n}return e.ue}function Nl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Aw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ym(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rf(t.startAt,e.startAt)&&Rf(t.endAt,e.endAt)}function jc(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function kw(t,e,n,r,s,i,o,c){return new fs(t,e,n,r,s,i,o,c)}function Ol(t){return new fs(t)}function Sf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Im(t){return t.collectionGroup!==null}function Xs(t){const e=le(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new tt(et.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new pi(i,r))}),n.has(et.keyField().canonicalString())||e.ce.push(new pi(et.keyField(),r))}return e.ce}function en(t){const e=le(t);return e.le||(e.le=xw(e,Xs(t))),e.le}function xw(t,e){if(t.limitType==="F")return bf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new pi(s.field,i)});const n=t.endAt?new ko(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ko(t.startAt.position,t.startAt.inclusive):null;return bf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function qc(t,e){const n=t.filters.concat([e]);return new fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $c(t,e,n){return new fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ha(t,e){return Nl(en(t),en(e))&&t.limitType===e.limitType}function Tm(t){return`${Cl(en(t))}|lt:${t.limitType}`}function Mr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>vm(s)).join(", ")}]`),ua(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>rs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>rs(s)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function fa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Af(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,Xs(r),s)||r.endAt&&!function(o,c,l){const h=Af(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,Xs(r),s))}(t,e)}function Mw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wm(t){return(e,n)=>{let r=!1;for(const s of Xs(t)){const i=Lw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Lw(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ns(l,h):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ar(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=new Me(te.comparator);function Sn(){return Fw}const Am=new Me(te.comparator);function Bs(...t){let e=Am;for(const n of t)e=e.insert(n.key,n);return e}function Rm(t){let e=Am;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function pr(){return Zs()}function bm(){return Zs()}function Zs(){return new ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const Uw=new Me(te.comparator),Bw=new tt(te.comparator);function ge(...t){let e=Bw;for(const n of t)e=e.add(n);return e}const jw=new tt(Te);function qw(){return jw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vo(e)?"-0":e}}function Sm(t){return{integerValue:""+t}}function $w(t,e){return vw(e)?Sm(e):Dl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this._=void 0}}function Hw(t,e,n){return t instanceof xo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&bl(i)&&(i=Sl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof mi?Cm(t,e):t instanceof gi?Nm(t,e):function(s,i){const o=Pm(s,i),c=Pf(o)+Pf(s.Pe);return Uc(o)&&Uc(s.Pe)?Sm(c):Dl(s.serializer,c)}(t,e)}function Ww(t,e,n){return t instanceof mi?Cm(t,e):t instanceof gi?Nm(t,e):n}function Pm(t,e){return t instanceof Mo?function(r){return Uc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class xo extends da{}class mi extends da{constructor(e){super(),this.elements=e}}function Cm(t,e){const n=Om(e);for(const r of t.elements)n.some(s=>sn(s,r))||n.push(r);return{arrayValue:{values:n}}}class gi extends da{constructor(e){super(),this.elements=e}}function Nm(t,e){let n=Om(e);for(const r of t.elements)n=n.filter(s=>!sn(s,r));return{arrayValue:{values:n}}}class Mo extends da{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Pf(t){return Be(t.integerValue||t.doubleValue)}function Om(t){return Pl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Kw(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof mi&&s instanceof mi||r instanceof gi&&s instanceof gi?ts(r.elements,s.elements,sn):r instanceof Mo&&s instanceof Mo?sn(r.Pe,s.Pe):r instanceof xo&&s instanceof xo}(t.transform,e.transform)}class Gw{constructor(e,n){this.version=e,this.transformResults=n}}class vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vt}static exists(e){return new vt(void 0,e)}static updateTime(e){return new vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function po(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pa{}function Dm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ma(t.key,vt.none()):new bi(t.key,t.data,vt.none());{const n=t.data,r=wt.empty();let s=new tt(et.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new nr(t.key,r,new Nt(s.toArray()),vt.none())}}function zw(t,e,n){t instanceof bi?function(s,i,o){const c=s.value.clone(),l=Nf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof nr?function(s,i,o){if(!po(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Nf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Vm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ei(t,e,n,r){return t instanceof bi?function(i,o,c,l){if(!po(i.precondition,o))return c;const h=i.value.clone(),f=Of(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof nr?function(i,o,c,l){if(!po(i.precondition,o))return c;const h=Of(i.fieldTransforms,l,o),f=o.data;return f.setAll(Vm(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return po(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function Qw(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Pm(r.transform,s||null);i!=null&&(n===null&&(n=wt.empty()),n.set(r.field,i))}return n||null}function Cf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ts(r,s,(i,o)=>Kw(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bi extends pa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class nr extends pa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Nf(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Ww(o,c,n[s]))}return r}function Of(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Hw(i,o,e))}return r}class ma extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yw extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&zw(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ei(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ei(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Dm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&ts(this.mutations,e.mutations,(n,r)=>Cf(n,r))&&ts(this.baseMutations,e.baseMutations,(n,r)=>Cf(n,r))}}class Vl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=function(){return Uw}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Vl(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,ve;function eA(t){switch(t){default:return ae();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function km(t){if(t===void 0)return bn("GRPC error has no .code"),M.UNKNOWN;switch(t){case $e.OK:return M.OK;case $e.CANCELLED:return M.CANCELLED;case $e.UNKNOWN:return M.UNKNOWN;case $e.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case $e.INTERNAL:return M.INTERNAL;case $e.UNAVAILABLE:return M.UNAVAILABLE;case $e.UNAUTHENTICATED:return M.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case $e.NOT_FOUND:return M.NOT_FOUND;case $e.ALREADY_EXISTS:return M.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return M.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case $e.ABORTED:return M.ABORTED;case $e.OUT_OF_RANGE:return M.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return M.UNIMPLEMENTED;case $e.DATA_LOSS:return M.DATA_LOSS;default:return ae()}}(ve=$e||($e={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=new yr([4294967295,4294967295],0);function Df(t){const e=tA().encode(t),n=new sm;return n.update(e),new Uint8Array(n.digest())}function Vf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new yr([n,r],0),new yr([s,i],0)]}class kl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new js(`Invalid padding: ${n}`);if(r<0)throw new js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new js(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new js(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=yr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(yr.fromNumber(r)));return s.compare(nA)===1&&(s=new yr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Df(e),[r,s]=Vf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new kl(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Df(e),[r,s]=Vf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Si.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ga(ce.min(),s,new Me(Te),Sn(),ge())}}class Si{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Si(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class xm{constructor(e,n){this.targetId=e,this.me=n}}class Mm{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class kf{constructor(){this.fe=0,this.ge=Mf(),this.pe=rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae()}}),new Si(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Mf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Sn(),this.qe=xf(),this.Qe=new Me(Te)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(jc(i))if(r===0){const o=new te(i.path);this.Ue(n,o,ut.newNoDocument(o,ce.min()))}else be(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Ir(r).toUint8Array()}catch(l){if(l instanceof dm)return es("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new kl(o,s,i)}catch(l){return es(l instanceof js?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&jc(c.target)){const l=new te(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ut.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ge();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ga(e,n,this.Qe,this.ke,r);return this.ke=Sn(),this.qe=xf(),this.Qe=new Me(Te),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new kf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new tt(Te),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new kf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function xf(){return new Me(te.comparator)}function Mf(){return new Me(te.comparator)}const sA={asc:"ASCENDING",desc:"DESCENDING"},iA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oA={and:"AND",or:"OR"};class aA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hc(t,e){return t.useProto3Json||ua(e)?e:{value:e}}function Lo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function cA(t,e){return Lo(t,e.toTimestamp())}function tn(t){return be(!!t),ce.fromTimestamp(function(n){const r=Zn(n);return new Ge(r.seconds,r.nanos)}(t))}function xl(t,e){return Wc(t,e).canonicalString()}function Wc(t,e){const n=function(s){return new De(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Fm(t){const e=De.fromString(t);return be($m(e)),e}function Kc(t,e){return xl(t.databaseId,e.path)}function uc(t,e){const n=Fm(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(Bm(n))}function Um(t,e){return xl(t.databaseId,e)}function lA(t){const e=Fm(t);return e.length===4?De.emptyPath():Bm(e)}function Gc(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Bm(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lf(t,e,n){return{name:Kc(t,e),fields:n.value.mapValue.fields}}function uA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(be(f===void 0||typeof f=="string"),rt.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?M.UNKNOWN:km(h.code);return new Y(f,h.message||"")}(o);n=new Mm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=uc(t,r.document.name),i=tn(r.document.updateTime),o=r.document.createTime?tn(r.document.createTime):ce.min(),c=new wt({mapValue:{fields:r.document.fields}}),l=ut.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new mo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=uc(t,r.document),i=r.readTime?tn(r.readTime):ce.min(),o=ut.newNoDocument(s,i),c=r.removedTargetIds||[];n=new mo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=uc(t,r.document),i=r.removedTargetIds||[];n=new mo([],i,s,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Zw(s,i),c=r.targetId;n=new xm(c,o)}}return n}function hA(t,e){let n;if(e instanceof bi)n={update:Lf(t,e.key,e.value)};else if(e instanceof ma)n={delete:Kc(t,e.key)};else if(e instanceof nr)n={update:Lf(t,e.key,e.data),updateMask:EA(e.fieldMask)};else{if(!(e instanceof Yw))return ae();n={verify:Kc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof xo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof mi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof gi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Mo)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:cA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae()}(t,e.precondition)),n}function fA(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?tn(s.updateTime):tn(i);return o.isEqual(ce.min())&&(o=tn(i)),new Gw(o,s.transformResults||[])}(n,e))):[]}function dA(t,e){return{documents:[Um(t,e.path)]}}function pA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Um(t,s);const i=function(h){if(h.length!==0)return qm(Kt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Lr(g.field),direction:_A(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Hc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function mA(t){let e=lA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=jm(p);return g instanceof Kt&&_m(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(N){return new pi(Fr(N.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,ua(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,v=p.values||[];return new ko(v,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,v=p.values||[];return new ko(v,g)}(n.endAt)),kw(e,s,o,i,c,"F",l,h)}function gA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function jm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(n.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fr(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return He.create(Fr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>jm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function _A(t){return sA[t]}function yA(t){return iA[t]}function vA(t){return oA[t]}function Lr(t){return{fieldPath:t.canonicalString()}}function Fr(t){return et.fromServerFormat(t.fieldPath)}function qm(t){return t instanceof He?function(n){if(n.op==="=="){if(wf(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NAN"}};if(Tf(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wf(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NAN"}};if(Tf(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lr(n.field),op:yA(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(s=>qm(s));return r.length===1?r[0]:{compositeFilter:{op:vA(n.op),filters:r}}}(t):ae()}function EA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $m(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,r,s,i=ce.min(),o=ce.min(),c=rt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e){this.ct=e}}function TA(t){const e=mA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$c(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(){this.un=new AA}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Xn.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Xn.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class AA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(De.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ss(0)}static kn(){return new ss(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(){this.changes=new ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ei(r.mutation,s,Nt.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=pr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Bs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Sn();const o=Zs(),c=function(){return Zs()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof nr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ei(f.mutation,h,f.mutation.getFieldMask(),Ge.now())):o.set(h.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new bA(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Zs();let s=new Me((o,c)=>o-c),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Nt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||ge()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=bm();f.forEach(g=>{if(!i.has(g)){const v=Dm(n.get(g),r.get(g));v!==null&&p.set(g,v),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Im(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(pr());let c=-1,l=i;return o.next(h=>U.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ge())).next(f=>({batchId:c,changes:Rm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=Bs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Bs();return this.indexManager.getCollectionParents(e,i).next(c=>U.forEach(c,l=>{const h=function(p,g){return new fs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))});let c=Bs();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ei(f.mutation,h,Nt.empty(),Ge.now()),fa(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:tn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:TA(s.bundledQuery),readTime:tn(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(){this.overlays=new Me(te.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=pr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=pr(),i=n.length+1,o=new te(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=pr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=pr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return U.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Xw(n,r));let i=this.Ir.get(n);i===void 0&&(i=ge(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.Tr=new tt(ze.Er),this.dr=new tt(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new te(new De([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new te(new De([])),r=new ze(n,e),s=new ze(n,e+1);let i=ge();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return te.comparator(e.key,n.key)||Te(e.wr,n.wr)}static Ar(e,n){return Te(e.wr,n.wr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new tt(ze.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Jw(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(Te);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new ze(new te(i),0);let c=new tt(Te);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),U.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ze(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.Mr=e,this.docs=function(){return new Me(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Sn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Sn();const o=n.path,c=new te(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||mw(pw(f),r)<=0||(s.has(f.key)||fa(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VA(this)}getSize(e){return U.resolve(this.size)}}class VA extends RA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.persistence=e,this.Nr=new ds(n=>Cl(n),Nl),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ml,this.targetCount=0,this.kr=ss.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Rl(0),this.Kr=!1,this.Kr=!0,this.$r=new NA,this.referenceDelegate=e(this),this.Ur=new kA(this),this.indexManager=new wA,this.remoteDocumentCache=function(s){return new DA(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new IA(n),this.Gr=new PA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new OA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new MA(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class MA extends _w{constructor(e){super(),this.currentSequenceNumber=e}}class Ll{constructor(e){this.persistence=e,this.Jr=new Ml,this.Yr=null}static Zr(e){return new Ll(e)}get Xr(){if(this.Yr)return this.Yr;throw ae()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=te.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return UI()?8:yw(ft())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new LA;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Vs()<=_e.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Mr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Vs()<=_e.DEBUG&&X("QueryEngine","Query:",Mr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Vs()<=_e.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Mr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):U.resolve())}Yi(e,n){if(Sf(n))return U.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=$c(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,c);return this.ns(n,h,o,l.readTime)?this.Yi(e,$c(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,s){return Sf(n)||s.isEqual(ce.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(Vs()<=_e.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mr(n)),this.rs(e,o,n,dw(s,-1)).next(c=>c))})}ts(e,n){let r=new tt(wm(e));return n.forEach((s,i)=>{fa(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Vs()<=_e.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Mr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Xn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Me(Te),this._s=new ds(i=>Cl(i),Nl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function BA(t,e,n,r){return new UA(t,e,n,r)}async function Hm(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ge();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function jA(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let v=U.resolve();return g.forEach(N=>{v=v.next(()=>f.getEntry(l,N)).next(O=>{const k=h.docVersions.get(N);be(k!==null),O.version.compareTo(k)<0&&(p.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),f.addEntry(O)))})}),v.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ge();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Wm(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function qA(t,e){const n=le(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(rt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),function(O,k,K){return O.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(g,v,f)&&c.push(n.Ur.updateTargetData(i,v))});let l=Sn(),h=ge();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push($A(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(ce.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return U.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=s,i))}function $A(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Sn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function HA(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function WA(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function zc(t,e,n){const r=le(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ri(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ff(t,e,n){const r=le(t);let s=ce.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=le(l),g=p._s.get(f);return g!==void 0?U.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,en(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:ge())).next(c=>(KA(r,Mw(e),c),{documents:c,Ts:i})))}function KA(t,e,n){let r=t.us.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Uf{constructor(){this.activeTargetIds=qw()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GA{constructor(){this.so=new Uf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Uf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io=null;function hc(){return io===null?io=function(){return 268435456+Math.round(2147483648*Math.random())}():io++,"0x"+io.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class JA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=hc(),l=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,l,h,s).then(f=>(X("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw es("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=QA[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=hc();return new Promise((o,c)=>{const l=new im;l.setWithCredentials(!0),l.listenOnce(om.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ho.NO_ERROR:const f=l.getResponseJson();X(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case ho.TIMEOUT:X(at,`RPC '${e}' ${i} timed out`),c(new Y(M.DEADLINE_EXCEEDED,"Request time out"));break;case ho.HTTP_ERROR:const p=l.getStatus();if(X(at,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const N=function(k){const K=k.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(K)>=0?K:M.UNKNOWN}(v.status);c(new Y(N,v.message))}else c(new Y(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Y(M.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{X(at,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(at,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=hc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lm(),c=cm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(at,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let g=!1,v=!1;const N=new YA({Io:k=>{v?X(at,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(X(at,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(at,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},To:()=>p.close()}),O=(k,K,B)=>{k.listen(K,q=>{try{B(q)}catch(W){setTimeout(()=>{throw W},0)}})};return O(p,Us.EventType.OPEN,()=>{v||(X(at,`RPC '${e}' stream ${s} transport opened.`),N.yo())}),O(p,Us.EventType.CLOSE,()=>{v||(v=!0,X(at,`RPC '${e}' stream ${s} transport closed`),N.So())}),O(p,Us.EventType.ERROR,k=>{v||(v=!0,es(at,`RPC '${e}' stream ${s} transport errored:`,k),N.So(new Y(M.UNAVAILABLE,"The operation could not be completed")))}),O(p,Us.EventType.MESSAGE,k=>{var K;if(!v){const B=k.data[0];be(!!B);const q=B,W=q.error||((K=q[0])===null||K===void 0?void 0:K.error);if(W){X(at,`RPC '${e}' stream ${s} received error:`,W);const de=W.status;let fe=function(T){const A=$e[T];if(A!==void 0)return km(A)}(de),w=W.message;fe===void 0&&(fe=M.INTERNAL,w="Unknown error status: "+de+" with message "+W.message),v=!0,N.So(new Y(fe,w)),p.close()}else X(at,`RPC '${e}' stream ${s} received:`,B),N.bo(B)}}),O(c,am.STAT_EVENT,k=>{k.stat===Lc.PROXY?X(at,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Lc.NOPROXY&&X(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function fc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){return new aA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Km(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Y(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XA extends Gm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=uA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?tn(o.readTime):ce.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Gc(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=jc(l)?{documents:dA(i,l)}:{query:pA(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Lm(i,o.resumeToken);const h=Hc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ce.min())>0){c.readTime=Lo(i,o.snapshotVersion.toTimestamp());const h=Hc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=gA(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Gc(this.serializer),n.removeTarget=e,this.a_(n)}}class ZA extends Gm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=fA(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Gc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>hA(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Y(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Wc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Wc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class tR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(bn(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Rr(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=le(l);h.L_.add(4),await Pi(h),h.q_.set("Unknown"),h.L_.delete(4),await ya(h)}(this))})}),this.q_=new tR(r,s)}}async function ya(t){if(Rr(t))for(const e of t.B_)await e(!0)}async function Pi(t){for(const e of t.B_)await e(!1)}function zm(t,e){const n=le(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ql(n)?jl(n):ps(n).r_()&&Bl(n,e))}function Ul(t,e){const n=le(t),r=ps(n);n.N_.delete(e),r.r_()&&Qm(n,e),n.N_.size===0&&(r.r_()?r.o_():Rr(n)&&n.q_.set("Unknown"))}function Bl(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ps(t).A_(e)}function Qm(t,e){t.Q_.xe(e),ps(t).R_(e)}function jl(t){t.Q_=new rA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ps(t).start(),t.q_.v_()}function ql(t){return Rr(t)&&!ps(t).n_()&&t.N_.size>0}function Rr(t){return le(t).L_.size===0}function Ym(t){t.Q_=void 0}async function rR(t){t.q_.set("Online")}async function sR(t){t.N_.forEach((e,n)=>{Bl(t,e)})}async function iR(t,e){Ym(t),ql(t)?(t.q_.M_(e),jl(t)):t.q_.set("Unknown")}async function oR(t,e,n){if(t.q_.set("Online"),e instanceof Mm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fo(t,r)}else if(e instanceof mo?t.Q_.Ke(e):e instanceof xm?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ce.min()))try{const r=await Wm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),Qm(i,l);const p=new Wn(f.target,l,h,f.sequenceNumber);Bl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Fo(t,r)}}async function Fo(t,e,n){if(!Ri(e))throw e;t.L_.add(1),await Pi(t),t.q_.set("Offline"),n||(n=()=>Wm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ya(t)})}function Jm(t,e){return e().catch(n=>Fo(t,n,e))}async function va(t){const e=le(t),n=er(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;aR(e);)try{const s=await HA(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,cR(e,s)}catch(s){await Fo(e,s)}Xm(e)&&Zm(e)}function aR(t){return Rr(t)&&t.O_.length<10}function cR(t,e){t.O_.push(e);const n=er(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Xm(t){return Rr(t)&&!er(t).n_()&&t.O_.length>0}function Zm(t){er(t).start()}async function lR(t){er(t).p_()}async function uR(t){const e=er(t);for(const n of t.O_)e.m_(n.mutations)}async function hR(t,e,n){const r=t.O_.shift(),s=Vl.from(r,e,n);await Jm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await va(t)}async function fR(t,e){e&&er(t).V_&&await async function(r,s){if(function(o){return eA(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();er(r).s_(),await Jm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await va(r)}}(t,e),Xm(t)&&Zm(t)}async function jf(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Rr(n);n.L_.add(3),await Pi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ya(n)}async function dR(t,e){const n=le(t);e?(n.L_.delete(2),await ya(n)):e||(n.L_.add(2),await Pi(n),n.q_.set("Unknown"))}function ps(t){return t.K_||(t.K_=function(n,r,s){const i=le(n);return i.w_(),new XA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:rR.bind(null,t),Ro:sR.bind(null,t),mo:iR.bind(null,t),d_:oR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ql(t)?jl(t):t.q_.set("Unknown")):(await t.K_.stop(),Ym(t))})),t.K_}function er(t){return t.U_||(t.U_=function(n,r,s){const i=le(n);return i.w_(),new ZA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:lR.bind(null,t),mo:fR.bind(null,t),f_:uR.bind(null,t),g_:hR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await va(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new $l(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hl(t,e){if(bn("AsyncQueue",`${e}: ${t}`),Ri(t))return new Y(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=Bs(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Hr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this.W_=new Me(te.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ae():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class is{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new is(e,n,Hr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class mR{constructor(){this.queries=$f(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=$f(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new Y(M.ABORTED,"Firestore shutting down"))}}function $f(){return new ds(t=>Tm(t),ha)}async function eg(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new pR,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Hl(o,`Initialization of query '${Mr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Wl(n)}async function tg(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function gR(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Wl(n)}function _R(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Wl(t){t.Y_.forEach(e=>{e.next()})}var Qc,Hf;(Hf=Qc||(Qc={})).ea="default",Hf.Cache="cache";class ng{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Qc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.key=e}}class sg{constructor(e){this.key=e}}class yR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ge(),this.mutatedKeys=ge(),this.Aa=wm(e),this.Ra=new Hr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new qf,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),v=fa(this.query,p)?p:null,N=!!g&&this.mutatedKeys.has(g.key),O=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;g&&v?g.data.isEqual(v.data)?N!==O&&(r.track({type:3,doc:v}),k=!0):this.ga(g,v)||(r.track({type:2,doc:v}),k=!0,(l&&this.Aa(v,l)>0||h&&this.Aa(v,h)<0)&&(c=!0)):!g&&v?(r.track({type:0,doc:v}),k=!0):g&&!v&&(r.track({type:1,doc:g}),k=!0,(l||h)&&(c=!0)),k&&(v?(o=o.add(v),i=O?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(v,N){const O=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return O(v)-O(N)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new is(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new qf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new sg(r))}),this.da.forEach(r=>{e.has(r)||n.push(new rg(r))}),n}ba(e){this.Ta=e.Ts,this.da=ge();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return is.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class vR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ER{constructor(e){this.key=e,this.va=!1}}class IR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ds(c=>Tm(c),ha),this.Ma=new Map,this.xa=new Set,this.Oa=new Me(te.comparator),this.Na=new Map,this.La=new Ml,this.Ba={},this.ka=new Map,this.qa=ss.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function TR(t,e,n=!0){const r=ug(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await ig(r,e,n,!0),s}async function wR(t,e){const n=ug(t);await ig(n,e,!0,!1)}async function ig(t,e,n,r){const s=await WA(t.localStore,en(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await AR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&zm(t.remoteStore,s),c}async function AR(t,e,n,r,s){t.Ka=(p,g,v)=>async function(O,k,K,B){let q=k.view.ma(K);q.ns&&(q=await Ff(O.localStore,k.query,!1).then(({documents:w})=>k.view.ma(w,q)));const W=B&&B.targetChanges.get(k.targetId),de=B&&B.targetMismatches.get(k.targetId)!=null,fe=k.view.applyChanges(q,O.isPrimaryClient,W,de);return Kf(O,k.targetId,fe.wa),fe.snapshot}(t,p,g,v);const i=await Ff(t.localStore,e,!0),o=new yR(e,i.Ts),c=o.ma(i.documents),l=Si.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Kf(t,n,h.wa);const f=new vR(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function RR(t,e,n){const r=le(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ha(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ul(r.remoteStore,s.targetId),Yc(r,s.targetId)}).catch(Ai)):(Yc(r,s.targetId),await zc(r.localStore,s.targetId,!0))}async function bR(t,e){const n=le(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ul(n.remoteStore,r.targetId))}async function SR(t,e,n){const r=kR(t);try{const s=await function(o,c){const l=le(o),h=Ge.now(),f=c.reduce((v,N)=>v.add(N.key),ge());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let N=Sn(),O=ge();return l.cs.getEntries(v,f).next(k=>{N=k,N.forEach((K,B)=>{B.isValidDocument()||(O=O.add(K))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,N)).next(k=>{p=k;const K=[];for(const B of c){const q=Qw(B,p.get(B.key).overlayedDocument);q!=null&&K.push(new nr(B.key,q,pm(q.value.mapValue),vt.exists(!0)))}return l.mutationQueue.addMutationBatch(v,h,K,c)}).next(k=>{g=k;const K=k.applyToLocalDocumentSet(p,O);return l.documentOverlayCache.saveOverlays(v,k.batchId,K)})}).then(()=>({batchId:g.batchId,changes:Rm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new Me(Te)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Ci(r,s.changes),await va(r.remoteStore)}catch(s){const i=Hl(s,"Failed to persist write");n.reject(i)}}async function og(t,e){const n=le(t);try{const r=await qA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?be(o.va):s.removedDocuments.size>0&&(be(o.va),o.va=!1))}),await Ci(n,r,e)}catch(r){await Ai(r)}}function Wf(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=le(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(c)&&(h=!0)}),h&&Wl(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PR(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Me(te.comparator);o=o.insert(i,ut.newNoDocument(i,ce.min()));const c=ge().add(i),l=new ga(ce.min(),new Map,new Me(Te),o,c);await og(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Kl(r)}else await zc(r.localStore,e,!1).then(()=>Yc(r,e,n)).catch(Ai)}async function CR(t,e){const n=le(t),r=e.batch.batchId;try{const s=await jA(n.localStore,e);cg(n,r,null),ag(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ci(n,s)}catch(s){await Ai(s)}}async function NR(t,e,n){const r=le(t);try{const s=await function(o,c){const l=le(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(be(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);cg(r,e,n),ag(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ci(r,s)}catch(s){await Ai(s)}}function ag(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function cg(t,e,n){const r=le(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Yc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||lg(t,r)})}function lg(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ul(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Kl(t))}function Kf(t,e,n){for(const r of n)r instanceof rg?(t.La.addReference(r.key,e),OR(t,r)):r instanceof sg?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||lg(t,r.key)):ae()}function OR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),Kl(t))}function Kl(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new te(De.fromString(e)),r=t.qa.next();t.Na.set(r,new ER(n)),t.Oa=t.Oa.insert(n,r),zm(t.remoteStore,new Wn(en(Ol(n.path)),r,"TargetPurposeLimboResolution",Rl.oe))}}async function Ci(t,e,n){const r=le(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Fl.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const f=le(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,g=>U.forEach(g.$i,v=>f.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>U.forEach(g.Ui,v=>f.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!Ri(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const v=f.os.get(g),N=v.snapshotVersion,O=v.withLastLimboFreeSnapshotVersion(N);f.os=f.os.insert(g,O)}}}(r.localStore,i))}async function DR(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await Hm(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new Y(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ci(n,r.hs)}}function VR(t,e){const n=le(t),r=n.Na.get(e);if(r&&r.va)return ge().add(r.key);{let s=ge();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function ug(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=og.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PR.bind(null,e),e.Ca.d_=gR.bind(null,e.eventManager),e.Ca.$a=_R.bind(null,e.eventManager),e}function kR(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NR.bind(null,e),e}class Uo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_a(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return BA(this.persistence,new FA,e.initialUser,this.serializer)}Ga(e){return new xA(Ll.Zr,this.serializer)}Wa(e){return new GA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uo.provider={build:()=>new Uo};class Jc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DR.bind(null,this.syncEngine),await dR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mR}()}createDatastore(e){const n=_a(e.databaseInfo.databaseId),r=function(i){return new JA(i)}(e.databaseInfo);return function(i,o,c,l){return new eR(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new nR(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Wf(this.syncEngine,n,0),function(){return Bf.D()?new Bf:new zA}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new IR(s,i,o,c,l,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=le(s);X("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Pi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Jc.provider={build:()=>new Jc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=hm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Hl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dc(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Hm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MR(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>jf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>jf(e.remoteStore,s)),t._onlineComponents=e}async function MR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await dc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;es("Error using user provided cache. Falling back to memory cache: "+n),await dc(t,new Uo)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await dc(t,new Uo);return t._offlineComponents}async function fg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Gf(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Gf(t,new Jc))),t._onlineComponents}function LR(t){return fg(t).then(e=>e.syncEngine)}async function dg(t){const e=await fg(t),n=e.eventManager;return n.onListen=TR.bind(null,e.syncEngine),n.onUnlisten=RR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=wR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=bR.bind(null,e.syncEngine),n}function FR(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new hg({next:g=>{f.Za(),o.enqueueAndForget(()=>tg(i,p));const v=g.docs.has(c);!v&&g.fromCache?h.reject(new Y(M.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&l&&l.source==="server"?h.reject(new Y(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new ng(Ol(c.path),f,{includeMetadataChanges:!0,_a:!0});return eg(i,p)}(await dg(t),t.asyncQueue,e,n,r)),r.promise}function UR(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new hg({next:g=>{f.Za(),o.enqueueAndForget(()=>tg(i,p)),g.fromCache&&l.source==="server"?h.reject(new Y(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new ng(c,f,{includeMetadataChanges:!0,_a:!0});return eg(i,p)}(await dg(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t,e,n){if(!n)throw new Y(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BR(t,e,n,r){if(e===!0&&r===!0)throw new Y(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qf(t){if(!te.isDocumentKey(t))throw new Y(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yf(t){if(te.isDocumentKey(t))throw new Y(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ea(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ea(t);throw new Y(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ia{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sw;switch(r.type){case"firstParty":return new cw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=zf.get(n);r&&(X("ComponentProvider","Removing Datastore"),zf.delete(n),r.terminate())}(this),Promise.resolve()}}function jR(t,e,n,r={}){var s;const i=(t=Lt(t,Ia))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ct.MOCK_USER;else{c=DI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Y(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ct(h)}t._authCredentials=new iw(new um(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new br(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class Qn extends br{constructor(e,n,r){super(e,n,Ol(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new te(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}function PS(t,e,...n){if(t=We(t),mg("collection","path",e),t instanceof Ia){const r=De.fromString(e,...n);return Yf(r),new Qn(t,null,r)}{if(!(t instanceof Et||t instanceof Qn))throw new Y(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Yf(r),new Qn(t.firestore,null,r)}}function qR(t,e,...n){if(t=We(t),arguments.length===1&&(e=hm.newId()),mg("doc","path",e),t instanceof Ia){const r=De.fromString(e,...n);return Qf(r),new Et(t,null,new te(r))}{if(!(t instanceof Et||t instanceof Qn))throw new Y(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Qf(r),new Et(t.firestore,t instanceof Qn?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Km(this,"async_queue_retry"),this.Vu=()=>{const r=fc();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=fc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new In;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ri(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw bn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=$l.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ae()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class rr extends Ia{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Xf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xf(e),this._firestoreClient=void 0,await e}}}function $R(t,e){const n=typeof t=="object"?t:tm(),r=typeof t=="string"?t:"(default)",s=wl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=NI("firestore");i&&jR(s,...i)}return s}function Ta(t){if(t._terminated)throw new Y(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||HR(t),t._firestoreClient}function HR(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new Iw(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,pg(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new xR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(rt.fromBase64String(e))}catch(n){throw new Y(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=/^__.*__$/;class KR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new bi(e,this.data,n,this.fieldTransforms)}}class gg{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _g(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class Yl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Yl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Bo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(_g(this.Cu)&&WR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class GR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_a(e)}Qu(e,n,r,s=!1){return new Yl({Cu:e,methodName:n,qu:r,path:et.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oi(t){const e=t._freezeSettings(),n=_a(t._databaseId);return new GR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Jl(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Xl("Data must be an object, but it was:",o,r);const c=Eg(r,o);let l,h;if(i.merge)l=new Nt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Xc(e,p,n);if(!o.contains(g))throw new Y(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Tg(f,g)||f.push(g)}l=new Nt(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new KR(new wt(c),l,h)}class wa extends Gl{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wa}}function yg(t,e,n,r){const s=t.Qu(1,e,n);Xl("Data must be an object, but it was:",s,r);const i=[],o=wt.empty();Ar(r,(l,h)=>{const f=Zl(e,l,n);h=We(h);const p=s.Nu(f);if(h instanceof wa)i.push(f);else{const g=Di(h,p);g!=null&&(i.push(f),o.set(f,g))}});const c=new Nt(i);return new gg(o,c,s.fieldTransforms)}function vg(t,e,n,r,s,i){const o=t.Qu(1,e,n),c=[Xc(e,r,n)],l=[s];if(i.length%2!=0)throw new Y(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Xc(e,i[g])),l.push(i[g+1]);const h=[],f=wt.empty();for(let g=c.length-1;g>=0;--g)if(!Tg(h,c[g])){const v=c[g];let N=l[g];N=We(N);const O=o.Nu(v);if(N instanceof wa)h.push(v);else{const k=Di(N,O);k!=null&&(h.push(v),f.set(v,k))}}const p=new Nt(h);return new gg(f,p,o.fieldTransforms)}function zR(t,e,n,r=!1){return Di(n,t.Qu(r?4:3,e))}function Di(t,e){if(Ig(t=We(t)))return Xl("Unsupported field value:",e,t),Eg(t,e);if(t instanceof Gl)return function(r,s){if(!_g(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Di(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $w(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:Lo(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lo(s.serializer,i)}}if(r instanceof zl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof os)return{bytesValue:Lm(s.serializer,r._byteString)};if(r instanceof Et){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ql)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Dl(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ea(r)}`)}(t,e)}function Eg(t,e){const n={};return fm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ar(t,(r,s)=>{const i=Di(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ig(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof zl||t instanceof os||t instanceof Et||t instanceof Gl||t instanceof Ql)}function Xl(t,e,n){if(!Ig(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ea(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Xc(t,e,n){if((e=We(e))instanceof Ni)return e._internalPath;if(typeof e=="string")return Zl(t,e);throw Bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const QR=new RegExp("[~\\*/\\[\\]]");function Zl(t,e,n){if(e.search(QR)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ni(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Y(M.INVALID_ARGUMENT,c+t+l)}function Tg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Aa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YR extends wg{data(){return super.data()}}function Aa(t,e){return typeof e=="string"?Zl(t,e):e instanceof Ni?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eu{}class Ag extends eu{}function CS(t,e,...n){let r=[];e instanceof eu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof tu).length,c=i.filter(l=>l instanceof Ra).length;if(o>1||o>0&&c>0)throw new Y(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ra extends Ag{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ra(e,n,r)}_apply(e){const n=this._parse(e);return Rg(e._query,n),new br(e.firestore,e.converter,qc(e._query,n))}_parse(e){const n=Oi(e.firestore);return function(i,o,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ed(p,f);const v=[];for(const N of p)v.push(Zf(l,i,N));g={arrayValue:{values:v}}}else g=Zf(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ed(p,f),g=zR(c,o,p,f==="in"||f==="not-in");return He.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function NS(t,e,n){const r=e,s=Aa("where",t);return Ra._create(s,r,n)}class tu extends eu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new tu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Rg(o,l),o=qc(o,l)}(e._query,n),new br(e.firestore,e.converter,qc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class nu extends Ag{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new nu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Y(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pi(i,o)}(e._query,this._field,this._direction);return new br(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new fs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function OS(t,e="asc"){const n=e,r=Aa("orderBy",t);return nu._create(r,n)}function Zf(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new Y(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Im(e)&&n.indexOf("/")!==-1)throw new Y(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!te.isDocumentKey(r))throw new Y(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return If(t,new te(r))}if(n instanceof Et)return If(t,n._key);throw new Y(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ea(n)}.`)}function ed(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rg(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class XR{convertValue(e,n="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ar(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Be(o.doubleValue));return new Ql(i)}convertGeoPoint(e){return new zl(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const n=Zn(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);be($m(r));const s=new fi(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||bn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bg extends wg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Aa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class go extends bg{data(e={}){return super.data(e)}}class ZR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new qs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new go(this._firestore,this._userDataWriter,r.key,r,new qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new go(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new go(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:e0(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function e0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t){t=Lt(t,Et);const e=Lt(t.firestore,rr);return FR(Ta(e),t._key).then(n=>t0(e,t,n))}class Sg extends XR{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function VS(t){t=Lt(t,br);const e=Lt(t.firestore,rr),n=Ta(e),r=new Sg(e);return JR(t._query),UR(n,t._query).then(s=>new ZR(e,r,t,s))}function kS(t,e,n){t=Lt(t,Et);const r=Lt(t.firestore,rr),s=ru(t.converter,e,n);return Vi(r,[Jl(Oi(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,vt.none())])}function xS(t,e,n,...r){t=Lt(t,Et);const s=Lt(t.firestore,rr),i=Oi(s);let o;return o=typeof(e=We(e))=="string"||e instanceof Ni?vg(i,"updateDoc",t._key,e,n,r):yg(i,"updateDoc",t._key,e),Vi(s,[o.toMutation(t._key,vt.exists(!0))])}function MS(t){return Vi(Lt(t.firestore,rr),[new ma(t._key,vt.none())])}function LS(t,e){const n=Lt(t.firestore,rr),r=qR(t),s=ru(t.converter,e);return Vi(n,[Jl(Oi(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,vt.exists(!1))]).then(()=>r)}function Vi(t,e){return function(r,s){const i=new In;return r.asyncQueue.enqueueAndForget(async()=>SR(await LR(r),s,i)),i.promise}(Ta(t),e)}function t0(t,e,n){const r=n.docs.get(e._key),s=new Sg(t);return new bg(t,s,e._key,r,new qs(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Oi(e)}set(e,n,r){this._verifyNotCommitted();const s=pc(e,this._firestore),i=ru(s.converter,n,r),o=Jl(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,vt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=pc(e,this._firestore);let o;return o=typeof(n=We(n))=="string"||n instanceof Ni?vg(this._dataReader,"WriteBatch.update",i._key,n,r,s):yg(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,vt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=pc(e,this._firestore);return this._mutations=this._mutations.concat(new ma(n._key,vt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Y(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function pc(t,e){if((t=We(t)).firestore!==e)throw new Y(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t){return Ta(t=Lt(t,rr)),new n0(t,e=>Vi(t,e))}(function(e,n=!0){(function(s){hs=s})(us),Zr(new vr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new rr(new ow(r.getProvider("auth-internal")),new uw(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fi(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),zn(gf,"4.7.3",e),zn(gf,"4.7.3","esm2017")})();function su(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Pg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const r0=Pg,Cg=new Ti("auth","Firebase",Pg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new Il("@firebase/auth");function s0(t,...e){jo.logLevel<=_e.WARN&&jo.warn(`Auth (${us}): ${t}`,...e)}function _o(t,...e){jo.logLevel<=_e.ERROR&&jo.error(`Auth (${us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,...e){throw iu(t,...e)}function nn(t,...e){return iu(t,...e)}function Ng(t,e,n){const r=Object.assign(Object.assign({},r0()),{[e]:n});return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function Yn(t){return Ng(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Cg.create(t,...e)}function oe(t,e,...n){if(!t)throw iu(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function Pn(t,e){t||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function i0(){return td()==="http:"||td()==="https:"}function td(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(i0()||MI()||"connection"in navigator)?navigator.onLine:!0}function a0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=VI()||LI()}get(){return o0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=new ki(3e4,6e4);function Sr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function sr(t,e,n,r,s={}){return Dg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=wi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return xI()||(h.referrerPolicy="no-referrer"),Og.fetch()(Vg(t,t.config.apiHost,n,c),h)})}async function Dg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},c0),e);try{const s=new h0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw oo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw oo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw oo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ng(t,f,h);Gt(t,f)}}catch(s){if(s instanceof Nn)throw s;Gt(t,"network-request-failed",{message:String(s)})}}async function ba(t,e,n,r,s={}){const i=await sr(t,e,n,r,s);return"mfaPendingCredential"in i&&Gt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Vg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ou(t.config,s):`${t.config.apiScheme}://${s}`}function u0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class h0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),l0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nn(t,e,r);return s.customData._tokenResponse=n,s}function nd(t){return t!==void 0&&t.enterprise!==void 0}class f0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return u0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function d0(t,e){return sr(t,"GET","/v2/recaptchaConfig",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(t,e){return sr(t,"POST","/v1/accounts:delete",e)}async function kg(t,e){return sr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function m0(t,e=!1){const n=We(t),r=await n.getIdToken(e),s=au(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ti(mc(s.auth_time)),issuedAtTime:ti(mc(s.iat)),expirationTime:ti(mc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function mc(t){return Number(t)*1e3}function au(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const s=zp(n);return s?JSON.parse(s):(_o("Failed to decode base64 JWT payload"),null)}catch(s){return _o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rd(t){const e=au(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&g0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function g0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await _i(t,kg(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?xg(i.providerUserInfo):[],c=v0(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new el(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function y0(t){const e=We(t);await qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function v0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xg(t){return t.map(e=>{var{providerId:n}=e,r=su(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(t,e){const n=await Dg(t,{},async()=>{const r=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Vg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Og.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function I0(t,e){return sr(t,"POST","/v2/accounts:revokeToken",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=rd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await E0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Wr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wr,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=su(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new el(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _i(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return m0(this,e)}reload(){return y0(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await _i(this,p0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(c=n.tenantId)!==null&&c!==void 0?c:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,K=(h=n.createdAt)!==null&&h!==void 0?h:void 0,B=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:W,isAnonymous:de,providerData:fe,stsTokenManager:w}=n;oe(q&&w,e,"internal-error");const y=Wr.fromJSON(this.name,w);oe(typeof q=="string",e,"internal-error"),Ln(p,e.name),Ln(g,e.name),oe(typeof W=="boolean",e,"internal-error"),oe(typeof de=="boolean",e,"internal-error"),Ln(v,e.name),Ln(N,e.name),Ln(O,e.name),Ln(k,e.name),Ln(K,e.name),Ln(B,e.name);const T=new yn({uid:q,auth:e,email:g,emailVerified:W,displayName:p,isAnonymous:de,photoURL:N,phoneNumber:v,tenantId:O,stsTokenManager:y,createdAt:K,lastLoginAt:B});return fe&&Array.isArray(fe)&&(T.providerData=fe.map(A=>Object.assign({},A))),k&&(T._redirectEventId=k),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Wr;s.updateFromServerResponse(n);const i=new yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?xg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Wr;c.updateFromIdToken(r);const l=new yn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new el(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=new Map;function vn(t){Pn(t instanceof Function,"Expected a class definition");let e=sd.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mg.type="NONE";const id=Mg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class Kr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yo(this.userKey,s.apiKey,i),this.fullPersistenceKey=yo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Kr(vn(id),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||vn(id);const o=yo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){const p=yn._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Kr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Kr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qg(e))return"Blackberry";if($g(e))return"Webos";if(Fg(e))return"Safari";if((e.includes("chrome/")||Ug(e))&&!e.includes("edge/"))return"Chrome";if(jg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lg(t=ft()){return/firefox\//i.test(t)}function Fg(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ug(t=ft()){return/crios\//i.test(t)}function Bg(t=ft()){return/iemobile/i.test(t)}function jg(t=ft()){return/android/i.test(t)}function qg(t=ft()){return/blackberry/i.test(t)}function $g(t=ft()){return/webos/i.test(t)}function cu(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function T0(t=ft()){var e;return cu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function w0(){return FI()&&document.documentMode===10}function Hg(t=ft()){return cu(t)||jg(t)||$g(t)||qg(t)||/windows phone/i.test(t)||Bg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t,e=[]){let n;switch(t){case"Browser":n=od(ft());break;case"Worker":n=`${od(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R0(t,e={}){return sr(t,"GET","/v2/passwordPolicy",Sr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=6;class S0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:b0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ad(this),this.idTokenSubscription=new ad(this),this.beforeStateQueue=new A0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Kr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kg(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=a0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(Yn(this));const n=e?We(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await R0(this),n=new S0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await I0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Kr.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&s0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ms(t){return We(t)}class ad{constructor(e){this.auth=e,this.observer=null,this.addObserver=KI(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function C0(t){Sa=t}function Kg(t){return Sa.loadJS(t)}function N0(){return Sa.recaptchaEnterpriseScript}function O0(){return Sa.gapiScript}function D0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const V0="recaptcha-enterprise",k0="NO_RECAPTCHA";class x0{constructor(e){this.type=V0,this.auth=ms(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{d0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new f0(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;nd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(k0)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&nd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=N0();l.length!==0&&(l+=c),Kg(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function cd(t,e,n,r=!1){const s=new x0(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ld(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await cd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await cd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t,e){const n=wl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Oo(i,e??{}))return s;Gt(s,"already-initialized")}return n.initialize({options:e})}function L0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function F0(t,e,n){const r=ms(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Gg(e),{host:o,port:c}=U0(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),B0()}function Gg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function U0(t){const e=Gg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ud(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ud(o)}}}function ud(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function B0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function j0(t,e){return sr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(t,e){return ba(t,"POST","/v1/accounts:signInWithPassword",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(t,e){return ba(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}async function H0(t,e){return ba(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends lu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new yi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ld(e,n,"signInWithPassword",q0);case"emailLink":return $0(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ld(e,r,"signUpPassword",j0);case"emailLink":return H0(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e){return ba(t,"POST","/v1/accounts:signInWithIdp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="http://localhost";class wr extends lu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=su(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new wr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:W0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function G0(t){const e=Ls(Fs(t)).link,n=e?Ls(Fs(e)).deep_link_id:null,r=Ls(Fs(t)).deep_link_id;return(r?Ls(Fs(r)).link:null)||r||n||e||t}class uu{constructor(e){var n,r,s,i,o,c;const l=Ls(Fs(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=K0((s=l.mode)!==null&&s!==void 0?s:null);oe(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=G0(e);try{return new uu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.providerId=gs.PROVIDER_ID}static credential(e,n){return yi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=uu.parseLink(n);return oe(r,"argument-error"),yi._fromEmailAndCode(e,r.code,r.tenantId)}}gs.PROVIDER_ID="password";gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends zg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends xi{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends xi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends xi{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends xi{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await yn._fromIdTokenResponse(e,r,s),o=hd(r);return new as({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=hd(r);return new as({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function hd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends Nn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$o.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $o(e,n,r,s)}}function Qg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$o._fromErrorAndOperation(t,i,e,r):i})}async function z0(t,e,n=!1){const r=await _i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q0(t,e,n=!1){const{auth:r}=t;if(gn(r.app))return Promise.reject(Yn(r));const s="reauthenticate";try{const i=await _i(t,Qg(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=au(i.idToken);oe(o,r,"internal-error");const{sub:c}=o;return oe(t.uid===c,r,"user-mismatch"),as._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(t,e,n=!1){if(gn(t.app))return Promise.reject(Yn(t));const r="signIn",s=await Qg(t,r,e),i=await as._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Y0(t,e){return Yg(ms(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J0(t){const e=ms(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function US(t,e,n){return gn(t.app)?Promise.reject(Yn(t)):Y0(We(t),gs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&J0(t),r})}function X0(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function Z0(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function BS(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function jS(t){return We(t).signOut()}const Ho="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ho,"1"),this.storage.removeItem(Ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=1e3,tb=10;class Xg extends Jg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);w0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xg.type="LOCAL";const nb=Xg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg extends Jg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zg.type="SESSION";const e_=Zg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await rb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=hu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function ib(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function ob(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ab(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cb(){return t_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="firebaseLocalStorageDb",lb=1,Wo="firebaseLocalStorage",r_="fbase_key";class Mi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ca(t,e){return t.transaction([Wo],e?"readwrite":"readonly").objectStore(Wo)}function ub(){const t=indexedDB.deleteDatabase(n_);return new Mi(t).toPromise()}function tl(){const t=indexedDB.open(n_,lb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wo,{keyPath:r_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wo)?e(r):(r.close(),await ub(),e(await tl()))})})}async function fd(t,e,n){const r=Ca(t,!0).put({[r_]:e,value:n});return new Mi(r).toPromise()}async function hb(t,e){const n=Ca(t,!1).get(e),r=await new Mi(n).toPromise();return r===void 0?null:r.value}function dd(t,e){const n=Ca(t,!0).delete(e);return new Mi(n).toPromise()}const fb=800,db=3;class s_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>db)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(cb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ob(),!this.activeServiceWorker)return;this.sender=new sb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ab()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tl();return await fd(e,Ho,"1"),await dd(e,Ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ca(s,!1).getAll();return new Mi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s_.type="LOCAL";const pb=s_;new ki(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(t,e){return e?vn(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends lu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gb(t){return Yg(t.auth,new fu(t),t.bypassAuthState)}function _b(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),Q0(n,new fu(t),t.bypassAuthState)}async function yb(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),z0(n,new fu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gb;case"linkViaPopup":case"linkViaRedirect":return yb;case"reauthViaPopup":case"reauthViaRedirect":return _b;default:Gt(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=new ki(2e3,1e4);class Ur extends i_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vb.get())};e()}}Ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="pendingRedirect",vo=new Map;class Ib extends i_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await Tb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tb(t,e){const n=Rb(e),r=Ab(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wb(t,e){vo.set(t._key(),e)}function Ab(t){return vn(t._redirectPersistence)}function Rb(t){return yo(Eb,t.config.apiKey,t.name)}async function bb(t,e,n=!1){if(gn(t.app))return Promise.reject(Yn(t));const r=ms(t),s=mb(r,e),o=await new Ib(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=10*60*1e3;class Pb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!o_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sb&&this.cachedEventUids.clear(),this.cachedEventUids.has(pd(e))}saveEventToCache(e){this.cachedEventUids.add(pd(e)),this.lastProcessedEventTime=Date.now()}}function pd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function o_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Cb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nb(t,e={}){return sr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Db=/^https?/;async function Vb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Nb(t);for(const n of e)try{if(kb(n))return}catch{}Gt(t,"unauthorized-domain")}function kb(t){const e=Zc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Db.test(n))return!1;if(Ob.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=new ki(3e4,6e4);function md(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Mb(t){return new Promise((e,n)=>{var r,s,i;function o(){md(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{md(),n(nn(t,"network-request-failed"))},timeout:xb.get()})}if(!((s=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rn().gapi)===null||i===void 0)&&i.load)o();else{const c=D0("iframefcb");return rn()[c]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},Kg(`${O0()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function Lb(t){return Eo=Eo||Mb(t),Eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=new ki(5e3,15e3),Ub="__/auth/iframe",Bb="emulator/auth/iframe",jb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $b(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ou(e,Bb):`https://${t.config.authDomain}/${Ub}`,r={apiKey:e.apiKey,appName:t.name,v:us},s=qb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wi(r).slice(1)}`}async function Hb(t){const e=await Lb(t),n=rn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:$b(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),c=rn().setTimeout(()=>{i(o)},Fb.get());function l(){rn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kb=500,Gb=600,zb="_blank",Qb="http://localhost";class gd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Yb(t,e,n,r=Kb,s=Gb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Wb),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ft().toLowerCase();n&&(c=Ug(h)?zb:n),Lg(h)&&(e=e||Qb,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[v,N])=>`${g}${v}=${N},`,"");if(T0(h)&&c!=="_self")return Jb(e||"",c),new gd(null);const p=window.open(e||"",c,f);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new gd(p)}function Jb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb="__/auth/handler",Zb="emulator/auth/handler",eS=encodeURIComponent("fac");async function _d(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:s};if(e instanceof zg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",WI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof xi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${eS}=${encodeURIComponent(l)}`:"";return`${tS(t)}?${wi(c).slice(1)}${h}`}function tS({config:t}){return t.emulator?ou(t,Zb):`https://${t.authDomain}/${Xb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="webStorageSupport";class nS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e_,this._completeRedirectFn=bb,this._overrideRedirectResult=wb}async _openPopup(e,n,r,s){var i;Pn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await _d(e,n,r,Zc(),s);return Yb(e,o,hu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await _d(e,n,r,Zc(),s);return ib(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Pn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Hb(e),r=new Pb(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gc,{type:gc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[gc];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hg()||Fg()||cu()}}const rS=nS;var yd="@firebase/auth",vd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oS(t){Zr(new vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wg(t)},h=new P0(r,s,i,l);return L0(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new vr("auth-internal",e=>{const n=ms(e.getProvider("auth").getImmediate());return(r=>new sS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(yd,vd,iS(t)),zn(yd,vd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=5*60,cS=Jp("authIdTokenMaxAge")||aS;let Ed=null;const lS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cS)return;const s=n==null?void 0:n.token;Ed!==s&&(Ed=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uS(t=tm()){const e=wl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=M0(t,{popupRedirectResolver:rS,persistence:[pb,nb,e_]}),r=Jp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=lS(i.toString());Z0(n,o,()=>o(n.currentUser)),X0(n,c=>o(c))}}const s=Qp("auth");return s&&F0(n,`http://${s}`),n}function hS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}C0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",hS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oS("Browser");const a_={apiKey:"AIzaSyCJ8eQmDW-Yn7uibak9FDtSeI9l5pAD_60",authDomain:"video-maker-manager-9a47c.firebaseapp.com",projectId:"video-maker-manager-9a47c",storageBucket:"video-maker-manager-9a47c.firebasestorage.app",messagingSenderId:"358053280842",appId:"1:358053280842:web:0f1ab2be7b8ba2260dbab3"},du=!a_.apiKey;let _c=null,c_=null,l_=null;du||(_c=em(a_),c_=$R(_c),l_=uS(_c));const qS=c_;function fS(){try{const t=localStorage.getItem("luna_local_auth");return t?JSON.parse(t):null}catch{return null}}const ks=du?{currentUser:fS()}:l_,u_=TI({history:eI("/luna-videomaker/"),routes:[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:()=>ln(()=>import("./LoginView-WWmAnwAy.js"),__vite__mapDeps([0,1]))},{path:"/admin",component:()=>ln(()=>import("./AdminLayout-BvNuqAdx.js"),__vite__mapDeps([2,1])),meta:{requiresAuth:!0},children:[{path:"dashboard",name:"Dashboard",component:()=>ln(()=>import("./DashboardView-BbxQmkzd.js"),__vite__mapDeps([3,4,5]))},{path:"empresas",name:"Empresas",component:()=>ln(()=>import("./EmpresasView-BHyUzTtb.js"),__vite__mapDeps([6,4]))},{path:"empresas/:id",name:"EmpresaDetail",component:()=>ln(()=>import("./EmpresaDetailView-DKhtQ_MG.js"),__vite__mapDeps([7,4]))},{path:"empresas/:id/pessoas/:pessoaId",name:"PessoaDetail",component:()=>ln(()=>import("./PessoaDetailView-BUekKnV9.js"),__vite__mapDeps([8,4,9,10,5]))},{path:"videos",name:"Videos",component:()=>ln(()=>import("./VideosView-pL_oRD17.js"),__vite__mapDeps([11,5,4,10]))},{path:"config",name:"Config",component:()=>ln(()=>import("./ConfigView-DnHbsZIq.js"),__vite__mapDeps([12,4]))}]},{path:"/v/:slug",name:"PublicView",component:()=>ln(()=>import("./VerView-BG0OdFrj.js"),__vite__mapDeps([13,4,9,10,5]))}]});u_.beforeEach(async(t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth);!du&&typeof ks.authStateReady=="function"&&await ks.authStateReady();const s=ks.currentUser;if(s&&s.email&&s.email!=="lunaheloisaa82@gmail.com"){typeof ks.signOut=="function"&&await ks.signOut(),n("/login");return}r&&!s?n("/login"):t.path==="/login"&&s?n("/admin/dashboard"):n()});const pu=oE(pE);pu.use(uE());pu.use(u_);pu.mount("#app");export{FS as $,vS as A,Iv as B,ea as C,Op as D,bv as E,fn as F,lo as G,dl as H,Bt as I,op as J,dS as K,Qe as L,TS as M,VS as N,PS as O,qS as P,DS as Q,qR as R,CS as S,OS as T,kS as U,xS as V,NS as W,MS as X,LS as Y,Ge as Z,ln as _,Pp as a,pS as b,gS as c,np as d,_S as e,ky as f,mS as g,Ct as h,Ay as i,$y as j,du as k,BS as l,ks as m,US as n,Ap as o,_r as p,il as q,Kd as r,jS as s,W_ as t,wS as u,yS as v,IS as w,bp as x,AS as y,ES as z};
