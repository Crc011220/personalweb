"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[2467],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,n]of s)a[i]=n;return a}},576:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>h});var n=a(641);const t={},l=(0,a(6262).A)(t,[["render",function(i,s){return(0,n.uX)(),(0,n.CE)("div",null,s[0]||(s[0]=[(0,n.Fv)('<h1 id="eratosthenes" tabindex="-1"><a class="header-anchor" href="#eratosthenes"><span>Eratosthenes</span></a></h1><p>Calculate the number of the prime numbers in a given range N.</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> eratosthenes</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n){</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //埃筛法</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        boolean</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] isNotPrime </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[n]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //false represents a prime number</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> count </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">){</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">isNotPrime[i]){ </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//is prime number</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">                count</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                //for(int j=2*i; j&lt;n; j+=i){//j是合数标记位置 j+=i因为要从2*i 3*i 4*i 逐渐递增。但是在这个循环不好直接修改i</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i){</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//无需从2*i开始，因为如果是2*i的话，比如i=2的时候会计算2*4，i=4的时候也会从2*4开始，这样就重复了</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">                    isNotPrime[j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //标记这些合数 label composite number</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">                }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> count</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3)]))}]]),h=JSON.parse('{"path":"/posts/algorithm/10.html","title":"Eratosthenes","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2024-11-18T00:00:00.000Z","category":["Learning Records"],"tag":["LeetCode"],"description":"Eratosthenes Calculate the number of the prime numbers in a given range N.","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/algorithm/10.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"Eratosthenes"}],["meta",{"property":"og:description","content":"Eratosthenes Calculate the number of the prime numbers in a given range N."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-18T12:33:48.000Z"}],["meta",{"property":"article:tag","content":"LeetCode"}],["meta",{"property":"article:published_time","content":"2024-11-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-18T12:33:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Eratosthenes\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-18T12:33:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\"}]}"]]},"headers":[],"git":{"createdTime":1731933228000,"updatedTime":1731933228000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":1}]},"readingTime":{"minutes":0.61,"words":182},"filePathRelative":"posts/algorithm/10.md","localizedDate":"November 18, 2024","excerpt":"\\n<p>Calculate the number of the prime numbers in a given range N.</p>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> static</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> int</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> eratosthenes</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> (</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> n){</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        //埃筛法</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#C678DD\\">        boolean</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">[] isNotPrime </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> new</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#C678DD\\"> boolean</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">[n]</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> //false represents a prime number</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        int</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> count </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 0</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        for</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> i</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">2</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> i</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">n</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> i</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">++</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">){</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">            if</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">!</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">isNotPrime[i]){ </span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">//is prime number</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">                count</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">++;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">                //for(int j=2*i; j&lt;n; j+=i){//j是合数标记位置 j+=i因为要从2*i 3*i 4*i 逐渐递增。但是在这个循环不好直接修改i</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">                for</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> j</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">i</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">*</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">i</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> j</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">n</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> j</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">+=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">i){</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">//无需从2*i开始，因为如果是2*i的话，比如i=2的时候会计算2*4，i=4的时候也会从2*4开始，这样就重复了</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">                    isNotPrime[j] </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> true</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> //标记这些合数 label composite number</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">                }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">            }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">        }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        return</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> count</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">    }</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);