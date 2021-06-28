var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(a,o,r)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[o]=r;import{az as d,aK as t,aR as i,aS as u,a$ as c,aT as m,aL as p,aA as f,as as g,av as b,ax as v,ay as w,b0 as h,aH as y,aI as M,aM as O,aJ as j,aw as _}from"./vendor.3da3c096.js";import"./index.7b15476a.js";const L=d({name:"Login",setup(){const e=p();f();const d=t(null),b=i({redirect:"",formModel:{username:"",password:""},formRules:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]},loading:!1});u((()=>{})),c((()=>{}));return v=((e,a)=>{for(var o in a||(a={}))s.call(a,o)&&n(e,o,a[o]);if(r)for(var o of r(a))l.call(a,o)&&n(e,o,a[o]);return e})({},m(b)),a(v,o({userLoginForm:d,resetFormFields:()=>{b.formModel={username:"",password:""},d.value.resetFields()},handleLogin:()=>{const{username:a,password:o}=b.formModel,r={username:a,password:o};d.value.validate((a=>{if(!a)return console.log("invalid form"),!1;b.loading=!0,store.dispatch("user/login",r).then((a=>{0==+a.code?(g.success("登录成功"),e.push({path:b.redirect||"/"})):g.error(a.message||"登录错误"),b.loading=!1})).catch((()=>{b.loading=!1}))}))}}));var v}}),V=y();M("data-v-206aecd6");const k={class:"login"},x=w("div",{class:"login-bk"},[w("div",{class:"login-bk-shadow"})],-1),F={class:"login-container"},P=O(" 登录 ");j();const I=V(((e,a,o,r,s,l)=>{const n=b("el-input"),d=b("el-form-item"),t=b("el-button"),i=b("el-form");return _(),v("div",k,[x,w("div",F,[w(i,{ref:"userLoginForm",model:e.formModel,rules:e.formRules,class:"login-form","label-position":"left"},{default:V((()=>[w(d,{prop:"username"},{default:V((()=>[w(n,{modelValue:e.formModel.username,"onUpdate:modelValue":a[1]||(a[1]=a=>e.formModel.username=a),"prefix-icon":"el-icon-user",placeholder:"用户名"},null,8,["modelValue"])])),_:1}),w(d,{prop:"password"},{default:V((()=>[w(n,{modelValue:e.formModel.password,"onUpdate:modelValue":a[2]||(a[2]=a=>e.formModel.password=a),"show-password":"","prefix-icon":"el-icon-lock",placeholder:"密码"},null,8,["modelValue"])])),_:1}),w(d,null,{default:V((()=>[w(t,{loading:e.loading,type:"primary",class:"login-btn",onClick:h(e.handleLogin,["prevent"])},{default:V((()=>[P])),_:1},8,["loading","onClick"])])),_:1})])),_:1},8,["model","rules"])])])}));L.render=I,L.__scopeId="data-v-206aecd6";export default L;
