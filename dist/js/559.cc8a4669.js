"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[559],{3481:function(t,e,a){a.d(e,{Z:function(){return v}});var l=a(3396),o=a(7139),s=a(9242);const i={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},c={class:"page-item"},r=(0,l._)("span",{"aria-hidden":"true"},"«",-1),d=[r],p=["onClick"],u={class:"page-item"},m=(0,l._)("span",{"aria-hidden":"true"},"»",-1),h=[m];function g(t,e,a,r,m,g){return(0,l.wg)(),(0,l.iD)("nav",i,[(0,l._)("ul",n,[(0,l._)("li",c,[(0,l._)("a",{class:(0,o.C_)(["page-link",{disabled:1===a.pages.current_page}]),href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,s.iM)((t=>g.updatePage(a.pages.current_page-1)),["prevent"]))},d,2)]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.pages.total_pages,(t=>((0,l.wg)(),(0,l.iD)("li",{class:(0,o.C_)(["page-item",{active:t===a.pages.current_page}]),key:t},[(0,l._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((e=>g.updatePage(t)),["prevent"])},(0,o.zw)(t),9,p)],2)))),128)),(0,l._)("li",u,[(0,l._)("a",{class:(0,o.C_)(["page-link",{disabled:a.pages.current_page===a.pages.total_pages}]),href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,s.iM)((t=>g.updatePage(a.pages.current_page+1)),["prevent"]))},h,2)])])])}var _={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},b=a(89);const f=(0,b.Z)(_,[["render",g]]);var v=f},5559:function(t,e,a){a.r(e),a.d(e,{default:function(){return nt}});var l=a(3396),o=a(7139);const s={class:"text-end"},i={class:"table mt-4"},n=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{width:"120"},"分類"),(0,l._)("th",null,"產品名稱"),(0,l._)("th",{width:"120"},"原價"),(0,l._)("th",{width:"120"},"售價"),(0,l._)("th",{width:"100"},"是否啟用"),(0,l._)("th",{width:"200"},"編輯")])],-1),c={class:"text-right"},r={class:"text-right"},d={key:0,class:"text-success"},p={key:1,class:"text-muted"},u={class:"btn-group"},m=["onClick"],h=["onClick"];function g(t,e,a,g,_,b){const f=(0,l.up)("Loading"),v=(0,l.up)("ProductModal"),y=(0,l.up)("DelModal"),P=(0,l.up)("Pagination");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(f,{active:_.isLoading},null,8,["active"]),(0,l._)("div",s,[(0,l._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=t=>b.openModal(!0))}," 增加一個產品 ")]),(0,l._)("table",i,[n,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.products,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,o.zw)(e.category),1),(0,l._)("td",null,(0,o.zw)(e.title),1),(0,l._)("td",c,(0,o.zw)(t.$filters.currency(e.origin_price)),1),(0,l._)("td",r,(0,o.zw)(t.$filters.currency(e.price)),1),(0,l._)("td",null,[e.is_enabled?((0,l.wg)(),(0,l.iD)("span",d,"啟用")):((0,l.wg)(),(0,l.iD)("span",p,"未啟用"))]),(0,l._)("td",null,[(0,l._)("div",u,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>b.openModal(!1,e)}," 編輯 ",8,m),(0,l._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>b.openDelModal(e)}," 刪除 ",8,h)])])])))),128))])]),(0,l.Wm)(v,{ref:"productModal",product:_.tempProduct,onEmitProduct:b.updateProduct},null,8,["product","onEmitProduct"]),(0,l.Wm)(y,{ref:"delModal",item:_.tempProduct,onDelItem:b.delProduct},null,8,["item","onDelItem"]),(0,l.Wm)(P,{pages:_.pagination,onEmitPages:b.getProducts},null,8,["pages","onEmitPages"])],64)}var _=a(9242);const b={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},f={class:"modal-dialog modal-xl",role:"document"},v={class:"modal-content border-0"},y=(0,l._)("div",{class:"modal-header bg-dark text-white"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,l._)("span",null,"新增產品")]),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),P={class:"modal-body"},w={class:"row"},x={class:"col-sm-4"},j={class:"mb-3"},k=(0,l._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),M={class:"mb-3"},C=(0,l._)("label",{for:"customFile",class:"form-label"},[(0,l.Uk)("或 上傳圖片 "),(0,l._)("i",{class:"fas fa-spinner fa-spin"})],-1),D=(0,l.uE)('<img class="img-fluid" alt=""><div class="mt-5"><div class="mb-3 input-group"><input type="url" class="form-control form-control" placeholder="請輸入連結"><button type="button" class="btn btn-outline-danger"> 移除 </button></div><div><button class="btn btn-outline-primary btn-sm d-block w-100"> 新增圖片 </button></div></div>',2),L={class:"col-sm-8"},U={class:"mb-3"},$=(0,l._)("label",{for:"title",class:"form-label"},"標題",-1),V={class:"row gx-2"},Z={class:"mb-3 col-md-6"},F=(0,l._)("label",{for:"category",class:"form-label"},"分類",-1),z={class:"mb-3 col-md-6"},E=(0,l._)("label",{for:"price",class:"form-label"},"單位",-1),I={class:"row gx-2"},N={class:"mb-3 col-md-6"},W=(0,l._)("label",{for:"origin_price",class:"form-label"},"原價",-1),H={class:"mb-3 col-md-6"},Y=(0,l._)("label",{for:"price",class:"form-label"},"售價",-1),K=(0,l._)("hr",null,null,-1),O={class:"mb-3"},S=(0,l._)("label",{for:"description",class:"form-label"},"產品描述",-1),q={class:"mb-3"},A=(0,l._)("label",{for:"content",class:"form-label"},"說明內容",-1),B={class:"mb-3"},G={class:"form-check"},J=(0,l._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Q={class:"modal-footer"};function R(t,e,a,o,s,i){return(0,l.wg)(),(0,l.iD)("div",b,[(0,l._)("div",f,[(0,l._)("div",v,[y,(0,l._)("div",P,[(0,l._)("div",w,[(0,l._)("div",x,[(0,l._)("div",j,[k,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempProject.image=t)},null,512),[[_.nr,s.tempProject.image]])]),(0,l._)("div",M,[C,(0,l._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>i.uploadFile&&i.uploadFile(...t))},null,544)]),D]),(0,l._)("div",L,[(0,l._)("div",U,[$,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[2]||(e[2]=t=>s.tempProject.title=t)},null,512),[[_.nr,s.tempProject.title]])]),(0,l._)("div",V,[(0,l._)("div",Z,[F,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempProject.category=t)},null,512),[[_.nr,s.tempProject.category]])]),(0,l._)("div",z,[E,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[4]||(e[4]=t=>s.tempProject.unit=t)},null,512),[[_.nr,s.tempProject.unit]])])]),(0,l._)("div",I,[(0,l._)("div",N,[W,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[5]||(e[5]=t=>s.tempProject.origin_price=t)},null,512),[[_.nr,s.tempProject.origin_price]])]),(0,l._)("div",H,[Y,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[6]||(e[6]=t=>s.tempProject.price=t)},null,512),[[_.nr,s.tempProject.price]])])]),K,(0,l._)("div",O,[S,(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[7]||(e[7]=t=>s.tempProject.description=t)},null,512),[[_.nr,s.tempProject.description]])]),(0,l._)("div",q,[A,(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[8]||(e[8]=t=>s.tempProject.content=t)},null,512),[[_.nr,s.tempProject.content]])]),(0,l._)("div",B,[(0,l._)("div",G,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[9]||(e[9]=t=>s.tempProject.is_enabled=t)},null,512),[[_.e8,s.tempProject.is_enabled]]),J])])])])]),(0,l._)("div",Q,[(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal",onClick:e[10]||(e[10]=(...e)=>t.closeModal&&t.closeModal(...e))}," 取消 "),(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=e=>t.$emit("emit-product",s.tempProject))}," 確認 ")])])])],512)}var T=a(1339),X={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProject=this.product}},data(){return{modal:{},tempProject:{}}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const a="https://vue3-course-api.hexschool.io/api/jaydan-api/admin/upload";this.axios.post(a,e).then((t=>{t.data.success&&(this.tempProject.imageUrl=t.data.imageUrl)}))}},mixins:[T.Z]},tt=a(89);const et=(0,tt.Z)(X,[["render",R]]);var at=et,lt=a(5589),ot=a(3481),st={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},inject:["emitter","httpMessageState"],components:{ProductModal:at,DelModal:lt.Z,Pagination:ot.Z},methods:{openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const a=this.$refs.productModal;a.openModal()},openDelModal(t){this.tempProduct=t;const e=this.$refs.delModal;e.openModal()},delProduct(){const t=`https://vue3-course-api.hexschool.io/api/jaydan-api/admin/product/${this.tempProduct.id}`,e=this.$refs.delModal;this.isLoading=!0,this.axios.delete(t).then((t=>{this.isLoading=!1,console.log(t.data),e.closeModal(),this.getProducts()}))},updateProduct(t){let e="https://vue3-course-api.hexschool.io/api/jaydan-api/admin/product";const a=this.$refs.productModal;this.isNew?(this.isLoading=!0,this.axios.post(e,{data:this.tempProduct}).then((t=>{this.isLoading=!1,t.data.success?(this.getProducts(),this.emitter.emit("push-message",{style:"success",title:"新增成功"})):this.emitter.emit("push-message",{style:"danger",title:"新增失敗",content:t.data.message.join("、")})}))):(e=`https://vue3-course-api.hexschool.io/api/jaydan-api/admin/product/${t.id}`,this.isLoading=!0,this.axios.put(e,{data:this.tempProduct}).then((t=>{this.isLoading=!1,t.data.success?(this.getProducts(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")})}))),a.closeModal(),this.getProducts()},getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/jaydan-api/admin/products/?page=${t}`;this.isLoading=!0,this.axios.get(e).then((t=>{this.isLoading=!1,this.products=t.data.products,this.pagination=t.data.pagination}))}},created(){this.getProducts()}};const it=(0,tt.Z)(st,[["render",g]]);var nt=it}}]);
//# sourceMappingURL=559.cc8a4669.js.map