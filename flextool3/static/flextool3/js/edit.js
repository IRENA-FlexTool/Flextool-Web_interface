(function(e){function t(t){for(var a,o,l=t[0],u=t[1],i=t[2],s=0,f=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={edit:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var d=u;c.push([1,"chunk-vendors"]),n()})({1:function(e,t,n){e.exports=n("8fc9")},"8fc9":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("f2bf"),r=n("5333"),c=n("7a23"),o=Object(c["i"])("Save");function l(e,t,n,a,r,l){var u=Object(c["F"])("n-button"),i=Object(c["F"])("n-space"),d=Object(c["F"])("n-layout-header"),s=Object(c["F"])("object-tree"),f=Object(c["F"])("n-layout-sider"),b=Object(c["F"])("parameter-value-table"),p=Object(c["F"])("n-layout-content"),j=Object(c["F"])("n-layout");return Object(c["y"])(),Object(c["h"])(j,null,{default:Object(c["L"])((function(){return[Object(c["j"])(d,null,{default:Object(c["L"])((function(){return[Object(c["j"])(i,{justify:"end"},{default:Object(c["L"])((function(){return[Object(c["j"])(u,{onClick:a.commitSession},{default:Object(c["L"])((function(){return[o]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),Object(c["j"])(j,{"has-sider":""},{default:Object(c["L"])((function(){return[Object(c["j"])(f,null,{default:Object(c["L"])((function(){return[Object(c["j"])(s,{"model-url":n.modelUrl,"project-id":n.projectId,onObjectClassSelected:a.showParametersForObjectClass},null,8,["model-url","project-id","onObjectClassSelected"])]})),_:1}),Object(c["j"])(p,null,{default:Object(c["L"])((function(){return[Object(c["j"])(b,{"model-url":n.modelUrl,"project-id":n.projectId,onValueUpdated:a.addUpdatedValue},null,8,["model-url","project-id","onValueUpdated"])]})),_:1})]})),_:1})]})),_:1})}var u=n("3835"),i=n("b85c"),d=n("d4ec"),s=n("bee2"),f=n("d5e4"),b=n("5364"),p=n("9bd1"),j=(n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("e9c4"),n("a9e3"),n("10d1"),n("7317"));function v(e,t,n,a,r,o){var l=Object(c["F"])("n-tree");return Object(c["y"])(),Object(c["h"])(l,{remote:"",selectable:"",data:a.data,"on-load":a.fetchChildren,"expanded-keys":a.expandedKeys,"onUpdate:expandedKeys":a.handleExpandedKeysChange,"selected-keys":a.selectedKeys,"onUpdate:selectedKeys":a.handleSelectedKeysChange},null,8,["data","on-load","expanded-keys","onUpdate:expandedKeys","selected-keys","onUpdate:selectedKeys"])}n("8ba4"),n("ac1f"),n("1276"),n("b0c0"),n("99af");var O=n("9406");function h(e,t){return O["a"]("object classes?",e,t).then((function(e){return e.classes}))}function m(e,t,n){return O["a"]("objects?",t,n,{object_class_id:e}).then((function(e){return e.objects}))}var y={props:{modelUrl:String,projectId:Number},emit:["objectClassSelected:classId"],setup:function(e,t){var n=Object(a["d"])([{label:"Classes",key:-1,isLeaf:!1}]),r=Object(a["d"])([-1]),c=Object(a["d"])([]);return{data:n,expandedKeys:r,handleExpandedKeysChange:function(e){r.value=e},selectedKeys:c,handleSelectedKeysChange:function(e,n){var a=e[0];if(-1===a)c.value.length=0;else if(Number.isInteger(a))c.value=e,t.emit("objectClassSelected",a);else{var r=n[0],o=r.key.split(":"),l=parseInt(o[0]);l!==c[0]&&(c.value=[l],t.emit("objectClassSelected",l))}},fetchChildren:function(t){return-1===t.key?h(e.projectId,e.modelUrl).then((function(e){var n,a=[],r=Object(i["a"])(e);try{for(r.s();!(n=r.n()).done;){var c=n.value;a.push({label:c.name,key:c.id,isLeaf:!1})}}catch(o){r.e(o)}finally{r.f()}t.children=a})):m(t.key,e.projectId,e.modelUrl).then((function(e){var n,a=[],r=Object(i["a"])(e);try{for(r.s();!(n=r.n()).done;){var c=n.value;a.push({label:c.name,key:"".concat(t.key,":").concat(c.id),isLeaf:!0})}}catch(o){r.e(o)}finally{r.f()}t.children=a}))}}}},g=n("6b0d"),k=n.n(g);const w=k()(y,[["render",v]]);var S=w;function U(e,t,n,a,r,o){var l=Object(c["F"])("n-data-table");return Object(c["y"])(),Object(c["h"])(l,{size:"small",columns:a.columns,data:a.data,loading:a.loading,"row-key":a.rowKey,"max-height":400},null,8,["columns","data","loading","row-key"])}var C=n("53ca"),_=(n("159b"),n("21e1")),x=n("b6e9"),I=n("48f1");function F(e){var t={title:"Class",key:"object_class_name"},n={title:"Object",key:"object_name"},r={title:"Parameter",key:"parameter_name"},c={title:"Alternative",key:"alternative_name"},o={title:"Value",key:"value",render:function(t){if(!t.type){var n=Object(C["a"])(t.value);return"number"==n?Object(a["b"])(_["a"],{showButton:!1,defaultValue:t.value}):Object(a["b"])(x["a"],{defaultValue:t.value,onChange:function(n){return e("valueUpdated",{value:n,id:t.id})}})}return Object(a["b"])(I["a"],{italic:!0},{default:function(){return t.type}})}};return[t,n,r,c,o]}function K(e,t){return O["a"]("object parameter values?",e,t).then((function(e){var t=e.values;return t.forEach((function(e){e.value=JSON.parse(e.value)})),t}))}var P={props:{modelUrl:String,projectId:Number,classId:Number},emit:["valueUpdated:data"],setup:function(e,t){var n=Object(a["d"])([]),r=Object(a["d"])(!0),c=Object(a["d"])(F(t.emit));return Object(a["c"])((function(){K(e.projectId,e.modelUrl).then((function(e){n.value=e,r.value=!1}))})),{data:n,columns:c,loading:r,rowKey:function(e){return e.id}}}};const L=k()(P,[["render",U]]);var N=L,V=new WeakMap,M=new WeakMap,J=function(){function e(){Object(d["a"])(this,e),Object(f["a"])(this,V,{writable:!0,value:void 0}),Object(f["a"])(this,M,{writable:!0,value:void 0}),Object(p["a"])(this,V,new Map),Object(p["a"])(this,M,!1)}return Object(s["a"])(e,[{key:"commit",value:function(e,t,n){if(Object(b["a"])(this,M))alert("Database commit in progress. Please try again later.");else{Object(p["a"])(this,M,!0);var a,r=O["c"](),c=[],o=Object(i["a"])(Object(b["a"])(this,V));try{for(o.s();!(a=o.n()).done;){var l=Object(u["a"])(a.value,2),d=l[0],s=l[1];c.push({id:d,value:s})}}catch(j){o.e(j)}finally{o.f()}r["body"]=JSON.stringify({type:"update values",projectId:e,updates:c});var f=this;fetch(t,r).then((function(e){f.commitFinished(),e.ok?(f.clearPendingUpdates(),n.success("Parameter values committed successfully.")):alert("Updating parameter values failed: server reported a bad request.")}))}}},{key:"commitFinished",value:function(){Object(p["a"])(this,M,!1)}},{key:"clearPendingUpdates",value:function(){Object(b["a"])(this,V).clear()}},{key:"updateValue",value:function(e,t){Object(b["a"])(this,V).set(e,t)}}]),e}(),T=new J,E={props:{modelUrl:String,projectId:Number},setup:function(e){var t=Object(j["a"])();return{addUpdatedValue:function(e){T.updateValue(e.id,e.value)},commitSession:function(){T.commit(e.projectId,e.modelUrl,t)},showParametersForObjectClass:function(e){console.log(e)}}},components:{"object-tree":S,"parameter-value-table":N}};const q=k()(E,[["render",l]]);var R=q,W=a["a"]({});W.use(r["a"]),W.component("editor-app",R),W.mount("#edit-app")},9406:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n("5530");n("ac1f"),n("1276"),n("498a"),n("e9c4"),n("d3b7");function r(){var e=document.querySelector("#script-data");return JSON.parse(e.textContent)}function c(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var r=n[a].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}var o=c("csrftoken");function l(){return{method:"POST",credentials:"same-origin",headers:{"X-CSRFToken":o,"Content-Type":"application/json"}}}function u(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=l();return c["body"]=JSON.stringify(Object(a["a"])({type:e,projectId:t},r)),fetch(n,c).then((function(e){if(!e.ok)throw new Error("Network response was not OK.");return e.json()}))}}});