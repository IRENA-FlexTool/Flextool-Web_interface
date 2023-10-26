var ee=(t,n,i)=>{if(!n.has(t))throw TypeError("Cannot "+i)};var E=(t,n,i)=>(ee(t,n,"read from private field"),i?i.call(t):n.get(t)),K=(t,n,i)=>{if(n.has(t))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(t):n.set(t,i)},B=(t,n,i,e)=>(ee(t,n,"write to private field"),e?e.call(t,i):n.set(t,i),i);import{_ as C,r as _,a as m,o as b,b as j,w as y,e as w,t as U,f as Z,c as M,g as P,F as oe,h as re,d as v,l as ce,m as z,p as J,j as L,q as ue,s as de,k as he,u as ve,v as be,x as ge,i as Ee,n as je}from"./assets/_plugin-vue_export-helper-8baa0444.js";import{k as q,P as Ie,a as Ne,l as Ve}from"./assets/communication-4bcd1622.js";import{N as we,D as Ce,C as Ue,u as ke}from"./assets/NewNamedItemRow-9db32a4d.js";import{F as k}from"./assets/Fetchable-9ae640bc.js";import{I as Se}from"./assets/ItemNameInput-137441b1.js";function W(t){if(!t.trim())return null;const n=parseFloat(t);return isNaN(n)?t.toUpperCase()==="NAN"?n:t:n}function H(t,n){return t+"_"+n.join("__")}function O(t,n){return typeof n=="string"?n:H(t,n)}const S=Symbol("insert action"),D=Symbol("delete action"),x=Symbol("update action");class A{constructor(n=void 0){this.action=n,this.parameters=new Map}}function G(t,n){let i=t.parameters.get(n);return i===void 0&&(i=new Map,t.parameters.set(n,i)),i}function te(t){if(typeof t!="object"||!("content"in t))return t;const n=[];return t.content.split(`
`).forEach(function(i){if(i=i.trim(),!i)return;const e=i.split(/\s+/);e.length===1?n.push(W(e[0])):n.push([e[0],W(e[1])])}),!n||n[0].length>1?{type:"map",index_type:"str",index_name:t.index_name,data:n}:{type:"array",value_type:typeof n[0]=="number"?"float":"str",data:n}}var T,V,I;class xe{constructor(n,i){K(this,T,void 0);K(this,V,void 0);K(this,I,void 0);B(this,T,n),B(this,V,i),B(this,I,new Map)}makeCommitData(){const n=[],i=[],e=[],o=[],l=[],a=[],s=[],u=[],p=[];return E(this,I).forEach(function(g,c){const d=g.action;if(d)if(d.action===S)d.objectNames===void 0?n.push({name:d.name}):o.push({name:d.name,object_name_list:d.objectNames});else if(d.action===x)d.objects===void 0?i.push({id:d.id,name:d.name}):l.push({id:d.id,name:d.name,object_name_list:d.objects});else if(d.action===D){e.push(d.id);return}else throw new Error("Unknown object action.");g.parameters.forEach(function(f,r){f.forEach(function(h,N){h.action===S?s.push({entity_name:c,definition_id:r,alternative_id:N,value:te(h.value)}):h.action===x?u.push({id:h.id,value:te(h.value)}):h.action===D&&p.push(h.id)})})}),{class_id:E(this,T),insertions:{object:n,relationship:o,parameter_value:s},updates:{object:i,relationship:l,parameter_value:u},deletions:{object:e,relationship:a,parameter_value:p}}}isPending(){return E(this,I).size>0}clearPending(){E(this,I).clear()}getPendingEntity(n){const i=O(E(this,V),n);let e=E(this,I).get(i);return e===void 0&&(e=new A,E(this,I).set(i,e)),e}insertEntity(n){if(typeof n=="string")E(this,I).set(n,new A({action:S,name:n}));else{const i=H(E(this,V),n);E(this,I).set(i,new A({action:S,name:i,objectNames:n}))}}updateEntity(n,i,e){const o=function(l,a){return l===void 0||l.action===x&&a!==l.originalName};if(typeof e=="string"){const l=E(this,I).get(n);l===void 0?E(this,I).set(e,new A({action:x,id:i,name:e,originalName:n})):o(l.action,e)?l.action={action:x,id:i,name:e,originalName:l.action.originalName}:l.action.action===S&&(l.action.name=e)}else{const l=H(E(this,V),n),a=H(E(this,V),e),s=E(this,I).get(l);s===void 0?E(this,I).set(a,new A({action:x,id:i,name:a,objects:e,originalName:l,originalObjects:n})):o(s.action,a)?s.action={action:x,id:i,name:a,objects:e,originalName:l,originalEmblem:n}:s.action.action===S&&(s.action.name=a,s.action.objectNames=e)}}deleteEntity(n,i){const e=O(E(this,V),i),o=E(this,I).get(e);o===void 0?E(this,I).set(e,new A({action:D,id:n})):o.action===void 0||o.action.action!==S?(o.action={action:D,id:n},o.parameters.clear()):E(this,I).delete(e)}insertValue(n,i,e,o){const l=O(E(this,V),i),a=this.getPendingEntity(l),s={action:S,entity_name:l,definition_id:e,alternative_id:o,value:n};G(a,e).set(o,s)}updateValue(n,i,e,o,l){const a=this.getPendingEntity(e),s=G(a,o);let u;i===void 0?u={action:S,entity_name:O(E(this,V),e),definition_id:o,alternative_id:l,value:n}:u={action:x,id:i,value:n},s.set(l,u)}deleteValue(n,i,e,o){const l=this.getPendingEntity(i),a=G(l,e);n===void 0?(a.delete(o),a.size===0&&(l.parameters.delete(e),l.parameters.size===0&&l.action===void 0&&E(this,I).delete(i))):a.set(o,{action:D,id:n})}pendingValue(n,i,e){const o=O(E(this,V),n),l=E(this,I).get(o);if(l===void 0)return;const a=l.parameters.get(i);if(a===void 0)return;const s=a.get(e);return s!==void 0?s.value:void 0}isPendingDeletion(n,i,e){const o=O(E(this,V),n),l=E(this,I).get(o);if(l===void 0)return!1;const a=l.parameters.get(i);return a===void 0?!1:a.get(e)!==void 0&&a.get(e).action===D}}T=new WeakMap,V=new WeakMap,I=new WeakMap;function qe(t,n){return typeof t=="string"?t===n:F(t,n)}function F(t,n){for(let i=0;i!==t.length;++i)if(t[i]!==n[i])return!1;return!0}const Oe={props:{objectName:{type:String,required:!0},objectId:{type:Number,required:!1}},emits:["rename"],components:{"item-name-input":Se},setup(t,n){const i=_(!1),e=_(null);return{editing:i,inputInstance:e,showInput(){i.value=!0},hideInput(){i.value=!1},emitRename(o){i.value=!1,n.emit("rename",{id:t.objectId,previousEmblem:t.objectName,entityEmblem:o})}}}};function Re(t,n,i,e,o,l){const a=m("n-text"),s=m("item-name-input"),u=m("n-space");return b(),j(u,{align:"baseline"},{default:y(()=>[e.editing?(b(),j(s,{key:1,name:i.objectName,onAccept:e.emitRename,onCancel:e.hideInput},null,8,["name","onAccept","onCancel"])):(b(),j(a,{key:0,onDblclick:e.showInput},{default:y(()=>[w(U(i.objectName),1)]),_:1},8,["onDblclick"]))]),_:1})}const De=C(Oe,[["render",Re]]),Ae={props:{objectName:{type:String,required:!0},availableObjects:{type:Array,required:!0}},emits:["accept","cancel"],setup(t,n){const i=[];t.availableObjects.forEach(function(s){i.push({label:s,value:s,style:{"font-size":"12px"}})});const e=_(t.objectName),o=_(null);Z(function(){var s;(s=o.value)==null||s.focus()});const l=function(){if(e.value===t.objectName){n.emit("cancel");return}n.emit("accept",e.value)},a=function(){n.emit("cancel")};return{options:i,currentObject:e,instance:o,accept:l,cancel:a,handleKey(s){switch(s.key){case"Enter":l();break;case"Escape":a();break}}}}};function Me(t,n,i,e,o,l){const a=m("n-select");return b(),j(a,{value:e.currentObject,"onUpdate:value":n[0]||(n[0]=s=>e.currentObject=s),ref:"instance",filterable:"",options:e.options,size:"tiny","show-arrow":!1,class:"entity-list-select","consistent-menu-width":!1,onBlur:e.accept,onKeydown:e.handleKey},null,8,["value","options","onBlur","onKeydown"])}const Pe=C(Ae,[["render",Me]]),Le={props:{objectName:{type:String,required:!0},objectNamesClash:{type:Boolean,required:!1,default:!1},dimension:{type:Number,required:!0},availableObjects:{type:Array,required:!0}},emits:["accept"],components:{"entity-list-relationship-object-input":Pe},setup(t,n){const i=M(()=>t.objectNamesClash?"error":"default"),e=_(!1);return{tagType:i,editing:e,startEditing(){e.value=!0},accept(o){e.value=!1,n.emit("accept",{dimension:t.dimension,objectName:o})},hideInput(){e.value=!1}}}};function Te(t,n,i,e,o,l){const a=m("n-tag"),s=m("entity-list-relationship-object-input");return e.editing?(b(),j(s,{key:1,"object-name":i.objectName,"available-objects":i.availableObjects,onAccept:e.accept,onCancel:e.hideInput},null,8,["object-name","available-objects","onAccept","onCancel"])):(b(),j(a,{key:0,type:e.tagType,onClick:e.startEditing,size:"small"},{default:y(()=>[w(U(i.objectName),1)]),_:1},8,["type","onClick"]))}const ze=C(Le,[["render",Te]]),Ke={props:{objects:{type:Array,required:!0},originalObjects:{type:Array,required:!0},relationshipId:{type:Number,required:!1},availableObjects:{type:Array,required:!0},objectNamesClash:{type:Boolean,required:!1,default:!1}},emits:["objectsUpdate"],components:{"entity-list-relationship-object":ze},setup(t,n){return{emitObjectsUpdate(i){const e=[];t.objects.forEach(function(l,a){a!==i.dimension?e.push(l):e.push(i.objectName)});const o=t.originalObjects!==null?t.originalObjects:t.objects;n.emit("objectsUpdate",{id:t.relationshipId,previousEmblem:o,entityEmblem:e})}}}};function Be(t,n,i,e,o,l){const a=m("entity-list-relationship-object"),s=m("n-space");return b(),j(s,{align:"baseline"},{default:y(()=>[(b(!0),P(oe,null,re(i.objects,(u,p)=>(b(),j(a,{"object-name":u,"object-names-clash":i.objectNamesClash,dimension:p,"available-objects":i.availableObjects[p],key:p,onAccept:e.emitObjectsUpdate},null,8,["object-name","object-names-clash","dimension","available-objects","onAccept"]))),128))]),_:1})}const He=C(Ke,[["render",Be]]);function Fe(t){const n=[];return t.forEach(function(i,e){const o=[];i.forEach(function(l){o.push({label:l,value:l,dimension:e,style:{"font-size":"12px"}})}),n.push(o)}),n}const We={props:{availableObjects:{type:Array,required:!0}},emits:["relationshipCreate"],setup(t,n){const i=[...Array(t.availableObjects.length).keys()],e=Fe(t.availableObjects),o=Array(t.availableObjects.length),l=_(!1);return{dimensions:i,options:e,wellDefined:l,emitRelationshipCreate(){n.emit("relationshipCreate",o)},updateSelection(a,s){o[s.dimension]=a,o.forEach(function(u,p){u!==void 0&&p===o.length-1&&(l.value=!0)})},placeholderText(a){let s=null;switch(a){case 0:s="st";break;case 1:s="nd";break;case 2:s="rd";break;default:s="th"}return`${a+1}${s} object`}}}};function Je(t,n,i,e,o,l){const a=m("n-select"),s=m("n-button"),u=m("n-space");return b(),j(u,{align:"baseline",size:"small"},{default:y(()=>[(b(!0),P(oe,null,re(e.dimensions,p=>(b(),j(a,{key:p,options:e.options[p],filterable:"",placeholder:e.placeholderText(p),"show-arrow":!1,size:"tiny","consistent-menu-width":!1,"onUpdate:value":e.updateSelection,class:"entity-list-select"},null,8,["options","placeholder","onUpdate:value"]))),128)),v(s,{onClick:e.emitRelationshipCreate,size:"tiny",disabled:!e.wellDefined},{default:y(()=>[w(" Create ")]),_:1},8,["onClick","disabled"])]),_:1})}const Ge=C(We,[["render",Je]]);function Qe(t,n,i,e,o,l){q("objects?",t,n,{object_class_id:i}).then(async function(s){const u=s.objects,p=[];u.forEach(function(g){p.push({entityEmblem:g.name,entityId:g.id,key:g.name})}),e.value=p,o.value=k.state.ready}).catch(function(s){l.value=s.message,o.value=k.state.error})}function Xe(t,n,i){return q("available relationship objects?",t,n,{relationship_class_id:i}).then(function(o){return o.available_objects})}function Ye(t,n,i,e,o,l,a,s){q("relationships?",t,n,{relationship_class_id:i}).then(async function(p){const g=p.relationships,c=new Map;g.forEach(function(f){let r=c.get(f.id);r===void 0&&(r=[],c.set(f.id,r)),r.push(f.object_name)}),o.value=await Xe(t,n,i),l("entityDimensionsReveal",o.value.length);const d=[];c.forEach(function(f,r){d.push({entityEmblem:f,originalEmblem:[...f],entityId:r,availableObjects:o,objectNamesClash:!1,key:f.join(",")})}),d.sort(function(f,r){for(let h=0;h<f.entityEmblem.length;++h){const N=f.entityEmblem[h].toUpperCase(),R=r.entityEmblem[h].toUpperCase();if(N!==R)return N<R?-1:1}return 0}),e.value=d,a.value=k.state.ready}).catch(function(p){s.value=p.message,a.value=k.state.error})}function Q(t){return{entityEmblem:t.entityEmblem,entityId:t.entityId}}const Ze={props:{projectId:{type:Number,required:!0},modelUrl:{type:String,required:!0},classId:{type:Number,required:!0},className:{type:String,required:!0},classType:{type:Number,required:!0},inserted:{type:Object,required:!1}},emits:["entitySelect","entityInsert","entityUpdate","entityDelete","relationshipsClash","entityDimensionsReveal"],components:{fetchable:k,"new-named-item-row":we,"entity-list-new-relationship-row":Ge},setup(t,n){const i=_(k.state.loading),e=_([]),o=_(""),l=_([]),a=_([]),s=ce();Z(function(){t.classType===1?Qe(t.projectId,t.modelUrl,t.classId,e,i,o):Ye(t.projectId,t.modelUrl,t.classId,e,a,n.emit,i,o)});const u=function(c){let d;for(let f=e.value.length-1;f!=-1;--f){const r=e.value[f];qe(r.entityEmblem,c)&&(d=r.entityId,e.value.splice(f,1))}n.emit("entityDelete",{id:d,entityEmblem:c})},p=function(c){if(e.value.find(function(f){return c.entityEmblem===f.entityEmblem})){s.error({title:"Cannot rename",content:"An object with the same name already exists."});return}e.value.forEach(function(f){f.entityEmblem==c.previousEmblem&&(f.entityEmblem=c.entityEmblem)}),n.emit("entityUpdate",c)},g=function(c){const d=e.value.find(function(r){return F(c.entityEmblem,r.entityEmblem)}),f=d!==void 0;for(const r of e.value)if(F(c.previousEmblem,r.originalEmblem)){r.objectNamesClash=f,r.entityEmblem=c.entityEmblem,f||(r.originalEmblem=[...c.entityEmblem]);break}n.emit("relationshipsClash",d),d||n.emit("entityUpdate",c)};return z(J(t).inserted,function(c){c&&(e.value.forEach(function(d){const f=O(t.className,d.entityEmblem),r=c[f];r!==void 0&&(d.entityId=r)}),l.value.length=0,n.emit("entitySelect",null))}),{state:i,entityList:e,errorMessage:o,selectedKeys:l,availableObjects:a,renderLabel(c){return t.classType===1?L(De,{objectName:c.option.entityEmblem,objectId:c.option.entityId,onRename:p}):L(He,{objects:c.option.entityEmblem,originalObjects:c.option.originalEmblem,relationshipId:c.option.entityId,availableObjects:c.option.availableObjects,objectNamesClash:c.option.objectNamesClash,onObjectsUpdate:g})},renderSuffix(c){return L(Ce,{emblem:c.option.entityEmblem,onDelete:u})},emitEntitySelect(c,d){if(c.length===0){l.value.length=0;return}const f=d[0];l.value=[f.key],n.emit("entitySelect",Q(f))},addObject(c){if(e.value.find(function(h){return c===h.entityEmblem})){s.error({title:"Cannot create",content:"An entity with the same name already exists."});return}const f={entityEmblem:c,entityId:void 0,key:c},r=e.value.findIndex(h=>c<h.entityEmblem);e.value.splice(r>=0?r:e.value.length,0,f),n.emit("entityInsert",c),l.value=[f.key],n.emit("entitySelect",Q(f))},addRelationship(c){if(e.value.find(function(N){return F(c,N.entityEmblem)})){s.error({title:"Cannot create relationship",content:"A relationship with the same objects already exists."});return}const f=[...c],r={entityEmblem:f,originalEmblem:[...f],entityId:void 0,availableObjects:a,objectNamesClash:!1,key:c.join(",")},h=e.value.findIndex(N=>c[0]<N.entityEmblem);e.value.splice(h>=0?h:e.value.length,0,r),n.emit("entityInsert",f),l.value=[r.key],n.emit("entitySelect",Q(r))}}}};function $e(t,n,i,e,o,l){const a=m("n-tree"),s=m("new-named-item-row"),u=m("entity-list-new-relationship-row"),p=m("n-space"),g=m("fetchable");return b(),j(g,{state:e.state,"error-message":e.errorMessage},{default:y(()=>[v(p,{vertical:""},{default:y(()=>[v(a,{selectable:"","block-node":"",data:e.entityList,"render-label":e.renderLabel,"render-suffix":e.renderSuffix,"selected-keys":e.selectedKeys,size:"tiny","onUpdate:selectedKeys":e.emitEntitySelect},null,8,["data","render-label","render-suffix","selected-keys","onUpdate:selectedKeys"]),i.classType===1?(b(),j(s,{key:0,"item-name":"object",onCreate:e.addObject},null,8,["onCreate"])):(b(),j(u,{key:1,"available-objects":e.availableObjects,onRelationshipCreate:e.addRelationship},null,8,["available-objects","onRelationshipCreate"]))]),_:1})]),_:1},8,["state","error-message"])}const et=C(Ze,[["render",$e]]);function tt(t,n){return q("make base alternative",t,n,{}).then(function(i){return i.alternatives})}const nt={props:{projectId:{type:Number,required:!0},modelUrl:{type:String,required:!0}},emits:["alternativeSelect"],components:{fetchable:k},setup(t,n){const i=_([]),e=_([]),o=_(k.state.loading),l=_("");return Z(function(){q("alternatives?",t.projectId,t.modelUrl).then(async function(a){a.alternatives.length===0&&(a.alternatives=await tt(t.projectId,t.modelUrl));for(const s of a.alternatives)i.value.push({label:s.name,key:s.id});o.value=k.state.ready}).catch(function(a){o.value=k.state.error,l.value=a.message})}),{alternatives:i,selectedIds:e,state:o,errorMessage:l,emitSelected(a,s){const u=s[0];e.value=[u.key],n.emit("alternativeSelect",{alternativeId:u.key,alternativeName:u.label})}}}};function it(t,n,i,e,o,l){const a=m("n-tree"),s=m("fetchable");return b(),j(s,{state:e.state,"error-message":e.errorMessage},{default:y(()=>[v(a,{selectable:"","block-node":"",data:e.alternatives,"selected-keys":e.selectedIds,"onUpdate:selectedKeys":e.emitSelected},null,8,["data","selected-keys","onUpdate:selectedKeys"])]),_:1},8,["state","error-message"])}const at=C(nt,[["render",it]]),lt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 448 512"},st=de("path",{d:"M372.57 112.641v-10.825c0-43.612-40.52-76.691-83.039-65.546c-25.629-49.5-94.09-47.45-117.982.747C130.269 26.456 89.144 57.945 89.144 102v126.13c-19.953-7.427-43.308-5.068-62.083 8.871c-29.355 21.796-35.794 63.333-14.55 93.153L132.48 498.569a32 32 0 0 0 26.062 13.432h222.897c14.904 0 27.835-10.289 31.182-24.813l30.184-130.958A203.637 203.637 0 0 0 448 310.564V179c0-40.62-35.523-71.992-75.43-66.359zm27.427 197.922c0 11.731-1.334 23.469-3.965 34.886L368.707 464h-201.92L51.591 302.303c-14.439-20.27 15.023-42.776 29.394-22.605l27.128 38.079c8.995 12.626 29.031 6.287 29.031-9.283V102c0-25.645 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V67c0-25.663 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V101.125c0-25.672 36.57-24.81 36.57.691V256c0 8.837 7.163 16 16 16h6.857c8.837 0 16-7.163 16-16v-76.309c0-26.242 36.57-25.64 36.57-.691v131.563z",fill:"currentColor"},null,-1),ot=[st],rt=ue({name:"HandPaperRegular",render:function(n,i){return b(),P("svg",lt,ot)}}),ct={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ut=de("path",{d:"M0 220.8C0 266.416 37.765 304 83.2 304h35.647a93.148 93.148 0 0 0 7.929 22.064c-2.507 22.006 3.503 44.978 15.985 62.791C143.9 441.342 180.159 480 242.701 480H264c60.063 0 98.512-40 127.2-40h2.679c5.747 4.952 13.536 8 22.12 8h64c17.673 0 32-12.894 32-28.8V188.8c0-15.906-14.327-28.8-32-28.8h-64c-8.584 0-16.373 3.048-22.12 8H391.2c-6.964 0-14.862-6.193-30.183-23.668l-.129-.148l-.131-.146c-8.856-9.937-18.116-20.841-25.851-33.253C316.202 80.537 304.514 32 259.2 32c-56.928 0-92 35.286-92 83.2c0 8.026.814 15.489 2.176 22.4H83.2C38.101 137.6 0 175.701 0 220.8zm48 0c0-18.7 16.775-35.2 35.2-35.2h158.4c0-17.325-26.4-35.2-26.4-70.4c0-26.4 20.625-35.2 44-35.2c8.794 0 20.445 32.712 34.926 56.1c9.074 14.575 19.524 27.225 30.799 39.875c16.109 18.374 33.836 36.633 59.075 39.596v176.752C341.21 396.087 309.491 432 264 432h-21.299c-40.524 0-57.124-22.197-50.601-61.325c-14.612-8.001-24.151-33.979-12.925-53.625c-19.365-18.225-17.787-46.381-4.95-61.05H83.2C64.225 256 48 239.775 48 220.8zM448 360c13.255 0 24 10.745 24 24s-10.745 24-24 24s-24-10.745-24-24s10.745-24 24-24z",fill:"currentColor"},null,-1),dt=[ut],mt=ue({name:"HandPointLeftRegular",render:function(n,i){return b(),P("svg",ct,dt)}}),ft={props:{name:{type:String,required:!0},description:{type:String,required:!1}}};function pt(t,n,i,e,o,l){const a=m("n-tooltip");return b(),j(a,null,{trigger:y(()=>[w(U(i.name),1)]),default:y(()=>[w(" "+U(i.description),1)]),_:1})}const yt=C(ft,[["render",pt]]);function ne(t){const n=[{label:"none",value:"none"}];return t.constant&&n.push({label:"constant",value:"constant"}),t.period&&n.push({label:"period",value:"period"}),t.time&&n.push({label:"time",value:"time"}),n}function X(t,n){return t==="none"?"empty":t==="constant"?n?"value list":"single value":"indexed value"}function ie(t){if(!t)return;const n=[];return t.forEach(function(i){n.push({label:i,value:i})}),n}function Y(t,n,i,e,o){if(t!=="none")if(t==="constant")switch(typeof i){case"string":return i;case"number":return new String(i);default:return n==="constant"?e!==null?new String(e):"":o?o[0]:""}else return typeof i=="object"?i:typeof e=="object"?e:{type:"map",index_type:"str",index_name:t,data:[["T0001",0]]}}const _t={props:{valueData:{type:Object,required:!0},valueId:{type:Number,required:!1}},emits:["openValueEditorRequest","closeValueEditorRequest","valueInsert","valueUpdate","valueDelete"],setup(t,n){const i=_(ne(t.valueData.allowedSpecies)),e=_(X(t.valueData.specie,t.valueData.allowedValues)),o=_(t.valueData.specie),l=_(Y(t.valueData.specie,t.valueData.specie,t.valueData.parameterValue,t.valueData.parameterValue,t.valueData.allowedValues)),a=_(ie(t.valueData.allowedValues));return z(J(t).valueData,function(s){i.value=ne(s.allowedSpecies),e.value=X(s.specie,s.allowedValues),o.value=s.specie,l.value=Y(s.specie,s.specie,s.parameterValue,s.parameterValue,s.allowedValues),a.value=ie(s.allowedValues)}),{species:i,state:e,currentSpecie:o,currentValue:l,valueOptions:a,changeState(s){o.value=s;const u=X(s,t.valueData.allowedValues);e.value==="indexed value"&&n.emit("closeValueEditorRequest"),e.value=u;const p=Y(s,t.valueData.specie,l.value,t.valueData.parameterValue,t.valueData.allowedValues);if(p===void 0)n.emit("valueDelete",{id:t.valueId});else{const c=typeof p=="object"?p:W(p);t.valueId===void 0?n.emit("valueInsert",{value:c}):n.emit("valueUpdate",{id:t.valueId,value:c})}l.value=p},changeSingleValue(s){const u=W(s);t.valueId===void 0?n.emit("valueInsert",{value:u}):n.emit("valueUpdate",{id:t.valueId,value:u}),l.value=s},emitOpenValueEditorRequest(){n.emit("openValueEditorRequest",{valueId:t.valueId,parameterValue:l})}}}};function ht(t,n,i,e,o,l){const a=m("n-select"),s=m("n-input"),u=m("n-button"),p=m("n-space");return b(),j(p,null,{default:y(()=>[v(a,{options:e.species,value:e.currentSpecie,size:"tiny","consistent-menu-width":!1,"onUpdate:value":e.changeState},null,8,["options","value","onUpdate:value"]),e.state==="single value"?(b(),j(s,{key:0,value:e.currentValue,"onUpdate:value":e.changeSingleValue,size:"tiny"},null,8,["value","onUpdate:value"])):e.state==="value list"?(b(),j(a,{key:1,value:e.currentValue,options:e.valueOptions,size:"tiny","consistent-menu-width":!1,"onUpdate:value":e.changeSingleValue},null,8,["value","options","onUpdate:value"])):e.state==="indexed value"?(b(),j(u,{key:2,size:"tiny",onClick:e.emitOpenValueEditorRequest},{default:y(()=>[w(" Edit ")]),_:1},8,["onClick"])):he("",!0)]),_:1})}const vt=C(_t,[["render",ht]]);function bt(t,n){const i={title:"Parameter",key:"name",render:function(l){return L(yt,{name:l.name,description:l.description})}},e=function(l,a){return l.id===void 0?{entityEmblem:t.value.entityEmblem,definitionId:a.definitionId,alternativeId:t.value.alternativeId,...l}:{entityEmblem:t.value.entityEmblem,...l}};return[i,{title:"Value",key:"value",render:function(l){return L(vt,{valueData:{allowedSpecies:l.allowedSpecies,specie:l.specie,parameterValue:l.value,allowedValues:l.allowedValues},valueId:l.valueId,onOpenValueEditorRequest(a){n.emit("openValueEditorRequest",{value:a.parameterValue,valueId:a.valueId,entityEmblem:t.value.entityEmblem,parameterName:l.name,definitionId:l.definitionId,alternativeId:t.value.alternativeId})},onCloseValueEditorRequest(){n.emit("closeValueEditorRequest",l.name)},onValueInsert(a){n.emit("valueInsert",e(a,l))},onValueUpdate(a){n.emit("valueUpdate",e(a,l))},onValueDelete(a){n.emit("valueDelete",e(a,l))}})}}]}const gt=/constant[^.]*\.?$/i,Et=/period[^.]*\.?$/i,jt=/time[^.]*\.?$/i;function It(t){const n=Et.test(t),i=jt.test(t);return{constant:gt.test(t)||!n&&!i,period:n,time:i}}function me(t,n){return typeof t=="object"&&t!==null&&(t.type==="map"||t.type==="array"||"content"in t)?t.index_name==="period"&&n.period?"period":t.index_name==="time"&&n.time?"time":"period":"constant"}function ae(t,n,i,e){i.forEach(function(o){if(e.isPendingDeletion(t,o.definitionId,n)){o.specie=void 0,o.value=void 0;return}const l=e.pendingValue(t,o.definitionId,n);l!==void 0&&(o.specie=me(l,o.allowedSpecies),o.value=l)})}function Nt(t,n,i){return q("parameter definitions?",t,n,{class_id:i}).then(function(e){return e.definitions})}function Vt(t,n,i){return Nt(t,n,i).then(async function(e){const o=[],l=new Map;if(e.forEach(function(a){const s={};s.name=a.name,s.description=a.description,s.definitionId=a.id,s.allowedSpecies=It(a.description),s.specie="none",a.parameter_value_list_id&&l.set(a.id,a.parameter_value_list_id),o.push(s)}),l.size>0){const a=await q("parameter value lists?",t,n,{value_list_ids:[...l.values()]}).then(function(s){return s.lists});o.forEach(function(s){const u=l.get(s.definitionId);if(u){const p=a.find(function(g){return u===g.id});s.allowedValues=p.value_list.map(g=>JSON.parse(g))}})}return o})}function wt(t,n,i,e,o,l,a,s,u,p,g){t.promise===null&&(t.promise=Vt(e,o,l)),t.promise.then(function(c){const d=[];c.forEach(function(f){d.push({...f})}),s===void 0?(ae(a,u,d,p),n.value=d):q("parameter values?",e,o,{entity_id:s,alternative_id:u}).then(async function(f){f.values.forEach(function(r){const h=d.find(function(R){return r.parameter_definition_id===R.definitionId}),N=JSON.parse(r.value);N!==null&&typeof N=="object"&&(N.type=r.type),h.value=N,h.specie=me(N,h.allowedSpecies),h.valueId=r.id}),ae(a,u,d,p),n.value=d})}).catch(function(c){g.value=c.message}).finally(function(){i.value=!1})}const Ct={props:{projectId:{type:Number,required:!0},modelUrl:{type:String,required:!0},classId:{type:Number,required:!0},entityKey:{type:[Object,null],required:!0},diff:{type:Object,required:!0}},emits:["openValueEditorRequest","closeValueEditorRequest","valueInsert","valueUpdate","valueDelete"],components:{"hand-paper-regular":rt,"hand-point-left-regular":mt},setup(t,n){const e=J(t).entityKey,o=_(bt(e,n)),l=_([]),a=_(!1),s=_(""),u={promise:null},p=M(function(){return t.entityKey===null?"":typeof t.entityKey.entityEmblem=="string"?t.entityKey.entityEmblem:t.entityKey.entityEmblem.join(" | ")}),g=M(function(){return t.entityKey!==null?t.entityKey.alternativeName:""});return z(e,function(c){if(c===null){l.value.length=0;return}a.value=!0,wt(u,l,a,t.projectId,t.modelUrl,t.classId,c.entityEmblem,c.entityId,c.alternativeId,t.diff,s)}),{columns:o,data:l,loading:a,errorMessage:s,entityName:p,alternativeName:g,rowKey(c){return c.definitionId}}}};function Ut(t,n,i,e,o,l){const a=m("n-text"),s=m("n-space"),u=m("hand-point-left-regular"),p=m("n-icon"),g=m("n-empty"),c=m("hand-paper-regular"),d=m("n-data-table"),f=m("n-result");return b(),j(s,{vertical:""},{default:y(()=>[v(s,null,{default:y(()=>[v(a,{strong:""},{default:y(()=>[w(U(e.entityName),1)]),_:1}),v(a,null,{default:y(()=>[w("―")]),_:1}),v(a,{italic:""},{default:y(()=>[w(U(e.alternativeName),1)]),_:1})]),_:1}),e.errorMessage?(b(),j(f,{key:1,status:"error",title:"Error",description:e.errorMessage},null,8,["description"])):(b(),j(d,{key:0,size:"tiny",columns:e.columns,data:e.data,loading:e.loading,"row-key":e.rowKey},{empty:y(()=>[i.entityKey===null?(b(),j(g,{key:0,description:"Select an entity on the left to load its parameters here."},{icon:y(()=>[v(p,null,{default:y(()=>[v(u)]),_:1})]),_:1})):(b(),j(g,{key:1,description:"Entity has no parameters."},{icon:y(()=>[v(p,null,{default:y(()=>[v(c)]),_:1})]),_:1}))]),_:1},8,["columns","data","loading","row-key"]))]),_:1})}const kt=C(Ct,[["render",Ut]]);function le(t){const n=t.index_name;return n!==void 0?n:"x"}function se(t){if("content"in t)return t.content;let n="";if(t.type==="map")if(Array.isArray(t.data))t.data.forEach(function(i){n=n+`${i[0]}	${i[1]}
`});else for(const i in t.data)n=n+`${i}	${t.data[i]}
`;else t.data.forEach(function(i){n=n+`${i}
`});return n}function St(t,n){return{index_name:n,content:t}}const xt={props:{valueData:{type:[Object,null],required:!0},diff:{type:Object,required:!0}},emits:["valueUpdate"],setup(t,n){const i=_(!0),e=_(""),o=_(""),l=_("");return z(J(t).valueData,function(a){if(a===null){i.value=!0,e.value="",o.value="",l.value="";return}i.value=!1,o.value=a.parameterName;const s=t.diff.pendingValue(a.entityEmblem,a.definitionId,a.alternativeId);s===void 0?(e.value=le(a.value),l.value=se(a.value)):s.contest!==void 0?(e.value=s.index_name,l.value=s.content):(e.value=le(s),l.value=se(s))}),{disabled:i,indexName:e,parameterName:o,content:l,updateContent(a){l.value=a;const s={value:St(a,e.value),id:t.valueData.valueId,entityEmblem:t.valueData.entityEmblem,definitionId:t.valueData.definitionId,alternativeId:t.valueData.alternativeId};n.emit("valueUpdate",s)}}}},qt={key:0,strong:""},Ot={key:1};function Rt(t,n,i,e,o,l){const a=m("n-input"),s=m("n-space");return b(),j(s,{vertical:""},{default:y(()=>[e.disabled?(b(),P("text",Ot," - ")):(b(),P("text",qt,U(e.parameterName)+"("+U(e.indexName)+") ",1)),v(a,{disabled:e.disabled,value:e.content,type:"textarea",placeholder:"index value",rows:20,"onUpdate:value":e.updateContent},null,8,["disabled","value","onUpdate:value"])]),_:1})}const Dt=C(xt,[["render",Rt]]),At={props:{indexUrl:{type:String,required:!0},projectUrl:{type:String,required:!0},projectName:{type:String,required:!0},projectId:{type:Number,required:!0},editUrl:{type:String,required:!0},runUrl:{type:String,required:!0},resultsUrl:{type:String,required:!0},classId:{type:Number,required:!0},className:{type:String,required:!0},classType:{type:Number,required:!0},classDescription:{type:String,required:!0},modelUrl:{type:String,required:!0},logoutUrl:{type:String,required:!0},logoUrl:{type:String,required:!0}},components:{"alternative-selection":at,"commit-button":Ue,"entity-list":et,"indexed-value-editor":Dt,page:Ie,"page-path":Ne,"parameter-table":kt},setup(t){const n=_(null),i=_(!1),e=_(""),o=_(!1),l=_({}),a=new xe(t.classId,t.className),s=_(null),u=_(null),p=_(1),g=M(function(){return t.classType==1?"Objects":"Relationships"}),c=M(function(){return`${10+Math.max(20,p.value*10)}em`}),d=ve(),f=ce();return z(o,ke),{currentEntityKey:M(function(){return s.value===null||u.value===null?null:{...s.value,...u.value}}),valueEditorData:n,committing:i,commitErrorMessage:e,pendingChanges:o,insertedEntities:l,pendingModelChanges:a,entityTypeName:g,siderWidth:c,setValueEditorData(r){n.value=r},possiblyClearValueEditor(r){n.value&&n.value.parameterName===r&&(n.value=null)},storeEntityInsertion(r){a.insertEntity(r),o.value=!0},storeEntityUpdate(r){a.updateEntity(r.previousEmblem,r.id,r.entityEmblem),o.value=!0},storeEntityDeletion(r){a.deleteEntity(r.id,r.entityEmblem),o.value=a.isPending()},storeValueInsertion(r){a.insertValue(r.value,r.entityEmblem,r.definitionId,r.alternativeId),o.value=!0},storeValueUpdate(r){a.updateValue(r.value,r.id,r.entityEmblem,r.definitionId,r.alternativeId),o.value=!0},storeValueDeletion(r){a.deleteValue(r.id,r.entityEmblem,r.definitionId,r.alternativeId),o.value=a.isPending()},commit(){i.value=!0;const r=a.makeCommitData();Ve(r,"Modified entities.",t.projectId,t.modelUrl).then(function(h){h.inserted&&(h.inserted.object?l.value=h.inserted.object:h.inserted.relationship&&(l.value=h.inserted.relationship)),d.success("Commit successful."),o.value=!1}).catch(function(h){f.error({title:"Commit failure",content:h.message})}).finally(function(){a.clearPending(),i.value=!1})},setRelationshipsClashErrorState(r){r?e.value="Cannot commit: some relationships have the same objects.":e.value=""},setEntityDimensions(r){p.value=r},setSelectedEntity(r){s.value=r,n.value=null},setSelectedAlternative(r){u.value=r,n.value=null}}}};function Mt(t,n,i,e,o,l){const a=m("page-path"),s=m("n-h1"),u=m("n-p"),p=m("commit-button"),g=m("n-h2"),c=m("entity-list"),d=m("n-space"),f=m("alternative-selection"),r=m("n-layout-sider"),h=m("parameter-table"),N=m("n-grid-item"),R=m("indexed-value-editor"),fe=m("n-grid"),pe=m("n-layout-content"),ye=m("n-layout"),_e=m("page");return b(),j(_e,{name:"Edit model","index-url":i.indexUrl,"project-url":i.projectUrl,"edit-url":i.editUrl,"run-url":i.runUrl,"results-url":i.resultsUrl,"logout-url":i.logoutUrl,"logo-url":i.logoUrl},{header:y(()=>[v(a,{path:[{name:"Projects",url:i.indexUrl},{name:i.projectName,url:i.projectUrl},{name:"Model",url:i.editUrl}],"leaf-name":i.className},null,8,["path","leaf-name"]),v(s,null,{default:y(()=>[w(U(i.className),1)]),_:1}),be(v(u,null,{default:y(()=>[w(U(i.classDescription),1)]),_:1},512),[[ge,i.classDescription!=="None"]]),v(p,{"has-pending-changes":e.pendingChanges,committing:e.committing,"error-message":e.commitErrorMessage,onCommitRequest:e.commit},null,8,["has-pending-changes","committing","error-message","onCommitRequest"])]),default:y(()=>[v(ye,{"has-sider":"",position:"absolute"},{default:y(()=>[v(r,{width:e.siderWidth},{default:y(()=>[v(d,null,{default:y(()=>[v(d,{vertical:""},{default:y(()=>[v(g,null,{default:y(()=>[w(U(e.entityTypeName),1)]),_:1}),v(c,{"project-id":i.projectId,"model-url":i.modelUrl,"class-id":i.classId,"class-name":i.className,"class-type":i.classType,inserted:e.insertedEntities,onEntitySelect:e.setSelectedEntity,onEntityInsert:e.storeEntityInsertion,onEntityUpdate:e.storeEntityUpdate,onEntityDelete:e.storeEntityDeletion,onRelationshipsClash:e.setRelationshipsClashErrorState,onEntityDimensionsReveal:e.setEntityDimensions},null,8,["project-id","model-url","class-id","class-name","class-type","inserted","onEntitySelect","onEntityInsert","onEntityUpdate","onEntityDelete","onRelationshipsClash","onEntityDimensionsReveal"])]),_:1}),v(d,{vertical:""},{default:y(()=>[v(g,null,{default:y(()=>[w("Alternatives")]),_:1}),v(f,{"project-id":i.projectId,"model-url":i.modelUrl,onAlternativeSelect:e.setSelectedAlternative},null,8,["project-id","model-url","onAlternativeSelect"])]),_:1})]),_:1})]),_:1},8,["width"]),v(pe,{"content-style":"margin-left: 1em; margin-right: 1em"},{default:y(()=>[v(fe,{cols:"1 m:2",responsive:"screen"},{default:y(()=>[v(N,null,{default:y(()=>[v(h,{"project-id":i.projectId,"model-url":i.modelUrl,"class-id":i.classId,"entity-key":e.currentEntityKey,diff:e.pendingModelChanges,onOpenValueEditorRequest:e.setValueEditorData,onCloseValueEditorRequest:e.possiblyClearValueEditor,onValueInsert:e.storeValueInsertion,onValueUpdate:e.storeValueUpdate,onValueDelete:e.storeValueDeletion},null,8,["project-id","model-url","class-id","entity-key","diff","onOpenValueEditorRequest","onCloseValueEditorRequest","onValueInsert","onValueUpdate","onValueDelete"])]),_:1}),v(N,null,{default:y(()=>[v(R,{"value-data":e.valueEditorData,diff:e.pendingModelChanges,onValueUpdate:e.storeValueUpdate},null,8,["value-data","diff","onValueUpdate"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["index-url","project-url","edit-url","run-url","results-url","logout-url","logo-url"])}const Pt=C(At,[["render",Mt]]),$=Ee({});$.use(je);$.component("entities-app",Pt);$.mount("#entities-app");
