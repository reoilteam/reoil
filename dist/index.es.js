import t from"@emotion/styled";import{color as e,layout as n,colorStyle as r,space as o,flex as i,flexbox as s,fontSize as c,fontFamily as a,fontWeight as u,fontStyle as l,background as f,borderRadius as h,boxShadow as d,textShadow as p,textAlign as v,border as b}from"styled-system";import{jsx as y,css as m}from"@emotion/core";import g,{useRef as w,useState as _,useEffect as O,useLayoutEffect as x}from"react";function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function j(){return(j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){E(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function P(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function T(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return B(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var D=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];t.call(e,o[1],o[0])}},e}()}(),R="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,k="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),z="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(k):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var W=["top","right","bottom","left","width","height","size","weight"],H="undefined"!=typeof MutationObserver,F=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,o=0;function i(){n&&(n=!1,t()),r&&c()}function s(){z(i)}function c(){var t=Date.now();if(n){if(t-o<2)return;r=!0}else n=!0,r=!1,setTimeout(s,e);o=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){R&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),H?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){R&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;W.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),I=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},C=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||k},L=N(0,0,0,0);function q(t){return parseFloat(t)||0}function X(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+q(t["border-"+n+"-width"])}),0)}function Y(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return L;var r=C(t).getComputedStyle(t),o=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=t["padding-"+o];e[o]=q(i)}return e}(r),i=o.left+o.right,s=o.top+o.bottom,c=q(r.width),a=q(r.height);if("border-box"===r.boxSizing&&(Math.round(c+i)!==e&&(c-=X(r,"left","right")+i),Math.round(a+s)!==n&&(a-=X(r,"top","bottom")+s)),!function(t){return t===C(t).document.documentElement}(t)){var u=Math.round(c+i)-e,l=Math.round(a+s)-n;1!==Math.abs(u)&&(c-=u),1!==Math.abs(l)&&(a-=l)}return N(o.left,o.top,c,a)}var G="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof C(t).SVGGraphicsElement}:function(t){return t instanceof C(t).SVGElement&&"function"==typeof t.getBBox};function V(t){return R?G(t)?function(t){var e=t.getBBox();return N(0,0,e.width,e.height)}(t):Y(t):L}function N(t,e,n,r){return{x:t,y:e,width:n,height:r}}var U=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=N(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=V(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),$=function(t,e){var n,r,o,i,s,c,a,u=(r=(n=e).x,o=n.y,i=n.width,s=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(c.prototype),I(a,{x:r,y:o,width:i,height:s,top:o,right:r+i,bottom:s+o,left:r}),a);I(this,{target:t,contentRect:u})},J=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new D,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof C(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new U(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof C(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new $(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),K="undefined"!=typeof WeakMap?new WeakMap:new D,Q=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=F.getInstance(),r=new J(e,n,this);K.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){Q.prototype[t]=function(){var e;return(e=K.get(this))[t].apply(e,arguments)}}));var Z=void 0!==k.ResizeObserver?k.ResizeObserver:Q;function tt(){var t=P(["\n      &:hover {\n        background: rgba(255, 105, 180, .6) !important;\n        color: white !important;\n        backdrop-filter: blur(4px);\n      }\n    "]);return tt=function(){return t},t}var et=function(){var t=w(null),e=T(_({width:0,height:0}),2),n=e[0],r=e[1];return O((function(){var e=new Z((function(e){r(M(M({},n),{},{width:t.current.offsetWidth,height:t.current.offsetHeight}))}));return t.current&&e.observe(t.current),function(){return e.disconnect()}}),[t]),y("div",{className:"inspect",style:{position:"absolute",width:"100%",height:"100%",boxShadow:"0 0 0 1px rgba(255, 0, 255, 0.6)",background:"rgba(255, 0, 255, 0.08)",top:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",color:"transparent",textShadow:"0 2px 5px rgba(0,0,0,.4)",fontSize:12,transition:".4s",zIndex:9999},ref:t,css:m(tt())},n.width," x ",n.height)};function nt(){var t=P(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return nt=function(){return t},t}function rt(){var t=P(["\n        ",";\n        ",";\n        position: relative;\n      "]);return rt=function(){return t},t}function ot(){var t=P(["\n    img,\n    video,\n    audio {\n      width: 100%;\n      height: 100%;\n      object-fit: ",";\n    }\n  "]);return ot=function(){return t},t}var it=function(t){var e=t.style,n=t.color,r=t.row,o=t.center,i=t.left,s=t.right,c=t.top,a=t.bottom,u=t.rowBetween,l=t.rowAround,f=t.rowEvenly,h=t.colBetween,d=t.colAround,p=t.colEvenly,v=t.pointer,b=t.textTransform,g=t.objectFit,w=t.fit,_=t.cover,O=t.transition,x=t.position,E=t.fullWidth,A=t.inspect,P=t.alignX,T=t.alignY,B=t.stretch,D=t.boxSizing,R=t.borderBox,k=t.contentBox,z=t.userSelect,W=t.pointerEvents,H=S(t,["style","color","row","center","left","right","top","bottom","rowBetween","rowAround","rowEvenly","colBetween","colAround","colEvenly","pointer","textTransform","objectFit","fit","cover","transition","position","fullWidth","inspect","alignX","alignY","stretch","boxSizing","borderBox","contentBox","userSelect","pointerEvents"]),F={center:o,left:"boolean"==typeof i&&i?i:void 0,right:"boolean"==typeof s&&s?s:void 0,top:"boolean"==typeof c&&c?c:void 0,bottom:"boolean"==typeof a&&a?a:void 0,rowBetween:u,rowAround:l,rowEvenly:f,colBetween:h,colAround:d,colEvenly:p},I=r?"row":"column",C=function(t){var e=t.childrenPosition,n=t.flexDirection,r=t.alignX,o=t.alignY;t.stretch;return"row"===n?r||(e.left?"flex-start":e.right?"flex-end":e.rowBetween?"space-between":e.rowAround?"space-around":e.rowEvenly?"space-evenly":e.center?"center":"flex-start"):"column"===n?o||(e.top?"flex-start":e.bottom?"flex-end":e.colBetween?"space-between":e.colAround?"space-around":e.colEvenly?"space-evenly":e.center?"center":"flex-start"):"flex-start"}({childrenPosition:F,flexDirection:I,alignX:P,alignY:T,stretch:B}),L=function(t){var e=t.childrenPosition,n=t.flexDirection,r=t.alignX,o=t.alignY,i=t.stretch;return"column"===n?i?"stretch":r||(e.left?"flex-start":e.right?"flex-end":e.rowBetween?"space-between":e.rowAround?"space-around":e.rowEvenly?"space-evenly":e.center?"center":"flex-start"):"row"===n?i?"stretch":o||(e.top?"flex-start":e.bottom?"flex-end":e.colBetween?"space-between":e.colAround?"space-around":e.colEvenly?"space-evenly":e.center?"center":"flex-start"):"flex-start"}({childrenPosition:F,flexDirection:I,alignX:P,alignY:T,stretch:B}),q=v?"pointer":void 0,X="boolean"==typeof O?".4s":"string"==typeof O?O:void 0,Y=m(ot(),_?"cover":w||g);return y(st,j({color:n,flexDirection:I,alignItems:L,justifyContent:C,style:M({cursor:q,textTransform:b,transition:X,position:x,left:"boolean"!=typeof i?i:void 0,right:"boolean"!=typeof s?s:void 0,top:"boolean"!=typeof c?c:void 0,bottom:"boolean"!=typeof a?a:void 0,width:E?"100%":void 0,boxSizing:(R?"border-box":k&&"content-box")||D,userSelect:z,pointerEvents:W},e),css:m(rt(),_||w||g?Y:null,_||w||g&&H.borderRadius?"overflow: hidden":null)},H),A&&y(et,null),H.children)};it.defaultProps={display:"flex"};var st=t.div(nt(),e,n,r,o,i,s,c,a,u,l,f,h,d,p,v,b),ct=function(t){var e=t.src,n=t.alt,r=t.objectFit,o=t.fit,i=t.cover,s=t.height,c=t.width,a=t.minWidth,u=t.minHeight,l=t.maxWidth,f=t.maxHeight,h=t.display,d=t.borderRadius,p=S(t,["src","alt","objectFit","fit","cover","height","width","minWidth","minHeight","maxWidth","maxHeight","display","borderRadius"]),v=function(t,e){return Math.round(Math.random()*(e-t)+t)};return g.createElement("img",j({src:e?"random"===e?"https://picsum.photos/seed/".concat(v(0,3e3),"/300"):e:"https://picsum.photos/seed/".concat(v(0,3e3),"/300"),alt:n,style:{objectFit:i?"cover":o||r?o||r:void 0,width:c,height:s,minWidth:a,minHeight:u,maxWidth:l,maxHeight:f,display:h,borderRadius:d}},p))},at=function(t){var e=t.src,n=t.children,r=(t.random,S(t,["src","children","random"]));return g.createElement(it,j({},r,{center:!!n}),e?g.createElement(ct,{src:e}):n)};at.defaultProps={borderRadius:"50%",cover:!0,size:34,backgroundColor:"whitesmoke"};var ut=function(t){var e=t.title,n=t.favicon;return x((function(){document.title=e,document.querySelector("link[rel=icon]").setAttribute("href",n)}),[]),g.createElement(g.Fragment,null)};export{at as Avatar,it as Box,ct as Image,ut as Media};
