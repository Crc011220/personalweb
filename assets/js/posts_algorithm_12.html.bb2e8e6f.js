"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[6801],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,n]of s)a[i]=n;return a}},7839:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>t});var n=a(641);const e={},l=(0,a(6262).A)(e,[["render",function(i,s){return(0,n.uX)(),(0,n.CE)("div",null,s[0]||(s[0]=[(0,n.Fv)('<h1 id="reverse-a-linkedlist" tabindex="-1"><a class="header-anchor" href="#reverse-a-linkedlist"><span>Reverse a linkedList</span></a></h1><h3 id="e-g-input-1-2-3-output-3-2-1" tabindex="-1"><a class="header-anchor" href="#e-g-input-1-2-3-output-3-2-1"><span>e.g. input: 1-2-3 output: 3-2-1</span></a></h3><h2 id="iteration" tabindex="-1"><a class="header-anchor" href="#iteration"><span>Iteration</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ListNode</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> reverseList</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ListNode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> head) {</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    ListNode</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> preNode </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    ListNode</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> currNode </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(currNode </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">){</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        /*因为下面要把currNode的next改为指向preNode</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        * 为了不丢失本来的结点指向，所以所以需要事先保存一下*/</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        ListNode</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> next </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> currNode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        currNode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> preNode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        /*移动双指针*/</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        preNode </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> currNode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        currNode </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> preNode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="recursion" tabindex="-1"><a class="header-anchor" href="#recursion"><span>Recursion</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ListNode</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> reverseList</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ListNode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> head) {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // Base case: 如果链表为空或只剩一个节点，直接返回当前节点</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (head </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    </span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 递归地反转后续链表</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    ListNode</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> new_head </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> reverseList</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    </span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 将当前节点的下一个节点指回当前节点</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    </span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 断开当前节点与下一个节点的连接，避免循环</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    </span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 返回反转后的新头节点</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> new_head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',6)]))}]]),t=JSON.parse('{"path":"/posts/algorithm/12.html","title":"Reverse a linkedList","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2024-11-22T00:00:00.000Z","category":["Learning Records"],"tag":["Algorithm Practices"],"description":"Reverse a linkedList e.g. input: 1-2-3 output: 3-2-1 Iteration Recursion","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/algorithm/12.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"Reverse a linkedList"}],["meta",{"property":"og:description","content":"Reverse a linkedList e.g. input: 1-2-3 output: 3-2-1 Iteration Recursion"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-24T11:15:41.000Z"}],["meta",{"property":"article:tag","content":"Algorithm Practices"}],["meta",{"property":"article:published_time","content":"2024-11-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-24T11:15:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Reverse a linkedList\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-24T11:15:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\"}]}"]]},"headers":[{"level":3,"title":"e.g. input: 1-2-3 output: 3-2-1","slug":"e-g-input-1-2-3-output-3-2-1","link":"#e-g-input-1-2-3-output-3-2-1","children":[]},{"level":2,"title":"Iteration","slug":"iteration","link":"#iteration","children":[]},{"level":2,"title":"Recursion","slug":"recursion","link":"#recursion","children":[]}],"git":{"createdTime":1732446941000,"updatedTime":1732446941000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":1}]},"readingTime":{"minutes":0.69,"words":207},"filePathRelative":"posts/algorithm/12.md","localizedDate":"November 22, 2024","excerpt":"\\n<h3>e.g. input: 1-2-3 output: 3-2-1</h3>\\n<h2>Iteration</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> ListNode</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> reverseList</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">ListNode</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> head) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">    ListNode</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> preNode </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> null</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">    ListNode</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> currNode </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> head</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    while</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(currNode </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">!=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> null</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">){</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        /*因为下面要把currNode的next改为指向preNode</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        * 为了不丢失本来的结点指向，所以所以需要事先保存一下*/</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">        ListNode</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> next </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> currNode</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">next</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">        currNode</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">next</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> preNode</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        /*移动双指针*/</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">        preNode </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> currNode</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">        currNode </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> next</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    return</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> preNode</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);