(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,'body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\n.forms {\n    display: grid;\n    grid-template-areas: \n    "project-form task-form";\n    grid-template-columns: 1fr 3fr;\n}\n\n.project-form {\n    background-color: aqua;\n}\n\n.task-form {\n    background-color: lawngreen;\n}\n\n.to-do {\n    display: grid;\n    grid-template-areas: \n    "projects tasks";\n    grid-template-columns: 1fr 3fr;\n}\n\n.project-section {\n    background-color: lightblue;\n}\n\n.task-section {\n    background-color: lightgreen;\n}\n\n/* Edit Task Section */\n.edit-task {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.edit-task-form {\n    display: flex;\n    flex-direction: column;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%;\n}',""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);o&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var l=e[i],s=o.base?l[0]+o.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var l=o(e,r),s=0;s<a.length;s++){var d=n(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var o={};(()=>{n.d(o,{Wl:()=>T,nr:()=>I});var e=n(379),t=n.n(e),r=n(795),a=n.n(r),c=n(569),i=n.n(c),l=n(565),s=n.n(l),d=n(216),u=n.n(d),p=n(589),m=n.n(p),f=n(426),v={};v.styleTagTransform=m(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;class h{constructor(e,t){this.title=e,this.active=t}}class g{constructor(e,t,n,o,r){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.projectId=r}}const y=document.querySelector(".form-project-title");let b=[];const x=()=>{b.forEach(((e,t)=>{const n=document.createElement("div");n.className="project",n.setAttribute("data-id",`${t}`);const o=document.createElement("h3");o.className="project-title",o.textContent=e.title,n.appendChild(o);const r=document.createElement("button");r.className="delete-button",r.textContent="Delete",n.appendChild(r),T.appendChild(n)}))},k=document.querySelector(".form-task-title"),C=document.querySelector(".form-task-description"),E=document.querySelector(".form-task-due-date"),S=document.querySelector(".form-task-priority");let N=[];const j=()=>{b.filter(((e,t)=>{"true"===e.active&&N.filter(((t,n)=>{if(t.projectId==e.title){console.log(N);const e=document.createElement("div");e.className="task",e.setAttribute("data-id",`${n}`);const o=document.createElement("div");o.className="task-title",o.textContent=t.title,e.appendChild(o);const r=document.createElement("div");r.className="task-description",r.textContent=t.description,e.appendChild(r);const a=document.createElement("div");a.className="task-due-date",a.textContent=t.dueDate,e.appendChild(a);const c=document.createElement("div");c.className="task-priority",c.textContent=t.priority,e.appendChild(c);const i=document.createElement("button");i.className="edit-button",i.textContent="Edit",e.appendChild(i);const l=document.createElement("button");l.className="delete-button",l.textContent="Delete",e.appendChild(l),I.appendChild(e)}}))}))},w=(document.querySelector("main"),document.querySelector(".to-do"),document.querySelector(".submit-project")),q=document.querySelector(".submit-task"),A=document.querySelector(".edit-task"),T=document.querySelector(".project-section"),I=document.querySelector(".task-section");let L,M;w.addEventListener("click",(e=>{e.preventDefault(),(()=>{b.forEach(((e,t)=>{e.active="false"}));const e=new h(y.value,"true");b.push(e),console.log(b)})(),T.textContent="",I.textContent="",x()})),q.addEventListener("click",(e=>{e.preventDefault(),(()=>{let e;b.filter(((t,n)=>{"true"==t.active&&(e=t.title)}));const t=new g(k.value,C.value,E.value,S.value,e);N.push(t)})(),I.textContent="",j()})),T.addEventListener("click",(e=>{I.textContent="";let t=e.target;if(L=t.getAttribute("data-id"),"project"===t.className&&(b.forEach(((e,t)=>{e.active="false"})),b[L].active="true",j(),console.log(b),console.log(N)),"delete-button"===t.className){let e=t.parentElement.getAttribute("data-id");console.log(e);let n=[];N.filter(((t,o)=>{b[e].title==t.projectId&&(console.log(b[e].title),n.push(o))}));for(let e=n.length-1;e>=0;e--)N.splice(n[e],1);n=[],b.filter(((t,n)=>{n==e&&(b.splice(n,1),T.textContent="",x())})),I.textContent="",console.log(b),console.log(N)}})),I.addEventListener("click",(e=>{let t=e.target;M=t.parentElement.getAttribute("data-id"),"delete-button"==t.className?(N.filter(((e,t)=>{t==M&&N.splice(M,1)})),t.parentElement.remove(),console.log(N)):"edit-button"==t.className&&(A.style.display="block",console.log("hello"))}))})()})();