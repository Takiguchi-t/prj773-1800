!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=151)}([function(t,n){var e=t.exports={version:"2.5.6"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(29)("wks"),o=e(21),i=e(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(8),o=e(43),i=e(37),u=Object.defineProperty;n.f=e(5)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(2),o=e(0),i=e(13),u=e(6),a=e(9),c=function(t,n,e){var f,s,l,p=t&c.F,d=t&c.G,v=t&c.S,h=t&c.P,g=t&c.B,y=t&c.W,m=d?o:o[n]||(o[n]={}),x=m.prototype,b=d?r:v?r[n]:(r[n]||{}).prototype;d&&(e=n);for(f in e)(s=!p&&b&&void 0!==b[f])&&a(m,f)||(l=s?b[f]:e[f],m[f]=d&&"function"!=typeof b[f]?e[f]:g&&s?i(l,r):y&&b[f]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((m.virtual||(m.virtual={}))[f]=l,t&c.R&&x&&!x[f]&&u(x,f,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){t.exports=!e(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(3),o=e(16);t.exports=e(5)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports={}},function(t,n,e){var r=e(33),o=e(22);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(30);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(22);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(46),o=e(27);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){t.exports={default:e(53),__esModule:!0}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=!0},function(t,n,e){var r=e(3).f,o=e(9),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(29)("keys"),o=e(21);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){"use strict";var r=e(62)(!0);e(28)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){"use strict";var r=e(19),o=e(4),i=e(47),u=e(6),a=e(11),c=e(58),f=e(20),s=e(60),l=e(1)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,n,e,v,h,g,y){c(e,n,v);var m,x,b,w=function(t){if(!p&&t in L)return L[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},_=n+" Iterator",O="values"==h,S=!1,L=t.prototype,j=L[l]||L["@@iterator"]||h&&L[h],T=j||w(h),A=h?O?w("entries"):T:void 0,M="Array"==n?L.entries||j:j;if(M&&(b=s(M.call(new t)))!==Object.prototype&&b.next&&(f(b,_,!0),r||"function"==typeof b[l]||u(b,l,d)),O&&j&&"values"!==j.name&&(S=!0,T=function(){return j.call(this)}),r&&!y||!p&&!S&&L[l]||u(L,l,T),a[n]=T,a[_]=d,h)if(m={values:O?T:w("values"),keys:g?T:w("keys"),entries:A},y)for(x in m)x in L||i(L,x,m[x]);else o(o.P+o.F*(p||S),n,m);return m}},function(t,n,e){var r=e(0),o=e(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(19)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(18),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(a=r(n))&&"function"==typeof n.callee?"Arguments":a}},function(t,n,e){var r=e(7),o=e(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(18);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){e(66);for(var r=e(2),o=e(6),i=e(11),u=e(1)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<a.length;c++){var f=a[c],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},function(t,n,e){var r=e(8),o=e(59),i=e(27),u=e(23)("IE_PROTO"),a=function(){},c=function(){var t,n=e(32)("iframe"),r=i.length;for(n.style.display="none",e(49).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(a.prototype=r(t),e=new a,a.prototype=null,e[u]=t):e=c(),void 0===n?e:o(e,n)}},,function(t,n,e){var r=e(7);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},,function(t,n,e){var r=e(31),o=e(1)("iterator"),i=e(11);t.exports=e(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},,,,function(t,n,e){t.exports=!e(5)&&!e(10)(function(){return 7!=Object.defineProperty(e(32)("div"),"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},,function(t,n,e){var r=e(9),o=e(12),i=e(55)(!1),u=e(23)("IE_PROTO");t.exports=function(t,n){var e,a=o(t),c=0,f=[];for(e in a)e!=u&&r(a,e)&&f.push(e);for(;n.length>c;)r(a,e=n[c++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){t.exports=e(6)},function(t,n,e){t.exports={default:e(52),__esModule:!0}},function(t,n,e){var r=e(2).document;t.exports=r&&r.documentElement},,,function(t,n,e){var r=e(0),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,n,e){e(67),t.exports=e(0).Object.keys},function(t,n){t.exports=function(){}},function(t,n,e){var r=e(12),o=e(26),i=e(63);t.exports=function(t){return function(n,e,u){var a,c=r(n),f=o(c.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((a=c[s++])!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},,,function(t,n,e){"use strict";var r=e(35),o=e(16),i=e(20),u={};e(6)(u,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(3),o=e(8),i=e(15);t.exports=e(5)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),a=u.length,c=0;a>c;)r.f(t,e=u[c++],n[e]);return t}},function(t,n,e){var r=e(9),o=e(14),i=e(23)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(4),o=e(0),i=e(10);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n,e){var r=e(24),o=e(22);t.exports=function(t){return function(n,e){var i,u,a=String(o(n)),c=r(e),f=a.length;return c<0||c>=f?t?"":void 0:(i=a.charCodeAt(c),i<55296||i>56319||c+1===f||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):i:t?a.slice(c,c+2):u-56320+(i-55296<<10)+65536)}}},function(t,n,e){var r=e(24),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},,,function(t,n,e){"use strict";var r=e(54),o=e(44),i=e(11),u=e(12);t.exports=e(28)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(14),o=e(15);e(61)("keys",function(){return function(t){return o(r(t))}})},,,,,,,,function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(99),i=r(o),u=e(98),a=r(u);n.default=function(){function t(t,n){var e=[],r=!0,o=!1,i=void 0;try{for(var u,c=(0,a.default)(t);!(r=(u=c.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return e}return function(n,e){if(Array.isArray(n))return n;if((0,i.default)(Object(n)))return t(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},,,,,,,,,,,,function(t,n,e){"use strict";function r(t,n,e){var o=new XMLHttpRequest;if("withCredentials"in o)o.open("POST",t),o.setRequestHeader("Content-Type","text/plain"),o.addEventListener("load",function(){return e(o)}),o.addEventListener("abort",function(){setTimeout(function(){r(t,n,e)},50)}),o.send(n);else if(window.XDomainRequest){var i=new XDomainRequest;i.open("POST",t.replace(/^https?:/,"")),i.onload=function(){return e(i)},setTimeout(function(){i.send(n)},0)}}function o(t,n,e){r(t,(0,u.default)(n),function(t){e(JSON.parse(t.responseText).data)})}Object.defineProperty(n,"__esModule",{value:!0});var i=e(48),u=function(t){return t&&t.__esModule?t:{default:t}}(i);n.default=o},,,,,,,,,,,function(t,n,e){t.exports={default:e(104),__esModule:!0}},function(t,n,e){t.exports={default:e(105),__esModule:!0}},,,,,function(t,n,e){e(34),e(25),t.exports=e(122)},function(t,n,e){e(34),e(25),t.exports=e(123)},,,,,,,,,,,,,,,,,function(t,n,e){var r=e(8),o=e(39);t.exports=e(0).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},function(t,n,e){var r=e(31),o=e(1)("iterator"),i=e(11);t.exports=e(0).isIterable=function(t){var n=Object(t);return void 0!==n[o]||"@@iterator"in n||i.hasOwnProperty(r(n))}},,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={},o={},i={on:function(t,n){if(o[t])return void setTimeout(function(){return n(o[t].arg)},0);(r[t]=r[t]||[]).push(n)},off:function(t,n){r[t]=(r[t]||[]).filter(function(t){return t!==n})},once:function(t,n){var e=function e(){n.apply(void 0,arguments),i.off(t,e)};i.on(t,e)},emit:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=e.clear,u=void 0!==i&&i,a=e.retain,c=void 0!==a&&a;(r[t]||[]).forEach(function(t){t(n)}),u&&delete r[t],c&&(o[t]={arg:n})}};n.default=i},,,,,,,,,function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e]}function i(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.duration,o=void 0===r?12096e5:r;if(t="stt_"+t,!n){var i=new RegExp("(?:^|.*;\\s*)"+t+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*");return i.test(document.cookie)?unescape(document.cookie.replace(i,"$1")):void 0}document.cookie=t+"="+escape(n)+"; path=/; expires="+new Date(Date.now()+o).toUTCString()}function u(t,n){var e=i(t);i(t,"1",{duration:18e5}),e||n()}function a(t){if("string"==typeof t)return E[t];for(var n in t)t.hasOwnProperty(n)&&(E[n]=t[n])}function c(){if(!(P=document.querySelector("script[data-stt-id]"))){var t=document.querySelector('script[src*="/trans.js?id="]');if(t){var n=t.src.match(/trans\.js\?id=([\d]+)/);n&&(t.setAttribute("data-stt-id",n[1]),P=t)}}if(!P)throw new Error("A translation script tag is not found.");var e=P.getAttribute("data-stt-id"),r=void 0;if("280"!==e&&"278"!==e){var o=document.querySelector('link[rel="canonical"]');o&&o.href&&(r=o.href)}a({siteId:e,extension:P.hasAttribute("data-stt-extension"),bot:/bot|crawl|spider|yeti/i.test(navigator.userAgent.toLowerCase()),canonical:r})}function f(){var t=navigator.languages||[navigator.language||navigator.userLanguage||navigator.browserLanguage];-1!==navigator.userAgent.indexOf("Trident")&&E.browserLangs&&E.browserLangs.length&&(t=E.browserLangs);var n=[];return t.forEach(function(t){if(t){var e=t.split("_")[0];0===e.indexOf("zh")?(e=e.replace(/^zh-cmn/,"zh"),0===e.indexOf("zh-Hans")?e="zh-CN":0===e.indexOf("zh-Hant")&&(e="zh-TW")):e=e.split("-")[0],"zh"===e?n.push("zh-CN","zh-TW"):n.push(e)}}),n.filter(function(t,e){return n.indexOf(t)===e})}function s(){var t=location.search.match(/[?&]stt_lang=([-\w]+)/);return t?t[1]:void 0}function l(t,n){var e=document.createElement("script");e.setAttribute("stt-embed",""),e.src=t,n&&(e.onload=n),P.parentNode.appendChild(e)}function p(t){var n=d({siteId:E.siteId,url:window.location.href,canonical:E.canonical,title:document.title,extension:E.extension&&1,bot:E.bot&&1});(0,M.default)(E.beacon+"/config?"+n,{},function(n){a(n),t()})}function d(t){return(0,L.default)(t).filter(function(n){return t[n]}).map(function(n){return encodeURIComponent(n)+"="+encodeURIComponent(t[n])}).join("&")}function v(){h()&&(y("loading"),a({mainScript:"https://d.shutto-translation.com/scripts/2.6.46/main.js",beacon:"https://b.shutto-translation.com"}),c(),b())}function h(){return/^https?/.test(window.location.protocol)&&[/trans\.test$/,/p-trans\.xyz$/,/ea-p-trans\.net$/,/\.googleusercontent\.com$/,/gtm-msr\.appspot\.com$/].every(function(t){return!t.test(window.location.hostname)})}function g(t){var n=document.querySelector('meta[name="'+k+'"]');n||(n=document.createElement("meta"),n.setAttribute("name",k),n.setAttribute("stt-embed",""),document.head.appendChild(n)),(0,L.default)(t).forEach(function(n){C[n]=t[n]}),n.setAttribute("content",(0,L.default)(C).map(function(t){return t+"="+C[t]}).join(";"))}function y(t){g({state:t})}function m(){function t(t,n){var e=document.createElement("link");e.setAttribute("rel","alternate"),e.setAttribute("href",n),e.setAttribute("hreflang",t),document.head.appendChild(e)}var n=E.page,e=E.hosting;n&&n.hosted&&e&&e.target===E.location.host&&(t(E.fromLang,E.location.href),n.toLangs.forEach(function(n){var r=e.langs[n];r&&t(n,E.location.href.replace(/^([^/]+:\/\/)[^/]+/,"$1"+r))}))}function x(t){return t===E.fromLang||-1!==E.page.toLangs.indexOf(t)}function b(){function t(){var t=E.page;if(a({enabled:!!t}),!t)return y("unmatch"),T.default.emit("load:unmatch",{},{retain:!0}),void T.default.emit("load",{},{retain:!0});var n=f(),e=E.widgetLang&&"default"!==E.widgetLang?E.widgetLang:"ja"===n[0]?"ja":"en",r=s();x(r)?i("lang",r):r=void 0;var c=o([r,i("lang"),E.initialLang].concat(n).concat([E.defaultLang,E.fromLang]),x);a({uiLang:e,initialLang:c}),g({state:"match",siteId:E.siteId,pageId:t.id}),m(),E.bot||(u("in_session",function(){T.default.emit("setLang",{lang:c})}),T.default.emit("setLangHit",{lang:c}),l(E.mainScript,function(){E.normalizeUnicode&&!String.prototype.normalize?l("https://cdn.jsdelivr.net/npm/unorm@1.6.0/lib/unorm.min.js",function(){return window.__stt.ready()}):window.__stt.ready()}))}p(function(){t(),T.default.emit("config",E,{retain:!0})})}function w(){E={},C={},[].slice.call(document.querySelectorAll("[stt-embed]")).forEach(function(t){t.parentNode.removeChild(t)})}var _=e(75),O=r(_),S=e(17),L=r(S),j=e(142),T=r(j),A=e(87),M=r(A),E={},P=void 0,C={},k="stt-info",I={cookie:i,config:a,notification:T.default,on:function(t,n){T.default.on(t,function(){try{n.apply(void 0,arguments)}catch(n){console.error("An error occurred on "+t,n)}})},get:function(t,n){"lang"===t&&T.default.once("config",function(){n(E.enabled?E.toLang||E.initialLang:E.fromLang)})},set:function(t,n){"lang"===t&&(i("lang",n),a({initialLang:n}))},init:v,destroy:w};window.__stt||(window.__stt=I,!function(){var t=document.querySelector('meta[name="'+k+'"]');if(!t)return{};var n={};return(t.getAttribute("content")||"").split(";").forEach(function(t){if(t&&-1!==t.indexOf("=")){var e=t.split("="),r=(0,O.default)(e,2),o=r[0],i=r[1];n[decodeURIComponent(o)]=decodeURIComponent(i)}}),n}().disabled?setTimeout(v,0):I.init=I.destroy=function(){})}]);