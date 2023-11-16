"use strict";(self.webpackChunkgocondor_site=self.webpackChunkgocondor_site||[]).push([[7162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),g=o,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"Getting Started"},i=void 0,l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"First make sure you have GoCondor's cli installed.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Introduction",permalink:"/docs/"}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"First make sure you have ",(0,o.kt)("a",{parentName:"p",href:"https://gocondor.github.io/docs/installation"},"GoCondor's cli")," installed.\nLet's create a route that returns ",(0,o.kt)("inlineCode",{parentName:"p"},"hello world"),"\nOpen up the file ",(0,o.kt)("inlineCode",{parentName:"p"},"routes.go")," in the root of your project and add to it the code below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'"file: routes.go"','"file:':!0,'routes.go"':!0},'    router.Get("/", func(c *core.Context) *core.Response {\n        JsonString := `{"message": "hello world"}`\n\n        return c.Response.Json(JsonString)\n    })\n')),(0,o.kt)("p",null,"Next, in your terminal navigate to the project dir and run the following command to start the ",(0,o.kt)("inlineCode",{parentName:"p"},"live reloading"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"gocondor run:dev\n")),(0,o.kt)("p",null,"Finally, open up your browser and navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8000")),(0,o.kt)("p",null,"To learn more check the ",(0,o.kt)("a",{parentName:"p",href:"https://gocondor.github.io/docs/routing"},"routing docs section")))}d.isMDXComponent=!0}}]);