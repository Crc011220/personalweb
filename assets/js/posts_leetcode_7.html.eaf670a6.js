"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[3121],{6262:(i,s)=>{s.A=(i,s)=>{const e=i.__vccOpts||i;for(const[i,t]of s)e[i]=t;return e}},7923:(i,s,e)=>{e.r(s),e.d(s,{comp:()=>a,data:()=>h});var t=e(641);const n={},a=(0,e(6262).A)(n,[["render",function(i,s){return(0,t.uX)(),(0,t.CE)("div",null,s[0]||(s[0]=[(0,t.Fv)('<h1 id="problem-delete-the-nth-node-from-the-end-of-the-linked-list" tabindex="-1"><a class="header-anchor" href="#problem-delete-the-nth-node-from-the-end-of-the-linked-list"><span>Problem: Delete the Nth Node from the End of the Linked List</span></a></h1><p>Given the head of a linked list, remove the Nth node from the end of the list and return its head.</p><h2 id="approach-two-pointer-technique" tabindex="-1"><a class="header-anchor" href="#approach-two-pointer-technique"><span>Approach: Two-Pointer Technique</span></a></h2><ol><li><strong>Initialize two pointers</strong>, <code>first</code> and <code>second</code>, both pointing to the head of the list.</li><li><strong>Advance <code>first</code> pointer</strong> by N nodes. This creates a gap of N nodes between <code>first</code> and <code>second</code>.</li><li><strong>Move both pointers</strong> until <code>first</code> reaches the end. Now, <code>second</code> will be pointing to the node just before the Nth node from the end.</li><li><strong>Remove the target node</strong> by updating the <code>next</code> pointer of <code>second</code>.</li><li><strong>Return the head</strong> of the modified list.</li></ol><p>This approach allows us to make a single pass through the list.</p><h2 id="complexity" tabindex="-1"><a class="header-anchor" href="#complexity"><span>Complexity</span></a></h2><ul><li><strong>Time Complexity</strong>: ( O(L) ), where ( L ) is the length of the list.</li><li><strong>Space Complexity</strong>: ( O(1) ), as we only use a constant amount of extra space.</li></ul><h2 id="java-code-implementation" tabindex="-1"><a class="header-anchor" href="#java-code-implementation"><span>Java Code Implementation</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ListNode</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> removeNthFromEnd</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ListNode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n) {</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    ListNode</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> dummy </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ListNode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    dummy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    ListNode</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> first </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dummy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    ListNode</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> second </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dummy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // Move first N+1 steps ahead</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        first </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> first</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // Move both pointers until first reaches the end</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (first </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        first </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> first</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        second </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> second</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // Skip the target node</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    second</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> second</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> dummy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',9)]))}]]),h=JSON.parse('{"path":"/posts/leetcode/7.html","title":"Problem: Delete the Nth Node from the End of the Linked List","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2024-11-11T00:00:00.000Z","category":["Learning Records"],"tag":["LeetCode"],"description":"Problem: Delete the Nth Node from the End of the Linked List Given the head of a linked list, remove the Nth node from the end of the list and return its head. Approach: Two-Poi...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/leetcode/7.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"Problem: Delete the Nth Node from the End of the Linked List"}],["meta",{"property":"og:description","content":"Problem: Delete the Nth Node from the End of the Linked List Given the head of a linked list, remove the Nth node from the end of the list and return its head. Approach: Two-Poi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:59:08.000Z"}],["meta",{"property":"article:tag","content":"LeetCode"}],["meta",{"property":"article:published_time","content":"2024-11-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:59:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Problem: Delete the Nth Node from the End of the Linked List\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-11T11:59:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\"}]}"]]},"headers":[{"level":2,"title":"Approach: Two-Pointer Technique","slug":"approach-two-pointer-technique","link":"#approach-two-pointer-technique","children":[]},{"level":2,"title":"Complexity","slug":"complexity","link":"#complexity","children":[]},{"level":2,"title":"Java Code Implementation","slug":"java-code-implementation","link":"#java-code-implementation","children":[]}],"git":{"createdTime":1731326348000,"updatedTime":1731326348000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":1}]},"readingTime":{"minutes":0.78,"words":234},"filePathRelative":"posts/leetcode/7.md","localizedDate":"November 11, 2024","excerpt":"\\n<p>Given the head of a linked list, remove the Nth node from the end of the list and return its head.</p>\\n<h2>Approach: Two-Pointer Technique</h2>\\n<ol>\\n<li><strong>Initialize two pointers</strong>, <code>first</code> and <code>second</code>, both pointing to the head of the list.</li>\\n<li><strong>Advance <code>first</code> pointer</strong> by N nodes. This creates a gap of N nodes between <code>first</code> and <code>second</code>.</li>\\n<li><strong>Move both pointers</strong> until <code>first</code> reaches the end. Now, <code>second</code> will be pointing to the node just before the Nth node from the end.</li>\\n<li><strong>Remove the target node</strong> by updating the <code>next</code> pointer of <code>second</code>.</li>\\n<li><strong>Return the head</strong> of the modified list.</li>\\n</ol>","autoDesc":true}')}}]);