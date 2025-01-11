"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[6292],{6262:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,n]of t)a[e]=n;return a}},3623:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>o,data:()=>s});var n=a(641);const i={},o=(0,a(6262).A)(i,[["render",function(e,t){return(0,n.uX)(),(0,n.CE)("div",null,t[0]||(t[0]=[(0,n.Fv)('<h1 id="week-5" tabindex="-1"><a class="header-anchor" href="#week-5"><span>Week 5</span></a></h1><h2 id="general-notice-api" tabindex="-1"><a class="header-anchor" href="#general-notice-api"><span>General notice API</span></a></h2><h4 id="write-interface-document" tabindex="-1"><a class="header-anchor" href="#write-interface-document"><span>Write interface document</span></a></h4><h4 id="read-the-api-documentation-and-source-code" tabindex="-1"><a class="header-anchor" href="#read-the-api-documentation-and-source-code"><span>Read the API documentation and source code</span></a></h4><h4 id="modify-the-source-code-to-let-users-can-customize-the-robot-sender" tabindex="-1"><a class="header-anchor" href="#modify-the-source-code-to-let-users-can-customize-the-robot-sender"><span>Modify the source code to let users can customize the robot sender</span></a></h4><h2 id="document-security-check-api" tabindex="-1"><a class="header-anchor" href="#document-security-check-api"><span>Document security check API</span></a></h2><h4 id="understand-the-api-requirements-and-specifications" tabindex="-1"><a class="header-anchor" href="#understand-the-api-requirements-and-specifications"><span>Understand the API requirements and specifications</span></a></h4><h4 id="write-interface-document-1" tabindex="-1"><a class="header-anchor" href="#write-interface-document-1"><span>Write interface document</span></a></h4><h4 id="develop-the-api-for-word-and-excel-file-security-check-by-using-apache-poi-library" tabindex="-1"><a class="header-anchor" href="#develop-the-api-for-word-and-excel-file-security-check-by-using-apache-poi-library"><span>Develop the API for Word and Excel file security check by using Apache POI library</span></a></h4><h4 id="generate-test-cases-and-implement-the-test-cases" tabindex="-1"><a class="header-anchor" href="#generate-test-cases-and-implement-the-test-cases"><span>Generate test cases and implement the test cases</span></a></h4><h4 id="reconstruct-the-code-to-reduce-the-complexity-and-satisfy-the-coding-standard" tabindex="-1"><a class="header-anchor" href="#reconstruct-the-code-to-reduce-the-complexity-and-satisfy-the-coding-standard"><span>Reconstruct the code to reduce the complexity and satisfy the coding standard</span></a></h4><h2 id="tecnical-points" tabindex="-1"><a class="header-anchor" href="#tecnical-points"><span>Tecnical points</span></a></h2><h4 id="_1-notnull-annotation" tabindex="-1"><a class="header-anchor" href="#_1-notnull-annotation"><span>1. @NotNull annotation</span></a></h4><ul><li>The @NotNull annotation is used to mark a parameter as not null. It is used to ensure that the parameter is not null before calling the method. If the parameter is null, an exception will be thrown.</li></ul><h4 id="_2-jsonproperty-annotation" tabindex="-1"><a class="header-anchor" href="#_2-jsonproperty-annotation"><span>2. @JsonProperty annotation</span></a></h4><ul><li>The @JsonProperty annotation is used to map a field or a getter method to a JSON property. It is used to specify the JSON property name that should be used when serializing the object to JSON.</li></ul><h4 id="_3-what-is-fallback-routing" tabindex="-1"><a class="header-anchor" href="#_3-what-is-fallback-routing"><span>3. What is fallback routing?</span></a></h4><ul><li>Fallback routing is a feature of Spring Cloud Gateway that allows you to define a fallback URI for a route. If the request to the primary URI fails, the request is then routed to the fallback URI.</li></ul><h4 id="_4-what-is-stringjoiner-class-in-java" tabindex="-1"><a class="header-anchor" href="#_4-what-is-stringjoiner-class-in-java"><span>4. What is StringJoiner class in Java?</span></a></h4><ul><li>The StringJoiner class is used to concatenate strings in Java. It is a mutable class that can be used to build a string by adding individual strings or other objects. The StringJoiner class is useful when you need to concatenate a large number of strings into a single string. It was introduced in Java 1.8.</li></ul><h4 id="_5-computeifabsent-method" tabindex="-1"><a class="header-anchor" href="#_5-computeifabsent-method"><span>5. ComputeIfAbsent method</span></a></h4><ul><li>If the key is not present in the map, the computeIfAbsent method is used to compute the value for that key and add it to the map. If the key is already present in the map, the existing value is returned.</li></ul><h4 id="_6-atomicinteger" tabindex="-1"><a class="header-anchor" href="#_6-atomicinteger"><span>6. AtomicInteger</span></a></h4><ul><li>The AtomicInteger class is a wrapper class for an integer that is designed to be used in a multi-threaded environment. It provides atomic operations such as increment, decrement, and compareAndSet, which are used to safely update the value of the integer.</li></ul><h4 id="_7-record-class-in-java-14" tabindex="-1"><a class="header-anchor" href="#_7-record-class-in-java-14"><span>7. Record class in Java 14</span></a></h4><ul><li>The Record class is a new feature in Java 14 that allows you to create immutable classes. It is similar to a data class, but it is more flexible and can have methods and constructors. It is a preview feature and is not available in all Java versions.</li></ul><h4 id="_8-modelattribute-annotation" tabindex="-1"><a class="header-anchor" href="#_8-modelattribute-annotation"><span>8. @ModelAttribute annotation</span></a></h4><ul><li>The @ModelAttribute annotation is used to bind a method parameter to a model attribute in a Spring MVC controller. It is used to bind the value of a request parameter to a method parameter, which is then available in the controller method.</li></ul><h4 id="_9-considerations-for-designing-database-tables" tabindex="-1"><a class="header-anchor" href="#_9-considerations-for-designing-database-tables"><span>9. Considerations for Designing Database Tables:</span></a></h4><ol><li>Always add comments for fields and tables.</li><li>Use bigint unsigned for auto-increment primary keys.</li></ol><div class="hint-container info"><p class="hint-container-title">Info</p><p>Reason: bigint unsigned ensures that the auto-increment primary key will not overflow and will not have negative values.</p></div><ol start="3"><li>Do not use timestamp, as it can only be used until the year 2038.</li><li>Generally, avoid using large objects like text.</li></ol>',32)]))}]]),s=JSON.parse('{"path":"/posts/cmb/5.html","title":"Week 5","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2025-01-06T00:00:00.000Z","category":["Internship journal"],"tag":["China Merchant Bank"],"description":"Week 5 General notice API Write interface document Read the API documentation and source code Modify the source code to let users can customize the robot sender Document securit...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/cmb/5.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"Week 5"}],["meta",{"property":"og:description","content":"Week 5 General notice API Write interface document Read the API documentation and source code Modify the source code to let users can customize the robot sender Document securit..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-11T07:32:35.000Z"}],["meta",{"property":"article:tag","content":"China Merchant Bank"}],["meta",{"property":"article:published_time","content":"2025-01-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-11T07:32:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Week 5\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-01-06T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-11T07:32:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\"}]}"]]},"headers":[{"level":2,"title":"General notice API","slug":"general-notice-api","link":"#general-notice-api","children":[]},{"level":2,"title":"Document security check API","slug":"document-security-check-api","link":"#document-security-check-api","children":[]},{"level":2,"title":"Tecnical points","slug":"tecnical-points","link":"#tecnical-points","children":[]}],"git":{"createdTime":1736580755000,"updatedTime":1736580755000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":1}]},"readingTime":{"minutes":1.76,"words":528},"filePathRelative":"posts/cmb/5.md","localizedDate":"January 6, 2025","excerpt":"\\n<h2>General notice API</h2>\\n<h4>Write interface document</h4>\\n<h4>Read the API documentation and source code</h4>\\n<h4>Modify the source code to let users can customize the robot sender</h4>\\n<h2>Document security check API</h2>\\n<h4>Understand the API requirements and specifications</h4>\\n<h4>Write interface document</h4>","autoDesc":true}')}}]);