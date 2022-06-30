(function(e){function t(t){for(var n,u,i=t[0],l=t[1],a=t[2],s=0,f=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,a||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={edit:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var d=l;c.push([2,"chunk-vendors"]),r()})({"0274":function(e,t,r){"use strict";var n=r("7a23");function o(e,t,r,o,c,u){var i=Object(n["N"])("n-spin"),l=Object(n["N"])("n-result");return"loading"===r.state?(Object(n["G"])(),Object(n["i"])(i,{key:0})):"error"===r.state?(Object(n["G"])(),Object(n["i"])(l,{key:1,status:"error",title:"Error",description:r.errorMessage},null,8,["description"])):"waiting"===r.state?Object(n["M"])(e.$slots,"waiting",{key:2}):Object(n["M"])(e.$slots,"default",{key:3})}var c={props:{state:{type:String,required:!0},errorMessage:{type:String,required:!1,default:""}},state:{loading:"loading",waiting:"waiting",ready:"ready",error:"error"}},u=r("6b0d"),i=r.n(u);const l=i()(c,[["render",o]]);t["a"]=l},2:function(e,t,r){e.exports=r("8fc9")},2225:function(e,t,r){"use strict";r("a2d1")},"315d":function(e,t,r){"use strict";r.d(t,"d",(function(){return c})),r.d(t,"h",(function(){return d})),r.d(t,"b",(function(){return s})),r.d(t,"l",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"e",(function(){return a})),r.d(t,"g",(function(){return f})),r.d(t,"f",(function(){return b})),r.d(t,"a",(function(){return j})),r.d(t,"j",(function(){return p})),r.d(t,"i",(function(){return g})),r.d(t,"n",(function(){return O})),r.d(t,"k",(function(){return y})),r.d(t,"m",(function(){return h}));var n=r("5530");r("ac1f"),r("1276"),r("498a"),r("e9c4"),r("d3b7"),r("d9e2"),r("99af");function o(e){var t=null;if(document.cookie&&""!==document.cookie)for(var r=document.cookie.split(";"),n=0;n<r.length;n++){var o=r[n].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}var c=o("csrftoken");function u(){return{method:"POST",credentials:"same-origin",headers:{"X-CSRFToken":c,"Content-Type":"application/json"}}}function i(e){var t=u();return t["body"]=JSON.stringify({type:"project list?"}),fetch(e,t).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to load project list: ".concat(e))}))}))}function l(e,t){var r=u();return r["body"]=JSON.stringify({type:"create project?",name:e}),fetch(t,r).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to create project: ".concat(e))}))}))}function a(e,t){var r=u();return r["body"]=JSON.stringify({type:"destroy project?",id:e}),fetch(t,r).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to delete project: ".concat(e))}))}))}function d(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=u();return c["body"]=JSON.stringify(Object(n["a"])({type:e,projectId:t},o)),fetch(r,c).then((function(t){return t.ok?t.json():t.text().then((function(t){throw new Error("Failed to fetch ".concat(e,": ").concat(t))}))}))}function s(e,t,r,o){var c=u();return c.body=JSON.stringify(Object(n["a"])({type:"commit",projectId:r,message:t},e)),fetch(o,c).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))}))}function f(e,t){var r=u();return r.body=JSON.stringify({type:"current execution?",projectId:e}),fetch(t,r).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to fetch current run: ".concat(e))}))}))}function b(e,t,r){var n=u();return n["body"]=JSON.stringify({type:"execute?",projectId:e,scenarios:r}),fetch(t,n).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to execute: ".concat(e))}))}))}function j(e,t){var r=u();return r["body"]=JSON.stringify({type:"abort?",projectId:e}),fetch(t,r).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to abort execution: ".concat(e))}))}))}function p(e,t){var r=u();return r["body"]=JSON.stringify({type:"briefing?",projectId:e}),fetch(t,r).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to fetch execution status: ".concat(e))}))}))}function O(e,t,r){var n=u();return n.body=JSON.stringify({type:"summary?",projectId:e,scenarioExecutionId:r}),fetch(t,n).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to load summary: ".concat(e))}))}))}function y(e,t,r){var n=u();return n.body=JSON.stringify({type:"output directory?",projectId:e,scenarioExecutionId:r}),fetch(t,n).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to load output directory path: ".concat(e))}))}))}function g(e,t){var r=u();return r.body=JSON.stringify({type:"scenario list?",projectId:e}),fetch(t,r).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to load scenarios: ".concat(e))}))}))}function h(e,t,r){var n=u();return n.body=JSON.stringify({type:"result alternative?",projectId:e,scenarioExecutionId:r}),fetch(t,n).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to result alternative: ".concat(e))}))}))}},"8fc9":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("f2bf"),o=r("5333"),c=r("7a23"),u=Object(c["m"])("Physical classes"),i=Object(c["m"])("Scenarios"),l=Object(c["m"])(" Edit alternatives and scenarios "),a=Object(c["m"])("Model classes");function d(e,t,r,n,o,d){var s=Object(c["N"])("page-path"),f=Object(c["N"])("n-h1"),b=Object(c["N"])("class-list"),j=Object(c["N"])("n-space"),p=Object(c["N"])("n-a"),O=Object(c["N"])("n-p"),y=Object(c["N"])("page");return Object(c["G"])(),Object(c["i"])(y,{name:"Edit model","index-url":r.indexUrl,"project-url":r.projectUrl,"edit-url":r.editUrl,"run-url":r.runUrl,"results-url":r.resultsUrl,"logout-url":r.logoutUrl,"logo-url":r.logoUrl},{header:Object(c["V"])((function(){return[Object(c["n"])(s,{path:[{name:"Projects",url:r.indexUrl},{name:r.projectName,url:r.projectUrl}],"leaf-name":"Model editor"},null,8,["path"])]})),default:Object(c["V"])((function(){return[Object(c["n"])(j,null,{default:Object(c["V"])((function(){return[Object(c["n"])(j,{vertical:""},{default:Object(c["V"])((function(){return[Object(c["n"])(f,null,{default:Object(c["V"])((function(){return[u]})),_:1}),Object(c["n"])(b,{"class-type":"physical","project-id":r.projectId,"model-url":r.modelUrl},null,8,["project-id","model-url"])]})),_:1}),Object(c["n"])(j,{vertical:""},{default:Object(c["V"])((function(){return[Object(c["n"])(f,null,{default:Object(c["V"])((function(){return[i]})),_:1}),Object(c["n"])(O,null,{default:Object(c["V"])((function(){return[Object(c["n"])(p,{href:r.scenariosUrl},{default:Object(c["V"])((function(){return[l]})),_:1},8,["href"])]})),_:1}),Object(c["n"])(f,null,{default:Object(c["V"])((function(){return[a]})),_:1}),Object(c["n"])(b,{"class-type":"model","project-id":r.projectId,"model-url":r.modelUrl},null,8,["project-id","model-url"])]})),_:1})]})),_:1})]})),_:1},8,["index-url","project-url","edit-url","run-url","results-url","logout-url","logo-url"])}r("a9e3"),r("b0c0"),r("a4d3"),r("e01a");function s(e,t,r,n,o,u){var i=Object(c["N"])("n-a"),l=Object(c["N"])("n-li"),a=Object(c["N"])("n-ul"),d=Object(c["N"])("fetchable");return Object(c["G"])(),Object(c["i"])(d,{state:n.state,"error-message":n.errorMessage},{default:Object(c["V"])((function(){return[Object(c["n"])(a,null,{default:Object(c["V"])((function(){return[(Object(c["G"])(!0),Object(c["k"])(c["b"],null,Object(c["L"])(n.objectClasses,(function(e){return Object(c["G"])(),Object(c["i"])(l,{key:e.id},{default:Object(c["V"])((function(){return[Object(c["n"])(i,{href:e.entitiesUrl},{default:Object(c["V"])((function(){return[Object(c["m"])(Object(c["O"])(e.name),1)]})),_:2},1032,["href"]),Object(c["m"])(" "+Object(c["O"])(e.description)+" ",1),Object(c["n"])(a,null,{default:Object(c["V"])((function(){return[(Object(c["G"])(!0),Object(c["k"])(c["b"],null,Object(c["L"])(n.relationshipClasses[e.id],(function(e){return Object(c["G"])(),Object(c["i"])(l,{key:e.id},{default:Object(c["V"])((function(){return[Object(c["n"])(i,{href:e.entitiesUrl},{default:Object(c["V"])((function(){return[Object(c["m"])(Object(c["O"])(e.name),1)]})),_:2},1032,["href"]),Object(c["m"])(" "+Object(c["O"])(e.description),1)]})),_:2},1024)})),128))]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1})]})),_:1},8,["state","error-message"])}var f=r("3835"),b=(r("4ec9"),r("d3b7"),r("3ca3"),r("ddb0"),r("4fadc"),r("315d")),j=r("0274"),p={props:{classType:{type:String,required:!0},projectId:{type:Number,required:!0},modelUrl:{type:String,required:!0}},components:{fetchable:j["a"]},setup:function(e){var t=Object(n["e"])([]),r=Object(n["e"])(new Map),o=Object(n["e"])(j["a"].state.loading),c=Object(n["e"])("");return Object(n["d"])((function(){var n="physical"===e.classType?"physical classes?":"model classes?";b["h"](n,e.projectId,e.modelUrl).then((function(e){for(var n=new Map,u=0,i=Object.entries(e.relationshipClasses);u<i.length;u++){var l=Object(f["a"])(i[u],2),a=l[0],d=l[1];n[parseInt(a)]=d}r.value=n,t.value=e.objectClasses,o.value=j["a"].state.ready,c.value=""})).catch((function(e){c.value=e.message,o.value=j["a"].state.error}))})),{objectClasses:t,relationshipClasses:r,state:o,errorMessage:c}}},O=r("6b0d"),y=r.n(O);const g=y()(p,[["render",s]]);var h=g,v=r("9973"),m=r("c46e"),U={props:{indexUrl:{type:String,required:!0},editUrl:{type:String,required:!0},projectUrl:{type:String,required:!0},projectName:{type:String,required:!0},modelUrl:{type:String,required:!0},projectId:{type:Number,required:!0},runUrl:{type:String,required:!0},resultsUrl:{type:String,required:!0},scenariosUrl:{type:String,required:!0},logoutUrl:{type:String,required:!0},logoUrl:{type:String,required:!0}},components:{"class-list":h,page:v["a"],"page-path":m["a"]}};const S=y()(U,[["render",d]]);var w=S,N=n["b"]({});N.use(o["a"]),N.component("editor-app",w),N.mount("#edit-app")},9973:function(e,t,r){"use strict";r("b0c0");var n=r("7a23"),o={class:"page-content"},c={class:"page-content"};function u(e,t,r,u,i,l){var a=Object(n["N"])("navigation-menu"),d=Object(n["N"])("n-card"),s=Object(n["N"])("n-layout-header"),f=Object(n["N"])("n-layout");return Object(n["G"])(),Object(n["i"])(f,{position:"absolute"},{default:Object(n["V"])((function(){return[Object(n["n"])(s,null,{default:Object(n["V"])((function(){return[Object(n["n"])(d,{size:"small"},{default:Object(n["V"])((function(){return[Object(n["n"])(a,{current:r.name,"index-url":r.indexUrl,"project-url":r.projectUrl,"edit-url":r.editUrl,"run-url":r.runUrl,"results-url":r.resultsUrl,"logout-url":r.logoutUrl,"logo-url":r.logoUrl},null,8,["current","index-url","project-url","edit-url","run-url","results-url","logout-url","logo-url"])]})),_:1}),Object(n["l"])("div",o,[Object(n["M"])(e.$slots,"header")])]})),_:3}),Object(n["l"])("div",c,[Object(n["M"])(e.$slots,"default")])]})),_:3})}var i=Object(n["m"])(" Log out ");function l(e,t,r,o,c,u){var l=Object(n["N"])("n-image"),a=Object(n["N"])("n-menu"),d=Object(n["N"])("n-space"),s=Object(n["N"])("n-button");return Object(n["G"])(),Object(n["i"])(d,{justify:"space-between",align:"baseline"},{default:Object(n["V"])((function(){return[Object(n["n"])(d,{align:"start"},{default:Object(n["V"])((function(){return[Object(n["n"])(l,{src:r.logoUrl,alt:"FlexTool",width:90,"preview-disabled":""},null,8,["src"]),Object(n["n"])(a,{"default-value":r.current,mode:"horizontal",options:o.links},null,8,["default-value","options"])]})),_:1}),Object(n["n"])(s,{onClick:o.logout},{default:Object(n["V"])((function(){return[i]})),_:1},8,["onClick"])]})),_:1})}var a=r("f2bf"),d=r("ac88");function s(e,t){return function(){return Object(a["c"])(d["a"],{href:t},(function(){return e}))}}function f(e){var t={Projects:e.indexUrl,"Manage project":e.projectUrl,"Edit model":e.editUrl,Run:e.runUrl,Results:e.resultsUrl},r=[];for(var n in t){var o=t[n],c=null!==o,u=c?s(n,o):n;r.push({label:u,key:n,disabled:!c})}return r}var b={props:{current:{type:String,required:!0},indexUrl:{type:String,required:!0},projectUrl:{type:String,required:!1,default:null},editUrl:{type:String,required:!1,default:null},runUrl:{type:String,required:!1,default:null},resultsUrl:{type:String,required:!1,default:null},logoutUrl:{type:String,required:!0},logoUrl:{type:String,required:!0}},setup:function(e){var t=Object(a["e"])(f(e)),r=Object(a["e"])(null);return{links:t,activeKey:r,logout:function(){location.assign(e.logoutUrl)}}}},j=r("6b0d"),p=r.n(j);const O=p()(b,[["render",l]]);var y=O,g={props:{name:{type:String,required:!0},indexUrl:{type:String,required:!0},projectUrl:{type:String,required:!1,default:null},editUrl:{type:String,required:!1,default:null},runUrl:{type:String,required:!1,default:null},resultsUrl:{type:String,required:!1,default:null},logoutUrl:{type:String,required:!0},logoUrl:{type:String,required:!0}},components:{"navigation-menu":y}};r("2225");const h=p()(g,[["render",u]]);t["a"]=h},a2d1:function(e,t,r){},c46e:function(e,t,r){"use strict";r("b0c0");var n=r("7a23");function o(e,t,r,o,c,u){var i=Object(n["N"])("n-breadcrumb-item"),l=Object(n["N"])("n-breadcrumb");return Object(n["G"])(),Object(n["i"])(l,null,{default:Object(n["V"])((function(){return[(Object(n["G"])(!0),Object(n["k"])(n["b"],null,Object(n["L"])(r.path,(function(e,t){return Object(n["G"])(),Object(n["i"])(i,{href:e.url,key:t},{default:Object(n["V"])((function(){return[Object(n["m"])(Object(n["O"])(e.name),1)]})),_:2},1032,["href"])})),128)),Object(n["n"])(i,null,{default:Object(n["V"])((function(){return[Object(n["m"])(Object(n["O"])(r.leafName),1)]})),_:1})]})),_:1})}var c={props:{path:Array,leafName:String}},u=r("6b0d"),i=r.n(u);const l=i()(c,[["render",o]]);t["a"]=l}});