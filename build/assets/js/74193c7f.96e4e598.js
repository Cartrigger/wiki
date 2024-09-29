"use strict";(self.webpackChunkaelysium_wiki=self.webpackChunkaelysium_wiki||[]).push([[873],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,y=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(4137));const o={title:"\ud83c\udf28\ufe0f Ranked Family",sidebar_position:3},i=void 0,l={unversionedId:"rusty-connector/docs/concepts/families/ranked",id:"rusty-connector/docs/concepts/families/ranked",title:"\ud83c\udf28\ufe0f Ranked Family",description:"Ranked Families require you use the Toolkit API in order to operate.",source:"@site/docs/rusty-connector/docs/concepts/families/ranked.mdx",sourceDirName:"rusty-connector/docs/concepts/families",slug:"/rusty-connector/docs/concepts/families/ranked",permalink:"/rusty-connector/docs/concepts/families/ranked",draft:!1,editUrl:"https://github.com/Aelysium-Group/wiki/docs/rusty-connector/docs/concepts/families/ranked.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\ud83c\udf28\ufe0f Ranked Family",sidebar_position:3},sidebar:"plugins_wiki_rusty_connector",previous:{title:"\ud83c\udf29\ufe0f Static Family",permalink:"/rusty-connector/docs/concepts/families/static"},next:{title:"\ud83d\udc6e Whitelist",permalink:"/rusty-connector/docs/concepts/whitelist"}},s={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Defining a name for the game",id:"defining-a-name-for-the-game",level:2},{value:"Joining Matchmaking",id:"joining-matchmaking",level:2},{value:"Parent Family",id:"parent-family",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=d("ToolkitTag"),m=d("MCLoaderTag"),p=d("Menu"),y=d("MenuItem"),f={toc:c},h="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Ranked Families require you use the ",(0,r.kt)(u,{mdxType:"ToolkitTag"},"Toolkit API")," in order to operate.\nThis will require that you understand how to program in Java and are able to write your own plugins!")),(0,r.kt)("p",null,"Ranked Families are a ",(0,r.kt)(u,{mdxType:"ToolkitTag"},"Toolkit")," powered section of RustyConnector.\nIn order to leverage them, you must write a custom Toolkit leveraged RC Module."),(0,r.kt)("p",null,"Ranked Families are built to work best with stateless ",(0,r.kt)(m,{mdxType:"MCLoaderTag"},"Minecraft Loaders"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What is a Stateless Minecraft Loader?"),(0,r.kt)("p",null,"A stateless ",(0,r.kt)(m,{mdxType:"MCLoaderTag"},"Minecraft Loader")," is a Loader which doesn't store it's own state.",(0,r.kt)("br",null),(0,r.kt)("br",null),"For example, if a player joins a Loader and places a block. That action will be forgotten next time the Loader restarts. Ideally, stateless Loaders wouldn't actually allow players to do anything that would attempt alter state (For example, by using ",(0,r.kt)("a",{href:"https://enginehub.org/worldguard"},"WorldGuard")," to prevent players from placing blocks).",(0,r.kt)("br",null),(0,r.kt)("br",null),"Examples of stateless Loaders would be Lobby, KitPVP, or Bedwars.",(0,r.kt)("br",null),(0,r.kt)("br",null),"The inverse of a stateless Loader is a stateful Loader; such as a Survival Loader, or Plots Loader.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Ranked Families can be configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"families")," folder. They are represented by a configuration file containing the family's name followed by the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},".ranked.yml"),".\nA major part of a Ranked Family is it's Matchmaker. When a Ranked Family is first created, a coresponding Matchmaker will be created in the ",(0,r.kt)("inlineCode",{parentName:"p"},"matchmakers")," folder.\nThe details for a matchmaker can be defined here."),(0,r.kt)("h2",{id:"defining-a-name-for-the-game"},"Defining a name for the game"),(0,r.kt)("p",null,'Every "game-id" in RustyConnector has it\'s own dedicated ranking records for players.\nIf you want multiple Ranked Families to use and update these Ranking records, you can set them to all have the same "game-id"'),(0,r.kt)("h2",{id:"joining-matchmaking"},"Joining Matchmaking"),(0,r.kt)("p",null,"The MCLoaders inside of your Ranked Family are the game Loaders themselves.\nIn order to queue up for matchmaking, all players have to do is attempt to connect to the Ranked Family like normal.\nWhether that's using a Family Anchor, or via a custom RC Module."),(0,r.kt)("p",null,"Players will then remain in their current family until they've successfully been Matchmade into a session and that session finds an open server to join."),(0,r.kt)("h3",{id:"parent-family"},"Parent Family"),(0,r.kt)("p",null,"Parenting allows you to establish hierarchies between your families."),(0,r.kt)("p",null,"When you setup family parents, players will be connected to a family's parent if they are kicked or disconnected from their current family.\nIf a parent family isn't established, the player will be connected to the root family."),(0,r.kt)("p",null,"If you setup the hub feature in Dynamic Teleport, it will also direct a player to the parent family of the one they're connected to. "),(0,r.kt)(p,{mdxType:"Menu"},(0,r.kt)(y,{href:"concepts/whitelist",title:"\ud83c\udfc6 Matchmaker API",description:"Read up on how to use the Toolkit Matchmaker API.",mdxType:"MenuItem"}),(0,r.kt)(y,{href:"concepts/load_balancing",title:"\u2935\ufe0f Load Balancing",description:"Read up more on Load Balancing in RC.",mdxType:"MenuItem"}),(0,r.kt)(y,{href:"concepts/whitelist",title:"\ud83d\udc6e Whitelist",description:"Read up more on Whitelists in RC.",mdxType:"MenuItem"})))}k.isMDXComponent=!0}}]);