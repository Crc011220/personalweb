"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[4256],{4608:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>n,data:()=>o});var i=a(641);const r={},n=(0,a(6262).A)(r,[["render",function(e,t){return(0,i.uX)(),(0,i.CE)("div",null,t[0]||(t[0]=[(0,i.Fv)('<h1 id="docker-volume" tabindex="-1"><a class="header-anchor" href="#docker-volume"><span>Docker Volume</span></a></h1><h3 id="the-runtime-environment-of-the-container-provider-should-be-decoupled-from-the-data-generated-by-the-program-and-the-configurations-the-program-depends-on-a-volume-is-a-virtual-directory-that-acts-as-a-bridge-between-the-container-s-internal-directory-and-the-host-s-directory" tabindex="-1"><a class="header-anchor" href="#the-runtime-environment-of-the-container-provider-should-be-decoupled-from-the-data-generated-by-the-program-and-the-configurations-the-program-depends-on-a-volume-is-a-virtual-directory-that-acts-as-a-bridge-between-the-container-s-internal-directory-and-the-host-s-directory"><span>The runtime environment of the container provider should be decoupled from the data generated by the program and the configurations the program depends on. A volume is a virtual directory that acts as a bridge between the container&#39;s internal directory and the host&#39;s directory.</span></a></h3><h2 id="data-mount-directory" tabindex="-1"><a class="header-anchor" href="#data-mount-directory"><span>Data Mount Directory</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/var/lib/docker/volumes/</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 80:80</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> html:/usr/share/nginx/html</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> html:/usr/share/nginx/html</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mounts</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> host&#39;s html directory to the container&#39;s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/share/nginx/html</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> directory.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mount-local-directory" tabindex="-1"><a class="header-anchor" href="#mount-local-directory"><span>Mount Local Directory</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 80:80</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /Users/crc/Documents/IT-Study/Project/my-docs/src/posts/docker/html:/usr/share/nginx/html</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="mount-local-directory-1" tabindex="-1"><a class="header-anchor" href="#mount-local-directory-1"><span>Mount local directory</span></a></h3><p>-v local_directory:container_directory</p><h3 id="mount-local-file" tabindex="-1"><a class="header-anchor" href="#mount-local-file"><span>Mount local file</span></a></h3><p>-v local_file:container_file Note: The local directory or file must start with / or ./; if it starts directly with a name, it will be recognized as a volume name rather than a local directory name.</p><h2 id="command" tabindex="-1"><a class="header-anchor" href="#command"><span>Command</span></a></h2><table><thead><tr><th>Description</th><th>Command</th></tr></thead><tbody><tr><td>Create a volume</td><td>docker volume create</td></tr><tr><td>List all volumes</td><td>docker volume ls</td></tr><tr><td>Remove a specific volume</td><td>docker volume rm</td></tr><tr><td>Inspect a specific volume</td><td>docker volume inspect</td></tr><tr><td>Remove all unused volumes</td><td>docker volume prune</td></tr></tbody></table><h2 id="notice" tabindex="-1"><a class="header-anchor" href="#notice"><span>Notice!</span></a></h2><p>The mounting of containers and data volumes must be configured when creating the container. For already created containers, data volumes cannot be set. Additionally, <strong>during the container creation process, data volumes are automatically created and do not need to be manually created</strong>.</p>',14)]))}]]),o=JSON.parse('{"path":"/posts/docker/1.html","title":"Docker Volume","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2025-03-03T00:00:00.000Z","category":["Learning Records"],"tag":["Docker"],"description":"Docker Volume The runtime environment of the container provider should be decoupled from the data generated by the program and the configurations the program depends on. A volum...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/docker/1.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"Docker Volume"}],["meta",{"property":"og:description","content":"Docker Volume The runtime environment of the container provider should be decoupled from the data generated by the program and the configurations the program depends on. A volum..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-03-06T12:24:15.000Z"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:published_time","content":"2025-03-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-06T12:24:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker Volume\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-03T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-06T12:24:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":3,"title":"The runtime environment of the container provider should be decoupled from the data generated by the program and the configurations the program depends on. A volume is a virtual directory that acts as a bridge between the container\'s internal directory and the host\'s directory.","slug":"the-runtime-environment-of-the-container-provider-should-be-decoupled-from-the-data-generated-by-the-program-and-the-configurations-the-program-depends-on-a-volume-is-a-virtual-directory-that-acts-as-a-bridge-between-the-container-s-internal-directory-and-the-host-s-directory","link":"#the-runtime-environment-of-the-container-provider-should-be-decoupled-from-the-data-generated-by-the-program-and-the-configurations-the-program-depends-on-a-volume-is-a-virtual-directory-that-acts-as-a-bridge-between-the-container-s-internal-directory-and-the-host-s-directory","children":[]},{"level":2,"title":"Data Mount Directory","slug":"data-mount-directory","link":"#data-mount-directory","children":[]},{"level":2,"title":"Mount Local Directory","slug":"mount-local-directory","link":"#mount-local-directory","children":[{"level":3,"title":"Mount local directory","slug":"mount-local-directory-1","link":"#mount-local-directory-1","children":[]},{"level":3,"title":"Mount local file","slug":"mount-local-file","link":"#mount-local-file","children":[]}]},{"level":2,"title":"Command","slug":"command","link":"#command","children":[]},{"level":2,"title":"Notice!","slug":"notice","link":"#notice","children":[]}],"git":{"createdTime":1741001571000,"updatedTime":1741263855000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":2}]},"readingTime":{"minutes":0.79,"words":236},"filePathRelative":"posts/docker/1.md","localizedDate":"March 3, 2025","excerpt":"\\n<h3>The runtime environment of the container provider should be decoupled from the data generated by the program and the configurations the program depends on. A volume is a virtual directory that acts as a bridge between the container\'s internal directory and the host\'s directory.</h3>\\n<h2>Data Mount Directory</h2>","autoDesc":true}')},6262:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,i]of t)a[e]=i;return a}}}]);