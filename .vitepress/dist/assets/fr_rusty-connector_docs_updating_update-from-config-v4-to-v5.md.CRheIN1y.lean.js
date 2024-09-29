import{_ as t,c as a,a1 as o,o as n}from"./chunks/framework.C7abYapc.js";const p=JSON.parse('{"title":"ℹ️ Updating from v4 to V5","description":"","frontmatter":{"title":"ℹ️ Updating from v4 to V5","sidebar_position":5},"headers":[],"relativePath":"fr/rusty-connector/docs/updating/update-from-config-v4-to-v5.md","filePath":"fr/rusty-connector/docs/updating/update-from-config-v4-to-v5.md"}'),i={name:"fr/rusty-connector/docs/updating/update-from-config-v4-to-v5.md"};function r(s,e,l,d,c,h){return n(),a("div",null,e[0]||(e[0]=[o('<p>On this page, we will walk you through how to update your config from v4 to v5! <strong>Before updating to v5, make sure you have a working MariaDB system!</strong> Any existing data alreaddy stored on your MySQL database will be lost (Beta software lulz) unless you manually port it to the new format.</p><h2 id="disclaimer" tabindex="-1">Disclaimer <a class="header-anchor" href="#disclaimer" aria-label="Permalink to &quot;Disclaimer&quot;">​</a></h2><p>It can be a hassle going through and updating config files. If you&#39;d rather just configure a fresh installation of the configs instead of attempting to update your already existing ones. You can simply delete your config files and RC will generate new ones on the next boot.</p><h2 id="unchanging" tabindex="-1">Unchanging <a class="header-anchor" href="#unchanging" aria-label="Permalink to &quot;Unchanging&quot;">​</a></h2><h2 id="walkthrough" tabindex="-1">Walkthrough <a class="header-anchor" href="#walkthrough" aria-label="Permalink to &quot;Walkthrough&quot;">​</a></h2><h3 id="_1-update-config-version" tabindex="-1">1. Update config version <a class="header-anchor" href="#_1-update-config-version" aria-label="Permalink to &quot;1. Update config version&quot;">​</a></h3><p>In order for RC to load all of it&#39;s new configs, update your config.yml version to <code>version: 5</code> immediately.</p><h3 id="_2-delete-private-key" tabindex="-1">2. Delete <code>private.key</code> <a class="header-anchor" href="#_2-delete-private-key" aria-label="Permalink to &quot;2. Delete `private.key`&quot;">​</a></h3><p>RustyConnector v0.8.0 implements a new AES-256 encryption system. You&#39;ll need a new <code>private.key</code> to use it. Delete your current <code>private.key</code> and let RC generate a new one. Then copy the new <code>private.key</code> to all your sub-servers.</p><h3 id="_3-port-redis-and-mysql-settings" tabindex="-1">3. Port Redis and MySQL settings <a class="header-anchor" href="#_3-port-redis-and-mysql-settings" aria-label="Permalink to &quot;3. Port Redis and MySQL settings&quot;">​</a></h3><p>Remove the entire Redis section from your <code>config.yml</code>, when you next start RustyConnector, it should generate a new <code>connectors.yml</code> config. You&#39;ll want to enter your Redis and MariaDB credentials into this config.</p><h3 id="_4-add-secure-transit-toggle" tabindex="-1">4. Add secure transit toggle <a class="header-anchor" href="#_4-add-secure-transit-toggle" aria-label="Permalink to &quot;4. Add secure transit toggle&quot;">​</a></h3><p>Add the following toggle to your <code>data_transit.yml</code></p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should Data Transit operate via an AES SecureTransit protocol?</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">secure-transit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><h3 id="_5-remove-disparate-mysql-nodes" tabindex="-1">5. Remove disparate mysql nodes <a class="header-anchor" href="#_5-remove-disparate-mysql-nodes" aria-label="Permalink to &quot;5. Remove disparate mysql nodes&quot;">​</a></h3><p>In <code>families.yml</code> delete the entire MySQL set of nodes. In <code>friends.yml</code> delete the entire MySQL set of nodes.</p><h3 id="_6-update-logger-yml" tabindex="-1">6. Update <code>logger.yml</code> <a class="header-anchor" href="#_6-update-logger-yml" aria-label="Permalink to &quot;6. Update `logger.yml`&quot;">​</a></h3><p>In <code>logger.yml</code> remove the entire <code>console-icons</code> section. Console icons are now a part of the language system that RC uses. If you&#39;d like to edit them feel free to download the Lang folder from the <code>core</code> plugin module on the (RustyConnector GitHub](<a href="https://github.com/Aelysium-Group/rusty-connector" target="_blank" rel="noreferrer">https://github.com/Aelysium-Group/rusty-connector</a>) and edit it there.</p><h3 id="_7-update-whitelist-yml" tabindex="-1">7. Update <code>whitelist.yml</code> <a class="header-anchor" href="#_7-update-whitelist-yml" aria-label="Permalink to &quot;7. Update `whitelist.yml`&quot;">​</a></h3><p>If you have any whitelist configs, delete the entire <code>countries</code> section from them. This feature will not be added in the forseeable future.</p>',20)]))}const g=t(i,[["render",r]]);export{p as __pageData,g as default};
