import{M as _,N as d,C as b}from"./vendor-vue-TWjj8Zj0.js";/**
 * @license @lucide/vue v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=t=>t==="";/**
 * @license @lucide/vue v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(...t)=>t.filter((e,c,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===c).join(" ").trim();/**
 * @license @lucide/vue v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,c,o)=>o?o.toUpperCase():c.toLowerCase());/**
 * @license @lucide/vue v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=t=>{const e=A(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license @lucide/vue v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=Symbol("lucide-icons");function $(){return _(S,{})}/**
 * @license @lucide/vue v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=({name:t,iconNode:e,"icon-node":c,absoluteStrokeWidth:o,"absolute-stroke-width":s,strokeWidth:w,"stroke-width":m,size:a,color:y,...C},{slots:h})=>{const{size:i,color:f,strokeWidth:x=2,absoluteStrokeWidth:g=!1,class:v=""}=$(),M=b(()=>{const n=k(o)||k(s)||o===!0||s===!0||g===!0,l=w||m||x||r["stroke-width"];return n?Number(l)*24/Number(a??i??r.width):l});return d("svg",{...r,...C,width:a??i??r.width,height:a??i??r.height,stroke:y??f??r.stroke,"stroke-width":M.value,class:j("lucide",v,...t?[`lucide-${p(L(t))}-icon`,`lucide-${p(t)}`]:["lucide-icon"])},[...(e??c??[]).map(n=>d(...n)),...h.default?[h.default()]:[]])};/**
 * @license @lucide/vue v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(t,e)=>(c,{slots:o,attrs:s})=>d(N,{...s,...c,iconNode:e,name:t},o.default?{default:o.default}:void 0);/**
 * @license @lucide/vue v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],V=u("copy",W);/**
 * @license @lucide/vue v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],E=u("pencil",z);/**
 * @license @lucide/vue v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],I=u("trash-2",P);export{V as C,E as P,I as T,u as c};
