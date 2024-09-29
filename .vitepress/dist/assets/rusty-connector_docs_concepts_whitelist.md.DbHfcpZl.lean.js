import{_ as i,c as t,a1 as l,o}from"./chunks/framework.C7abYapc.js";const y=JSON.parse('{"title":"👮 Whitelist","description":"","frontmatter":{"title":"👮 Whitelist","sidebar_position":3},"headers":[],"relativePath":"rusty-connector/docs/concepts/whitelist.md","filePath":"rusty-connector/docs/concepts/whitelist.md"}'),s={name:"rusty-connector/docs/concepts/whitelist.md"};function a(c,e,d,r,h,n){return o(),t("div",null,e[0]||(e[0]=[l('<p>RustyConnector allows you to set whitelists for both your entire network and specific families!</p><p>With RustyConnector whitelists, you can create as many pre-defined whitelists as you like. Switching between these whitelists is as easy as changing the name of the whitelist in your configs.</p><h1 id="network-wide-whitelists" tabindex="-1">Network Wide Whitelists <a class="header-anchor" href="#network-wide-whitelists" aria-label="Permalink to &quot;Network Wide Whitelists&quot;">​</a></h1><ul><li>In config.yml on RC-Velocity, go to the <code>whitelist</code> section.</li><li>Set <code>enabled</code> to <code>true</code></li><li>Change the whitelist <code>name</code> to whatever you&#39;d like (For this example, we&#39;ll call it <code>dev-whitelist</code>)</li><li>Restart your Velocity server</li><li>RC-Velocity will create a new file called <code>dev-whitelist.yml</code> inside of your <code>whitelists</code> folder. This file is loaded with the whitelist.yml template.</li><li>Open <code>dev-whitelist.yml</code></li><li>Configure <code>dev-whitelist.yml</code> however you&#39;d like.</li><li>Restart RC-Velocity</li></ul><h1 id="family-wide-whitelists" tabindex="-1">Family Wide Whitelists <a class="header-anchor" href="#family-wide-whitelists" aria-label="Permalink to &quot;Family Wide Whitelists&quot;">​</a></h1><ul><li>In the <code>families</code> folder. Open any particular family.yml</li><li>Go to the <code>whitelist</code> section of your family.yml</li><li>Set <code>enabled</code> to <code>true</code></li><li>Change the whitelist <code>name</code> to whatever you&#39;d like (For this example, we&#39;ll call it <code>dev-family-whitelist</code>)</li><li>Restart your Velocity server</li><li>RC-Velocity will create a new file called <code>dev-family-whitelist.yml</code> inside of your <code>whitelists</code> folder. This file is loaded with the whitelist.yml template.</li><li>Open <code>dev-family-whitelist.yml</code></li><li>Configure <code>dev-family-whitelist.yml</code> however you&#39;d like.</li><li>Restart RC-Velocity</li></ul><h1 id="server-specific-whitelists" tabindex="-1">Server-Specific Whitelists <a class="header-anchor" href="#server-specific-whitelists" aria-label="Permalink to &quot;Server-Specific Whitelists&quot;">​</a></h1><p>RustyConnector doesn&#39;t have a custom implementation for Loader-specific whitelists. Instead, use your MCLoader&#39;s built-in whitelist system via the <code>/whitelist</code> command.</p>',8)]))}const m=i(s,[["render",a]]);export{y as __pageData,m as default};
