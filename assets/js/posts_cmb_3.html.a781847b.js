"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[3942],{6262:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,r]of t)a[e]=r;return a}},6869:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>o,data:()=>s});var r=a(641);const n={},o=(0,a(6262).A)(n,[["render",function(e,t){return(0,r.uX)(),(0,r.CE)("div",null,t[0]||(t[0]=[(0,r.Fv)('<h1 id="week-3" tabindex="-1"><a class="header-anchor" href="#week-3"><span>Week 3</span></a></h1><h2 id="check-requirements-with-the-supervisor" tabindex="-1"><a class="header-anchor" href="#check-requirements-with-the-supervisor"><span>Check requirements with the supervisor</span></a></h2><h4 id="modify-the-logic" tabindex="-1"><a class="header-anchor" href="#modify-the-logic"><span>Modify the logic</span></a></h4><h4 id="optimize-the-sql-logic" tabindex="-1"><a class="header-anchor" href="#optimize-the-sql-logic"><span>Optimize the SQL logic</span></a></h4><h2 id="general-email-api-on-faas-platform" tabindex="-1"><a class="header-anchor" href="#general-email-api-on-faas-platform"><span>General email API on FaaS platform</span></a></h2><h4 id="learn-the-basic-concepts-of-faas-platform-in-china-merchant-bank" tabindex="-1"><a class="header-anchor" href="#learn-the-basic-concepts-of-faas-platform-in-china-merchant-bank"><span>Learn the basic concepts of FaaS platform in China Merchant Bank</span></a></h4><h4 id="create-a-new-function-in-faas-service" tabindex="-1"><a class="header-anchor" href="#create-a-new-function-in-faas-service"><span>Create a new function in FaaS service</span></a></h4><h4 id="understand-the-api-structure" tabindex="-1"><a class="header-anchor" href="#understand-the-api-structure"><span>Understand the API structure</span></a></h4><h4 id="deploy-a-function-to-faas-service" tabindex="-1"><a class="header-anchor" href="#deploy-a-function-to-faas-service"><span>Deploy a function to FaaS service</span></a></h4><h4 id="log-into-database" tabindex="-1"><a class="header-anchor" href="#log-into-database"><span>Log into database</span></a></h4><h4 id="test-the-function" tabindex="-1"><a class="header-anchor" href="#test-the-function"><span>Test the function</span></a></h4><h2 id="connect-api-with-trace-platform" tabindex="-1"><a class="header-anchor" href="#connect-api-with-trace-platform"><span>Connect API with trace platform</span></a></h2><h4 id="learn-the-basic-concepts-of-trace-platform-in-china-merchant-bank" tabindex="-1"><a class="header-anchor" href="#learn-the-basic-concepts-of-trace-platform-in-china-merchant-bank"><span>Learn the basic concepts of trace platform in China Merchant Bank</span></a></h4><h4 id="integrate-the-api-with-trace-platform" tabindex="-1"><a class="header-anchor" href="#integrate-the-api-with-trace-platform"><span>Integrate the API with trace platform</span></a></h4><h2 id="general-excel-import-and-export-api" tabindex="-1"><a class="header-anchor" href="#general-excel-import-and-export-api"><span>General Excel import and export API</span></a></h2><h4 id="reconstruct-the-excel-import-and-export-api" tabindex="-1"><a class="header-anchor" href="#reconstruct-the-excel-import-and-export-api"><span>Reconstruct the Excel import and export API</span></a></h4><h2 id="tecnical-points" tabindex="-1"><a class="header-anchor" href="#tecnical-points"><span>Tecnical points</span></a></h2><h4 id="_1-what-is-faas" tabindex="-1"><a class="header-anchor" href="#_1-what-is-faas"><span>1. What is FaaS?</span></a></h4><p>FaaS is a cloud computing service that allows developers to upload their code and run it on the cloud without having to worry about managing or scaling the infrastructure. It is a serverless computing platform that allows developers to write and run code without worrying about the underlying infrastructure.</p><h4 id="_2-resttemplate-in-spring" tabindex="-1"><a class="header-anchor" href="#_2-resttemplate-in-spring"><span>2. RestTemplate in Spring</span></a></h4><p>RestTemplate is a Spring class that allows developers to make HTTP requests to RESTful web services. It provides a simple way to perform HTTP requests and handle responses.</p><ul><li>exchange() method: This method allows developers to make a request to a RESTful web service and return the response as a ResponseEntity object.</li><li>getForObject() method: This method allows developers to make a GET request to a RESTful web service and return the response as an object of the specified type.</li><li>postForObject() method: This method allows developers to make a POST request to a RESTful web service and return the response as an object of the specified type.</li><li>getForEntity() method: This method allows developers to make a GET request to a RESTful web service and return the response as a ResponseEntity object.</li><li>postForEntity() method: This method allows developers to make a POST request to a RESTful web service and return the response as a ResponseEntity object.</li></ul><h4 id="_3-objectmapper" tabindex="-1"><a class="header-anchor" href="#_3-objectmapper"><span>3. ObjectMapper</span></a></h4><p>ObjectMapper is a class in the Jackson library that allows developers to convert Java objects to JSON and vice versa. It provides a simple way to serialize and deserialize Java objects to and from JSON.</p><ul><li>objectMapper.readValue() method: This method allows developers to convert a JSON string to a Java object.</li><li>objectMapper.writeValueAsString() method: This method allows developers to convert a Java object to a JSON string.</li></ul><h4 id="_4-httpservletrequest" tabindex="-1"><a class="header-anchor" href="#_4-httpservletrequest"><span>4. HttpServletRequest</span></a></h4><p>HttpServletRequest is a class in the Spring framework that represents an HTTP request. It provides a way to get information about the request, such as the request method, headers, and parameters.</p><ul><li>httpServletRequest.getMethod() method: This method allows developers to get the HTTP method of the request.</li><li>httpServletRequest.getHeader() method: This method allows developers to get a header of the request.</li><li>httpServletRequest.getParameter() method: This method allows developers to get a parameter of the request.</li><li>httpServletRequest.getInputStream() method: This method allows developers to get the input stream of the HTTP request. It allows developers to read the request body as a byte array.</li></ul><h4 id="_5-system-getenv-method" tabindex="-1"><a class="header-anchor" href="#_5-system-getenv-method"><span>5. System.getenv() method</span></a></h4><p>System.getenv() method is a method in the Java API that allows developers to get environment variables. It returns a map of environment variables and their values.</p>',30)]))}]]),s=JSON.parse('{"path":"/posts/cmb/3.html","title":"Week 3","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2024-12-16T00:00:00.000Z","category":["Internship journal"],"tag":["China Merchant Bank"],"description":"Week 3 Check requirements with the supervisor Modify the logic Optimize the SQL logic General email API on FaaS platform Learn the basic concepts of FaaS platform in China Merch...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/cmb/3.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"Week 3"}],["meta",{"property":"og:description","content":"Week 3 Check requirements with the supervisor Modify the logic Optimize the SQL logic General email API on FaaS platform Learn the basic concepts of FaaS platform in China Merch..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-19T11:50:01.000Z"}],["meta",{"property":"article:tag","content":"China Merchant Bank"}],["meta",{"property":"article:published_time","content":"2024-12-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-19T11:50:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Week 3\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-19T11:50:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\"}]}"]]},"headers":[{"level":2,"title":"Check requirements with the supervisor","slug":"check-requirements-with-the-supervisor","link":"#check-requirements-with-the-supervisor","children":[]},{"level":2,"title":"General email API on FaaS platform","slug":"general-email-api-on-faas-platform","link":"#general-email-api-on-faas-platform","children":[]},{"level":2,"title":"Connect API with trace platform","slug":"connect-api-with-trace-platform","link":"#connect-api-with-trace-platform","children":[]},{"level":2,"title":"General Excel import and export API","slug":"general-excel-import-and-export-api","link":"#general-excel-import-and-export-api","children":[]},{"level":2,"title":"Tecnical points","slug":"tecnical-points","link":"#tecnical-points","children":[]}],"git":{"createdTime":1734336988000,"updatedTime":1734609001000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":4}]},"readingTime":{"minutes":1.71,"words":512},"filePathRelative":"posts/cmb/3.md","localizedDate":"December 16, 2024","excerpt":"\\n<h2>Check requirements with the supervisor</h2>\\n<h4>Modify the logic</h4>\\n<h4>Optimize the SQL logic</h4>\\n<h2>General email API on FaaS platform</h2>\\n<h4>Learn the basic concepts of FaaS platform in China Merchant Bank</h4>\\n<h4>Create a new function in FaaS service</h4>\\n<h4>Understand the API structure</h4>","autoDesc":true}')}}]);