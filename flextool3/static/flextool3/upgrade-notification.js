import{_ as d,a as p,g as i,d as e,w as a,F as l,o as u,e as t,t as _,i as f,n as m}from"./assets/_plugin-vue_export-helper-e0f65e2b.js";const g={props:{database:{type:String,required:!0}},setup(){return{reload(){location.reload()}}}};function b(k,x,r,s,C,v){const o=p("n-p"),c=p("n-button");return u(),i(l,null,[e(o,null,{default:a(()=>[t("The "+_(r.database)+" database has been upgraded and the old version has been backed up.",1)]),_:1}),e(o,null,{default:a(()=>[e(c,{onClick:s.reload},{default:a(()=>[t("Reload")]),_:1},8,["onClick"]),t(" the page to continue.")]),_:1})],64)}const h=d(g,[["render",b]]),n=f({});n.use(m);n.component("upgrade-notification-app",h);n.mount("#upgrade-notification-app");
