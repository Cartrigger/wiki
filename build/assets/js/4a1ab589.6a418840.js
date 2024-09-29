"use strict";(self.webpackChunkaelysium_wiki=self.webpackChunkaelysium_wiki||[]).push([[188],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),y=o,m=c["".concat(l,".").concat(y)]||c[y]||d[y]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const i={slug:"./",title:"Introduction",sidebar_position:1},a=void 0,s={unversionedId:"rusty-connector/intro",id:"rusty-connector/intro",title:"Introduction",description:"Aelysium Wordmark Image",source:"@site/docs/rusty-connector/intro.md",sourceDirName:"rusty-connector",slug:"/rusty-connector/",permalink:"/rusty-connector/",draft:!1,editUrl:"https://github.com/Aelysium-Group/wiki/docs/rusty-connector/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"./",title:"Introduction",sidebar_position:1},sidebar:"plugins_wiki_rusty_connector",next:{title:"\ud83d\udcd6 Installation",permalink:"/rusty-connector/docs/installation"}},l={},u=[{value:"Need Support?",id:"need-support",level:2},{value:"Want to request a feature?",id:"want-to-request-a-feature",level:2},{value:"\u201cAre you open to being sponsored?\u201d",id:"are-you-open-to-being-sponsored",level:2},{value:"&quot;RustyConnector is making my players lag!&quot;",id:"rustyconnector-is-making-my-players-lag",level:2},{value:"&quot;Do you have plans to support other servers like Bungeecord, Spigot, or Sponge?&quot;",id:"do-you-have-plans-to-support-other-servers-like-bungeecord-spigot-or-sponge",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Aelysium-Group/.github/blob/main/images/rustyconnector-wordmark.png?raw=true",alt:"Aelysium Wordmark Image"})),(0,o.kt)("h1",{id:"wiki"},"Wiki"),(0,o.kt)("p",null,"Meet RustyConnector! The premier Velocity player and server manager!\nRustyConnector operates via Redis messaging to communicate with sub-servers. Once you've configured your server groups, called ",(0,o.kt)("em",{parentName:"p"},"families"),", all you have to do is set up your sub-servers and they'll auto-register to your proxy whenever they're ready! You'll never have to touch your ",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.toml")," again when adding new servers to your network!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2705 Built for large networks"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Register brand new servers to the proxy during runtime"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Blazing fast data transmission with Redis integration"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Create pre-defined whitelist configs and activate them dynamically"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Register similar servers into families with family-level whitelists and load balancing"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Automatically unregister frozen servers from the proxy"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Set soft and hard player limits for servers"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Whitelist players based on permission, Username, UUID, or IP Address"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Allow players to /tpa between servers"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Works with LuckPerms-Velocity"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Works with Kubernetes"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Create network-wide whitelists")),(0,o.kt)("h2",{id:"need-support"},"Need Support?"),(0,o.kt)("p",null,"If you run into an issue or need help setting up RC, join our ",(0,o.kt)("a",{parentName:"p",href:"http://join.aelysium.group/"},"Discord server")," and get support!\nIf you have a bug to report, feel free to open an issue in our Discord! If your bug report falls under a support issue and not an actual bug it will be closed immediately."),(0,o.kt)("h2",{id:"want-to-request-a-feature"},"Want to request a feature?"),(0,o.kt)("p",null,"We accept feature requests from paying Discord members!\nJoin our ",(0,o.kt)("a",{parentName:"p",href:"http://join.aelysium.group/"},"Discord server")," and let us know what features you\u2019d like to see!"),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"are-you-open-to-being-sponsored"},"\u201cAre you open to being sponsored?\u201d"),(0,o.kt)("p",null,"Yes! If you\u2019re interested in sponsoring me please get in touch via ",(0,o.kt)("a",{parentName:"p",href:"https://join.aelysium.group"},"Discord"),"!\nI\u2019ve spent lots of time working on the programs I\u2019ve written and being able to be paid for the time I\u2019ve spent would be wonderful.\nThat said, I am my own developer and I have no intentions of changing my policies and way of doing things simply because someone wants me to."),(0,o.kt)("h2",{id:"rustyconnector-is-making-my-players-lag"},'"RustyConnector is making my players lag!"'),(0,o.kt)("p",null,"Unless your Velocity server is maxing out on RAM, this is not physically possible. RustyConnector doesn't actually deal with player connections. All it does is tell Velocity where to connect players. Velocity handles all of the connection details itself.\nIf your network is lagging, check to make sure that your Velocity server isn't overloaded! It might be time to scale horizontally!"),(0,o.kt)("h2",{id:"do-you-have-plans-to-support-other-servers-like-bungeecord-spigot-or-sponge"},'"Do you have plans to support other servers like Bungeecord, Spigot, or Sponge?"'),(0,o.kt)("p",null,"If there is enough interest in supporting a different server type, I'll certainly look into making it happen!\nRegarding Spigot and Bungeecord. Frankly, they are older server software that are slowly being replaced by Velocity and Paper. As such, I'm not entirely interested in supporting them. However, just because of principle I may go and provide support for Spigot. We'll see what people want :)"))}d.isMDXComponent=!0}}]);