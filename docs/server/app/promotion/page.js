(()=>{var e={};e.id=56,e.ids=[56],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},4830:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>d,pages:()=>p,routeModule:()=>m,tree:()=>c});var s=r(260),o=r(8203),n=r(5155),i=r.n(n),a=r(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=["",{children:["promotion",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9359)),"D:\\Projects\\P_External\\alishopping-web\\src\\app\\promotion\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,2804)),"D:\\Projects\\P_External\\alishopping-web\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,6420)),"D:\\Projects\\P_External\\alishopping-web\\src\\app\\not-found.js"]}],p=["D:\\Projects\\P_External\\alishopping-web\\src\\app\\promotion\\page.js"],d={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/promotion/page",pathname:"/promotion",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2006:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,6313,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},7278:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,6013,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},5277:()=>{},3837:()=>{},10:(e,t,r)=>{Promise.resolve().then(r.bind(r,9359))},178:(e,t,r)=>{Promise.resolve().then(r.bind(r,5883))},6487:()=>{},8335:()=>{},5883:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5512),o=r(8009);let n=()=>{let e=[{product_num:393664,promo_desc:"AEB_US_LocalStock_Choice_20240830",promo_name:"AEB_US_LocalStock_Choice_20240830",image:"https://via.placeholder.com/150"},{product_num:12456,promo_desc:"Summer_Sale_20240830",promo_name:"Summer_Sale_2024",image:"https://via.placeholder.com/150"},{product_num:78612,promo_desc:"Winter_Sale_20240830",promo_name:"Winter_Sale_2024",image:"https://via.placeholder.com/150"}],[t,r]=(0,o.useState)(""),[n,i]=(0,o.useState)(""),[a,l]=(0,o.useState)(e),c=e=>{i(e),l([...a].sort((t,r)=>"asc"===e?t.product_num-r.product_num:"desc"===e?r.product_num-t.product_num:0))},p=({name:e,maxInitials:t=2})=>{let r=e.replace(/[^a-zA-Z0-9 ]/g," ").replace(/_/g," ").split(" ").filter(e=>e.length>0).map(e=>e.charAt(0).toUpperCase()).slice(0,t).join("");return(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)("div",{className:"avatar placeholder",children:(0,s.jsx)("div",{className:"bg-primary text-primary-content rounded-box w-24 h-24",children:(0,s.jsx)("span",{className:"text-xl font-bold",children:r})})})})};return(0,s.jsxs)("div",{className:"p-6",children:[(0,s.jsxs)("div",{className:"mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between",children:[(0,s.jsx)("input",{type:"text",value:t,onChange:t=>{let s=t.target.value.toLowerCase();r(s),l(e.filter(e=>e.promo_name.toLowerCase().includes(s)).sort((e,t)=>"asc"===n?e.product_num-t.product_num:"desc"===n?t.product_num-e.product_num:0))},placeholder:"Search promotions...",className:"input input-bordered w-full max-w-lg"}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)("button",{onClick:()=>c("asc"),className:"btn btn-primary btn-sm",children:"Sort Ascending"}),(0,s.jsx)("button",{onClick:()=>c("desc"),className:"btn btn-secondary btn-sm",children:"Sort Descending"})]})]}),(0,s.jsx)("div",{className:"space-y-4",children:a.length>0?a.map((e,t)=>(0,s.jsxs)("div",{className:"flex items-center p-4 border rounded-lg bg-base-100 shadow-sm",children:[(0,s.jsxs)("div",{className:"w-24 h-24 flex-shrink-0",children:[(0,s.jsx)(p,{name:e.promo_name,maxInitials:2})," "]}),(0,s.jsxs)("div",{className:"ml-4 flex-grow",children:[(0,s.jsx)("h2",{className:"text-lg font-bold",children:e.promo_name}),(0,s.jsx)("p",{className:"text-gray-600",children:e.promo_desc}),(0,s.jsxs)("p",{className:"text-sm text-gray-500",children:["Products: ",e.product_num]})]}),(0,s.jsx)("div",{children:(0,s.jsx)("a",{href:`/promotions/${t}`,className:"link link-info",children:"View Details"})})]},t)):(0,s.jsx)("p",{className:"text-gray-500",children:"No promotions found."})})]})}},2804:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>p});var s=r(2740),o=r(8845),n=r.n(o),i=r(9736),a=r.n(i);r(1135);let l="AliShopping - Finding win products or finding your niche with your success",c="AliShopping is a website that helps you find the best-selling and best quality products on the AliExpress. \nSuitable for those of you who are doing dropship and finding a best-selling solution for your store.\nWe also have an extension on the google chorme store with name ASTool - AliExpress Hunter & Shopify Tracker.Our extension will helps those of you who are selling on shopify store solve the most difficult problems you are facing such as shopify tracker, shopify store analytics, etc...",p={title:{default:l,template:"%s | "+l},description:c,icons:{icon:"./images/favicon.ico"},openGraph:{title:l,description:c,url:"https://alishopping.app/",siteName:l,images:[{url:"https://alishopping.app/images/social/fbogimage.webp",width:"448",height:"900",alt:l}],locale:"en_US",type:"website"}};function d({children:e}){return(0,s.jsx)("html",{lang:"en","data-theme":"light",children:(0,s.jsx)("body",{className:`${n().variable} ${a().variable} antialiased`,children:e})})}},6420:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(2740);function o(){return(0,s.jsxs)("div",{className:"relative min-h-screen flex items-center justify-center bg-blue-200 overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute inset-0 pointer-events-none wind-effect"}),(0,s.jsxs)("div",{className:"text-center z-10",children:[(0,s.jsx)("h1",{className:"text-8xl font-extrabold text-gray-800",children:"404"}),(0,s.jsx)("h2",{className:"text-3xl font-semibold mt-4 text-gray-700",children:"Oops! Page Not Found"}),(0,s.jsx)("p",{className:"text-lg mt-2 text-gray-600",children:"The page you are looking for might have been removed or is temporarily unavailable."}),(0,s.jsx)("button",{className:"btn btn-primary bg-gray-800 text-white mt-6 px-8 py-3 rounded-lg hover:scale-105 hover:bg-green-500 transition-all",children:"Back to Home"})]})]})}r(1135)},9359:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Projects\\\\P_External\\\\alishopping-web\\\\src\\\\app\\\\promotion\\\\page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Projects\\P_External\\alishopping-web\\src\\app\\promotion\\page.js","default")},1135:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[955],()=>r(4830));module.exports=s})();