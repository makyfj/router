"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=p(n),m=a,f=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Moving between screens",sidebar_position:3},i=void 0,s={unversionedId:"guides/navigating",id:"guides/navigating",title:"Moving between screens",description:"Ports https://reactnavigation.org/docs/navigating",source:"@site/docs/guides/navigating.md",sourceDirName:"guides",slug:"/guides/navigating",permalink:"/router/docs/guides/navigating",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Moving between screens",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Building a layout",permalink:"/router/docs/guides/"},next:{title:"Passing parameters to the routes",permalink:"/router/docs/guides/params"}},c={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ports ",(0,a.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/navigating"},"https://reactnavigation.org/docs/navigating")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"app/\n\u251c\u2500 (stack).js\n\u251c\u2500 (stack)/\n\u2502  \u251c\u2500 home.js\n\u2502  \u251c\u2500 details.js\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(stack).js",title:"app/(stack).js"},'import { Stack } from "expo-router";\n\nexport default function App() {\n  return <Stack initialRouteName="home" />;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(stack)/home.js",title:"app/(stack)/home.js"},'import { View, Text, Button } from "react-native";\nimport { Link } from "expo-router";\n\nexport default function Home() {\n  return (\n    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>\n      <Text>Home Screen</Text>\n      <Link href="/details">Go to Details</Link>\n    </View>\n  );\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(stack)/details.js",title:"app/(stack)/details.js"},'import { View, Text } from "react-native";\nimport { Link } from "expo-router";\n\nexport default function Details({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>\n      <Text>Details Screen</Text>\n\n      <Link href="/home">Go to Home</Link>\n\n      <Button\n        title="Go to Details... again"\n        onPress={() => navigation.push("details")}\n      />\n      <Button title="Go back" onPress={() => navigation.goBack()} />\n      <Button\n        title="Go back to first screen in stack"\n        onPress={() => navigation.popToTop()}\n      />\n    </View>\n  );\n}\n')))}u.isMDXComponent=!0}}]);