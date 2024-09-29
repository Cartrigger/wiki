import{_ as a,c as i,a1 as t,o as n}from"./chunks/framework.C7abYapc.js";const p=JSON.parse('{"title":"🏆 Matchmaker API","description":"","frontmatter":{"title":"🏆 Matchmaker API"},"headers":[],"relativePath":"rusty-connector/toolkit/ranked-families.md","filePath":"rusty-connector/toolkit/ranked-families.md"}'),s={name:"rusty-connector/toolkit/ranked-families.md"};function o(r,e,l,d,h,c){return n(),i("div",null,e[0]||(e[0]=[t(`<p>Ranked Families are a specific type of Family in RustyConnector which allow for matchmaking a player ranks. Ranked Families <strong>require</strong> Toolkit implementation in order for them to work. Let&#39;s look into how you can create a fully functioning Ranked Family!</p><h2 id="building-your-game" tabindex="-1">Building Your Game <a class="header-anchor" href="#building-your-game" aria-label="Permalink to &quot;Building Your Game&quot;">​</a></h2><p>First things first, you have to create your game. RustyConnector Toolkit provides some basic functionalities that let you say who is a winner and who is a loser of a game. But your plugin/system is solely responsible for actually handling the ranking logic.</p><h2 id="lifecycle" tabindex="-1">Lifecycle <a class="header-anchor" href="#lifecycle" aria-label="Permalink to &quot;Lifecycle&quot;">​</a></h2><p>Toolkit MCLoader provides a couple <a href="./events.html">Events</a> which you can plug into for game lifecycle: <code>RankedGameStartEvent</code> and <code>RankedGameEndEvent</code>.</p><ul><li><code>RankedGameStartEvent</code> | Fires when a new session of players have loaded onto the MCLoader and are ready to start their game session.</li><li><code>RankedGameEndEvent</code> | Fires when a currently active game session on this MCLoader has finished.</li></ul><p>For information on how you can listen for Events, you can check out the <a href="./events.html">Events</a> documentation.</p><h3 id="game-starting" tabindex="-1">Game Starting <a class="header-anchor" href="#game-starting" aria-label="Permalink to &quot;Game Starting&quot;">​</a></h3><p><code>RankedGameStartEvent</code> is considered the starting point for a Ranked Game on an MCLoader. To start a new round of your gamemode, you should start by listening for this event.</p><h3 id="game-ending" tabindex="-1">Game Ending <a class="header-anchor" href="#game-ending" aria-label="Permalink to &quot;Game Ending&quot;">​</a></h3><p>Ending a Ranked Game is as easy as calling <code>.end()</code> on the MCLoader that is housing the Ranked Game. Specifically you use <code>IRankedGameInterfaceService.end()</code>, and pass the UUIDs of all the players that are considered winners. Once this method has been run, <code>RankedGameEndEvent</code> will fire, and the players that were part of this Ranked Game session will be returned to their parent Family.</p><p><code>IRankedGameInterfaceService</code> can be accessed using the Flame services system:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    RustyConnector.Toolkit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mcLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(flame </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        IRankedGameInterfaceService service </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flame.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rankedGameInterface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">orElseThrow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span></code></pre></div><p>It&#39;s worth noting that <code>.rankedGameInterface()</code> returns an <code>Optional</code>. This is because an MCLoader&#39;s Ranked Game Interface will only activate if that MCLoader is registered into a Ranked Family. If the MCLoader is loaded into something like a Scalar Family, the Ranked Game Interface won&#39;t be activated.</p>`,14)]))}const m=a(s,[["render",o]]);export{p as __pageData,m as default};
