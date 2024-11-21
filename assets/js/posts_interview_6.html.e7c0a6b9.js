"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[24],{6262:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,i]of t)a[e]=i;return a}},1341:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>o,data:()=>l});var i=a(641);const r=a.p+"assets/img/collection.c0799e62.png",n=a.p+"assets/img/thread-safe-list.325e0059.png",s={},o=(0,a(6262).A)(s,[["render",function(e,t){return(0,i.uX)(),(0,i.CE)("div",null,t[0]||(t[0]=[(0,i.Fv)('<h1 id="java-collections" tabindex="-1"><a class="header-anchor" href="#java-collections"><span>Java Collections</span></a></h1><figure><img src="'+r+'" alt="collection.png" tabindex="0" loading="lazy"><figcaption>collection.png</figcaption></figure><h2 id="array-is-a-linear-data-structure-that-stores-data-of-the-same-data-type-in-contiguous-memory-space" tabindex="-1"><a class="header-anchor" href="#array-is-a-linear-data-structure-that-stores-data-of-the-same-data-type-in-contiguous-memory-space"><span>Array is a linear data structure that stores data of the same data type in contiguous memory space.</span></a></h2><h3 id="addressing-formula-arr-i-baseaddress-i-datatypesize" tabindex="-1"><a class="header-anchor" href="#addressing-formula-arr-i-baseaddress-i-datatypesize"><span>Addressing formula arr[i] = baseAddress + i * dataTypeSize</span></a></h3><ul><li><strong>baseAddress</strong>: the starting address of the array</li><li><strong>dataTypeSize</strong>: represents the size of the element type in the array, currently the array stores int type data, dataTypeSize = 4 bytes</li><li><strong>arr</strong>: refers to the array</li><li><strong>i</strong>: refers to the index of the array</li></ul><h3 id="why-does-the-array-index-start-from-0-what-if-it-starts-from-1" tabindex="-1"><a class="header-anchor" href="#why-does-the-array-index-start-from-0-what-if-it-starts-from-1"><span>Why does the array index start from 0? What if it starts from 1?</span></a></h3><p>When accessing elements based on the array index, the index and addressing formula are used to calculate the memory corresponding to the element data. The addressing formula is: the starting address of the array + index multiplied by the size of the data type stored. If the array index starts from 1, an additional subtraction operation would be needed in the addressing formula, which adds an extra instruction for the CPU, resulting in lower performance.</p><h3 id="time-complexity-of-array-operations" tabindex="-1"><a class="header-anchor" href="#time-complexity-of-array-operations"><span>Time complexity of array operations</span></a></h3><ul><li><strong>Random access</strong> (accessing by index) O(1)</li><li><strong>Unknown index access</strong> O(n), if sorted can use binary search O(log n)</li><li>During insertion and deletion, to ensure the continuity of the array&#39;s memory, elements need to be moved, with an average time complexity of O(n)</li></ul><h2 id="what-is-the-underlying-implementation-principle-of-arraylist" tabindex="-1"><a class="header-anchor" href="#what-is-the-underlying-implementation-principle-of-arraylist"><span>What is the underlying implementation principle of ArrayList?</span></a></h2><ul><li><p><strong>Underlying data structure</strong>: ArrayList is implemented using a dynamic array.</p></li><li><p><strong>Initial capacity</strong>: The initial capacity of ArrayList is 0, and it will initialize to a capacity of 10 only when data is added for the first time.</p></li><li><p><strong>Expansion logic</strong>: When expanding, ArrayList increases its capacity to 1.5 times the original size, and each expansion requires copying the array.</p></li><li><p><strong>Addition logic</strong>: Ensure that the used length of the array (size) plus 1 is sufficient to store the next data. Calculate the capacity of the array; if the current used length plus 1 exceeds the current array length, call the grow method to expand (1.5 times the original). After ensuring there is space to store the new data, add the new element at the position of size. Return a boolean value indicating whether the addition was successful.</p></li></ul><h3 id="how-to-convert-between-arrays-and-lists-after-converting-an-array-to-a-list-using-arrays-aslist-if-the-array-content-is-modified-will-the-list-be-affected-after-converting-a-list-to-an-array-using-toarray-if-the-list-content-is-modified-will-the-array-be-affected" tabindex="-1"><a class="header-anchor" href="#how-to-convert-between-arrays-and-lists-after-converting-an-array-to-a-list-using-arrays-aslist-if-the-array-content-is-modified-will-the-list-be-affected-after-converting-a-list-to-an-array-using-toarray-if-the-list-content-is-modified-will-the-array-be-affected"><span>How to convert between arrays and Lists? After converting an array to a List using Arrays.asList, if the array content is modified, will the list be affected? After converting a List to an array using toArray, if the List content is modified, will the array be affected?</span></a></h3><p>To convert an array to a List, use the asList method of the java.util.Arrays utility class in the JDK. To convert a List to an array, use the toArray method of the List. The no-argument toArray method returns an Object array, and passing an initialized length array object returns that object array. After converting to a list using Arrays.asList, if the content of the array is modified, the list will be affected because it is constructed using an internal class ArrayList in the Arrays class, which wraps the provided collection, ultimately pointing to the same memory address. After converting a List to an array using toArray, if the List content is modified, the array will not be affected. When toArray is called, it performs a copy of the array, which has no relation to the original elements, so even if the List is modified later, the array remains unaffected.</p><h2 id="linkedlist" tabindex="-1"><a class="header-anchor" href="#linkedlist"><span>LinkedList</span></a></h2><h3 id="time-complexity-analysis-of-singly-linked-lists" tabindex="-1"><a class="header-anchor" href="#time-complexity-analysis-of-singly-linked-lists"><span>Time complexity analysis of singly linked lists</span></a></h3><p>Only when querying the head node does it not need to traverse the linked list, with a time complexity of O(1). Querying other nodes requires traversing the linked list, with a time complexity of O(n). Only when adding or deleting the head node does it not need to traverse the linked list, with a time complexity of O(1). Adding or deleting other nodes requires traversing the linked list to find the corresponding node before completing the addition or deletion, with a time complexity of O(n).</p><h3 id="time-complexity-analysis-of-doubly-linked-lists" tabindex="-1"><a class="header-anchor" href="#time-complexity-analysis-of-doubly-linked-lists"><span>Time complexity analysis of doubly linked lists</span></a></h3><p>The time complexity for querying the head and tail nodes is O(1). The average query time complexity is O(n). The time complexity for finding the predecessor node of a given node is O(1). The time complexity for adding or deleting head and tail nodes is O(1). The time complexity for adding or deleting other nodes is O(n). The time complexity for adding or deleting a given node is O(1).</p><h3 id="differences-between-arraylist-and-linkedlist" tabindex="-1"><a class="header-anchor" href="#differences-between-arraylist-and-linkedlist"><span>Differences between ArrayList and LinkedList</span></a></h3><h4 id="_1-underlying-data-structure" tabindex="-1"><a class="header-anchor" href="#_1-underlying-data-structure"><span>1. Underlying data structure</span></a></h4><ul><li><strong>ArrayList</strong> is implemented as a dynamic array.</li><li><strong>LinkedList</strong> is implemented as a doubly linked list.</li></ul><h4 id="_2-data-operation-efficiency" tabindex="-1"><a class="header-anchor" href="#_2-data-operation-efficiency"><span>2. Data operation efficiency</span></a></h4><p>ArrayList has a time complexity of O(1) for index-based queries (memory is contiguous, based on the addressing formula), while LinkedList does not support index-based queries. For unknown index lookups: both ArrayList and LinkedList require traversal, with a time complexity of O(n). Appending and deleting at the end of an ArrayList has a time complexity of O(1); other insertions and deletions require moving elements, with a time complexity of O(n). For LinkedList, adding or deleting head and tail nodes has a time complexity of O(1), while other operations require traversing the linked list, with a time complexity of O(n).</p><h4 id="_3-memory-space-usage" tabindex="-1"><a class="header-anchor" href="#_3-memory-space-usage"><span>3. Memory space usage</span></a></h4><p>ArrayList is backed by an array, which is contiguous in memory, saving space. LinkedList, being a doubly linked list, requires storing data and two pointers, thus consuming more memory.</p><h4 id="_4-thread-safety" tabindex="-1"><a class="header-anchor" href="#_4-thread-safety"><span>4. Thread safety</span></a></h4><p>Both ArrayList and LinkedList are not thread-safe. If thread safety is required, there are two options:</p><ul><li>Use local variables within methods, which are thread-safe.</li><li>Use thread-safe versions of ArrayList and LinkedList.</li></ul><figure><img src="'+n+'" alt="thread-safe-list.png" tabindex="0" loading="lazy"><figcaption>thread-safe-list.png</figcaption></figure><h2 id="hashmap" tabindex="-1"><a class="header-anchor" href="#hashmap"><span>HashMap</span></a></h2><h3 id="characteristics-of-a-red-black-tree" tabindex="-1"><a class="header-anchor" href="#characteristics-of-a-red-black-tree"><span>Characteristics of a red-black tree</span></a></h3><ul><li><strong>Property 1</strong>: Nodes are either red or black.</li><li><strong>Property 2</strong>: The root node is black.</li><li><strong>Property 3</strong>: Leaf nodes are all black null nodes.</li><li><strong>Property 4</strong>: Red nodes in a red-black tree have black children.</li><li><strong>Property 5</strong>: All paths from any node to leaf nodes contain the same number of black nodes.</li></ul><p>When adding or deleting nodes, if these properties are not met, rotations occur to maintain all properties. The time complexity of a red-black tree: searching, adding, and deleting are all O(log n).</p><h3 id="hash-collision-refers-to-multiple-keys-mapping-to-the-same-array-index" tabindex="-1"><a class="header-anchor" href="#hash-collision-refers-to-multiple-keys-mapping-to-the-same-array-index"><span>Hash collision (refers to multiple keys mapping to the same array index)</span></a></h3><h3 id="chaining-method" tabindex="-1"><a class="header-anchor" href="#chaining-method"><span>Chaining method</span></a></h3><p>In a hash table, each index position in the array can be referred to as a bucket or slot, and each bucket (slot) corresponds to a linked list where all elements with the same hash value are placed in the corresponding linked list of that slot.</p><p>When searching for or deleting an element, we also calculate the corresponding slot using the hash function and then traverse the linked list to find or delete it. On average, the time complexity for resolving collisions using the chaining method is O(1). The hash table may degenerate into a linked list, causing the query time complexity to degrade from O(1) to O(n). Transforming the linked list in the chaining method into other efficient dynamic data structures, such as a red-black tree, can reduce the query time complexity to O(log n), which helps prevent DDoS attacks.</p><h3 id="implementation-principle-of-hashmap" tabindex="-1"><a class="header-anchor" href="#implementation-principle-of-hashmap"><span>Implementation principle of HashMap</span></a></h3><p>The underlying data structure uses a hash table, which is an array + (linked list | red-black tree). When adding data, the key&#39;s value is calculated to determine the element&#39;s index in the array. If the key is the same, it is replaced. If different, it is stored in a linked list or red-black tree. Data retrieval is done by calculating the array index using the key&#39;s hash. Before JDK 1.8, the chaining method used an array + linked list. After JDK 1.8, it uses an array + linked list + red-black tree; if the linked list length exceeds 8 and the array length exceeds 64, it will convert from a linked list to a red-black tree.</p><h3 id="specific-process-of-hashmap-put" tabindex="-1"><a class="header-anchor" href="#specific-process-of-hashmap-put"><span>Specific process of HashMap put</span></a></h3><ol><li>Check if the key-value pair array table is null or empty; if so, execute resize() for expansion (initialization).</li><li>Calculate the hash value based on the key to get the array index.</li><li>If table[i] == null, the condition holds, directly create a new node and add it.</li><li>If table[i] == null does not hold: 4.1 Check if the first element of table[i] is the same as the key; if so, directly overwrite the value. 4.2 Check if table[i] is a treeNode, i.e., if table[i] is a red-black tree; if it is, directly insert the key-value pair into the tree. 4.3 Traverse table[i], insert data at the end of the linked list, then check if the length of the linked list exceeds 8; if so, convert the linked list to a red-black tree and perform the insertion operation in the red-black tree. During traversal, if the key already exists, directly overwrite the value.</li><li>After successful insertion, check if the actual number of existing key-value pairs size exceeds the maximum capacity threshold (array length * 0.75); if so, perform expansion.</li></ol><h3 id="hashmap-expansion-mechanism" tabindex="-1"><a class="header-anchor" href="#hashmap-expansion-mechanism"><span>HashMap expansion mechanism</span></a></h3><p>When adding elements or initializing, the resize method needs to be called for expansion. The first time data is added, the array length is initialized to 16, and subsequent expansions occur when the expansion threshold (array length * 0.75) is reached. Each expansion doubles the previous capacity. After expansion, a new array is created, and the data from the old array needs to be moved to the new array. For nodes without hash collisions, the new array index is calculated directly using e.hash &amp; (newCap - 1). If it is a red-black tree, the red-black tree insertion is performed. If it is a linked list, the linked list needs to be traversed, possibly splitting the linked list, checking whether (e.hash &amp; oldCap) is 0; the element&#39;s position will either stay in the original position or move to the original position + the increased array size.</p>',43)]))}]]),l=JSON.parse('{"path":"/posts/interview/6.html","title":"Java Collections","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2024-11-21T00:00:00.000Z","category":["Learning Records"],"tag":["Technical Interview"],"description":"Java Collections collection.pngcollection.png Array is a linear data structure that stores data of the same data type in contiguous memory space. Addressing formula arr[i] = bas...","head":[["meta",{"property":"og:url","content":"https://crc011220.github.io/personalweb/personalweb/posts/interview/6.html"}],["meta",{"property":"og:site_name","content":"Richard Chen"}],["meta",{"property":"og:title","content":"Java Collections"}],["meta",{"property":"og:description","content":"Java Collections collection.pngcollection.png Array is a linear data structure that stores data of the same data type in contiguous memory space. Addressing formula arr[i] = bas..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-21T12:08:12.000Z"}],["meta",{"property":"article:tag","content":"Technical Interview"}],["meta",{"property":"article:published_time","content":"2024-11-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-21T12:08:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java Collections\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-21T12:08:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Richard Chen\\"}]}"]]},"headers":[{"level":2,"title":"Array is a linear data structure that stores data of the same data type in contiguous memory space.","slug":"array-is-a-linear-data-structure-that-stores-data-of-the-same-data-type-in-contiguous-memory-space","link":"#array-is-a-linear-data-structure-that-stores-data-of-the-same-data-type-in-contiguous-memory-space","children":[{"level":3,"title":"Addressing formula arr[i] = baseAddress + i * dataTypeSize","slug":"addressing-formula-arr-i-baseaddress-i-datatypesize","link":"#addressing-formula-arr-i-baseaddress-i-datatypesize","children":[]},{"level":3,"title":"Why does the array index start from 0? What if it starts from 1?","slug":"why-does-the-array-index-start-from-0-what-if-it-starts-from-1","link":"#why-does-the-array-index-start-from-0-what-if-it-starts-from-1","children":[]},{"level":3,"title":"Time complexity of array operations","slug":"time-complexity-of-array-operations","link":"#time-complexity-of-array-operations","children":[]}]},{"level":2,"title":"What is the underlying implementation principle of ArrayList?","slug":"what-is-the-underlying-implementation-principle-of-arraylist","link":"#what-is-the-underlying-implementation-principle-of-arraylist","children":[{"level":3,"title":"How to convert between arrays and Lists? After converting an array to a List using Arrays.asList, if the array content is modified, will the list be affected? After converting a List to an array using toArray, if the List content is modified, will the array be affected?","slug":"how-to-convert-between-arrays-and-lists-after-converting-an-array-to-a-list-using-arrays-aslist-if-the-array-content-is-modified-will-the-list-be-affected-after-converting-a-list-to-an-array-using-toarray-if-the-list-content-is-modified-will-the-array-be-affected","link":"#how-to-convert-between-arrays-and-lists-after-converting-an-array-to-a-list-using-arrays-aslist-if-the-array-content-is-modified-will-the-list-be-affected-after-converting-a-list-to-an-array-using-toarray-if-the-list-content-is-modified-will-the-array-be-affected","children":[]}]},{"level":2,"title":"LinkedList","slug":"linkedlist","link":"#linkedlist","children":[{"level":3,"title":"Time complexity analysis of singly linked lists","slug":"time-complexity-analysis-of-singly-linked-lists","link":"#time-complexity-analysis-of-singly-linked-lists","children":[]},{"level":3,"title":"Time complexity analysis of doubly linked lists","slug":"time-complexity-analysis-of-doubly-linked-lists","link":"#time-complexity-analysis-of-doubly-linked-lists","children":[]},{"level":3,"title":"Differences between ArrayList and LinkedList","slug":"differences-between-arraylist-and-linkedlist","link":"#differences-between-arraylist-and-linkedlist","children":[]}]},{"level":2,"title":"HashMap","slug":"hashmap","link":"#hashmap","children":[{"level":3,"title":"Characteristics of a red-black tree","slug":"characteristics-of-a-red-black-tree","link":"#characteristics-of-a-red-black-tree","children":[]},{"level":3,"title":"Hash collision (refers to multiple keys mapping to the same array index)","slug":"hash-collision-refers-to-multiple-keys-mapping-to-the-same-array-index","link":"#hash-collision-refers-to-multiple-keys-mapping-to-the-same-array-index","children":[]},{"level":3,"title":"Chaining method","slug":"chaining-method","link":"#chaining-method","children":[]},{"level":3,"title":"Implementation principle of HashMap","slug":"implementation-principle-of-hashmap","link":"#implementation-principle-of-hashmap","children":[]},{"level":3,"title":"Specific process of HashMap put","slug":"specific-process-of-hashmap-put","link":"#specific-process-of-hashmap-put","children":[]},{"level":3,"title":"HashMap expansion mechanism","slug":"hashmap-expansion-mechanism","link":"#hashmap-expansion-mechanism","children":[]}]}],"git":{"createdTime":1732190892000,"updatedTime":1732190892000,"contributors":[{"name":"Ruochen Chen","email":"ruocchen1220@gmail.com","commits":1}]},"readingTime":{"minutes":5.64,"words":1692},"filePathRelative":"posts/interview/6.md","localizedDate":"November 21, 2024","excerpt":"\\n<figure><figcaption>collection.png</figcaption></figure>\\n<h2>Array is a linear data structure that stores data of the same data type in contiguous memory space.</h2>\\n<h3>Addressing formula arr[i] = baseAddress + i * dataTypeSize</h3>\\n<ul>\\n<li><strong>baseAddress</strong>: the starting address of the array</li>\\n<li><strong>dataTypeSize</strong>: represents the size of the element type in the array, currently the array stores int type data, dataTypeSize = 4 bytes</li>\\n<li><strong>arr</strong>: refers to the array</li>\\n<li><strong>i</strong>: refers to the index of the array</li>\\n</ul>","autoDesc":true}')}}]);