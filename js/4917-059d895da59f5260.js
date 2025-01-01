"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4917],{39763:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(2265),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),u=(e,t)=>{let n=(0,r.forwardRef)((n,u)=>{let{color:a="currentColor",size:l=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:d="",children:f,...v}=n;return(0,r.createElement)("svg",{ref:u,...o,width:l,height:l,stroke:a,strokeWidth:c?24*Number(s)/Number(l):s,className:["lucide","lucide-".concat(i(e)),d].join(" "),...v},[...t.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(f)?f:[f]])});return n.displayName="".concat(e),n}},32489:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(39763).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},60579:function(e,t,n){let r;n.d(t,{x8:function(){return eG},VY:function(){return eV},dk:function(){return eq},aV:function(){return eY},h_:function(){return eX},fC:function(){return eK},Dx:function(){return eH},xz:function(){return ez}});var o,i=n(2265),u=n.t(i,2);function a(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}function l(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function s(...e){return i.useCallback(l(...e),e)}var c=n(57437),d=globalThis?.document?i.useLayoutEffect:()=>{},f=u["useId".toString()]||(()=>void 0),v=0;function p(e){let[t,n]=i.useState(f());return d(()=>{e||n(e=>e??String(v++))},[e]),e||(t?`radix-${t}`:"")}function m(e){let t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...e)=>t.current?.(...e),[])}var h=n(54887),g=i.forwardRef((e,t)=>{let{children:n,...r}=e,o=i.Children.toArray(n),u=o.find(b);if(u){let e=u.props.children,n=o.map(t=>t!==u?t:i.Children.count(e)>1?i.Children.only(null):i.isValidElement(e)?e.props.children:null);return(0,c.jsx)(E,{...r,ref:t,children:i.isValidElement(e)?i.cloneElement(e,void 0,n):null})}return(0,c.jsx)(E,{...r,ref:t,children:n})});g.displayName="Slot";var E=i.forwardRef((e,t)=>{let{children:n,...r}=e;if(i.isValidElement(n)){let e,o;let u=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return i.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?l(t,u):u})}return i.Children.count(n)>1?i.Children.only(null):null});E.displayName="SlotClone";var y=({children:e})=>(0,c.jsx)(c.Fragment,{children:e});function b(e){return i.isValidElement(e)&&e.type===y}var w=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=i.forwardRef((e,n)=>{let{asChild:r,...o}=e,i=r?g:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,c.jsx)(i,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),C="dismissableLayer.update",N=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),R=i.forwardRef((e,t)=>{var n,r;let{disableOutsidePointerEvents:u=!1,onEscapeKeyDown:l,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:v,onDismiss:p,...h}=e,g=i.useContext(N),[E,y]=i.useState(null),b=null!==(r=null==E?void 0:E.ownerDocument)&&void 0!==r?r:null===(n=globalThis)||void 0===n?void 0:n.document,[,R]=i.useState({}),L=s(t,e=>y(e)),P=Array.from(g.layers),[O]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),T=P.indexOf(O),S=E?P.indexOf(E):-1,k=g.layersWithOutsidePointerEventsDisabled.size>0,j=S>=T,I=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=m(e),o=i.useRef(!1),u=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){D("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",u.current),u.current=t,n.addEventListener("click",u.current,{once:!0})):t()}else n.removeEventListener("click",u.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",u.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...g.branches].some(e=>e.contains(t));!j||n||(null==d||d(e),null==v||v(e),e.defaultPrevented||null==p||p())},b),M=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=m(e),o=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!o.current&&D("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...g.branches].some(e=>e.contains(t))||(null==f||f(e),null==v||v(e),e.defaultPrevented||null==p||p())},b);return!function(e,t=globalThis?.document){let n=m(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{S!==g.layers.size-1||(null==l||l(e),!e.defaultPrevented&&p&&(e.preventDefault(),p()))},b),i.useEffect(()=>{if(E)return u&&(0===g.layersWithOutsidePointerEventsDisabled.size&&(o=b.body.style.pointerEvents,b.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(E)),g.layers.add(E),x(),()=>{u&&1===g.layersWithOutsidePointerEventsDisabled.size&&(b.body.style.pointerEvents=o)}},[E,b,u,g]),i.useEffect(()=>()=>{E&&(g.layers.delete(E),g.layersWithOutsidePointerEventsDisabled.delete(E),x())},[E,g]),i.useEffect(()=>{let e=()=>R({});return document.addEventListener(C,e),()=>document.removeEventListener(C,e)},[]),(0,c.jsx)(w.div,{...h,ref:L,style:{pointerEvents:k?j?"auto":"none":void 0,...e.style},onFocusCapture:a(e.onFocusCapture,M.onFocusCapture),onBlurCapture:a(e.onBlurCapture,M.onBlurCapture),onPointerDownCapture:a(e.onPointerDownCapture,I.onPointerDownCapture)})});function x(){let e=new CustomEvent(C);document.dispatchEvent(e)}function D(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});(t&&i.addEventListener(e,t,{once:!0}),o)?i&&h.flushSync(()=>i.dispatchEvent(u)):i.dispatchEvent(u)}R.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(N),r=i.useRef(null),o=s(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,c.jsx)(w.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var L="focusScope.autoFocusOnMount",P="focusScope.autoFocusOnUnmount",O={bubbles:!1,cancelable:!0},T=i.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:u,...a}=e,[l,d]=i.useState(null),f=m(o),v=m(u),p=i.useRef(null),h=s(t,e=>d(e)),g=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let e=function(e){if(g.paused||!l)return;let t=e.target;l.contains(t)?p.current=t:j(p.current,{select:!0})},t=function(e){if(g.paused||!l)return;let t=e.relatedTarget;null===t||l.contains(t)||j(p.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&j(l)});return l&&n.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,l,g.paused]),i.useEffect(()=>{if(l){I.add(g);let e=document.activeElement;if(!l.contains(e)){let t=new CustomEvent(L,O);l.addEventListener(L,f),l.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(j(r,{select:t}),document.activeElement!==n)return}(S(l).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&j(l))}return()=>{l.removeEventListener(L,f),setTimeout(()=>{let t=new CustomEvent(P,O);l.addEventListener(P,v),l.dispatchEvent(t),t.defaultPrevented||j(null!=e?e:document.body,{select:!0}),l.removeEventListener(P,v),I.remove(g)},0)}}},[l,f,v,g]);let E=i.useCallback(e=>{if(!n&&!r||g.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,i]=function(e){let t=S(e);return[k(t,e),k(t.reverse(),e)]}(t);r&&i?e.shiftKey||o!==i?e.shiftKey&&o===r&&(e.preventDefault(),n&&j(i,{select:!0})):(e.preventDefault(),n&&j(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,g.paused]);return(0,c.jsx)(w.div,{tabIndex:-1,...a,ref:h,onKeyDown:E})});function S(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function k(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function j(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}T.displayName="FocusScope";var I=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=M(r,e)).unshift(e)},remove(e){var t;null===(t=(r=M(r,e))[0])||void 0===t||t.resume()}});function M(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var A=i.forwardRef((e,t)=>{var n,r;let{container:o,...u}=e,[a,l]=i.useState(!1);d(()=>l(!0),[]);let s=o||a&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return s?h.createPortal((0,c.jsx)(w.div,{...u,ref:t}),s):null});A.displayName="Portal";var _=e=>{var t,n;let r,o;let{present:u,children:a}=e,l=function(e){var t,n;let[r,o]=i.useState(),u=i.useRef({}),a=i.useRef(e),l=i.useRef("none"),[s,c]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},i.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return i.useEffect(()=>{let e=F(u.current);l.current="mounted"===s?e:"none"},[s]),d(()=>{let t=u.current,n=a.current;if(n!==e){let r=l.current,o=F(t);e?c("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?c("UNMOUNT"):n&&r!==o?c("ANIMATION_OUT"):c("UNMOUNT"),a.current=e}},[e,c]),d(()=>{if(r){let e=e=>{let t=F(u.current).includes(e.animationName);e.target===r&&t&&h.flushSync(()=>c("ANIMATION_END"))},t=e=>{e.target===r&&(l.current=F(u.current))};return r.addEventListener("animationstart",t),r.addEventListener("animationcancel",e),r.addEventListener("animationend",e),()=>{r.removeEventListener("animationstart",t),r.removeEventListener("animationcancel",e),r.removeEventListener("animationend",e)}}c("ANIMATION_END")},[r,c]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:i.useCallback(e=>{e&&(u.current=getComputedStyle(e)),o(e)},[])}}(u),c="function"==typeof a?a({present:l.isPresent}):i.Children.only(a),f=s(l.ref,(r=null===(t=Object.getOwnPropertyDescriptor(c.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in r&&r.isReactWarning?c.ref:(r=null===(n=Object.getOwnPropertyDescriptor(c,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning?c.props.ref:c.props.ref||c.ref);return"function"==typeof a||l.isPresent?i.cloneElement(c,{ref:f}):null};function F(e){return(null==e?void 0:e.animationName)||"none"}_.displayName="Presence";var W=0;function B(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var U=n(5853),$=n(85770),Z=n(17325),K=(0,n(31412)._)(),z=function(){},X=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:z,onWheelCapture:z,onTouchMoveCapture:z}),o=r[0],u=r[1],a=e.forwardProps,l=e.children,s=e.className,c=e.removeScrollBar,d=e.enabled,f=e.shards,v=e.sideCar,p=e.noIsolation,m=e.inert,h=e.allowPinchZoom,g=e.as,E=e.gapMode,y=(0,U._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),b=(0,Z.q)([n,t]),w=(0,U.pi)((0,U.pi)({},y),o);return i.createElement(i.Fragment,null,d&&i.createElement(v,{sideCar:K,removeScrollBar:c,shards:f,noIsolation:p,inert:m,setCallbacks:u,allowPinchZoom:!!h,lockRef:n,gapMode:E}),a?i.cloneElement(i.Children.only(l),(0,U.pi)((0,U.pi)({},w),{ref:b})):i.createElement(void 0===g?"div":g,(0,U.pi)({},w,{className:s,ref:b}),l))});X.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},X.classNames={fullWidth:$.zi,zeroRight:$.pF};var Y=n(49085),V=n(5517),H=n(18704),q=!1;if("undefined"!=typeof window)try{var G=Object.defineProperty({},"passive",{get:function(){return q=!0,!0}});window.addEventListener("test",G,G),window.removeEventListener("test",G,G)}catch(e){q=!1}var J=!!q&&{passive:!1},Q=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},ee=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),et(e,r)){var o=en(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},et=function(e,t){return"v"===e?Q(t,"overflowY"):Q(t,"overflowX")},en=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},er=function(e,t,n,r,o){var i,u=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),a=u*r,l=n.target,s=t.contains(l),c=!1,d=a>0,f=0,v=0;do{var p=en(e,l),m=p[0],h=p[1]-p[2]-u*m;(m||h)&&et(e,l)&&(f+=h,v+=m),l instanceof ShadowRoot?l=l.host:l=l.parentNode}while(!s&&l!==document.body||s&&(t.contains(l)||t===l));return d&&(o&&1>Math.abs(f)||!o&&a>f)?c=!0:!d&&(o&&1>Math.abs(v)||!o&&-a>v)&&(c=!0),c},eo=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ei=function(e){return[e.deltaX,e.deltaY]},eu=function(e){return e&&"current"in e?e.current:e},ea=0,el=[],es=(0,Y.L)(K,function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(ea++)[0],u=i.useState(H.Ws)[0],a=i.useRef(e);i.useEffect(function(){a.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,U.ev)([e.lockRef.current],(e.shards||[]).map(eu),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom;var o,i=eo(e),u=n.current,l="deltaX"in e?e.deltaX:u[0]-i[0],s="deltaY"in e?e.deltaY:u[1]-i[1],c=e.target,d=Math.abs(l)>Math.abs(s)?"h":"v";if("touches"in e&&"h"===d&&"range"===c.type)return!1;var f=ee(d,c);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ee(d,c)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||s)&&(r.current=o),!o)return!0;var v=r.current||o;return er(v,t,e,"h"===v?l:s,!0)},[]),s=i.useCallback(function(e){if(el.length&&el[el.length-1]===u){var n="deltaY"in e?ei(e):eo(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(a.current.shards||[]).map(eu).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=i.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),d=i.useCallback(function(e){n.current=eo(e),r.current=void 0},[]),f=i.useCallback(function(t){c(t.type,ei(t),t.target,l(t,e.lockRef.current))},[]),v=i.useCallback(function(t){c(t.type,eo(t),t.target,l(t,e.lockRef.current))},[]);i.useEffect(function(){return el.push(u),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",s,J),document.addEventListener("touchmove",s,J),document.addEventListener("touchstart",d,J),function(){el=el.filter(function(e){return e!==u}),document.removeEventListener("wheel",s,J),document.removeEventListener("touchmove",s,J),document.removeEventListener("touchstart",d,J)}},[]);var p=e.removeScrollBar,m=e.inert;return i.createElement(i.Fragment,null,m?i.createElement(u,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?i.createElement(V.jp,{gapMode:e.gapMode}):null)}),ec=i.forwardRef(function(e,t){return i.createElement(X,(0,U.pi)({},e,{ref:t,sideCar:es}))});ec.classNames=X.classNames;var ed=n(5478),ef="Dialog",[ev,ep]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>i.createContext(e));return function(n){let r=n?.[e]||t;return i.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=i.createContext(r),u=n.length;function a(t){let{scope:n,children:r,...a}=t,l=n?.[e][u]||o,s=i.useMemo(()=>a,Object.values(a));return(0,c.jsx)(l.Provider,{value:s,children:r})}return n=[...n,r],a.displayName=t+"Provider",[a,function(n,a){let l=a?.[e][u]||o,s=i.useContext(l);if(s)return s;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(ef),[em,eh]=ev(ef),eg=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:u,modal:a=!0}=e,l=i.useRef(null),s=i.useRef(null),[d=!1,f]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=i.useState(e),[r]=n,o=i.useRef(r),u=m(t);return i.useEffect(()=>{o.current!==r&&(u(r),o.current=r)},[r,o,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,a=u?e:r,l=m(n);return[a,i.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else o(t)},[u,e,o,l])]}({prop:r,defaultProp:o,onChange:u});return(0,c.jsx)(em,{scope:t,triggerRef:l,contentRef:s,contentId:p(),titleId:p(),descriptionId:p(),open:d,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(e=>!e),[f]),modal:a,children:n})};eg.displayName=ef;var eE="DialogTrigger",ey=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eh(eE,n),i=s(t,o.triggerRef);return(0,c.jsx)(w.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":eF(o.open),...r,ref:i,onClick:a(e.onClick,o.onOpenToggle)})});ey.displayName=eE;var eb="DialogPortal",[ew,eC]=ev(eb,{forceMount:void 0}),eN=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,u=eh(eb,t);return(0,c.jsx)(ew,{scope:t,forceMount:n,children:i.Children.map(r,e=>(0,c.jsx)(_,{present:n||u.open,children:(0,c.jsx)(A,{asChild:!0,container:o,children:e})}))})};eN.displayName=eb;var eR="DialogOverlay",ex=i.forwardRef((e,t)=>{let n=eC(eR,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=eh(eR,e.__scopeDialog);return i.modal?(0,c.jsx)(_,{present:r||i.open,children:(0,c.jsx)(eD,{...o,ref:t})}):null});ex.displayName=eR;var eD=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eh(eR,n);return(0,c.jsx)(ec,{as:g,allowPinchZoom:!0,shards:[o.contentRef],children:(0,c.jsx)(w.div,{"data-state":eF(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eL="DialogContent",eP=i.forwardRef((e,t)=>{let n=eC(eL,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=eh(eL,e.__scopeDialog);return(0,c.jsx)(_,{present:r||i.open,children:i.modal?(0,c.jsx)(eO,{...o,ref:t}):(0,c.jsx)(eT,{...o,ref:t})})});eP.displayName=eL;var eO=i.forwardRef((e,t)=>{let n=eh(eL,e.__scopeDialog),r=i.useRef(null),o=s(t,n.contentRef,r);return i.useEffect(()=>{let e=r.current;if(e)return(0,ed.Ry)(e)},[]),(0,c.jsx)(eS,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:a(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:a(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:a(e.onFocusOutside,e=>e.preventDefault())})}),eT=i.forwardRef((e,t)=>{let n=eh(eL,e.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return(0,c.jsx)(eS,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var i,u;null===(i=e.onCloseAutoFocus)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current||null===(u=n.triggerRef.current)||void 0===u||u.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var i,u;null===(i=e.onInteractOutside)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let a=t.target;(null===(u=n.triggerRef.current)||void 0===u?void 0:u.contains(a))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),eS=i.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:u,...a}=e,l=eh(eL,n),d=i.useRef(null),f=s(t,d);return i.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:B()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:B()),W++,()=>{1===W&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),W--}},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(T,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:u,children:(0,c.jsx)(R,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":eF(l.open),...a,ref:f,onDismiss:()=>l.onOpenChange(!1)})}),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e$,{titleId:l.titleId}),(0,c.jsx)(eZ,{contentRef:d,descriptionId:l.descriptionId})]})]})}),ek="DialogTitle",ej=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eh(ek,n);return(0,c.jsx)(w.h2,{id:o.titleId,...r,ref:t})});ej.displayName=ek;var eI="DialogDescription",eM=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eh(eI,n);return(0,c.jsx)(w.p,{id:o.descriptionId,...r,ref:t})});eM.displayName=eI;var eA="DialogClose",e_=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eh(eA,n);return(0,c.jsx)(w.button,{type:"button",...r,ref:t,onClick:a(e.onClick,()=>o.onOpenChange(!1))})});function eF(e){return e?"open":"closed"}e_.displayName=eA;var eW="DialogTitleWarning",[eB,eU]=function(e,t){let n=i.createContext(t);function r(e){let{children:t,...r}=e,o=i.useMemo(()=>r,Object.values(r));return(0,c.jsx)(n.Provider,{value:o,children:t})}return r.displayName=e+"Provider",[r,function(r){let o=i.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}(eW,{contentName:eL,titleName:ek,docsSlug:"dialog"}),e$=e=>{let{titleId:t}=e,n=eU(eW),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return i.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},eZ=e=>{let{contentRef:t,descriptionId:n}=e,r=eU("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return i.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(o)},[o,t,n]),null},eK=eg,ez=ey,eX=eN,eY=ex,eV=eP,eH=ej,eq=eM,eG=e_}}]);