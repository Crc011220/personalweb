"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[7596],{6262:(e,t)=>{t.A=(e,t)=>{const o=e.__vccOpts||e;for(const[e,a]of t)o[e]=a;return o}},8542:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>s});var a=o(641);const n={},i=(0,o(6262).A)(n,[["render",function(e,t){return(0,a.uX)(),(0,a.CE)("div",null,t[0]||(t[0]=[(0,a.Fv)('<h1 id="aws-solution-architect-associate-part-2" tabindex="-1"><a class="header-anchor" href="#aws-solution-architect-associate-part-2"><span>AWS Solution Architect Associate Part 2:</span></a></h1><h2 id="question-21" tabindex="-1"><a class="header-anchor" href="#question-21"><span>Question 21</span></a></h2><p>To develop a two-tier web application on AWS where the company&#39;s developers have deployed the application on an Amazon EC2 instance that connects directly to a backend Amazon RDS database, the following solution meets the requirements with the least operational overhead:</p><p><strong>Option C: Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the secret. Attach the required permission to the EC2 role to grant access to the secret.</strong></p><p><strong>Explanation</strong></p><ul><li><strong>Using AWS Secrets Manager to store credentials</strong>: This provides a secure way to manage and store sensitive information such as database credentials. It supports direct integration with Amazon RDS, simplifying setup.</li><li><strong>Enabling automatic rotation</strong>: AWS Secrets Manager supports automatic rotation, allowing you to set a schedule to regularly update credentials without manual intervention.</li><li><strong>Granting access via IAM role</strong>: Attach necessary permissions to the EC2 instance role, enabling the application to access secrets stored in AWS Secrets Manager without hardcoding credentials in the code or configuration files.</li></ul><p><strong>Why Choose Option C</strong></p><ul><li><strong>Minimal Operational Overhead</strong>: Compared to other options, C offers built-in support and minimal manual configuration, reducing operational complexity.</li><li><strong>Security</strong>: Avoids the risk of hardcoding credentials and uses IAM role security mechanisms to control access to sensitive information.</li><li><strong>Ease of Implementation</strong>: Leverages existing AWS services and features, reducing the need for custom scripts or additional components, making deployment and maintenance simpler.</li></ul><p><strong>Analysis of Other Options</strong></p><ul><li><strong>Option A</strong>: While functional, it introduces more operational complexity, including managing instance metadata and writing Lambda function logic.</li><li><strong>Option B</strong>: Adds management of S3 buckets and version control, requiring handling Lambda function scheduling and execution, which increases unnecessary complexity and potential failure points.</li><li><strong>Option D</strong>: Although AWS Systems Manager Parameter Store is viable, it is not specifically designed for managing secrets like AWS Secrets Manager and does not directly support automatic RDS credential rotation.</li></ul><h2 id="question22" tabindex="-1"><a class="header-anchor" href="#question22"><span>Question22</span></a></h2><p>To modify the Lambda code to identify protected health information (PHI) in PDF and JPEG format reports, the hospital needs a solution that meets these requirements with the least operational overhead.</p><p><strong>Option C: Use Amazon Textract to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.</strong></p><p><strong>Explanation</strong></p><ul><li><p><strong>Using Amazon Textract to Extract Text</strong></p><ul><li><strong>Amazon Textract</strong> is an AWS service designed to automatically extract text and data from scanned documents. It can accurately handle both simple text extraction and complex document structures like tables and forms, making it suitable for processing PDFs and image files (such as JPEGs).</li><li>Compared to using Python libraries for manual text extraction, Amazon Textract reduces development time and maintenance costs while providing more accurate results.</li></ul></li><li><p><strong>Using Amazon Comprehend Medical to Identify PHI</strong></p><ul><li><strong>Amazon Comprehend Medical</strong> is a specialized natural language processing (NLP) service tailored for handling medical text. It can identify and classify medical information, including PHI, directly from the text extracted by Amazon Textract.</li><li>This method avoids the complexity and overhead associated with training or managing custom models, offering highly accurate PHI identification without additional effort.</li></ul></li></ul><p><strong>Why Choose Option C</strong></p><ul><li><strong>Minimal Operational Overhead</strong>: Both Amazon Textract and Amazon Comprehend Medical are managed services that can be quickly integrated into the existing architecture, reducing development and operational workloads.</li><li><strong>High Accuracy</strong>: These services are optimized for high-quality text extraction and PHI identification, ensuring compliance with the stringent requirements of the healthcare industry.</li><li><strong>Ease of Implementation</strong>: Leveraging existing AWS services simplifies the deployment process, with good integration support between the services.</li></ul><p><strong>Analysis of Other Options</strong></p><ul><li><strong>Option A</strong>: Using Python libraries for text extraction and PHI identification requires more development effort and may not match the accuracy or efficiency of AWS&#39;s dedicated services.</li><li><strong>Option B</strong>: Utilizing Amazon SageMaker for PHI identification introduces additional complexity due to the need to build, train, and manage custom models, increasing operational burden.</li><li><strong>Option D</strong>: While Amazon Rekognition excels at image recognition, it is not optimized for text extraction from complex document layouts. Combining it with Amazon Comprehend Medical would add unnecessary complexity.</li></ul><h2 id="question23" tabindex="-1"><a class="header-anchor" href="#question23"><span>Question23</span></a></h2><p>To ensure high availability with minimum downtime and minimal data loss for a business-critical web application running on Amazon EC2 instances behind an Application Load Balancer, the following solution meets these requirements with the least operational effort:</p><p><strong>Option B: Configure the Auto Scaling group to use multiple Availability Zones. Configure the database as Multi-AZ. Configure an Amazon RDS Proxy instance for the database.</strong></p><p><strong>Explanation</strong></p><ul><li><p><strong>Using Multiple Availability Zones for Auto Scaling Group</strong></p><ul><li><strong>High Availability and Resilience</strong>: Distributing EC2 instances across multiple AZs enhances application availability and fault tolerance. If one AZ fails, the Auto Scaling group can launch new instances in other AZs to maintain service.</li><li><strong>Automatic Scaling</strong>: Auto Scaling adjusts the number of instances automatically based on traffic, ensuring efficient resource utilization and cost-effectiveness.</li></ul></li><li><p><strong>Configuring the Database as Multi-AZ Deployment</strong></p><ul><li><strong>High Availability and Disaster Recovery</strong>: Aurora PostgreSQL Multi-AZ deployments create one or more read replicas in different AZs. This improves database availability and provides automatic failover, reducing downtime.</li><li><strong>Data Durability</strong>: Multi-AZ deployments offer better data protection due to synchronous replication between the primary instance and replicas, minimizing the risk of data loss.</li></ul></li><li><p><strong>Configuring an Amazon RDS Proxy Instance</strong></p><ul><li><strong>Connection Management</strong>: RDS Proxy helps manage and optimize connections between the application and the database, especially under high concurrency, significantly improving performance and reducing latency.</li><li><strong>Simplified Database Connection Logic</strong>: RDS Proxy handles connection pooling and failover, reducing complexity in application code.</li></ul></li></ul><p><strong>Why Choose Option B</strong></p><ul><li><strong>Minimal Operational Effort</strong>: This solution leverages AWS managed services and features, reducing manual configuration and management work.</li><li><strong>High Availability and Fault Tolerance</strong>: Multi-AZ deployment for both the application and database layers ensures high availability.</li><li><strong>Data Security and Continuity</strong>: Multi-AZ database deployments provide better data protection and rapid recovery capabilities.</li></ul><p><strong>Analysis of Other Options</strong></p><ul><li><strong>Option A</strong>: While cross-region replication and Route 53 health checks offer higher availability, they add complexity and cost, introducing more potential failure points.</li><li><strong>Option C</strong>: Configuring the Auto Scaling group in a single AZ and relying on periodic snapshots does not provide sufficient fault tolerance, and snapshot-based recovery can take longer, leading to unacceptable service interruptions.</li><li><strong>Option D</strong>: Configuring the Auto Scaling group across multiple regions and using S3 with Lambda to write to the database adds unnecessary complexity and may cause data consistency and latency issues.</li></ul><h2 id="question24" tabindex="-1"><a class="header-anchor" href="#question24"><span>Question24</span></a></h2><p>To meet the recovery point objective (RPO) of 15 minutes and the recovery time objective (RTO) of 1 hour for a shopping application using Amazon DynamoDB to store customer information, the following solution is recommended:</p><h3 id="option-b-configure-dynamodb-point-in-time-recovery-for-rpo-recovery-restore-to-the-desired-point-in-time" tabindex="-1"><a class="header-anchor" href="#option-b-configure-dynamodb-point-in-time-recovery-for-rpo-recovery-restore-to-the-desired-point-in-time"><span>Option B: Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time.</span></a></h3><h3 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation"><span>Explanation</span></a></h3><ul><li><strong>DynamoDB Point-in-Time Recovery</strong><ul><li><strong>Continuous Backups</strong>: DynamoDB’s point-in-time recovery feature automatically backs up your table data continuously, allowing you to restore your table to any point within the last 35 days, with an RPO down to seconds.</li><li><strong>Granular Restoration</strong>: You can restore your table to any second within the backup window, which meets the requirement of an RPO of 15 minutes.</li><li><strong>Fast Recovery</strong>: Restoring from a point-in-time backup typically takes less than an hour, depending on the size of the table and the amount of data being restored, meeting the RTO of 1 hour.</li></ul></li></ul><h3 id="why-choose-option-b" tabindex="-1"><a class="header-anchor" href="#why-choose-option-b"><span>Why Choose Option B</span></a></h3><ul><li><strong>Meets RPO Requirements</strong>: By enabling point-in-time recovery, you ensure that data loss is limited to no more than the most recent 15 minutes, as required by the RPO.</li><li><strong>Meets RTO Requirements</strong>: The restoration process from a point-in-time backup is designed to be fast, often completing within the specified RTO of 1 hour.</li><li><strong>Operational Simplicity</strong>: This option requires minimal operational effort compared to other solutions because it leverages AWS-managed services, reducing the need for manual intervention or complex configurations.</li></ul><h3 id="analysis-of-other-options" tabindex="-1"><a class="header-anchor" href="#analysis-of-other-options"><span>Analysis of Other Options</span></a></h3><ul><li><strong>Option A</strong>: Configuring DynamoDB global tables would provide cross-region replication, enhancing availability and disaster recovery capabilities but does not directly address the RPO of 15 minutes. Additionally, switching to a different AWS Region for recovery might not meet the RTO of 1 hour due to potential delays in region failover and traffic redirection.</li><li><strong>Option C</strong>: Exporting DynamoDB data to Amazon S3 Glacier daily would not meet the RPO of 15 minutes since the export frequency is too low. Moreover, restoring data from S3 Glacier is a slow process, involving retrieval requests that could take several hours, failing to meet the RTO.</li><li><strong>Option D</strong>: DynamoDB does not use Amazon Elastic Block Store (Amazon EBS) volumes, so scheduling EBS snapshots for DynamoDB tables is not applicable. This option is incorrect and would not meet either the RPO or RTO requirements.</li></ul><h2 id="question25" tabindex="-1"><a class="header-anchor" href="#question25"><span>Question25</span></a></h2><p>To configure a real-time data ingestion architecture for an application that requires an API, a process to transform data as it is streamed, and a storage solution for the data, with the least operational overhead, the following solution is recommended:</p><h3 id="option-c-configure-an-amazon-api-gateway-api-to-send-data-to-an-amazon-kinesis-data-stream-create-an-amazon-kinesis-data-firehose-delivery-stream-that-uses-the-kinesis-data-stream-as-a-data-source-use-aws-lambda-functions-to-transform-the-data-use-the-kinesis-data-firehose-delivery-stream-to-send-the-data-to-amazon-s3" tabindex="-1"><a class="header-anchor" href="#option-c-configure-an-amazon-api-gateway-api-to-send-data-to-an-amazon-kinesis-data-stream-create-an-amazon-kinesis-data-firehose-delivery-stream-that-uses-the-kinesis-data-stream-as-a-data-source-use-aws-lambda-functions-to-transform-the-data-use-the-kinesis-data-firehose-delivery-stream-to-send-the-data-to-amazon-s3"><span>Option C: Configure an <code>Amazon API Gateway</code> API to send data to an <code>Amazon Kinesis Data Stream</code>. Create an <code>Amazon Kinesis Data Firehose</code> delivery stream that uses the <code>Kinesis Data Stream</code> as a data source. Use <code>AWS Lambda</code> functions to transform the data. Use the <code>Kinesis Data Firehose</code> delivery stream to send the data to <code>Amazon S3</code>.</span></a></h3><h3 id="explanation-1" tabindex="-1"><a class="header-anchor" href="#explanation-1"><span>Explanation</span></a></h3><ul><li><p><strong><code>Amazon API Gateway API</code></strong></p><ul><li><code>Serverless API Endpoint</code>: Provides a managed service for creating, deploying, and managing APIs without the need to manage servers.</li></ul></li><li><p><strong><code>Amazon Kinesis Data Stream</code></strong></p><ul><li><code>Real-Time Data Streaming</code>: Captures and processes large streams of real-time data such as clickstreams, application logs, and IoT telemetry.</li></ul></li><li><p><strong><code>Amazon Kinesis Data Firehose Delivery Stream</code></strong></p><ul><li><code>Data Transformation &amp; Loading</code>: Automatically delivers streaming data to destinations like <code>Amazon S3</code>, while applying transformations using <code>AWS Lambda</code> if necessary.</li></ul></li><li><p><strong><code>AWS Lambda Functions</code></strong></p><ul><li><code>Event-Driven Processing</code>: Allows you to run code in response to triggers from other AWS services, including <code>Kinesis Data Streams</code>, without provisioning or managing servers.</li></ul></li><li><p><strong><code>Amazon S3 Storage</code></strong></p><ul><li><code>Durable Object Storage</code>: Provides scalable and secure object storage suitable for storing transformed data for further processing or analysis.</li></ul></li></ul><h3 id="why-choose-option-c" tabindex="-1"><a class="header-anchor" href="#why-choose-option-c"><span>Why Choose Option C</span></a></h3><ul><li><strong>Minimal Operational Overhead</strong>: Utilizes fully managed <code>AWS</code> services (<code>API Gateway</code>, <code>Kinesis</code>, <code>Lambda</code>, <code>Firehose</code>, and <code>S3</code>) that reduce the need for manual server management and scaling.</li><li><strong>Automatic Scaling</strong>: All components automatically scale to handle varying amounts of traffic and data volume.</li><li><strong>Cost-Effective</strong>: Pay only for what you use, avoiding the cost of idle resources.</li><li><strong>Event-Driven Architecture</strong>: Enables real-time processing by triggering <code>Lambda</code> functions on data arrival, ensuring timely data transformation.</li><li><strong>Simplified Integration</strong>: Seamless integration between AWS services simplifies setup and reduces complexity.</li></ul><h3 id="analysis-of-other-options-1" tabindex="-1"><a class="header-anchor" href="#analysis-of-other-options-1"><span>Analysis of Other Options</span></a></h3><ul><li><p><strong>Option A</strong>: This option also involves <code>Kinesis</code> and <code>Lambda</code> but requires deploying and managing an <code>Amazon EC2</code> instance to host the API. This increases operational overhead compared to using <code>API Gateway</code>.</p></li><li><p><strong>Option B</strong>: Using <code>AWS Glue</code> for data transformation and sending data to <code>S3</code> introduces unnecessary complexity and latency. <code>AWS Glue</code> is primarily designed for ETL jobs rather than real-time data processing. Additionally, stopping source/destination checking on the <code>EC2</code> instance does not provide any benefit for this use case.</p></li><li><p><strong>Option D</strong>: Configuring <code>API Gateway</code> to send data directly to <code>AWS Glue</code> bypasses the advantages of using <code>Kinesis</code> for real-time streaming. <code>AWS Glue&#39;s</code> primary purpose is not suited for low-latency, real-time data processing, making this option less efficient for the given requirements.</p></li></ul><h2 id="question26" tabindex="-1"><a class="header-anchor" href="#question26"><span>Question26</span></a></h2><p>To meet the requirement of retaining user transaction data in an Amazon DynamoDB table for 7 years, the following solution is recommended:</p><h3 id="option-b-use-aws-backup-to-create-backup-schedules-and-retention-policies-for-the-table" tabindex="-1"><a class="header-anchor" href="#option-b-use-aws-backup-to-create-backup-schedules-and-retention-policies-for-the-table"><span>Option B: Use AWS Backup to create backup schedules and retention policies for the table.</span></a></h3><h3 id="explanation-2" tabindex="-1"><a class="header-anchor" href="#explanation-2"><span>Explanation</span></a></h3><ul><li><strong><code>AWS Backup</code></strong><ul><li><code>Automated Backup Management</code>: AWS Backup provides a fully managed service that enables centralized management of backups across AWS services.</li><li><code>Backup Schedules and Retention Policies</code>: You can define backup schedules and set retention policies to ensure that your DynamoDB table data is retained for 7 years automatically.</li><li>`Compliance and Auditing**: AWS Backup integrates with AWS Organizations, AWS CloudTrail, and AWS Key Management Service (KMS) to help meet compliance requirements and provide detailed audit trails.</li></ul></li></ul><h3 id="why-choose-option-b-1" tabindex="-1"><a class="header-anchor" href="#why-choose-option-b-1"><span>Why Choose Option B</span></a></h3><ul><li><strong>Operational Efficiency</strong>: AWS Backup reduces the operational burden by automating the backup process, ensuring that backups are performed consistently without manual intervention.</li><li><strong>Long-Term Retention</strong>: By setting up retention policies, you can guarantee that backups are kept for the required 7-year period.</li><li><strong>Scalability and Reliability</strong>: AWS Backup is designed to handle large volumes of data reliably and efficiently, scaling as your data grows.</li><li><strong>Cost-Effective</strong>: Pay only for the storage used by your backups, with no upfront costs or commitments.</li></ul><h3 id="analysis-of-other-options-2" tabindex="-1"><a class="header-anchor" href="#analysis-of-other-options-2"><span>Analysis of Other Options</span></a></h3><ul><li><p><strong>Option A</strong>: Using <code>DynamoDB point-in-time recovery</code> provides continuous backups but does not support long-term retention policies beyond 35 days. It is not suitable for retaining data for 7 years.</p></li><li><p><strong>Option C</strong>: Creating <code>on-demand backups</code> manually and storing them in an <code>Amazon S3 bucket</code> with an S3 Lifecycle configuration requires manual intervention each time a backup is needed. This approach increases operational overhead and does not automate the retention policy enforcement.</p></li><li><p><strong>Option D</strong>: Setting up an <code>Amazon EventBridge</code> (formerly <code>Amazon CloudWatch Events</code>) rule to invoke an <code>AWS Lambda function</code> for backing up the table introduces additional complexity. While this method can automate backups, it requires custom development and maintenance of the Lambda function. Moreover, managing S3 lifecycle configurations adds another layer of operational complexity.</p></li></ul>',55)]))}]]),s=JSON.parse('{"path":"/posts/aws-saa/2.html","title":"AWS Solution Architect Associate Part 2:","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2024-12-06T00:00:00.000Z","category":["Learning Records"],"tag":["AWS SAA"],"description":"AWS Solution Architect Associate Part 2: Question 21 To develop a two-tier web application on AWS where the company\'s developers have deployed the application on an Amazon EC2 i...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/aws-saa/2.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"AWS Solution Architect Associate Part 2:"}],["meta",{"property":"og:description","content":"AWS Solution Architect Associate Part 2: Question 21 To develop a two-tier web application on AWS where the company\'s developers have deployed the application on an Amazon EC2 i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-23T12:26:03.000Z"}],["meta",{"property":"article:tag","content":"AWS SAA"}],["meta",{"property":"article:published_time","content":"2024-12-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-23T12:26:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AWS Solution Architect Associate Part 2:\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-23T12:26:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\"}]}"]]},"headers":[{"level":2,"title":"Question 21","slug":"question-21","link":"#question-21","children":[]},{"level":2,"title":"Question22","slug":"question22","link":"#question22","children":[]},{"level":2,"title":"Question23","slug":"question23","link":"#question23","children":[]},{"level":2,"title":"Question24","slug":"question24","link":"#question24","children":[{"level":3,"title":"Option B: Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time.","slug":"option-b-configure-dynamodb-point-in-time-recovery-for-rpo-recovery-restore-to-the-desired-point-in-time","link":"#option-b-configure-dynamodb-point-in-time-recovery-for-rpo-recovery-restore-to-the-desired-point-in-time","children":[]},{"level":3,"title":"Explanation","slug":"explanation","link":"#explanation","children":[]},{"level":3,"title":"Why Choose Option B","slug":"why-choose-option-b","link":"#why-choose-option-b","children":[]},{"level":3,"title":"Analysis of Other Options","slug":"analysis-of-other-options","link":"#analysis-of-other-options","children":[]}]},{"level":2,"title":"Question25","slug":"question25","link":"#question25","children":[{"level":3,"title":"Option C: Configure an Amazon API Gateway API to send data to an Amazon Kinesis Data Stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis Data Stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.","slug":"option-c-configure-an-amazon-api-gateway-api-to-send-data-to-an-amazon-kinesis-data-stream-create-an-amazon-kinesis-data-firehose-delivery-stream-that-uses-the-kinesis-data-stream-as-a-data-source-use-aws-lambda-functions-to-transform-the-data-use-the-kinesis-data-firehose-delivery-stream-to-send-the-data-to-amazon-s3","link":"#option-c-configure-an-amazon-api-gateway-api-to-send-data-to-an-amazon-kinesis-data-stream-create-an-amazon-kinesis-data-firehose-delivery-stream-that-uses-the-kinesis-data-stream-as-a-data-source-use-aws-lambda-functions-to-transform-the-data-use-the-kinesis-data-firehose-delivery-stream-to-send-the-data-to-amazon-s3","children":[]},{"level":3,"title":"Explanation","slug":"explanation-1","link":"#explanation-1","children":[]},{"level":3,"title":"Why Choose Option C","slug":"why-choose-option-c","link":"#why-choose-option-c","children":[]},{"level":3,"title":"Analysis of Other Options","slug":"analysis-of-other-options-1","link":"#analysis-of-other-options-1","children":[]}]},{"level":2,"title":"Question26","slug":"question26","link":"#question26","children":[{"level":3,"title":"Option B: Use AWS Backup to create backup schedules and retention policies for the table.","slug":"option-b-use-aws-backup-to-create-backup-schedules-and-retention-policies-for-the-table","link":"#option-b-use-aws-backup-to-create-backup-schedules-and-retention-policies-for-the-table","children":[]},{"level":3,"title":"Explanation","slug":"explanation-2","link":"#explanation-2","children":[]},{"level":3,"title":"Why Choose Option B","slug":"why-choose-option-b-1","link":"#why-choose-option-b-1","children":[]},{"level":3,"title":"Analysis of Other Options","slug":"analysis-of-other-options-2","link":"#analysis-of-other-options-2","children":[]}]}],"git":{"createdTime":1733568794000,"updatedTime":1734956763000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":3}]},"readingTime":{"minutes":7.42,"words":2226},"filePathRelative":"posts/aws-saa/2.md","localizedDate":"December 6, 2024","excerpt":"\\n<h2>Question 21</h2>\\n<p>To develop a two-tier web application on AWS where the company\'s developers have deployed the application on an Amazon EC2 instance that connects directly to a backend Amazon RDS database, the following solution meets the requirements with the least operational overhead:</p>","autoDesc":true}')}}]);