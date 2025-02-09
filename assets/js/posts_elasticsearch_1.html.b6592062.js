"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[2425],{6262:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}},3357:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>s,data:()=>o});var a=n(641);const i=n.p+"assets/img/es.2d7081e3.png",r={},s=(0,n(6262).A)(r,[["render",function(e,t){return(0,a.uX)(),(0,a.CE)("div",null,t[0]||(t[0]=[(0,a.Fv)('<h1 id="concepts" tabindex="-1"><a class="header-anchor" href="#concepts"><span>Concepts</span></a></h1><ul><li><strong>Forward Index</strong> is the most traditional, indexing by ID. However, when searching for a term, it must first retrieve each document one by one and then check if the document contains the required term. This is a process of finding terms based on documents.</li><li><strong>Inverted Index</strong>, on the other hand, first finds the term the user wants to search for, gets the IDs of the documents containing that term, and then retrieves the documents based on those IDs. This is a process of finding documents based on terms.</li></ul><h3 id="forward-index" tabindex="-1"><a class="header-anchor" href="#forward-index"><span>Forward Index</span></a></h3><ul><li><strong>Advantages</strong>: <ul><li>Can create indexes for multiple fields.</li><li>Searching and sorting based on indexed fields is very fast.</li></ul></li><li><strong>Disadvantages</strong>: <ul><li>When searching for non-indexed fields or partial terms within indexed fields, a full table scan is required.</li></ul></li></ul><h3 id="inverted-index" tabindex="-1"><a class="header-anchor" href="#inverted-index"><span>Inverted Index</span></a></h3><ul><li><strong>Advantages</strong>: <ul><li>Searching and fuzzy searching based on terms is very fast.</li></ul></li><li><strong>Disadvantages</strong>: <ul><li>Can only create indexes for terms, not for fields.</li><li>Cannot sort based on fields.</li></ul></li></ul><p>Elasticsearch is document-oriented storage, where data can be a single product entry in a database or an order information. Document data is serialized into JSON format and stored in Elasticsearch. Therefore, a row of data in a database is a JSON document in Elasticsearch; and the columns in each row of data are converted into fields in the JSON document.</p><p>Storing all documents in a disorganized manner is obviously very messy and inconvenient to manage. Therefore, we need to group similar types of documents together for management, which is called an index (Index).</p><table><thead><tr><th>MySQL</th><th>Elasticsearch</th><th>Description</th></tr></thead><tbody><tr><td>Table</td><td>Index</td><td>An index is a collection of documents, similar to a table in a database.</td></tr><tr><td>Row</td><td>Document</td><td>A document is a piece of data, similar to a row in a database, and is in JSON format.</td></tr><tr><td>Column</td><td>Field</td><td>A field is a column in a JSON document, similar to a column in a database.</td></tr><tr><td>Schema</td><td>Mapping</td><td>Mapping is the constraint on the documents in an index, such as field type constraints, similar to the schema of a database table.</td></tr><tr><td>SQL</td><td>DSL</td><td>DSL is a JSON-style request statement provided by Elasticsearch, used to operate Elasticsearch and achieve CRUD.</td></tr></tbody></table><ul><li><strong>MySQL</strong>: Good at transactional operations, ensuring data security and consistency.</li><li><strong>Elasticsearch</strong>: Good at searching, analyzing, and computing large amounts of data.</li></ul><p>Therefore, in enterprises, they are often used in combination:</p><ul><li>Write operations with high security requirements are implemented using MySQL.</li><li>Search requirements with high performance demands are implemented using Elasticsearch.</li><li>The two are synchronized in some way to ensure consistency.</li></ul><figure><img src="'+i+'" alt="Elasticsearch" tabindex="0" loading="lazy"><figcaption>Elasticsearch</figcaption></figure>',13)]))}]]),o=JSON.parse('{"path":"/posts/elasticsearch/1.html","title":"Concepts","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2024-12-01T00:00:00.000Z","category":["Learning Records"],"tag":["ES"],"description":"Concepts Forward Index is the most traditional, indexing by ID. However, when searching for a term, it must first retrieve each document one by one and then check if the documen...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/elasticsearch/1.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"Concepts"}],["meta",{"property":"og:description","content":"Concepts Forward Index is the most traditional, indexing by ID. However, when searching for a term, it must first retrieve each document one by one and then check if the documen..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-02-05T06:11:23.000Z"}],["meta",{"property":"article:tag","content":"ES"}],["meta",{"property":"article:published_time","content":"2024-12-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-05T06:11:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Concepts\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-01T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-05T06:11:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\"}]}"]]},"headers":[{"level":3,"title":"Forward Index","slug":"forward-index","link":"#forward-index","children":[]},{"level":3,"title":"Inverted Index","slug":"inverted-index","link":"#inverted-index","children":[]}],"git":{"createdTime":1733025395000,"updatedTime":1738735883000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":2}]},"readingTime":{"minutes":1.42,"words":427},"filePathRelative":"posts/elasticsearch/1.md","localizedDate":"December 1, 2024","excerpt":"\\n<ul>\\n<li><strong>Forward Index</strong> is the most traditional, indexing by ID. However, when searching for a term, it must first retrieve each document one by one and then check if the document contains the required term. This is a process of finding terms based on documents.</li>\\n<li><strong>Inverted Index</strong>, on the other hand, first finds the term the user wants to search for, gets the IDs of the documents containing that term, and then retrieves the documents based on those IDs. This is a process of finding documents based on terms.</li>\\n</ul>","autoDesc":true}')}}]);