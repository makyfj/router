"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Configuring the header bar",sidebar_position:5},i=void 0,s={unversionedId:"guides/headers",id:"guides/headers",title:"Configuring the header bar",description:"Ports https://reactnavigation.org/docs/headers",source:"@site/docs/guides/headers.md",sourceDirName:"guides",slug:"/guides/headers",permalink:"/router/docs/guides/headers",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Configuring the header bar",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Passing parameters to the routes",permalink:"/router/docs/guides/params"},next:{title:"Header buttons",permalink:"/router/docs/guides/header-buttons"}},c={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ports ",(0,a.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/headers"},"https://reactnavigation.org/docs/headers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"app/\n\u251c\u2500 (stack).js\n\u251c\u2500 (stack)/\n\u2502  \u251c\u2500 home.js\n\u2502  \u251c\u2500 details.js\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(stack).js",title:"app/(stack).js"},'import { Stack } from "expo-router";\n\nexport default function Layout() {\n  return (\n    <Stack\n      initialRouteName="home"\n      // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens\n      // Prefers using a `<Header />` component.\n      screenOptions={{\n        headerStyle: {\n          backgroundColor: "#f4511e",\n        },\n        headerTintColor: "#fff",\n        headerTitleStyle: {\n          fontWeight: "bold",\n        },\n      }}\n    />\n  );\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(stack)/home.js",title:"app/(stack)/home.js"},'import { Link, Stack } from "expo-router";\nimport { Image, Text, View } from "react-native";\n\nfunction LogoTitle() {\n  return (\n    <Image\n      style={{ width: 50, height: 50 }}\n      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}\n    />\n  );\n}\n\nexport default function Home() {\n  return (\n    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>\n      <Stack.Screen\n        options={{\n          // https://reactnavigation.org/docs/headers#setting-the-header-title\n          title: "My home",\n          // https://reactnavigation.org/docs/headers#adjusting-header-styles\n          headerStyle: { backgroundColor: "#f4511e" },\n          headerTintColor: "#fff",\n          headerTitleStyle: {\n            fontWeight: "bold",\n          },\n          // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component\n          headerTitle: (props) => <LogoTitle {...props} />,\n        }}\n      />\n\n      <Text>Home Screen</Text>\n\n      <Link href={{ screen: "details", params: { name: "Bacon" } }}>\n        Go to Details\n      </Link>\n    </View>\n  );\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(stack)/details.tsx",title:"app/(stack)/details.tsx"},'import { View, Text } from "react-native";\nimport { Stack } from "expo-router";\n\nexport default function Details({ navigation, route }) {\n  return (\n    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>\n      {/* NOTE(EvanBacon): Preferred way to use route to update navigation options. */}\n      <Stack.Screen\n        option={{\n          title: route?.params?.name,\n        }}\n      />\n      <Text\n        onPress={() => {\n          navigation.setParams({ name: "Updated" });\n        }}\n      >\n        Update the title\n      </Text>\n    </View>\n  );\n}\n')))}u.isMDXComponent=!0}}]);