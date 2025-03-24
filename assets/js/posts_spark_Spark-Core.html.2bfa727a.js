"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[161],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,e]of s)a[i]=e;return a}},7048:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>t,data:()=>l});var e=a(641);const n={},t=(0,a(6262).A)(n,[["render",function(i,s){return(0,e.uX)(),(0,e.CE)("div",null,s[0]||(s[0]=[(0,e.Fv)('<h1 id="spark-core" tabindex="-1"><a class="header-anchor" href="#spark-core"><span>Spark Core</span></a></h1><h2 id="rdd-resilient-distributed-dataset" tabindex="-1"><a class="header-anchor" href="#rdd-resilient-distributed-dataset"><span>RDD (Resilient Distributed Dataset)</span></a></h2><ul><li>Can be understood as a data pipeline.</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[] args) {</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        SparkConf</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> conf </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> SparkConf</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        conf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setAppName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Spark01&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        conf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setMaster</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;local&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        JavaSparkContext</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sc </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> JavaSparkContext</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(conf)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // read from memory</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> list </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">asList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;alice,bob&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        JavaRDD</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> rdd </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> sc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">parallelize</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(list,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //3 partitions\\</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // read from disk</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // JavaRDD&lt;String&gt; rdd = sc.textFile(&quot;/Users/chenruochen/Documents/IT-Study/Spark/spark/data/1.txt&quot;);</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> collect </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> rdd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">collect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        collect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">forEach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">::</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">println);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        rdd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">saveAsTextFile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;output&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// save as text file in relatived path</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        sc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="partitioning-rules" tabindex="-1"><a class="header-anchor" href="#partitioning-rules"><span>Partitioning Rules</span></a></h3><h4 id="_1-spark-file-path-settings" tabindex="-1"><a class="header-anchor" href="#_1-spark-file-path-settings"><span>1. <strong>Spark File Path Settings</strong></span></a></h4><ul><li>Spark can read files using <strong>absolute</strong> or <strong>relative paths</strong>.</li><li>In <strong>IDEA</strong>, the relative path is based on the <strong>project root</strong> rather than the <strong>module root</strong>.</li></ul><h4 id="_2-spark-file-source-partitioning-strategy" tabindex="-1"><a class="header-anchor" href="#_2-spark-file-source-partitioning-strategy"><span>2. <strong>Spark File Source Partitioning Strategy</strong></span></a></h4><ul><li><p><code>JavaRDD&lt;String&gt; rdd = sc.parallelize(list,3);</code> //3 partitions\\</p></li><li><p>If above is not set, set spark.default.parallelism</p></li><li><p>If above is not set, Spark uses the following default value <code>conf.setMaster(&quot;local[*]&quot;);</code></p></li><li><p>The <code>textFile</code> method can accept a third parameter: <code>minPartitions</code> (minimum number of partitions).</p><ul><li>If not provided, Spark uses the following default value:</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">minPartitions </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> math</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">min</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(defaultParallelism, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>You can also configure it using parameters:</p><ul><li><code>spark.default.parallelism</code> (default is 1)</li></ul><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">math.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">min</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(parameter, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Alternatively, Spark can use the total number of cores in the environment:</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">math.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">min</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(total_cores, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h4 id="_3-spark-is-built-on-hadoop-s-mr-framework" tabindex="-1"><a class="header-anchor" href="#_3-spark-is-built-on-hadoop-s-mr-framework"><span>3. <strong>Spark is Built on Hadoop&#39;s MR Framework</strong></span></a></h4><ul><li>Spark does <strong>not implement file slicing</strong> itself—it relies on Hadoop&#39;s MapReduce (MR) library.</li><li>The number of file splits is determined by <strong>Hadoop</strong>, not Spark. Spark does not support file manipulation.</li></ul><p>The calculation rules for the number of slices and file data storage in Hadoop are different.</p><ol><li>When calculating the number of partitions, it is split by bytes as evenly as possible.</li><li>The partition data storage considers the integrity of the business data and reads it line by line. When reading data, the offset (starting from 0) must also be considered.</li></ol><div class="hint-container info"><p class="hint-container-title">Info</p><h3 id="java-tuples-class" tabindex="-1"><a class="header-anchor" href="#java-tuples-class"><span>Java Tuples Class</span></a></h3><p>The <code>Tuple</code> class is a container class that holds multiple values of different types. It is used to represent a row in a dataset. The <code>Tuple</code> class is part of the <code>scala.Tuple</code> package. The maximum number of values that can be stored in a <code>Tuple</code> is 22.</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> scala.Tuple2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> MyClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Tuple2</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">tuple</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Tuple2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Alice&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">25</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> tuple</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">_1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> age</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> tuple</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">_2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(name </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; is &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> age </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; years old.&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="rdd-methods" tabindex="-1"><a class="header-anchor" href="#rdd-methods"><span>RDD Methods</span></a></h3><p>All methods can be divided into two categories:</p><h4 id="transformations" tabindex="-1"><a class="header-anchor" href="#transformations"><span>Transformations</span></a></h4><ul><li><code>map</code> - applies a function to each element of the RDD and returns a new RDD.</li><li><code>filter</code> - selects only the elements that satisfy a predicate and returns a new RDD.</li><li><code>flatMap</code> - applies a function to each element of the RDD and returns a new RDD, but the function can return multiple elements.</li><li><code>sample</code> - returns a sampled subset of the RDD.</li><li><code>union</code> - combines two RDDs into a single RDD.</li><li><code>groupByKey</code> - groups the elements of the RDD by key.</li><li><code>reduceByKey</code> - reduces the values of each key in the RDD.</li><li><code>sortByKey</code> - sorts the elements of the RDD by key.</li><li><code>join</code> - joins two RDDs based on their keys.</li><li><code>cogroup</code> - groups the elements of the RDD by key and then joins them.</li><li><code>cartesian</code> - returns the Cartesian product of two RDDs.</li><li><code>distinct</code> - returns a new RDD with duplicate elements removed.</li><li><code>intersection</code> - returns a new RDD with the elements that are common to both RDDs.</li><li><code>subtract</code> - returns a new RDD with the elements that are in the first RDD but not in the second RDD.</li><li><code>sampleByKey</code> - returns a sampled subset of the RDD based on the keys.</li><li><code>coalesce</code> - reduces the number of partitions in the RDD.</li><li><code>repartition</code> - repartitions the RDD into a specific number of partitions.</li><li><code>persist</code> - caches the RDD in memory or disk.</li><li><code>checkpoint</code> - sets a checkpoint directory for fault-tolerance.</li></ul><h4 id="map" tabindex="-1"><a class="header-anchor" href="#map"><span>Map()</span></a></h4><ul><li>默认情况下，新创建的RDD分区数量和之前的RDD分区数量相同</li><li>默认情况下，数据所在的分布也不会变</li><li>数据将所有的RDD执行完，才会执行下一个操作</li></ul><h4 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>Filter()</span></a></h4><ul><li>可能会导致数据倾斜，会导致性能下降</li></ul><h4 id="flatmap" tabindex="-1"><a class="header-anchor" href="#flatmap"><span>FlatMap()</span></a></h4><ul><li>与map()类似，但是可以返回多个元素</li><li>拆开一个元素，然后再重新组合</li><li>map没有扁平化的能力</li></ul><h4 id="groupby" tabindex="-1"><a class="header-anchor" href="#groupby"><span>GroupBy()</span></a></h4><ul><li>按照key进行分组</li><li>相同key的数据会被聚合到一起</li><li>不会改变分区数量</li><li>存在shuffle操作</li></ul><div class="hint-container info"><p class="hint-container-title">Info</p><h3 id="shuffle" tabindex="-1"><a class="header-anchor" href="#shuffle"><span>Shuffle</span></a></h3><ul><li>为了解决数据倾斜问题，Spark会自动进行shuffle操作</li><li>所有的数据必须分组后才能执行后续操作</li><li>落盘操作会将数据写入磁盘</li><li>shuffle操作会将数据重新分配到不同的分区，以便每个分区的数据量相似</li><li>shuffle操作会消耗大量的网络带宽和磁盘IO</li></ul></div><h4 id="distinct" tabindex="-1"><a class="header-anchor" href="#distinct"><span>Distinct()</span></a></h4><ul><li>分布式去重</li><li>分组 + shuffle操作</li></ul><h4 id="kv-methods" tabindex="-1"><a class="header-anchor" href="#kv-methods"><span>KV methods</span></a></h4><ul><li>use <code>parallelizePairs</code> to create a RDD of key-value pairs</li><li>use <code>mapValues</code> to apply a function to the values of the RDD</li><li>use <code>groupByKey</code> to group values by key</li><li>use <code>reduceByKey</code> to aggregate values by key</li></ul><h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions"><span>Actions</span></a></h3><ul><li><code>collect</code> - returns an array that contains all the elements of the RDD.</li><li><code>reduce</code> - reduces the elements of the RDD using a function.</li><li><code>count</code> - returns the number of elements in the RDD.</li><li><code>first</code> - returns the first element of the RDD.</li><li><code>take</code> - returns an array with the first n elements of the RDD.</li><li><code>saveAsTextFile</code> - saves the RDD as a text file.</li><li><code>saveAsObjectFile</code> - saves the RDD as an object file.</li><li><code>foreach</code> - applies a function to each element of the RDD.</li><li><code>foreachPartition</code> - applies a function to each partition of the RDD.</li></ul>',33)]))}]]),l=JSON.parse('{"path":"/posts/spark/Spark-Core.html","title":"Spark Core","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2025-03-19T00:00:00.000Z","category":["Learning Records"],"tag":["Spark"],"description":"Spark Core RDD (Resilient Distributed Dataset) Can be understood as a data pipeline. Partitioning Rules 1. Spark File Path Settings Spark can read files using absolute or relati...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/spark/Spark-Core.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"Spark Core"}],["meta",{"property":"og:description","content":"Spark Core RDD (Resilient Distributed Dataset) Can be understood as a data pipeline. Partitioning Rules 1. Spark File Path Settings Spark can read files using absolute or relati..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-03-24T06:56:26.000Z"}],["meta",{"property":"article:tag","content":"Spark"}],["meta",{"property":"article:published_time","content":"2025-03-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-24T06:56:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spark Core\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-19T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-24T06:56:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\"}]}"]]},"headers":[{"level":2,"title":"RDD (Resilient Distributed Dataset)","slug":"rdd-resilient-distributed-dataset","link":"#rdd-resilient-distributed-dataset","children":[{"level":3,"title":"Partitioning Rules","slug":"partitioning-rules","link":"#partitioning-rules","children":[]},{"level":3,"title":"RDD Methods","slug":"rdd-methods","link":"#rdd-methods","children":[]},{"level":3,"title":"Actions","slug":"actions","link":"#actions","children":[]}]}],"git":{"createdTime":1742299736000,"updatedTime":1742799386000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":3}]},"readingTime":{"minutes":3.38,"words":1014},"filePathRelative":"posts/spark/Spark-Core.md","localizedDate":"March 19, 2025","excerpt":"\\n<h2>RDD (Resilient Distributed Dataset)</h2>\\n<ul>\\n<li>Can be understood as a data pipeline.</li>\\n</ul>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> static</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> void</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> main</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">String</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">[] args) {</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">        SparkConf</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> conf </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> new</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> SparkConf</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">()</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">        conf</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">setAppName</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"Spark01\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">        conf</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">setMaster</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"local\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">        JavaSparkContext</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> sc </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> new</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> JavaSparkContext</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(conf)</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        // read from memory</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">        List</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">String</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">&gt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> list </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> Arrays</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">asList</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"alice,bob\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">        JavaRDD</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">String</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">&gt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> rdd </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> sc</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">parallelize</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(list,</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">3</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> //3 partitions\\\\</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        // read from disk</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        // JavaRDD&lt;String&gt; rdd = sc.textFile(\\"/Users/chenruochen/Documents/IT-Study/Spark/spark/data/1.txt\\");</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">        List</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">String</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">&gt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> collect </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> rdd</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">collect</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">        collect</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">forEach</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">System</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">out</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">::</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">println);</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">        rdd</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">saveAsTextFile</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"output\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// save as text file in relatived path</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">        sc</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">close</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">    }</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);