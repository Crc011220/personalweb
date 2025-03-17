"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[434],{6262:(e,t)=>{t.A=(e,t)=>{const i=e.__vccOpts||e;for(const[e,n]of t)i[e]=n;return i}},7920:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>l,data:()=>c});var n=i(641);const a=i.p+"assets/img/matrix-multiplication.014b9a1e.png",r=i.p+"assets/img/vector-norm.36eacd69.png",s=i.p+"assets/img/Inverse-Distance.857bdd2b.png",o=i.p+"assets/img/Marginalization.4e6857d9.png",d={},l=(0,i(6262).A)(d,[["render",function(e,t){return(0,n.uX)(),(0,n.CE)("div",null,t[0]||(t[0]=[(0,n.Fv)('<h1 id="introduction-to-machine-learning-comp90049" tabindex="-1"><a class="header-anchor" href="#introduction-to-machine-learning-comp90049"><span>Introduction to Machine Learning (COMP90049)</span></a></h1><h2 id="week-1" tabindex="-1"><a class="header-anchor" href="#week-1"><span>Week 1</span></a></h2><ul><li>Machine learning is a method of teaching software to learn from data and make decisions on their own, without being explicitly programmed.</li></ul><h3 id="three-ingredients-for-machine-learning" tabindex="-1"><a class="header-anchor" href="#three-ingredients-for-machine-learning"><span>Three ingredients for machine learning</span></a></h3><ol><li><p>Data • Discrete vs continuous vs ... • Big data vs small data • Labeled data vs unlabeled data • Public vs sensitive data</p></li><li><p>Models • function mapping from inputs to outputs • probabilistic machine learning models • geometric machine learning models • parameters of the function are unknown</p></li><li><p>Learning • Improving (on a task) after data is taken into account • Finding the best model parameters (for a given task) • Supervised vs. unsupervised learning</p></li></ol><div class="hint-container info"><p class="hint-container-title">Info</p><p>Supervised Learning:监督学习使用带有标签的数据进行训练，模型学习输入（features）到输出（labels）之间的映射关系。 Unsupervised Learning:无监督学习使用没有标签的数据，模型通过分析数据的模式和结构来进行学习。</p></div><h3 id="linear-algebra-review" tabindex="-1"><a class="header-anchor" href="#linear-algebra-review"><span>Linear Algebra Review</span></a></h3><h4 id="matrices" tabindex="-1"><a class="header-anchor" href="#matrices"><span>Matrices</span></a></h4><ul><li>Matrices addition/subtraction: Add(Subtract) correspond ingentries in A and B</li><li>Matrix multiplication: Multiply corresponding entries in A and B and sum the products <img src="'+a+'" alt="Matrix Multiplication" loading="lazy"></li><li>Matrix transpose: Transpose of a matrix is obtained by interchanging its rows and columns. Matrix is <strong>symmetric</strong> if it is equal to its transpose.</li><li>Matrix inverse: The inverse of a matrix A is denoted by A^-1 and is obtained by multiplying A by its inverse.</li><li>A matrix cannot be inverted if: More rows than columns, More columns than rows,Redundant rows/columns (linear independence)</li></ul><h4 id="vectors" tabindex="-1"><a class="header-anchor" href="#vectors"><span>Vectors</span></a></h4><ul><li>A vector is a matrix with several rows and <strong>one</strong> column</li><li>Vector addition/subtraction: Add(Subtract) corresponding entries in A and B</li><li>Vector inner product: Multiply corresponding entries in A and B and sum the products</li><li>Vector Euclidean norm: The square root of the sum of the squares of the entries in the vector. <img src="'+r+'" alt="Verctor Euclidean Norm" loading="lazy"></li><li>Vector inner product: The dot product of two vectors A and B is the sum of the products of their corresponding entries.</li><li>The cosine of the angle between two vectors can be found by using norms and the inner product</li></ul><h3 id="instances-attributes-and-learning-paradigms-supervised-vs-unsupervised-learning" tabindex="-1"><a class="header-anchor" href="#instances-attributes-and-learning-paradigms-supervised-vs-unsupervised-learning"><span>Instances, Attributes, and Learning Paradigms (Supervised vs. Unsupervised Learning)</span></a></h3><ul><li>In ML terminology examples are called Instances</li><li>Each instance can have some Features or Attributes</li><li>Concepts are things that we aim to learn. Generally, in the form of labels or classes</li></ul><h4 id="unsupervised-do-not-have-access-to-an-inventory-of-classes-and-instead-discover-groups-of-similar-examples-in-a-given-dataset" tabindex="-1"><a class="header-anchor" href="#unsupervised-do-not-have-access-to-an-inventory-of-classes-and-instead-discover-groups-of-similar-examples-in-a-given-dataset"><span>Unsupervised do not have access to an inventory of classes and instead discover groups of ‘similar’ examples in a given dataset.</span></a></h4><ul><li>Clustering is unsupervised — the learner operates without a set of labelled training data</li><li><strong>Success is often measured subjectively; evaluation is problematic</strong></li></ul><h4 id="supervised-methods-have-prior-knowledge-of-classes-and-set-out-to-discover-and-categorise-new-instances-according-to-those-classes" tabindex="-1"><a class="header-anchor" href="#supervised-methods-have-prior-knowledge-of-classes-and-set-out-to-discover-and-categorise-new-instances-according-to-those-classes"><span>Supervised methods have prior knowledge of classes and set out to discover and categorise new instances according to those classes</span></a></h4><ul><li>Classification learning is supervised • In Classification, we can exhaustively list/enumerate all possible labels for a given instance; a correct prediction entails mapping an instance to the label which is truly correct</li><li>Regression learning is supervised • In Regression,&quot;infinitely&quot; many labels are possible, we cannot conceivably enumerate them; a “correct” prediction is when the numeric value is acceptably close to the true value</li></ul><h3 id="featured-data-types" tabindex="-1"><a class="header-anchor" href="#featured-data-types"><span>Featured Data Types</span></a></h3><ol><li>Discrete: Nominal (Categorical)</li></ol><ul><li>Values are distinct symbols, values themselves serve only as labels or names</li><li>No relation is implied among nominal values (no ordering or distance measure)</li><li>Only equality tests can be performed</li><li>e.g. Student Number</li></ul><ol start="2"><li>Ordinal</li></ol><ul><li>An explicit order is imposed on the values</li><li>Addition and subtraction does not make sense</li><li>e.g. Educational Level</li></ul><ol start="3"><li>Continuous: Numeric</li></ol><ul><li>Numeric quantities are real-valued attributes</li><li>All mathematical operations are allowed</li></ul><h2 id="equal-width-vs-equal-frequency-vs-clustering" tabindex="-1"><a class="header-anchor" href="#equal-width-vs-equal-frequency-vs-clustering"><span>Equal Width vs. Equal Frequency vs. Clustering</span></a></h2><table><thead><tr><th>Method</th><th>Equal Width Binning</th><th>Equal Frequency Binning</th><th>Clustering</th></tr></thead><tbody><tr><td><strong>Definition</strong></td><td>Each bin has the same width</td><td>Each bin contains the same number of data points</td><td>Groups data points based on similarity</td></tr><tr><td><strong>Type</strong></td><td>Data discretization</td><td>Data discretization</td><td>Unsupervised learning</td></tr><tr><td><strong>Advantages</strong></td><td>Easy to compute, simple</td><td>Suitable for skewed distributions</td><td>Can detect natural groupings in data</td></tr><tr><td><strong>Disadvantages</strong></td><td>Sparse or dense bins if data density varies</td><td>Uneven bin width, harder to interpret</td><td>May require tuning (e.g., number of clusters)</td></tr><tr><td><strong>Common Algorithms</strong></td><td>Fixed width intervals</td><td>Quantiles-based binning</td><td>K-Means, DBSCAN, Hierarchical Clustering</td></tr><tr><td><strong>Use Cases</strong></td><td>Histogram creation, feature engineering</td><td>Handling skewed data in ML models</td><td>Customer segmentation, anomaly detection</td></tr></tbody></table><div class="hint-container info"><p class="hint-container-title">Info</p><p>Equal Width Binning：用于简单离散化，每个 bin 宽度相同，但可能会导致数据密度不均衡。 Equal Frequency Binning：每个 bin 的数据量相等，适合处理偏态数据，但 bin 的宽度不一致，可能难以解释。 Clustering（聚类）：用于无监督学习，根据数据点的相似性自动分组，适合发现隐藏模式，但通常需要调整参数（如 k 值）。</p></div><h2 id="standardization-vs-normalization" tabindex="-1"><a class="header-anchor" href="#standardization-vs-normalization"><span>Standardization vs. Normalization</span></a></h2><table><thead><tr><th><strong>Method</strong></th><th><strong>Standardization (Z-score)</strong></th><th><strong>Min-Max Normalization</strong></th></tr></thead><tbody><tr><td><strong>Formula</strong></td><td>( X&#39; = \\frac{X - \\mu}{\\sigma} )</td><td>( X&#39; = \\frac{X - X_{\\min}}{X_{\\max} - X_{\\min}} )</td></tr><tr><td><strong>Range</strong></td><td>Mean = 0, Std = 1</td><td>[0,1] or [-1,1]</td></tr><tr><td><strong>Best for</strong></td><td>Normally distributed data</td><td>Data with fixed bounds</td></tr><tr><td><strong>Sensitive to outliers?</strong></td><td>Less sensitive</td><td>More sensitive</td></tr><tr><td><strong>Formula</strong></td><td>(X - mean) / std</td><td>(X - min) / (max - min)</td></tr></tbody></table><div class="hint-container info"><p class="hint-container-title">Info</p><p>Standardization：将数据标准化到均值为 0，标准差为 1 的分布，适用于正态分布的数据。 Normalization：将数据缩放到 [0,1] 或 [-1,1] 范围内，适用于数据范围固定的数据。</p></div><h2 id="week-2" tabindex="-1"><a class="header-anchor" href="#week-2"><span>Week 2</span></a></h2><h3 id="k-nearest-neighbors-knn" tabindex="-1"><a class="header-anchor" href="#k-nearest-neighbors-knn"><span>K-Nearest Neighbors (KNN)</span></a></h3><ul><li>supervied learning algorithm</li></ul><h4 id="knn-classification" tabindex="-1"><a class="header-anchor" href="#knn-classification"><span>KNN Classification</span></a></h4><p>• Return the most common class label among neighbors • Example: cat vs dog images; text classification; ...</p><h4 id="knn-regression" tabindex="-1"><a class="header-anchor" href="#knn-regression"><span>KNN Regression</span></a></h4><p>• Return the average value of among K nearest neighbors • Example: housing price prediction;</p><h4 id="to-measure-categorical-distance-we-can-use" tabindex="-1"><a class="header-anchor" href="#to-measure-categorical-distance-we-can-use"><span>To measure categorical distance, we can use:</span></a></h4><ul><li>Hamming distance: number of positions where the two strings differ</li><li>Jaccard Similarity: intersection over union of two sets</li></ul><h4 id="to-measure-numerical-distance-we-can-use" tabindex="-1"><a class="header-anchor" href="#to-measure-numerical-distance-we-can-use"><span>To measure numerical distance, we can use:</span></a></h4><ul><li>Manhattan distance: sum of absolute differences between corresponding components</li><li>Euclidean distance: square root of the sum of the squares of the differences between corresponding components</li><li>Cosine distance: 1 minus the cosine of the angle between two vectors</li></ul><h4 id="to-measure-oridinal-distance-we-can-use" tabindex="-1"><a class="header-anchor" href="#to-measure-oridinal-distance-we-can-use"><span>To measure oridinal distance, we can use:</span></a></h4><ul><li>Normalized Ranks: rank each value and normalize them to [0, 1]</li></ul><h4 id="majority-vote" tabindex="-1"><a class="header-anchor" href="#majority-vote"><span>Majority Vote</span></a></h4><h4 id="inverse-distance" tabindex="-1"><a class="header-anchor" href="#inverse-distance"><span>Inverse Distance</span></a></h4><ul><li>Give more weight to the nearer neighbors rather than quantity.</li><li>The bigger the weight, the more important the neighbor is. <img src="'+s+'" alt="Inverse Distance" loading="lazy"></li></ul><h4 id="inverse-linear-distance" tabindex="-1"><a class="header-anchor" href="#inverse-linear-distance"><span>Inverse Linear Distance</span></a></h4><ul><li>Give more weight to the nearer neighbors, but with a decreasing slope.</li><li>The bigger the weight, the more important the neighbor is.</li></ul><h4 id="value-of-k" tabindex="-1"><a class="header-anchor" href="#value-of-k"><span>Value of K</span></a></h4><table><thead><tr><th><strong>K Value</strong></th><th><strong>Bias</strong></th><th><strong>Variance</strong></th><th><strong>Overfitting</strong></th><th><strong>Underfitting</strong></th><th><strong>Best For</strong></th></tr></thead><tbody><tr><td><strong>Small K</strong> (e.g., K=1, K=3)</td><td><strong>Low Bias</strong>: The model can closely follow the data.</td><td><strong>High Variance</strong>: Sensitive to noise and outliers.</td><td>Likely to overfit due to high sensitivity to small fluctuations in the training data.</td><td>Unlikely to underfit unless the data is too noisy or simple.</td><td>- Complex data with clear patterns<br> - When the dataset is relatively small.</td></tr><tr><td><strong>Large K</strong> (e.g., K=10, K=20)</td><td><strong>High Bias</strong>: The model becomes less sensitive to variations in the data.</td><td><strong>Low Variance</strong>: Smoothing out the noise by considering more neighbors.</td><td>Less likely to overfit as it smooths out fluctuations.</td><td>Might underfit if the data has complex relationships or non-linear patterns.</td><td>- Noisy data<br> - When a generalization is more important than capturing every detail.</td></tr><tr><td><strong>Medium K</strong> (e.g., K=5, K=7)</td><td>A balanced approach with moderate bias.</td><td>Balanced variance, aiming for generalization.</td><td>Minimizes both overfitting and underfitting.</td><td>Good compromise between bias and variance.</td><td>- Standard choice for most datasets, balancing generalization and accuracy.</td></tr></tbody></table><h4 id="why-knn" tabindex="-1"><a class="header-anchor" href="#why-knn"><span>Why KNN</span></a></h4><ul><li>Pros • Intuitive and simple • No assumptions • Supports classification and regression • No training: new data →evolve and adapt immediately</li><li>Cons • How to decide on best distance functions? • How to combine multiple neighbors? • How to select K ? • Expensive with large (or growing) data sets</li></ul><h4 id="lazy-learning-vs-eager-learning" tabindex="-1"><a class="header-anchor" href="#lazy-learning-vs-eager-learning"><span>Lazy Learning vs. Eager Learning</span></a></h4><table><thead><tr><th>Criteria</th><th>Lazy Learning (e.g., KNN)</th><th>Eager Learning</th></tr></thead><tbody><tr><td><strong>Definition</strong></td><td>Delays learning until a query is made</td><td>Learns from the training data immediately</td></tr><tr><td><strong>Training Phase</strong></td><td>Fast (no model building)</td><td>Slow (model is built during training)</td></tr><tr><td><strong>Prediction Phase</strong></td><td>Slow (requires processing the entire dataset)</td><td>Fast (uses the pre-built model)</td></tr><tr><td><strong>Memory Requirement</strong></td><td>High (stores the entire training dataset)</td><td>Lower (only stores the model)</td></tr><tr><td><strong>Flexibility</strong></td><td>High (can adapt to new data easily)</td><td>Low (requires retraining for new data)</td></tr><tr><td><strong>Example</strong></td><td>K-Nearest Neighbors (KNN)</td><td>Decision Trees, Neural Networks</td></tr></tbody></table><h3 id="probility" tabindex="-1"><a class="header-anchor" href="#probility"><span>Probility</span></a></h3><ul><li>P(A=a): the probability that random variable A takes value a</li><li>0 &lt;= P(A=a) &lt;= 1</li><li>P(True) = 1</li><li>P(False) = 0</li></ul><h4 id="joint-probability" tabindex="-1"><a class="header-anchor" href="#joint-probability"><span>Joint Probability</span></a></h4><ul><li>P(A, B): joint probability of two events A and B</li><li>the probability of both A and B occurring = P(A ∩ B)</li></ul><h4 id="conditional-probability" tabindex="-1"><a class="header-anchor" href="#conditional-probability"><span>Conditional Probability</span></a></h4><ul><li>P(A|B): the probability of A occurring given that B has occurred</li><li>P(A|B) = P(A ∩ B) / P(B)</li></ul><h4 id="independent-probability" tabindex="-1"><a class="header-anchor" href="#independent-probability"><span>Independent Probability</span></a></h4><ul><li>Two events A and B are independent if P(A|B) = P(A)</li><li>P(A, B) = P(A) * P(B)</li></ul><div class="hint-container info"><p class="hint-container-title">Info</p><h4 id="disjoint" tabindex="-1"><a class="header-anchor" href="#disjoint"><span>Disjoint</span></a></h4><ul><li>P(A∩B)=0</li></ul><h4 id="product-rule" tabindex="-1"><a class="header-anchor" href="#product-rule"><span>Product Rule</span></a></h4><ul><li>P(A, B) = P(A|B) * P(B) = P(B|A) * P(A)</li></ul><h4 id="chain-rule" tabindex="-1"><a class="header-anchor" href="#chain-rule"><span>Chain Rule</span></a></h4><ul><li>P(A,B,C)=P(A)⋅P(B∣A)⋅P(C∣A,B)</li></ul></div><h4 id="bayes-rule" tabindex="-1"><a class="header-anchor" href="#bayes-rule"><span>Bayes&#39; Rule</span></a></h4><ul><li>P(A|B) = ( P(B|A) * P(A) ) / P(B)</li><li>Bayes’ Rule allows us to compute P(A|B) given knowledge of the ‘inverse’ probability P(B|A).</li></ul><h4 id="marginalization" tabindex="-1"><a class="header-anchor" href="#marginalization"><span>Marginalization</span></a></h4><figure><img src="'+o+'" alt="Marginalization" tabindex="0" loading="lazy"><figcaption>Marginalization</figcaption></figure><h4 id="probability-distributions" tabindex="-1"><a class="header-anchor" href="#probability-distributions"><span>Probability Distributions</span></a></h4><ul><li>Probability distributions can be discrete or continuous.</li><li>Discrete Random Variable: Takes on a countable number of distinct values (e.g., number of heads in coin flips).</li><li>Continuous Random Variable: Takes on an infinite number of possible values (e.g., height of students).</li></ul><table><thead><tr><th><strong>Distribution</strong></th><th><strong>Type</strong></th><th><strong>Range</strong></th><th><strong>Parameters</strong></th><th><strong>Formula</strong></th><th><strong>Example</strong></th><th><strong>Use Cases</strong></th></tr></thead><tbody><tr><td><strong>Normal</strong></td><td>Continuous</td><td>−∞ to +∞</td><td>Mean μ, Variance σ²</td><td><code>P(x) = (1 / √(2πσ²)) * exp(-((x - μ)² / (2σ²)))</code></td><td>Human height, exam scores</td><td>Linear regression, Gaussian models</td></tr><tr><td><strong>Bernoulli</strong></td><td>Discrete</td><td>0, 1</td><td>Probability p</td><td><code>P(X = k) = p^k (1 - p)^(1 - k)</code></td><td>Coin flip</td><td>Binary classification</td></tr><tr><td><strong>Binomial</strong></td><td>Discrete</td><td>0 to n</td><td>Number of trials n, Success probability p</td><td><code>P(k) = C(n, k) * p^k * (1 - p)^(n - k)</code></td><td>Number of heads in 10 coin flips</td><td>Binary classification, hypothesis testing</td></tr><tr><td><strong>Multinomial</strong></td><td>Discrete</td><td>0 to n for each category</td><td>Number of trials n, Probabilities p₁, ..., pₖ</td><td><code>P(x₁, ..., xₖ) = (n! / (x₁!x₂!...xₖ!)) * ∏(pᵢ^xᵢ)</code></td><td>Rolling a dice multiple times</td><td>Text classification, NLP</td></tr><tr><td><strong>Categorical</strong></td><td>Discrete</td><td>1 to k</td><td>Probabilities p₁, ..., pₖ</td><td><code>P(X = i) = pᵢ</code></td><td>Choosing a color from a set of options</td><td>Classification, clustering</td></tr></tbody></table>',70)]))}]]),c=JSON.parse('{"path":"/posts/unimelb/COMP90049.html","title":"Introduction to Machine Learning (COMP90049)","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2025-03-02T00:00:00.000Z","category":["Learning Records"],"tag":["Unimelb"],"description":"Introduction to Machine Learning (COMP90049) Week 1 Machine learning is a method of teaching software to learn from data and make decisions on their own, without being explicitl...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/unimelb/COMP90049.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"Introduction to Machine Learning (COMP90049)"}],["meta",{"property":"og:description","content":"Introduction to Machine Learning (COMP90049) Week 1 Machine learning is a method of teaching software to learn from data and make decisions on their own, without being explicitl..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-03-17T11:30:38.000Z"}],["meta",{"property":"article:tag","content":"Unimelb"}],["meta",{"property":"article:published_time","content":"2025-03-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-17T11:30:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Introduction to Machine Learning (COMP90049)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-02T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-17T11:30:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Week 1","slug":"week-1","link":"#week-1","children":[{"level":3,"title":"Three ingredients for machine learning","slug":"three-ingredients-for-machine-learning","link":"#three-ingredients-for-machine-learning","children":[]},{"level":3,"title":"Linear Algebra Review","slug":"linear-algebra-review","link":"#linear-algebra-review","children":[]},{"level":3,"title":"Instances, Attributes, and Learning Paradigms (Supervised vs. Unsupervised Learning)","slug":"instances-attributes-and-learning-paradigms-supervised-vs-unsupervised-learning","link":"#instances-attributes-and-learning-paradigms-supervised-vs-unsupervised-learning","children":[]},{"level":3,"title":"Featured Data Types","slug":"featured-data-types","link":"#featured-data-types","children":[]}]},{"level":2,"title":"Equal Width vs. Equal Frequency vs. Clustering","slug":"equal-width-vs-equal-frequency-vs-clustering","link":"#equal-width-vs-equal-frequency-vs-clustering","children":[]},{"level":2,"title":"Standardization vs. Normalization","slug":"standardization-vs-normalization","link":"#standardization-vs-normalization","children":[]},{"level":2,"title":"Week 2","slug":"week-2","link":"#week-2","children":[{"level":3,"title":"K-Nearest Neighbors (KNN)","slug":"k-nearest-neighbors-knn","link":"#k-nearest-neighbors-knn","children":[]},{"level":3,"title":"Probility","slug":"probility","link":"#probility","children":[]}]}],"git":{"createdTime":1740916663000,"updatedTime":1742211038000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":3}]},"readingTime":{"minutes":6.01,"words":1803},"filePathRelative":"posts/unimelb/COMP90049.md","localizedDate":"March 2, 2025","excerpt":"\\n<h2>Week 1</h2>\\n<ul>\\n<li>Machine learning is a method of teaching software to learn from data and make decisions on their own, without being explicitly programmed.</li>\\n</ul>\\n<h3>Three ingredients for machine learning</h3>\\n<ol>\\n<li>\\n<p>Data\\n• Discrete vs continuous vs ...\\n• Big data vs small data\\n• Labeled data vs unlabeled data\\n• Public vs sensitive data</p>\\n</li>\\n<li>\\n<p>Models\\n• function mapping from inputs to outputs\\n• probabilistic machine learning models\\n• geometric machine learning models\\n• parameters of the function are unknown</p>\\n</li>\\n<li>\\n<p>Learning\\n• Improving (on a task) after data is taken into account\\n• Finding the best model parameters (for a given task)\\n• Supervised vs. unsupervised learning</p>\\n</li>\\n</ol>","autoDesc":true}')}}]);