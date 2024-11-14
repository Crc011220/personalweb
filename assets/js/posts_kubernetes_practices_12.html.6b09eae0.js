"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[911],{6262:(s,i)=>{i.A=(s,i)=>{const e=s.__vccOpts||s;for(const[s,a]of i)e[s]=a;return e}},3022:(s,i,e)=>{e.r(i),e.d(i,{comp:()=>l,data:()=>t});var a=e(641);const n={},l=(0,e(6262).A)(n,[["render",function(s,i){return(0,a.uX)(),(0,a.CE)("div",null,i[0]||(i[0]=[(0,a.Fv)('<h1 id="helm-kubernetes-package-manager" tabindex="-1"><a class="header-anchor" href="#helm-kubernetes-package-manager"><span>Helm: Kubernetes Package Manager</span></a></h1><p>Helm is a package manager for Kubernetes, designed to simplify the deployment and management of applications on Kubernetes clusters. Helm allows developers to package, configure, and deploy applications as reusable &quot;charts,&quot; which are collections of YAML files that describe a related set of Kubernetes resources.</p><h2 id="key-features-of-helm" tabindex="-1"><a class="header-anchor" href="#key-features-of-helm"><span>Key Features of Helm</span></a></h2><ol><li><p><strong>Charts</strong>:</p><ul><li>A Helm chart is a pre-configured template of Kubernetes resources, making it easy to deploy complex applications as a single package.</li><li>Charts are reusable and can be customized for different environments.</li></ul></li><li><p><strong>Templates</strong>:</p><ul><li>Helm supports templating, allowing variables in your Kubernetes configurations.</li><li>This feature makes it easy to customize charts for different environments, such as development, staging, and production.</li></ul></li><li><p><strong>Version Control and Rollbacks</strong>:</p><ul><li>Helm tracks the history of releases and allows you to roll back to previous versions.</li><li>This simplifies upgrades and makes deployments more resilient.</li></ul></li><li><p><strong>Repositories</strong>:</p><ul><li>Helm charts are stored in repositories, and Helm provides commands to install charts directly from a repository.</li><li>This makes it easy to share and distribute applications.</li></ul></li></ol><h2 id="common-use-cases" tabindex="-1"><a class="header-anchor" href="#common-use-cases"><span>Common Use Cases</span></a></h2><ul><li><strong>Application Deployment</strong>: Easily deploy applications with complex configurations and dependencies.</li><li><strong>Environment-Specific Configuration</strong>: Use templates and values to adjust configurations across different environments.</li><li><strong>Upgrades and Rollbacks</strong>: Safely upgrade and roll back applications with minimal downtime.</li></ul><h2 id="basic-commands" tabindex="-1"><a class="header-anchor" href="#basic-commands"><span>Basic Commands</span></a></h2><ul><li><code>helm install &lt;release_name&gt; &lt;chart_name&gt;</code>: Deploy a new application using a Helm chart.</li><li><code>helm upgrade &lt;release_name&gt; &lt;chart_name&gt;</code>: Update an application to a new version or configuration.</li><li><code>helm rollback &lt;release_name&gt; &lt;revision_number&gt;</code>: Revert an application to a previous version.</li><li><code>helm list</code>: List all deployed releases.</li></ul><p>Helm helps standardize and simplify Kubernetes application management, making it essential for many Kubernetes-based workflows.</p><h2 id="practice-redis-chart" tabindex="-1"><a class="header-anchor" href="#practice-redis-chart"><span>Practice: Redis Chart</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">helm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> repo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bitnami</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://charts.bitnami.com/bitnami</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Search redis chart</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">helm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> search</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> repo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Check installation documentation</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">helm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> show</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> readme</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bitnami/redis</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">helm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bitnami/redis</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -xvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis-20.2.2.tgz</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Modify the configuration according to needs</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> values.yaml</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Check the version of Helm if there is an error</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">helm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./redis</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Check all information under redis Namespace</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> all</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Get into the redis master </span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pod/redis-master-0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sh</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">helm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> upgrade</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [RELEASE] [CHART] [flags]</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">helm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> upgrade</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./redis</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">helm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rollback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RELEAS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">E&gt; [REVISION] [flags]</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Check history</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">helm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> history</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Rollback to previous version</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">helm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rollback</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Rollback to pointed version</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">helm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rollback</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">helm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> delete</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/png;base64,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" alt="RedisCli.png" tabindex="0" loading="lazy"><figcaption>RedisCli.png</figcaption></figure>',12)]))}]]),t=JSON.parse('{"path":"/posts/kubernetes/practices/12.html","title":"Helm: Kubernetes Package Manager","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2024-11-13T00:00:00.000Z","category":["Learning Records"],"tag":["Kubernetes"],"description":"Helm: Kubernetes Package Manager Helm is a package manager for Kubernetes, designed to simplify the deployment and management of applications on Kubernetes clusters. Helm allows...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/kubernetes/practices/12.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"Helm: Kubernetes Package Manager"}],["meta",{"property":"og:description","content":"Helm: Kubernetes Package Manager Helm is a package manager for Kubernetes, designed to simplify the deployment and management of applications on Kubernetes clusters. Helm allows..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-14T12:39:44.000Z"}],["meta",{"property":"article:tag","content":"Kubernetes"}],["meta",{"property":"article:published_time","content":"2024-11-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-14T12:39:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Helm: Kubernetes Package Manager\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-14T12:39:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\"}]}"]]},"headers":[{"level":2,"title":"Key Features of Helm","slug":"key-features-of-helm","link":"#key-features-of-helm","children":[]},{"level":2,"title":"Common Use Cases","slug":"common-use-cases","link":"#common-use-cases","children":[]},{"level":2,"title":"Basic Commands","slug":"basic-commands","link":"#basic-commands","children":[]},{"level":2,"title":"Practice: Redis Chart","slug":"practice-redis-chart","link":"#practice-redis-chart","children":[]}],"git":{"createdTime":1731587984000,"updatedTime":1731587984000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":1}]},"readingTime":{"minutes":1.34,"words":403},"filePathRelative":"posts/kubernetes/practices/12.md","localizedDate":"November 13, 2024","excerpt":"\\n<p>Helm is a package manager for Kubernetes, designed to simplify the deployment and management of applications on Kubernetes clusters. Helm allows developers to package, configure, and deploy applications as reusable \\"charts,\\" which are collections of YAML files that describe a related set of Kubernetes resources.</p>","autoDesc":true}')}}]);