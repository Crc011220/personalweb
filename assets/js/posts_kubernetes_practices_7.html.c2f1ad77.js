"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[8955],{3589:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>l,data:()=>t});var e=a(641);const n={},l=(0,a(6262).A)(n,[["render",function(s,i){return(0,e.uX)(),(0,e.CE)("div",null,i[0]||(i[0]=[(0,e.Fv)('<h1 id="daemonset-and-hpa" tabindex="-1"><a class="header-anchor" href="#daemonset-and-hpa"><span>DaemonSet and HPA</span></a></h1><h2 id="daemonset" tabindex="-1"><a class="header-anchor" href="#daemonset"><span>DaemonSet</span></a></h2><h4 id="through-configuration-add-daemonset-automatically" tabindex="-1"><a class="header-anchor" href="#through-configuration-add-daemonset-automatically"><span>Through configuration, add daemonSet automatically</span></a></h4><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><h3 id="give-node-a-label" tabindex="-1"><a class="header-anchor" href="#give-node-a-label"><span>Give Node a Label</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> label</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nodes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> k8s-node1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> svc_type=microsvc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="then-in-daemonset-configuration-config-the-nodeselector" tabindex="-1"><a class="header-anchor" href="#then-in-daemonset-configuration-config-the-nodeselector"><span>Then, in daemonSet configuration, config the nodeSelector</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apiVersion:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apps/v1</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kind:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> DaemonSet</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">metadata:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fluentd</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">spec:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  selector:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    matchLabels:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      app:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logging</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  template:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    metadata:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      labels:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        app:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logging</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        id:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fluentd</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fluentd</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    spec:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      nodeSelector:</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">        type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> microsvc</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      containers:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fluentd-es</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        image:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> agilestacks/fluentd-elasticsearch:latest</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        env:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> FLUENTD_ARGS</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">           value:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -qq</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        volumeMounts:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> containers</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">           mountPath:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/lib/docker/containers</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> varlog</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">           mountPath:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /varlog</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      volumes:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hostPath:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">             path:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/lib/docker/containers</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">           name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> containers</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hostPath:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">             path:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">           name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> varlog</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="add-label-to-node" tabindex="-1"><a class="header-anchor" href="#add-label-to-node"><span>Add label to node</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> label</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> no</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> node1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> type=microsvc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="hpa-horizontal-pod-autoscaler" tabindex="-1"><a class="header-anchor" href="#hpa-horizontal-pod-autoscaler"><span>HPA (Horizontal Pod Autoscaler)</span></a></h2><h4 id="automatically-scale-the-number-of-pods-by-monitoring-cpu-memory-usage-or-custom-metrics" tabindex="-1"><a class="header-anchor" href="#automatically-scale-the-number-of-pods-by-monitoring-cpu-memory-usage-or-custom-metrics"><span>Automatically scale the number of pods by monitoring CPU, memory usage, or custom metrics.</span></a></h4><h4 id="this-is-generally-used-with-deployments-and-is-not-suitable-for-objects-that-cannot-be-scaled-such-as-daemonsets" tabindex="-1"><a class="header-anchor" href="#this-is-generally-used-with-deployments-and-is-not-suitable-for-objects-that-cannot-be-scaled-such-as-daemonsets"><span>This is generally used with Deployments and is not suitable for objects that cannot be scaled, such as DaemonSets.</span></a></h4><h3 id="the-controller-checks-resource-usage-metrics-every-30-seconds-adjustable-with-the-–horizontal-pod-autoscaler-sync-period-option" tabindex="-1"><a class="header-anchor" href="#the-controller-checks-resource-usage-metrics-every-30-seconds-adjustable-with-the-–horizontal-pod-autoscaler-sync-period-option"><span>The controller checks resource usage metrics every 30 seconds (adjustable with the –horizontal-pod-autoscaler-sync-period option).</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> autoscale</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> deploy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx-deploy</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --cpu-percent=20</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --min=2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --max=5</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hpa</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>',15)]))}]]),t=JSON.parse('{"path":"/posts/kubernetes/practices/7.html","title":"DaemonSet and HPA","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2024-11-09T00:00:00.000Z","category":["Learning Records"],"tag":["Kubernetes"],"description":"DaemonSet and HPA DaemonSet Through configuration, add daemonSet automatically Example Give Node a Label Then, in daemonSet configuration, config the nodeSelector Add label to n...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/kubernetes/practices/7.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"DaemonSet and HPA"}],["meta",{"property":"og:description","content":"DaemonSet and HPA DaemonSet Through configuration, add daemonSet automatically Example Give Node a Label Then, in daemonSet configuration, config the nodeSelector Add label to n..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:59:00.000Z"}],["meta",{"property":"article:tag","content":"Kubernetes"}],["meta",{"property":"article:published_time","content":"2024-11-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:59:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DaemonSet and HPA\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-11T11:59:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"DaemonSet","slug":"daemonset","link":"#daemonset","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[{"level":3,"title":"Give Node a Label","slug":"give-node-a-label","link":"#give-node-a-label","children":[]},{"level":3,"title":"Then, in daemonSet configuration, config the nodeSelector","slug":"then-in-daemonset-configuration-config-the-nodeselector","link":"#then-in-daemonset-configuration-config-the-nodeselector","children":[]}]},{"level":2,"title":"Add label to node","slug":"add-label-to-node","link":"#add-label-to-node","children":[]},{"level":2,"title":"HPA (Horizontal Pod Autoscaler)","slug":"hpa-horizontal-pod-autoscaler","link":"#hpa-horizontal-pod-autoscaler","children":[{"level":3,"title":"The controller checks resource usage metrics every 30 seconds (adjustable with the –horizontal-pod-autoscaler-sync-period option).","slug":"the-controller-checks-resource-usage-metrics-every-30-seconds-adjustable-with-the-–horizontal-pod-autoscaler-sync-period-option","link":"#the-controller-checks-resource-usage-metrics-every-30-seconds-adjustable-with-the-–horizontal-pod-autoscaler-sync-period-option","children":[]}]}],"git":{"createdTime":1731149634000,"updatedTime":1731326340000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":2}]},"readingTime":{"minutes":0.61,"words":184},"filePathRelative":"posts/kubernetes/practices/7.md","localizedDate":"November 9, 2024","excerpt":"\\n<h2>DaemonSet</h2>\\n<h4>Through configuration, add daemonSet automatically</h4>\\n<h2>Example</h2>\\n<h3>Give Node a Label</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">kubectl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> label</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> nodes</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> k8s-node1</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> svc_type=microsvc</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')},6262:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,e]of i)a[s]=e;return a}}}]);