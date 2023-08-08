"use strict";(self.webpackChunkgocondor_site=self.webpackChunkgocondor_site||[]).push([[5886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Request"},l=void 0,i={unversionedId:"request",id:"request",title:"Request",description:"All request information like form data, uploaded files, headers,...etc can be accessed using the context.",source:"@site/docs/request.md",sourceDirName:".",slug:"/request",permalink:"/docs/request",draft:!1,editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/request.md",tags:[],version:"current",frontMatter:{title:"Request"},sidebar:"docsSidebar",previous:{title:"Context",permalink:"/docs/context"},next:{title:"Response",permalink:"/docs/response"}},s={},p=[{value:"URL Parameters",id:"url-parameters",level:3},{value:"Query and form post parameters",id:"query-and-form-post-parameters",level:3},{value:"Form uploaded files:",id:"form-uploaded-files",level:3},{value:"Save uploaded file:",id:"save-uploaded-file",level:3},{value:"Header Data:",id:"header-data",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All request information like ",(0,a.kt)("inlineCode",{parentName:"p"},"form data"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"uploaded files"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"headers"),",...etc can be accessed using the context."),(0,a.kt)("h3",{id:"url-parameters"},"URL Parameters"),(0,a.kt)("p",null,"URL path parameters can be defined by prefixing the parameter name with ",(0,a.kt)("inlineCode",{parentName:"p"},":"),".\nHere is an example of defining a path parameter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="file: routes.go"',title:'"file:','routes.go"':!0},'router.Get("users/:id", handlers.GetUsers)\n')),(0,a.kt)("p",null,"Here is an example of accessing it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="file handlers/users.go"',title:'"file','handlers/users.go"':!0},'func GetUsers(c *core.Context) {\n    userID := c.GetPathParam("id")\n}\n\n')),(0,a.kt)("h3",{id:"query-and-form-post-parameters"},"Query and form post parameters"),(0,a.kt)("p",null,"Query parameters are passed to the URL like this ",(0,a.kt)("inlineCode",{parentName:"p"},"/users?name=jack"),", both query parameters and the form post data can be accessed with the function ",(0,a.kt)("inlineCode",{parentName:"p"},'GetRequestParam("PARAM_NAME")'),", here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func listUsers(c *core.Context) {\n    name := c.GetRequestParam("name")\n    PostParam:= c.GetRequestParam("PARAM_KEY")\n}\n')),(0,a.kt)("h3",{id:"form-uploaded-files"},"Form uploaded files:"),(0,a.kt)("p",null,"Here is how you can access the form uploaded file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func saveFile(c *core.Context) {\n    fileInfo, err := c.GetUploadedFile("uploaded-file-key-name")\n    fileInfo.FullPath // full path to the temp location of the uploaded file\n    fileInfo.Name // the name of the file\n}\n')),(0,a.kt)("p",null,"Where:\n",(0,a.kt)("inlineCode",{parentName:"p"},"fileinfo")," is an object that has general information about the uploaded file, here is all the file information that it provides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fileInfo.FullPath"),": full path to the temp location of the uploaded file"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fileInfo.Name"),": the file name without the path"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fileInfo.NameWithoutExtension"),": the file name without extension"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fileInfo.Extension"),": the extension of the file"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fileInfo.Size"),": the file size in bytes")),(0,a.kt)("h3",{id:"save-uploaded-file"},"Save uploaded file:"),(0,a.kt)("p",null,"GoCondor stores all uploaded files in a temporary location, to save it to a specific location, you can simply move it using the function ",(0,a.kt)("inlineCode",{parentName:"p"},"MoveFile(srcPath, destPath, newFilename)"),", here is how:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="moving uploaded file to storage dir"',title:'"moving',uploaded:!0,file:!0,to:!0,storage:!0,'dir"':!0},'func SaveFile(c *core.Context) {\n    fileinfo, err := c.GetUploadedFile("uploaded-file-key-name")\n    err := c.MoveFile(fileinfo.FullPath, "./storage/files", "myfile.pdf")\n}\n')),(0,a.kt)("h3",{id:"header-data"},"Header Data:"),(0,a.kt)("p",null,"Here is how you can get headers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func ListTodos(c *core.Context) {\n    tokenStr := c.GetHeader("Authorization")\n}\n')))}d.isMDXComponent=!0}}]);