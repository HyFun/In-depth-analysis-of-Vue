"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[368],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4189:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={id:"Introduction",slug:"/",hide_title:!0},c=void 0,l={unversionedId:"Introduction",id:"Introduction",isDocsHomePage:!1,title:"Introduction",description:"\u672c\u4e66\u5728Vue2.6.8\u6e90\u7801\u57fa\u7840\u4e0a\uff0c\u5faa\u5e8f\u6e10\u8fdb\u7684\u5e26\u9886\u4f60\u8fdb\u5165\u795e\u5947\u7684Vue\u4e16\u754c\u3002",source:"@site/docs/0.Introduction.md",sourceDirName:".",slug:"/",permalink:"/In-depth-analysis-of-Vue/",tags:[],version:"current",lastUpdatedAt:1631875788,formattedLastUpdatedAt:"9/17/2021",sidebarPosition:0,frontMatter:{id:"Introduction",slug:"/",hide_title:!0},sidebar:"tutorialSidebar",next:{title:"\u76ee\u5f55",permalink:"/In-depth-analysis-of-Vue/\u76ee\u5f55"}},p=[{value:"\u5173\u4e8eVue",id:"\u5173\u4e8evue",children:[]},{value:"\u5173\u4e8e\u672c\u4e66",id:"\u5173\u4e8e\u672c\u4e66",children:[]},{value:"\u8d5e\u52a9\u4f5c\u8005",id:"\u8d5e\u52a9\u4f5c\u8005",children:[]}],s={toc:p};function f(e){var t=e.components,u=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6988).Z})),(0,o.kt)("p",null,"\u672c\u4e66\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vuejs/vue/releases/tag/v2.6.8"},"Vue2.6.8"),"\u6e90\u7801\u57fa\u7840\u4e0a\uff0c\u5faa\u5e8f\u6e10\u8fdb\u7684\u5e26\u9886\u4f60\u8fdb\u5165\u795e\u5947\u7684Vue\u4e16\u754c\u3002"),(0,o.kt)("h2",{id:"\u5173\u4e8evue"},"\u5173\u4e8eVue"),(0,o.kt)("p",null,"Vue (\u8bfb\u97f3 /vju\u02d0/\uff0c\u7c7b\u4f3c\u4e8e view) \u662f\u4e00\u5957\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684\u6e10\u8fdb\u5f0f\u6846\u67b6\u3002\u4e0e\u5176\u5b83\u5927\u578b\u6846\u67b6\u4e0d\u540c\u7684\u662f\uff0cVue \u88ab\u8bbe\u8ba1\u4e3a\u53ef\u4ee5\u81ea\u5e95\u5411\u4e0a\u9010\u5c42\u5e94\u7528\u3002Vue \u7684\u6838\u5fc3\u5e93\u53ea\u5173\u6ce8\u89c6\u56fe\u5c42\uff0c\u4e0d\u4ec5\u6613\u4e8e\u4e0a\u624b\uff0c\u8fd8\u4fbf\u4e8e\u4e0e\u7b2c\u4e09\u65b9\u5e93\u6216\u65e2\u6709\u9879\u76ee\u6574\u5408\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u5f53\u4e0e\u73b0\u4ee3\u5316\u7684\u5de5\u5177\u94fe\u4ee5\u53ca\u5404\u79cd\u652f\u6301\u7c7b\u5e93\u7ed3\u5408\u4f7f\u7528\u65f6\uff0cVue \u4e5f\u5b8c\u5168\u80fd\u591f\u4e3a\u590d\u6742\u7684\u5355\u9875\u5e94\u7528\u63d0\u4f9b\u9a71\u52a8\u3002"),(0,o.kt)("h2",{id:"\u5173\u4e8e\u672c\u4e66"},"\u5173\u4e8e\u672c\u4e66"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Ocean1509/In-depth-analysis-of-Vue"},"Github\u5730\u5740")),(0,o.kt)("li",{parentName:"ul"},"\u5173\u4e8e\u4f5c\u8005\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Ocean1509"},"Ocean1509")),(0,o.kt)("li",{parentName:"ul"},"\u672c\u7f51\u7ad9\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Docusaurus")," \u6784\u5efa")),(0,o.kt)("h2",{id:"\u8d5e\u52a9\u4f5c\u8005"},"\u8d5e\u52a9\u4f5c\u8005"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3092).Z}),"\n",(0,o.kt)("img",{src:n(2494).Z})))}f.isMDXComponent=!0},6988:function(e,t,n){t.Z=n.p+"assets/images/vue-897efb30f57eaf2cbd509d1af21f7a21.jpg"},2494:function(e,t,n){t.Z=n.p+"assets/images/alipay-3ba61a8e620b559ab5873a58204eac5b.png"},3092:function(e,t,n){t.Z=n.p+"assets/images/wechat-68d895820a7cb16d7d62cd86d84d2d80.png"}}]);