import t,{useRef as e,useState as n,useEffect as r,useLayoutEffect as o}from"react";import i from"@emotion/styled";import{color as c,layout as s,space as a,flex as u,flexbox as l,colorStyle as f,background as d,shadow as h,border as p,typography as v}from"styled-system";import{jsx as b,css as m}from"@emotion/core";import{useCopyToClipboard as y}from"react-use";function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function E(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function j(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var c,s=t[Symbol.iterator]();!(r=(c=s.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var M=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];t.call(e,o[1],o[0])}},e}()}(),k="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,S="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),T="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(S):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var R=["top","right","bottom","left","width","height","size","weight"],P="undefined"!=typeof MutationObserver,B=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,o=0;function i(){n&&(n=!1,t()),r&&s()}function c(){T(i)}function s(){var t=Date.now();if(n){if(t-o<2)return;r=!0}else n=!0,r=!1,setTimeout(c,e);o=t}return s}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){k&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),P?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){k&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;R.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),D=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},z=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||S},H=q(0,0,0,0);function W(t){return parseFloat(t)||0}function C(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+W(t["border-"+n+"-width"])}),0)}function L(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return H;var r=z(t).getComputedStyle(t),o=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=t["padding-"+o];e[o]=W(i)}return e}(r),i=o.left+o.right,c=o.top+o.bottom,s=W(r.width),a=W(r.height);if("border-box"===r.boxSizing&&(Math.round(s+i)!==e&&(s-=C(r,"left","right")+i),Math.round(a+c)!==n&&(a-=C(r,"top","bottom")+c)),!function(t){return t===z(t).document.documentElement}(t)){var u=Math.round(s+i)-e,l=Math.round(a+c)-n;1!==Math.abs(u)&&(s-=u),1!==Math.abs(l)&&(a-=l)}return q(o.left,o.top,s,a)}var F="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof z(t).SVGGraphicsElement}:function(t){return t instanceof z(t).SVGElement&&"function"==typeof t.getBBox};function I(t){return k?F(t)?function(t){var e=t.getBBox();return q(0,0,e.width,e.height)}(t):L(t):H}function q(t,e,n,r){return{x:t,y:e,width:n,height:r}}var X=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=q(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=I(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),Y=function(t,e){var n,r,o,i,c,s,a,u=(r=(n=e).x,o=n.y,i=n.width,c=n.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(s.prototype),D(a,{x:r,y:o,width:i,height:c,top:o,right:r+i,bottom:c+o,left:r}),a);D(this,{target:t,contentRect:u})},G=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new M,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof z(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new X(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof z(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new Y(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),V="undefined"!=typeof WeakMap?new WeakMap:new M,N=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=B.getInstance(),r=new G(e,n,this);V.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){N.prototype[t]=function(){var e;return(e=V.get(this))[t].apply(e,arguments)}}));var U=void 0!==S.ResizeObserver?S.ResizeObserver:N,$=function(){var t=e(null),o=j(n({width:0,height:0}),2),i=o[0],c=o[1];return r((function(){var e=new U((function(e){c(O(O({},i),{},{width:t.current.offsetWidth,height:t.current.offsetHeight}))}));return t.current&&e.observe(t.current),function(){return e.disconnect()}}),[t]),b("div",{className:"inspect",style:{position:"absolute",width:"100%",height:"100%",boxShadow:"0 0 0 1px orangered",borderRadius:2,top:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",fontSize:12,transition:".4s",zIndex:9999},ref:t},b("div",{className:"inspect-info",style:{color:"white",background:"red",padding:8,borderRadius:4}},i.width," x ",i.height))};function J(){var t=E(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return J=function(){return t},t}function K(){var t=E(["\n        ",";\n        ","; position: relative;\n        ",";\n      "]);return K=function(){return t},t}function Q(){var t=E(["\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: ",";\n    overflow: hidden;\n  "]);return Q=function(){return t},t}function Z(){var t=E(["\n    img,\n    video,\n    audio {\n      width: 100%;\n      height: 100%;\n      object-fit: ",";\n    }\n  "]);return Z=function(){return t},t}var tt=t.forwardRef((function(t,e){var n=t.style,r=t.color,o=t.row,i=t.center,c=t.left,s=t.right,a=t.top,u=t.bottom,l=t.rowBetween,f=t.rowAround,d=t.rowEvenly,h=t.colBetween,p=t.colAround,v=t.colEvenly,y=t.pointer,g=t.textTransform,_=t.objectFit,E=t.fit,j=t.cover,A=t.transition,M=t.position,k=t.width,S=t.fullWidth,T=t.inspect,R=t.alignX,P=t.alignY,B=t.stretch,D=t.boxSizing,z=t.borderBox,H=t.contentBox,W=t.userSelect,C=t.pointerEvents,L=t.lineClamp,F=x(t,["style","color","row","center","left","right","top","bottom","rowBetween","rowAround","rowEvenly","colBetween","colAround","colEvenly","pointer","textTransform","objectFit","fit","cover","transition","position","width","fullWidth","inspect","alignX","alignY","stretch","boxSizing","borderBox","contentBox","userSelect","pointerEvents","lineClamp"]),I={center:i,left:"boolean"==typeof c&&c?c:void 0,right:"boolean"==typeof s&&s?s:void 0,top:"boolean"==typeof a&&a?a:void 0,bottom:"boolean"==typeof u&&u?u:void 0,rowBetween:l,rowAround:f,rowEvenly:d,colBetween:h,colAround:p,colEvenly:v},q=o?"row":"column",X=function(t){var e=t.childrenPosition,n=t.flexDirection,r=t.alignX,o=t.alignY;t.stretch;return"row"===n?r||(e.left?"flex-start":e.right?"flex-end":e.rowBetween?"space-between":e.rowAround?"space-around":e.rowEvenly?"space-evenly":e.center?"center":"flex-start"):"column"===n?o||(e.top?"flex-start":e.bottom?"flex-end":e.colBetween?"space-between":e.colAround?"space-around":e.colEvenly?"space-evenly":e.center?"center":"flex-start"):"flex-start"}({childrenPosition:I,flexDirection:q,alignX:R,alignY:P,stretch:B}),Y=function(t){var e=t.childrenPosition,n=t.flexDirection,r=t.alignX,o=t.alignY,i=t.stretch;return"column"===n?i?"stretch":r||(e.left?"flex-start":e.right?"flex-end":e.rowBetween?"space-between":e.rowAround?"space-around":e.rowEvenly?"space-evenly":e.center?"center":"flex-start"):"row"===n?i?"stretch":o||(e.top?"flex-start":e.bottom?"flex-end":e.colBetween?"space-between":e.colAround?"space-around":e.colEvenly?"space-evenly":e.center?"center":"flex-start"):"flex-start"}({childrenPosition:I,flexDirection:q,alignX:R,alignY:P,stretch:B}),G=y?"pointer":void 0,V="boolean"==typeof A?".4s":"string"==typeof A?A:void 0,N=m(Z(),j?"cover":E||_),U=m(Q(),L);return b(et,w({color:r,flexDirection:q,alignItems:Y,justifyContent:X,style:O({cursor:G,textTransform:g,transition:V,position:M,left:"boolean"!=typeof c?c:void 0,right:"boolean"!=typeof s?s:void 0,top:"boolean"!=typeof a?a:void 0,bottom:"boolean"!=typeof u?u:void 0,width:S?"100%":k,boxSizing:(z?"border-box":H&&"content-box")||D,userSelect:W,pointerEvents:C},n),css:m(K(),j||E||_?N:null,j||E||_&&F.borderRadius?"overflow: hidden":null,L&&U),ref:e},F),T&&b($,null),F.children)}));tt.defaultProps={display:"flex"};var et=i.div(J(),c,s,a,u,l,f,d,h,p,v),nt=function(e){var n,r,o=e.src,i=void 0===o?"random":o,c=e.alt,s=e.objectFit,a=e.fit,u=e.cover,l=e.height,f=e.width,d=e.minWidth,h=e.minHeight,p=e.maxWidth,v=e.maxHeight,b=e.display,m=e.borderRadius,y=x(e,["src","alt","objectFit","fit","cover","height","width","minWidth","minHeight","maxWidth","maxHeight","display","borderRadius"]);return t.createElement("img",w({src:"random"===i?"https://picsum.photos/seed/".concat((n=0,r=3e3,Math.round(Math.random()*(r-n)+n)),"/300"):i,alt:c,style:{objectFit:u?"cover":a||s?a||s:void 0,width:f,height:l,minWidth:d,minHeight:h,maxWidth:p,maxHeight:v,display:b,borderRadius:m}},y))},rt=function(e){var n=e.src,r=void 0===n?"random":n,o=e.children,i=(e.random,x(e,["src","children","random"]));return t.createElement(tt,w({center:!!o},i),o||t.createElement(nt,{src:r}))};rt.defaultProps={borderRadius:"50%",cover:!0,size:34,backgroundColor:"whitesmoke"};var ot=function(e){var n=e.title,r=e.favicon;return o((function(){document.title=n,document.querySelector("link[rel=icon]").setAttribute("href",r)}),[]),t.createElement(t.Fragment,null)},it=function(o){var i=o.children,c=o.type,s=void 0===c?"innerText":c,a=o.onCopyTriggered,u=x(o,["children","type","onCopyTriggered"]),l=j(y(),2),f=l[0],d=l[1],h=j(n(""),2),p=h[0],v=h[1],b=e(null);r((function(){var t=b.current;t&&v("innerText"===s?null==t?void 0:t.innerText:"innerHTML"===s?null==t?void 0:t.innerHTML:"outerHTML"===s?null==t?void 0:t.outerHTML:"")}),[p]);return r((function(){f.value&&a&&a(p)}),[f]),t.createElement("div",w({ref:b,onClick:function(){p&&d(p)}},u),i)};function ct(){var t=E(["\n        animation: skeleton ","s ease-in-out infinite;\n        @keyframes skeleton{\n          from {\n            background-position: 100% 0;\n          }\n          to {\n            background-position: 0% 0;\n          }\n        }\n      "]);return ct=function(){return t},t}function st(){var t=E(["\n      ","\n    "]);return st=function(){return t},t}var at=function(t){var e=t.width,n=t.height,r=void 0===n?16:n,o=t.darkmode,i=t.marginBottom,c=t.borderRadius,s=void 0===c?2:c,a=t.divides,u=void 0===a?[1,2,3]:a,l=t.gap,f=void 0===l?10:l,d=t.animationSpeed,h=void 0===d?1:d,p=o?"rgba(255,255,255,.2)":"rgba(0,0,0,.06)";return b("div",{style:{display:"flex",width:e,marginBottom:i||6},css:m(st(),!i&&"\n        &:last-child {\n          margin-bottom: 0 !important;\n        }\n      ")},null==u?void 0:u.map((function(t,e){return b("div",{key:e,style:{background:"linear-gradient( 90deg, ".concat(p," 35%, ").concat(o?"rgba(255,255,255, .25)":"rgba(0,0,0, .02)",", ").concat(p," 65%)"),backgroundSize:"350% 100%",backgroundRepeat:"no-repeat",backgroundPosition:"0 0",width:"100%",height:r,borderRadius:s,flex:t,marginLeft:e&&f},css:m(ct(),2/h)})})))};export{rt as Avatar,tt as Box,it as Copy,nt as Image,ot as Meta,at as SkeletonLine};
