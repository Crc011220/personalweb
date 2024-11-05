"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[433],{6262:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}},5475:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>i,data:()=>o});var r=n(641);const a=n.p+"assets/img/btree_bptree.57859468.png",s={},i=(0,n(6262).A)(s,[["render",function(e,t){return(0,r.uX)(),(0,r.CE)("div",null,t[0]||(t[0]=[(0,r.Fv)('<h1 id="b-tree-vs-b-tree-in-mysql-innodb" tabindex="-1"><a class="header-anchor" href="#b-tree-vs-b-tree-in-mysql-innodb"><span>B-Tree vs. B+ Tree in MySQL InnoDB</span></a></h1><p>MySQL’s InnoDB storage engine uses <strong>B+ Trees</strong> as its primary data structure for indexing. B+ Trees are a modified version of B-Trees, optimized for database indexing.</p><hr><h2 id="what-is-a-b-tree" tabindex="-1"><a class="header-anchor" href="#what-is-a-b-tree"><span>What is a B-Tree?</span></a></h2><p>A B-Tree (Balanced Tree) is a multi-way balanced tree. Key characteristics of B-Trees include:</p><ol><li><strong>Data Stored in Nodes</strong>: Each node in a B-Tree stores keys and values, so data can be located in both leaf and non-leaf nodes.</li><li><strong>Multi-Branch Structure</strong>: Each node can have multiple child nodes. The number of children depends on the degree (order) of the B-Tree.</li><li><strong>Balance</strong>: B-Trees are balanced, meaning all leaf nodes are at the same level.</li><li><strong>Search Efficiency</strong>: Due to its structure, B-Trees provide efficient searching, especially for small datasets.</li></ol><hr><h2 id="what-is-a-b-tree-1" tabindex="-1"><a class="header-anchor" href="#what-is-a-b-tree-1"><span>What is a B+ Tree?</span></a></h2><p>A B+ Tree is an enhanced version of the B-Tree, better suited for database indexing and especially for range queries. Key characteristics of B+ Trees include:</p><ol><li><strong>Data Only Stored in Leaf Nodes</strong>: All actual data is stored in leaf nodes, while non-leaf nodes only contain keys. This forms a linked list of all data at the leaf level.</li><li><strong>Sequential Access</strong>: Leaf nodes are connected by a linked list, making range queries and ordered data retrieval efficient.</li><li><strong>Non-Leaf Nodes as Indexes</strong>: Non-leaf nodes act purely as index points, allowing for more keys at each level, reducing the tree height and increasing efficiency for large datasets.</li></ol><hr><h2 id="key-differences-between-b-trees-and-b-trees" tabindex="-1"><a class="header-anchor" href="#key-differences-between-b-trees-and-b-trees"><span>Key Differences Between B-Trees and B+ Trees</span></a></h2><table><thead><tr><th>Feature</th><th>B-Tree</th><th>B+ Tree</th></tr></thead><tbody><tr><td><strong>Data Storage</strong></td><td>Data in both leaf &amp; non-leaf</td><td>Data only in leaf nodes</td></tr><tr><td><strong>Non-Leaf Node Data</strong></td><td>Yes, stores data</td><td>No, stores only index keys</td></tr><tr><td><strong>Linked List Connection</strong></td><td>None</td><td>Leaf nodes connected by linked list</td></tr><tr><td><strong>Range Query Efficiency</strong></td><td>Moderate</td><td>High due to linked leaf nodes</td></tr><tr><td><strong>Tree Height</strong></td><td>Higher due to data storage</td><td>Lower as nodes contain only indexes</td></tr></tbody></table><hr><h2 id="why-innodb-chooses-b-tree" tabindex="-1"><a class="header-anchor" href="#why-innodb-chooses-b-tree"><span>Why InnoDB Chooses B+ Tree?</span></a></h2><ol><li><p><strong>Efficient Range Queries</strong>: In databases, range queries (e.g., <code>BETWEEN</code> or sorting) are common. The linked structure of B+ Tree leaf nodes makes range queries more efficient.</p></li><li><p><strong>Reduced I/O Operations</strong>: Since non-leaf nodes store only indexes, B+ Trees can store more index information at each level, keeping the tree height low, and reducing disk I/O.</p></li><li><p><strong>Optimized Bulk Reading</strong>: The leaf node linked list enables sequential traversal, ideal for batch data access.</p></li></ol><p>B+ Trees’ structure and linked leaf nodes make them well-suited for large-scale data with efficient range and order-based retrieval, making them a preferred choice for MySQL’s InnoDB storage engine.</p><figure><img src="'+a+'" alt="img.png" tabindex="0" loading="lazy"><figcaption>img.png</figcaption></figure>',18)]))}]]),o=JSON.parse('{"path":"/posts/clich%C3%A9/2.html","title":"B-Tree vs. B+ Tree in MySQL InnoDB","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2024-11-05T00:00:00.000Z","category":["Learning Records"],"tag":["Programmer cliché"],"description":"B-Tree vs. B+ Tree in MySQL InnoDB MySQL’s InnoDB storage engine uses B+ Trees as its primary data structure for indexing. B+ Trees are a modified version of B-Trees, optimized ...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/clich%C3%A9/2.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"B-Tree vs. B+ Tree in MySQL InnoDB"}],["meta",{"property":"og:description","content":"B-Tree vs. B+ Tree in MySQL InnoDB MySQL’s InnoDB storage engine uses B+ Trees as its primary data structure for indexing. B+ Trees are a modified version of B-Trees, optimized ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-05T11:31:00.000Z"}],["meta",{"property":"article:tag","content":"Programmer cliché"}],["meta",{"property":"article:published_time","content":"2024-11-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-05T11:31:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"B-Tree vs. B+ Tree in MySQL InnoDB\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-05T11:31:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\"}]}"]]},"headers":[{"level":2,"title":"What is a B-Tree?","slug":"what-is-a-b-tree","link":"#what-is-a-b-tree","children":[]},{"level":2,"title":"What is a B+ Tree?","slug":"what-is-a-b-tree-1","link":"#what-is-a-b-tree-1","children":[]},{"level":2,"title":"Key Differences Between B-Trees and B+ Trees","slug":"key-differences-between-b-trees-and-b-trees","link":"#key-differences-between-b-trees-and-b-trees","children":[]},{"level":2,"title":"Why InnoDB Chooses B+ Tree?","slug":"why-innodb-chooses-b-tree","link":"#why-innodb-chooses-b-tree","children":[]}],"git":{"createdTime":1730806260000,"updatedTime":1730806260000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":1}]},"readingTime":{"minutes":1.52,"words":455},"filePathRelative":"posts/cliché/2.md","localizedDate":"November 5, 2024","excerpt":"\\n<p>MySQL’s InnoDB storage engine uses <strong>B+ Trees</strong> as its primary data structure for indexing. B+ Trees are a modified version of B-Trees, optimized for database indexing.</p>\\n<hr>\\n<h2>What is a B-Tree?</h2>\\n<p>A B-Tree (Balanced Tree) is a multi-way balanced tree. Key characteristics of B-Trees include:</p>","autoDesc":true}')}}]);