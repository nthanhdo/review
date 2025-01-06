exports.id=635,exports.ids=[635],exports.modules={5635:(e,t,i)=>{"use strict";i.d(t,{default:()=>o.a});var r=i(8516),o=i.n(r)},1066:(e,t,i)=>{let{createProxy:r}=i(3439);e.exports=r("D:\\Projects\\P_External\\alishopping-web\\node_modules\\next\\dist\\client\\image-component.js")},2326:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),i(5843);let r=i(6749),o=i(2833);function n(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var i;let a,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:g=!1,loading:m,className:h,quality:p,width:b,height:v,fill:w=!1,style:y,overrideSrc:x,onLoad:j,onLoadingComplete:S,placeholder:_="empty",blurDataURL:P,fetchPriority:C,decoding:z="async",layout:O,objectFit:E,objectPosition:I,lazyBoundary:M,lazyRoot:R,...D}=e,{imgConf:k,showAltText:A,blurComplete:F,defaultLoader:G}=t,N=k||o.imageConfigDefault;if("allSizes"in N)a=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);a={...N,allSizes:e,deviceSizes:t}}if(void 0===G)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let B=D.loader||G;delete D.loader,delete D.srcSet;let L="__next_img_default"in B;if(L){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=B;B=t=>{let{config:i,...r}=t;return e(r)}}if(O){"fill"===O&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let W="",V=s(b),T=s(v);if((i=u)&&"object"==typeof i&&(n(i)||void 0!==i.src)){let e=n(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,P=P||e.blurDataURL,W=e.src,!w){if(V||T){if(V&&!T){let t=V/e.width;T=Math.round(e.height*t)}else if(!V&&T){let t=T/e.height;V=Math.round(e.width*t)}}else V=e.width,T=e.height}}let U=!g&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:W)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,U=!1),a.unoptimized&&(f=!0),L&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0);let q=s(p),J=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:I}:{},A?{}:{color:"transparent"},y),Y=F||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:V,heightInt:T,blurWidth:l,blurHeight:d,blurDataURL:P||"",objectFit:J.objectFit})+'")':'url("'+_+'")',H=Y?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},$=function(e){let{config:t,src:i,unoptimized:r,width:o,quality:n,sizes:s,loader:a}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,i){let{deviceSizes:r,allSizes:o}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,s),u=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((e,r)=>a({config:t,src:i,quality:n,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:a({config:t,src:i,quality:n,width:l[u]})}}({config:a,src:u,unoptimized:f,width:V,quality:q,sizes:c,loader:B});return{props:{...D,loading:U?"lazy":m,fetchPriority:C,width:V,height:T,decoding:z,className:h,style:{...J,...H},sizes:$.sizes,srcSet:$.srcSet,src:x||$.src},meta:{unoptimized:f,priority:g,placeholder:_,fill:w}}}},6749:(e,t)=>{"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:o,blurDataURL:n,objectFit:s}=e,a=r?40*r:t,l=o?40*o:i,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},2833:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{VALID_LOADERS:function(){return i},imageConfigDefault:function(){return r}});let i=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},8516:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return l},getImageProps:function(){return a}});let r=i(3264),o=i(2326),n=i(1066),s=r._(i(6352));function a(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/review/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let l=n.Image},6352:(e,t)=>{"use strict";function i(e){let{config:t,src:i,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},5843:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}}};