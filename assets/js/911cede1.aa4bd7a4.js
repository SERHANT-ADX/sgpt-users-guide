"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[286],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>d});var i=o(7294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,i,n=function(t,e){if(null==t)return{};var o,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)o=r[i],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)o=r[i],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var s=i.createContext({}),p=function(t){var e=i.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},c=function(t){var e=p(t.components);return i.createElement(s.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},g=i.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(o),g=n,d=u["".concat(s,".").concat(g)]||u[g]||h[g]||r;return o?i.createElement(d,a(a({ref:e},c),{},{components:o})):i.createElement(d,a({ref:e},c))}));function d(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,a=new Array(r);a[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:n,a[1]=l;for(var p=2;p<r;p++)a[p]=o[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}g.displayName="MDXCreateElement"},3379:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=o(7462),n=(o(7294),o(3905));const r={},a="Authorization",l={unversionedId:"Common/Authorization",id:"Common/Authorization",title:"Authorization",description:"This guide will walk you through the process of authorizing and logging in to a corporate web application that uses",source:"@site/docs/Common/Authorization.md",sourceDirName:"Common",slug:"/Common/Authorization",permalink:"/Common/Authorization",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Common/Authorization.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Managing Chats",permalink:"/Chat/Managing Chats"},next:{title:"Handling Errors on the Web Application",permalink:"/Common/Handling errors"}},s={},p=[{value:"1. Accessing the Corporate Web Application",id:"1-accessing-the-corporate-web-application",level:2},{value:"1.1. Navigating to the Login Page",id:"11-navigating-to-the-login-page",level:3},{value:"2. Initiating the Login Process",id:"2-initiating-the-login-process",level:2},{value:"2.1. Clicking the &quot;Authorize&quot; Button",id:"21-clicking-the-authorize-button",level:3},{value:"3. Microsoft Popup Authorization",id:"3-microsoft-popup-authorization",level:2},{value:"3.1. Popup Window Appearance",id:"31-popup-window-appearance",level:3},{value:"3.2. Sign-in with Microsoft Account",id:"32-sign-in-with-microsoft-account",level:3},{value:"3.3. Granting Permissions",id:"33-granting-permissions",level:3},{value:"3.4. Returning to the Web Application",id:"34-returning-to-the-web-application",level:3}],c={toc:p},u="wrapper";function h(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,i.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"authorization"},"Authorization"),(0,n.kt)("p",null,"This guide will walk you through the process of authorizing and logging in to a corporate web application that uses\nMicrosoft Popup Authorization. This method involves initiating the login process in a popup window. Let's get started!"),(0,n.kt)("h2",{id:"1-accessing-the-corporate-web-application"},"1. Accessing the Corporate Web Application"),(0,n.kt)("h3",{id:"11-navigating-to-the-login-page"},"1.1. Navigating to the Login Page"),(0,n.kt)("p",null,"To access the corporate web application and initiate the login process:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open your web browser."),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("inlineCode",{parentName:"li"},"serhant.com")," URL in the address bar."),(0,n.kt)("li",{parentName:"ol"},'Press "Enter" or click "Go" to navigate to the web application\'s login page.')),(0,n.kt)("h2",{id:"2-initiating-the-login-process"},"2. Initiating the Login Process"),(0,n.kt)("h3",{id:"21-clicking-the-authorize-button"},'2.1. Clicking the "Authorize" Button'),(0,n.kt)("p",null,"When you are first time in Serhant GPT, you will be automatically redirected to login page."),(0,n.kt)("p",null,'Upon reaching the web application\'s login page, you will likely encounter a page with a single button labeled "\nAuthorize." This button is the entry point for initiating the login process.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"loginPage",src:o(141).Z,width:"1247",height:"928"})),(0,n.kt)("p",null,"To begin the login process:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Click on the "Authorize" button.')),(0,n.kt)("p",null,"This action will trigger the Microsoft Popup Authorization process."),(0,n.kt)("h2",{id:"3-microsoft-popup-authorization"},"3. Microsoft Popup Authorization"),(0,n.kt)("h3",{id:"31-popup-window-appearance"},"3.1. Popup Window Appearance"),(0,n.kt)("p",null,'After clicking the "Authorize" button, a popup window will appear on your screen. This window is where you will complete\nthe login process using your Serhant Microsoft account credentials.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"popup",src:o(4002).Z,width:"549",height:"691"})),(0,n.kt)("h3",{id:"32-sign-in-with-microsoft-account"},"3.2. Sign-in with Microsoft Account"),(0,n.kt)("p",null,"In the popup window:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You will be prompted to sign in with your Microsoft account credentials."),(0,n.kt)("li",{parentName:"ol"},"Enter your email address and password associated with your Microsoft account."),(0,n.kt)("li",{parentName:"ol"},'Click the "Sign In" button.')),(0,n.kt)("h3",{id:"33-granting-permissions"},"3.3. Granting Permissions"),(0,n.kt)("p",null,"Once you've signed in, you may be asked to grant permissions to the web application. These permissions might include\naccess to your Microsoft account information or other required permissions."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"grantPermissions",src:o(7859).Z,width:"537",height:"686"})),(0,n.kt)("p",null,"Review the permissions request carefully to ensure you are comfortable with them. To grant permissions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Review the permissions request."),(0,n.kt)("li",{parentName:"ol"},'Click the "Accept" or "Allow" button to grant the necessary permissions.')),(0,n.kt)("h3",{id:"34-returning-to-the-web-application"},"3.4. Returning to the Web Application"),(0,n.kt)("p",null,"After granting permissions, you will be redirected back to the Serhant GPT. You should now have access to\nthe application's features and content."),(0,n.kt)("p",null,"You have successfully authorized and logged in to the corporate web application using Microsoft Popup Authorization."))}h.isMDXComponent=!0},7859:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o.p+"assets/images/grantPermissions-09a9b8b9397d09dcf84fcad23a32a2a6.jpg"},141:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o.p+"assets/images/loginPage-2782c737e4dc12be1eafcbe31076b976.jpg"},4002:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o.p+"assets/images/popup-8e7870ef3e6ae17cd293787e79feae66.jpg"}}]);