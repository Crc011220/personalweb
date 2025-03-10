"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[6179],{6262:(t,e)=>{e.A=(t,e)=>{const a=t.__vccOpts||t;for(const[t,r]of e)a[t]=r;return a}},1540:(t,e,a)=>{a.r(e),a.d(e,{comp:()=>C,data:()=>k});var r=a(641);const s=a.p+"assets/img/IAM.a40f9e5d.png",n=a.p+"assets/img/IAM-Summary.c504b1fa.png",o=a.p+"assets/img/EC2-Hibernate.98d8fd30.png",i=a.p+"assets/img/EC2-Nitro.531c7718.png",d=a.p+"assets/img/EC2-vCPU.acc79588.png",l=a.p+"assets/img/EC2-Capacity-Reservations.a29aa28c.png",c=a.p+"assets/img/EBS-Volume.3184708a.png",g=a.p+"assets/img/AMI.fe3881d3.png",p=a.p+"assets/img/EBS-Types.aed6aabe.png",h=a.p+"assets/img/Sticky-Sessions.ba4d0433.png",u=a.p+"assets/img/ASG.3fcb2d22.png",m=a.p+"assets/img/RDS-vs-EC2.b30374c8.png",b=a.p+"assets/img/RDS-Multi-AZ.86208804.png",y=a.p+"assets/img/RDS-Security.4ddb74b8.png",f=a.p+"assets/img/Aurora-Custom-Endpoints.27823061.png",S=a.p+"assets/img/ElastiCache.ae404790.png",A=a.p+"assets/img/CNAME-and-Alias.8df7dcaa.png",v={},C=(0,a(6262).A)(v,[["render",function(t,e){return(0,r.uX)(),(0,r.CE)("div",null,e[0]||(e[0]=[(0,r.Fv)('<h1 id="aws-saa-udemy-class" tabindex="-1"><a class="header-anchor" href="#aws-saa-udemy-class"><span>AWS-SAA Udemy Class</span></a></h1><h2 id="iam" tabindex="-1"><a class="header-anchor" href="#iam"><span>IAM</span></a></h2><p>IAM is the AWS Identity and Access Management service that enables you to manage users, groups, and roles in your AWS account. It is a centralized control point that manages access to your AWS resources. <img src="'+s+'" alt="IAM Guidelines" loading="lazy"><img src="'+n+'" alt="IAM Summary" loading="lazy"></p><h2 id="ec2" tabindex="-1"><a class="header-anchor" href="#ec2"><span>EC2</span></a></h2><p>EC2 is the AWS Elastic Compute Cloud service that provides resizable compute capacity in the AWS cloud. It enables you to launch virtual machines (VMs) in the AWS cloud, and configure them with the software you need to run your applications. <a href="https://aws.amazon.com/ec2/instance-types/" target="_blank" rel="noopener noreferrer">EC2 Instance Types</a><a href="https://instances.vantage.sh/" target="_blank" rel="noopener noreferrer">See al list of EC2 instances and comparisons</a></p><p><strong>Use IAM role for EC2 instances, and do not enter any credentials in the instance.</strong></p><h3 id="aws-ec2-purchase-options-comparison" tabindex="-1"><a class="header-anchor" href="#aws-ec2-purchase-options-comparison"><span>AWS EC2 Purchase Options Comparison</span></a></h3><table><thead><tr><th><strong>Type</strong></th><th><strong>Pricing</strong></th><th><strong>Use Case</strong></th><th><strong>Key Features</strong></th><th><strong>Best For</strong></th></tr></thead><tbody><tr><td><strong>On-Demand Instances</strong></td><td>Pay-as-you-go</td><td>Flexible, short-term workloads</td><td>No upfront payment, scales instantly</td><td>Development, testing, unpredictable workloads</td></tr><tr><td><strong>Reserved Instances (RI)</strong></td><td>1-3 year commitment</td><td>Steady-state workloads</td><td>Lower cost than On-Demand, reservation required</td><td>Long-term applications, databases, backend services</td></tr><tr><td><strong>Spot Instances</strong></td><td>Up to 90% discount</td><td>Fault-tolerant, flexible workloads</td><td>Can be interrupted by AWS if capacity is needed</td><td>Batch processing, big data, AI/ML, rendering</td></tr><tr><td><strong>Savings Plans</strong></td><td>Flexible pricing model</td><td>Predictable usage</td><td>Commit to usage for 1-3 years, applies to various instance types</td><td>Businesses looking to save without RI complexity</td></tr><tr><td><strong>Dedicated Hosts</strong></td><td>Physical server rental</td><td>Compliance, licensing</td><td>Dedicated server with control over placement</td><td>Enterprise compliance, bring-your-own-license (BYOL) software</td></tr><tr><td><strong>Capacity Reservations</strong></td><td>Pay for reserved capacity</td><td>High availability needs</td><td>Ensures EC2 capacity in a specific AZ</td><td>Mission-critical applications needing guaranteed availability</td></tr><tr><td><strong>Spot Fleet</strong></td><td>Group of Spot Instances</td><td>Large-scale batch jobs</td><td>Mix of Spot and On-Demand to optimize cost</td><td>Large-scale data processing, containerized workloads</td></tr></tbody></table><h4 id="key-takeaways" tabindex="-1"><a class="header-anchor" href="#key-takeaways"><span><strong>Key Takeaways</strong></span></a></h4><ul><li><strong>On-Demand</strong>: Best for flexible workloads without long-term commitment.</li><li><strong>Reserved Instances</strong>: Good for predictable workloads with cost savings.</li><li><strong>Spot Instances</strong>: Great for cost savings but may be interrupted.</li><li><strong>Savings Plans</strong>: Flexible alternative to RI with long-term cost savings.</li><li><strong>Dedicated Hosts</strong>: Best for compliance and special licensing needs.</li><li><strong>Capacity Reservations</strong>: Ensures EC2 capacity in specific regions.</li><li><strong>Spot Fleet</strong>: Ideal for cost-efficient, large-scale workloads.</li></ul><h3 id="aws-ec2-placement-groups-comparison" tabindex="-1"><a class="header-anchor" href="#aws-ec2-placement-groups-comparison"><span>AWS EC2 Placement Groups Comparison</span></a></h3><table><thead><tr><th><strong>Placement Group Type</strong></th><th><strong>Description</strong></th><th><strong>Key Benefits</strong></th><th><strong>Best Use Cases</strong></th></tr></thead><tbody><tr><td><strong>Cluster Placement Group</strong></td><td>Instances are placed close together in a single Availability Zone (AZ).</td><td>Low-latency, high-bandwidth communication between instances.</td><td>High-performance computing (HPC), big data analytics, machine learning, real-time applications.</td></tr><tr><td><strong>Spread Placement Group</strong></td><td>Instances are placed across distinct hardware within a single or multiple AZs.</td><td>Reduces the risk of simultaneous failures, improves redundancy.</td><td>Small number of critical instances needing high availability (e.g., database clusters, application backends).</td></tr><tr><td><strong>Partition Placement Group</strong></td><td>Instances are divided into logical partitions across multiple racks in an AZ.</td><td>Fault isolation—failures in one partition do not affect others.</td><td>Large-scale distributed applications, big data workloads (e.g., Hadoop, Cassandra, Kafka).</td></tr></tbody></table><h4 id="key-takeaways-1" tabindex="-1"><a class="header-anchor" href="#key-takeaways-1"><span><strong>Key Takeaways</strong></span></a></h4><ul><li><strong>Cluster</strong>: Best for workloads requiring <strong>low network latency &amp; high throughput</strong>.</li><li><strong>Spread</strong>: Ensures <strong>high availability</strong> for a small number of critical instances.</li><li><strong>Partition</strong>: Provides <strong>fault isolation</strong> for large distributed systems.</li></ul><h3 id="ec2-hibernate" tabindex="-1"><a class="header-anchor" href="#ec2-hibernate"><span>EC2 Hibernate</span></a></h3><figure><img src="'+o+'" alt="EC2 Hibernate" tabindex="0" loading="lazy"><figcaption>EC2 Hibernate</figcaption></figure><h3 id="ec2-nitro" tabindex="-1"><a class="header-anchor" href="#ec2-nitro"><span>EC2 Nitro</span></a></h3><figure><img src="'+i+'" alt="EC2 Nitro" tabindex="0" loading="lazy"><figcaption>EC2 Nitro</figcaption></figure><h3 id="ec2-vcpu" tabindex="-1"><a class="header-anchor" href="#ec2-vcpu"><span>EC2 vCPU</span></a></h3><figure><img src="'+d+'" alt="EC2 vCPU" tabindex="0" loading="lazy"><figcaption>EC2 vCPU</figcaption></figure><h3 id="ec2-capacity-reservations" tabindex="-1"><a class="header-anchor" href="#ec2-capacity-reservations"><span>EC2 Capacity Reservations</span></a></h3><figure><img src="'+l+'" alt="EC2 Capacity Reservations" tabindex="0" loading="lazy"><figcaption>EC2 Capacity Reservations</figcaption></figure><h3 id="ec2-metadata" tabindex="-1"><a class="header-anchor" href="#ec2-metadata"><span>EC2 Metadata</span></a></h3><ul><li>EC2 Metadata provides information about the instance, such as instance ID, region, and availability zone.</li><li>We can retrieve metadata using the following URL: <code>http://169.254.169.254/latest/meta-data/</code></li></ul><h3 id="ebs" tabindex="-1"><a class="header-anchor" href="#ebs"><span>EBS</span></a></h3><figure><img src="'+c+'" alt="EBS Volume" tabindex="0" loading="lazy"><figcaption>EBS Volume</figcaption></figure><h3 id="ami" tabindex="-1"><a class="header-anchor" href="#ami"><span>AMI</span></a></h3><figure><img src="'+g+'" alt="AMI" tabindex="0" loading="lazy"><figcaption>AMI</figcaption></figure><h3 id="ec2-instance-store-vs-ebs" tabindex="-1"><a class="header-anchor" href="#ec2-instance-store-vs-ebs"><span>EC2 Instance Store vs EBS</span></a></h3><table><thead><tr><th>Feature</th><th>EC2 Instance Store</th><th>EBS (Elastic Block Store)</th></tr></thead><tbody><tr><td><strong>Persistence</strong></td><td>❌ Data lost when instance stops/terminates</td><td>✅ Persistent storage</td></tr><tr><td><strong>Speed</strong></td><td>🚀 Directly attached, ultra-low latency</td><td>📉 Network-attached, slightly slower</td></tr><tr><td><strong>Cost</strong></td><td>✅ Free (included with supported instances)</td><td>💰 Charged separately</td></tr><tr><td><strong>Availability</strong></td><td>❌ Limited to specific EC2 instance types</td><td>✅ Available for all EC2 instances</td></tr><tr><td><strong>Snapshot Support</strong></td><td>❌ No snapshot/backup support</td><td>✅ Supports snapshots, can back up to S3</td></tr><tr><td><strong>Use Cases</strong></td><td><strong>Cache, logs, temporary files</strong></td><td><strong>Databases, persistent data storage</strong></td></tr></tbody></table><figure><img src="'+p+'" alt="EBS Types" tabindex="0" loading="lazy"><figcaption>EBS Types</figcaption></figure><ul><li>EBS can be attached to multiple EC2 instances at the same time.</li></ul><h2 id="efs" tabindex="-1"><a class="header-anchor" href="#efs"><span>EFS</span></a></h2><table><thead><tr><th>Feature</th><th>EFS (Elastic File System)</th><th>EBS (Elastic Block Store)</th></tr></thead><tbody><tr><td><strong>Storage Type</strong></td><td>Network File System (NFS)</td><td>Block Storage (like a hard drive)</td></tr><tr><td><strong>Access</strong></td><td>Shared across multiple EC2 instances</td><td>Attached to a single EC2 instance (except Multi-Attach)</td></tr><tr><td><strong>Latency</strong></td><td>Higher latency</td><td>Low latency, high performance</td></tr><tr><td><strong>Performance</strong></td><td>Scales automatically</td><td>Fixed size, needs manual scaling</td></tr><tr><td><strong>Availability</strong></td><td>Multi-AZ replication</td><td>Single AZ (unless backed up with snapshots)</td></tr><tr><td><strong>Backup</strong></td><td>Managed by AWS</td><td>Supports manual and automated snapshots</td></tr><tr><td><strong>Pricing</strong></td><td>More expensive</td><td>Cheaper than EFS</td></tr><tr><td><strong>Best for</strong></td><td>Shared storage, web servers, container storage, logs</td><td>Databases, application servers, high-performance workloads</td></tr></tbody></table><ul><li>EFS is a file system that can be mounted on multiple EC2 instances in different AZs, making it easy to share data across multiple instances.</li></ul><h2 id="clb-classic-load-balancer" tabindex="-1"><a class="header-anchor" href="#clb-classic-load-balancer"><span>CLB (Classic Load Balancer)</span></a></h2><ul><li>Deprecated.</li></ul><h2 id="alb-application-load-balancer" tabindex="-1"><a class="header-anchor" href="#alb-application-load-balancer"><span>ALB (Application Load Balancer)</span></a></h2><ul><li>Great fit in container-based and microservices architectures.</li><li>Supports HTTP/2, WebSockets, and gRPC protocols.</li></ul><h2 id="nlb-network-load-balancer" tabindex="-1"><a class="header-anchor" href="#nlb-network-load-balancer"><span>NLB (Network Load Balancer)</span></a></h2><ul><li>Great for high-performance and network-intensive applications.</li><li>Supports TCP, TLS, UDP, and WebSocket protocols.</li></ul><h3 id="aws-load-balancer-comparison-alb-vs-nlb-vs-glb" tabindex="-1"><a class="header-anchor" href="#aws-load-balancer-comparison-alb-vs-nlb-vs-glb"><span>AWS Load Balancer Comparison: ALB vs. NLB vs. GLB</span></a></h3><table><thead><tr><th><strong>Load Balancer Type</strong></th><th><strong>Layer</strong></th><th><strong>Protocol</strong></th><th><strong>Key Features</strong></th><th><strong>Use Cases</strong></th></tr></thead><tbody><tr><td><strong>ALB (Application Load Balancer)</strong></td><td><strong>Layer 7 (Application Layer)</strong></td><td>HTTP, HTTPS</td><td>- Routes traffic based on <strong>URL, Host, Header</strong><br>- Supports <strong>WebSocket, gRPC</strong><br>- <strong>AWS WAF integration</strong></td><td><strong>Web applications, API gateway, microservices (ECS, EKS, Lambda)</strong></td></tr><tr><td><strong>NLB (Network Load Balancer)</strong></td><td><strong>Layer 4 (Transport Layer)</strong></td><td>TCP, UDP</td><td>- <strong>Ultra-low latency</strong> (microseconds)<br>- <strong>Preserves client IP</strong><br>- Handles millions of connections</td><td><strong>Gaming, WebRTC, databases, IoT applications</strong></td></tr><tr><td><strong>GLB (Gateway Load Balancer)</strong></td><td><strong>Layer 3 or Layer 4 (Network Layer)</strong></td><td>TCP, UDP</td><td>- <strong>Manages virtual appliance traffic</strong> (e.g., firewalls, IDS/IPS)<br>- <strong>Traffic mirroring and network security features</strong></td><td><strong>Virtual appliances, traffic mirroring, security services, network functions</strong></td></tr></tbody></table><figure><img src="'+h+'" alt="Sticky Sessions" tabindex="0" loading="lazy"><figcaption>Sticky Sessions</figcaption></figure><ul><li>Connection Draining (also called Deregistration Delay) is a feature in AWS Elastic Load Balancer (ELB) that ensures active requests are gracefully completed before a backend instance is removed from service.</li></ul><h2 id="auto-scaling-group-asg" tabindex="-1"><a class="header-anchor" href="#auto-scaling-group-asg"><span>Auto Scaling Group (ASG)</span></a></h2><figure><img src="'+u+'" alt="ASG" tabindex="0" loading="lazy"><figcaption>ASG</figcaption></figure><table><thead><tr><th>Scaling Method</th><th>Trigger Condition</th><th>Suitable Scenario</th></tr></thead><tbody><tr><td><strong>Manual Scaling</strong></td><td>Manually modifying ASG configuration</td><td>Stable workloads</td></tr><tr><td><strong>Scheduled Scaling</strong></td><td>Predefined time-based scaling</td><td>Predictable traffic patterns (e.g., daily peaks)</td></tr><tr><td><strong>Dynamic Scaling</strong></td><td>CloudWatch metrics (CPU, network, etc.)</td><td>Workloads with fluctuating demand</td></tr><tr><td><strong>Step Scaling</strong></td><td>Threshold-based scaling steps</td><td>Gradual load increases</td></tr><tr><td><strong>Target Tracking Scaling</strong></td><td>Maintaining a target metric (e.g., CPU at 50%)</td><td>Auto-adjusting workloads</td></tr><tr><td><strong>Predictive Scaling</strong></td><td>AI-based traffic pattern prediction</td><td>Cyclic traffic changes (e.g., e-commerce sales)</td></tr></tbody></table><ul><li>After scaling happend, we are in cooldown period (default 300 seconds). During cooldown period, no new instances are added or removed. Use ready-to-use AMI to reduce the this time.</li></ul><table><thead><tr><th>Feature</th><th>Launch Template</th><th>Launch Configuration (deprecated)</th></tr></thead><tbody><tr><td><strong>Support for ASG</strong></td><td>✅ Yes</td><td>✅ Yes</td></tr><tr><td><strong>Multiple Versions</strong></td><td>✅ Supports multiple versions</td><td>❌ Only one per ASG</td></tr><tr><td><strong>Instance Types</strong></td><td>✅ Can specify multiple instance types</td><td>❌ Only one instance type</td></tr><tr><td><strong>Spot Instances</strong></td><td>✅ Supports On-Demand &amp; Spot Mix</td><td>❌ No Spot mix support</td></tr><tr><td><strong>IAM Instance Profile</strong></td><td>✅ Yes</td><td>✅ Yes</td></tr><tr><td><strong>Elastic GPU &amp; EBS Encryption</strong></td><td>✅ Yes</td><td>❌ No</td></tr><tr><td><strong>User Data Updates</strong></td><td>✅ Can create new versions with updates</td><td>❌ Must create a new launch config</td></tr><tr><td><strong>Pricing Model Support</strong></td><td>✅ Supports On-Demand, Spot, Savings Plans</td><td>❌ Limited</td></tr><tr><td><strong>Deprecation Status</strong></td><td>✅ Recommended by AWS</td><td>❌ Deprecated (since 2022)</td></tr></tbody></table><h2 id="rds" tabindex="-1"><a class="header-anchor" href="#rds"><span>RDS</span></a></h2><ul><li>Support for MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Aurora, and Aurora MySQL.</li></ul><h4 id="why-use-rds-instead-of-db-on-ec2" tabindex="-1"><a class="header-anchor" href="#why-use-rds-instead-of-db-on-ec2"><span>Why Use RDS Instead of DB on EC2?</span></a></h4><figure><img src="'+m+'" alt="RDS vs EC2" tabindex="0" loading="lazy"><figcaption>RDS vs EC2</figcaption></figure><ul><li>RDS has backup, monitoring, and auto-scaling built-in.</li><li>RDS read replicas can be used for read-only queries and for load balancing (if replica in the same AZ, no fee is charged). <img src="'+b+'" alt="RDS Multi-AZ" loading="lazy"><img src="'+y+'" alt="RDS Security" loading="lazy"></li></ul><h2 id="aurora" tabindex="-1"><a class="header-anchor" href="#aurora"><span>Aurora</span></a></h2><table><thead><tr><th>Feature</th><th>Amazon Aurora</th><th>Amazon RDS (MySQL, PostgreSQL, etc.)</th></tr></thead><tbody><tr><td><strong>Performance</strong></td><td>⚡ Up to 5x MySQL, 3x PostgreSQL performance</td><td>Standard MySQL/PostgreSQL performance</td></tr><tr><td><strong>Storage Scaling</strong></td><td>Auto-scaling (10GB - 128TB)</td><td>Manual scaling (max 64TB)</td></tr><tr><td><strong>Replication</strong></td><td>6 copies across 3 AZs</td><td>1 primary + up to 5 read replicas</td></tr><tr><td><strong>Failover Time</strong></td><td>Seconds (as fast as 30s)</td><td>Minutes (manual intervention needed)</td></tr><tr><td><strong>Read Replicas</strong></td><td>Up to 15 replicas, latency &lt; 10ms</td><td>Up to 5 replicas</td></tr><tr><td><strong>Multi-AZ Support</strong></td><td>Built-in high availability, auto failover</td><td>Requires Multi-AZ configuration</td></tr><tr><td><strong>Backup</strong></td><td>Continuous automatic backups</td><td>Manual snapshots required</td></tr><tr><td><strong>Pricing</strong></td><td>More expensive (usage-based pricing)</td><td>Cheaper (fixed instance pricing)</td></tr><tr><td><strong>Best For</strong></td><td>High performance, auto-scaling, large-scale apps</td><td>Small to medium apps, cost-sensitive projects</td></tr></tbody></table><table><thead><tr><th>Use Case</th><th>Amazon Aurora</th><th>Amazon RDS</th></tr></thead><tbody><tr><td>High-performance, high-availability needs</td><td>✅</td><td>❌</td></tr><tr><td>Read-heavy applications (e.g., e-commerce, social media)</td><td>✅</td><td>❌</td></tr><tr><td>Small applications or budget-conscious projects</td><td>❌</td><td>✅</td></tr><tr><td>Auto-scaling storage needs</td><td>✅</td><td>❌</td></tr><tr><td>Traditional database migrations (MySQL, PostgreSQL)</td><td>✅</td><td>✅</td></tr></tbody></table><h3 id="aurora-custom-endpoints" tabindex="-1"><a class="header-anchor" href="#aurora-custom-endpoints"><span>Aurora Custom Endpoints</span></a></h3><figure><img src="'+f+'" alt="Aurora Custom Endpoints" tabindex="0" loading="lazy"><figcaption>Aurora Custom Endpoints</figcaption></figure><h3 id="aurora-serverless" tabindex="-1"><a class="header-anchor" href="#aurora-serverless"><span>Aurora Serverless</span></a></h3><ul><li>Serverless Aurora is a new Aurora engine that automatically starts and scales capacity as needed, without the need to manually manage capacity.</li><li>Serverless Aurora is ideal for infrequent, intermittent, or unpredictable workloads that can handle spikes in traffic.</li></ul><h3 id="aurora-multi-master" tabindex="-1"><a class="header-anchor" href="#aurora-multi-master"><span>Aurora Multi-Master</span></a></h3><ul><li>Aurora Multi-Master is a new feature that enables you to create a read-write replica in a different Availability Zone (AZ) from the primary instance.</li></ul><h2 id="elasticache" tabindex="-1"><a class="header-anchor" href="#elasticache"><span>ElastiCache</span></a></h2><ul><li>In-memory caching service that can be used to reduce database load and improve application performance. <img src="'+S+'" alt="ElastiCache" loading="lazy"></li></ul><h2 id="route-53" tabindex="-1"><a class="header-anchor" href="#route-53"><span>Route 53</span></a></h2><p>Common Record Types:</p><table><thead><tr><th>Record Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>A (Address) Record</strong></td><td>Maps a domain (e.g., example.com) to an IPv4 address (e.g., 192.0.2.1).</td></tr><tr><td><strong>AAAA Record</strong></td><td>Maps a domain to an IPv6 address.</td></tr><tr><td><strong>CNAME (Canonical Name) Record</strong></td><td>Maps a domain alias to another domain (e.g., www.example.com → example.com).</td></tr><tr><td><strong>MX (Mail Exchange) Record</strong></td><td>Specifies mail servers for email routing.</td></tr><tr><td><strong>TXT (Text) Record</strong></td><td>Stores arbitrary text, often used for domain verification or security (e.g., SPF, DKIM, DMARC).</td></tr><tr><td><strong>NS (Name Server) Record</strong></td><td>Defines authoritative name servers for a domain.</td></tr><tr><td><strong>PTR (Pointer) Record</strong></td><td>Maps an IP address to a domain name (reverse DNS lookup).</td></tr><tr><td><strong>SRV (Service) Record</strong></td><td>Specifies location of services (e.g., VoIP, XMPP).</td></tr><tr><td><strong>SPF (Sender Policy Framework) Record</strong></td><td>Defines mail servers allowed to send emails on behalf of the domain (deprecated, use TXT).</td></tr><tr><td><strong>CAA (Certificate Authority Authorization) Record</strong></td><td>Specifies which Certificate Authorities (CAs) can issue SSL certificates for the domain.</td></tr></tbody></table><figure><img src="'+A+'" alt="CNAME and Alias" tabindex="0" loading="lazy"><figcaption>CNAME and Alias</figcaption></figure><h3 id="routing-policies" tabindex="-1"><a class="header-anchor" href="#routing-policies"><span>Routing Policies</span></a></h3><table><thead><tr><th>Routing Policy</th><th>Description</th></tr></thead><tbody><tr><td><strong>Simple Routing</strong></td><td>Default routing, maps a domain to a single endpoint.</td></tr><tr><td><strong>Weighted Routing</strong></td><td>Distributes traffic across multiple resources based on assigned weights.</td></tr><tr><td><strong>Latency-Based Routing</strong></td><td>Routes users to the region with the lowest latency.</td></tr><tr><td><strong>Geolocation Routing</strong></td><td>Directs traffic based on the user&#39;s geographic location.</td></tr><tr><td><strong>Geoproximity Routing</strong></td><td>Routes users to the nearest AWS region/resource with bias control.</td></tr><tr><td><strong>Failover Routing</strong></td><td>Redirects traffic to a backup resource if the primary fails.</td></tr><tr><td><strong>Multi-Value Answer</strong></td><td>Returns multiple IP addresses to distribute load among resources.</td></tr></tbody></table><h2 id="beanstalk" tabindex="-1"><a class="header-anchor" href="#beanstalk"><span>Beanstalk</span></a></h2><ul><li>Simplified deployment and management of web applications on AWS.</li><li>Supports multiple programming languages and frameworks (e.g., Ruby on Rails, Node.js, Java, Python, Go).</li><li>Supports auto-scaling, load balancing, and health monitoring.</li></ul><h2 id="s3" tabindex="-1"><a class="header-anchor" href="#s3"><span>S3</span></a></h2><ul><li>Objects (files) have a key, and key is the full path to the object in the bucket.</li></ul><h3 id="s3-versioning" tabindex="-1"><a class="header-anchor" href="#s3-versioning"><span>S3 Versioning</span></a></h3><ul><li>S3 Versioning allows you to keep multiple versions of an object in the same bucket.</li></ul><h3 id="amazon-s3-encryption" tabindex="-1"><a class="header-anchor" href="#amazon-s3-encryption"><span>Amazon S3 Encryption</span></a></h3><h4 id="methods-comparison" tabindex="-1"><a class="header-anchor" href="#methods-comparison"><span>Methods Comparison</span></a></h4><table><thead><tr><th>Encryption Method</th><th>Description</th><th>Key Management</th><th>Use Case</th><th>AWS CLI Example</th></tr></thead><tbody><tr><td><strong>SSE-S3</strong> (Server-Side Encryption with S3 Managed Keys)</td><td>AWS S3 <strong>automatically encrypts</strong> objects with <strong>AES-256</strong> and manages the keys.</td><td>Managed by AWS (no user control)</td><td>Default encryption, no extra setup needed.</td><td><code>aws s3 cp myfile.txt s3://mybucket/ --sse AES256</code></td></tr><tr><td><strong>SSE-KMS</strong> (Server-Side Encryption with AWS KMS Keys)</td><td>Uses <strong>AWS Key Management Service (KMS)</strong> for key storage and access control. Supports <strong>audit logging</strong>.</td><td>Managed in <strong>AWS KMS</strong>, fine-grained control</td><td>Compliance-heavy workloads needing <strong>audit logs &amp; access control</strong></td><td><code>aws s3 cp myfile.txt s3://mybucket/ --sse aws:kms</code></td></tr><tr><td><strong>SSE-C</strong> (Server-Side Encryption with Customer-Provided Keys)</td><td>You provide the encryption key. AWS <strong>does not store</strong> the key.</td><td>Fully managed by the user</td><td>Full control over encryption keys (but must securely store them)</td><td><code>aws s3 cp myfile.txt s3://mybucket/ --sse-c AES256 --sse-c-key &quot;your-base64-key&quot;</code></td></tr><tr><td><strong>Client-Side Encryption</strong></td><td>Data is encrypted <strong>before uploading to S3</strong> using an SDK or external tools.</td><td>Fully managed by the user</td><td>When you <strong>don’t trust AWS</strong> to manage encryption keys. Used for <strong>extra security layers</strong>.</td><td>Use AWS SDK or OpenSSL: <code>openssl enc -aes-256-cbc -salt -in myfile.txt -out myfile.enc</code></td></tr></tbody></table><h4 id="s3-encryption-in-transit" tabindex="-1"><a class="header-anchor" href="#s3-encryption-in-transit"><span>S3 Encryption in Transit</span></a></h4><table><thead><tr><th>Protection Type</th><th>Description</th><th>Implementation</th></tr></thead><tbody><tr><td><strong>HTTPS/TLS</strong></td><td>Encrypts data <strong>during transmission</strong> to/from S3.</td><td>Use <code>https://</code> for S3 API calls</td></tr><tr><td><strong>VPC Endpoints</strong></td><td>Keeps S3 traffic <strong>inside AWS private network</strong> instead of the public internet.</td><td>Configure <strong>VPC endpoint</strong> for S3</td></tr></tbody></table><h3 id="s3-bucket-policies" tabindex="-1"><a class="header-anchor" href="#s3-bucket-policies"><span>S3 Bucket Policies</span></a></h3><ul><li>Bucket policies are JSON documents that specify who can access the bucket and what actions they can perform.</li></ul><h3 id="s3-cors" tabindex="-1"><a class="header-anchor" href="#s3-cors"><span>S3 CORS</span></a></h3><ul><li>If a client does a cross-origin request on S3, we need to enable the correct CORS headers.</li><li>Different buckets are in different origins, so we need to enable CORS for each bucket separately.</li></ul>',87)]))}]]),k=JSON.parse('{"path":"/posts/aws-saa/3.html","title":"AWS-SAA Udemy Class","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2025-03-06T00:00:00.000Z","category":["Learning Records"],"tag":["AWS SAA"],"description":"AWS-SAA Udemy Class IAM IAM is the AWS Identity and Access Management service that enables you to manage users, groups, and roles in your AWS account. It is a centralized contro...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/aws-saa/3.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"AWS-SAA Udemy Class"}],["meta",{"property":"og:description","content":"AWS-SAA Udemy Class IAM IAM is the AWS Identity and Access Management service that enables you to manage users, groups, and roles in your AWS account. It is a centralized contro..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-03-10T11:03:43.000Z"}],["meta",{"property":"article:tag","content":"AWS SAA"}],["meta",{"property":"article:published_time","content":"2025-03-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-10T11:03:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AWS-SAA Udemy Class\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-06T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-10T11:03:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\"}]}"]]},"headers":[{"level":2,"title":"IAM","slug":"iam","link":"#iam","children":[]},{"level":2,"title":"EC2","slug":"ec2","link":"#ec2","children":[{"level":3,"title":"AWS EC2 Purchase Options Comparison","slug":"aws-ec2-purchase-options-comparison","link":"#aws-ec2-purchase-options-comparison","children":[]},{"level":3,"title":"AWS EC2 Placement Groups Comparison","slug":"aws-ec2-placement-groups-comparison","link":"#aws-ec2-placement-groups-comparison","children":[]},{"level":3,"title":"EC2 Hibernate","slug":"ec2-hibernate","link":"#ec2-hibernate","children":[]},{"level":3,"title":"EC2 Nitro","slug":"ec2-nitro","link":"#ec2-nitro","children":[]},{"level":3,"title":"EC2 vCPU","slug":"ec2-vcpu","link":"#ec2-vcpu","children":[]},{"level":3,"title":"EC2 Capacity Reservations","slug":"ec2-capacity-reservations","link":"#ec2-capacity-reservations","children":[]},{"level":3,"title":"EC2 Metadata","slug":"ec2-metadata","link":"#ec2-metadata","children":[]},{"level":3,"title":"EBS","slug":"ebs","link":"#ebs","children":[]},{"level":3,"title":"AMI","slug":"ami","link":"#ami","children":[]},{"level":3,"title":"EC2 Instance Store vs EBS","slug":"ec2-instance-store-vs-ebs","link":"#ec2-instance-store-vs-ebs","children":[]}]},{"level":2,"title":"EFS","slug":"efs","link":"#efs","children":[]},{"level":2,"title":"CLB (Classic Load Balancer)","slug":"clb-classic-load-balancer","link":"#clb-classic-load-balancer","children":[]},{"level":2,"title":"ALB (Application Load Balancer)","slug":"alb-application-load-balancer","link":"#alb-application-load-balancer","children":[]},{"level":2,"title":"NLB (Network Load Balancer)","slug":"nlb-network-load-balancer","link":"#nlb-network-load-balancer","children":[{"level":3,"title":"AWS Load Balancer Comparison: ALB vs. NLB vs. GLB","slug":"aws-load-balancer-comparison-alb-vs-nlb-vs-glb","link":"#aws-load-balancer-comparison-alb-vs-nlb-vs-glb","children":[]}]},{"level":2,"title":"Auto Scaling Group (ASG)","slug":"auto-scaling-group-asg","link":"#auto-scaling-group-asg","children":[]},{"level":2,"title":"RDS","slug":"rds","link":"#rds","children":[]},{"level":2,"title":"Aurora","slug":"aurora","link":"#aurora","children":[{"level":3,"title":"Aurora Custom Endpoints","slug":"aurora-custom-endpoints","link":"#aurora-custom-endpoints","children":[]},{"level":3,"title":"Aurora Serverless","slug":"aurora-serverless","link":"#aurora-serverless","children":[]},{"level":3,"title":"Aurora Multi-Master","slug":"aurora-multi-master","link":"#aurora-multi-master","children":[]}]},{"level":2,"title":"ElastiCache","slug":"elasticache","link":"#elasticache","children":[]},{"level":2,"title":"Route 53","slug":"route-53","link":"#route-53","children":[{"level":3,"title":"Routing Policies","slug":"routing-policies","link":"#routing-policies","children":[]}]},{"level":2,"title":"Beanstalk","slug":"beanstalk","link":"#beanstalk","children":[]},{"level":2,"title":"S3","slug":"s3","link":"#s3","children":[{"level":3,"title":"S3 Versioning","slug":"s3-versioning","link":"#s3-versioning","children":[]},{"level":3,"title":"Amazon S3 Encryption","slug":"amazon-s3-encryption","link":"#amazon-s3-encryption","children":[]},{"level":3,"title":"S3 Bucket Policies","slug":"s3-bucket-policies","link":"#s3-bucket-policies","children":[]},{"level":3,"title":"S3 CORS","slug":"s3-cors","link":"#s3-cors","children":[]}]}],"git":{"createdTime":1741263855000,"updatedTime":1741604623000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":7}]},"readingTime":{"minutes":7.06,"words":2118},"filePathRelative":"posts/aws-saa/3.md","localizedDate":"March 6, 2025","excerpt":"\\n<h2>IAM</h2>\\n<p>IAM is the AWS Identity and Access Management service that enables you to manage users, groups, and roles in your AWS account. It is a centralized control point that manages access to your AWS resources.\\n\\n</p>\\n<h2>EC2</h2>\\n<p>EC2 is the AWS Elastic Compute Cloud service that provides resizable compute capacity in the AWS cloud. It enables you to launch virtual machines (VMs) in the AWS cloud, and configure them with the software you need to run your applications.\\n<a href=\\"https://aws.amazon.com/ec2/instance-types/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">EC2 Instance Types</a>\\n<a href=\\"https://instances.vantage.sh/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">See al list of EC2 instances and comparisons</a></p>","autoDesc":true}')}}]);