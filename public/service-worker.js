if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,n,f)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const a={uri:location.origin+c.slice(1)};return Promise.all(n.map(c=>{switch(c){case"exports":return i;case"module":return a;default:return e(c)}})).then(e=>{const c=f(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-56b7c574"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ssasoft_backoffice_v2"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/.DS_Store",revision:"1f762ba724d5904c5b909d71c0a3f03c"},{url:"/.htaccess",revision:"3881737db846579f9e86e19352d50773"},{url:"/BOE-LOGO-02-Actual.png",revision:"cc5c0697e16cfb5f197b0d5f3cad6743"},{url:"/app-logo-128x128.png",revision:"5a0d62f7c1f3595188a51ee1a3ff3f46"},{url:"/backoffice.svg",revision:"6a46ce709a2e94ea8c007dd6757fcd6e"},{url:"/css/app.0e433876.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/css/vendor.05081270.css",revision:"c49f8463acbb93cb032b304f2fd04d67"},{url:"/favicon.ico",revision:"e20a0e871308bd8948ce44827742ed42"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.2d36eb59.woff",revision:"463cfa6bda38af7123b1770d4982ad3c"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.492281ee.woff2",revision:"8ff0ce021911cf276edc22fb8ca59ec7"},{url:"/fonts/ionicons.175f391f.woff2",revision:"96f1c901c087fb64019f7665f7f8aca6"},{url:"/fonts/ionicons.bf69b013.woff",revision:"99b863497156d4478ec3489fefb3815c"},{url:"/icons/.DS_Store",revision:"194577a7e20bdcc7afbb718f502c134c"},{url:"/icons/apple-icon-120x120.png",revision:"2eabd4dcd763b03ec29828e67afac65d"},{url:"/icons/apple-icon-152x152.png",revision:"d0b691859299a7026b45c9c9d8b298c5"},{url:"/icons/apple-icon-167x167.png",revision:"e40894fd8a33700ebb7d36e246c7c6dd"},{url:"/icons/apple-icon-180x180.png",revision:"98358b55736d32f0cc7493340a42db87"},{url:"/icons/apple-launch-1125x2436.png",revision:"8529de857ca0eee182e95ef8f624e9e1"},{url:"/icons/apple-launch-1242x2208.png",revision:"0c0085f04885c57d3d504f7ff6c88d9a"},{url:"/icons/apple-launch-1242x2688.png",revision:"53668400098f8fca573ab965ed5ca16f"},{url:"/icons/apple-launch-1536x2048.png",revision:"521dcf6fa22d61c04e664536b521a5f2"},{url:"/icons/apple-launch-1668x2224.png",revision:"7a966b1b4af47234871539939d314a29"},{url:"/icons/apple-launch-1668x2388.png",revision:"621a9629e43872751076d92ec14459d9"},{url:"/icons/apple-launch-2048x2732.png",revision:"f5acbbfc5f539220a60dec10c51204a4"},{url:"/icons/apple-launch-640x1136.png",revision:"5b8240d67c33f26889e7e118ae09e676"},{url:"/icons/apple-launch-750x1334.png",revision:"1528524dd8fcf7ad118098de54662e1c"},{url:"/icons/apple-launch-828x1792.png",revision:"fb0d28e92d38a7e5aa2db7146fd83fe7"},{url:"/icons/favicon-128x128.png",revision:"f299eb2597e1c5dbfcee553ab335c045"},{url:"/icons/favicon-16x16.png",revision:"2cfce8a19fbfc614fa5bb63a16ae85a0"},{url:"/icons/favicon-32x32.png",revision:"75797c8bc52f3c4d36679133af00f209"},{url:"/icons/favicon-96x96.png",revision:"aee7c936a5c2e6f25e6927a749d06b77"},{url:"/icons/favicon.ico",revision:"e20a0e871308bd8948ce44827742ed42"},{url:"/icons/icon-128x128.png",revision:"f299eb2597e1c5dbfcee553ab335c045"},{url:"/icons/icon-192x192.png",revision:"25a1156d509e1da3b167c416d1d923cb"},{url:"/icons/icon-256x256.png",revision:"cf033847c6a03fe6a2fa153a3b19c83d"},{url:"/icons/icon-384x384.png",revision:"a22b7c5a86883abe28ad5fac201bab8e"},{url:"/icons/icon-512x512.png",revision:"3c9090d7714638caf28fe80b30e42c80"},{url:"/icons/ms-icon-144x144.png",revision:"92a6fae308028854d085a316ceb5a7d2"},{url:"/icons/safari-pinned-tab.svg",revision:"785fcbfa9f3983694fee100efc529aec"},{url:"/img/quasar-logo-full.68ae1645.svg",revision:"c3e886514c633b21c81db623874d06cd"},{url:"/index.html",revision:"7aa694a954fafc0f07976ec23ecf653a"},{url:"/index.php",revision:"b9901d13f00ef92e0793e2d9fcd57431"},{url:"/js/2.821d6a36.js",revision:"4451d015c412427d88501a29f2882357"},{url:"/js/3.5c3bce51.js",revision:"45ccf3d3da71cc14846fc58402ad2143"},{url:"/js/4.5c9a8988.js",revision:"26a66b7c99b1f1216a1762a93be2d2fc"},{url:"/js/app.5154e4bd.js",revision:"f473675f3f727542c73195460004ec69"},{url:"/js/vendor.aecb68ab.js",revision:"8f3bced63a2eaf9a50c54479fe2abfc3"},{url:"/manifest.json",revision:"748b395d389a786df38b013d450058e7"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/web.config",revision:"50e9a0f34b264670691691d406428d75"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
