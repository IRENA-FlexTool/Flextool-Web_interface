(function(t){function e(e){for(var r,u,i=e[0],a=e[1],f=e[2],d=0,j=[];d<i.length;d++)u=i[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&j.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(e);while(j.length)j.shift()();return c.push.apply(c,f||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={index:0},c=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var l=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("b635")},9406:function(t,e,n){"use strict";n.d(e,"m",(function(){return u})),n.d(e,"k",(function(){return l})),n.d(e,"l",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"e",(function(){return f})),n.d(e,"g",(function(){return d})),n.d(e,"b",(function(){return j})),n.d(e,"d",(function(){return s})),n.d(e,"f",(function(){return p})),n.d(e,"a",(function(){return b})),n.d(e,"h",(function(){return O})),n.d(e,"j",(function(){return h})),n.d(e,"i",(function(){return y}));var r=n("5530");n("ac1f"),n("1276"),n("498a"),n("e9c4"),n("d3b7"),n("99af");function o(t){var e=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),r=0;r<n.length;r++){var o=n[r].trim();if(o.substring(0,t.length+1)===t+"="){e=decodeURIComponent(o.substring(t.length+1));break}}return e}var c=o("csrftoken");function u(){return{method:"POST",credentials:"same-origin",headers:{"X-CSRFToken":c,"Content-Type":"application/json"}}}function i(t){var e=u();return e["body"]=JSON.stringify({type:"project list?"}),fetch(t,e).then((function(t){return t.ok?t.json():t.text().then((function(t){throw new Error("Failed to load project list: ".concat(t))}))}))}function a(t,e){var n=u();return n["body"]=JSON.stringify({type:"create project?",name:t}),fetch(e,n).then((function(t){return t.ok?t.json():t.text().then((function(t){throw new Error("Failed to create project: ".concat(t))}))}))}function f(t,e){var n=u();return n["body"]=JSON.stringify({type:"destroy project?",id:t}),fetch(e,n).then((function(t){return t.ok?t.json():t.text().then((function(t){throw new Error("Failed to delete project: ".concat(t))}))}))}function l(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=u();return c["body"]=JSON.stringify(Object(r["a"])({type:t,projectId:e},o)),fetch(n,c).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to fetch ".concat(t,": ").concat(e))}))}))}function d(t,e){var n=u();return n.body=JSON.stringify({type:"execution list?",projectId:t}),fetch(e,n).then((function(t){return t.ok?t.json():t.text().then((function(t){throw new Error("Failed to load solve list: ".concat(t))}))}))}function j(t,e){var n=u();return n.body=JSON.stringify({type:"create execution?",projectId:t}),fetch(e,n).then((function(t){return t.ok?t.json():t.text().then((function(t){throw new Error("Failed to create solve: ".concat(t))}))}))}function s(t,e){var n=u();return n["body"]=JSON.stringify({type:"destroy execution?",id:t}),fetch(e,n).then((function(t){return t.ok?t.json():t.text().then((function(t){throw new Error("Failed to delete execution: ".concat(t))}))}))}function p(t,e){var n=u();return n["body"]=JSON.stringify({type:"execute?",id:t}),fetch(e,n).then((function(t){return t.ok?t.json():t.text().then((function(t){throw new Error("Failed to execute: ".concat(t))}))}))}function b(t,e){var n=u();return n["body"]=JSON.stringify({type:"abort?",id:t}),fetch(e,n).then((function(t){return t.ok?t.json():t.text().then((function(t){throw new Error("Failed to abort execution: ".concat(t))}))}))}function h(t,e){var n=u();return n["body"]=JSON.stringify({type:"updates?",id:t}),fetch(e,n).then((function(t){return t.ok?t.json():t.text().then((function(t){throw new Error("Failed to execution updates: ".concat(t))}))}))}function O(t,e){var n=u();return n["body"]=JSON.stringify({type:"log?",id:t}),fetch(e,n).then((function(t){return t.ok?t.json():t.text().then((function(t){throw new Error("Failed to get log: ".concat(t))}))}))}function y(t,e){var n=u();return n["body"]=JSON.stringify({type:"status?",id:t}),fetch(e,n).then((function(t){return t.ok?t.json():t.text().then((function(t){throw new Error("Failed to get execution status: ".concat(t))}))}))}},b635:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("f2bf"),o=n("5333"),c=n("7a23"),u={id:"index-app"},i=Object(c["j"])("Projects");function a(t,e,n,r,o,a){var f=Object(c["G"])("n-h1"),l=Object(c["G"])("project-list");return Object(c["z"])(),Object(c["i"])("div",u,[Object(c["k"])(f,null,{default:Object(c["N"])((function(){return[i]})),_:1}),Object(c["k"])(l,{"projects-url":n.projectsUrl},null,8,["projects-url"])])}n("b0c0");function f(t,e,n,r,o,u){var i=Object(c["G"])("project-row"),a=Object(c["G"])("n-list-item"),f=Object(c["G"])("new-project-row"),l=Object(c["G"])("n-list");return Object(c["z"])(),Object(c["h"])(l,null,{footer:Object(c["N"])((function(){return[Object(c["k"])(f,{onCreated:r.appendProject,"projects-url":n.projectsUrl},null,8,["onCreated","projects-url"])]})),default:Object(c["N"])((function(){return[(Object(c["z"])(!0),Object(c["i"])(c["b"],null,Object(c["E"])(r.projects,(function(t){return Object(c["z"])(),Object(c["h"])(a,{key:t.id},{default:Object(c["N"])((function(){return[Object(c["k"])(i,{onDestroyed:r.deleteProject,"project-id":t.id,"project-name":t.name,url:t.url,"projects-url":n.projectsUrl},null,8,["onDestroyed","project-id","project-name","url","projects-url"])]})),_:2},1024)})),128))]})),_:1})}n("c740"),n("a434");var l=n("9406"),d=Object(c["j"])("Create");function j(t,e,n,r,o,u){var i=Object(c["G"])("n-input"),a=Object(c["G"])("n-button"),f=Object(c["G"])("n-space");return Object(c["z"])(),Object(c["h"])(f,{justify:"space-between"},{default:Object(c["N"])((function(){return[Object(c["k"])(i,{type:"text",placeholder:"Enter project name...",clearable:"",maxlength:"60",onInput:r.updateProjectName,value:r.projectName,disabled:r.busy},null,8,["onInput","value","disabled"]),Object(c["k"])(a,{onClick:r.create,loading:r.busy,disabled:r.buttonDisabled},{default:Object(c["N"])((function(){return[d]})),_:1},8,["onClick","loading","disabled"])]})),_:1})}n("d3b7");var s=n("7317"),p={props:{projectsUrl:String},emit:["created:project"],setup:function(t,e){var n=e.emit,o=Object(r["e"])(""),c=Object(r["e"])(!1),u=Object(s["a"])(),i=Object(r["a"])((function(){return!(0!==o.value.length&&!c.value)}));return{buttonDisabled:i,projectName:o,busy:c,updateProjectName:function(t){o.value=t},create:function(){c.value=!0,Object(l["c"])(o.value,String(t.projectsUrl)).then((function(t){n("created",t.project),o.value=""})).catch((function(t){u.error(t.message)})).finally((function(){c.value=!1}))}}}},b=n("6b0d"),h=n.n(b);const O=h()(p,[["render",j]]);var y=O,v=Object(c["j"])("Delete");function g(t,e,n,r,o,u){var i=Object(c["G"])("n-a"),a=Object(c["G"])("n-button"),f=Object(c["G"])("n-space");return Object(c["z"])(),Object(c["h"])(f,{justify:"space-between",align:"baseline"},{default:Object(c["N"])((function(){return[r.busy?(Object(c["z"])(),Object(c["h"])(i,{key:1},{default:Object(c["N"])((function(){return[Object(c["j"])(Object(c["H"])(n.projectName),1)]})),_:1})):(Object(c["z"])(),Object(c["h"])(i,{key:0,href:n.url},{default:Object(c["N"])((function(){return[Object(c["j"])(Object(c["H"])(n.projectName),1)]})),_:1},8,["href"])),Object(c["k"])(a,{onClick:r.destroy,loading:r.busy,disabled:r.busy},{default:Object(c["N"])((function(){return[v]})),_:1},8,["onClick","loading","disabled"])]})),_:1})}n("a9e3");var w={props:{projectId:Number,projectName:String,url:String,projectsUrl:String},emits:["destroyed:projectId"],setup:function(t,e){var n=Object(r["e"])(!1),o=Object(s["a"])();return{busy:n,destroy:function(){n.value=!0,Object(l["e"])(t.projectId,String(t.projectsUrl)).then((function(t){e.emit("destroyed",t.id)})).catch((function(t){o.error(t.message)})).finally((function(){n.value=!1}))}}}};const m=h()(w,[["render",g]]);var k=m,x={props:{projectsUrl:String},setup:function(t){var e=Object(r["e"])([]),n=Object(r["e"])(!1);return Object(r["d"])((function(){Object(l["l"])(String(t.projectsUrl)).then((function(t){e.value=t.projects}))})),{projects:e,newProjectRowBusy:n,appendProject:function(t){e.value.push(t)},deleteProject:function(t){var n=e.value.findIndex((function(e){return e.id===t}));if(n<0)throw new Error("Project id ".concat(t," not found while deleting project."));e.value.splice(n,1)}}},components:{"new-project-row":y,"project-row":k}};const N=h()(x,[["render",f]]);var S=N,P={props:{projectsUrl:String},components:{"project-list":S}};const E=h()(P,[["render",a]]);var _=E,J=r["b"]({});J.use(o["a"]),J.component("index-app",_),J.mount("#index-app")}});