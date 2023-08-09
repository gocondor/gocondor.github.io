"use strict";(self.webpackChunkgocondor_site=self.webpackChunkgocondor_site||[]).push([[8210],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={title:"Sending Emails"},o=void 0,s={unversionedId:"emails",id:"emails",title:"Sending Emails",description:"GoCondor supports 3 different drivers for sending emails, SMTP, SparkPost, SendGrid, and MailGun.",source:"@site/docs/emails.md",sourceDirName:".",slug:"/emails",permalink:"/docs/emails",draft:!1,editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/emails.md",tags:[],version:"current",frontMatter:{title:"Sending Emails"},sidebar:"docsSidebar",previous:{title:"Hashing passowrds",permalink:"/docs/hashing"},next:{title:"Database Configuration",permalink:"/docs/database-config"}},l={},c=[{value:"Emails drivers config",id:"emails-drivers-config",level:3},{value:"Sending emails",id:"sending-emails",level:3}],d={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GoCondor supports 3 different drivers for sending emails, ",(0,a.kt)("inlineCode",{parentName:"p"},"SMTP"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SparkPost"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SendGrid"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"MailGun"),".\nThe driver can be selected by setting the value of the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"EMAILS_DRIVER")," to either ",(0,a.kt)("inlineCode",{parentName:"p"},"smtp"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sparkpost"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sendgrid"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"mailgun"),"\neach driver has it's own configuration variables, they can be defined either in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file or can be injected into the environemnt using an external tool. "),(0,a.kt)("h3",{id:"emails-drivers-config"},"Emails drivers config"),(0,a.kt)("p",null,"Here is an example for the emails config "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#######################################\n######           Emails          ######\n#######################################\nEMAILS_DRIVER=smtp # smtp | sparkpost | sendgrid | mailgun\n#_____ SMTP _____#\nSMTP_HOST=localhost\nSMTP_PORT=25\nSMTP_USERNAME=\nSMTP_PASSWORD=\nSMTP_TLS_SKIP_VERIFY_HOST=true # (set true for development only!)\n\n#_____ sparkpost _____#\nSPARKPOST_BASE_URL=https://api.sparkpost.com\nSPARKPOST_API_VERSION=1\nSPARKPOST_API_KEY=sparkpost-api-key-here # the api key\n\n#_____ sendgrid _____#\nSENDGRID_HOST=https://api.sendgrid.com\nSENDGRID_ENDPOINT=/v3/mail/send\nSENDGRID_API_KEY=sendgrid-api-key-here # the api key\n\n#_____ mailgun _____#\nMAILGUN_DOMAIN=your-domain.com # your domain\nMAILGUN_API_KEY=mailgun-api-key-here # the api key\nMAILGUN_TLS_SKIP_VERIFY_HOST=true # (set true for development only!)\n")),(0,a.kt)("h3",{id:"sending-emails"},"Sending emails"),(0,a.kt)("p",null,"Here is an example for sending an email "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package handlers\n\nimport (\n    "fmt"\n\n    "github.com/gocondor/core"\n)\n\nfunc SayHelloWorld(c *core.Context) *core.Response {\n    mailer := c.GetMailer()\n    // set from\n    mailer.SetFrom(core.EmailAddress{Name: "jack", Address: "jack@example.com"})\n    // set to\n    mailer.SetTo([]core.EmailAddress{{Name: "jane", Address: "jane@example.com"}})\n    // set cc\n    mailer.SetCC([]core.EmailAddress{{Name: "john", Address: "john@example.com"}})\n    // set bcc\n    mailer.SetBCC([]core.EmailAddress{{Name: "bcc", Address: "bcc@example.com"}})\n    // set the subject\n    mailer.SetSubject(`Hello world`)\n    // set the body\n    mailer.SetHTMLBody(`<h1>Hello world from email</h1>`)\n    // set attachment\n    mailer.SetAttachments([]core.EmailAttachment{{\n        Name: "my first file", \n        Path: "./storage/my-first-file.pdf"\n    }})\n    // send\n    mailer.Send()\n}\n')))}m.isMDXComponent=!0}}]);