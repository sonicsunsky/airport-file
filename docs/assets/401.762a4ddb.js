var a=Object.defineProperty,e=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(e,s,r)=>s in e?a(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r;import{as as t,aB as o,aE as c,at as i,ai as n,au as p,ad as d,af as u,ag as m,aw as b,ap as f,aq as v,ar as h,ae as g}from"./vendor.6d01491c.js";import{_ as j}from"./cloud.2f5c1094.js";const y={name:"Page401",setup(a,d){let u=null;n();const m=p(),b=t({jumpTime:5,oops:"抱歉!",headline:"您没有操作权限...",info:"当前帐号没有操作权限,请联系管理员。",btn:"返回",timer:0});return o((()=>{u=setInterval((()=>{b.jumpTime?b.jumpTime--:(m.push({path:"/"}),clearInterval(u))}),1e3)})),c((()=>{u&&clearInterval(u)})),((a,t)=>{for(var o in t||(t={}))s.call(t,o)&&l(a,o,t[o]);if(e)for(var o of e(t))r.call(t,o)&&l(a,o,t[o]);return a})({},i(b))}},x=f();v("data-v-0b32b671");const O={class:"error-container"},_={class:"error-content"},w=m("div",{class:"pic-error"},[m("img",{alt:"401",class:"pic-error-parent",src:"./assets/401.97b5c8eb.png"}),m("img",{alt:"401",class:"pic-error-child left",src:j}),m("img",{alt:"401",class:"pic-error-child",src:j}),m("img",{alt:"401",class:"pic-error-child",src:j})],-1),I={class:"bullshit"},P={class:"bullshit-oops"},T={class:"bullshit-headline"},E={class:"bullshit-info"},q={class:"bullshit-return-home",href:"#/index"};h();const B=x(((a,e,s,r,l,t)=>{const o=d("el-col"),c=d("el-row");return g(),u("div",O,[m("div",_,[m(c,{gutter:20},{default:x((()=>[m(o,{xs:24,sm:24,md:12,lg:12,xl:12},{default:x((()=>[w])),_:1}),m(o,{xs:24,sm:24,md:12,lg:12,xl:12},{default:x((()=>[m("div",I,[m("div",P,b(a.oops),1),m("div",T,b(a.headline),1),m("div",E,b(a.info),1),m("a",q,b(a.jumpTime)+"s "+b(a.btn),1)])])),_:1})])),_:1})])])}));y.render=B,y.__scopeId="data-v-0b32b671";export default y;
//# sourceMappingURL=401.762a4ddb.js.map