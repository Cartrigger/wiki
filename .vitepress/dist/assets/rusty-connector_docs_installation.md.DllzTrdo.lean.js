import{_ as d,c as u,j as o,a as t,G as s,w as a,a1 as c,B as r,o as y}from"./chunks/framework.C7abYapc.js";const C=JSON.parse(`{"title":"📖 Installation","description":"Ready to switch? Let's go!","frontmatter":{"title":"📖 Installation","description":"Ready to switch? Let's go!","sidebar_position":1,"displayed_sidebar":"plugins_wiki_rusty_connector"},"headers":[],"relativePath":"rusty-connector/docs/installation.md","filePath":"rusty-connector/docs/installation.md"}`),h={name:"rusty-connector/docs/installation.md"},p={class:"danger custom-block"};function f(m,e,w,g,b,v){const i=r("TabItem"),n=r("Tabs"),l=r("TheLawTag");return y(),u("div",null,[e[12]||(e[12]=o("p",null,"import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';",-1)),e[13]||(e[13]=o("p",null,"So you'd like to switch to RustyConnector? Here's a crash course on how to get started!",-1)),e[14]||(e[14]=o("p",null,"First thing first, let's understand how the plug-in works.",-1)),e[15]||(e[15]=o("h2",{id:"how-it-works",tabindex:"-1"},[t("How it works "),o("a",{class:"header-anchor",href:"#how-it-works","aria-label":'Permalink to "How it works"'},"​")],-1)),e[16]||(e[16]=o("p",null,"Creating a RustyConnector network involves setting up RC on your Proxy server as well as on your individual MCLoaders.",-1)),o("details",null,[e[2]||(e[2]=o("summary",null,"Did you catch that?",-1)),e[3]||(e[3]=t(" RustyConnector supports a whole slew of different sources! Expand the tabs below to get an idea of how we refer to things in these docs. ")),s(n,null,{default:a(()=>[s(i,{value:"proxy",label:"Proxy"},{default:a(()=>e[0]||(e[0]=[t(` While reading the RustyConnector docs, you'll see us refer to "Proxy" a lot. "Proxy" always refers to the copy of RustyConnector running on Velocity. In fact sometimes we might just say "Velocity". `),o("br",null,null,-1),t(' When we refer to "Velocity" or "Proxy" we are referring RustyConnector, not necessarily the proxy itself. If we are referring to the Velocity proxy itself we will specifically refer to it as "Velocity Server". ')])),_:1}),s(i,{value:"mcloader",label:"MCLoader"},{default:a(()=>e[1]||(e[1]=[t(' RustyConnector supports loads of different Minecraft loaders like Paper, Folia, Purpur, Pufferfish, and Fabric. These softwares are referred to as "MCLoader" or just "Loader" (Always a capital '),o("code",null,"L",-1),t('). "MCLoader" refers to the copy of RC that runs on a loader like Paper, Folia, or Fabric. '),o("br",null,null,-1),t(' When we refer to "MCLoader" we are referring RustyConnector, not necessarily the minecraft loader itself. ')])),_:1})]),_:1}),e[4]||(e[4]=o("p",null,`:::caution You'll just about never see the word "server" used in the RustyConnector docs. This is because using "server" is too ambiguous, are you referring to the proxy? An MCLoader? The physical machine running one of your MCLoaders?`,-1)),e[5]||(e[5]=o("p",null,`Because of the ambiguity, don't use "server" when working with RustyConnector. :::`,-1))]),e[17]||(e[17]=c('<div class="info custom-block"><p class="custom-block-title">INFO</p><p>You must have working Redis and MariaDB databases for RustyConnector to operate!</p></div><p>All RustyConnector communication happens over Redis. Velocity is the main powerhouse of your RustyConnector Network. On boot, Velocity will load your configs and begin listening for MCLoaders over Redis. Anytime an MCLoader server boots it will automatically attempt to establish a Magic Link connection with the Proxy. If the connection is successful, the MCLoader will be registered into one of the predefined server families.</p><p>If an MCLoader shuts down or crashes, it&#39;s Magic Link with the Proxy will be broken and the MCLoader will be removed from the Proxy&#39;s pool of available Loaders.</p><p>There are more details involved however this is the basis of how this system works. If you have ten MCLoaders, they can all start and stop at any time and their Magic Links with the Proxy will be gracefully handled accordingly.</p><h2 id="pre-requisites" tabindex="-1">Pre-Requisites <a class="header-anchor" href="#pre-requisites" aria-label="Permalink to &quot;Pre-Requisites&quot;">​</a></h2><p>RustyConnector completely replaces the <code>[servers]</code> part of your <code>velocity.toml</code> configuration file. As such, once your RC network is built and ready to go, you won&#39;t have to open this config anymore to manage your servers. That said, the Velocity Server itself <strong>REQUIRES</strong> that you have at least one server defined in it. Feel free to just set this to a loopback address like <code>127.0.0.1:0</code>.</p><p>Additionally you&#39;ll have to have both a Redis and MariaDB database ready to go in order to use RustyConnector.</p><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><h3 id="setting-up-the-proxy" tabindex="-1">Setting up the Proxy <a class="header-anchor" href="#setting-up-the-proxy" aria-label="Permalink to &quot;Setting up the Proxy&quot;">​</a></h3><ol><li>Load the latest version of RustyConnector into your Velocity Server.</li><li>Start your Velocity Server.</li></ol><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This will cause RustyConnector to load some initial config files for you to mess with. Notice how there&#39;s a file called <code>private.key</code>? This key is used to encrypt and decrypt packets transported over Redis. When you set up your MCLoaders you&#39;ll want to copy this file over to them.</p></div><ol start="3"><li>Open <code>families.yml</code> and set up your RC families. :::note You can read more about Families <a href="./concepts/families/">here</a>. Make sure you edit <code>root-family.name</code> to match whichever family should be your default. :::</li><li>In <code>connectors.yml</code> enter your Redis and MariaDB information.</li></ol><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Redis requires that you set a username, however you aren&#39;t required to set a password.</p></div><ol start="5"><li>Restart your velocity server. :::note RustyConnector will process your information and create family configs in the <code>families</code> folder. Be sure to take a look at these configs and make changes to them as you see fit. ::: At this point, we are now ready to set up our first MCLoader!</li></ol><h3 id="setting-up-an-mcloader" tabindex="-1">Setting up an MCLoader <a class="header-anchor" href="#setting-up-an-mcloader" aria-label="Permalink to &quot;Setting up an MCLoader&quot;">​</a></h3><p>Load RustyConnector onto your MCLoader of choice. Make sure that RustyConnector has support for it.</p><p>Ensure that the version of RustyConnector running on your MCLoader is always the same as the version running on your Velocity Server.</p><ol><li>Start your MCLoader so that RustyConnector can generate configs for you.</li><li>Copy the <code>private.key</code> file from your proxy and paste it into your MCLoader.</li><li>Open the <code>config.yml</code></li><li>Set <code>name</code> to be whatever you&#39;d like.</li></ol><div class="info custom-block"><p class="custom-block-title">INFO</p><p>It&#39;s usually best to make the name something that somewhat describes the server. For example <code>survival-1</code>. The names you list in your MCLoaders must always be unique, do not set duplicate names.</p></div><ol start="5"><li>Set <code>address</code>.</li></ol><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Address can be set to the same thing that you would normally paste into th <code>velocity.toml</code> (for example: <code>127.0.0.1:25565</code>). The address should represent what players would connect to if they wanted to join this MCLoader. Make sure that if the address of this MCLoader changes you also change it here!</p></div><ol start="6"><li>Set <code>family</code>.</li></ol><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Family should be set so that it matches the name of one of the families you listed on the Proxy in <code>families.yml</code>. If the family doesn&#39;t exist, the MCLoader will fail to register to the Proxy.</p></div><ol start="7"><li>Set your player caps to a level that you are happy with.</li><li>In <code>connectors.yml</code> enter your Redis information. Make sure it&#39;s the same as the information used on the PRoxy.</li><li>Restart your MCLoader.</li></ol><p>Everything should be working now! Once the MCLoader is able to establish a Magic Link with the Proxy, you should see a green confirmation message in the console.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>It&#39;s important to take note that RustyConnector is specifically written in a top-down way. MCLoaders never actually know if the Proxy exists and is ready to establish a Magic Link. The MCLoaders can only attempt to establish a Magic Link and wait for a response from the Proxy.</p></div>',26)),o("div",p,[e[11]||(e[11]=o("p",{class:"custom-block-title"},"Lets be clear",-1)),o("p",null,[e[7]||(e[7]=t("Once you setup RustyConnector, you are now a ")),e[8]||(e[8]=o("strong",null,"RustyConnector Network",-1)),e[9]||(e[9]=t(" and you need to follow ")),s(l,null,{default:a(()=>e[6]||(e[6]=[t("The Law")])),_:1}),e[10]||(e[10]=t("."))])])])}const L=d(h,[["render",f]]);export{C as __pageData,L as default};
