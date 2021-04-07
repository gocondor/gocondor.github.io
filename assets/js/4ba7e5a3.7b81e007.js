(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{82:function(e,o,n){"use strict";n.r(o),n.d(o,"frontMatter",(function(){return i})),n.d(o,"metadata",(function(){return a})),n.d(o,"toc",(function(){return p})),n.d(o,"default",(function(){return d}));var t=n(3),r=n(7),c=(n(0),n(97)),i={title:"Contribute"},a={unversionedId:"contribute",id:"contribute",isDocsHomePage:!1,title:"Contribute",description:"The framework consist of two main parts, each lives in a separate repository, the first part is the core which contains the framework core packages. the second part is gocondor which has the project folder structure and responsible of gluing everything together.",source:"@site/docs/contribute.md",slug:"/contribute",permalink:"/docs/contribute",editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/contribute.md",version:"current",sidebar:"docs",previous:{title:"TLS",permalink:"/docs/tls"}},p=[],l={toc:p};function d(e){var o=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},l,n,{components:o,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The framework consist of two main parts, each lives in a separate repository, the first part is the ",Object(c.b)("inlineCode",{parentName:"p"},"core")," which contains the framework core packages. the second part is ",Object(c.b)("inlineCode",{parentName:"p"},"gocondor")," which has the project folder structure and responsible of gluing everything together."),Object(c.b)("p",null,"To contribute you simply need to clone these two repositories locally and create new branches from the ",Object(c.b)("inlineCode",{parentName:"p"},"develop")," branch, add your changes, then open up a ",Object(c.b)("inlineCode",{parentName:"p"},"PR")," on the ",Object(c.b)("inlineCode",{parentName:"p"},"develop")," branch."),Object(c.b)("p",null,"Here is how you can set up the development workflow in your local machine:\n1- Create the organization ",Object(c.b)("inlineCode",{parentName:"p"},"gocondor")," directory in your workspace, here is how the path to it should look like:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$GOPATH/src/ginthub.com/gocondor\n")),Object(c.b)("p",null,"2- clone the repository ",Object(c.b)("inlineCode",{parentName:"p"},"core")," inside the ",Object(c.b)("inlineCode",{parentName:"p"},"organization")," directory, here is how:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# cd into the organization directory\ncd $GOPATH/src/ginthub.com/gocondor\n\n# clone the core module\ngit clone git@github.com:gocondor/core.git\n")),Object(c.b)("p",null,"2- clone the repository ",Object(c.b)("inlineCode",{parentName:"p"},"gocondor"),", here is how you can do it"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# cd into the organization directory\ncd $GOPATH/src/ginthub.com/gocondor\n\n# clone the gocondor module\ngit clone git@github.com:gocondor/gocondor.git\n")),Object(c.b)("p",null,"3- cd into the project ",Object(c.b)("inlineCode",{parentName:"p"},"gocondor")," and open up ",Object(c.b)("inlineCode",{parentName:"p"},"go.mod")," in your editor and add the line ",Object(c.b)("inlineCode",{parentName:"p"},"github.com/gocondor/gocondor/core => [full-local-path-to-core]")," to the ",Object(c.b)("inlineCode",{parentName:"p"},"replace"),"statement, make sure it looks something like this:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},"module github.com/gocondor/gocondor\n\nreplace (\n github.com/gocondor/core => C:/Users/myname/go/src/github.com/gocondor/core\n\n github.com/gocondor/gocondor/config => ./config\n github.com/gocondor/gocondor/httpd => ./httpd\n github.com/gocondor/gocondor/httpd/middlewares => ./httpd/middlewares\n github.com/gocondor/gocondor/integrations => ./integrations\n github.com/gocondor/gocondor/models => ./models\n)\n\ngo 1.16\n\nrequire (\n github.com/gin-gonic/gin v1.6.3\n github.com/gocondor/core v0.0.0-20210407100326-7c4af7b4c5a0\n github.com/joho/godotenv v1.3.0\n gorm.io/gorm v1.21.6\n)\n")),Object(c.b)("p",null,"Note:\nNote the first line in the ",Object(c.b)("inlineCode",{parentName:"p"},"replace"),"statement this is needed to tell go that instead of using the remote core packages use the local copy where we will be making the changes, once you are done, open up your ",Object(c.b)("inlineCode",{parentName:"p"},"PR")," against ",Object(c.b)("inlineCode",{parentName:"p"},"develop")," branch."))}d.isMDXComponent=!0},97:function(e,o,n){"use strict";n.d(o,"a",(function(){return s})),n.d(o,"b",(function(){return g}));var t=n(0),r=n.n(t);function c(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function i(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?i(Object(n),!0).forEach((function(o){c(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function p(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var o=r.a.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):a(a({},o),e)),n},s=function(e){var o=d(e.components);return r.a.createElement(l.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.a.createElement(r.a.Fragment,{},o)}},b=r.a.forwardRef((function(e,o){var n=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(n),b=t,g=s["".concat(i,".").concat(b)]||s[b]||u[b]||c;return n?r.a.createElement(g,a(a({ref:o},l),{},{components:n})):r.a.createElement(g,a({ref:o},l))}));function g(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var c=n.length,i=new Array(c);i[0]=b;var a={};for(var p in o)hasOwnProperty.call(o,p)&&(a[p]=o[p]);a.originalType=e,a.mdxType="string"==typeof e?e:t,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);