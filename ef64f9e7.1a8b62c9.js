(window.webpackJsonp=window.webpackJsonp||[]).push([[2593],{2664:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),l=(n(0),n(2836)),o=["components"],p={},c={unversionedId:"puppeteer.executioncontext.evaluatehandle",id:"version-10.0.0/puppeteer.executioncontext.evaluatehandle",isDocsHomePage:!1,title:"puppeteer.executioncontext.evaluatehandle",description:"Home &gt; puppeteer &gt; ExecutionContext &gt; evaluateHandle",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.executioncontext.evaluatehandle.md",slug:"/puppeteer.executioncontext.evaluatehandle",permalink:"/puppeteer/docs/10.0.0/puppeteer.executioncontext.evaluatehandle",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.executioncontext.evaluate",permalink:"/puppeteer/docs/10.0.0/puppeteer.executioncontext.evaluate"},next:{title:"puppeteer.executioncontext.frame",permalink:"/puppeteer/docs/10.0.0/puppeteer.executioncontext.frame"}},u=[{value:"ExecutionContext.evaluateHandle() method",id:"executioncontextevaluatehandle-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]}],i={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,o);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.executioncontext"},"ExecutionContext")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.executioncontext.evaluatehandle"},"evaluateHandle")),Object(l.b)("h2",{id:"executioncontextevaluatehandle-method"},"ExecutionContext.evaluateHandle() method"),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"evaluateHandle<HandleType extends JSHandle | ElementHandle = JSHandle>(pageFunction: EvaluateHandleFn, ...args: SerializableOrJSHandle[]): Promise<HandleType>;\n")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.evaluatehandlefn"},"EvaluateHandleFn")),Object(l.b)("td",{parentName:"tr",align:null},"a function to be evaluated in the ",Object(l.b)("code",null,"executionContext"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"args"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(l.b)("td",{parentName:"tr",align:null},"argument to pass to the page function")))),Object(l.b)("b",null,"Returns:"),Object(l.b)("p",null,"Promise","<","HandleType",">"),Object(l.b)("p",null,"A promise that resolves to the return value of the given function as an in-page object (a ",Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.jshandle"},"JSHandle"),")."),Object(l.b)("h2",{id:"remarks"},"Remarks"),Object(l.b)("p",null,"The only difference between ",Object(l.b)("inlineCode",{parentName:"p"},"executionContext.evaluate")," and ",Object(l.b)("inlineCode",{parentName:"p"},"executionContext.evaluateHandle")," is that ",Object(l.b)("inlineCode",{parentName:"p"},"executionContext.evaluateHandle")," returns an in-page object (a ",Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.jshandle"},"JSHandle"),"). If the function passed to the ",Object(l.b)("inlineCode",{parentName:"p"},"executionContext.evaluateHandle")," returns a Promise, then ",Object(l.b)("inlineCode",{parentName:"p"},"executionContext.evaluateHandle")," would wait for the promise to resolve and return its value."),Object(l.b)("h2",{id:"example-1"},"Example 1"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const context = await page.mainFrame().executionContext();\nconst aHandle = await context.evaluateHandle(() => Promise.resolve(self));\naHandle; // Handle for the global object.\n\n")),Object(l.b)("h2",{id:"example-2"},"Example 2"),Object(l.b)("p",null,"A string can also be passed in instead of a function."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// Handle for the '3' * object.\nconst aHandle = await context.evaluateHandle('1 + 2');\n\n")),Object(l.b)("h2",{id:"example-3"},"Example 3"),Object(l.b)("p",null,"JSHandle instances can be passed as arguments to the ",Object(l.b)("inlineCode",{parentName:"p"},"executionContext.* evaluateHandle"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const aHandle = await context.evaluateHandle(() => document.body);\nconst resultHandle = await context.evaluateHandle(body => body.innerHTML, * aHandle);\nconsole.log(await resultHandle.jsonValue()); // prints body's innerHTML\nawait aHandle.dispose();\nawait resultHandle.dispose();\n\n")))}d.isMDXComponent=!0},2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),i=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=i(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),s=a,m=d["".concat(o,".").concat(s)]||d[s]||b[s]||l;return n?r.a.createElement(m,p(p({ref:t},u),{},{components:n})):r.a.createElement(m,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);