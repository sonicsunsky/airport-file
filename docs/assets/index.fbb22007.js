var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;import{aL as s,ah as l,aM as c,as as u,ak as d,aB as f,aK as p,at as h,au as m,ai as g,aj as y,ad as b,aN as v,af as w,ag as C,aO as x,aP as k,av as E,aw as S,aC as j,aQ as O,ap as U,aq as L,ar as R,ae as N}from"./vendor.c0b616d0.js";const P=["https://vkceyugu.cdn.bspapp.com/VKCEYUGU-74003dee-fc32-4213-84d5-a66438daaefb/1211887c-5741-421d-941e-09a02f4a4147.docx","https://vkceyugu.cdn.bspapp.com/VKCEYUGU-74003dee-fc32-4213-84d5-a66438daaefb/61d53d29-6548-4f4d-849c-65cf9c8dae1d.pdf","https://vkceyugu.cdn.bspapp.com/VKCEYUGU-74003dee-fc32-4213-84d5-a66438daaefb/5dbac6ac-38b4-4056-846d-7fe5a1e4fec0.pdf","https://vkceyugu.cdn.bspapp.com/VKCEYUGU-74003dee-fc32-4213-84d5-a66438daaefb/3032f6b8-6f4f-4a8e-84d9-1161e6d1408d.xlsx"],A=[{label:"文件一级 1",children:[{label:"文件二级 1-1",children:[{label:"文件三级 1-1-1"}]}]},{label:"文件一级 2",children:[{label:"文件二级 2-1",children:[{label:"文件三级 2-1-1"}]},{label:"文件二级 2-2",children:[{label:"文件三级 2-2-1"}]}]},{label:"文件一级 3",children:[{label:"文件二级 3-1",children:[{label:"文件三级 3-1-1"}]},{label:"文件二级 3-2",children:[{label:"文件三级 3-2-1"}]}]}];var _={exports:{}},D=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},T=D,B=Object.prototype.toString;function F(e){return"[object Array]"===B.call(e)}function z(e){return void 0===e}function q(e){return null!==e&&"object"==typeof e}function V(e){if("[object Object]"!==B.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function M(e){return"[object Function]"===B.call(e)}function Q(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),F(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}var H={isArray:F,isArrayBuffer:function(e){return"[object ArrayBuffer]"===B.call(e)},isBuffer:function(e){return null!==e&&!z(e)&&null!==e.constructor&&!z(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:q,isPlainObject:V,isUndefined:z,isDate:function(e){return"[object Date]"===B.call(e)},isFile:function(e){return"[object File]"===B.call(e)},isBlob:function(e){return"[object Blob]"===B.call(e)},isFunction:M,isStream:function(e){return q(e)&&M(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:Q,merge:function e(){var t={};function n(n,r){V(t[r])&&V(n)?t[r]=e(t[r],n):V(n)?t[r]=e({},n):F(n)?t[r]=n.slice():t[r]=n}for(var r=0,a=arguments.length;r<a;r++)Q(arguments[r],n);return t},extend:function(e,t,n){return Q(t,(function(t,r){e[r]=n&&"function"==typeof t?T(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},K=H;function I(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Y=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(K.isURLSearchParams(t))r=t.toString();else{var a=[];K.forEach(t,(function(e,t){null!=e&&(K.isArray(e)?t+="[]":e=[e],K.forEach(e,(function(e){K.isDate(e)?e=e.toISOString():K.isObject(e)&&(e=JSON.stringify(e)),a.push(I(t)+"="+I(e))})))})),r=a.join("&")}if(r){var o=e.indexOf("#");-1!==o&&(e=e.slice(0,o)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},G=H;function X(){this.handlers=[]}X.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},X.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},X.prototype.forEach=function(e){G.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var $=X,J=H,W=function(e){return!(!e||!e.__CANCEL__)},Z=H,ee=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},te=function(e,t,n,r,a){var o=new Error(e);return ee(o,t,n,r,a)},ne=te,re=H,ae=re.isStandardBrowserEnv()?{write:function(e,t,n,r,a,o){var i=[];i.push(e+"="+encodeURIComponent(t)),re.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),re.isString(r)&&i.push("path="+r),re.isString(a)&&i.push("domain="+a),!0===o&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},oe=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},ie=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},se=H,le=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],ce=H,ue=ce.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=ce.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},de=H,fe=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(ne("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)},pe=ae,he=Y,me=function(e,t){return e&&!oe(t)?ie(e,t):t},ge=function(e){var t,n,r,a={};return e?(se.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=se.trim(e.substr(0,r)).toLowerCase(),n=se.trim(e.substr(r+1)),t){if(a[t]&&le.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a},ye=ue,be=te,ve=function(e){return new Promise((function(t,n){var r=e.data,a=e.headers;de.isFormData(r)&&delete a["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var i=e.auth.username||"",s=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.Authorization="Basic "+btoa(i+":"+s)}var l=me(e.baseURL,e.url);if(o.open(e.method.toUpperCase(),he(l,e.params,e.paramsSerializer),!0),o.timeout=e.timeout,o.onreadystatechange=function(){if(o&&4===o.readyState&&(0!==o.status||o.responseURL&&0===o.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in o?ge(o.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?o.response:o.responseText,status:o.status,statusText:o.statusText,headers:r,config:e,request:o};fe(t,n,a),o=null}},o.onabort=function(){o&&(n(be("Request aborted",e,"ECONNABORTED",o)),o=null)},o.onerror=function(){n(be("Network Error",e,null,o)),o=null},o.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(be(t,e,"ECONNABORTED",o)),o=null},de.isStandardBrowserEnv()){var c=(e.withCredentials||ye(l))&&e.xsrfCookieName?pe.read(e.xsrfCookieName):void 0;c&&(a[e.xsrfHeaderName]=c)}if("setRequestHeader"in o&&de.forEach(a,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete a[t]:o.setRequestHeader(t,e)})),de.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),e.responseType)try{o.responseType=e.responseType}catch(u){if("json"!==e.responseType)throw u}"function"==typeof e.onDownloadProgress&&o.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){o&&(o.abort(),n(e),o=null)})),r||(r=null),o.send(r)}))},we=H,Ce=function(e,t){Z.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},xe={"Content-Type":"application/x-www-form-urlencoded"};function ke(e,t){!we.isUndefined(e)&&we.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Ee,Se={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Ee=ve),Ee),transformRequest:[function(e,t){return Ce(t,"Accept"),Ce(t,"Content-Type"),we.isFormData(e)||we.isArrayBuffer(e)||we.isBuffer(e)||we.isStream(e)||we.isFile(e)||we.isBlob(e)?e:we.isArrayBufferView(e)?e.buffer:we.isURLSearchParams(e)?(ke(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):we.isObject(e)?(ke(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};Se.headers={common:{Accept:"application/json, text/plain, */*"}},we.forEach(["delete","get","head"],(function(e){Se.headers[e]={}})),we.forEach(["post","put","patch"],(function(e){Se.headers[e]=we.merge(xe)}));var je=Se,Oe=H,Ue=function(e,t,n){return J.forEach(n,(function(n){e=n(e,t)})),e},Le=W,Re=je;function Ne(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var Pe=H,Ae=function(e,t){t=t||{};var n={},r=["url","method","data"],a=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function s(e,t){return Pe.isPlainObject(e)&&Pe.isPlainObject(t)?Pe.merge(e,t):Pe.isPlainObject(t)?Pe.merge({},t):Pe.isArray(t)?t.slice():t}function l(r){Pe.isUndefined(t[r])?Pe.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(e[r],t[r])}Pe.forEach(r,(function(e){Pe.isUndefined(t[e])||(n[e]=s(void 0,t[e]))})),Pe.forEach(a,l),Pe.forEach(o,(function(r){Pe.isUndefined(t[r])?Pe.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(void 0,t[r])})),Pe.forEach(i,(function(r){r in t?n[r]=s(e[r],t[r]):r in e&&(n[r]=s(void 0,e[r]))}));var c=r.concat(a).concat(o).concat(i),u=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return Pe.forEach(u,l),n},_e=H,De=Y,Te=$,Be=function(e){return Ne(e),e.headers=e.headers||{},e.data=Ue(e.data,e.headers,e.transformRequest),e.headers=Oe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Oe.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Re.adapter)(e).then((function(t){return Ne(e),t.data=Ue(t.data,t.headers,e.transformResponse),t}),(function(t){return Le(t)||(Ne(e),t&&t.response&&(t.response.data=Ue(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Fe=Ae;function ze(e){this.defaults=e,this.interceptors={request:new Te,response:new Te}}ze.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=Fe(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[Be,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},ze.prototype.getUri=function(e){return e=Fe(this.defaults,e),De(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},_e.forEach(["delete","get","head","options"],(function(e){ze.prototype[e]=function(t,n){return this.request(Fe(n||{},{method:e,url:t,data:(n||{}).data}))}})),_e.forEach(["post","put","patch"],(function(e){ze.prototype[e]=function(t,n,r){return this.request(Fe(r||{},{method:e,url:t,data:n}))}}));var qe=ze;function Ve(e){this.message=e}Ve.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Ve.prototype.__CANCEL__=!0;var Me=Ve,Qe=Me;function He(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new Qe(e),t(n.reason))}))}He.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},He.source=function(){var e;return{token:new He((function(t){e=t})),cancel:e}};var Ke=He,Ie=H,Ye=D,Ge=qe,Xe=Ae;function $e(e){var t=new Ge(e),n=Ye(Ge.prototype.request,t);return Ie.extend(n,Ge.prototype,t),Ie.extend(n,t),n}var Je=$e(je);Je.Axios=Ge,Je.create=function(e){return $e(Xe(Je.defaults,e))},Je.Cancel=Me,Je.CancelToken=Ke,Je.isCancel=W,Je.all=function(e){return Promise.all(e)},Je.spread=function(e){return function(t){return e.apply(null,t)}},Je.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},_.exports=Je,_.exports.default=Je;var We=_.exports;var Ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",downloadFile:(e,t,n)=>{We.get(e,{responseType:"blob"}).then((e=>{if(!e)return;console.log("downloadFile:",e);let r=new Blob([e.data],{type:n}),a=document.createElement("a");a.download=t,a.style.display="none",a.href=URL.createObjectURL(r),document.body.appendChild(a),a.click(),URL.revokeObjectURL(a.href),document.body.removeChild(a)})).catch((e=>{console.error(error)}))}});Object.assign({},Ze);const et=l({name:"File",setup(){console.log("getCurrentInstance: ",c()),m(),g();const e=y(),l=u({showDisclaimer:!0,keyword:"",defaultProps:{children:"children",label:"label"},catalogData:[],total:0,listQuery:{page:1,limit:10},tableLoading:!1,fileList:[]}),b=d((()=>e.getters["settings/device"]));f((()=>{l.catalogData=[...A],l.total=100,w()})),p((()=>{}));const v=()=>{l.keyword="",w()},w=()=>{l.tableLoading=!0;const e=Math.floor(10*Math.random()+1);console.log(e),setTimeout((()=>{const t=(e=>new Array(e).fill("").map(((e,t)=>({id:t+1,role:Math.random()>.5?"admin":"visitor",name:`机场文件${t+1}`,status:Math.random()>.5?"read":"unread",date:s().format("YYYY-MM-DD HH:mm:ss"),mime:"application/pdf",download_url:P[t%4],href:P[t%4]}))))(e);l.fileList=[...t],l.tableLoading=!1}),500)};return C=((e,t)=>{for(var n in t||(t={}))a.call(t,n)&&i(e,n,t[n]);if(r)for(var n of r(t))o.call(t,n)&&i(e,n,t[n]);return e})({},h(l)),t(C,n({device:b,openFileDetail:({href:e})=>{e&&window.open(e)},handleDownloadFile:({download_url:e,name:t,mime:n})=>{!function(e,t){let n=document.createElement("a");n.style.display="none",n.href=e,n.setAttribute("download",t),document.body.appendChild(n),n.click(),document.body.removeChild(n)}(e,t)},onSearchFileList:()=>{""!==l.keyword.trim()&&w()},fetchFileList:v,handleSizeChange:e=>{l.listQuery.limit=e,v()},handleCurrentChange:e=>{l.listQuery.page=e,v()},handleTreeNodeClick:e=>{console.log(e),w()}}));var C}}),tt=U();L("data-v-39a2e10f");const nt={class:"file"},rt=C("div",{class:"disclaimer"},[C("span",null," 免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明 免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明 ")],-1),at={class:"disclaimer-footer"},ot=E("接受以上免责声明"),it={key:0,class:"lay-mobile"},st={class:"search-input"},lt=C("div",{class:"title"},"文件搜索",-1),ct={class:"file-table"},ut=E(" 查看详情 "),dt=E("下载"),ft={key:1,class:"lay-pc"},pt={class:"search-input"},ht=C("div",{class:"title"},"文件搜索",-1),mt={class:"file-table"},gt=E("查看详情"),yt=E("下载");R();const bt=tt(((e,t,n,r,a,o)=>{const i=b("el-button"),s=b("el-dialog"),l=b("el-tree"),c=b("el-input"),u=b("el-table-column"),d=b("el-tag"),f=b("el-table"),p=b("el-pagination"),h=b("el-col"),m=b("el-row"),g=v("loading");return N(),w("div",nt,[C(s,{title:"免责声明弹窗",modelValue:e.showDisclaimer,"onUpdate:modelValue":t[2]||(t[2]=t=>e.showDisclaimer=t),width:"50%",center:"","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:tt((()=>[C("div",at,[C(i,{type:"primary",onClick:t[1]||(t[1]=t=>e.showDisclaimer=!1)},{default:tt((()=>[ot])),_:1})])])),default:tt((()=>[rt])),_:1},8,["modelValue"]),"mobile"===e.device?(N(),w("div",it,[C(l,{accordion:"","default-expand-all":"","expand-on-click-node":!1,data:e.catalogData,props:e.defaultProps,onNodeClick:e.handleTreeNodeClick},null,8,["data","props","onNodeClick"]),C("div",st,[lt,C(c,{modelValue:e.keyword,"onUpdate:modelValue":t[3]||(t[3]=t=>e.keyword=t),placeholder:"请输入查询文件的名称",onKeyup:x(e.onSearchFileList,["enter"])},{append:tt((()=>[C(i,{icon:"el-icon-search",onClick:e.onSearchFileList},null,8,["onClick"])])),_:1},8,["modelValue","onKeyup"])]),C("div",ct,[k(C(f,{"element-loading-text":"文件加载中","element-loading-spinner":"el-icon-loading",data:e.fileList,stripe:"",style:{width:"100%"},"max-height":"1000px"},{default:tt((()=>[C(u,{prop:"name",label:"文件名称"}),C(u,{label:"是否已读"},{default:tt((({row:e})=>[C(d,{type:"read"===e.status?"success":"danger"},{default:tt((()=>[E(S("read"===e.status?"已读":"未读"),1)])),_:2},1032,["type"])])),_:1}),C(u,{prop:"date",label:"上传时间"}),C(u,{label:"操作"},{default:tt((({row:t})=>[C(i,{type:"text",icon:"el-icon-view",onClick:e.openFileDetail},{default:tt((()=>[ut])),_:1},8,["onClick"]),"admin"===t.role?(N(),w(i,{key:0,icon:"el-icon-download",type:"text",onClick:n=>e.handleDownloadFile(t)},{default:tt((()=>[dt])),_:2},1032,["onClick"])):j("",!0)])),_:1})])),_:1},8,["data"]),[[g,e.tableLoading]])]),k(C(p,{background:"","page-size":e.listQuery.limit,"onUpdate:page-size":t[4]||(t[4]=t=>e.listQuery.limit=t),"page-sizes":[10,20,30,50],currentPage:e.listQuery.page,"onUpdate:currentPage":t[5]||(t[5]=t=>e.listQuery.page=t),layout:"prev, pager, next",total:e.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["page-size","currentPage","total","onSizeChange","onCurrentChange"]),[[O,e.total>0]])])):(N(),w("div",ft,[C(m,{type:"flex",gutter:10},{default:tt((()=>[C(h,{xs:8,sm:8,md:6,lg:6,xl:6},{default:tt((()=>[C(l,{accordion:"","default-expand-all":"","expand-on-click-node":!1,data:e.catalogData,props:e.defaultProps,onNodeClick:e.handleTreeNodeClick},null,8,["data","props","onNodeClick"])])),_:1}),C(h,{xs:16,sm:16,md:18,lg:18,xl:18},{default:tt((()=>[C("div",pt,[ht,C(c,{modelValue:e.keyword,"onUpdate:modelValue":t[6]||(t[6]=t=>e.keyword=t),placeholder:"请输入查询文件的名称",onKeyup:x(e.onSearchFileList,["enter"])},{append:tt((()=>[C(i,{icon:"el-icon-search",onClick:e.onSearchFileList},null,8,["onClick"])])),_:1},8,["modelValue","onKeyup"])]),C("div",mt,[k(C(f,{"element-loading-text":"文件加载中","element-loading-spinner":"el-icon-loading",data:e.fileList,stripe:"",style:{width:"100%"},"max-height":"1000px"},{default:tt((()=>[C(u,{prop:"name",label:"文件名称"}),C(u,{label:"是否已读"},{default:tt((({row:e})=>[C(d,{type:"read"===e.status?"success":"danger"},{default:tt((()=>[E(S("read"===e.status?"已读":"未读"),1)])),_:2},1032,["type"])])),_:1}),C(u,{prop:"date",label:"上传时间"}),C(u,{label:"操作"},{default:tt((({row:t})=>[C(i,{type:"text",icon:"el-icon-view",onClick:n=>e.openFileDetail(t)},{default:tt((()=>[gt])),_:2},1032,["onClick"]),"admin"===t.role?(N(),w(i,{key:0,icon:"el-icon-download",type:"text",onClick:n=>e.handleDownloadFile(t)},{default:tt((()=>[yt])),_:2},1032,["onClick"])):j("",!0)])),_:1})])),_:1},8,["data"]),[[g,e.tableLoading]])]),k(C(p,{background:"","page-size":e.listQuery.limit,"onUpdate:page-size":t[7]||(t[7]=t=>e.listQuery.limit=t),"page-sizes":[10,20,30,50],currentPage:e.listQuery.page,"onUpdate:currentPage":t[8]||(t[8]=t=>e.listQuery.page=t),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["page-size","currentPage","total","onSizeChange","onCurrentChange"]),[[O,e.total>0]])])),_:1})])),_:1})]))])}));et.render=bt,et.__scopeId="data-v-39a2e10f";export default et;
//# sourceMappingURL=index.fbb22007.js.map
