import{h as N,T as F,r as h,o as i,c as d,b as u,F as D,n as J,a1 as A,d as n,w as k,t as I,W as B,D as o,Z as G,$ as Q,a0 as Y,a2 as V,f as Z,Y as H,G as K,I as X,j as x,J as ee,k as te,l as se,E as _,P as v,L as z,v as L,e as oe,M as T,y as re,O as ne,Q as ae,B as le,U as ie}from"./BlrvtiIG.js";import{r as ue}from"./BWSdnu8b.js";import{_ as de,a as ce,b as me,c as pe}from"./C_9-NY_5.js";import{_ as ge}from"./DoeSz3Ft.js";import{u as fe}from"./BWJPrTne.js";const be={class:"mb-4"},ye={class:"hidden sm:block"},_e={class:"relative rounded-lg shadow flex divide-x divide-gray-200 dark:divide-gray-700","aria-label":"props.Tabs"},ve=["onMouseup"],he=["data-cy","onClick"],ke={class:"absolute right-[1em] focus:outline-none"},xe=u("span",{"aria-hidden":"true",class:"absolute inset-x-0 bottom-0 h-0.5 bg-transparent dark:bg-gray-600"},null,-1),we=N({__name:"CandleTabs",props:{tabs:{}},emits:["close"],setup(w,{emit:l}){const c=F(),m=h(c.params.id),p=l,g=w;function b(s){if(s.results.exception.error&&s.results.executing)return"Error";let r="";return s.form.exchange&&(r+=`${s.form.exchange} • `),s.form.symbol&&(r+=`${s.form.symbol.toUpperCase()} • `),s.form.start_date&&(r+=`${s.form.start_date}`),r=r.endsWith(" • ")?r.slice(0,-3):r,s.results.executing?`${r} | ${s.results.progressbar.current}%`:r}return(s,r)=>{const y=Z,$=H;return i(),d("div",be,[u("div",ye,[u("nav",_e,[(i(!0),d(D,null,J(g.tabs,(f,U,E)=>(i(),d("div",{key:f.id,class:"relative group min-w-0 flex-1 overflow-hidden text-center flex items-center",onMouseup:A(S=>p("close",f.id),["middle"])},[n(y,{to:`/candles/${f.id}`,class:B([f.id===o(m)?"text-gray-900 dark:text-gray-100 font-bold ":"text-gray-500 dark:text-gray-300 hover:text-gray-700 font-medium ","py-3 px-4 inline-block select-none cursor-pointer focus:outline-none w-full text-xs bg-gray-50 dark:bg-backdrop-dark"])},{default:k(()=>[u("span",null,I(b(f)),1),u("span",{"aria-hidden":"true",class:B([f.id===o(m)&&Object.keys(g.tabs).length>1?"bg-indigo-400":"bg-transparent dark:bg-gray-600","absolute inset-x-0 bottom-0 h-0.5"])},null,2)]),_:2},1032,["to","class"]),G(u("button",{"data-cy":"tab-close-button"+E,class:"absolute right-[1em] focus:outline-none",onClick:S=>p("close",f.id)},[n(o(Y),{class:"h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full","aria-hidden":"true"})],8,he),[[Q,Object.keys(g.tabs).length>1]])],40,ve))),128)),n($,{text:"New Tab",popper:{arrow:!0}},{default:k(()=>[u("div",{class:"select-none cursor-pointer text-gray-400 dark:text-gray-100 hover:text-gray-600 focus:outline-none group relative w-14 overflow-hidden bg-gray-50 dark:bg-backdrop-dark py-3 px-4 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center",onClick:r[0]||(r[0]=f=>o(V)().addTab())},[u("button",ke,[n(o(ue),{class:"h-6 w-6 rounded-full","aria-hidden":"true"})]),xe])]),_:1})])])])}}}),$e={key:0,class:"flex flex-col items-center justify-center select-none mt-[10%]"},Se=["textContent"],Ce={class:"mt-8"},Te={key:1,class:"mx-auto container mt-8"},Ve={key:0,class:"mb-8"},Ee={key:1,class:"pb-4"},Re={key:0},Me={key:0},Ne={key:1},Ue=N({__name:"CandlesTab",props:{form:{},results:{}},setup(w){const l=w,c=h([]),m=h(""),p=V(),g=K(),b=X(),s=h([]);async function r(){s.value=await g.getExchangeSupportedSymbols(l.form.exchange),s.value.includes(l.form.symbol)||(l.form.symbol=s.value[0])}const y=h(!1),$=x(()=>g.backtestingExchangeNames);l.form.exchange=l.form.exchange||$.value[0];const f=x(()=>ee.remainingTimeText(l.results.progressbar.estimated_remaining_seconds)),U=e=>{S()&&p.start(e)},E=e=>{S()&&p.startInNewTab(e)};function S(){const e={mustContainDashErrorMessage:'Symbol parameter must contain "-" character!',emptySymbolErrorMessage:"Symbol parameter cannot be empty"};return l.form.exchange?l.form.symbol?l.form.symbol.includes("-")?l.form.start_date?!0:(T("error","Start date parameter cannot be empty"),!1):(T("error",e.mustContainDashErrorMessage),!1):(T("error",e.emptySymbolErrorMessage),!1):(T("error","Exchange parameter cannot be empty"),!1)}return te(()=>m.value,e=>{if(e.length==0){c.value=[];return}const t=[];for(const C of s.value){if(t.length>50)break;C.toLowerCase().startsWith(e.toLowerCase())&&t.push(C)}c.value=t}),se(()=>{setTimeout(()=>{r()},100)}),(e,t)=>{const C=de,R=re,O=ce,q=me,M=ne,j=ge,P=ae,W=pe;return!e.form.debug_mode&&e.results.executing&&!e.results.showResults?(i(),d("div",$e,[u("div",null,[n(C,{progress:e.results.progressbar.current},null,8,["progress"])]),e.results.exception.error?_("",!0):(i(),d("h3",{key:0,class:"mt-8 animate-pulse",textContent:I(o(f))},null,8,Se)),u("div",Ce,[n(R,{color:"gray",ui:{color:{gray:{solid:"text-rose-500 dark:text-rose-400"}}},class:"w-64 flex justify-center",icon:"i-heroicons-no-symbol",size:"xl",variant:"solid",label:"Cancel",trailing:!1,onClick:t[0]||(t[0]=a=>o(p).cancel((e._.provides[v]||e.$route).params.id))})]),e.results.exception.error&&e.results.executing?(i(),d("div",Te,[n(O,{modelValue:o(y),"onUpdate:modelValue":t[1]||(t[1]=a=>z(y)?y.value=a:null),title:e.results.exception.error,content:e.results.exception.traceback,mode:"candles"},null,8,["modelValue","title","content"])])):_("",!0)])):(i(),L(W,{key:1},{left:k(()=>[e.results.alert.message?(i(),d("div",Ve,[n(q,{color:"teal",icon:"i-heroicons-check-circle",variant:"soft",title:e.results.alert.message,"close-button":{icon:"i-heroicons-x-mark-20-solid",color:"white",variant:"link"},onClose:t[2]||(t[2]=a=>e.results.alert.message="")},null,8,["title"])])):_("",!0),!e.results.executing&&!e.results.showResults?(i(),d("div",Ee,[n(M,{title:"Exchange"}),n(j,{modelValue:e.form.exchange,"onUpdate:modelValue":t[3]||(t[3]=a=>e.form.exchange=a),searchable:"",placeholder:"Select an exchange...",options:o($),size:"lg",class:"mt-2",onChange:r},null,8,["modelValue","options"]),n(M,{title:"Symbol",class:"mt-16"}),n(j,{modelValue:e.form.symbol,"onUpdate:modelValue":t[4]||(t[4]=a=>e.form.symbol=a),query:o(m),"onUpdate:query":t[5]||(t[5]=a=>z(m)?m.value=a:null),"clear-search-on-close":"",class:"mt-2",searchable:"",size:"lg",options:o(c),placeholder:"Select a symbol...",onChange:t[6]||(t[6]=a=>m.value="")},{empty:k(()=>[oe("Start typing...")]),_:1},8,["modelValue","query","options"]),n(M,{title:"Start Date",class:"mt-16"}),n(P,{modelValue:e.form.start_date,"onUpdate:modelValue":t[7]||(t[7]=a=>e.form.start_date=a),type:"date",size:"lg",class:"mt-2"},null,8,["modelValue"])])):_("",!0)]),right:k(()=>[e.results.executing?_("",!0):(i(),d("div",Re,[e.results.showResults?(i(),d("div",Me,[u("button",{class:"font-medium select-none items-center px-2.5 py-1.5 border border-transparent rounded shadow-sm text-white bg-indigo-600 dark:bg-indigo-400 hover:bg-indigo-700 dark:hover:bg-indigo-300 focus:outline-none dark:text-black text-base tracking-wide text-center block w-full mb-4",onClick:t[8]||(t[8]=a=>o(b).rerun((e._.provides[v]||e.$route).params.id))}," Rerun "),u("button",{class:"btn-secondary text-center block w-full mb-4",onClick:t[9]||(t[9]=a=>o(b).newBacktest((e._.provides[v]||e.$route).params.id))}," New backtest ")])):(i(),d("div",Ne,[n(R,{class:"w-full flex justify-center",icon:"i-heroicons-bolt",size:"xl",variant:"solid",label:"Start",trailing:!1,onClick:t[10]||(t[10]=a=>U((e._.provides[v]||e.$route).params.id))}),n(R,{class:"w-full flex justify-center mt-4",color:"gray",icon:"i-heroicons-plus",size:"xl",variant:"solid",label:"Start in a new tab",trailing:!1,onClick:t[11]||(t[11]=a=>E((e._.provides[v]||e.$route).params.id))})]))]))]),_:1}))}}}),je={class:"w-full"},Oe=N({__name:"[id]",setup(w){fe({title:"Candles - Jesse"});const l=V(),c=x(()=>l.tabs),m=le(),p=x(()=>m.params.id),g=x(()=>{if(!c.value[p.value]){const b=Object.keys(c.value);if(b.length>0){const s=c.value[b[0]];return ie().push(`/candles/${s.id}`),s}else V().addTab()}return c.value[p.value]});return(b,s)=>{const r=we,y=Ue;return i(),d(D,null,[u("div",je,[n(r,{"page-id":o(p),tabs:o(c),onClose:o(l).closeTab},null,8,["page-id","tabs","onClose"])]),o(g)?(i(),L(y,{key:0,form:o(g).form,results:o(g).results},null,8,["form","results"])):_("",!0)],64)}}});export{Oe as default};
