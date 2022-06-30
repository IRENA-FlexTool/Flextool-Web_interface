(function(e){function t(t){for(var n,u,o=t[0],i=t[1],l=t[2],d=0,b=[];d<o.length;d++)u=o[d],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&b.push(a[u][0]),a[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={results:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var s=i;c.push([6,"chunk-vendors"]),r()})({"0274":function(e,t,r){"use strict";var n=r("7a23");function a(e,t,r,a,c,u){var o=Object(n["N"])("n-spin"),i=Object(n["N"])("n-result");return"loading"===r.state?(Object(n["G"])(),Object(n["i"])(o,{key:0})):"error"===r.state?(Object(n["G"])(),Object(n["i"])(i,{key:1,status:"error",title:"Error",description:r.errorMessage},null,8,["description"])):"waiting"===r.state?Object(n["M"])(e.$slots,"waiting",{key:2}):Object(n["M"])(e.$slots,"default",{key:3})}var c={props:{state:{type:String,required:!0},errorMessage:{type:String,required:!1,default:""}},state:{loading:"loading",waiting:"waiting",ready:"ready",error:"error"}},u=r("6b0d"),o=r.n(u);const i=o()(c,[["render",a]]);t["a"]=i},2225:function(e,t,r){"use strict";r("a2d1")},2880:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("f2bf"),a=r("5333"),c=r("7a23");function u(e,t,r,n,a,u){var o=Object(c["N"])("page-path"),i=Object(c["N"])("results-scenario-list"),l=Object(c["N"])("n-layout-sider"),s=Object(c["N"])("results-summary"),d=Object(c["N"])("results-output-directory"),b=Object(c["N"])("results-plots"),f=Object(c["N"])("n-layout-content"),j=Object(c["N"])("n-layout"),p=Object(c["N"])("page");return Object(c["G"])(),Object(c["i"])(p,{name:"Results","index-url":r.indexUrl,"project-url":r.projectUrl,"edit-url":r.editUrl,"run-url":r.runUrl,"results-url":r.resultsUrl,"logout-url":r.logoutUrl,"logo-url":r.logoUrl},{header:Object(c["V"])((function(){return[Object(c["n"])(o,{path:[{name:"Projects",url:r.indexUrl},{name:r.projectName,url:r.projectUrl}],"leaf-name":"Results"},null,8,["path"])]})),default:Object(c["V"])((function(){return[Object(c["n"])(j,{id:"main-layout","has-sider":"",position:"absolute"},{default:Object(c["V"])((function(){return[Object(c["n"])(l,null,{default:Object(c["V"])((function(){return[Object(c["n"])(i,{"project-id":r.projectId,"run-url":r.runUrl,"summary-url":r.summaryUrl,onScenarioSelect:n.loadResults},null,8,["project-id","run-url","summary-url","onScenarioSelect"])]})),_:1}),Object(c["n"])(f,{"content-style":"margin-left: 1em; margin-right: 1em"},{default:Object(c["V"])((function(){return[Object(c["n"])(s,{"project-id":r.projectId,"summary-url":r.summaryUrl,ref:"summary"},null,8,["project-id","summary-url"]),Object(c["n"])(d,{"project-id":r.projectId,"summary-url":r.summaryUrl,ref:"outputDirectory"},null,8,["project-id","summary-url"]),Object(c["n"])(b,{"project-id":r.projectId,"analysis-url":r.analysisUrl,"summary-url":r.summaryUrl,ref:"plots"},null,8,["project-id","analysis-url","summary-url"])]})),_:1})]})),_:1})]})),_:1},8,["index-url","project-url","edit-url","run-url","results-url","logout-url","logo-url"])}r("a9e3");var o=r("9973"),i=r("c46e"),l=Object(c["m"])("No data to show.");function s(e,t,r,n,a,u){var o=Object(c["N"])("plot-figure"),i=Object(c["N"])("keyed-card"),s=Object(c["N"])("n-grid-item"),d=Object(c["N"])("n-grid"),b=Object(c["N"])("n-text"),f=Object(c["N"])("fetchable");return Object(c["G"])(),Object(c["i"])(f,{state:n.state,"error-message":n.errorMessage},{default:Object(c["V"])((function(){return[n.plotBoxes.length>0?(Object(c["G"])(),Object(c["i"])(d,{key:0,cols:"1 l:2",responsive:"screen"},{default:Object(c["V"])((function(){return[(Object(c["G"])(!0),Object(c["k"])(c["b"],null,Object(c["L"])(n.plotBoxes,(function(e,t){return Object(c["G"])(),Object(c["i"])(s,{key:t},{default:Object(c["V"])((function(){return[Object(c["n"])(i,{title:e.title,fingerprint:t,onClose:n.dropPlot},{default:Object(c["V"])((function(){return[Object(c["n"])(o,{identifier:t,"data-table":e.data,"index-names":e.indexNames,"entity-class":e.entityClass,"parameter-name":e.parameterName,"project-id":r.projectId,"analysis-url":r.analysisUrl},null,8,["identifier","data-table","index-names","entity-class","parameter-name","project-id","analysis-url"])]})),_:2},1032,["title","fingerprint","onClose"])]})),_:2},1024)})),128))]})),_:1})):(Object(c["G"])(),Object(c["i"])(b,{key:1},{default:Object(c["V"])((function(){return[l]})),_:1}))]})),_:1},8,["state","error-message"])}var d=r("c7eb"),b=r("3835"),f=r("2909"),j=r("b85c"),p=r("1da1"),O=(r("a434"),r("d3b7"),r("ddb0"),r("4ec9"),r("3ca3"),r("d81d"),r("b0c0"),r("99af"),r("53ca"));r("d9e2");function y(e){return e.data.map((function(e,t){return[t+1,e]}))}function m(e,t,r){if(null===r||"object"!==Object(O["a"])(r))e.push([t,r]);else{var n,a=v(r.data),c=Object(j["a"])(a);try{for(c.s();!(n=c.n()).done;){var u=n.value;e.push([t].concat(Object(f["a"])(u)))}}catch(o){c.e(o)}finally{c.f()}}}function v(e){var t=new Array;if(Array.isArray(e)){var r,n=Object(j["a"])(e);try{for(n.s();!(r=n.n()).done;){var a=r.value,c=a[0],u=a[1];m(t,c,u)}}catch(l){n.e(l)}finally{n.f()}}else for(var o in e){var i=e[o];m(t,o,i)}return t}function g(e){return v(e.data)}function h(e){return void 0!==e.index_name?[e.index_name]:["x"]}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(r+=1,t.length<r&&t.push(void 0!==e.index_name?e.index_name:"x"),Array.isArray(e.data)){var n,a=Object(j["a"])(e.data);try{for(a.s();!(n=a.n()).done;){var c=n.value,u=c[1];null!==u&&"object"===Object(O["a"])(u)&&(t=x(u,t,r))}}catch(l){a.e(l)}finally{a.f()}}else for(var o in e.data){var i=e.data[o];null!==i&&"object"===Object(O["a"])(i)&&(t=x(i,t,r))}return t}function N(e,t){if("array"===t)return{indexNames:h(e),table:y(e)};if("map"===t)return{indexNames:x(e),table:g(e)};throw new Error("Unknown parameter value type.")}var S=r("315d"),w=(r("a4d3"),r("e01a"),Symbol("object class type")),_=Symbol("object class type");function U(e){switch(e){case 1:return w;case 2:return _;default:throw Error("Unknown entity class type id")}}var k=r("0274");function V(e,t,r,n,a,u){var o=Object(c["N"])("n-card");return Object(c["G"])(),Object(c["i"])(o,{closable:"",title:r.title,onClose:n.emitClose},{default:Object(c["V"])((function(){return[Object(c["M"])(e.$slots,"default")]})),_:3},8,["title","onClose"])}var q={props:{fingerprint:{type:[Number,String],required:!0},title:{type:String,required:!1}},emits:["close"],setup:function(e,t){return{emitClose:function(){t.emit("close",e.fingerprint)}}}},I=r("6b0d"),E=r.n(I);const G=E()(q,[["render",V]]);var M=G,C=Object(c["m"])(" Download CSV "),P=["id"];function T(e,t,r,n,a,u){var o=Object(c["N"])("n-select"),i=Object(c["N"])("n-button"),l=Object(c["N"])("n-space");return Object(c["G"])(),Object(c["i"])(l,{vertical:""},{default:Object(c["V"])((function(){return[Object(c["n"])(l,null,{default:Object(c["V"])((function(){return[Object(c["n"])(o,{value:n.plotType,"onUpdate:value":[t[0]||(t[0]=function(e){return n.plotType=e}),n.replot],options:n.plotTypeOptions,"consistent-menu-width":!1,size:"small"},null,8,["value","options","onUpdate:value"]),Object(c["n"])(i,{onClick:n.prepareDownload,loading:n.preparingDownload,disabled:n.downloadButtonDisabled,size:"small"},{default:Object(c["V"])((function(){return[C]})),_:1},8,["onClick","loading","disabled"])]})),_:1}),Object(c["l"])("div",{id:n.plotId},null,8,P)]})),_:1})}var D=r("7317"),J=r("1c68"),F=r.n(J);r("fb6a"),r("a15b"),r("cb29"),r("6062"),r("159b"),r("33d1"),r("ea98");function z(e,t){var r=e.slice(0,t),n=e.slice(t+1,-1);return r.concat(n).join(" | ")}function A(e,t){var r=new Map,n=new Set,a=new Set;return e.forEach((function(e){var c=e.at(-1),u=e[t];a.add(u);var o=z(e,t);n.add(o);var i=r.get(u);void 0===i&&(i=new Map,r.set(u,i)),i.set(o,c)})),{namesSize:n.size,xSize:a.size,grouped:r}}function R(e,t,r){var n=A(e,t),a=new Map;return n.grouped.forEach((function(e,t){e.forEach((function(e,n){var c=a.get(n);void 0===c&&(c={x:[],y:[],name:n,type:r},a.set(n,c)),c.x.push(t),c.y.push(e)}))})),Object(f["a"])(a.values())}function L(e,t,r){var n=0;e&&(n=e[0].length-2);var a=R(e,n,"scatter"),c={xaxis:{title:t[t.length-1]}},u={responsive:!0};F.a.newPlot(r,a,c,u)}function B(e,t,r){var n=0;e&&(n=e[0].length-2);var a=R(e,n,"bar"),c={xaxis:{title:t[t.length-1]}},u={responsive:!0};F.a.newPlot(r,a,c,u)}function $(e,t,r){var n=0;e&&(n=e[0].length-2);var a=R(e,n,"bar"),c={xaxis:{title:t[t.length-1]},barmode:"stack"},u={responsive:!0};F.a.newPlot(r,a,c,u)}function K(e,t,r){return H.apply(this,arguments)}function H(){return H=Object(p["a"])(Object(d["a"])().mark((function e(t,r,n){var a;return Object(d["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.type!==_){e.next=7;break}return e.next=3,Object(S["g"])("relationship class object classes?",r,n,{relationship_class_id:t.id});case 3:return a=e.sent,e.abrupt("return",a.object_classes);case 7:return e.abrupt("return",[t.name]);case 8:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function X(e,t,r,n){switch(e.value){case"bar":B(t,r,n);break;case"stacked bar":$(t,r,n);break;case"scatter":L(t,r,n);break;default:throw Error("Unknown plot type '".concat(e.value,"'"))}}var Y={props:{identifier:{type:[String,Number],required:!0},dataTable:{type:Array,required:!0},indexNames:{type:Array,required:!0},entityClass:{type:Object,required:!0},parameterName:{type:String,required:!0},projectId:{type:Number,required:!0},analysisUrl:{type:String,required:!0}},setup:function(e){var t="plot-".concat(e.identifier),a=Object(n["e"])("scatter"),c=[{label:"Scatter",value:"scatter"},{label:"Bars",value:"bar"},{label:"Stacked bars",value:"stacked bar"}],u=Object(n["e"])(!1),o=Object(D["a"])();return Object(n["d"])((function(){X(a,e.dataTable,e.indexNames,t)})),{plotId:t,plotType:a,plotTypeOptions:c,preparingDownload:u,downloadButtonDisabled:Object(n["a"])((function(){return u.value})),prepareDownload:function(){u.value=!0,K(e.entityClass,e.projectId,e.analysisUrl).then((function(t){var n=r("094f").createArrayCsvStringifier,a=n({header:[].concat(Object(f["a"])(t),Object(f["a"])(e.indexNames),["y"])}),c=a.getHeaderString(),u=a.stringifyRecords(e.dataTable),o=document.createElement("a");o.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(c+u)),o.setAttribute("download","".concat(e.entityClass.name,"_").concat(e.parameterName,".csv")),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)})).catch((function(e){o.error(e.message)})).finally((function(){u.value=!1}))},replot:function(){X(a,e.dataTable,e.indexNames,t)}}}};const Q=E()(Y,[["render",T]]);var W=Q;function Z(e,t,r,n,a,c,u,o){return ee.apply(this,arguments)}function ee(){return ee=Object(p["a"])(Object(d["a"])().mark((function e(t,r,n,a,c,u,o,i){return Object(d["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.delegateYield(Object(d["a"])().mark((function e(){var o,i,l,s,p,O,y,m,v,g,h,x,S,w,_,U,k,V,q,I,E,G,M,C,P,T,D,J,F,z,A,R,L;return Object(d["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return o=e.sent,e.next=5,r;case 5:return i=e.sent,e.next=8,n;case 8:return l=e.sent,e.next=11,a;case 11:return s=e.sent,e.next=14,c;case 14:p=e.sent,O=new Map,y=Object(j["a"])(p);try{for(y.s();!(m=y.n()).done;){v=m.value,g=O.get(v.entity_class_id),void 0===g&&(g=new Map,O.set(v.entity_class_id,g)),h=s.get(v.parameter_definition_id),x=g.get(h),void 0===x&&(x={indexNames:void 0,table:[]},g.set(h,x)),S=v.object_id,w=void 0,null===S?(_=l.get(v.relationship_id),w=_.map((function(e){return i.get(e)}))):w=[i.get(S)],U=JSON.parse(v.value),k=void 0,k=null!==v.type?N(U,v.type):{indexNames:[],table:[[U]]},V=Object(j["a"])(k.table);try{for(V.s();!(q=V.n()).done;)I=q.value,x.table.push([].concat(Object(f["a"])(w),Object(f["a"])(I)))}catch(d){V.e(d)}finally{V.f()}x.indexNames=k.indexNames}}catch(d){y.e(d)}finally{y.f()}E=Object(j["a"])(O);try{for(E.s();!(G=E.n()).done;){M=Object(b["a"])(G.value,2),C=M[0],P=M[1],T=o.get(C),D={id:C,name:T.name,type:T.type},J=Object(j["a"])(P);try{for(J.s();!(F=J.n()).done;)z=Object(b["a"])(F.value,2),A=z[0],R=z[1],L="".concat(T.name," - ").concat(A),u.value.push({title:L,entityClass:D,parameterName:A,indexNames:R.indexNames,data:R.table})}catch(d){J.e(d)}finally{J.f()}}}catch(d){E.e(d)}finally{E.f()}case 20:case"end":return e.stop()}}),e)}))(),"t0",2);case 2:e.next=9;break;case 4:return e.prev=4,e.t1=e["catch"](0),o.value=k["a"].state.error,i.value=e.t1.message,e.abrupt("return");case 9:o.value=k["a"].state.ready;case 10:case"end":return e.stop()}}),e,null,[[0,4]])}))),ee.apply(this,arguments)}var te={props:{projectId:{type:Number,required:!0},analysisUrl:{type:String,required:!0},summaryUrl:{type:String,required:!0}},components:{fetchable:k["a"],"keyed-card":M,"plot-figure":W},setup:function(e){var t=Object(n["e"])([]),r=Object(n["e"])(k["a"].state.waiting),a=Object(n["e"])("");return{plotBoxes:t,state:r,errorMessage:a,dropPlot:function(e){t.value.splice(e,1)},loadPlots:function(n){r.value=k["a"].state.loading,t.value.length=0;var c=Object(S["l"])(e.projectId,e.summaryUrl,n.scenarioExecutionId).then((function(t){return null===t.alternative_id?{values:[]}:Object(S["g"])("parameter values?",e.projectId,e.analysisUrl,{alternative_id:t.alternative_id})})).then((function(e){return e.values})),u=Object(S["g"])("entity classes?",e.projectId,e.analysisUrl).then((function(e){return new Map(e.classes.map((function(e){var t={name:e.name,type:U(e.type_id)};return[e.id,t]})))})),o=Object(S["g"])("objects?",e.projectId,e.analysisUrl).then((function(e){return new Map(e.objects.map((function(e){return[e.id,e.name]})))})),i=Object(S["g"])("relationships?",e.projectId,e.analysisUrl).then((function(e){var t,r=new Map,n=Object(j["a"])(e.relationships);try{for(n.s();!(t=n.n()).done;){var a=t.value,c=r.get(a.id);void 0===c&&(c=[],r.set(a.id,c)),c.push(a.object_id)}}catch(u){n.e(u)}finally{n.f()}return r})),l=Object(S["g"])("parameter definitions?",e.projectId,e.analysisUrl).then((function(e){return new Map(e.definitions.map((function(e){return[e.id,e.name]})))}));Z(u,o,i,l,c,t,r,a)}}}};const re=E()(te,[["render",s]]);var ne=re,ae=Object(c["m"])(" No scenario results found. Go to the "),ce=Object(c["m"])("Run page"),ue=Object(c["m"])(" to solve the model. ");function oe(e,t,r,n,a,u){var o=Object(c["N"])("n-a"),i=Object(c["N"])("n-p"),l=Object(c["N"])("n-tree"),s=Object(c["N"])("n-thing"),d=Object(c["N"])("n-list-item"),b=Object(c["N"])("n-list"),f=Object(c["N"])("fetchable");return Object(c["G"])(),Object(c["i"])(f,{state:n.state,"error-message":n.errorMessage},{default:Object(c["V"])((function(){return[n.hasScenarios?(Object(c["G"])(),Object(c["i"])(b,{key:1},{default:Object(c["V"])((function(){return[(Object(c["G"])(!0),Object(c["k"])(c["b"],null,Object(c["L"])(n.scenarios,(function(e,t){return Object(c["G"])(),Object(c["i"])(d,{key:t},{default:Object(c["V"])((function(){return[Object(c["n"])(s,{title:e.name},{default:Object(c["V"])((function(){return[Object(c["n"])(l,{data:e.executions,selectable:"","selected-keys":e.selected,"onUpdate:selectedKeys":n.emitScenarioSelect},null,8,["data","selected-keys","onUpdate:selectedKeys"])]})),_:2},1032,["title"])]})),_:2},1024)})),128))]})),_:1})):(Object(c["G"])(),Object(c["i"])(i,{key:0},{default:Object(c["V"])((function(){return[ae,Object(c["n"])(o,{href:r.runUrl},{default:Object(c["V"])((function(){return[ce]})),_:1},8,["href"]),ue]})),_:1}))]})),_:1},8,["state","error-message"])}var ie={props:{projectId:{type:Number,required:!0},runUrl:{type:String,required:!0},summaryUrl:{type:String,required:!0}},emits:["scenarioSelect"],components:{fetchable:k["a"]},setup:function(e,t){var r=Object(n["e"])([]),a=Object(n["e"])(k["a"].state.loading),c=Object(n["e"])(""),u=Object(n["a"])((function(){return r.value.length>0}));return Object(n["d"])((function(){Object(S["h"])(e.projectId,e.summaryUrl).then((function(e){var t=Intl.DateTimeFormat([],{dateStyle:"short",timeStyle:"short"});for(var n in e.scenarios){var c,u=[],o=Object(j["a"])(e.scenarios[n]);try{for(o.s();!(c=o.n()).done;){var i=c.value;u.push({timeStamp:new Date(i.time_stamp),scenarioExecutionId:i.scenario_execution_id})}}catch(O){o.e(O)}finally{o.f()}for(var l=[],s=0;s<u.length;++s){var d=u[s],b=t.format(d.timeStamp),f=0==s?b.concat(" (latest)"):b;l.push({label:f,key:d.scenarioExecutionId,scenario:n})}var p={name:n,executions:l,selected:[]};r.value.push(p)}a.value=k["a"].state.ready})).catch((function(e){c.value=e.message,a.value=k["a"].state.error}))})),{scenarios:r,hasScenarios:u,state:a,errorMessage:c,emitScenarioSelect:function(e,n){if(0!==e.length){var a,c=Object(j["a"])(r.value);try{for(c.s();!(a=c.n()).done;){var u,o=a.value,i=!1,l=Object(j["a"])(o.executions);try{for(l.s();!(u=l.n()).done;){var s=u.value;if(s.key===e[0]){o.selected=[e[0]],i=!0;break}}}catch(b){l.e(b)}finally{l.f()}i||(o.selected.length=0)}}catch(b){c.e(b)}finally{c.f()}var d=n[0];t.emit("scenarioSelect",{scenario:d.scenario,scenarioExecutionId:d.key})}}}}};const le=E()(ie,[["render",oe]]);var se=le,de=Object(c["m"])("Emissions");function be(e,t,r,n,a,u){var o=Object(c["N"])("n-text"),i=Object(c["N"])("n-th"),l=Object(c["N"])("n-tr"),s=Object(c["N"])("n-tbody"),d=Object(c["N"])("n-table"),b=Object(c["N"])("n-list-item"),f=Object(c["N"])("n-list"),j=Object(c["N"])("n-space"),p=Object(c["N"])("fetchable");return Object(c["G"])(),Object(c["i"])(p,{state:n.state,"error-message":n.errorMessage},{default:Object(c["V"])((function(){return[Object(c["n"])(j,{vertical:""},{default:Object(c["V"])((function(){return[Object(c["n"])(o,{strong:""},{default:Object(c["V"])((function(){return[Object(c["m"])(Object(c["O"])(n.title),1)]})),_:1}),Object(c["n"])(f,null,{default:Object(c["V"])((function(){return[(Object(c["G"])(!0),Object(c["k"])(c["b"],null,Object(c["L"])(n.summaries,(function(e,t){return Object(c["G"])(),Object(c["i"])(b,{key:t},{default:Object(c["V"])((function(){return[Object(c["n"])(o,{type:"info"},{default:Object(c["V"])((function(){return[Object(c["m"])("Solve "+Object(c["O"])(e.solve),1)]})),_:2},1024),Object(c["n"])(d,{bordered:!1,size:"small"},{default:Object(c["V"])((function(){return[Object(c["n"])(s,null,{default:Object(c["V"])((function(){return[(Object(c["G"])(!0),Object(c["k"])(c["b"],null,Object(c["L"])(e.solveParameters,(function(e,t){return Object(c["G"])(),Object(c["i"])(l,{key:t},{default:Object(c["V"])((function(){return[Object(c["n"])(i,null,{default:Object(c["V"])((function(){return[Object(c["m"])(Object(c["O"])(e.name),1)]})),_:2},1024),Object(c["n"])(i,null,{default:Object(c["V"])((function(){return[Object(c["m"])(Object(c["O"])(e.value),1)]})),_:2},1024),Object(c["n"])(i,null,{default:Object(c["V"])((function(){return[Object(c["m"])(Object(c["O"])(e.description),1)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:2},1024)]})),_:2},1024),Object(c["n"])(o,{type:"info"},{default:Object(c["V"])((function(){return[de]})),_:1}),Object(c["n"])(d,{bordered:!1,size:"small"},{default:Object(c["V"])((function(){return[Object(c["n"])(s,null,{default:Object(c["V"])((function(){return[(Object(c["G"])(!0),Object(c["k"])(c["b"],null,Object(c["L"])(e.emissionsParameters,(function(e,t){return Object(c["G"])(),Object(c["i"])(l,{key:t},{default:Object(c["V"])((function(){return[Object(c["n"])(i,null,{default:Object(c["V"])((function(){return[Object(c["m"])(Object(c["O"])(e.name),1)]})),_:2},1024),Object(c["n"])(i,null,{default:Object(c["V"])((function(){return[Object(c["m"])(Object(c["O"])(e.value),1)]})),_:2},1024),Object(c["n"])(i,null,{default:Object(c["V"])((function(){return[Object(c["m"])(Object(c["O"])(e.description),1)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:2},1024)]})),_:2},1024),Object(c["n"])(o,{type:"info"},{default:Object(c["V"])((function(){return[Object(c["m"])(Object(c["O"])(e.issueTitle),1)]})),_:2},1024),Object(c["n"])(d,{bordered:!1,size:"small"},{default:Object(c["V"])((function(){return[Object(c["n"])(s,null,{default:Object(c["V"])((function(){return[(Object(c["G"])(!0),Object(c["k"])(c["b"],null,Object(c["L"])(e.issues,(function(e,t){return Object(c["G"])(),Object(c["i"])(l,{key:t},{default:Object(c["V"])((function(){return[Object(c["n"])(i,null,{default:Object(c["V"])((function(){return[Object(c["m"])(Object(c["O"])(e.type),1)]})),_:2},1024),Object(c["n"])(i,null,{default:Object(c["V"])((function(){return[Object(c["m"])(Object(c["O"])(e.node),1)]})),_:2},1024),Object(c["n"])(i,null,{default:Object(c["V"])((function(){return[Object(c["m"])(Object(c["O"])(e.solve),1)]})),_:2},1024),Object(c["n"])(i,null,{default:Object(c["V"])((function(){return[Object(c["m"])(Object(c["O"])(e.value),1)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1})]})),_:1})]})),_:1},8,["state","error-message"])}function fe(e){var t=function(){return{solve:null,solveParameters:[],emissionsParameters:[],issueTitle:null,issues:[]}},r=[],n=0,a=t(),c=!1;return e.forEach((function(e,u){if(c||(r.push(a),c=!0),0===e.length)++n,4===n&&(n=0,a=t(),c=!1);else if(0===n)if("Solve"===e[0])a.solve=e[1];else{var o={name:e[0],value:e[1],description:3===e.length?e[2]:""};a.solveParameters.push(o)}else if(1===n){if("Emissions"!==e[0]){var i={name:e[0],value:e[1],description:3===e.length?e[2]:""};a.emissionsParameters.push(i)}}else if(2===n)if(1===e.length)a.issueTitle=e[0];else{var l={type:e[0],node:e[1],solve:e[2],value:e[3]};a.issues.push(l)}})),r}var je={props:{projectId:{type:Number,required:!0},summaryUrl:{type:String,required:!0}},components:{fetchable:k["a"]},setup:function(e){var t=Object(n["e"])(""),r=Object(n["e"])([]),a=Object(n["e"])(k["a"].state.waiting),c=Object(n["e"])("");return{title:t,summaries:r,state:a,errorMessage:c,loadSummary:function(n){a.value=k["a"].state.loading,Object(S["m"])(e.projectId,e.summaryUrl,n.scenarioExecutionId).then((function(e){var n=e.summary;if(0!==n.length){var a=n.splice(0,2);t.value=a[0][0],0!==n.length&&(r.value=fe(n))}})).catch((function(e){c.value=e.message,a.value=k["a"].state.error})).finally((function(){a.value===k["a"].state.loading&&(a.value=k["a"].state.ready)}))}}}};const pe=E()(je,[["render",be]]);var Oe=pe,ye=Object(c["m"])(" Copy to clipboard ");function me(e,t,r,n,a,u){var o=Object(c["N"])("n-text"),i=Object(c["N"])("n-button"),l=Object(c["N"])("n-space"),s=Object(c["N"])("n-thing"),d=Object(c["N"])("fetchable");return Object(c["G"])(),Object(c["i"])(d,{state:n.state,"error-message":n.errorMessage},{default:Object(c["V"])((function(){return[Object(c["n"])(s,{title:"Output directory for .csv files"},{default:Object(c["V"])((function(){return[Object(c["n"])(l,null,{default:Object(c["V"])((function(){return[Object(c["n"])(o,{code:""},{default:Object(c["V"])((function(){return[Object(c["m"])(Object(c["O"])(n.outputDirectory),1)]})),_:1}),Object(c["n"])(i,{size:"tiny",onClick:n.copyDirectoryToClipboard},{default:Object(c["V"])((function(){return[ye]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["state","error-message"])}function ve(e,t,r,n,a,c){a.value=k["a"].state.loading,Object(S["j"])(e,t,r).then((function(e){n.value=e.directory,a.value=k["a"].state.ready})).catch((function(e){a.value=k["a"].state.error,c.value=e.message}))}var ge={props:{projectId:{type:Number,required:!0},summaryUrl:{type:String,required:!0}},components:{fetchable:k["a"]},setup:function(e){var t=Object(n["e"])(null),r=Object(n["e"])(k["a"].state.waiting),a=Object(n["e"])("");return{outputDirectory:t,state:r,errorMessage:a,copyDirectoryToClipboard:function(){navigator.clipboard.writeText(t.value)},loadDirectory:function(n){ve(e.projectId,e.summaryUrl,n.scenarioExecutionId,t,r,a)}}}};const he=E()(ge,[["render",me]]);var xe=he,Ne={props:{indexUrl:{type:String,required:!0},editUrl:{type:String,required:!0},projectName:{type:String,required:!0},projectUrl:{type:String,required:!0},projectId:{type:Number,required:!0},runUrl:{type:String,required:!0},resultsUrl:{type:String,required:!0},analysisUrl:{type:String,required:!0},summaryUrl:{type:String,required:!0},logoutUrl:{type:String,required:!0},logoUrl:{type:String,required:!0}},components:{page:o["a"],"page-path":i["a"],"results-plots":ne,"results-scenario-list":se,"results-summary":Oe,"results-output-directory":xe},setup:function(){var e=Object(n["e"])(null),t=Object(n["e"])(null),r=Object(n["e"])(null);return{summary:e,outputDirectory:t,plots:r,loadResults:function(n){e.value.loadSummary(n),t.value.loadDirectory(n),r.value.loadPlots(n)}}}};r("71aa");const Se=E()(Ne,[["render",u]]);var we=Se,_e=n["b"]({});_e.use(a["a"]),_e.component("results-app",we),_e.mount("#results-app")},"315d":function(e,t,r){"use strict";r.d(t,"g",(function(){return s})),r.d(t,"b",(function(){return d})),r.d(t,"k",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return l})),r.d(t,"f",(function(){return b})),r.d(t,"e",(function(){return f})),r.d(t,"a",(function(){return j})),r.d(t,"i",(function(){return p})),r.d(t,"h",(function(){return m})),r.d(t,"m",(function(){return O})),r.d(t,"j",(function(){return y})),r.d(t,"l",(function(){return v}));var n=r("5530");r("ac1f"),r("1276"),r("498a"),r("e9c4"),r("d3b7"),r("d9e2"),r("99af");function a(e){var t=null;if(document.cookie&&""!==document.cookie)for(var r=document.cookie.split(";"),n=0;n<r.length;n++){var a=r[n].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}var c=a("csrftoken");function u(){return{method:"POST",credentials:"same-origin",headers:{"X-CSRFToken":c,"Content-Type":"application/json"}}}function o(e){var t=u();return t["body"]=JSON.stringify({type:"project list?"}),fetch(e,t).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to load project list: ".concat(e))}))}))}function i(e,t){var r=u();return r["body"]=JSON.stringify({type:"create project?",name:e}),fetch(t,r).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to create project: ".concat(e))}))}))}function l(e,t){var r=u();return r["body"]=JSON.stringify({type:"destroy project?",id:e}),fetch(t,r).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to delete project: ".concat(e))}))}))}function s(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=u();return c["body"]=JSON.stringify(Object(n["a"])({type:e,projectId:t},a)),fetch(r,c).then((function(t){return t.ok?t.json():t.text().then((function(t){throw new Error("Failed to fetch ".concat(e,": ").concat(t))}))}))}function d(e,t,r,a){var c=u();return c.body=JSON.stringify(Object(n["a"])({type:"commit",projectId:r,message:t},e)),fetch(a,c).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))}))}function b(e,t){var r=u();return r.body=JSON.stringify({type:"current execution?",projectId:e}),fetch(t,r).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to fetch current run: ".concat(e))}))}))}function f(e,t,r){var n=u();return n["body"]=JSON.stringify({type:"execute?",projectId:e,scenarios:r}),fetch(t,n).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to execute: ".concat(e))}))}))}function j(e,t){var r=u();return r["body"]=JSON.stringify({type:"abort?",projectId:e}),fetch(t,r).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to abort execution: ".concat(e))}))}))}function p(e,t){var r=u();return r["body"]=JSON.stringify({type:"briefing?",projectId:e}),fetch(t,r).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to fetch execution status: ".concat(e))}))}))}function O(e,t,r){var n=u();return n.body=JSON.stringify({type:"summary?",projectId:e,scenarioExecutionId:r}),fetch(t,n).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to load summary: ".concat(e))}))}))}function y(e,t,r){var n=u();return n.body=JSON.stringify({type:"output directory?",projectId:e,scenarioExecutionId:r}),fetch(t,n).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to load output directory path: ".concat(e))}))}))}function m(e,t){var r=u();return r.body=JSON.stringify({type:"scenario list?",projectId:e}),fetch(t,r).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to load scenarios: ".concat(e))}))}))}function v(e,t,r){var n=u();return n.body=JSON.stringify({type:"result alternative?",projectId:e,scenarioExecutionId:r}),fetch(t,n).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error("Failed to result alternative: ".concat(e))}))}))}},"40c7":function(e,t,r){},6:function(e,t,r){e.exports=r("2880")},"71aa":function(e,t,r){"use strict";r("40c7")},9973:function(e,t,r){"use strict";r("b0c0");var n=r("7a23"),a={class:"page-content"},c={class:"page-content"};function u(e,t,r,u,o,i){var l=Object(n["N"])("navigation-menu"),s=Object(n["N"])("n-card"),d=Object(n["N"])("n-layout-header"),b=Object(n["N"])("n-layout");return Object(n["G"])(),Object(n["i"])(b,{position:"absolute"},{default:Object(n["V"])((function(){return[Object(n["n"])(d,null,{default:Object(n["V"])((function(){return[Object(n["n"])(s,{size:"small"},{default:Object(n["V"])((function(){return[Object(n["n"])(l,{current:r.name,"index-url":r.indexUrl,"project-url":r.projectUrl,"edit-url":r.editUrl,"run-url":r.runUrl,"results-url":r.resultsUrl,"logout-url":r.logoutUrl,"logo-url":r.logoUrl},null,8,["current","index-url","project-url","edit-url","run-url","results-url","logout-url","logo-url"])]})),_:1}),Object(n["l"])("div",a,[Object(n["M"])(e.$slots,"header")])]})),_:3}),Object(n["l"])("div",c,[Object(n["M"])(e.$slots,"default")])]})),_:3})}var o=Object(n["m"])(" Log out ");function i(e,t,r,a,c,u){var i=Object(n["N"])("n-image"),l=Object(n["N"])("n-menu"),s=Object(n["N"])("n-space"),d=Object(n["N"])("n-button");return Object(n["G"])(),Object(n["i"])(s,{justify:"space-between",align:"baseline"},{default:Object(n["V"])((function(){return[Object(n["n"])(s,{align:"start"},{default:Object(n["V"])((function(){return[Object(n["n"])(i,{src:r.logoUrl,alt:"FlexTool",width:90,"preview-disabled":""},null,8,["src"]),Object(n["n"])(l,{"default-value":r.current,mode:"horizontal",options:a.links},null,8,["default-value","options"])]})),_:1}),Object(n["n"])(d,{onClick:a.logout},{default:Object(n["V"])((function(){return[o]})),_:1},8,["onClick"])]})),_:1})}var l=r("f2bf"),s=r("ac88");function d(e,t){return function(){return Object(l["c"])(s["a"],{href:t},(function(){return e}))}}function b(e){var t={Projects:e.indexUrl,"Manage project":e.projectUrl,"Edit model":e.editUrl,Run:e.runUrl,Results:e.resultsUrl},r=[];for(var n in t){var a=t[n],c=null!==a,u=c?d(n,a):n;r.push({label:u,key:n,disabled:!c})}return r}var f={props:{current:{type:String,required:!0},indexUrl:{type:String,required:!0},projectUrl:{type:String,required:!1,default:null},editUrl:{type:String,required:!1,default:null},runUrl:{type:String,required:!1,default:null},resultsUrl:{type:String,required:!1,default:null},logoutUrl:{type:String,required:!0},logoUrl:{type:String,required:!0}},setup:function(e){var t=Object(l["e"])(b(e)),r=Object(l["e"])(null);return{links:t,activeKey:r,logout:function(){location.assign(e.logoutUrl)}}}},j=r("6b0d"),p=r.n(j);const O=p()(f,[["render",i]]);var y=O,m={props:{name:{type:String,required:!0},indexUrl:{type:String,required:!0},projectUrl:{type:String,required:!1,default:null},editUrl:{type:String,required:!1,default:null},runUrl:{type:String,required:!1,default:null},resultsUrl:{type:String,required:!1,default:null},logoutUrl:{type:String,required:!0},logoUrl:{type:String,required:!0}},components:{"navigation-menu":y}};r("2225");const v=p()(m,[["render",u]]);t["a"]=v},a2d1:function(e,t,r){},c46e:function(e,t,r){"use strict";r("b0c0");var n=r("7a23");function a(e,t,r,a,c,u){var o=Object(n["N"])("n-breadcrumb-item"),i=Object(n["N"])("n-breadcrumb");return Object(n["G"])(),Object(n["i"])(i,null,{default:Object(n["V"])((function(){return[(Object(n["G"])(!0),Object(n["k"])(n["b"],null,Object(n["L"])(r.path,(function(e,t){return Object(n["G"])(),Object(n["i"])(o,{href:e.url,key:t},{default:Object(n["V"])((function(){return[Object(n["m"])(Object(n["O"])(e.name),1)]})),_:2},1032,["href"])})),128)),Object(n["n"])(o,null,{default:Object(n["V"])((function(){return[Object(n["m"])(Object(n["O"])(r.leafName),1)]})),_:1})]})),_:1})}var c={props:{path:Array,leafName:String}},u=r("6b0d"),o=r.n(u);const i=o()(c,[["render",a]]);t["a"]=i}});