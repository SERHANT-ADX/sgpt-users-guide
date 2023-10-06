"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),g=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=g(n),u=r,d=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var g=2;g<i;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var a=n(7462),r=(n(7294),n(3905));const i={},o="Editing images page",s={unversionedId:"Generating images/index",id:"Generating images/index",title:"Editing images page",description:"The Editing the Image Page is designed for enhancing your images or creating ones. It comprises two main sections: the Preview section",source:"@site/docs/Generating images/index.md",sourceDirName:"Generating images",slug:"/Generating images/",permalink:"/sgpt-users-guide/Generating images/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Generating images/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Managing Generated Responses",permalink:"/sgpt-users-guide/Creating content/Managing generated responses"},next:{title:"Filters for generation",permalink:"/sgpt-users-guide/Generating images/FiltersForGenerating"}},l={},g=[{value:"Table of Contents",id:"table-of-contents",level:3}],p={toc:g},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"editing-images-page"},"Editing images page"),(0,r.kt)("p",null,"The Editing the Image Page is designed for enhancing your images or creating ones. It comprises two main sections: the Preview section\nand the Filters section."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Preview Section:"),' This section allows you to select and manage images. You can choose an image by clicking on\nlistings or uploading your own via the "Upload Image" button. Image management buttons enable you to undo, download,\nor upload new images.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Filters Section:")," In this section, you can apply both basic and advanced filters to the selected image. Basic\nfilters offer prebuilt options, while advanced filters allow for customization. You can save presets, generate images,\nand view the generation progress."))),(0,r.kt)("p",null,"Now, let's take a detailed look at these features with the provided table of contents:"),(0,r.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"./UploadingImages"},"Preview Section"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1.1. Choosing an Image"),(0,r.kt)("li",{parentName:"ul"},"1.2. Image Management Buttons"),(0,r.kt)("li",{parentName:"ul"},"1.3 Uploading an image"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/sgpt-users-guide/Generating%20images/FiltersForGenerating"},"Filters for generating"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"2.1. Basic and Advanced Filters"),(0,r.kt)("li",{parentName:"ul"},"2.3. Using Basic Filters"),(0,r.kt)("li",{parentName:"ul"},"2.5. Generating with Advanced Filters"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/sgpt-users-guide/Generating%20images/GeneratingImages"},"Generating Images"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"3.1. Viewing Generated Images"),(0,r.kt)("li",{parentName:"ul"},"3.2. Switching Between Generated Images"),(0,r.kt)("li",{parentName:"ul"},"3.3. Generation Time and Troubleshooting")))))}m.isMDXComponent=!0}}]);