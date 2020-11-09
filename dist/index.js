"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),n=e(t),r=e(require("@emotion/styled")),o=require("styled-system"),i=require("@emotion/core"),s=require("react-use");function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];e.call(t,o[1],o[0])}},t}()}(),b="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,y="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),m="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(y):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var g=["top","right","bottom","left","width","height","size","weight"],w="undefined"!=typeof MutationObserver,_=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&c()}function s(){m(i)}function c(){var e=Date.now();if(n){if(e-o<2)return;r=!0}else n=!0,r=!1,setTimeout(s,t);o=e}return c}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){b&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),w?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){b&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;g.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),x=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},O=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||y},E=k(0,0,0,0);function j(e){return parseFloat(e)||0}function A(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+j(e["border-"+n+"-width"])}),0)}function M(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return E;var r=O(e).getComputedStyle(e),o=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=e["padding-"+o];t[o]=j(i)}return t}(r),i=o.left+o.right,s=o.top+o.bottom,c=j(r.width),a=j(r.height);if("border-box"===r.boxSizing&&(Math.round(c+i)!==t&&(c-=A(r,"left","right")+i),Math.round(a+s)!==n&&(a-=A(r,"top","bottom")+s)),!function(e){return e===O(e).document.documentElement}(e)){var u=Math.round(c+i)-t,l=Math.round(a+s)-n;1!==Math.abs(u)&&(c-=u),1!==Math.abs(l)&&(a-=l)}return k(o.left,o.top,c,a)}var S="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof O(e).SVGGraphicsElement}:function(e){return e instanceof O(e).SVGElement&&"function"==typeof e.getBBox};function T(e){return b?S(e)?function(e){var t=e.getBBox();return k(0,0,t.width,t.height)}(e):M(e):E}function k(e,t,n,r){return{x:e,y:t,width:n,height:r}}var R=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=k(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=T(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),P=function(e,t){var n,r,o,i,s,c,a,u=(r=(n=t).x,o=n.y,i=n.width,s=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(c.prototype),x(a,{x:r,y:o,width:i,height:s,top:o,right:r+i,bottom:s+o,left:r}),a);x(this,{target:e,contentRect:u})},B=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new v,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof O(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new R(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof O(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new P(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),D="undefined"!=typeof WeakMap?new WeakMap:new v,z=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=_.getInstance(),r=new B(t,n,this);D.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){z.prototype[e]=function(){var t;return(t=D.get(this))[e].apply(t,arguments)}}));var C=void 0!==y.ResizeObserver?y.ResizeObserver:z,H=function(){var e=t.useRef(null),n=h(t.useState({width:0,height:0}),2),r=n[0],o=n[1];return t.useEffect((function(){var t=new C((function(t){o(l(l({},r),{},{width:e.current.offsetWidth,height:e.current.offsetHeight}))}));return e.current&&t.observe(e.current),function(){return t.disconnect()}}),[e]),i.jsx("div",{className:"inspect",style:{position:"absolute",width:"100%",height:"100%",boxShadow:"0 0 0 1px orangered",borderRadius:2,top:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",fontSize:12,transition:".4s",zIndex:9999},ref:e},i.jsx("div",{className:"inspect-info",style:{color:"white",background:"red",padding:8,borderRadius:4}},r.width," x ",r.height))};function W(){var e=d(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return W=function(){return e},e}function L(){var e=d(["\n        ",";\n        ","; position: relative;\n        ",";\n      "]);return L=function(){return e},e}function q(){var e=d(["\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: ",";\n    overflow: hidden;\n  "]);return q=function(){return e},e}function F(){var e=d(["\n    img,\n    video,\n    audio {\n      width: 100%;\n      height: 100%;\n      object-fit: ",";\n    }\n  "]);return F=function(){return e},e}var I=n.forwardRef((function(e,t){var n=e.style,r=e.color,o=e.row,s=e.center,c=e.left,u=e.right,d=e.top,h=e.bottom,p=e.rowBetween,v=e.rowAround,b=e.rowEvenly,y=e.colBetween,m=e.colAround,g=e.colEvenly,w=e.pointer,_=e.textTransform,x=e.objectFit,O=e.fit,E=e.cover,j=e.transition,A=e.position,M=e.width,S=e.fullWidth,T=e.inspect,k=e.alignX,R=e.alignY,P=e.stretch,B=e.boxSizing,D=e.borderBox,z=e.contentBox,C=e.userSelect,W=e.pointerEvents,I=e.lineClamp,Y=f(e,["style","color","row","center","left","right","top","bottom","rowBetween","rowAround","rowEvenly","colBetween","colAround","colEvenly","pointer","textTransform","objectFit","fit","cover","transition","position","width","fullWidth","inspect","alignX","alignY","stretch","boxSizing","borderBox","contentBox","userSelect","pointerEvents","lineClamp"]),G={center:s,left:"boolean"==typeof c&&c?c:void 0,right:"boolean"==typeof u&&u?u:void 0,top:"boolean"==typeof d&&d?d:void 0,bottom:"boolean"==typeof h&&h?h:void 0,rowBetween:p,rowAround:v,rowEvenly:b,colBetween:y,colAround:m,colEvenly:g},V=o?"row":"column",N=function(e){var t=e.childrenPosition,n=e.flexDirection,r=e.alignX,o=e.alignY;e.stretch;return"row"===n?r||(t.left?"flex-start":t.right?"flex-end":t.rowBetween?"space-between":t.rowAround?"space-around":t.rowEvenly?"space-evenly":t.center?"center":"flex-start"):"column"===n?o||(t.top?"flex-start":t.bottom?"flex-end":t.colBetween?"space-between":t.colAround?"space-around":t.colEvenly?"space-evenly":t.center?"center":"flex-start"):"flex-start"}({childrenPosition:G,flexDirection:V,alignX:k,alignY:R,stretch:P}),U=function(e){var t=e.childrenPosition,n=e.flexDirection,r=e.alignX,o=e.alignY,i=e.stretch;return"column"===n?i?"stretch":r||(t.left?"flex-start":t.right?"flex-end":t.rowBetween?"space-between":t.rowAround?"space-around":t.rowEvenly?"space-evenly":t.center?"center":"flex-start"):"row"===n?i?"stretch":o||(t.top?"flex-start":t.bottom?"flex-end":t.colBetween?"space-between":t.colAround?"space-around":t.colEvenly?"space-evenly":t.center?"center":"flex-start"):"flex-start"}({childrenPosition:G,flexDirection:V,alignX:k,alignY:R,stretch:P}),$=w?"pointer":void 0,J="boolean"==typeof j?".4s":"string"==typeof j?j:void 0,K=i.css(F(),E?"cover":O||x),Q=i.css(q(),I);return i.jsx(X,a({color:r,flexDirection:V,alignItems:U,justifyContent:N,style:l({cursor:$,textTransform:_,transition:J,position:A,left:"boolean"!=typeof c?c:void 0,right:"boolean"!=typeof u?u:void 0,top:"boolean"!=typeof d?d:void 0,bottom:"boolean"!=typeof h?h:void 0,width:S?"100%":M,boxSizing:(D?"border-box":z&&"content-box")||B,userSelect:C,pointerEvents:W},n),css:i.css(L(),E||O||x?K:null,E||O||x&&Y.borderRadius?"overflow: hidden":null,I&&Q),ref:t},Y),T&&i.jsx(H,null),Y.children)}));I.defaultProps={display:"flex"};var X=r.div(W(),o.color,o.layout,o.space,o.flex,o.flexbox,o.colorStyle,o.background,o.shadow,o.border,o.typography),Y=function(e){var t,r,o=e.src,i=void 0===o?"random":o,s=e.alt,c=e.objectFit,u=e.fit,l=e.cover,d=e.height,h=e.width,p=e.minWidth,v=e.minHeight,b=e.maxWidth,y=e.maxHeight,m=e.display,g=e.borderRadius,w=f(e,["src","alt","objectFit","fit","cover","height","width","minWidth","minHeight","maxWidth","maxHeight","display","borderRadius"]);return n.createElement("img",a({src:"random"===i?"https://picsum.photos/seed/".concat((t=0,r=3e3,Math.round(Math.random()*(r-t)+t)),"/300"):i,alt:s,style:{objectFit:l?"cover":u||c?u||c:void 0,width:h,height:d,minWidth:p,minHeight:v,maxWidth:b,maxHeight:y,display:m,borderRadius:g}},w))},G=function(e){var t=e.src,r=void 0===t?"random":t,o=e.children,i=(e.random,f(e,["src","children","random"]));return n.createElement(I,a({center:!!o},i),o||n.createElement(Y,{src:r}))};G.defaultProps={borderRadius:"50%",cover:!0,size:34,backgroundColor:"whitesmoke"};exports.Avatar=G,exports.Box=I,exports.Copy=function(e){var r=e.children,o=e.type,i=void 0===o?"innerText":o,c=e.onCopyTriggered,u=f(e,["children","type","onCopyTriggered"]),l=h(s.useCopyToClipboard(),2),d=l[0],p=l[1],v=h(t.useState(""),2),b=v[0],y=v[1],m=t.useRef(null);t.useEffect((function(){var e=m.current;e&&y("innerText"===i?null==e?void 0:e.innerText:"innerHTML"===i?null==e?void 0:e.innerHTML:"outerHTML"===i?null==e?void 0:e.outerHTML:"")}),[b]);return t.useEffect((function(){d.value&&c&&c(b)}),[d]),n.createElement("div",a({ref:m,onClick:function(){b&&p(b)}},u),r)},exports.Image=Y,exports.Meta=function(e){var r=e.title,o=e.favicon;return t.useLayoutEffect((function(){document.title=r,document.querySelector("link[rel=icon]").setAttribute("href",o)}),[]),n.createElement(n.Fragment,null)},exports.SkeletonText=function(e){var t=e.borderRadius,r=void 0===t?2:t,o=e.divides,i=void 0===o?[1,3]:o,s=e.gap,c=void 0===s?10:s,a=e.color,u=void 0===a?"dark":a,l="dark"===u?"rgba(0,0,0,.1)":"light"===u?"rgba(255,255,255,.2)":u,f=function(e,t){var n=i.reduce((function(e,t){return e+t}),0),r=(i.length-1)*t/i.length;return"calc(".concat(e/n*100+"%"," - ").concat(r,"px)")};return n.createElement("div",{style:{display:"block"}},i.map((function(e,t){return n.createElement("span",{key:t,style:{display:"inline-flex",lineHeight:1,background:l,width:f(e,c),marginLeft:t&&c,borderRadius:r}},"‌")})))};
//# sourceMappingURL=index.js.map
