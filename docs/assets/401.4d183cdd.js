var a=Object.defineProperty,e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,r,s)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s;import{as as t,aB as i,aF as o,at as c,ai as n,au as p,ad as d,af as u,ag as m,aw as b,ap as f,aq as v,ar as h,ae as g}from"./vendor.aafafc6b.js";import{_ as j}from"./cloud.2f5c1094.js";const y={name:"Page401",setup(a,d){let u=null;n();const m=p(),b=t({jumpTime:5,oops:"抱歉!",headline:"您没有操作权限...",info:"当前帐号没有操作权限,请联系管理员。",btn:"返回",timer:0});return i((()=>{u=setInterval((()=>{b.jumpTime?b.jumpTime--:(m.push({path:"/"}),clearInterval(u))}),1e3)})),o((()=>{u&&clearInterval(u)})),((a,t)=>{for(var i in t||(t={}))r.call(t,i)&&l(a,i,t[i]);if(e)for(var i of e(t))s.call(t,i)&&l(a,i,t[i]);return a})({},c(b))}},x=f();v("data-v-0b32b671");const O={class:"error-container"},_={class:"error-content"},w=m("div",{class:"pic-error"},[m("img",{alt:"401",class:"pic-error-parent",src:"/airport-file/assets/401.97b5c8eb.png"}),m("img",{alt:"401",class:"pic-error-child left",src:j}),m("img",{alt:"401",class:"pic-error-child",src:j}),m("img",{alt:"401",class:"pic-error-child",src:j})],-1),I={class:"bullshit"},P={class:"bullshit-oops"},T={class:"bullshit-headline"},q={class:"bullshit-info"},B={class:"bullshit-return-home",href:"#/index"};h();const E=x(((a,e,r,s,l,t)=>{const i=d("el-col"),o=d("el-row");return g(),u("div",O,[m("div",_,[m(o,{gutter:20},{default:x((()=>[m(i,{xs:24,sm:24,md:12,lg:12,xl:12},{default:x((()=>[w])),_:1}),m(i,{xs:24,sm:24,md:12,lg:12,xl:12},{default:x((()=>[m("div",I,[m("div",P,b(a.oops),1),m("div",T,b(a.headline),1),m("div",q,b(a.info),1),m("a",B,b(a.jumpTime)+"s "+b(a.btn),1)])])),_:1})])),_:1})])])}));y.render=E,y.__scopeId="data-v-0b32b671";export default y;
//# sourceMappingURL=401.4d183cdd.js.map