import{o as a,c as l,b as t,g as S,i as $,t as x,U as y,B as n,a as I,ah as ee,ai as L,as as P,at as F,v as D,aj as te,ak as oe,al as H,am as se,s as k,q as f,C as d,an as B,e as N,F as T,m as R,$ as j,T as ae,p as ne,z as re,D as le,a7 as ie,r as A,d as c,w as M,I as de,X as ce,Y as ue,a3 as pe,K as U,ag as ge,a9 as me,N as fe,O as be,aa as he,L as ve}from"./Dl48H-cf.js";function ye(e,o){return a(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"})])}function ke(e,o){return a(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"})])}function we(e,o){return a(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})])}const _e={wrapper:"w-full relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium",description:"mt-1 text-sm leading-4 opacity-90",actions:"flex items-center gap-2 mt-3 flex-shrink-0",shadow:"",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0 self-center",size:"md"},color:{white:{solid:"text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{color:"white",variant:"solid",icon:null,closeButton:null,actionButton:{size:"xs",color:"primary",variant:"link"}}},$e=S({__name:"CircleProgressbar",props:{progress:{}},setup(e){const o=e,i=$(()=>{let u="progress-circle";return o.progress>50&&(u+=" over50"),u+=` p${Math.round(o.progress)}`,u});return(u,h)=>(a(),l("div",{class:y(n(i))},[t("span",null,x(u.progress)+"%",1),h[0]||(h[0]=t("div",{class:"left-half-clipper"},[t("div",{class:"first50-bar"}),t("div",{class:"value-bar"})],-1))],2))}}),Xe=I($e,[["__scopeId","data-v-88f4951a"]]),b=ee(L.ui.strategy,L.ui.alert,_e),xe=S({components:{UIcon:P,UAvatar:F,UButton:D},inheritAttrs:!1,props:{title:{type:String,default:null},description:{type:String,default:null},icon:{type:String,default:()=>b.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>b.default.closeButton},actions:{type:Array,default:()=>[]},color:{type:String,default:()=>b.default.color,validator(e){return[...L.ui.colors,...Object.keys(b.color)].includes(e)}},variant:{type:String,default:()=>b.default.variant,validator(e){return[...Object.keys(b.variant),...Object.values(b.color).flatMap(o=>Object.keys(o))].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["close"],setup(e){const{ui:o,attrs:i}=te("alert",oe(e,"ui"),b),u=$(()=>{var w,g;const r=((g=(w=o.value.color)==null?void 0:w[e.color])==null?void 0:g[e.variant])||o.value.variant[e.variant];return H(se(o.value.wrapper,o.value.rounded,o.value.shadow,o.value.padding,r==null?void 0:r.replaceAll("{color}",e.color)),e.class)});function h(r){r.click&&r.click()}return{ui:o,attrs:i,alertClass:u,onAction:h,twMerge:H}}});function Ce(e,o,i,u,h,r){const w=P,g=F,v=D;return a(),l("div",B({class:e.alertClass},e.attrs),[t("div",{class:y(["flex",[e.ui.gap,{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}]])},[k(e.$slots,"icon",{icon:e.icon},()=>[e.icon?(a(),f(w,{key:0,name:e.icon,ui:e.ui.icon.base},null,8,["name","ui"])):d("",!0)]),k(e.$slots,"avatar",{avatar:e.avatar},()=>[e.avatar?(a(),f(g,B({key:0},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):d("",!0)]),t("div",{class:y(e.ui.inner)},[e.title||e.$slots.title?(a(),l("p",{key:0,class:y(e.ui.title)},[k(e.$slots,"title",{title:e.title},()=>[N(x(e.title),1)])],2)):d("",!0),e.description||e.$slots.description?(a(),l("p",{key:1,class:y(e.twMerge(e.ui.description,!(e.title&&e.$slots.title)&&"mt-0 leading-5"))},[k(e.$slots,"description",{description:e.description},()=>[N(x(e.description),1)])],2)):d("",!0),(e.description||e.$slots.description)&&e.actions.length?(a(),l("div",{key:2,class:y(e.ui.actions)},[(a(!0),l(T,null,R(e.actions,(p,C)=>(a(),f(v,B({key:C,ref_for:!0},{...e.ui.default.actionButton||{},...p},{onClick:j(V=>e.onAction(p),["stop"])}),null,16,["onClick"]))),128))],2)):d("",!0)],2),e.closeButton||!e.description&&!e.$slots.description&&e.actions.length?(a(),l("div",{key:0,class:y(e.twMerge(e.ui.actions,"mt-0"))},[!e.description&&!e.$slots.description&&e.actions.length?(a(!0),l(T,{key:0},R(e.actions,(p,C)=>(a(),f(v,B({key:C,ref_for:!0},{...e.ui.default.actionButton||{},...p},{onClick:j(V=>e.onAction(p),["stop"])}),null,16,["onClick"]))),128)):d("",!0),e.closeButton?(a(),f(v,B({key:1,"aria-label":"Close"},{...e.ui.default.closeButton||{},...e.closeButton},{onClick:o[0]||(o[0]=j(p=>e.$emit("close"),["stop"]))}),null,16)):d("",!0)],2)):d("",!0)],2)],16)}const Be=I(xe,[["render",Ce]]),Me={class:"w-full flex justify-between items-center"},Ve=["textContent"],Ue={class:"whitespace-nowrap ml-2"},Se=S({__name:"DividerWithButtons",props:{title:{}},setup(e){return(o,i)=>(a(),l("div",Me,[t("span",{class:"pr-3 bg-gray-50 dark:bg-backdrop-dark text-lg font-semibold text-gray-900 dark:text-gray-200",textContent:x(o.title)},null,8,Ve),i[0]||(i[0]=t("div",{class:"w-full flex items-center","aria-hidden":"true"},[t("div",{class:"w-full border-t-2 border-dashed border-gray-300 dark:border-gray-600"})],-1)),t("span",Ue,[k(o.$slots,"default")])]))}}),je={key:0,class:"mb-4"},Ae=["innerHTML"],Le={class:"flex justify-end"},Te={class:"rounded-md bg-red-50 p-4 my-4 select-text"},Ie={class:"flex"},De={class:"flex-shrink-0"},Oe={class:"ml-3 overflow-hidden w-full"},Ee=["textContent"],ze=["innerHTML"],He=["value"],Ye=S({__name:"Exception",props:ae({title:String,content:{type:String,default:""},mode:String,debugMode:{type:Boolean,default:!1}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const o=e,i=ne(e,"modelValue"),u=$(()=>re().params.id),h=le(),r=ie({description:"",attachLogs:!0,email:""}),w=A(!1),g=A(!1),v=A(!1),p=$(()=>o.mode==="backtest"&&!o.debugMode?{message:'It is highly recommended to attach log files with reports. To do that, press cancel, enable "Debug Mode", and  run again. ',type:"warning"}:{message:"",type:""}),C=$(()=>o.mode==="backtest"&&o.debugMode||o.mode==="live"),V=$(()=>h.hasLivePluginInstalled),J=async()=>{v.value=!0;const{data:O,error:s}=await pe("/report-exception",{description:r.description,email:r.email,traceback:o.content,mode:o.mode,attach_logs:r.attachLogs,session_id:u.value},!0);if(v.value=!1,s.value&&s.value.statusCode!==200){U("error",`[${s.value.statusCode}]: ${s.value.message}`);return}const _=O.value;_.status==="success"?(r.description="",r.email="",U("success",_.message),i.value=!1):_.status==="error"&&U("error",_.message)},q=()=>{navigator.clipboard.writeText(o.content),U("success","Copied successfully"),g.value=!0,setTimeout(()=>{g.value=!1},2e3)},W=()=>{i.value=!0};return(O,s)=>{const _=Be,G=ge,E=me,K=fe,X=be,z=D,Y=he,Z=ve,Q=Se;return a(),l(T,null,[c(Z,{modelValue:i.value,"onUpdate:modelValue":s[5]||(s[5]=m=>i.value=m),title:"Report"},{default:M(()=>[n(p).message?(a(),l("div",je,[c(_,{color:"teal",icon:"i-heroicons-check-circle",title:n(p).message,"close-button":{icon:"i-heroicons-x-mark-20-solid",color:"white",variant:"link"},onClose:s[0]||(s[0]=m=>n(p).message="")},null,8,["title"])])):d("",!0),s[6]||(s[6]=t("p",null," If the exception you're seeing is not clear and you think it might be a bug, please send us a report to help us debugging and fixing it in a future release. ",-1)),s[7]||(s[7]=t("br",null,null,-1)),s[8]||(s[8]=t("label",{class:"font-semibold"},"Exception:",-1)),t("pre",{class:"break-all lg:break-normal mt-2 text-sm whitespace-pre-line px-6 py-6 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 dark:border-gray-800 border border-gray-200",innerHTML:e.content},null,8,Ae),c(Y,{state:n(r),class:"space-y-4 mt-4",onSubmit:J},{default:M(()=>[c(E,{label:"Description (optional):",name:"Description (optional):"},{default:M(()=>[c(G,{modelValue:n(r).description,"onUpdate:modelValue":s[1]||(s[1]=m=>n(r).description=m),rows:10,placeholder:"Describe how the exception occurred..."},null,8,["modelValue"])]),_:1}),n(V)?d("",!0):(a(),f(E,{key:0,label:"Email (must be registered with on Jesse.Trade)",help:"Enter your email address for us to know who sent the feedback and possibly reply back to you. It must be the email address of your account on Jesse.Trade",required:""},{default:M(()=>[c(K,{modelValue:n(r).email,"onUpdate:modelValue":s[2]||(s[2]=m=>n(r).email=m),placeholder:"Email address...",type:"email"},null,8,["modelValue"])]),_:1})),n(C)?(a(),f(X,{key:1,modelValue:n(r).attachLogs,"onUpdate:modelValue":s[3]||(s[3]=m=>n(r).attachLogs=m),title:"Attach Debugging Logs",help:"Attach the log file of this session along with this report which helps Jesse's team"},null,8,["modelValue"])):d("",!0),t("div",Le,[c(z,{id:"feedback-cancel-button",color:"gray",variant:"link",class:"mr-8",label:"Cancel",onClick:s[4]||(s[4]=m=>i.value=!1)}),c(z,{id:"feedback-submit-button",type:"submit",class:"w-48 flex justify-center",label:"Submit",loading:n(v),disabled:!n(r).email.length&&!n(V)},null,8,["loading","disabled"])])]),_:1},8,["state"])]),_:1},8,["modelValue"]),c(Q,{title:"Exception"},{default:M(()=>[t("button",{type:"button",class:"inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-l-full text-gray-700 dark:text-gray-100 bg-white dark:bg-backdrop-dark hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none",onClick:W},[c(n(ke),{class:"-ml-1.5 mr-1 h-5 w-5 text-gray-400","aria-hidden":"true"}),s[9]||(s[9]=t("span",null,"Report",-1))]),t("button",{type:"button",class:"inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-r-full text-gray-700 dark:text-gray-100 bg-white dark:bg-backdrop-dark hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none",onClick:q},[n(g)?(a(),f(n(de),{key:0,class:"-ml-1.5 mr-1 h-5 w-5 text-gray-400","aria-hidden":"true"})):(a(),f(n(ye),{key:1,class:"-ml-1.5 mr-1 h-5 w-5 text-gray-400","aria-hidden":"true"})),t("span",null,x(n(g)?"Copied":"Copy"),1)])]),_:1}),t("div",Te,[t("div",Ie,[t("div",De,[c(n(we),{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),t("div",Oe,[t("h3",{class:"text-base font-medium text-red-800 mb-6",textContent:x(e.title)},null,8,Ee),e.content?(a(),l("pre",{key:0,class:"mt-2 text-sm text-red-700 whitespace-pre-line px-6 py-6 rounded-md border-2 border-dashed border-red-200",innerHTML:e.content},null,8,ze)):d("",!0)])]),ce(t("textarea",{id:"exception-info",value:e.content,class:"fixed left-0 bottom-0 opacity-0"},null,8,He),[[ue,n(w)]])])],64)}}}),Ne={},Re={class:"grid grid-cols-1 gap-4 items-start lg:grid-cols-3 p-6"},Pe={class:"grid grid-cols-1 gap-4 lg:col-span-2 px-1"},Fe={"aria-labelledby":"section-1-title"},Je={class:"rounded-lg"},qe={class:"grid grid-cols-1 gap-4"},We={"aria-labelledby":"section-2-title"};function Ge(e,o){return a(),l("div",Re,[t("div",Pe,[t("section",Fe,[t("div",Je,[k(e.$slots,"left")])])]),t("div",qe,[t("section",We,[k(e.$slots,"right")])])])}const Ze=I(Ne,[["render",Ge]]);export{Xe as _,Ye as a,Be as b,Ze as c,Se as d,ye as r};
