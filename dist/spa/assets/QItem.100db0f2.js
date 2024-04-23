import{c as x,a as d,h as k,b as P,g as H,o as F,U as A,w as R,V as D,x as N,y as $,j as w,W as m,v as X,X as O,Y as Z,Z as G,_ as J,r as I,$ as ee,d as te}from"./index.ada0ae87.js";import{u as Y,a as j}from"./use-dark.5e5d92ff.js";import{g as le,a as oe,h as ie}from"./scroll.5280b26e.js";var de=x({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const o=d(()=>parseInt(e.lines,10)),l=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),n=d(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>k("div",{style:n.value,class:l.value},P(t.default))}}),fe=x({name:"QList",props:{...Y,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const o=H(),l=j(e,o.proxy.$q),n=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>k(e.tag,{class:n.value},P(t.default))}});function ve(e,t,o){let l;function n(){l!==void 0&&(A.remove(l),l=void 0)}return F(()=>{e.value===!0&&n()}),{removeFromHistory:n,addToHistory(){l={condition:()=>o.value===!0,handler:t},A.add(l)}}}const me={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},be=["beforeShow","show","beforeHide","hide"];function pe({showing:e,canShow:t,hideOnRouteChange:o,handleShow:l,handleHide:n,processOnMount:f}){const r=H(),{props:s,emit:c,proxy:L}=r;let u;function p(i){e.value===!0?h(i):y(i)}function y(i){if(s.disable===!0||i!==void 0&&i.qAnchorHandled===!0||t!==void 0&&t(i)!==!0)return;const a=s["onUpdate:modelValue"]!==void 0;a===!0&&(c("update:modelValue",!0),u=i,$(()=>{u===i&&(u=void 0)})),(s.modelValue===null||a===!1)&&v(i)}function v(i){e.value!==!0&&(e.value=!0,c("beforeShow",i),l!==void 0?l(i):c("show",i))}function h(i){if(s.disable===!0)return;const a=s["onUpdate:modelValue"]!==void 0;a===!0&&(c("update:modelValue",!1),u=i,$(()=>{u===i&&(u=void 0)})),(s.modelValue===null||a===!1)&&S(i)}function S(i){e.value!==!1&&(e.value=!1,c("beforeHide",i),n!==void 0?n(i):c("hide",i))}function T(i){s.disable===!0&&i===!0?s["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):i===!0!==e.value&&(i===!0?v:S)(u)}R(()=>s.modelValue,T),o!==void 0&&D(r)===!0&&R(()=>L.$route.fullPath,()=>{o.value===!0&&e.value===!0&&h()}),f===!0&&N(()=>{T(s.modelValue)});const _={show:y,hide:h,toggle:p};return Object.assign(L,_),_}let g=0,B,V,q,C=!1,Q,U,W,b=null;function ne(e){ae(e)&&X(e)}function ae(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=O(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),n=o||l?e.deltaY:e.deltaX;for(let f=0;f<t.length;f++){const r=t[f];if(ie(r,l))return l?n<0&&r.scrollTop===0?!0:n>0&&r.scrollTop+r.clientHeight===r.scrollHeight:n<0&&r.scrollLeft===0?!0:n>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function z(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function E(e){C!==!0&&(C=!0,requestAnimationFrame(()=>{C=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(q===void 0||t!==window.innerHeight)&&(q=o-t,document.scrollingElement.scrollTop=l),l>q&&(document.scrollingElement.scrollTop-=Math.ceil((l-q)/8))}))}function K(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:n}=window.getComputedStyle(t);B=le(window),V=oe(window),Q=t.style.left,U=t.style.top,W=window.location.href,t.style.left=`-${B}px`,t.style.top=`-${V}px`,n!=="hidden"&&(n==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,w.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",E,m.passiveCapture),window.visualViewport.addEventListener("scroll",E,m.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",z,m.passiveCapture))}w.is.desktop===!0&&w.is.mac===!0&&window[`${e}EventListener`]("wheel",ne,m.notPassive),e==="remove"&&(w.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",E,m.passiveCapture),window.visualViewport.removeEventListener("scroll",E,m.passiveCapture)):window.removeEventListener("scroll",z,m.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Q,t.style.top=U,window.location.href===W&&window.scrollTo(B,V),q=void 0)}function re(e){let t="add";if(e===!0){if(g++,b!==null){clearTimeout(b),b=null;return}if(g>1)return}else{if(g===0||(g--,g>0))return;if(t="remove",w.is.ios===!0&&w.is.nativeMobile===!0){b!==null&&clearTimeout(b),b=setTimeout(()=>{K(t),b=null},100);return}}K(t)}function we(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,re(t))}}}function ye(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Z.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function he(e,t,o){return o<=t?t:Math.min(o,Math.max(t,e))}function ge(e,t,o){if(o<=t)return t;const l=o-t+1;let n=t+(e-t)%l;return n<t&&(n=l+n),n===0?0:n}var qe=x({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:o.value},P(t.default))}}),ke=x({name:"QItem",props:{...Y,...G,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=H(),n=j(e,l),{hasLink:f,linkAttrs:r,linkClass:s,linkTag:c,navigateOnClick:L}=J(),u=I(null),p=I(null),y=d(()=>e.clickable===!0||f.value===!0||e.tag==="label"),v=d(()=>e.disable!==!0&&y.value===!0),h=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(f.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(v.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),S=d(()=>{if(e.insetLevel===void 0)return null;const a=l.lang.rtl===!0?"Right":"Left";return{["padding"+a]:16+e.insetLevel*56+"px"}});function T(a){v.value===!0&&(p.value!==null&&(a.qKeyEvent!==!0&&document.activeElement===u.value?p.value.focus():document.activeElement===p.value&&u.value.focus()),L(a))}function _(a){if(v.value===!0&&ee(a,[13,32])===!0){X(a),a.qKeyEvent=!0;const M=new MouseEvent("click",a);M.qKeyEvent=!0,u.value.dispatchEvent(M)}o("keyup",a)}function i(){const a=te(t.default,[]);return v.value===!0&&a.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:p})),a}return()=>{const a={ref:u,class:h.value,style:S.value,role:"listitem",onClick:T,onKeyup:_};return v.value===!0?(a.tabindex=e.tabindex||"0",Object.assign(a,r.value)):y.value===!0&&(a["aria-disabled"]="true"),k(c.value,a,i())}}});export{qe as Q,be as a,pe as b,ye as c,ve as d,we as e,he as f,de as g,ke as h,fe as i,ge as n,me as u};
