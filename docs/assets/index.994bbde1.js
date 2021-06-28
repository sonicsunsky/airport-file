var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,r=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&n(e,t,a[t]);if(o)for(var t of o(a))l.call(a,t)&&n(e,t,a[t]);return e},i=(e,o)=>a(e,t(o));import{_ as d,a as c,b as u,c as m,d as p,e as h,f as g,g as v,h as b,i as f,j as _,k as y,l as B,m as x,n as k,o as w,p as V,q as S,r as L,s as C,t as O,u as R,v as E,w as j,x as T,y as I,z as A,A as P,B as M,C as z,D,E as F,F as N,G as $,H,I as U,J as q,K as J,L as W,M as G,N as K,O as Q,P as X,Q as Y,R as Z,S as ee,T as ae,U as te,V as oe,W as se,X as le,Y as ne,Z as re,$ as ie,a0 as de,a1 as ce,a2 as ue,a3 as me,a4 as pe,a5 as he,a6 as ge,a7 as ve,a8 as be,a9 as fe,aa as _e,ab as ye,ac as Be,ad as xe,ae as ke,af as we,ag as Ve,ah as Se,ai as Le,aj as Ce,ak as Oe,al as Re,am as Ee,an as je,ao as Te,ap as Ie,aq as Ae,ar as Pe,as as Me,at as ze,au as De,av as Fe,aw as Ne,ax as $e,ay as He,az as Ue,aA as qe,aB as Je,aC as We,aD as Ge,aE as Ke,aF as Qe,aG as Xe,aH as Ye,aI as Ze}from"./vendor.6d01491c.js";console.log("locale:",d,!0),d.use?d.use(c):d(c);const ea=[u,m,p,h,g,v,b,f,_,y,B,x,k,w,V,S,L,C,O,R,E,j,T,I,A,P,M,z,D,F,N,$,H,U,q,J,W,G,K,Q,X,Y,Z,ee,ae,te,oe,se,le,ne,re,ie,de,ce,ue,me,pe,he,ge,ve],aa=[be,fe,_e,ye,Be];const ta={},oa={id:"app"};let sa;ta.render=function(e,a,t,o,s,l){const n=xe("router-view");return ke(),we("div",oa,[Ve(n)])};const la={},na=function(e,a){if(!a)return e();if(void 0===sa){const e=document.createElement("link").relList;sa=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(a.map((e=>{if(e in la)return;la[e]=!0;const a=e.endsWith(".css"),t=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const o=document.createElement("link");return o.rel=a?"stylesheet":sa,a||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),a?new Promise(((e,a)=>{o.addEventListener("load",e),o.addEventListener("error",a)})):void 0}))).then((()=>e()))};const ra=Se({name:"AppMain",setup(e,a){const t=Le(),o=Ce(),s=Oe((()=>o.getters["settings/device"])),l=Oe((()=>t.path)),n=Oe((()=>o.getters["routes/routes"])),r=Oe((()=>{let e=[];return n.value.forEach((a=>{a.meta&&!a.meta.noKeepAlive&&e.push(a.name)})),e}));return Re((()=>t),(e=>{"mobile"===s&&o.dispatch("settings/foldSideBar")}),{immediate:!0}),{device:s,cachedRoutes:r,key:l}}}),ia=Ie();Ae("data-v-9733c552");const da={class:"app-main-container"};Pe();const ca=ia(((e,a,t,o,s,l)=>{const n=xe("router-view");return ke(),we("div",da,[Ve(n,null,{default:ia((({Component:a})=>[Ve(Ee,{name:"fade-transform",mode:"out-in"},{default:ia((()=>[(ke(),we(je,null,[(ke(),we(Te(a),{key:e.key}))],1024))])),_:2},1024)])),_:1})])}));ra.render=ca,ra.__scopeId="data-v-9733c552";const ua=Se({name:"Avatar",setup(e,a){Le(),De(),Ce();const t=Me({avatar:"https://picsum.photos/seed/1000/128/128",username:"我的昵称",readCount:10,unreadCount:20,allCount:30}),o=()=>{ye.confirm("您确定要退出当前登录用户吗？","确认退出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{}))};return i(r({},ze(t)),{handleCommand:e=>{switch(e){case"logout":o();break;case"github":window.open("https://github.com/chuzhixin/vue-admin-beautiful")}},logout:o})}}),ma=Ie();Ae("data-v-2ab7aabe");const pa={class:"avatar-dropdown"},ha={class:"user-name"},ga=Ve("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),va=Fe(" 已读"),ba=Fe(" 未读 "),fa=Fe("可读"),_a=Fe("退出登录");Pe();const ya=ma(((e,a,t,o,s,l)=>{const n=xe("el-badge"),r=xe("el-dropdown-item"),i=xe("el-dropdown-menu"),d=xe("el-dropdown");return ke(),we(d,{onCommand:e.handleCommand},{dropdown:ma((()=>[Ve(i,null,{default:ma((()=>[Ve(r,{command:"read"},{default:ma((()=>[va,Ve(n,{value:e.readCount,type:"success"},null,8,["value"])])),_:1}),Ve(r,{command:"unread"},{default:ma((()=>[ba,Ve(n,{value:e.unreadCount,type:"danger"},null,8,["value"])])),_:1}),Ve(r,{command:"total"},{default:ma((()=>[fa,Ve(n,{value:e.allCount,type:"primary"},null,8,["value"])])),_:1}),Ve(r,{command:"logout",divided:""},{default:ma((()=>[_a])),_:1})])),_:1})])),default:ma((()=>[Ve("div",pa,[Ve("img",{class:"user-avatar",src:e.avatar,alt:""},null,8,["src"]),Ve("div",ha,[Fe(Ne(e.username)+" ",1),ga])])])),_:1},8,["onCommand"])}));ua.render=ya,ua.__scopeId="data-v-2ab7aabe";const Ba=Se({name:"Breadcrumb",setup(e,a){const t=Le(),o=()=>t.matched.filter((e=>e.meta.title)),s=$e(o());return Re((()=>t),(e=>{s.value=o()})),{list:s}}}),xa=Ie();Ae("data-v-202987ca");const ka={key:0};Pe();const wa=xa(((e,a,t,o,s,l)=>{const n=xe("el-breadcrumb-item"),r=xe("el-breadcrumb");return ke(),we(r,{class:"breadcrumb-container",separator:">"},{default:xa((()=>[(ke(!0),we(He,null,Ue(e.list,(e=>(ke(),we(n,{key:e.path},{default:xa((()=>[e.meta.title?(ke(),we("span",ka,Ne(e.meta.title),1)):qe("",!0)])),_:2},1024)))),128))])),_:1})}));Ba.render=wa,Ba.__scopeId="data-v-202987ca";const Va=Se({name:"ThemeBar",setup(){const e=Ce(),a=$e(null);let t=Me({drawerVisible:!1,theme:{name:"ocean",layout:"",header:"fixed",tabsBar:""}});const o=Oe((()=>e.getters["settings/layout"])),s=Oe((()=>e.getters["settings/header"])),l=Oe((()=>e.getters["settings/tabsBar"])),n=Oe((()=>e.getters["settings/themeBar"]));Je((()=>{const e=localStorage.getItem("vue3-admin-theme");e?(t.theme=Object.assign({},JSON.parse(e)),d()):(t.theme.layout=o.value,t.theme.header=s.value,t.theme.tabsBar=l.value)}));const d=()=>{const{name:a,layout:o,header:s,tabsBar:l}=t.theme;localStorage.setItem("vue3-admin-theme",`{\n            "name":"${a}",\n            "layout":"${o}",\n            "header":"${s}",\n            "tabsBar":"${l}"\n          }`),document.body.getBoundingClientRect().width-1<992||e.dispatch("settings/changeLayout"),e.dispatch("settings/changeHeader"),e.dispatch("settings/changeTabsBar"),document.getElementsByTagName("body")[0].className=`vue3-admin-theme-${a}`,t.drawerVisible=!1};return i(r({themeForm:a},ze(t)),{themeBar:n,handleOpenThemeBar:()=>{t.drawerVisible=!0},handleSaveTheme:()=>{d()}})}}),Sa=Ie();Ae("data-v-cde6d54e");const La={key:0},Ca={class:"theme-bar-setting"},Oa=Ve("i",{class:"i-icon el-icon-s-platform"},null,-1),Ra=Ve("p",null,"主题配置",-1),Ea={class:"el-drawer__body"},ja=Fe("暗黑之子"),Ta=Fe("绿荫草场"),Ia=Fe("海洋之心"),Aa=Fe("荣耀典藏"),Pa=Fe("纵向布局"),Ma=Fe("横向布局"),za=Fe("固定头部"),Da=Fe("不固定头部"),Fa=Fe("开启"),Na=Fe("不开启"),$a=Fe(" 保存 ");Pe();const Ha=Sa(((e,a,t,o,s,l)=>{const n=xe("el-radio-button"),r=xe("el-radio-group"),i=xe("el-form-item"),d=xe("el-button"),c=xe("el-form"),u=xe("el-scrollbar"),m=xe("el-drawer");return e.themeBar?(ke(),we("div",La,[Ve("div",Ca,[Ve("div",{onClick:a[1]||(a[1]=(...a)=>e.handleOpenThemeBar&&e.handleOpenThemeBar(...a))},[Oa,Ra])]),Ve(m,{title:"主题配置",modelValue:e.drawerVisible,"onUpdate:modelValue":a[6]||(a[6]=a=>e.drawerVisible=a),direction:"rtl","append-to-body":"",size:"470px"},{default:Sa((()=>[Ve(u,{style:{height:"94vh",overflow:"hidden"}},{default:Sa((()=>[Ve("div",Ea,[Ve(c,{ref:e.themeForm,model:e.theme,"label-position":"top"},{default:Sa((()=>[Ve(i,{label:"主题"},{default:Sa((()=>[Ve(r,{modelValue:e.theme.name,"onUpdate:modelValue":a[2]||(a[2]=a=>e.theme.name=a)},{default:Sa((()=>[Ve(n,{label:"dark"},{default:Sa((()=>[ja])),_:1}),Ve(n,{label:"green"},{default:Sa((()=>[Ta])),_:1}),Ve(n,{label:"ocean"},{default:Sa((()=>[Ia])),_:1}),Ve(n,{label:"glory"},{default:Sa((()=>[Aa])),_:1})])),_:1},8,["modelValue"])])),_:1}),Ve(i,{label:"布局"},{default:Sa((()=>[Ve(r,{modelValue:e.theme.layout,"onUpdate:modelValue":a[3]||(a[3]=a=>e.theme.layout=a)},{default:Sa((()=>[Ve(n,{label:"vertical"},{default:Sa((()=>[Pa])),_:1}),Ve(n,{label:"horizontal"},{default:Sa((()=>[Ma])),_:1})])),_:1},8,["modelValue"])])),_:1}),Ve(i,{label:"头部"},{default:Sa((()=>[Ve(r,{modelValue:e.theme.header,"onUpdate:modelValue":a[4]||(a[4]=a=>e.theme.header=a)},{default:Sa((()=>[Ve(n,{label:"fixed"},{default:Sa((()=>[za])),_:1}),Ve(n,{label:"noFixed"},{default:Sa((()=>[Da])),_:1})])),_:1},8,["modelValue"])])),_:1}),Ve(i,{label:"多标签"},{default:Sa((()=>[Ve(r,{modelValue:e.theme.tabsBar,"onUpdate:modelValue":a[5]||(a[5]=a=>e.theme.tabsBar=a)},{default:Sa((()=>[Ve(n,{label:"true"},{default:Sa((()=>[Fa])),_:1}),Ve(n,{label:"false"},{default:Sa((()=>[Na])),_:1})])),_:1},8,["modelValue"])])),_:1}),Ve(i,null,{default:Sa((()=>[Ve(d,{type:"primary",onClick:e.handleSaveTheme},{default:Sa((()=>[$a])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])])),_:1})])),_:1},8,["modelValue"])])):qe("",!0)}));Va.render=Ha,Va.__scopeId="data-v-cde6d54e";const Ua=Se({name:"NavBar",components:{Breadcrumb:Ba,Avatar:ua,ThemeBar:Va},setup(e,a){const t=Ce();return{collapse:Oe((()=>t.getters["setting/collapse"])),device:Oe((()=>t.getters["setting/device"])),routes:Oe((()=>t.getters["routes/routes"])),handleCollapse:()=>{t.dispatch("settings/changeCollapse")}}}}),qa=Ie();Ae("data-v-1c2e487f");const Ja={class:"nav-bar-container"},Wa={class:"left-panel"},Ga={class:"right-panel"};Pe();const Ka=qa(((e,a,t,o,s,l)=>{const n=xe("breadcrumb"),r=xe("el-col"),i=xe("theme-bar"),d=xe("avatar"),c=xe("el-row");return ke(),we("div",Ja,[Ve(c,{gutter:15},{default:qa((()=>[Ve(r,{xs:4,sm:12,md:12,lg:12,xl:12},{default:qa((()=>[Ve("div",Wa,[Ve("i",{class:[e.collapse?"el-icon-s-unfold":"el-icon-s-fold","fold-unfold"],title:e.collapse?"展开":"收起",onClick:a[1]||(a[1]=(...a)=>e.handleCollapse&&e.handleCollapse(...a))},null,10,["title"]),Ve(n,{class:"hidden-xs-only"})])])),_:1}),Ve(r,{xs:20,sm:12,md:12,lg:12,xl:12},{default:qa((()=>[Ve("div",Ga,[Ve(i,{class:"hidden-xs-only"}),Ve(d)])])),_:1})])),_:1})])}));Ua.render=Ka,Ua.__scopeId="data-v-1c2e487f";var Qa={"menu-color":"rgba(255, 255, 255, 0.95)","menu-color-active":"rgba(255, 255, 255, 0.95)","menu-background":"#2f3447"};const Xa=Se({name:"SideBarItem",props:{item:{type:Object,required:!0},index:{type:String,default:""}},setup(e){const a=Le(),t=De();return{handleRouteLink:()=>{if(e.item){const o=e.item.path;if(/^(https?:|mailto:|tel:)/.test(o))return void window.open(o);a.path!==o&&t.push(o)}}}}}),Ya={key:0},Za={class:"menu-wrapper"};Xa.render=function(e,a,t,o,s,l){const n=xe("el-menu-item"),r=xe("side-bar-item",!0),i=xe("el-submenu");return e.item.meta&&!e.item.hidden?(ke(),we("div",Ya,[Ve("div",Za,[e.item.children&&e.item.children.length?(ke(),we(i,{key:1,index:e.item.path},{title:We((()=>[e.item.meta.icon?(ke(),we("i",{key:0,class:[e.item.meta.icon,"elIcon"]},null,2)):qe("",!0),Ve("span",null,Ne(e.item.meta.title),1)])),default:We((()=>[(ke(!0),we(He,null,Ue(e.item.children,(e=>(ke(),we(r,{key:e.path,index:e.path,item:e},null,8,["index","item"])))),128))])),_:1},8,["index"])):(ke(),we(n,{key:0,index:e.item.path,onClick:e.handleRouteLink},{title:We((()=>[Ve("span",null,Ne(e.item.meta.title),1)])),default:We((()=>[e.item.meta.icon?(ke(),we("i",{key:0,class:[e.item.meta.icon,"elIcon"]},null,2)):qe("",!0)])),_:1},8,["index","onClick"]))])])):qe("",!0)};const et=Se({name:"Logo",setup(e,a){const t=Ce();return{title:$e("机场文件管理系统"),logo:Oe((()=>t.getters["settings/logo"])),layout:Oe((()=>t.getters["settings/layout"]))}}}),at=Ie(),tt=at(((e,a,t,o,s,l)=>{const n=xe("router-link");return ke(),we("div",{class:"logo-container-"+e.layout},[Ve(n,{to:"/"},{default:at((()=>[e.logo?(ke(),we("i",{key:0,class:["logo",[e.logo]]},null,2)):qe("",!0),Ve("span",{class:["title",{"hidden-xs-only":"horizontal"===e.layout}]},Ne(e.title),3)])),_:1})],2)}));et.render=tt,et.__scopeId="data-v-aa19d23a";const ot=Se({name:"SideBar",components:{SideBarItem:Xa,Logo:et},setup(e,a){const t=$e([]),o=Le();De();const s=Ce(),l=Oe((()=>s.getters["settings/collapse"]));t.value=[...vt];return{collapse:l,routeList:t,activeMenu:Oe((()=>{const{meta:e,path:a}=o;return e.activeMenu?e.activeMenu:a})),colorVariables:Oe((()=>Qa))}}}),st=Ie(),lt=st(((e,a,t,o,s,l)=>{const n=xe("logo"),r=xe("side-bar-item"),i=xe("el-menu"),d=xe("el-scrollbar");return ke(),we(d,{class:["side-bar-container",{"is-collapse":e.collapse}]},{default:st((()=>[Ve(n),Ve(i,{"background-color":e.colorVariables["menu-background"],"text-color":e.colorVariables["menu-color"],"active-text-color":e.colorVariables["menu-color-active"],"default-active":e.activeMenu,collapse:e.collapse,"collapse-transition":!1,"unique-opened":!0,mode:"vertical"},{default:st((()=>[(ke(!0),we(He,null,Ue(e.routeList,(e=>(ke(),we(r,{key:e.path,index:e.path,item:e},null,8,["index","item"])))),128))])),_:1},8,["background-color","text-color","active-text-color","default-active","collapse"])])),_:1},8,["class"])}));ot.render=lt,ot.__scopeId="data-v-db50b306";const nt=Se({name:"TopBar",components:{Logo:et,SideBarItem:Xa,Avatar:ua},setup(e,a){const t=Ce(),o=Le();Me({});return{routes:Oe((()=>t.getters["routes/routes"])),activeMenu:Oe((()=>{const{meta:e,path:a}=o;return e.activeMenu?e.activeMenu:a})),colorVariables:Oe((()=>Qa))}}}),rt=Ie();Ae("data-v-52b9c9c4");const it={class:"top-bar-container"},dt={class:"top-bar-main"},ct={class:"right-panel"};Pe();const ut=rt(((e,a,t,o,s,l)=>{const n=xe("logo"),r=xe("el-col"),i=xe("side-bar-item"),d=xe("el-menu"),c=xe("avatar"),u=xe("el-row");return ke(),we("div",it,[Ve("div",dt,[Ve(u,null,{default:rt((()=>[Ve(r,{xl:7,lg:7,md:7,sm:7,xs:7},{default:rt((()=>[Ve(n)])),_:1}),Ve(r,{xl:12,lg:12,md:12,sm:12,xs:12},{default:rt((()=>[Ve(d,{"background-color":e.colorVariables["menu-background"],"text-color":e.colorVariables["menu-color"],"active-text-color":e.colorVariables["menu-color-active"],"default-active":e.activeMenu,mode:"horizontal","menu-trigger":"hover"},{default:rt((()=>[(ke(!0),we(He,null,Ue(e.routes,(e=>(ke(),we(i,{key:e.path,item:e},null,8,["item"])))),128))])),_:1},8,["background-color","text-color","active-text-color","default-active"])])),_:1}),Ve(r,{xl:5,lg:5,md:5,sm:5,xs:5},{default:rt((()=>[Ve("div",ct,[Ve(c)])])),_:1})])),_:1})])])}));nt.render=ut,nt.__scopeId="data-v-52b9c9c4";const mt=Se({name:"Layout",components:{AppMain:ra,NavBar:Ua,SideBar:ot,TopBar:nt},setup(){const e=Le();De();const a=Ce(),t=$e(""),o=Oe((()=>a.getters["settings/layout"])),s=Oe((()=>a.getters["settings/tabsBar"])),l=Oe((()=>a.getters["settings/collapse"])),n=Oe((()=>a.getters["settings/header"])),r=Oe((()=>a.getters["settings/device"])),i=Oe((()=>({mobile:"mobile"===r.value})));Ge((()=>{window.addEventListener("resize",u)})),Ke((()=>{window.removeEventListener("resize",u)})),Je((()=>{t.value=o.value;c()?(a.dispatch("settings/changeLayout","vertical"),a.dispatch("settings/toggleDevice","mobile"),a.dispatch("settings/foldSideBar")):(a.dispatch("settings/changeLayout",t.value),a.dispatch("settings/openSideBar"))})),Re((()=>e),(e=>{"mobile"!==r.value||l.value||a.dispatch("settings/foldSideBar")}));const d=()=>{a.dispatch("settings/foldSideBar")},c=()=>document.body.getBoundingClientRect().width-1<992,u=()=>{if(!document.hidden){const e=c();e?(a.dispatch("settings/changeLayout","vertical"),d()):(a.dispatch("settings/changeLayout",t.value),d()),a.dispatch("settings/toggleDevice",e?"mobile":"desktop")}};return{oldLayout:t,layout:o,tabsBar:s,collapse:l,header:n,device:r,classObj:i,handleFoldSideBar:d,handleResize:u}}}),pt=Ie();Ae("data-v-96429692");const ht={class:"main main-padding"};Pe();const gt=pt(((e,a,t,o,s,l)=>{const n=xe("top-bar"),r=xe("app-main"),i=xe("side-bar"),d=xe("nav-bar"),c=xe("el-backtop");return ke(),we("div",{class:["layout-wrapper",e.classObj]},["horizontal"===e.layout?(ke(),we("div",{key:0,class:["layout-container-horizontal",{fixed:"fixed"===e.header,"no-tabs-bar":"false"===e.tabsBar||!1===e.tabsBar}]},[Ve("div",{class:"fixed"===e.header?"fixed-header":""},[Ve(n)],2),Ve("div",ht,[Ve(r)])],2)):(ke(),we("div",{key:1,class:["layout-container-vertical",{fixed:"fixed"===e.header,"no-tabs-bar":"false"===e.tabsBar||!1===e.tabsBar}]},["mobile"===e.device&&!1===e.collapse?(ke(),we("div",{key:0,class:"mask",onClick:a[1]||(a[1]=(...a)=>e.handleFoldSideBar&&e.handleFoldSideBar(...a))})):qe("",!0),Ve(i),Ve("div",{class:["main",e.collapse?"is-collapse-main":""]},[Ve("div",{class:"fixed"===e.header?"fixed-header":""},[Ve(d)],2),Ve(r)],2)],2)),Ve(c)],2)}));mt.render=gt,mt.__scopeId="data-v-96429692";const vt=[{path:"/login",name:"Login",meta:{title:"登录"},hidden:!0,component:()=>na((()=>import("./index.b27f487b.js")),["./assets/index.b27f487b.js","./assets/index.d303c294.css","./assets/vendor.6d01491c.js"])},{path:"/",component:mt,redirect:"/file",meta:{name:"Home",title:"首页",icon:"el-icon-document"},children:[{path:"/file",component:()=>na((()=>import("./index.68123f0d.js")),["./assets/index.68123f0d.js","./assets/index.6b347d22.css","./assets/vendor.6d01491c.js"]),name:"File",meta:{title:"培训手册",icon:"el-icon-document"}},{path:"/form",component:()=>na((()=>import("./index.81f0e5ed.js")),["./assets/index.81f0e5ed.js","./assets/vendor.6d01491c.js"]),name:"Form",meta:{title:"表单",icon:"el-icon-document"}}]},{path:"/401",name:"401",component:()=>na((()=>import("./401.762a4ddb.js")),["./assets/401.762a4ddb.js","./assets/401.3eefa5ea.css","./assets/vendor.6d01491c.js","./assets/cloud.2f5c1094.js"]),hidden:!0},{path:"/404",name:"404",component:()=>na((()=>import("./404.f2cc9073.js")),["./assets/404.f2cc9073.js","./assets/404.5f927fca.css","./assets/vendor.6d01491c.js","./assets/cloud.2f5c1094.js"]),hidden:!0}],bt=[],ft=Qe({history:Xe(),routes:vt,scrollBehavior:()=>({top:0})});var _t={state:()=>({routes:[...vt],partialRoutes:[]}),getters:{routes:e=>e.routes,partialRoutes:e=>e.partialRoutes},mutations:{setRoutes(e,a){e.routes=vt.concat(a)},setAllRoutes(e,a){e.routes=vt.concat(a)},setPartialRoutes(e,a){e.partialRoutes=vt.concat(a)}},actions:{async setRoutes({commit:e},a){const t=await filterAsyncRoutes([...bt],a);return e("setRoutes",t),t},async setAllRoutes({commit:e}){let{data:a}=await getRouterList();a.push({path:"*",redirect:"/404",hidden:!0});let t=convertRouter(a);return e("setAllRoutes",t),t},setPartialRoutes:({commit:e},a)=>(e("setPartialRoutes",a),a)}},yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_t});const{tabsBar:Bt,logo:xt,layout:kt,header:wt,themeBar:Vt}={header:"fixed",layout:"vertical",themeBar:!1,tabsBar:!1,title:"vue3-vite-app",contentType:"application/json;charset=UTF-8",devPort:"80",progressBar:!0,keepAliveMaxNum:99,routerMode:"hash",routesWhiteList:["/login","/register","/404","/401"],logo:"el-icon-s-home"},St=JSON.parse(localStorage.getItem("vue3-admin-theme"))||"";var Lt={state:()=>({tabsBar:St.tabsBar||Bt,logo:xt,collapse:!1,layout:St.layout||kt,header:St.header||wt,device:"desktop",themeBar:Vt}),getters:{collapse:e=>e.collapse,device:e=>e.device,header:e=>e.header,layout:e=>e.layout,logo:e=>e.logo,tabsBar:e=>e.tabsBar,themeBar:e=>e.themeBar},mutations:{changeLayout:(e,a)=>{a&&(e.layout=a)},changeHeader:(e,a)=>{a&&(e.header=a)},changeTabsBar:(e,a)=>{a&&(e.tabsBar=a)},changeCollapse:e=>{e.collapse=!e.collapse},foldSideBar:e=>{e.collapse=!0},openSideBar:e=>{e.collapse=!1},toggleDevice:(e,a)=>{e.device=a}},actions:{changeLayout({commit:e},a){e("changeLayout",a)},changeHeader({commit:e},a){e("changeHeader",a)},changeTabsBar({commit:e},a){e("changeTabsBar",a)},changeCollapse({commit:e}){e("changeCollapse")},foldSideBar({commit:e}){e("foldSideBar")},openSideBar({commit:e}){e("openSideBar")},toggleDevice({commit:e},a){e("toggleDevice",a)}}};const Ct={"./modules/routes.js":yt,"./modules/settings.js":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Lt})};let Ot={};Object.keys(Ct).forEach((e=>{Ot[e.replace(/(\.\/modules\/|\.js)/g,"")]=Ct[e].default})),Object.keys(Ot).forEach((e=>{Ot[e].namespaced=!0}));const Rt=Ye({modules:Ot,strict:"production"!=={}.NODE_ENV});const Et=Ze(ta);ea.forEach((e=>{Et.component(e.name,e)})),aa.forEach((e=>{Et.use(e)})),Et.use(ft),Et.use(Rt),Et.mount("#app");
//# sourceMappingURL=index.994bbde1.js.map