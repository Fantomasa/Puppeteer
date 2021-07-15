(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{221:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),p=(r(0),r(2836)),c=["components"],l={},i={unversionedId:"puppeteer.tracing",id:"puppeteer.tracing",isDocsHomePage:!1,title:"puppeteer.tracing",description:"Home &gt; puppeteer &gt; Tracing",source:"@site/docs\\puppeteer.tracing.md",slug:"/puppeteer.tracing",permalink:"/puppeteer/docs/next/puppeteer.tracing",version:"current"},b=[{value:"Tracing class",id:"tracing-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}],o={toc:b};function u(e){var t=e.components,r=Object(a.a)(e,c);return Object(p.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.tracing"},"Tracing")),Object(p.b)("h2",{id:"tracing-class"},"Tracing class"),Object(p.b)("p",null,"The Tracing class exposes the tracing audit interface."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class Tracing \n")),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"You can use ",Object(p.b)("inlineCode",{parentName:"p"},"tracing.start")," and ",Object(p.b)("inlineCode",{parentName:"p"},"tracing.stop")," to create a trace file which can be opened in Chrome DevTools or ",Object(p.b)("a",{parentName:"p",href:"https://chromedevtools.github.io/timeline-viewer/"},"timeline viewer"),"."),Object(p.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(p.b)("inlineCode",{parentName:"p"},"Tracing")," class."),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"await page.tracing.start({path: 'trace.json'});\nawait page.goto('https://www.google.com');\nawait page.tracing.stop();\n\n")),Object(p.b)("h2",{id:"properties"},"Properties"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Property"),Object(p.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.tracing._client"},"_","client")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.cdpsession"},"CDPSession")),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.tracing._path"},"_","path")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.tracing._recording"},"_","recording")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("h2",{id:"methods"},"Methods"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Method"),Object(p.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.tracing.start"},"start(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Starts a trace for the current page.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.tracing.stop"},"stop()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Stops a trace started with the ",Object(p.b)("code",null,"start")," method.")))))}u.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),o=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=o(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||p;return r?a.a.createElement(m,l(l({ref:t},b),{},{components:r})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,c=new Array(p);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var b=2;b<p;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);