(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,'body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\n.forms {\n    display: grid;\n    grid-template-areas: \n    "project-form task-form";\n    grid-template-columns: 1fr 3fr;\n}\n\n.project-form {\n    background-color: aqua;\n}\n\n.task-form {\n    background-color: lawngreen;\n}\n\n.to-do {\n    display: grid;\n    grid-template-areas: \n    "projects tasks";\n    grid-template-columns: 1fr 3fr;\n}\n\n.project-section {\n    background-color: lightblue;\n}\n\n.task-section {\n    background-color: lightgreen;\n}',""]);const s=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],s=0;s<e.length;s++){var i=e[s],d=r.base?i[0]+r.base:i[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=n(a[c]);t[s].references--}for(var i=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r={};(()=>{n.d(r,{Wl:()=>w,nr:()=>T,ys:()=>N});var e=n(379),t=n.n(e),o=n(795),a=n.n(o),c=n(569),s=n.n(c),i=n(565),d=n.n(i),l=n(216),u=n.n(l),p=n(589),m=n.n(p),f=n(426),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;class h{constructor(e){this.title=e}}class y{constructor(e,t,n,r){this.title=e,this.description=t,this.dueDate=n,this.priority=r}}const g=document.querySelector(".form-project-title");let b=[];const C=document.querySelector(".form-task-title"),x=document.querySelector(".form-task-description"),E=document.querySelector(".form-task-due-date"),k=document.querySelector(".form-task-priority");let S=[];document.querySelector("main");const N=document.querySelector(".to-do"),j=document.querySelector(".submit-project"),q=document.querySelector(".submit-task"),w=document.querySelector(".project-section"),T=document.querySelector(".task-section");j.addEventListener("click",(e=>{e.preventDefault(),(()=>{const e=new h(g.value);b.push(e),console.log(b)})(),w.textContent="",b.forEach(((e,t)=>{const n=document.createElement("div");n.className="project",n.setAttribute("data-id",`${t}`);const r=document.createElement("div");r.className="project-title",r.textContent=e.title,n.appendChild(r);const o=document.createElement("button");o.className="edit-button",o.textContent="Edit",n.appendChild(o);const a=document.createElement("button");a.className="delete-button",a.textContent="Delete",n.appendChild(a),w.appendChild(n),N.appendChild(w)}))})),q.addEventListener("click",(e=>{e.preventDefault(),(()=>{const e=new y(C.value,x.value,E.value,k.value);S.push(e),console.log(S)})(),T.textContent="",S.forEach(((e,t)=>{const n=document.createElement("div");n.className="task",n.setAttribute("data-id",`${t}`);const r=document.createElement("div");r.className="task-title",r.textContent=e.title,n.appendChild(r);const o=document.createElement("div");o.className="task-description",o.textContent=e.description,n.appendChild(o);const a=document.createElement("div");a.className="task-due-date",a.textContent=e.dueDate,n.appendChild(a);const c=document.createElement("div");c.className="task-priority",c.textContent=e.priority,n.appendChild(c);const s=document.createElement("button");s.className="edit-button",s.textContent="Edit",n.appendChild(s);const i=document.createElement("button");i.className="delete-button",i.textContent="Delete",n.appendChild(i),T.appendChild(n),N.appendChild(T)}))}))})()})();