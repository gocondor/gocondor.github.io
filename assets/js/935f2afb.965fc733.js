"use strict";(self.webpackChunkgocondor_site=self.webpackChunkgocondor_site||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"category","label":"GoCondor Docs","items":[{"type":"link","label":"Installation","href":"/docs/installation","docId":"installation"},{"type":"link","label":"Getting Started","href":"/docs/getting-started","docId":"getting-started"},{"type":"link","label":"Introduction","href":"/docs/","docId":"introduction"},{"type":"link","label":"Environment Variables","href":"/docs/environment-variables","docId":"environment-variables"},{"type":"link","label":"Routing","href":"/docs/routing","docId":"routing"},{"type":"link","label":"Handlers","href":"/docs/handlers","docId":"handlers"},{"type":"link","label":"Context","href":"/docs/context","docId":"context"},{"type":"link","label":"Request","href":"/docs/request","docId":"request"},{"type":"link","label":"Response","href":"/docs/response","docId":"response"},{"type":"link","label":"Validation","href":"/docs/validation","docId":"validation"},{"type":"link","label":"Middlewares","href":"/docs/middlewares","docId":"middlewares"},{"type":"link","label":"JWT Tokens","href":"/docs/jwt","docId":"jwt"},{"type":"link","label":"Cache","href":"/docs/cache","docId":"cache"},{"type":"link","label":"TLS","href":"/docs/tls","docId":"tls"},{"type":"link","label":"Hashing passowrds","href":"/docs/hashing","docId":"hashing"},{"type":"link","label":"Sending Emails","href":"/docs/emails","docId":"emails"},{"type":"link","label":"Events","href":"/docs/events","docId":"events"},{"type":"link","label":"Database Configuration","href":"/docs/database-config","docId":"database-config"},{"type":"link","label":"Models","href":"/docs/database-models","docId":"database-models"},{"type":"link","label":"CRUD Operations","href":"/docs/database-crud","docId":"database-crud"},{"type":"link","label":"Relationships (Associations)","href":"/docs/database-relationships","docId":"database-relationships"},{"type":"link","label":"Gaffer","href":"/docs/gaffer","docId":"gaffer"},{"type":"link","label":"Contribute","href":"/docs/contribute","docId":"contribute"}],"collapsed":true,"collapsible":true}]},"docs":{"cache":{"id":"cache","title":"Cache","description":"GoCondor uses Redis for cache and its disabled by default, you can enable it in the file config/cache.go by setting the attribute EnableCache to true, then add Redis connection information to the .env if you are using it. otherwise, you can use an external tool to inject these variables into the environment","sidebar":"docsSidebar"},"context":{"id":"context","title":"Context","description":"The context is an object that provides you with all the functionalities and information you need to handle a request, it contains things like request headers, form\'s post data, uploaded files, database orm, sending emails, ...etc.","sidebar":"docsSidebar"},"contribute":{"id":"contribute","title":"Contribute","description":"The framework consists of two main parts, each lives in a separate repository, the first part is the core which contains the framework core packages. the second part is gocondor which has the project folder structure and is responsible for gluing everything together.","sidebar":"docsSidebar"},"database-config":{"id":"database-config","title":"Database Configuration","description":"GoCondor uses GORM to query the database, all the features of GORM are available for you to use. Supported databases are mysql, postgres and sqlite","sidebar":"docsSidebar"},"database-crud":{"id":"database-crud","title":"CRUD Operations","description":"To perform operations on your database first make sure database is enabled in the config/gorm.go","sidebar":"docsSidebar"},"database-models":{"id":"database-models","title":"Models","description":"Models are located in the directory models","sidebar":"docsSidebar"},"database-relationships":{"id":"database-relationships","title":"Relationships (Associations)","description":"Belongs To","sidebar":"docsSidebar"},"emails":{"id":"emails","title":"Sending Emails","description":"GoCondor supports 3 different drivers for sending emails, SMTP, SparkPost, SendGrid, and MailGun.","sidebar":"docsSidebar"},"environment-variables":{"id":"environment-variables","title":"Environment Variables","description":"Environment variables are values accessible globally within the app","sidebar":"docsSidebar"},"events":{"id":"events","title":"Events","description":"In GoCondor defining events is straight forward, first you need to add the event name as a constant to the file events\\\\event-names.go","sidebar":"docsSidebar"},"gaffer":{"id":"gaffer","title":"Gaffer","description":"Gaffer is GoCondor\'s cli tool, it helps with creating new GoCondor projects and performing other tasks.","sidebar":"docsSidebar"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"First make sure you have GoCondor\'s cli installed.","sidebar":"docsSidebar"},"handlers":{"id":"handlers","title":"Handlers","description":"A Handler is nothing but a function to handle the HTTP requests to the matching route.","sidebar":"docsSidebar"},"hashing":{"id":"hashing","title":"Hashing passowrds","description":"Hashing passowrds in GoCondor can be done by using the object hashing from the context, here is how you can do that:","sidebar":"docsSidebar"},"installation":{"id":"installation","title":"Installation","description":"To create a new GoCondor project you need to install gaffer first which is the cli tool for GoCondor","sidebar":"docsSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"GoCondor is a Golang web framework made for building web APIs, suitable for small to medium size projects and microservices. with its simple structure and developer-friendly experience, it makes developers happily more productive.","sidebar":"docsSidebar"},"jwt":{"id":"jwt","title":"JWT Tokens","description":"JWT tokens are used for authentication, GoCondor provides you with ways to generate JWT tokens, decode them, and check their expiry.","sidebar":"docsSidebar"},"middlewares":{"id":"middlewares","title":"Middlewares","description":"A Middleware is a pieces of functional that gets executed either before handling the request or after.","sidebar":"docsSidebar"},"redirect":{"id":"redirect","title":"Redirect","description":"To redirect to any URL internal or external simply call the context\'s method Redirect, here is how you can do it:"},"request":{"id":"request","title":"Request","description":"All request information like posted data, uploaded files, headers,...etc can be accessed using the context.","sidebar":"docsSidebar"},"response":{"id":"response","title":"Response","description":"Below are the different types of responses you can return to the user","sidebar":"docsSidebar"},"routing":{"id":"routing","title":"Routing","description":"All routes are defined in the file routes.go which is located in the root dir, here is an example for defining a route:","sidebar":"docsSidebar"},"tls":{"id":"tls","title":"TLS","description":"GoCondor gives you the ability to run your app in tls mode (https), you just need to copy your tls certificates my-server-cert.cert and my-server-cert.key to the directory tls at the root directory of the project, next update the tls config in the .env file or inject them to the environment with an external tool","sidebar":"docsSidebar"},"validation":{"id":"validation","title":"Validation","description":"To access the validator call the function GetValidator() in the context object","sidebar":"docsSidebar"}}}')}}]);