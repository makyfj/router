"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),g=a,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Nesting navigators",sidebar_position:7},s=void 0,i={unversionedId:"guides/nesting-navigators",id:"guides/nesting-navigators",title:"Nesting navigators",description:"Ports https://reactnavigation.org/docs/nesting-navigators",source:"@site/docs/guides/nesting-navigators.md",sourceDirName:"guides",slug:"/guides/nesting-navigators",permalink:"/router/docs/guides/nesting-navigators",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Nesting navigators",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Header buttons",permalink:"/router/docs/guides/header-buttons"},next:{title:"Migration",permalink:"/router/docs/category/migration"}},p={},l=[{value:"Notes",id:"notes",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ports ",(0,a.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/nesting-navigators"},"https://reactnavigation.org/docs/nesting-navigators")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"app/\n\u251c\u2500 (stack).js\n\u251c\u2500 (stack)/\n\u2502  \u251c\u2500 home.js\n\u2502  \u251c\u2500 home/\n\u2502    \u251c\u2500 feed.js # Matches /home/feed\n\u2502    \u251c\u2500 messages.js # Matches /home/messages\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(stack).js",title:"app/(stack).js"},'import { Stack } from "expo-router";\n\nexport default Stack;\n')),(0,a.kt)("p",null,"This is nested in the ",(0,a.kt)("inlineCode",{parentName:"p"},"(stack).js")," layout, so it will be rendered as a stack."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(stack)/home.js",title:"app/(stack)/home.js"},'import { Tabs } from "expo-router";\n\nexport default function Home() {\n  return <Tabs />;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(stack)/profile.js",title:"app/(stack)/profile.js"},'import { Link } from "expo-router";\n\nexport default function Feed() {\n  return <Link href="/home/messages">Navigate to nested route</Link>;\n}\n')),(0,a.kt)("p",null,"This is nested in the ",(0,a.kt)("inlineCode",{parentName:"p"},"(stack)/home.js")," layout, so it will be rendered as a tab."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(stack)/home/feed.js",title:"app/(stack)/home/feed.js"},'import { View } from "react-native";\n\nexport default function Feed() {\n  return <View />;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(stack)/home/messages.js",title:"app/(stack)/home/messages.js"},'import { View } from "react-native";\n\nexport default function Messages() {\n  return <View />;\n}\n')),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigation UI elements (Link, Tabs, Stack) may move out of the router package.")))}u.isMDXComponent=!0}}]);