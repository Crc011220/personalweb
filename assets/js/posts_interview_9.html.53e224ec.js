"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[7489],{6262:(e,i)=>{i.A=(e,i)=>{const n=e.__vccOpts||e;for(const[e,t]of i)n[e]=t;return n}},2648:(e,i,n)=>{n.r(i),n.d(i,{comp:()=>l,data:()=>o});var t=n(641);const a=n.p+"assets/img/RBAC.b53a670b.png",s={},l=(0,n(6262).A)(s,[["render",function(e,i){return(0,t.uX)(),(0,t.CE)("div",null,i[0]||(i[0]=[(0,t.Fv)('<h1 id="others" tabindex="-1"><a class="header-anchor" href="#others"><span>Others</span></a></h1><h1 id="single-sign-on-sso-and-authentication-guide" tabindex="-1"><a class="header-anchor" href="#single-sign-on-sso-and-authentication-guide"><span>Single Sign-On (SSO) and Authentication Guide</span></a></h1><h2 id="_1-single-sign-on-sso" tabindex="-1"><a class="header-anchor" href="#_1-single-sign-on-sso"><span>1. Single Sign-On (SSO)</span></a></h2><h3 id="definition" tabindex="-1"><a class="header-anchor" href="#definition"><span>Definition</span></a></h3><ul><li>Single Sign-On (SSO) is an authentication method</li><li>Allows users to access multiple systems with one set of credentials</li><li>Providing centralized login across different applications</li></ul><h3 id="sso-implementation-approach" tabindex="-1"><a class="header-anchor" href="#sso-implementation-approach"><span>SSO Implementation Approach</span></a></h3><p>I. User Access to System</p><ul><li>User visits other systems</li><li>Gateway checks token validity</li></ul><p>II. Token Validation</p><ul><li>If token is invalid</li><li>Returns 401 (Authentication Failed)</li><li>Frontend redirects to login page</li></ul><p>III. Login Process</p><ul><li>User sends login request</li><li>Server returns token to browser</li><li>Browser saves token in cookie</li></ul><p>IV. Accessing Other Services</p><ul><li>All subsequent requests must carry token</li><li>Gateway uniformly validates token</li><li>Routes to target service</li></ul><h2 id="_2-permission-authentication" tabindex="-1"><a class="header-anchor" href="#_2-permission-authentication"><span>2. Permission Authentication</span></a></h2><h3 id="backend-management-system-development-experience" tabindex="-1"><a class="header-anchor" href="#backend-management-system-development-experience"><span>Backend Management System Development Experience</span></a></h3><h4 id="rbac-permission-model" tabindex="-1"><a class="header-anchor" href="#rbac-permission-model"><span>RBAC Permission Model</span></a></h4><ul><li>5 Core Tables Relationship:</li></ul><ol><li>User Table</li><li>Role Table</li><li>Permission Table</li><li>User-Role Intermediate Table</li><li>Role-Permission Intermediate Table</li></ol><h3 id="authorization-frameworks" tabindex="-1"><a class="header-anchor" href="#authorization-frameworks"><span>Authorization Frameworks</span></a></h3><ul><li>Spring Security</li><li>Apache Shiro <img src="'+a+'" alt="RBAC.png" loading="lazy"></li></ul>',21)]))}]]),o=JSON.parse('{"path":"/posts/interview/9.html","title":"Others","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2024-11-24T00:00:00.000Z","category":["Learning Records"],"tag":["Technical Interview"],"description":"Others Single Sign-On (SSO) and Authentication Guide 1. Single Sign-On (SSO) Definition Single Sign-On (SSO) is an authentication method Allows users to access multiple systems ...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/interview/9.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"Others"}],["meta",{"property":"og:description","content":"Others Single Sign-On (SSO) and Authentication Guide 1. Single Sign-On (SSO) Definition Single Sign-On (SSO) is an authentication method Allows users to access multiple systems ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-26T10:44:31.000Z"}],["meta",{"property":"article:tag","content":"Technical Interview"}],["meta",{"property":"article:published_time","content":"2024-11-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-26T10:44:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Others\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-26T10:44:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\"}]}"]]},"headers":[{"level":2,"title":"1. Single Sign-On (SSO)","slug":"_1-single-sign-on-sso","link":"#_1-single-sign-on-sso","children":[{"level":3,"title":"Definition","slug":"definition","link":"#definition","children":[]},{"level":3,"title":"SSO Implementation Approach","slug":"sso-implementation-approach","link":"#sso-implementation-approach","children":[]}]},{"level":2,"title":"2. Permission Authentication","slug":"_2-permission-authentication","link":"#_2-permission-authentication","children":[{"level":3,"title":"Backend Management System Development Experience","slug":"backend-management-system-development-experience","link":"#backend-management-system-development-experience","children":[]},{"level":3,"title":"Authorization Frameworks","slug":"authorization-frameworks","link":"#authorization-frameworks","children":[]}]}],"git":{"createdTime":1732617871000,"updatedTime":1732617871000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":1}]},"readingTime":{"minutes":0.54,"words":162},"filePathRelative":"posts/interview/9.md","localizedDate":"November 24, 2024","excerpt":"\\n<h1>Single Sign-On (SSO) and Authentication Guide</h1>\\n<h2>1. Single Sign-On (SSO)</h2>\\n<h3>Definition</h3>\\n<ul>\\n<li>Single Sign-On (SSO) is an authentication method</li>\\n<li>Allows users to access multiple systems with one set of credentials</li>\\n<li>Providing centralized login across different applications</li>\\n</ul>","autoDesc":true}')}}]);