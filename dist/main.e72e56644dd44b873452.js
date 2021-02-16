(()=>{"use strict";var t={466:(t,a,e)=>{e.d(a,{Z:()=>n});var i=e(645),o=e.n(i)()((function(t){return t[1]}));o.push([t.id,'*{margin:0;padding:0;box-sizing:border-box}body{background:#d9c6a5;background:linear-gradient(0deg, #d9c6a5 0%, #fff1dc 100%);width:100vw;height:100vh;font-family:"Roboto",sans-serif;line-height:1}@keyframes ringProgress{0%{stroke-dasharray:0 100}}#watch{width:100%;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;margin-top:20px;transition:opacity 1000ms ease-in-out,margin-top 1000ms ease-in-out}#watch .container{width:100%;height:100%;max-width:360px;max-height:640px;position:relative}#watch .container>div{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}#watch .container .band{width:220px;height:440px;border-radius:10px;position:absolute;overflow:hidden;z-index:1;background:#000;background:linear-gradient(90deg, #292929 0%, #010408 100%)}#watch .container .band::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0);background:radial-gradient(circle, #262626 70%, #000 100%)}#watch .container .display{width:330px;height:300px;background:#000;border:10px solid #262626;border-radius:36px;position:relative;transform:translate(-50%, -50%) rotate(-90deg);z-index:2}#watch .container .display::after{content:"";position:absolute;width:100%;height:100%;border-radius:26px;background:rgba(255,255,255,0);background:linear-gradient(160deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)}#watch .container .display .crown{width:60px;height:16px;position:absolute;right:50px;bottom:-26px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;background:#000;background:linear-gradient(90deg, #292929 0%, #010408 100%)}#watch .container .display .hand{width:80%;position:absolute;top:50%;left:50%;height:12px;transform:translate(-50%, -50%)}#watch .container .display .hand>div{width:50%;height:100%;position:absolute;top:0;right:5px;border-radius:10px}#watch .container .display .hand>div .center{width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;top:50%;left:-1px;transform:translate(0, -50%)}#watch .container .display .hand>div .thin{background:#fff;width:100%;height:4px;border-radius:2px;position:absolute;top:50%;left:0;transform:translate(0, -50%)}#watch .container .display .hand>div .fat{background:#fff;width:70%;height:100%;border-radius:8px;position:absolute;top:50%;right:0;transform:translate(0, -50%);box-shadow:0 0 10px #000}#watch .container .display .hand#minute .fat{width:80%}#watch .container .display .hand#hour{width:50%}#watch .container .display .hand#second .center{background:#636d84;width:10px;height:10px;left:0}#watch .container .display .hand#second .thin{background:#636d84;left:-20px;width:120%;height:2px;box-shadow:0 0 5px #000}#watch .container .display .marks.millisecond>div{width:82%;height:2px;background:#313643;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}#watch .container .display .marks.millisecond>div::before{content:"";background:#000;border:2px solid #000;border-radius:10px;width:90%;height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}#watch .container .display .marks.millisecond>div:nth-of-type(2){transform:translate(-50%, -50%) rotate(3deg)}#watch .container .display .marks.millisecond>div:nth-of-type(3){transform:translate(-50%, -50%) rotate(6deg)}#watch .container .display .marks.millisecond>div:nth-of-type(4){transform:translate(-50%, -50%) rotate(9deg)}#watch .container .display .marks.millisecond>div:nth-of-type(5){transform:translate(-50%, -50%) rotate(12deg)}#watch .container .display .marks.millisecond>div:nth-of-type(6){transform:translate(-50%, -50%) rotate(15deg)}#watch .container .display .marks.millisecond>div:nth-of-type(7){transform:translate(-50%, -50%) rotate(18deg)}#watch .container .display .marks.millisecond>div:nth-of-type(8){transform:translate(-50%, -50%) rotate(21deg)}#watch .container .display .marks.millisecond>div:nth-of-type(9){transform:translate(-50%, -50%) rotate(24deg)}#watch .container .display .marks.millisecond>div:nth-of-type(10){transform:translate(-50%, -50%) rotate(27deg)}#watch .container .display .marks.millisecond>div:nth-of-type(11){transform:translate(-50%, -50%) rotate(30deg)}#watch .container .display .marks.millisecond>div:nth-of-type(12){transform:translate(-50%, -50%) rotate(33deg)}#watch .container .display .marks.millisecond>div:nth-of-type(13){transform:translate(-50%, -50%) rotate(36deg)}#watch .container .display .marks.millisecond>div:nth-of-type(14){transform:translate(-50%, -50%) rotate(39deg)}#watch .container .display .marks.millisecond>div:nth-of-type(15){transform:translate(-50%, -50%) rotate(42deg)}#watch .container .display .marks.millisecond>div:nth-of-type(16){transform:translate(-50%, -50%) rotate(45deg)}#watch .container .display .marks.millisecond>div:nth-of-type(17){transform:translate(-50%, -50%) rotate(48deg)}#watch .container .display .marks.millisecond>div:nth-of-type(18){transform:translate(-50%, -50%) rotate(51deg)}#watch .container .display .marks.millisecond>div:nth-of-type(19){transform:translate(-50%, -50%) rotate(54deg)}#watch .container .display .marks.millisecond>div:nth-of-type(20){transform:translate(-50%, -50%) rotate(57deg)}#watch .container .display .marks.millisecond>div:nth-of-type(21){transform:translate(-50%, -50%) rotate(60deg)}#watch .container .display .marks.millisecond>div:nth-of-type(22){transform:translate(-50%, -50%) rotate(63deg)}#watch .container .display .marks.millisecond>div:nth-of-type(23){transform:translate(-50%, -50%) rotate(66deg)}#watch .container .display .marks.millisecond>div:nth-of-type(24){transform:translate(-50%, -50%) rotate(69deg)}#watch .container .display .marks.millisecond>div:nth-of-type(25){transform:translate(-50%, -50%) rotate(72deg)}#watch .container .display .marks.millisecond>div:nth-of-type(26){transform:translate(-50%, -50%) rotate(75deg)}#watch .container .display .marks.millisecond>div:nth-of-type(27){transform:translate(-50%, -50%) rotate(78deg)}#watch .container .display .marks.millisecond>div:nth-of-type(28){transform:translate(-50%, -50%) rotate(81deg)}#watch .container .display .marks.millisecond>div:nth-of-type(29){transform:translate(-50%, -50%) rotate(84deg)}#watch .container .display .marks.millisecond>div:nth-of-type(30){transform:translate(-50%, -50%) rotate(87deg)}#watch .container .display .marks.millisecond>div:nth-of-type(31){transform:translate(-50%, -50%) rotate(90deg)}#watch .container .display .marks.millisecond>div:nth-of-type(32){transform:translate(-50%, -50%) rotate(93deg)}#watch .container .display .marks.millisecond>div:nth-of-type(33){transform:translate(-50%, -50%) rotate(96deg)}#watch .container .display .marks.millisecond>div:nth-of-type(34){transform:translate(-50%, -50%) rotate(99deg)}#watch .container .display .marks.millisecond>div:nth-of-type(35){transform:translate(-50%, -50%) rotate(102deg)}#watch .container .display .marks.millisecond>div:nth-of-type(36){transform:translate(-50%, -50%) rotate(105deg)}#watch .container .display .marks.millisecond>div:nth-of-type(37){transform:translate(-50%, -50%) rotate(108deg)}#watch .container .display .marks.millisecond>div:nth-of-type(38){transform:translate(-50%, -50%) rotate(111deg)}#watch .container .display .marks.millisecond>div:nth-of-type(39){transform:translate(-50%, -50%) rotate(114deg)}#watch .container .display .marks.millisecond>div:nth-of-type(40){transform:translate(-50%, -50%) rotate(117deg)}#watch .container .display .marks.millisecond>div:nth-of-type(41){transform:translate(-50%, -50%) rotate(120deg)}#watch .container .display .marks.millisecond>div:nth-of-type(42){transform:translate(-50%, -50%) rotate(123deg)}#watch .container .display .marks.millisecond>div:nth-of-type(43){transform:translate(-50%, -50%) rotate(126deg)}#watch .container .display .marks.millisecond>div:nth-of-type(44){transform:translate(-50%, -50%) rotate(129deg)}#watch .container .display .marks.millisecond>div:nth-of-type(45){transform:translate(-50%, -50%) rotate(132deg)}#watch .container .display .marks.millisecond>div:nth-of-type(46){transform:translate(-50%, -50%) rotate(135deg)}#watch .container .display .marks.millisecond>div:nth-of-type(47){transform:translate(-50%, -50%) rotate(138deg)}#watch .container .display .marks.millisecond>div:nth-of-type(48){transform:translate(-50%, -50%) rotate(141deg)}#watch .container .display .marks.millisecond>div:nth-of-type(49){transform:translate(-50%, -50%) rotate(144deg)}#watch .container .display .marks.millisecond>div:nth-of-type(50){transform:translate(-50%, -50%) rotate(147deg)}#watch .container .display .marks.millisecond>div:nth-of-type(51){transform:translate(-50%, -50%) rotate(150deg)}#watch .container .display .marks.millisecond>div:nth-of-type(52){transform:translate(-50%, -50%) rotate(153deg)}#watch .container .display .marks.millisecond>div:nth-of-type(53){transform:translate(-50%, -50%) rotate(156deg)}#watch .container .display .marks.millisecond>div:nth-of-type(54){transform:translate(-50%, -50%) rotate(159deg)}#watch .container .display .marks.millisecond>div:nth-of-type(55){transform:translate(-50%, -50%) rotate(162deg)}#watch .container .display .marks.millisecond>div:nth-of-type(56){transform:translate(-50%, -50%) rotate(165deg)}#watch .container .display .marks.millisecond>div:nth-of-type(57){transform:translate(-50%, -50%) rotate(168deg)}#watch .container .display .marks.millisecond>div:nth-of-type(58){transform:translate(-50%, -50%) rotate(171deg)}#watch .container .display .marks.millisecond>div:nth-of-type(59){transform:translate(-50%, -50%) rotate(174deg)}#watch .container .display .marks.millisecond>div:nth-of-type(60){transform:translate(-50%, -50%) rotate(177deg)}#watch .container .display .marks.hour>div{width:82%;height:3px;background:#fff;border-radius:10px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}#watch .container .display .marks.hour>div::before{content:"";background:#000;border-radius:10px;border:2px solid #000;width:90%;height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}#watch .container .display .marks.hour>div:nth-of-type(2){transform:translate(-50%, -50%) rotate(30deg)}#watch .container .display .marks.hour>div:nth-of-type(3){transform:translate(-50%, -50%) rotate(60deg)}#watch .container .display .marks.hour>div:nth-of-type(4){transform:translate(-50%, -50%) rotate(90deg)}#watch .container .display .marks.hour>div:nth-of-type(5){transform:translate(-50%, -50%) rotate(120deg)}#watch .container .display .marks.hour>div:nth-of-type(6){transform:translate(-50%, -50%) rotate(150deg)}#watch .container .display .complication.inside{width:70px;height:70px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:#171717;background-repeat:no-repeat;border:none;border-radius:50%;overflow:hidden;outline:none;cursor:pointer}#watch .container .display .complication.inside:focus{background:#252525}#watch .container .display .complication.inside#top{left:70%;background:#000;font-size:18px;font-weight:500;text-transform:uppercase;letter-spacing:2px;color:#fff;display:flex;align-items:center;justify-content:center}#watch .container .display .complication.inside#top span{transform:rotate(90deg)}#watch .container .display .complication.inside#right{top:70%}#watch .container .display .complication.inside#right>span{transform:rotate(90deg);color:#fff;width:100%;height:100%;position:absolute;top:0;left:0;display:flex;flex-flow:column;align-items:center;justify-content:center}#watch .container .display .complication.inside#right>span>span{text-transform:uppercase;width:100%;text-align:center}#watch .container .display .complication.inside#right>span #weekday{color:#636d84;font-size:16px;letter-spacing:1px}#watch .container .display .complication.inside#right>span #day{font-size:32px;font-weight:500}#watch .container .display .complication.inside#bottom{background:#000;left:30%}#watch .container .display .complication.inside#bottom span{width:100%;height:100%;transform:rotate(90deg);display:flex;align-items:center;justify-content:center}#watch .container .display .complication.inside#bottom span #activity-rings{height:100%;width:100%}#watch .container .display .complication.inside#bottom span #activity-rings .ring{transform-origin:50%}#watch .container .display .complication.inside#bottom span #activity-rings .completed{stroke-linecap:round;animation:ringProgress 1500ms ease-in-out forwards}#watch .container .display .complication.inside#bottom span #activity-rings circle{fill:none}#watch .container .display .complication.inside#bottom span #activity-rings .move-ring .background{stroke:rgba(229,229,229,.1)}#watch .container .display .complication.inside#bottom span #activity-rings .move-ring .completed{stroke:#e5e5e5;animation-delay:1000ms}#watch .container .display .complication.inside#bottom span #activity-rings .exercise-ring .background{stroke:rgba(229,229,229,.1)}#watch .container .display .complication.inside#bottom span #activity-rings .exercise-ring .completed{stroke:#e5e5e5;animation-delay:1200ms}#watch .container .display .complication.inside#bottom span #activity-rings .stand-ring .background{stroke:rgba(229,229,229,.1)}#watch .container .display .complication.inside#bottom span #activity-rings .stand-ring .completed{stroke:#e5e5e5;animation-delay:1400ms}#watch .container .display .complication.inside#left{top:30%}#watch .container .display .complication.inside#left span{display:block;width:100%;height:100%;transform:rotate(90deg);display:flex;align-items:center;justify-content:center;padding:20px}#watch .container .display .complication.inside#left svg{fill:#e5e5e5;width:40px;height:40px}#watch .container .display .complication.outside#top-left{position:absolute;top:50%;left:50%;width:110%;height:110%;transform:translate(-50%, -50%)}#watch .container .display .complication.outside#top-left .value-xs{color:#e5e5e5;font-size:14px;display:block;position:absolute;top:33px;right:76px;transform:rotate(30deg)}#watch .container .display .complication.outside#top-left .icon{fill:#e5e5e5;width:21px;height:21px;position:absolute;top:34px;right:34px;transform:rotate(90deg)}#watch .container .display .complication.outside#top-left .graph{position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%, -50%)}#watch .container .display .complication.outside#top-left .ring{transform-origin:50%;transform:scale(1) rotate(-46deg)}#watch .container .display .complication.outside#top-left .ring circle{fill:none;stroke-linecap:round}#watch .container .display .complication.outside#top-left .ring .background{stroke:rgba(49,54,67,.6)}#watch .container .display .complication.outside#top-left .ring .completed{stroke:#e5e5e5;animation-delay:1000ms}#watch .container .display .complication.outside#top-right{position:absolute;top:50%;left:50%;width:110%;height:110%;transform:translate(-50%, -50%)}#watch .container .display .complication.outside#top-right .value-lg{color:#e5e5e5;font-size:18px;display:block;position:absolute;bottom:34px;right:34px;transform:rotate(136deg)}#watch .container .display .complication.outside#top-right .value-xs{color:#e5e5e5;font-size:14px;display:block;position:absolute;bottom:110px;right:30px;transform:rotate(116deg)}#watch .container .display .complication.outside#top-right .value-xs:last-of-type{bottom:22px;right:96px;transform:rotate(150deg)}#watch .container .display .complication.outside#top-right .icon{fill:#e5e5e5;width:21px;height:21px;position:absolute;top:36px;right:20px;transform:rotate(90deg)}#watch .container .display .complication.outside#top-right .graph{top:50%;left:50%;width:100%;height:100%}#watch .container .display .complication.outside#top-right .ring{transform-origin:50%;transform:scale(1) rotate(20deg)}#watch .container .display .complication.outside#top-right .ring circle{fill:none;stroke-linecap:round}#watch .container .display .complication.outside#top-right .ring .background{stroke:rgba(49,54,67,.6)}#watch .container .display .complication.outside#top-right .ring .completed{stroke:#e5e5e5;animation-delay:1000ms}#watch .container .display .complication.outside#top-right .ring .dot{fill:#e5e5e5;stroke:#000;stroke-width:.2px;position:absolute;top:0;left:0}#watch .container .display .complication.outside#bottom-left{position:absolute;top:50%;left:50%;width:110%;height:110%;transform:translate(-50%, -50%)}#watch .container .display .complication.outside#bottom-left .value-xs{color:#e5e5e5;font-size:14px;display:block;position:absolute;bottom:262px;right:234px;transform:rotate(142deg)}#watch .container .display .complication.outside#bottom-left .icon{fill:#e5e5e5;width:21px;height:21px;position:absolute;top:34px;left:34px;transform:rotate(90deg)}#watch .container .display .complication.outside#bottom-left .graph{position:absolute;top:0;left:0;width:100%;height:100%}#watch .container .display .complication.outside#bottom-left .ring{transform-origin:50%;transform:scale(1) rotate(200deg)}#watch .container .display .complication.outside#bottom-left .ring circle{fill:none;stroke-linecap:round}#watch .container .display .complication.outside#bottom-left .ring .background{stroke:rgba(49,54,67,.6)}#watch .container .display .complication.outside#bottom-left .ring .completed{stroke:#e5e5e5;animation-delay:1000ms}#watch .container .display #main-center{background:#000;width:4px;height:4px;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}#watch.show{opacity:1;margin-top:0}',""]);const n=o},645:t=>{t.exports=function(t){var a=[];return a.toString=function(){return this.map((function(a){var e=t(a);return a[2]?"@media ".concat(a[2]," {").concat(e,"}"):e})).join("")},a.i=function(t,e,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var n=0;n<this.length;n++){var r=this[n][0];null!=r&&(o[r]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);i&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),a.push(c))}},a}},379:(t,a,e)=>{var i,o=function(){var t={};return function(a){if(void 0===t[a]){var e=document.querySelector(a);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[a]=e}return t[a]}}(),n=[];function r(t){for(var a=-1,e=0;e<n.length;e++)if(n[e].identifier===t){a=e;break}return a}function s(t,a){for(var e={},i=[],o=0;o<t.length;o++){var s=t[o],c=a.base?s[0]+a.base:s[0],d=e[c]||0,l="".concat(c," ").concat(d);e[c]=d+1;var p=r(l),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(n[p].references++,n[p].updater(h)):n.push({identifier:l,updater:g(h,a),references:1}),i.push(l)}return i}function c(t){var a=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var n=e.nc;n&&(i.nonce=n)}if(Object.keys(i).forEach((function(t){a.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(a);else{var r=o(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(a)}return a}var d,l=(d=[],function(t,a){return d[t]=a,d.filter(Boolean).join("\n")});function p(t,a,e,i){var o=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=l(a,o);else{var n=document.createTextNode(o),r=t.childNodes;r[a]&&t.removeChild(r[a]),r.length?t.insertBefore(n,r[a]):t.appendChild(n)}}function h(t,a,e){var i=e.css,o=e.media,n=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var m=null,f=0;function g(t,a){var e,i,o;if(a.singleton){var n=f++;e=m||(m=c(a)),i=p.bind(null,e,n,!1),o=p.bind(null,e,n,!0)}else e=c(a),i=h.bind(null,e,a),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return i(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;i(t=a)}else o()}}t.exports=function(t,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var e=s(t=t||[],a);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<e.length;i++){var o=r(e[i]);n[o].references--}for(var c=s(t,a),d=0;d<e.length;d++){var l=r(e[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}e=c}}}}},a={};function e(i){if(a[i])return a[i].exports;var o=a[i]={id:i,exports:{}};return t[i](o,o.exports,e),o.exports}e.n=t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},e.d=(t,a)=>{for(var i in a)e.o(a,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})},e.o=(t,a)=>Object.prototype.hasOwnProperty.call(t,a),(()=>{var t=e(379),a=e.n(t),i=e(466);a()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const o=()=>{const t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${t}px`)},n=["sun","mon","tue","wed","thu","fri","sat"],r=t=>Math.floor(Math.random()*Math.floor(t)),s=()=>{const t=document.querySelector(".move-ring .completed"),a=document.querySelector(".exercise-ring .completed"),e=document.querySelector(".stand-ring .completed"),i=r(80),o=r(i),n=r(90);t.setAttribute("stroke-dasharray",`${i}, 100`),a.setAttribute("stroke-dasharray",`${o}, 100`),e.setAttribute("stroke-dasharray",`${n}, 100`)};o(),window.addEventListener("resize",o),setTimeout((()=>{document.getElementById("watch").classList.add("show")}),1e3),setInterval((()=>{const t=new Date;((t,a,e,i,o)=>{const r=document.getElementById("hour"),s=document.getElementById("minute"),c=document.getElementById("second"),d=document.getElementById("weekday"),l=document.getElementById("day");let p=e,h=a,m=t,f=n[i],g=o;switch(p*=6,h*=6,m>12&&(m-=12),m*=30,!0){case h>330:m+=27.5;break;case h>300:m+=25;break;case h>270:m+=22.5;break;case h>240:m+=20;break;case h>210:m+=17.5;break;case h>180:m+=15;break;case h>150:m+=12.5;break;case h>120:m+=10;break;case h>90:m+=7.5;break;case h>60:m+=5;break;case h>30:m+=2.5}r.setAttribute("style",`transform: translate(-50%, -50%) rotate(${m}deg)`),s.setAttribute("style",`transform: translate(-50%, -50%) rotate(${h}deg)`),c.setAttribute("style",`transform: translate(-50%, -50%) rotate(${p}deg)`),d.innerHTML=f,l.innerHTML=g})(t.getHours(),t.getMinutes(),t.getSeconds(),t.getDay(),t.getDate())}),1e3),s(),document.getElementById("bottom").addEventListener("click",(()=>{s()})),console.log("made by Wolf")})()})();