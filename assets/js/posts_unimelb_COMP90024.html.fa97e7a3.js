"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[9679],{6262:(e,t)=>{t.A=(e,t)=>{const i=e.__vccOpts||e;for(const[e,s]of t)i[e]=s;return i}},8213:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>c,data:()=>h});var s=i(641);const a=i.p+"assets/img/Amdhal_vs_Gustafsons_Law.a70e6e87.png",o=i.p+"assets/img/HPC_Cluster_Design.2a5e775c.png",n=i.p+"assets/img/openstack.e4d4acad.png",d=i.p+"assets/img/containerization.5e1c5957.png",l=i.p+"assets/img/evolution.be67dd8a.png",r={},c=(0,i(6262).A)(r,[["render",function(e,t){return(0,s.uX)(),(0,s.CE)("div",null,t[0]||(t[0]=[(0,s.Fv)('<h1 id="cluster-and-cloud-computing-comp90024" tabindex="-1"><a class="header-anchor" href="#cluster-and-cloud-computing-comp90024"><span>Cluster and Cloud Computing (COMP90024)</span></a></h1><h2 id="week-1" tabindex="-1"><a class="header-anchor" href="#week-1"><span>Week 1</span></a></h2><h3 id="cloud-characteristics" tabindex="-1"><a class="header-anchor" href="#cloud-characteristics"><span>Cloud Characteristics</span></a></h3><p>– On-demand self-service . A consumer can provision computing capabilities as needed without requiring human interaction with each service provider. – Networked access . Capabilities are available over the network and accessed through standard mechanisms that promote use by heterogeneous client platforms.</p><ul><li>Resource pooling . The provider&#39;s computing resources are pooled to serve multiple consumers using a multi-tenant model potentially with different physical and virtual resources that can be dynamically assigned and reassigned according to consumer demand. – Rapid elasticity . Capabilities can be elastically provisioned and released, in some cases automatically, to scale rapidly upon demand. – Measured service . Cloud systems automatically control and optimize resource use by leveraging a metering capability at some level of abstraction appropriate to the type of service.</li></ul><h3 id="grid-computing" tabindex="-1"><a class="header-anchor" href="#grid-computing"><span>Grid Computing</span></a></h3><h2 id="week-2" tabindex="-1"><a class="header-anchor" href="#week-2"><span>Week 2</span></a></h2><h3 id="horizontal-and-vertical-scaling" tabindex="-1"><a class="header-anchor" href="#horizontal-and-vertical-scaling"><span>Horizontal and Vertical Scaling</span></a></h3><ul><li>Horizontal scaling refers to adding more resources to a system, easy to add more, cost not so high.</li><li>Vertical scaling refers to increasing the resources of a system, more complex, cost high.</li></ul><figure><img src="'+a+'" alt="Amdhal vs. Gustafson&#39;s Law" tabindex="0" loading="lazy"><figcaption>Amdhal vs. Gustafson&#39;s Law</figcaption></figure><h3 id="categories-of-flynn-s-taxonomy" tabindex="-1"><a class="header-anchor" href="#categories-of-flynn-s-taxonomy"><span>Categories of Flynn&#39;s Taxonomy</span></a></h3><table><thead><tr><th>Type</th><th>Full Name</th><th>Instruction Stream</th><th>Data Stream</th><th>Example</th></tr></thead><tbody><tr><td><strong>SISD</strong></td><td>Single Instruction, Single Data</td><td>Single</td><td>Single</td><td>Traditional single-core CPU</td></tr><tr><td><strong>SIMD</strong></td><td>Single Instruction, Multiple Data</td><td>Single</td><td>Multiple</td><td>GPU, vector processors</td></tr><tr><td><strong>MISD</strong></td><td>Multiple Instruction, Single Data</td><td>Multiple</td><td>Single</td><td>Fault-tolerant systems (rare)</td></tr><tr><td><strong>MIMD</strong></td><td>Multiple Instruction, Multiple Data</td><td>Multiple</td><td>Multiple</td><td>Multi-core CPUs, distributed systems</td></tr></tbody></table><hr><h3 id="approaches-for-parallelism-where-and-how" tabindex="-1"><a class="header-anchor" href="#approaches-for-parallelism-where-and-how"><span>Approaches for Parallelism (where and how)</span></a></h3><p>– Explicit (openMP / MPI) vs Implicit parallelism – Hardware – Operating System – Software/Applications – Some or all of these</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>Message Passing Interface (MPI) is a standardized and portable message-passing system designed to function on a wide range of parallel computers.</p></div><h3 id="erroneous-assumptions-of-distributed-systems" tabindex="-1"><a class="header-anchor" href="#erroneous-assumptions-of-distributed-systems"><span>Erroneous Assumptions of Distributed Systems</span></a></h3><ol><li>The network is reliable</li><li>Latency is zero</li><li>Bandwidth is infinite</li><li>The network is secure</li><li>Topology doesn&#39;t change</li><li>There is one administrator</li><li>Transport cost is zero</li><li>The network is homogeneous</li><li>Time is ubiquitous</li></ol><h2 id="week-3" tabindex="-1"><a class="header-anchor" href="#week-3"><span>Week 3</span></a></h2><figure><img src="'+o+'" alt="HPC Cluster Design" tabindex="0" loading="lazy"><figcaption>HPC Cluster Design</figcaption></figure><h3 id="amdahl-s-law-and-gustafson-s-law" tabindex="-1"><a class="header-anchor" href="#amdahl-s-law-and-gustafson-s-law"><span>Amdahl&#39;s Law and Gustafson&#39;s Law</span></a></h3><h4 id="🌟-key-differences" tabindex="-1"><a class="header-anchor" href="#🌟-key-differences"><span>🌟 <strong>Key Differences</strong></span></a></h4><table><thead><tr><th>Law</th><th>Assumption</th><th>Best Use Case</th><th>Result</th></tr></thead><tbody><tr><td><strong>Amdahl&#39;s Law</strong></td><td>Fixed problem size</td><td>Small-scale problems, focus on bottlenecks</td><td>Speedup limited by the serial part</td></tr><tr><td><strong>Gustafson&#39;s Law</strong></td><td>Scalable problem size</td><td>Large-scale problems, focus on parallel efficiency</td><td>Speedup can scale nearly linearly with the number of processors</td></tr></tbody></table><p><strong>If you can make use of parallelisation you should make use of it! It will always generate some benefit, and the larger the problem the bigger the gain.</strong></p><h3 id="environment-modules" tabindex="-1"><a class="header-anchor" href="#environment-modules"><span>Environment Modules</span></a></h3><p>Environment Modules is a tool used to dynamically manage and configure the user’s shell environment in Unix-like systems. It is widely used in High-Performance Computing (HPC) environments to simplify the use of software packages and manage different software versions without conflicts.</p><p>Modules work by modifying environment variables (e.g., <code>PATH</code>, <code>LD_LIBRARY_PATH</code>, <code>MANPATH</code>, etc.) when a module is loaded or unloaded. This allows users to switch between different versions of the same software easily without modifying the system configuration.</p><hr><h3 id="🛠️-common-module-commands" tabindex="-1"><a class="header-anchor" href="#🛠️-common-module-commands"><span>🛠️ <strong>Common <code>module</code> Commands</strong></span></a></h3><table><thead><tr><th>Command</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><code>module help</code></td><td>Displays help information about the <code>module</code> command, including available options and subcommands.</td><td><code>module help</code></td></tr><tr><td><code>module avail</code></td><td>Lists all available modules in the system.</td><td><code>module avail</code></td></tr><tr><td><code>module whatis &lt;modulefile&gt;</code></td><td>Shows a brief description of the specified module.</td><td><code>module whatis gcc</code></td></tr><tr><td><code>module display &lt;modulefile&gt;</code></td><td>Displays detailed information about what a module will modify in your environment (e.g., <code>PATH</code>, <code>MANPATH</code>, etc.).</td><td><code>module display gcc/10.2.0</code></td></tr><tr><td><code>module load &lt;modulefile&gt;</code></td><td>Loads the specified module and updates the environment accordingly.</td><td><code>module load gcc/10.2.0</code></td></tr><tr><td><code>module unload &lt;modulefile&gt;</code></td><td>Unloads the specified module and resets the environment.</td><td><code>module unload gcc/10.2.0</code></td></tr><tr><td><code>module list</code></td><td>Lists all currently loaded modules.</td><td><code>module list</code></td></tr><tr><td><code>module purge</code></td><td>Unloads all currently loaded modules.</td><td><code>module purge</code></td></tr><tr><td><code>module swap &lt;old_module&gt; &lt;new_module&gt;</code></td><td>Unloads the old module and loads the new one in a single step.</td><td><code>module swap gcc/9.3.0 gcc/10.2.0</code></td></tr><tr><td><code>module save &lt;name&gt;</code></td><td>Saves the current module environment as a named collection.</td><td><code>module save my_environment</code></td></tr><tr><td><code>module restore &lt;name&gt;</code></td><td>Restores a previously saved module collection.</td><td><code>module restore my_environment</code></td></tr></tbody></table><hr><h3 id="🛠️-common-slurm-commands" tabindex="-1"><a class="header-anchor" href="#🛠️-common-slurm-commands"><span>🛠️ <strong>Common <code>slurm</code> Commands</strong></span></a></h3><table><thead><tr><th>Command</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><code>sbatch</code></td><td>Submit a job</td><td><code>sbatch job.slurm</code></td></tr><tr><td><code>squeue</code></td><td>View job status</td><td><code>squeue -u &lt;username&gt;</code></td></tr><tr><td><code>scancel</code></td><td>Cancel a job</td><td><code>scancel 12345</code></td></tr><tr><td><code>sinfo</code></td><td>View node status</td><td><code>sinfo</code></td></tr><tr><td><code>sacct</code></td><td>View job history</td><td><code>sacct -u username</code></td></tr><tr><td><code>sstat</code></td><td>View running job status</td><td><code>sstat 12345</code></td></tr><tr><td><code>scontrol</code></td><td>Manage jobs, nodes, partitions</td><td><code>scontrol show job 12345</code></td></tr><tr><td><code>sprio</code></td><td>View job priority</td><td><code>sprio</code></td></tr><tr><td><code>srun</code></td><td>Run a command interactively</td><td><code>srun --pty bash</code></td></tr><tr><td><code>sinteractive</code></td><td>Start an interactive session</td><td><code>sinteractive -n 4 -t 2:00:00 --mem=8G</code></td></tr></tbody></table><h3 id="slurm-job-scripts" tabindex="-1"><a class="header-anchor" href="#slurm-job-scripts"><span>Slurm Job Scripts</span></a></h3><p>Example</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#SBATCH --job-name=myjob        # 作业名</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#SBATCH --output=output.txt     # 标准输出文件</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#SBATCH --error=error.txt       # 标准错误输出文件</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#SBATCH --ntasks=1              # 任务数</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#SBATCH --cpus-per-task=4      # 每个任务的CPU核数</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#SBATCH --mem=4GB               # 分配的内存</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#SBATCH --time=01:00:00         # 最大运行时间（1小时）</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#SBATCH --partition=standard    # 分区名称</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 下面是实际执行的命令</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Starting my job...&quot;</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">srun</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> my_program</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> arg1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> arg2</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 执行的程序及参数</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p><h3 id="some-linux-commands" tabindex="-1"><a class="header-anchor" href="#some-linux-commands"><span>Some Linux Commands</span></a></h3><table><thead><tr><th><strong>Command</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td><code>touch &lt;filename&gt;</code></td><td>Creates an empty file. If the file already exists, it updates the file&#39;s timestamp.</td></tr><tr><td><code>scp &lt;source&gt; &lt;destination&gt;</code></td><td>Securely copies files or directories to/from a remote host.</td></tr><tr><td><code>diff &lt;file1&gt; &lt;file2&gt;</code></td><td>Compares the differences between two files.</td></tr><tr><td><code>sdiff &lt;file1&gt; &lt;file2&gt;</code></td><td>Displays the differences between two files side by side.</td></tr><tr><td><code>comm &lt;file1&gt; &lt;file2&gt;</code></td><td>Compares two sorted files and outputs common and different lines.</td></tr><tr><td><code>find &lt;path&gt; &lt;options&gt;</code></td><td>Searches for files or directories within the specified path.</td></tr><tr><td><code>grep &lt;pattern&gt; &lt;file&gt;</code></td><td>Searches for lines in a file that match a given pattern.</td></tr><tr><td><code>tar -xvfh &lt;archive&gt;</code></td><td>Extracts a <code>.tar</code> file and shows the file list.</td></tr><tr><td><code>ls -d &lt;path&gt;</code></td><td>Lists only the directory itself, not its contents.</td></tr><tr><td><code>cut &lt;options&gt;</code></td><td>Extracts specific columns from text.</td></tr><tr><td><code>paste &lt;file1&gt; &lt;file2&gt;</code></td><td>Merges the contents of two files side by side by columns.</td></tr><tr><td>`ls</td><td>wc -l`</td></tr><tr><td><code>tar -xvfh &lt;archive.tar&gt;</code></td><td>Extracts a <code>.tar</code> archive and shows detailed information.</td></tr><tr><td><code>tar -cvf &lt;archive.tar&gt; &lt;files&gt;</code></td><td>Creates a <code>.tar</code> archive.</td></tr><tr><td><code>ls -l</code></td><td>Lists files in the current directory with detailed information like permissions, size, and modified time.</td></tr><tr><td><code>tar -cvf &lt;archive.tar&gt; &lt;files&gt;</code></td><td>Creates a <code>.tar</code> archive.</td></tr><tr><td><code>ls -l</code></td><td>Displays detailed information about files in the current directory.</td></tr><tr><td><code>tar -xvfh archive.tar</code></td><td>Extracts the contents of a <code>.tar</code> file and shows the files being extracted.</td></tr><tr><td>`ls</td><td>wc -l`</td></tr><tr><td><code>tar -cvf archive.tar</code></td><td>Creates a <code>.tar</code> file from specified files.</td></tr><tr><td><code>ls -d */</code></td><td>Lists only the subdirectories in the current directory.</td></tr><tr><td><code>cut -f1 -d&quot;:&quot; &lt;file&gt;</code></td><td>Extracts the first column of data before the colon (😃 delimiter in a file.</td></tr></tbody></table></div><h2 id="week-4" tabindex="-1"><a class="header-anchor" href="#week-4"><span>Week 4</span></a></h2><h3 id="public-clouds" tabindex="-1"><a class="header-anchor" href="#public-clouds"><span>Public Clouds</span></a></h3><h4 id="pros" tabindex="-1"><a class="header-anchor" href="#pros"><span>Pros</span></a></h4><p>– Utility computing – Can focus on core business – Cost-effective – “Right-sizing” – Democratisation of computing</p><h4 id="cons" tabindex="-1"><a class="header-anchor" href="#cons"><span>Cons</span></a></h4><p>– Security – Loss of control – Possible lock-in – Dependency of Cloud provider continued existence</p><h3 id="private-on-premise-clouds" tabindex="-1"><a class="header-anchor" href="#private-on-premise-clouds"><span>Private (on premise) Clouds</span></a></h3><h4 id="pros-1" tabindex="-1"><a class="header-anchor" href="#pros-1"><span>Pros</span></a></h4><p>– Control – Consolidation of resources – Easier to secure – More trust</p><h4 id="cons-1" tabindex="-1"><a class="header-anchor" href="#cons-1"><span>Cons</span></a></h4><p>– Relevance to core business? e.g., Netflix -&gt;Amazon – Staff/management overheads – Hardware obsolescence – Over/under utilisation challenges – (Effort and cost of establishing a data centre)</p><h3 id="openstack" tabindex="-1"><a class="header-anchor" href="#openstack"><span>OpenStack</span></a></h3><ul><li>Open Source: OpenStack is a completely open-source cloud computing platform, and anyone can download, install, and modify the source code. It allows enterprises to build and manage their own cloud infrastructure in private data centers with full control.</li><li>Deployment: OpenStack is typically deployed on an organization&#39;s own hardware or can be deployed on any supported hardware (including virtual machines). Therefore, it is suitable for private cloud and hybrid cloud deployments.</li><li>Highly Customizable: Being open-source, OpenStack allows users to highly customize according to their needs.</li><li>Primarily provides Infrastructure as a Service (IaaS) functionalities such as computing, storage, and networking.</li><li>Offers services like Nova (compute), Swift (object storage), Neutron (networking), Cinder (block storage), Keystone (identity management), etc.</li><li>Requires enterprises to manage and maintain their services themselves. <img src="'+n+'" alt="OpenStack Architecture" loading="lazy"></li></ul><h2 id="week-5" tabindex="-1"><a class="header-anchor" href="#week-5"><span>Week 5</span></a></h2><p><img src="'+d+'" alt="Virutalization vs. Containerization.png" loading="lazy"><img src="'+l+'" alt="Evolution" loading="lazy"></p><h3 id="container-orchestration-tools" tabindex="-1"><a class="header-anchor" href="#container-orchestration-tools"><span>Container Orchestration Tools</span></a></h3><ul><li>Container orchestration technologies provide a framework for integrating and managing containers at scale</li></ul><ol><li>Container orchestration technologies feature</li></ol><ul><li>Networking</li><li>Scaling</li><li>Service discovery and load balancing</li><li>Health check and self-healing</li><li>Security</li><li>Rolling updates</li></ul><ol start="2"><li>Goals:</li></ol><ul><li>Simplify container management processes</li><li>Help to manage availability and scaling of containers</li></ul><h3 id="persistence" tabindex="-1"><a class="header-anchor" href="#persistence"><span>Persistence</span></a></h3><h4 id="docker-has-two-options-for-containers-to-store-files-on-the-host-machine-so-that-the-files-are-persisted-even-after-the-container-stops" tabindex="-1"><a class="header-anchor" href="#docker-has-two-options-for-containers-to-store-files-on-the-host-machine-so-that-the-files-are-persisted-even-after-the-container-stops"><span>Docker has two options for containers to store files on the host machine, so that the files are persisted even after the container stops.</span></a></h4><ul><li>Docker volumes (Managed by Docker, /var/lib/docker/volume/)</li><li>Bind mounts (Managed by user, anywhere on the file system)</li></ul><h3 id="docker-networking" tabindex="-1"><a class="header-anchor" href="#docker-networking"><span>Docker networking</span></a></h3><ul><li>“host”: every container uses the host network stack; which means all containers share the same IP address, hence ports cannot be reused in different containers (Docker Engine on Linux only, not for Docker Desktop for Linux, MacOS, or Windows)</li></ul><h3 id="docker-networking-modes" tabindex="-1"><a class="header-anchor" href="#docker-networking-modes"><span>Docker networking modes</span></a></h3><ul><li>“bridge”: containers can re-use the same port, as they havedifferent IP addresses, and expose a port of their own that belong to the hosts, allowing containers to be somewhat visible from theoutside.</li><li>“none”: no network, completely isolated. i.e. No access fromoutside, no access to the outside.</li><li>“overlay”: used in Docker SWARM for multi-host communications.</li><li>“macvlan”: containers gets its own IP on the physical network (like a real machine)</li></ul><h3 id="ci-cd" tabindex="-1"><a class="header-anchor" href="#ci-cd"><span>CI/CD</span></a></h3><ul><li><p>CI/CD Pipeline - Integrates the CI/CD practices, the tools, and stages that software changes undergo from development to deployment</p></li><li><p>Lint Check</p></li><li><p>Dependency Check</p></li><li><p>Code Quality Analysis</p></li><li><p>Unit Testing</p></li><li><p>Integration/E2E Tests</p></li><li><p>Pack the Software (build docker image)</p></li><li><p>Deployment</p></li></ul>',67)]))}]]),h=JSON.parse('{"path":"/posts/unimelb/COMP90024.html","title":"Cluster and Cloud Computing (COMP90024)","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2025-03-02T00:00:00.000Z","category":["Learning Records"],"tag":["Unimelb"],"description":"Cluster and Cloud Computing (COMP90024) Week 1 Cloud Characteristics – On-demand self-service . A consumer can provision computing capabilities as needed without requiring human...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/unimelb/COMP90024.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"Cluster and Cloud Computing (COMP90024)"}],["meta",{"property":"og:description","content":"Cluster and Cloud Computing (COMP90024) Week 1 Cloud Characteristics – On-demand self-service . A consumer can provision computing capabilities as needed without requiring human..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-04-03T12:33:21.000Z"}],["meta",{"property":"article:tag","content":"Unimelb"}],["meta",{"property":"article:published_time","content":"2025-03-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-03T12:33:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cluster and Cloud Computing (COMP90024)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-02T00:00:00.000Z\\",\\"dateModified\\":\\"2025-04-03T12:33:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\"}]}"]]},"headers":[{"level":2,"title":"Week 1","slug":"week-1","link":"#week-1","children":[{"level":3,"title":"Cloud Characteristics","slug":"cloud-characteristics","link":"#cloud-characteristics","children":[]},{"level":3,"title":"Grid Computing","slug":"grid-computing","link":"#grid-computing","children":[]}]},{"level":2,"title":"Week 2","slug":"week-2","link":"#week-2","children":[{"level":3,"title":"Horizontal and Vertical Scaling","slug":"horizontal-and-vertical-scaling","link":"#horizontal-and-vertical-scaling","children":[]},{"level":3,"title":"Categories of Flynn\'s Taxonomy","slug":"categories-of-flynn-s-taxonomy","link":"#categories-of-flynn-s-taxonomy","children":[]},{"level":3,"title":"Approaches for Parallelism (where and how)","slug":"approaches-for-parallelism-where-and-how","link":"#approaches-for-parallelism-where-and-how","children":[]},{"level":3,"title":"Erroneous Assumptions of Distributed Systems","slug":"erroneous-assumptions-of-distributed-systems","link":"#erroneous-assumptions-of-distributed-systems","children":[]}]},{"level":2,"title":"Week 3","slug":"week-3","link":"#week-3","children":[{"level":3,"title":"Amdahl\'s Law and Gustafson\'s Law","slug":"amdahl-s-law-and-gustafson-s-law","link":"#amdahl-s-law-and-gustafson-s-law","children":[]},{"level":3,"title":"Environment Modules","slug":"environment-modules","link":"#environment-modules","children":[]},{"level":3,"title":"🛠️ Common module Commands","slug":"🛠️-common-module-commands","link":"#🛠️-common-module-commands","children":[]},{"level":3,"title":"🛠️ Common slurm Commands","slug":"🛠️-common-slurm-commands","link":"#🛠️-common-slurm-commands","children":[]},{"level":3,"title":"Slurm Job Scripts","slug":"slurm-job-scripts","link":"#slurm-job-scripts","children":[]}]},{"level":2,"title":"Week 4","slug":"week-4","link":"#week-4","children":[{"level":3,"title":"Public Clouds","slug":"public-clouds","link":"#public-clouds","children":[]},{"level":3,"title":"Private (on premise) Clouds","slug":"private-on-premise-clouds","link":"#private-on-premise-clouds","children":[]},{"level":3,"title":"OpenStack","slug":"openstack","link":"#openstack","children":[]}]},{"level":2,"title":"Week 5","slug":"week-5","link":"#week-5","children":[{"level":3,"title":"Container Orchestration Tools","slug":"container-orchestration-tools","link":"#container-orchestration-tools","children":[]},{"level":3,"title":"Persistence","slug":"persistence","link":"#persistence","children":[]},{"level":3,"title":"Docker networking","slug":"docker-networking","link":"#docker-networking","children":[]},{"level":3,"title":"Docker networking modes","slug":"docker-networking-modes","link":"#docker-networking-modes","children":[]},{"level":3,"title":"CI/CD","slug":"ci-cd","link":"#ci-cd","children":[]}]}],"git":{"createdTime":1742122096000,"updatedTime":1743683601000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":4}]},"readingTime":{"minutes":5.31,"words":1594},"filePathRelative":"posts/unimelb/COMP90024.md","localizedDate":"March 2, 2025","excerpt":"\\n<h2>Week 1</h2>\\n<h3>Cloud Characteristics</h3>\\n<p>– On-demand self-service . A consumer can provision computing\\ncapabilities as needed without requiring human interaction with\\neach service provider.\\n– Networked access . Capabilities are available over the network and\\naccessed through standard mechanisms that promote use by\\nheterogeneous client platforms.</p>","autoDesc":true}')}}]);