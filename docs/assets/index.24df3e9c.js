var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{b0 as r,az as d,aR as s,aC as c,aS as p,b1 as u,aT as g,aL as h,aA as b,aB as m,av as f,b2 as y,ax as C,ay as w,b3 as k,b4 as v,aM as x,aN as _,aQ as L,b5 as z,aH as D,aI as P,aJ as S,aw as F}from"./vendor.7a066e5a.js";import"./index.f93d7e4f.js";const Q=[{label:"文件一级 1",children:[{label:"文件二级 1-1",children:[{label:"文件三级 1-1-1"}]}]},{label:"文件一级 2",children:[{label:"文件二级 2-1",children:[{label:"文件三级 2-1-1"}]},{label:"文件二级 2-2",children:[{label:"文件三级 2-2-1"}]}]},{label:"文件一级 3",children:[{label:"文件二级 3-1",children:[{label:"文件三级 3-1-1"}]},{label:"文件二级 3-2",children:[{label:"文件三级 3-2-1"}]}]}];const j=d({name:"File",setup(){h(),b();const e=m(),d=s({showDisclaimer:!1,keyword:"",defaultProps:{children:"children",label:"label"},catalogData:[],total:0,listQuery:{page:1,limit:10},tableLoading:!1,fileList:[]}),f=c((()=>e.getters["settings/device"]));p((()=>{d.catalogData=[...Q],d.total=50,C()})),u((()=>{}));const y=()=>{d.keyword="",C()},C=()=>{d.tableLoading=!0;const e=Math.floor(10*Math.random()+1);console.log(e),setTimeout((()=>{const a=(e=>new Array(e).fill("").map(((e,a)=>({id:a+1,role:Math.random()>.5?"admin":"visitor",name:`机场文件${a+1}`,status:Math.random()>.5?"read":"unread",date:r().format("YYYY-MM-DD HH:mm:ss"),link:"http://www.leomay.com/upload/file/mmo-20170707165001.pdf",url:"http://www.pwithe.com/Public/Upload/download/20170211/589ebf8e5bb13.pdf"}))))(e);d.fileList=[...a],d.tableLoading=!1}),500)};return w=((e,a)=>{for(var l in a||(a={}))o.call(a,l)&&i(e,l,a[l]);if(t)for(var l of t(a))n.call(a,l)&&i(e,l,a[l]);return e})({},g(d)),a(w,l({device:f,openFileDetail:({url:e})=>{e&&window.open(e,"_blank")},downloadFile:({link:e})=>{e&&window.open(e,"_blank")},onSearchFileList:()=>{""!==d.keyword.trim()&&C()},fetchFileList:y,handleSizeChange:e=>{d.listQuery.limit=e,y()},handleCurrentChange:e=>{d.listQuery.page=e,y()},handleTreeNodeClick:e=>{console.log(e),C()},generateTableData:C}));var w}}),O=D();P("data-v-0252b1f7");const V={class:"file"},N=w("div",{class:"disclaimer"},[w("span",null," 免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明 免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明 ")],-1),M={class:"disclaimer-footer"},T=x("我已阅读以上免责声明"),U={key:0,class:"lay-mobile"},K={class:"search-input"},Y=w("div",{class:"title"},"文件搜索",-1),H={class:"file-table"},I=x("查看详情"),A=x("下载"),B={key:1,class:"lay-pc"},E={class:"search-input"},J=w("div",{class:"title"},"文件搜索",-1),R={class:"file-table"},$=x("查看详情"),q=x("下载");S();const G=O(((e,a,l,t,o,n)=>{const i=f("el-button"),r=f("el-dialog"),d=f("el-tree"),s=f("el-input"),c=f("el-table-column"),p=f("el-tag"),u=f("el-table"),g=f("el-pagination"),h=f("el-col"),b=f("el-row"),m=y("loading");return F(),C("div",V,[w(r,{title:"免责声明弹窗",modelValue:e.showDisclaimer,"onUpdate:modelValue":a[2]||(a[2]=a=>e.showDisclaimer=a),width:"50%",center:"","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:O((()=>[w("div",M,[w(i,{type:"primary",onClick:a[1]||(a[1]=a=>e.showDisclaimer=!1)},{default:O((()=>[T])),_:1})])])),default:O((()=>[N])),_:1},8,["modelValue"]),"mobile"===e.device?(F(),C("div",U,[w(d,{accordion:"","default-expand-all":"","expand-on-click-node":!1,data:e.catalogData,props:e.defaultProps,onNodeClick:e.handleTreeNodeClick},null,8,["data","props","onNodeClick"]),w("div",K,[Y,w(s,{modelValue:e.keyword,"onUpdate:modelValue":a[3]||(a[3]=a=>e.keyword=a),placeholder:"请输入查询文件的名称",onKeyup:k(e.onSearchFileList,["enter"])},{append:O((()=>[w(i,{icon:"el-icon-search",onClick:e.onSearchFileList},null,8,["onClick"])])),_:1},8,["modelValue","onKeyup"])]),w("div",H,[v(w(u,{"element-loading-text":"文件加载中","element-loading-spinner":"el-icon-loading",data:e.fileList,stripe:"",style:{width:"100%"},"max-height":"1000px"},{default:O((()=>[w(c,{prop:"name",label:"文件名称"}),w(c,{label:"是否已读"},{default:O((({row:e})=>[w(p,{type:"read"===e.status?"success":"danger"},{default:O((()=>[x(_("read"===e.status?"已读":"未读"),1)])),_:2},1032,["type"])])),_:1}),w(c,{prop:"date",label:"上传时间"}),w(c,{label:"操作"},{default:O((({row:a})=>[w(i,{type:"text",onClick:l=>e.openFileDetail(a)},{default:O((()=>[I])),_:2},1032,["onClick"]),"admin"===a.role?(F(),C(i,{key:0,type:"text",onClick:l=>e.downloadFile(a)},{default:O((()=>[A])),_:2},1032,["onClick"])):L("",!0)])),_:1})])),_:1},8,["data"]),[[m,e.tableLoading]])]),v(w(g,{background:"","page-size":e.listQuery.limit,"page-sizes":[10,20,30,50],currentPage:e.listQuery.page,"onUpdate:currentPage":a[4]||(a[4]=a=>e.listQuery.page=a),layout:"prev, pager, next",total:e.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["page-size","currentPage","total","onSizeChange","onCurrentChange"]),[[z,e.total>0]])])):(F(),C("div",B,[w(b,{type:"flex",gutter:10},{default:O((()=>[w(h,{xs:8,sm:8,md:6,lg:6,xl:6},{default:O((()=>[w(d,{accordion:"","default-expand-all":"","expand-on-click-node":!1,data:e.catalogData,props:e.defaultProps,onNodeClick:e.handleTreeNodeClick},null,8,["data","props","onNodeClick"])])),_:1}),w(h,{xs:16,sm:16,md:18,lg:18,xl:18},{default:O((()=>[w("div",E,[J,w(s,{modelValue:e.keyword,"onUpdate:modelValue":a[5]||(a[5]=a=>e.keyword=a),placeholder:"请输入查询文件的名称",onKeyup:k(e.onSearchFileList,["enter"])},{append:O((()=>[w(i,{icon:"el-icon-search",onClick:e.onSearchFileList},null,8,["onClick"])])),_:1},8,["modelValue","onKeyup"])]),w("div",R,[v(w(u,{"element-loading-text":"文件加载中","element-loading-spinner":"el-icon-loading",data:e.fileList,stripe:"",style:{width:"100%"},"max-height":"1000px"},{default:O((()=>[w(c,{prop:"name",label:"文件名称"}),w(c,{label:"是否已读"},{default:O((({row:e})=>[w(p,{type:"read"===e.status?"success":"danger"},{default:O((()=>[x(_("read"===e.status?"已读":"未读"),1)])),_:2},1032,["type"])])),_:1}),w(c,{prop:"date",label:"上传时间"}),w(c,{label:"操作"},{default:O((({row:a})=>[w(i,{type:"text",onClick:l=>e.openFileDetail(a)},{default:O((()=>[$])),_:2},1032,["onClick"]),"admin"===a.role?(F(),C(i,{key:0,type:"text",onClick:l=>e.downloadFile(a)},{default:O((()=>[q])),_:2},1032,["onClick"])):L("",!0)])),_:1})])),_:1},8,["data"]),[[m,e.tableLoading]])]),v(w(g,{background:"","page-size":e.listQuery.limit,"page-sizes":[10,20,30,50],currentPage:e.listQuery.page,"onUpdate:currentPage":a[6]||(a[6]=a=>e.listQuery.page=a),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["page-size","currentPage","total","onSizeChange","onCurrentChange"]),[[z,e.total>0]])])),_:1})])),_:1})]))])}));j.render=G,j.__scopeId="data-v-0252b1f7";export default j;