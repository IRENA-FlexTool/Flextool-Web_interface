import{_,r as I,a,o as y,b as g,w as s,d as f,e as m,j as S,G as k,s as p,C as x,g as E,h as U,t as j,F as N}from"./_plugin-vue_export-helper-7747d506.js";function F(r,o){return()=>S(k,{href:o},()=>r)}function $(r){const o={Projects:r.indexUrl,"Manage project":r.projectUrl,"Edit model":r.editUrl,Run:r.runUrl,Results:r.resultsUrl},e=[];for(const t in o){const n=o[t],i=n!==null,u=i?F(t,n):t;e.push({label:u,key:t,disabled:!i})}return e}const v={props:{current:{type:String,required:!0},indexUrl:{type:String,required:!0},projectUrl:{type:String,required:!1,default:null},editUrl:{type:String,required:!1,default:null},runUrl:{type:String,required:!1,default:null},resultsUrl:{type:String,required:!1,default:null},logoutUrl:{type:String,required:!0},logoUrl:{type:String,required:!0}},setup(r){const o=$(r),e=I(null);return{links:o,activeKey:e,logout(){location.assign(r.logoutUrl)}}}};function O(r,o,e,t,n,i){const u=a("n-image"),l=a("n-menu"),d=a("n-space"),h=a("n-a"),b=a("n-divider"),w=a("n-button");return y(),g(d,{justify:"space-between",align:"baseline"},{default:s(()=>[f(d,{align:"start"},{default:s(()=>[f(u,{src:e.logoUrl,alt:"FlexTool",width:90,"preview-disabled":""},null,8,["src"]),f(l,{"default-value":e.current,mode:"horizontal",options:t.links},null,8,["default-value","options"])]),_:1}),f(d,{align:"baseline"},{default:s(()=>[f(h,{href:"https://irena-flextool.github.io/flextool/"},{default:s(()=>[m("User guide")]),_:1}),f(b,{vertical:""}),f(w,{onClick:t.logout},{default:s(()=>[m(" Log out ")]),_:1},8,["onClick"])]),_:1})]),_:1})}const J=_(v,[["render",O]]);const q={props:{name:{type:String,required:!0},indexUrl:{type:String,required:!0},projectUrl:{type:String,required:!1,default:null},editUrl:{type:String,required:!1,default:null},runUrl:{type:String,required:!1,default:null},resultsUrl:{type:String,required:!1,default:null},logoutUrl:{type:String,required:!0},logoUrl:{type:String,required:!0}},components:{"navigation-menu":J}},P={class:"page-content"},C={class:"page-content"};function R(r,o,e,t,n,i){const u=a("navigation-menu"),l=a("n-card"),d=a("n-layout-header"),h=a("n-layout");return y(),g(h,{position:"absolute"},{default:s(()=>[f(d,null,{default:s(()=>[f(l,{size:"small"},{default:s(()=>[f(u,{current:e.name,"index-url":e.indexUrl,"project-url":e.projectUrl,"edit-url":e.editUrl,"run-url":e.runUrl,"results-url":e.resultsUrl,"logout-url":e.logoutUrl,"logo-url":e.logoUrl},null,8,["current","index-url","project-url","edit-url","run-url","results-url","logout-url","logo-url"])]),_:1}),p("div",P,[x(r.$slots,"header")])]),_:3}),p("div",C,[x(r.$slots,"default")])]),_:3})}const A=_(q,[["render",R]]),L={props:{path:Array,leafName:String}};function V(r,o,e,t,n,i){const u=a("n-breadcrumb-item"),l=a("n-breadcrumb");return y(),g(l,null,{default:s(()=>[(y(!0),E(N,null,U(e.path,(d,h)=>(y(),g(u,{href:d.url,key:h},{default:s(()=>[m(j(d.name),1)]),_:2},1032,["href"]))),128)),f(u,null,{default:s(()=>[m(j(e.leafName),1)]),_:1})]),_:1})}const D=_(L,[["render",V]]);function B(r){let o=null;if(document.cookie&&document.cookie!==""){const e=document.cookie.split(";");for(let t=0;t<e.length;t++){const n=e[t].trim();if(n.substring(0,r.length+1)===r+"="){o=decodeURIComponent(n.substring(r.length+1));break}}}return o}const T=B("csrftoken");function c(){return{method:"POST",credentials:"same-origin",headers:{"X-CSRFToken":T,"Content-Type":"application/json"}}}function K(r){const o=c();return o.body=JSON.stringify({type:"project list?"}),fetch(r,o).then(function(e){return e.ok?e.json():e.text().then(function(t){throw new Error(`Failed to load project list: ${t}`)})})}function M(r,o){const e=c();return e.body=JSON.stringify({type:"create project?",name:r}),fetch(o,e).then(function(t){return t.ok?t.json():t.text().then(function(n){throw new Error(`Failed to create project: ${n}`)})})}function G(r,o){const e=c();return e.body=JSON.stringify({type:"destroy project?",id:r}),fetch(o,e).then(function(t){return t.ok?t.json():t.text().then(function(n){throw new Error(`Failed to delete project: ${n}`)})})}function X(r,o,e,t={}){const n=c();return n.body=JSON.stringify({type:r,projectId:o,...t}),fetch(e,n).then(function(i){return i.ok?i.json():i.text().then(function(u){throw new Error(`Failed to fetch ${r}: ${u}`)})})}function H(r,o,e,t){const n=c();return n.body=JSON.stringify({type:"commit",projectId:e,message:o,...r}),fetch(t,n).then(function(i){return i.ok?i.json():i.text().then(function(u){throw new Error(u)})})}function Q(r,o){const e=c();return e.body=JSON.stringify({type:"current execution?",projectId:r}),fetch(o,e).then(function(t){return t.ok?t.json():t.text().then(function(n){throw new Error(`Failed to fetch current run: ${n}`)})})}function W(r,o,e){const t=c();return t.body=JSON.stringify({type:"solve model?",projectId:r,scenarios:e}),fetch(o,t).then(function(n){return n.ok?n.json():n.text().then(function(i){throw new Error(`Failed to execute: ${i}`)})})}function Y(r,o){const e=c();return e.body=JSON.stringify({type:"import excel input?",projectId:r}),fetch(o,e).then(function(t){return t.ok?t.json():t.text().then(function(n){throw new Error(`Failed to execute: ${n}`)})})}function Z(r,o){const e=c();return e.body=JSON.stringify({type:"abort?",projectId:r}),fetch(o,e).then(function(t){return t.ok?t.json():t.text().then(function(n){throw new Error(`Failed to abort execution: ${n}`)})})}function tt(r,o){const e=c();return e.body=JSON.stringify({type:"briefing?",projectId:r}),fetch(o,e).then(function(t){return t.ok?t.json():t.text().then(function(n){throw new Error(`Failed to fetch execution status: ${n}`)})})}function et(r,o,e){const t=c();return t.body=JSON.stringify({type:"summary?",projectId:r,scenarioExecutionId:e}),fetch(o,t).then(function(n){return n.ok?n.json():n.text().then(function(i){throw new Error(`Failed to load summary: ${i}`)})})}function nt(r,o){const e=c();return e.body=JSON.stringify({type:"scenario list?",projectId:r}),fetch(o,e).then(function(t){return t.ok?t.json():t.text().then(function(n){throw new Error(`Failed to load scenarios: ${n}`)})})}function rt(r,o,e){const t=c();return t.body=JSON.stringify({type:"destroy execution?",projectId:r,scenarioExecutionId:e}),fetch(o,t).then(function(n){if(!n.ok)return n.text().then(function(i){throw new Error(`Failed to destroy scenario execution: ${i}`)})})}function ot(r,o){const e=c();return e.body=JSON.stringify({type:"entity classes?",projectId:r}),fetch(o,e).then(function(t){return t.ok?t.json():t.text().then(function(n){throw new Error(`Failed to fetch entity classes: ${n}`)})})}function it(r,o,e){const t=c();return t.body=JSON.stringify({type:"entities?",projectId:r,classes:e}),fetch(o,t).then(function(n){return n.ok?n.json():n.text().then(function(i){throw new Error(`Failed to fetch entities: ${i}`)})})}function ct(r,o,e){const t=c();return t.body=JSON.stringify({type:"parameters?",projectId:r,classes:e}),fetch(o,t).then(function(n){return n.ok?n.json():n.text().then(function(i){throw new Error(`Failed to fetch parameters: ${i}`)})})}function ut(r,o,e,t,n){const i=c();return i.body=JSON.stringify({type:"value indexes?",projectId:r,scenarioExecutionIds:e,classes:t,parameters:n}),fetch(o,i).then(function(u){return u.ok?u.json():u.text().then(function(l){throw new Error(`Failed to fetch parameter value indexes: ${l}`)})})}function at(r,o,e,t,n,i){const u=c();return u.body=JSON.stringify({type:"values?",projectId:r,scenarioExecutionIds:e,classes:t,objects:n,parameters:i}),fetch(o,u).then(function(l){return l.ok?l.json():l.text().then(function(d){throw new Error(`Failed to fetch parameter values: ${d}`)})})}function lt(r,o){const e=c();return e.body=JSON.stringify({type:"plot specification?",projectId:r}),fetch(o,e).then(function(t){return t.ok?t.json():t.text().then(function(n){throw new Error(`Failed to fetch plot specification: ${n}`)})})}function ft(r,o,e){const t=c();return t.body=JSON.stringify({type:"store plot specification",projectId:r,specification:e}),fetch(o,t).then(function(n){return n.ok?n.json():n.text().then(function(i){throw new Error(`Failed to store plot specification: ${i}`)})})}function st(r,o){const e=c();return e.body=JSON.stringify({type:"example list?",projectId:r}),fetch(o,e).then(function(t){return t.ok?t.json():t.text().then(function(n){throw new Error(`Failed to load example list: ${n}`)})})}function dt(r,o,e){const t=c();return t.body=JSON.stringify({type:"add to model",name:e,projectId:r}),fetch(o,t).then(function(n){return n.ok?n.json():n.text().then(function(i){throw new Error(`Failed to add example to model: ${i}`)})})}export{A as P,D as a,st as b,M as c,G as d,dt as e,K as f,Q as g,T as h,Y as i,Z as j,X as k,H as l,W as m,tt as n,at as o,ot as p,ut as q,it as r,ct as s,lt as t,ft as u,nt as v,rt as w,et as x};