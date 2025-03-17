"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[751],{4946:(e,s,i)=>{i.r(s),i.d(s,{comp:()=>t,data:()=>l});var a=i(641);const n={},t=(0,i(6262).A)(n,[["render",function(e,s){return(0,a.uX)(),(0,a.CE)("div",null,s[0]||(s[0]=[(0,a.Fv)('<h1 id="mybatis" tabindex="-1"><a class="header-anchor" href="#mybatis"><span>MyBatis</span></a></h1><h3 id="reading" tabindex="-1"><a class="header-anchor" href="#reading"><span>Reading</span></a></h3><p>Mapping between properties and column names:</p><div class="language-mybatis line-numbers-mode" data-highlighter="shiki" data-ext="mybatis" data-title="mybatis" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;resultMap id=&quot;uniqueIdentifier&quot; type=&quot;mappedType&quot;&gt;</span></span>\n<span class="line"><span>    &lt;id column=&quot;tableColumnName&quot; property=&quot;entityPropertyName&quot;&gt;&lt;/id&gt; </span></span>\n<span class="line"><span>    &lt;result column=&quot;tableColumnName&quot; property=&quot;entityPropertyName&quot;&gt;&lt;/result&gt;</span></span>\n<span class="line"><span>[//]: # (    id is for primary key mapping, result is for non-primary key mapping)</span></span>\n<span class="line"><span>&lt;/resultMap&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="difference-between-and" tabindex="-1"><a class="header-anchor" href="#difference-between-and"><span>Difference Between <code>#</code> and <code>$</code></span></a></h3><ul><li><code>#</code>: Represents a precompiled statement. During SQL compilation, placeholders like <code>?</code> replace unknown content, preventing SQL injection.</li><li><code>$</code>: Represents SQL string concatenation, which is vulnerable to SQL injection.</li></ul><hr><h3 id="three-methods-for-conditional-queries" tabindex="-1"><a class="header-anchor" href="#three-methods-for-conditional-queries"><span>Three Methods for Conditional Queries</span></a></h3><p>For example, querying specific information about the <code>Brand</code> entity:</p><ol><li>Use <code>@Param</code> to tell MyBatis the mapping between the entity class and the database table.</li><li>Create a new instance of the entity.</li><li>Use a <code>Map</code> where: <ul><li>The key is the entity class property name (e.g., <code>&quot;status&quot;</code>).</li><li>The value is the actual value (e.g., <code>status</code>).</li></ul></li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Brand</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> selectBrandCondition</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Param</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;status&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> status)</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Brand</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> selectBrandCondition</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Brand</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> brand)</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Brand</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> selectBrandCondition</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Map</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> map)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dynamic-conditional-search" tabindex="-1"><a class="header-anchor" href="#dynamic-conditional-search"><span>Dynamic Conditional Search</span></a></h3><div class="language-mybatis line-numbers-mode" data-highlighter="shiki" data-ext="mybatis" data-title="mybatis" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;where&gt;</span></span>\n<span class="line"><span>    &lt;if test=&quot;specificCondition&quot;&gt;</span></span>\n<span class="line"><span>        sqlStatement</span></span>\n<span class="line"><span>    &lt;/if&gt;</span></span>\n<span class="line"><span>&lt;/where&gt;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>&lt;where&gt;</span></span>\n<span class="line"><span>    &lt;choose&gt; &lt;!-- Similar to a switch in Java --&gt;</span></span>\n<span class="line"><span>        &lt;when test=&quot;conditionContent&quot;&gt; &lt;!-- Similar to a case in Java --&gt;</span></span>\n<span class="line"><span>            sqlStatement</span></span>\n<span class="line"><span>        &lt;/when&gt;</span></span>\n<span class="line"><span>    &lt;/choose&gt;</span></span>\n<span class="line"><span>    &lt;!-- Wrapping with &lt;where&gt; eliminates the need for a default case --&gt;</span></span>\n<span class="line"><span>&lt;/where&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>&lt;where&gt;</code> tag automatically resolves some SQL syntax issues. For example, if an <code>&lt;if&gt;</code> condition evaluates to false and does not execute, it prevents leftover issues like an extra <code>AND</code> in the original SQL statement.</p><hr><h3 id="create" tabindex="-1"><a class="header-anchor" href="#create"><span>Create</span></a></h3><h4 id="returning-primary-keys" tabindex="-1"><a class="header-anchor" href="#returning-primary-keys"><span>Returning Primary Keys</span></a></h4><p>When data is successfully inserted, sometimes it is necessary to retrieve the primary key of the inserted record.</p><div class="language-mybatis line-numbers-mode" data-highlighter="shiki" data-ext="mybatis" data-title="mybatis" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;insert id=&quot;xxx&quot; useGeneratedKeys=&quot;true&quot; keyProperty=&quot;id&quot;&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>useGeneratedKeys: Defaults to false. Set to true to enable automatic key generation.</li><li>keyProperty: Specifies the name of the primary key property in the entity class.</li></ul><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update"><span>Update</span></a></h3><h3 id="set-tag" tabindex="-1"><a class="header-anchor" href="#set-tag"><span><code>&lt;set&gt;</code> Tag</span></a></h3><p>The <code>&lt;set&gt;</code> tag helps prevent unmodified fields from being mistakenly updated to <code>null</code>. It dynamically constructs the <code>SET</code> clause of an <code>UPDATE</code> statement based on the provided conditions.</p><p>Example:</p><div class="language-mybatis line-numbers-mode" data-highlighter="shiki" data-ext="mybatis" data-title="mybatis" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;update id=&quot;updateEntity&quot;&gt;</span></span>\n<span class="line"><span>    UPDATE table_name</span></span>\n<span class="line"><span>    &lt;set&gt;</span></span>\n<span class="line"><span>        &lt;if test=&quot;field1 != null&quot;&gt;</span></span>\n<span class="line"><span>            field1 = #{field1},</span></span>\n<span class="line"><span>        &lt;/if&gt;</span></span>\n<span class="line"><span>        &lt;if test=&quot;field2 != null&quot;&gt;</span></span>\n<span class="line"><span>            field2 = #{field2},</span></span>\n<span class="line"><span>        &lt;/if&gt;</span></span>\n<span class="line"><span>    &lt;/set&gt;</span></span>\n<span class="line"><span>    WHERE id = #{id}</span></span>\n<span class="line"><span>&lt;/update&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete" tabindex="-1"><a class="header-anchor" href="#delete"><span>Delete</span></a></h3><p>batch delete</p><h3 id="foreach-tag" tabindex="-1"><a class="header-anchor" href="#foreach-tag"><span><code>&lt;foreach&gt;</code> Tag</span></a></h3><p>The <code>&lt;foreach&gt;</code> tag is used to handle collections in MyBatis, such as arrays, lists, or maps. It is often used for batch operations like <code>IN</code> queries or batch inserts/updates.</p><h4 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes"><span>Attributes:</span></a></h4><ul><li><strong><code>collection</code></strong>: Specifies the collection to iterate (e.g., an array, list, or map).</li><li><strong><code>item</code></strong>: Represents each item in the collection during iteration.</li><li><strong><code>index</code></strong> (optional): Represents the index or key of the item in the collection.</li><li><strong><code>separator</code></strong>: Specifies the string to separate each iteration, like <code>,</code>.</li><li><strong><code>open</code></strong> and <strong><code>close</code></strong> (optional): Define the starting and ending characters for the generated content (e.g., <code>(</code> and <code>)</code>).</li></ul><hr><h4 id="example-in-query-for-batch-conditions" tabindex="-1"><a class="header-anchor" href="#example-in-query-for-batch-conditions"><span>Example: <code>IN</code> Query for Batch Conditions</span></a></h4><div class="language-mybatis line-numbers-mode" data-highlighter="shiki" data-ext="mybatis" data-title="mybatis" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;select id=&quot;selectByIds&quot; resultType=&quot;Entity&quot;&gt;</span></span>\n<span class="line"><span>    SELECT * FROM table_name</span></span>\n<span class="line"><span>    WHERE id IN</span></span>\n<span class="line"><span>    &lt;foreach collection=&quot;list&quot; item=&quot;id&quot; open=&quot;(&quot; separator=&quot;,&quot; close=&quot;)&quot;&gt;</span></span>\n<span class="line"><span>        #{id}</span></span>\n<span class="line"><span>    &lt;/foreach&gt;</span></span>\n<span class="line"><span>&lt;/select&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',34)]))}]]),l=JSON.parse('{"path":"/posts/mybatis/1.html","title":"MyBatis","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2024-11-29T00:00:00.000Z","category":["Learning Records"],"tag":["MyBatis"],"description":"MyBatis Reading Mapping between properties and column names: Difference Between # and $ #: Represents a precompiled statement. During SQL compilation, placeholders like ? replac...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/mybatis/1.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"MyBatis"}],["meta",{"property":"og:description","content":"MyBatis Reading Mapping between properties and column names: Difference Between # and $ #: Represents a precompiled statement. During SQL compilation, placeholders like ? replac..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-01T03:56:35.000Z"}],["meta",{"property":"article:tag","content":"MyBatis"}],["meta",{"property":"article:published_time","content":"2024-11-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-01T03:56:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MyBatis\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-01T03:56:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":3,"title":"Reading","slug":"reading","link":"#reading","children":[]},{"level":3,"title":"Difference Between # and $","slug":"difference-between-and","link":"#difference-between-and","children":[]},{"level":3,"title":"Three Methods for Conditional Queries","slug":"three-methods-for-conditional-queries","link":"#three-methods-for-conditional-queries","children":[]},{"level":3,"title":"Dynamic Conditional Search","slug":"dynamic-conditional-search","link":"#dynamic-conditional-search","children":[]},{"level":3,"title":"Create","slug":"create","link":"#create","children":[]},{"level":3,"title":"Update","slug":"update","link":"#update","children":[]},{"level":3,"title":"<set> Tag","slug":"set-tag","link":"#set-tag","children":[]},{"level":3,"title":"Delete","slug":"delete","link":"#delete","children":[]},{"level":3,"title":"<foreach> Tag","slug":"foreach-tag","link":"#foreach-tag","children":[]}],"git":{"createdTime":1733025395000,"updatedTime":1733025395000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":1}]},"readingTime":{"minutes":1.6,"words":480},"filePathRelative":"posts/mybatis/1.md","localizedDate":"November 29, 2024","excerpt":"\\n<h3>Reading</h3>\\n<p>Mapping between properties and column names:</p>\\n<div class=\\"language-mybatis line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"mybatis\\" data-title=\\"mybatis\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>&lt;resultMap id=\\"uniqueIdentifier\\" type=\\"mappedType\\"&gt;</span></span>\\n<span class=\\"line\\"><span>    &lt;id column=\\"tableColumnName\\" property=\\"entityPropertyName\\"&gt;&lt;/id&gt; </span></span>\\n<span class=\\"line\\"><span>    &lt;result column=\\"tableColumnName\\" property=\\"entityPropertyName\\"&gt;&lt;/result&gt;</span></span>\\n<span class=\\"line\\"><span>[//]: # (    id is for primary key mapping, result is for non-primary key mapping)</span></span>\\n<span class=\\"line\\"><span>&lt;/resultMap&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')},6262:(e,s)=>{s.A=(e,s)=>{const i=e.__vccOpts||e;for(const[e,a]of s)i[e]=a;return i}}}]);