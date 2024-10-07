import{_ as W,b as X,a as Y}from"./BeIF_HP9.js";import{o,c as i,b as u,a as ee,ap as te,h as ae,aq as V,j as m,r as _,H as se,G as p,k as L,v as f,w as x,E as r,d as a,F as le,J as oe,N as ne,D as d,L as ie,t as re,e as ue,M as T,O as de,S as ce,Q as me,ar as ge,R as ve,y as _e}from"./BlrvtiIG.js";import{c as pe,b as fe,a as he,_ as ye}from"./C_9-NY_5.js";import{_ as be}from"./DoeSz3Ft.js";import{u as xe}from"./BWJPrTne.js";import"./Clq06bDY.js";function we(w,g){return o(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[u("path",{"fill-rule":"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z","clip-rule":"evenodd"})])}function ke(w,g){return o(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[u("path",{"fill-rule":"evenodd",d:"M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z","clip-rule":"evenodd"})])}const Ve={},Te={class:"border border-gray-300 dark:border-gray-700 rounded-md p-4 w-full mx-auto"},Se=te('<div class="animate-pulse flex space-x-4 mb-8"><div class="flex-1 space-y-4 py-1"><div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div><div class="space-y-2"><div class="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div><div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div></div></div><div class="flex-1 space-y-4 py-1"><div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div><div class="space-y-2"><div class="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div><div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div></div></div></div><div class="animate-pulse flex space-x-4"><div class="flex-1 space-y-4 py-1"><div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div><div class="space-y-2"><div class="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div><div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/6"></div></div></div><div class="flex-1 space-y-4 py-1"><div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div><div class="space-y-2"><div class="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div><div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6"></div></div></div></div>',2),$e=[Se];function ze(w,g){return o(),i("div",Te,$e)}const Ce=ee(Ve,[["render",ze]]),Ue=["value"],Le={key:0,class:"mb-8"},Ne={key:1,class:"mb-8"},Re={key:2},De={key:2,class:"mt-16"},Me={key:3},je={class:"flex items-center select-none flex-1 mb-4"},Be={class:"select-none"},Ee=u("p",{class:"text-sm text-gray-500 dark:text-gray-400"},[ue(" The number that tells Jesse how many trades you would find optimal for your strategy in the targeted time period so that it can filter out those DNAs that cause too few trades. "),u("a",{href:"https://docs.jesse.trade/docs/optimize/executing-the-optimize-mode.html",target:"_blank",class:"font-semibold hover:underline italic"},"More Details...")],-1),Ie=u("br",null,null,-1),Oe={class:"grid grid-cols-1 gap-6"},Ae={key:0},Fe={key:1,class:"flex flex-col items-center justify-center select-none"},Je={class:"mb-8 w-full"},Pe=["href"],Ze=["textContent"],He={key:2},Ke={class:"mb-8 w-full"},qe=["href"],tt=ae({__name:"index",setup(w){xe({title:"Optimization - Jesse"});const g=V(),t=m(()=>g.form),e=m(()=>g.results),k=_(!1),h=_(!1),S=_(se().public.apiBaseUrl),y=_([]),N=m(()=>p().jesseSupportedTimeframes.map(s=>({label:s,value:s}))),b=_([]);async function $(){b.value=await p().getExchangeSupportedSymbols(t.value.exchange);for(let s=0;s<t.value.routes.length;s++)b.value.includes(t.value.routes[s].symbol)||(t.value.routes[s].symbol=b.value[0])}t.value.exchange=t.value.exchange||p().backtestingExchangeNames[0],$();const R=m(()=>p().authToken),D=m(()=>oe.remainingTimeText(e.value.progressbar.estimated_remaining_seconds)),z=m(()=>{let s=`/download/optimize/log?token=${R.value}`;return S.value!=="/"&&(s=S.value+s),s}),{cancel:M}=V();function j(){if(y.value.length){for(let s=0;s<y.value.length;s++)T("error",y.value[s]);return}if(t.value.routes.length>1){T("error","Optimization mode does not support multiple routes at the moment.");return}V().start()}function B(){navigator.clipboard.writeText(e.value.infoLogs),T("success","Logs copied successfully"),h.value=!0,setTimeout(()=>{h.value=!1},3e3)}function E(){e.value.showResults=!1,e.value.executing=!1,e.value.progressbar.current=0,e.value.progressbar.estimated_remaining_seconds=0,e.value.alert.message="",e.value.alert.type=""}return L(()=>t.value.start_date,s=>{t.value.finish_date<s&&(t.value.finish_date=s)}),L(()=>t.value.finish_date,s=>{t.value.start_date>s&&(t.value.start_date=s)}),(s,l)=>{const I=W,O=ne,A=fe,F=he,c=de,J=ce,P=Ce,Z=X,H=be,K=Y,C=me,q=ge,U=ve,v=_e,G=ye,Q=pe;return o(),i(le,null,[t.value.debug_mode?(o(),f(O,{key:0,modelValue:e.value.logsModal,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value.logsModal=n),title:"Logs"},{default:x(()=>[a(I,{logs:e.value.infoLogs},null,8,["logs"])]),buttons:x(()=>[u("button",{class:"ml-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none",onClick:B},[d(h)?(o(),f(d(we),{key:0,class:"h-6 w-6","aria-hidden":"true"})):r("",!0),!d(h)&&e.value.infoLogs.length!=0?(o(),f(d(ke),{key:1,class:"h-6 w-6","aria-hidden":"true"})):r("",!0)]),u("input",{id:"copy-info-logs",type:"hidden",value:e.value.infoLogs},null,8,Ue)]),_:1},8,["modelValue"])):r("",!0),a(Q,null,{left:x(()=>[e.value.alert.message?(o(),i("div",Le,[a(A,{color:"teal",icon:"i-heroicons-check-circle",variant:"soft",title:e.value.alert.message,"close-button":{icon:"i-heroicons-x-mark-20-solid",color:"white",variant:"link"},onClose:l[1]||(l[1]=n=>e.value.alert.message="")},null,8,["title"])])):r("",!0),e.value.exception.error&&e.value.executing?(o(),i("div",Ne,[a(F,{modelValue:d(k),"onUpdate:modelValue":l[2]||(l[2]=n=>ie(k)?k.value=n:null),title:e.value.exception.error,content:e.value.exception.traceback,mode:"optimize"},null,8,["modelValue","title","content"])])):r("",!0),(e.value.executing||e.value.showResults)&&!e.value.exception.error?(o(),i("div",Re,[a(c,{title:"Info"}),e.value.generalInfo.length?(o(),f(J,{key:0,data:e.value.generalInfo,class:"my-4"},null,8,["data"])):(o(),f(P,{key:1,class:"my-4"})),e.value.best_candidates.length?(o(),i("div",De,[a(c,{title:"Best DNA Candidates",class:"my-4"}),a(Z,{data:e.value.best_candidates,"header-items":["Rank","DNA","Fitness","Training-Testing winrate","Training-testing total trades","Training-Testing PNL"],header:""},null,8,["data"])])):r("",!0)])):r("",!0),!e.value.executing&&!e.value.showResults?(o(),i("div",Me,[a(c,{class:"mb-4",title:"Exchange"}),a(H,{modelValue:t.value.exchange,"onUpdate:modelValue":l[3]||(l[3]=n=>t.value.exchange=n),placeholder:"Select an exchange...",searchable:"",options:d(p)().backtestingExchangeNames,size:"lg",class:"mt-2 mb-16",onChange:$},null,8,["modelValue","options"]),a(K,{"total-routes-error":d(y),form:t.value,results:e.value,mode:"optimization",symbols:d(b),timeframes:N.value},null,8,["total-routes-error","form","results","symbols","timeframes"]),a(c,{class:"mt-16 mb-4",title:"Duration"}),u("div",je,[a(C,{modelValue:t.value.start_date,"onUpdate:modelValue":l[4]||(l[4]=n=>t.value.start_date=n),type:"date",variant:"outline",size:"lg",class:"w-full mr-2"},null,8,["modelValue"]),a(C,{modelValue:t.value.finish_date,"onUpdate:modelValue":l[5]||(l[5]=n=>t.value.finish_date=n),type:"date",variant:"outline",size:"lg",class:"w-full ml-2"},null,8,["modelValue"])]),a(c,{class:"mt-16 mb-4",title:"Optimal Trades"}),u("div",Be,[Ee,Ie,a(q,{modelValue:t.value.optimal_total,"onUpdate:modelValue":l[6]||(l[6]=n=>t.value.optimal_total=n),title:"Optimal number of trades:",default:7},null,8,["modelValue"])]),a(c,{class:"mt-16 mb-4",title:"Options"}),u("div",Oe,[a(U,{modelValue:t.value.debug_mode,"onUpdate:modelValue":l[7]||(l[7]=n=>t.value.debug_mode=n),title:"Debug Mode",description:"Displays detailed logs about the genetics algorithm. Use it if you are interested in the genetics algorithm and are familiar with its basics."},null,8,["modelValue"]),a(U,{modelValue:t.value.fast_mode,"onUpdate:modelValue":l[8]||(l[8]=n=>t.value.fast_mode=n),title:"Fast Mode",description:"Runs the backtest faster by using an improved algorithm. This is supposed to yield the same results; however, it's currently experimental, which is why it's an option."},null,8,["modelValue"])])])):r("",!0)]),right:x(()=>[!e.value.executing&&!e.value.showResults?(o(),i("div",Ae,[u("div",null,[a(v,{class:"w-full flex justify-center",icon:"i-heroicons-bolt",size:"xl",variant:"solid",label:"Start",trailing:!1,onClick:l[9]||(l[9]=n=>j())})])])):r("",!0),e.value.executing&&!e.value.showResults?(o(),i("div",Fe,[u("div",Je,[a(v,{color:"gray",ui:{color:{gray:{solid:"text-rose-500 dark:text-rose-400"}}},class:"w-full flex justify-center",icon:"i-heroicons-no-symbol",size:"xl",variant:"solid",label:"Cancel",trailing:!1,onClick:l[10]||(l[10]=n=>d(M)())}),t.value.debug_mode?(o(),i("a",{key:0,href:z.value,class:"flex justify-center items-center btn-secondary text-center mb-4 mt-4 w-full"},[a(v,{class:"w-full flex justify-center",color:"gray",size:"xl",variant:"solid",label:"Debugging Logs",icon:"i-heroicons-document-arrow-down",trailing:!1})],8,Pe)):r("",!0)]),u("div",null,[a(G,{progress:e.value.progressbar.current},null,8,["progress"])]),!e.value.exception.error&&!e.value.best_candidates.length?(o(),i("h3",{key:0,class:"mt-8 animate-pulse",textContent:re(D.value)},null,8,Ze)):r("",!0)])):r("",!0),e.value.showResults?(o(),i("div",He,[u("div",Ke,[a(v,{class:"w-full flex justify-center",icon:"i-heroicons-arrow-uturn-left",size:"xl",variant:"solid",label:"New Session",trailing:!1,onClick:E}),t.value.debug_mode?(o(),i("a",{key:0,href:z.value,class:"flex justify-center items-center btn-secondary text-center my-4 w-full"},[a(v,{color:"gray",variant:"solid",label:"Debugging Logs",icon:"i-heroicons-document-arrow-down",block:"",size:"xl",trailing:!1})],8,qe)):r("",!0)])])):r("",!0)]),_:1})],64)}}});export{tt as default};
