"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("@emotion/styled")),r=require("styled-system"),n=require("@emotion/core"),o=require("react"),i=e(o);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(){var e=f(["\n      &:hover {\n        background: rgba(255, 105, 180, .6) !important;\n        color: white !important;\n        backdrop-filter: blur(4px);\n      }\n    "]);return b=function(){return e},e}var y=function(){var e=o.useRef(null),t=d(o.useState({width:0,height:0}),2),r=t[0],i=t[1];return o.useEffect((function(){var t=new ResizeObserver((function(t){i(u(u({},r),{},{width:e.current.offsetWidth,height:e.current.offsetHeight}))}));return e.current&&t.observe(e.current),function(){return t.disconnect()}}),[e]),n.jsx("div",{className:"inspect",style:{position:"absolute",width:"100%",height:"100%",boxShadow:"0 0 0 1px rgba(255, 0, 255, 0.6)",background:"rgba(255, 0, 255, 0.08)",top:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",color:"transparent",textShadow:"0 2px 5px rgba(0,0,0,.4)",fontSize:12,transition:".4s",zIndex:9999},ref:e,css:n.css(b())},r.width," x ",r.height)};function h(){var e=f(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return h=function(){return e},e}function v(){var e=f(["\n        ",";\n        ",";\n        position: relative\n      "]);return v=function(){return e},e}function w(){var e=f(["\n    img,\n    video,\n    audio {\n      width: 100%;\n      height: 100%;\n      object-fit: ",";\n    }\n  "]);return w=function(){return e},e}var m=function(e){var t=e.style,r=e.color,o=e.row,i=e.center,c=e.left,a=e.right,f=e.top,d=e.bottom,p=e.rowBetween,b=e.rowAround,h=e.rowEvenly,m=e.colBetween,x=e.colAround,j=e.colEvenly,O=e.pointer,S=e.textTransform,A=e.objectFit,E=e.fit,P=e.cover,B=e.transition,W=e.position,k=e.fullWidth,I=e.inspect,R=s(e,["style","color","row","center","left","right","top","bottom","rowBetween","rowAround","rowEvenly","colBetween","colAround","colEvenly","pointer","textTransform","objectFit","fit","cover","transition","position","fullWidth","inspect"]),z={center:i,left:"boolean"==typeof c&&c?c:void 0,right:"boolean"==typeof a&&a?a:void 0,top:"boolean"==typeof f&&f?f:void 0,bottom:"boolean"==typeof d&&d?d:void 0,rowBetween:p,rowAround:b,rowEvenly:h,colBetween:m,colAround:x,colEvenly:j},H=o?"row":"column",F=function(e,t){return"row"===t?e.left?"flex-start":e.right?"flex-end":e.rowBetween?"space-between":e.rowAround?"space-around":e.rowEvenly?"space-evenly":e.center?"center":"flex-start":"column"===t?e.top?"flex-start":e.bottom?"flex-end":e.colBetween?"space-between":e.colAround?"space-around":e.colEvenly?"space-evenly":e.center?"center":"flex-start":"flex-start"}(z,H),D=function(e,t){return"column"===t?e.left?"flex-start":e.right?"flex-end":e.rowBetween?"space-between":e.rowAround?"space-around":e.rowEvenly?"space-evenly":e.center?"center":"flex-start":"row"===t?e.top?"flex-start":e.bottom?"flex-end":e.colBetween?"space-between":e.colAround?"space-around":e.colEvenly?"space-evenly":e.center?"center":"flex-start":"flex-start"}(z,H),q=O?"pointer":void 0,C="boolean"==typeof B?".4s":"string"==typeof B?B:void 0,M=n.css(w(),P?"cover":E||A);return n.jsx(g,l({color:r,flexDirection:H,alignItems:D,justifyContent:F,style:u(u({},t),{},{cursor:q,textTransform:S,transition:C,position:W,left:"boolean"!=typeof c?c:void 0,right:"boolean"!=typeof a?a:void 0,top:"boolean"!=typeof f?f:void 0,bottom:"boolean"!=typeof d?d:void 0,width:k?"100%":void 0}),css:n.css(v(),P||E||A?M:null,P||E||A&&R.borderRadius?"overflow: hidden":null)},R),I&&n.jsx(y,null),R.children)};m.defaultProps={display:"flex"};var g=t.div(h(),r.color,r.layout,r.colorStyle,r.space,r.flex,r.flexbox,r.fontSize,r.fontFamily,r.fontWeight,r.fontStyle,r.background,r.borderRadius,r.boxShadow,r.textShadow,r.textAlign,r.border),x=function(e){var t=e.src,r=e.alt,n=e.objectFit,o=e.fit,c=e.cover,a=e.height,u=e.width,f=e.minWidth,d=e.minHeight,p=e.maxWidth,b=e.maxHeight,y=e.display,h=e.borderRadius,v=s(e,["src","alt","objectFit","fit","cover","height","width","minWidth","minHeight","maxWidth","maxHeight","display","borderRadius"]),w=function(e,t){return Math.round(Math.random()*(t-e)+e)};return i.createElement("img",l({src:t?"random"===t?"https://picsum.photos/seed/".concat(w(0,3e3),"/300"):t:"https://picsum.photos/seed/".concat(w(0,3e3),"/300"),alt:r,style:{objectFit:c?"cover":o||n?o||n:void 0,width:u,height:a,minWidth:f,minHeight:d,maxWidth:p,maxHeight:b,display:y,borderRadius:h}},v))},j=function(e){var t=e.src,r=e.children,n=(e.random,s(e,["src","children","random"]));return i.createElement(m,l({},n,{center:!!r}),t?i.createElement(x,{src:t}):r)};j.defaultProps={borderRadius:"50%",cover:!0,size:34,backgroundColor:"whitesmoke"},exports.Avatar=j,exports.Box=m,exports.Image=x;
//# sourceMappingURL=index.js.map
