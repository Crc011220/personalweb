"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[3191],{4803:(e,i,a)=>{a.r(i),a.d(i,{comp:()=>d,data:()=>r});var t=a(641);const s=a.p+"assets/img/HDFS-Architecture.94f1542e.png",o=a.p+"assets/img/HDFS-Cluster.e8445a91.png",l=a.p+"assets/img/HDFS-File-System.531a80b4.png",n={},d=(0,a(6262).A)(n,[["render",function(e,i){return(0,t.uX)(),(0,t.CE)("div",null,i[0]||(i[0]=[(0,t.Fv)('<h1 id="hdfs" tabindex="-1"><a class="header-anchor" href="#hdfs"><span>HDFS</span></a></h1><h2 id="hdfs-architecture" tabindex="-1"><a class="header-anchor" href="#hdfs-architecture"><span>HDFS Architecture</span></a></h2><ul><li>Main Role: NameNode</li><li>Secondary Role: DataNode</li><li>Auxiliary Role: SecondaryNameNode</li></ul><p><strong>NameNode:</strong></p><ul><li>The main role in the HDFS system, it is an independent process.</li><li>Responsible for managing the entire HDFS file system.</li><li>Responsible for managing DataNodes.</li></ul><p><strong>DataNode:</strong></p><ul><li>The secondary role in the HDFS system, it is an independent process.</li><li>Primarily responsible for data storage, i.e., storing and retrieving data.</li></ul><p><strong>SecondaryNameNode:</strong></p><ul><li>An auxiliary to the NameNode, it is an independent process.</li><li>Mainly helps the NameNode with metadata organization tasks.<br><img src="'+s+'" alt="HDFS Architecture" loading="lazy"></li></ul><h2 id="open-port-9870" tabindex="-1"><a class="header-anchor" href="#open-port-9870"><span>Open Port 9870</span></a></h2><figure><img src="'+o+'" alt="HDFS Cluster" tabindex="0" loading="lazy"><figcaption>HDFS Cluster</figcaption></figure><h2 id="hdfs-commands" tabindex="-1"><a class="header-anchor" href="#hdfs-commands"><span>HDFS Commands</span></a></h2><p>HDFS, like the Linux system, is organized with <code>/</code> as the root directory.<br><img src="'+l+'" alt="HDFS File System" loading="lazy"></p><h4 id="how-to-distinguish-hdfs-and-linux-paths" tabindex="-1"><a class="header-anchor" href="#how-to-distinguish-hdfs-and-linux-paths"><span>How to distinguish HDFS and Linux paths?</span></a></h4><ul><li>Linux: file:///</li><li>HDFS: hdfs://namenode:port/</li><li>For example:</li><li>Linux: file:///usr/local/hello.txt</li><li>HDFS: hdfs://node1:8020/usr/local/hello.txt</li><li>The protocol headers file:/// or hdfs://node1:8020/ can be omitted.</li><li>Parameters requiring a Linux path will automatically be recognized as file://</li><li>Parameters requiring an HDFS path will automatically be recognized as hdfs://</li><li>Unless you explicitly need to write or not write to avoid bugs, generally, you don&#39;t need to write the protocol header.</li></ul><h3 id="hdfs-commands-new-version-usage-usage-hdfs-dfs-generic-options" tabindex="-1"><a class="header-anchor" href="#hdfs-commands-new-version-usage-usage-hdfs-dfs-generic-options"><span>HDFS Commands (New Version Usage), Usage: <code>hdfs dfs [generic options]</code></span></a></h3><h4 id="_1-create-a-directory" tabindex="-1"><a class="header-anchor" href="#_1-create-a-directory"><span>1. Create a directory</span></a></h4><p><code>hdfs dfs -mkdir [-p] &lt;path&gt; ...</code></p><ul><li>path is the directory to be created</li><li>-p option behaves like Linux mkdir -p, creating parent directories along the path.</li><li>e.g. hdfs fs -mkdir -p /ruochen/hadoop</li></ul><h4 id="_2-view-contents-of-a-specified-directory" tabindex="-1"><a class="header-anchor" href="#_2-view-contents-of-a-specified-directory"><span>2. View contents of a specified directory</span></a></h4><p><code>hdfs dfs -ls [-h] [-R] [&lt;path&gt; ...] </code></p><ul><li>path specifies the directory path</li><li>-h displays file size in a human-readable format</li><li>-R recursively views the specified directory and its subdirectories</li></ul><h4 id="_3-upload-files-to-a-specified-hdfs-directory" tabindex="-1"><a class="header-anchor" href="#_3-upload-files-to-a-specified-hdfs-directory"><span>3. Upload files to a specified HDFS directory</span></a></h4><p><code>hdfs dfs -put [-f] [-p] &lt;localsrc&gt; ... &lt;dst&gt;</code></p><ul><li>-f overwrites the target file (if it exists)</li><li>-p preserves access and modification times, ownership, and permissions.</li><li>localsrc is the local file system (on the client machine)</li><li>dst is the target file system (HDFS)</li><li>e.g. hdfs dfs -put file:///etc/profile hdfs://ruochen:8020/ruochen/hadoop/</li></ul><h4 id="_4-view-hdfs-file-content" tabindex="-1"><a class="header-anchor" href="#_4-view-hdfs-file-content"><span>4. View HDFS file content</span></a></h4><p><code>hdfs dfs -cat &lt;src&gt; ...</code></p><ul><li>hdfs dfs -cat /itcast/profile</li><li>For reading large files, you can use a pipe with more</li><li>hdfs dfs -cat <code>&lt;src&gt;</code> | more</li></ul><h4 id="_5-download-hdfs-files-to-local" tabindex="-1"><a class="header-anchor" href="#_5-download-hdfs-files-to-local"><span>5. Download HDFS files to local</span></a></h4><p><code>hdfs dfs -get [-f] [-p] &lt;src&gt; ... &lt;localdst&gt;</code></p><ul><li>Downloads files to a specified directory in the local file system, localdst must be a directory</li><li>-f overwrites the target file (if it exists)</li><li>-p preserves access and modification times, ownership, and permissions.</li></ul><h4 id="_6-copy-hdfs-files" tabindex="-1"><a class="header-anchor" href="#_6-copy-hdfs-files"><span>6. Copy HDFS files</span></a></h4><p><code>hdfs dfs -cp [-f] &lt;src&gt; ... &lt;dst&gt;</code> -f overwrites the target file (if it exists)</p><h4 id="_7-append-data-to-an-hdfs-file" tabindex="-1"><a class="header-anchor" href="#_7-append-data-to-an-hdfs-file"><span>7. Append data to an HDFS file</span></a></h4><p><code>hdfs dfs -appendToFile &lt;localsrc&gt; ... &lt;dst&gt;</code></p><ul><li>Appends the contents of all given local files to the specified dst file.</li><li>If dst does not exist, the file will be created.</li><li>If <code>&lt;localSrc&gt;</code> is -, input is read from standard input.</li></ul><h4 id="_8-move-hdfs-data" tabindex="-1"><a class="header-anchor" href="#_8-move-hdfs-data"><span>8. Move HDFS data</span></a></h4><p><code>hdfs dfs -mv &lt;src&gt; ... &lt;dst&gt;</code></p><ul><li>Moves files to the specified folder</li><li>This command can be used to move data and rename files</li></ul><h4 id="_9-delete-hdfs-data" tabindex="-1"><a class="header-anchor" href="#_9-delete-hdfs-data"><span>9. Delete HDFS data</span></a></h4><p><code>hdfs dfs -rm -r [-skipTrash] URI [URI ...]</code></p><ul><li>Deletes files or directories at the specified path</li><li>-skipTrash skips the trash and deletes directly</li><li>The trash feature is disabled by default; to enable it, configure it in core-site.xml</li></ul><p>More Commands: <a href="https://hadoop.apache.org/docs/r3.3.4/hadoop-project-dist/hadoop-common/FileSystemShell.html" target="_blank" rel="noopener noreferrer">Hadoop Command</a></p><p>In Jetbrains products, plugins can be installed, among which the Big Data Tools plugin can help us easily operate HDFS, such as<br> IntelliJ IDEA (Java IDE)<br> PyCharm (Python IDE)<br> DataGrip (SQL IDE)<br> All support the Bigdata Tool plugin.</p><h3 id="hdfs-storage-principles" tabindex="-1"><a class="header-anchor" href="#hdfs-storage-principles"><span>HDFS Storage Principles</span></a></h3><ul><li>Data stored in HDFS is distributed, meaning each server node is responsible for a part of the data.</li><li>Data in HDFS is stored in blocks.</li><li>The default replication factor is 3, meaning each data block has 3 replicas. This can be modified in the hdfs-site.xml file or specified when creating a file.</li><li>The fsck command checks the replication factor of files.</li></ul><h3 id="hdfs-write-process" tabindex="-1"><a class="header-anchor" href="#hdfs-write-process"><span>HDFS Write Process</span></a></h3><ol><li>The client sends a request to the NameNode.</li><li>The NameNode checks permissions and available space, and if conditions are met, allows writing and informs the client of the DataNode address for writing.</li><li>The client sends data packets to the specified DataNode.</li><li>The DataNode receiving the data simultaneously completes the replication of data blocks, distributing the received data to other DataNodes.</li><li>As shown in the diagram, DataNode1 replicates to DataNode2, then based on DataNode2, replicates to DataNode3 and DataNode4.</li><li>Once writing is complete, the client notifies the NameNode, and the NameNode records the metadata.</li></ol>',48)]))}]]),r=JSON.parse('{"path":"/posts/hadoop/HDFS.html","title":"HDFS","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2025-03-14T00:00:00.000Z","category":["Learning Records"],"tag":["Hadoop"],"description":"HDFS HDFS Architecture Main Role: NameNode Secondary Role: DataNode Auxiliary Role: SecondaryNameNode NameNode: The main role in the HDFS system, it is an independent process. R...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/hadoop/HDFS.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"HDFS"}],["meta",{"property":"og:description","content":"HDFS HDFS Architecture Main Role: NameNode Secondary Role: DataNode Auxiliary Role: SecondaryNameNode NameNode: The main role in the HDFS system, it is an independent process. R..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-03-16T11:07:47.000Z"}],["meta",{"property":"article:tag","content":"Hadoop"}],["meta",{"property":"article:published_time","content":"2025-03-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-16T11:07:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HDFS\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-14T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-16T11:07:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"HDFS Architecture","slug":"hdfs-architecture","link":"#hdfs-architecture","children":[]},{"level":2,"title":"Open Port 9870","slug":"open-port-9870","link":"#open-port-9870","children":[]},{"level":2,"title":"HDFS Commands","slug":"hdfs-commands","link":"#hdfs-commands","children":[{"level":3,"title":"HDFS Commands (New Version Usage), Usage: hdfs dfs [generic options]","slug":"hdfs-commands-new-version-usage-usage-hdfs-dfs-generic-options","link":"#hdfs-commands-new-version-usage-usage-hdfs-dfs-generic-options","children":[]},{"level":3,"title":"HDFS Storage Principles","slug":"hdfs-storage-principles","link":"#hdfs-storage-principles","children":[]},{"level":3,"title":"HDFS Write Process","slug":"hdfs-write-process","link":"#hdfs-write-process","children":[]}]}],"git":{"createdTime":1742122096000,"updatedTime":1742123267000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":2}]},"readingTime":{"minutes":2.57,"words":771},"filePathRelative":"posts/hadoop/HDFS.md","localizedDate":"March 14, 2025","excerpt":"\\n<h2>HDFS Architecture</h2>\\n<ul>\\n<li>Main Role: NameNode</li>\\n<li>Secondary Role: DataNode</li>\\n<li>Auxiliary Role: SecondaryNameNode</li>\\n</ul>\\n<p><strong>NameNode:</strong></p>\\n<ul>\\n<li>The main role in the HDFS system, it is an independent process.</li>\\n<li>Responsible for managing the entire HDFS file system.</li>\\n<li>Responsible for managing DataNodes.</li>\\n</ul>","autoDesc":true}')},6262:(e,i)=>{i.A=(e,i)=>{const a=e.__vccOpts||e;for(const[e,t]of i)a[e]=t;return a}}}]);