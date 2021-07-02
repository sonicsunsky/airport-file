var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{aL as r,ah as d,aM as s,as as c,ak as p,aB as u,at as h,au as g,ai as m,aj as f,ad as y,aN as b,af as w,ag as C,aO as k,aP as v,av as _,aw as x,aC as D,aQ as P,ap as F,aq as z,ar as L,ae as S}from"./vendor.aafafc6b.js";const V="https://raw.githubusercontent.com/sonicsunsky/airport-file/main/docs/pdf/compressed.tracemonkey-pldi-09.pdf",Q=[{label:"文件一级 1",children:[{label:"文件二级 1-1",children:[{label:"文件三级 1-1-1"}]}]},{label:"文件一级 2",children:[{label:"文件二级 2-1",children:[{label:"文件三级 2-1-1"}]},{label:"文件二级 2-2",children:[{label:"文件三级 2-2-1"}]}]},{label:"文件一级 3",children:[{label:"文件二级 3-1",children:[{label:"文件三级 3-1-1"}]},{label:"文件二级 3-2",children:[{label:"文件三级 3-2-1"}]}]}];const O=d({name:"File",setup(){console.log("getCurrentInstance: ",s());const e=g();m();const d=f(),y=c({showDisclaimer:!0,showPDFViewer:!1,pdfSrc:"",numPages:0,keyword:"",defaultProps:{children:"children",label:"label"},catalogData:[],total:0,listQuery:{page:1,limit:10},tableLoading:!1,fileList:[]}),b=p((()=>d.getters["settings/device"]));u((()=>{y.catalogData=[...Q],y.total=100,C()}));const w=()=>{y.keyword="",C()},C=()=>{y.tableLoading=!0;const e=Math.floor(10*Math.random()+1);console.log(e),setTimeout((()=>{const a=(e=>new Array(e).fill("").map(((e,a)=>({id:a+1,role:Math.random()>.5?"admin":"visitor",name:`机场文件${a+1}`,status:Math.random()>.5?"read":"unread",date:r().format("YYYY-MM-DD HH:mm:ss"),mime:"application/pdf",download_url:V,href:V}))))(e);y.fileList=[...a],y.tableLoading=!1}),500)};return k=((e,a)=>{for(var l in a||(a={}))o.call(a,l)&&i(e,l,a[l]);if(t)for(var l of t(a))n.call(a,l)&&i(e,l,a[l]);return e})({},h(y)),a(k,l({device:b,openFileDetail:({href:a})=>{e.push({path:"/pdf",query:{href:a}})},handleDownloadFile:({download_url:e,name:a,mime:l})=>{!function(e,a){let l=document.createElement("a");l.style.display="none",l.href=e,l.setAttribute("download",a),document.body.appendChild(l),l.click(),document.body.removeChild(l)}(e,a)},onSearchFileList:()=>{""!==y.keyword.trim()&&C()},fetchFileList:w,handleSizeChange:e=>{y.listQuery.limit=e,w()},handleCurrentChange:e=>{y.listQuery.page=e,w()},handleTreeNodeClick:e=>{console.log(e),C()}}));var k}}),j=F();z("data-v-a368aa24");const N={class:"file"},U=C("div",{class:"disclaimer"},[C("span",null," 免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明 免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明 ")],-1),M={class:"disclaimer-footer"},K=_("接受以上免责声明"),T={class:"pdf"},Y={key:0,class:"lay-mobile"},I={class:"search-input"},q=C("div",{class:"title"},"文件搜索",-1),A={class:"file-table"},E=_(" 查看详情 "),H=_("下载"),B={key:1,class:"lay-pc"},$={class:"search-input"},G=C("div",{class:"title"},"文件搜索",-1),J={class:"file-table"},R=_("查看详情"),W=_("下载");L();const X=j(((e,a,l,t,o,n)=>{const i=y("el-button"),r=y("el-dialog"),d=y("el-tree"),s=y("el-input"),c=y("el-table-column"),p=y("el-tag"),u=y("el-table"),h=y("el-pagination"),g=y("el-col"),m=y("el-row"),f=b("loading");return S(),w("div",N,[C(r,{title:"免责声明弹窗",modelValue:e.showDisclaimer,"onUpdate:modelValue":a[2]||(a[2]=a=>e.showDisclaimer=a),width:"50%",center:"","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:j((()=>[C("div",M,[C(i,{type:"primary",onClick:a[1]||(a[1]=a=>e.showDisclaimer=!1)},{default:j((()=>[K])),_:1})])])),default:j((()=>[U])),_:1},8,["modelValue"]),C(r,{title:"PDF预览",modelValue:e.showPDFViewer,"onUpdate:modelValue":a[3]||(a[3]=a=>e.showPDFViewer=a),width:"90%",center:""},{default:j((()=>[C("div",T,[C("iframe",{src:e.pdfSrc,width:"400",height:"400"},null,8,["src"])])])),_:1},8,["modelValue"]),"mobile"===e.device?(S(),w("div",Y,[C(d,{accordion:"","default-expand-all":"","expand-on-click-node":!1,data:e.catalogData,props:e.defaultProps,onNodeClick:e.handleTreeNodeClick},null,8,["data","props","onNodeClick"]),C("div",I,[q,C(s,{modelValue:e.keyword,"onUpdate:modelValue":a[4]||(a[4]=a=>e.keyword=a),placeholder:"请输入查询文件的名称",onKeyup:k(e.onSearchFileList,["enter"])},{append:j((()=>[C(i,{icon:"el-icon-search",onClick:e.onSearchFileList},null,8,["onClick"])])),_:1},8,["modelValue","onKeyup"])]),C("div",A,[v(C(u,{"element-loading-text":"文件加载中","element-loading-spinner":"el-icon-loading",data:e.fileList,stripe:"",style:{width:"100%"},"max-height":"1000px"},{default:j((()=>[C(c,{prop:"name",label:"文件名称"}),C(c,{label:"是否已读"},{default:j((({row:e})=>[C(p,{type:"read"===e.status?"success":"danger"},{default:j((()=>[_(x("read"===e.status?"已读":"未读"),1)])),_:2},1032,["type"])])),_:1}),C(c,{prop:"date",label:"上传时间"}),C(c,{label:"操作"},{default:j((({row:a})=>[C(i,{type:"text",icon:"el-icon-view",onClick:e.openFileDetail},{default:j((()=>[E])),_:1},8,["onClick"]),"admin"===a.role?(S(),w(i,{key:0,icon:"el-icon-download",type:"text",onClick:l=>e.handleDownloadFile(a)},{default:j((()=>[H])),_:2},1032,["onClick"])):D("",!0)])),_:1})])),_:1},8,["data"]),[[f,e.tableLoading]])]),v(C(h,{background:"","page-size":e.listQuery.limit,"onUpdate:page-size":a[5]||(a[5]=a=>e.listQuery.limit=a),"page-sizes":[10,20,30,50],currentPage:e.listQuery.page,"onUpdate:currentPage":a[6]||(a[6]=a=>e.listQuery.page=a),layout:"prev, pager, next",total:e.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["page-size","currentPage","total","onSizeChange","onCurrentChange"]),[[P,e.total>0]])])):(S(),w("div",B,[C(m,{type:"flex",gutter:10},{default:j((()=>[C(g,{xs:8,sm:8,md:6,lg:6,xl:6},{default:j((()=>[C(d,{accordion:"","default-expand-all":"","expand-on-click-node":!1,data:e.catalogData,props:e.defaultProps,onNodeClick:e.handleTreeNodeClick},null,8,["data","props","onNodeClick"])])),_:1}),C(g,{xs:16,sm:16,md:18,lg:18,xl:18},{default:j((()=>[C("div",$,[G,C(s,{modelValue:e.keyword,"onUpdate:modelValue":a[7]||(a[7]=a=>e.keyword=a),placeholder:"请输入查询文件的名称",onKeyup:k(e.onSearchFileList,["enter"])},{append:j((()=>[C(i,{icon:"el-icon-search",onClick:e.onSearchFileList},null,8,["onClick"])])),_:1},8,["modelValue","onKeyup"])]),C("div",J,[v(C(u,{"element-loading-text":"文件加载中","element-loading-spinner":"el-icon-loading",data:e.fileList,stripe:"",style:{width:"100%"},"max-height":"1000px"},{default:j((()=>[C(c,{prop:"name",label:"文件名称"}),C(c,{label:"是否已读"},{default:j((({row:e})=>[C(p,{type:"read"===e.status?"success":"danger"},{default:j((()=>[_(x("read"===e.status?"已读":"未读"),1)])),_:2},1032,["type"])])),_:1}),C(c,{prop:"date",label:"上传时间"}),C(c,{label:"操作"},{default:j((({row:a})=>[C(i,{type:"text",icon:"el-icon-view",onClick:l=>e.openFileDetail(a)},{default:j((()=>[R])),_:2},1032,["onClick"]),"admin"===a.role?(S(),w(i,{key:0,icon:"el-icon-download",type:"text",onClick:l=>e.handleDownloadFile(a)},{default:j((()=>[W])),_:2},1032,["onClick"])):D("",!0)])),_:1})])),_:1},8,["data"]),[[f,e.tableLoading]])]),v(C(h,{background:"","page-size":e.listQuery.limit,"onUpdate:page-size":a[8]||(a[8]=a=>e.listQuery.limit=a),"page-sizes":[10,20,30,50],currentPage:e.listQuery.page,"onUpdate:currentPage":a[9]||(a[9]=a=>e.listQuery.page=a),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["page-size","currentPage","total","onSizeChange","onCurrentChange"]),[[P,e.total>0]])])),_:1})])),_:1})]))])}));O.render=X,O.__scopeId="data-v-a368aa24";export default O;
//# sourceMappingURL=index.b08d7e34.js.map
