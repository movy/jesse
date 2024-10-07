import{o as i,c as l,b as s,h as v,T as w,r as _,F as $,n as C,v as T,w as d,d as a,t as j,W as h,D as n,Z as y,$ as x,a0 as B,a1 as L,I as M,f as N,Y as R}from"./BlrvtiIG.js";import{r as D}from"./BWSdnu8b.js";function O(p,u){return i(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"})])}function S(p,u){return i(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"})])}const E={class:"mb-4"},F={class:"hidden sm:block"},I={class:"relative rounded-lg shadow flex justify-between divide-x divide-gray-200 dark:divide-gray-700 [&>*]:divide-x [&>*]:divide-gray-200 [&>*]::dark:divide-gray-700","aria-label":"Tabs"},V={class:"w-[calc(100%-114px)] flex justify-between"},W={class:"whitespace-nowrap text-ellipsis"},Z=["onClick"],z=["onClick"],A={class:"absolute right-[1em] focus:outline-none"},U={class:"absolute right-[1em] focus:outline-none"},Y=s("span",{"aria-hidden":"true",class:"absolute inset-x-0 bottom-0 h-0.5 bg-transparent dark:bg-gray-600"},null,-1),J=v({__name:"BacktestTabs",props:{tabs:{},currentTab:{}},emits:["close","cancel"],setup(p,{emit:u}){const b=w(),f=_(b.params.id),c=u;function k(e){if(!e.form.routes.length)return"New Tab";if(e.results.exception.error&&e.results.executing)return"Error";const o=e.form.routes[0];let t="";return o.strategy&&(t+=`${o.strategy} • `),o.symbol&&(t+=`${o.symbol} • `),o.timeframe&&(t+=`${o.timeframe}`),t=t.endsWith(" • ")?t.slice(0,-3):t,e.results.executing?`${t} | ${e.results.progressbar.current}%`:e.results.showResults?`${t} | Results`:t}return(e,o)=>{const t=N,g=R;return i(),l("div",E,[s("div",F,[s("nav",I,[s("div",V,[(i(!0),l($,null,C(e.tabs,(r,q)=>(i(),T(g,{key:r.id,popper:{arrow:!0},class:"relative w-full group min-w-0 overflow-hidden text-center flex items-center group pr-6",text:k(r),"open-delay":700,onMouseup:L(m=>c("close",r.id),["middle"])},{default:d(()=>[a(t,{to:`/backtest/${r.id}`,class:h([r.id===n(f)?"text-gray-900 dark:text-gray-100 font-bold ":"text-gray-500 dark:text-gray-300 hover:text-gray-700 font-medium ","py-3 px-4 inline-block select-none cursor-pointer focus:outline-none w-full text-xs bg-gray-50 dark:bg-backdrop-dark"])},{default:d(()=>[s("span",W,j(k(r)),1),s("span",{"aria-hidden":"true",class:h([r.id===n(f)&&Object.keys(e.tabs).length>1?"bg-indigo-400":"bg-transparent dark:bg-gray-600","absolute inset-x-0 bottom-0 h-0.5"])},null,2)]),_:2},1032,["to","class"]),r.results.executing&&r.results.exception.error==""?y((i(),l("button",{key:0,class:"absolute right-[0.5em] focus:outline-none",onClick:m=>c("cancel",r.id)},[a(n(S),{class:"h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full","aria-hidden":"true"})],8,Z)),[[x,Object.keys(e.tabs).length>1]]):y((i(),l("button",{key:1,class:"absolute right-[0.5em] focus:outline-none",onClick:m=>c("close",r.id)},[a(n(B),{class:"h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full","aria-hidden":"true"})],8,z)),[[x,Object.keys(e.tabs).length>1]])]),_:2},1032,["text","onMouseup"]))),128))]),a(g,{text:"Benchmark",popper:{arrow:!0}},{default:d(()=>[a(t,{class:"select-none cursor-pointer text-gray-400 dark:text-gray-100 hover:text-gray-600 focus:outline-none group relative w-14 overflow-hidden bg-gray-50 dark:bg-backdrop-dark py-3 px-4 font-medium hover:bg-white dark:hover:bg-gray-800 flex items-center justify-center",href:"/backtest/benchmark"},{default:d(()=>[s("button",A,[a(n(O),{class:"h-6 w-6 rounded-full","aria-hidden":"true"})]),s("span",{"aria-hidden":"true",class:h(["absolute inset-x-0 bottom-0 h-0.5 bg-transparent dark:bg-gray-600",[n(b).path==="/backtest/benchmark"?"bg-indigo-400":"bg-transparent dark:bg-gray-600","absolute inset-x-0 bottom-0 h-0.5"]])},null,2)]),_:1})]),_:1}),a(g,{text:"New Tab",popper:{arrow:!0}},{default:d(()=>[s("div",{class:"select-none cursor-pointer text-gray-400 dark:text-gray-100 hover:text-gray-600 focus:outline-none group relative w-14 overflow-hidden bg-gray-50 dark:bg-backdrop-dark py-3 px-4 font-medium hover:bg-white dark:hover:bg-gray-800 flex items-center justify-center",onClick:o[0]||(o[0]=r=>n(M)().addTab(e.currentTab))},[s("button",U,[a(n(D),{class:"h-6 w-6 rounded-full","aria-hidden":"true"})]),Y])]),_:1})])])])}}});export{J as _};
