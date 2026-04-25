LRU Cache in JavaScript
1) Lesson Title
Understanding and Implementing an LRU Cache in JavaScript
2) Goal
Learn what an LRU cache is, why it is useful, how it works internally, and how to implement it in JavaScript using:
•	a hash map
•	a doubly linked list
________________________________________
3) Big Idea
An LRU Cache means:
Least Recently Used Cache
It is a cache with limited capacity.
When the cache becomes full and a new item must be added, it removes the item that was used the longest time ago.
So the rule is:
•	recently used items stay
•	least recently used items get removed first
________________________________________
4) Why This Matters
LRU cache is important because it appears in:
•	coding interviews
•	system design
•	browser caching
•	database caching
•	memory optimization
•	real applications that need fast repeated access
It is also one of the best examples of combining two data structures together.
________________________________________
5) Real-Life Analogy
Imagine a small desk that can hold only 3 books.
You use some books often, and some books not often.
When a new book arrives and the desk is already full, you remove the book you have not used for the longest time.
That is exactly how an LRU cache works.
________________________________________
6) What Is a Cache?
A cache is a small, fast storage area used to keep data that may be needed again soon.
The purpose of a cache is:
•	faster access
•	less repeated work
•	better performance
Example:
If you already looked up something once, the cache can help you get it quickly next time.
________________________________________
7) What Does “Least Recently Used” Mean?
“Least recently used” means:
the item that has gone the longest time without being accessed.
So if we have these items:
•	A was used just now
•	B was used a minute ago
•	C was used longest ago
Then C is the least recently used item.
If the cache is full, C should be removed first.
________________________________________
8) What Operations Should an LRU Cache Support?
A) get(key)
•	return the value for the key if it exists
•	mark that item as recently used
B) put(key, value)
•	add a new key-value pair
•	if key already exists, update it
•	mark it as recently used
•	if cache is full, remove the least recently used item
________________________________________
9) The Main Challenge
An LRU cache must do two things very fast:
1. Find an item by key quickly
This suggests a hash map
2. Update usage order quickly
This suggests a linked structure
If we use only an array:
•	searching can be slow
•	removing and moving items can be expensive
So a better design is needed.
________________________________________
10) Why Hash Map Alone Is Not Enough
A hash map is excellent for:
•	fast lookup by key
•	fast insert
•	fast delete
But it does not naturally track recent-use order.
So with a hash map alone, we can find items fast, but we cannot efficiently know:
•	which item is oldest
•	which item should be evicted
________________________________________
11) Why Linked List Helps
A linked list helps us maintain order.
We can arrange nodes like this:
•	most recently used near the front
•	least recently used near the back
Then:
•	when an item is used, move it to the front
•	when cache is full, remove the node at the back
That makes eviction easy.
________________________________________
12) Why a Doubly Linked List, Not a Singly Linked List?
A doubly linked list is better because each node has:
•	next
•	prev
This allows:
•	fast removal of a node from the middle
•	fast moving of a node to the front
•	fast removal of the last node
A singly linked list would make this harder because removing a node often needs access to the previous node.
So the standard LRU design uses:
•	hash map
•	doubly linked list
________________________________________
13) Standard Design of LRU Cache
Hash Map
Stores:
•	key -> node
This gives fast lookup.
Doubly Linked List
Stores usage order:
•	front = most recently used
•	back = least recently used
This gives fast reordering and eviction.
________________________________________
14) Core Strategy
When get(key) happens
•	if key exists:
o	return the value
o	move the node to the front
•	if key does not exist:
o	return -1 or null
When put(key, value) happens
•	if key already exists:
o	update its value
o	move it to the front
•	if key is new:
o	create new node
o	add it to the front
o	if capacity exceeded:
	remove the least recently used node from the back
________________________________________
15) Visual Model
Suppose capacity = 3
Usage order from left to right:
Most Recent <-> ... <-> Least Recent
Example:
[ C ] <-> [ A ] <-> [ B ]
This means:
•	C is most recently used
•	B is least recently used
If cache becomes full and we add a new item, B should be removed.
________________________________________
16) Node Structure
Each node should store:
•	key
•	value
•	prev
•	next
Why store the key too?
Because when we evict the least recently used node from the list, we also need to remove that key from the hash map.
________________________________________
17) Building the Node Class
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
________________________________________
18) Why We Use Dummy Head and Tail
A very clean implementation uses dummy head and dummy tail nodes.
Why?
Because they simplify edge cases.
Instead of worrying about:
•	empty list
•	one-node list
•	updating head manually
•	updating tail manually
We keep this shape:
head <-> real nodes <-> tail
Where head and tail are dummy nodes.
This makes insertion and removal cleaner.
________________________________________
19) LRU Cache Class Structure
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    this.head = new Node(0, 0); // dummy head
    this.tail = new Node(0, 0); // dummy tail

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
}
What each part means
•	capacity = maximum number of items
•	cache = hash map for fast lookup
•	head = dummy front
•	tail = dummy back
________________________________________
20) Helper Method: Remove a Node
We need a helper to disconnect a node from the doubly linked list.
_remove(node) {
  const prevNode = node.prev;
  const nextNode = node.next;

  prevNode.next = nextNode;
  nextNode.prev = prevNode;
}
What this does
It removes the node from the chain by connecting its neighbors together.
________________________________________
21) Helper Method: Insert Node Right After Head
We want the most recently used node near the front.
_insert(node) {
  node.next = this.head.next;
  node.prev = this.head;

  this.head.next.prev = node;
  this.head.next = node;
}
What this does
It inserts the node right after the dummy head.
That means the node becomes the most recently used item.
________________________________________
22) Why Remove and Insert Are So Important
Whenever an item is used, we want to move it to the front.
The easiest way is:
1.	remove it from current position
2.	insert it near the front
So “move to front” is really:
this._remove(node);
this._insert(node);
________________________________________
23) Implementing get(key)
get(key) {
  if (!this.cache.has(key)) {
    return -1;
  }

  const node = this.cache.get(key);

  this._remove(node);
  this._insert(node);

  return node.value;
}
Explanation
If key is not in cache:
•	return -1
If key exists:
•	get the node
•	move it to the front
•	return the value
Why move it to the front?
Because it was just used, so now it is most recently used.
________________________________________
24) Implementing put(key, value)
put(key, value) {
  if (this.cache.has(key)) {
    const existingNode = this.cache.get(key);
    this._remove(existingNode);
  }

  const newNode = new Node(key, value);
  this.cache.set(key, newNode);
  this._insert(newNode);

  if (this.cache.size > this.capacity) {
    const lruNode = this.tail.prev;
    this._remove(lruNode);
    this.cache.delete(lruNode.key);
  }
}
________________________________________
25) Explanation of put
If key already exists
•	remove old node from list
•	create new updated node
•	insert new node at front
•	update map
If key does not exist
•	create node
•	add to map
•	insert at front
If capacity exceeded
•	remove node before dummy tail
•	that node is least recently used
•	also remove its key from map
________________________________________
26) Full Implementation
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    this.head = new Node(0, 0); // dummy head
    this.tail = new Node(0, 0); // dummy tail

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _remove(node) {
    const prevNode = node.prev;
    const nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  _insert(node) {
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const node = this.cache.get(key);
    this._remove(node);
    this._insert(node);

    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const existingNode = this.cache.get(key);
      this._remove(existingNode);
      this.cache.delete(key);
    }

    const newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this._insert(newNode);

    if (this.cache.size > this.capacity) {
      const lruNode = this.tail.prev;
      this._remove(lruNode);
      this.cache.delete(lruNode.key);
    }
  }
}
________________________________________
27) Example Walkthrough
Let capacity = 2
const lru = new LRUCache(2);
Step 1
lru.put(1, 10);
Cache:
[1]
Order:
1
________________________________________
Step 2
lru.put(2, 20);
Cache:
[1, 2]
Most recent order:
2 <-> 1
Why?
Because new item goes to front.
________________________________________
Step 3
lru.get(1);
Returns:
10
Now 1 becomes most recently used.
Order:
1 <-> 2
Now 2 is least recently used.
________________________________________
Step 4
lru.put(3, 30);
Capacity is 2, so adding 3 causes overflow.
Least recently used is:
2
So 2 is removed.
New order:
3 <-> 1
Cache now contains:
•	1
•	3
________________________________________
Step 5
lru.get(2);
Returns:
-1
Because 2 was evicted.
________________________________________
Step 6
lru.put(4, 40);
Current order before insert:
3 <-> 1
Least recently used is:
1
or wait — check recent usage carefully.
After Step 4:
3 <-> 1
If no access happened after that, 1 is least recent because 3 was just inserted at front.
So inserting 4 evicts 1.
New order:
4 <-> 3
________________________________________
28) Test Code
const lru = new LRUCache(2);

lru.put(1, 10);
lru.put(2, 20);

console.log(lru.get(1)); // 10

lru.put(3, 30);          // evicts key 2
console.log(lru.get(2)); // -1

lru.put(4, 40);          // evicts key 1
console.log(lru.get(1)); // -1
console.log(lru.get(3)); // 30
console.log(lru.get(4)); // 40
________________________________________
29) Time Complexity
Operation	Time Complexity
get(key)	O(1)
put(key, value)	O(1)
Why O(1)?
Because:
•	hash map lookup is O(1) average
•	removing a node from doubly linked list is O(1)
•	inserting a node at front is O(1)
That is the big reason for this design.
________________________________________
30) Space Complexity
Space Complexity
O(capacity)
Because we store:
•	up to capacity nodes
•	up to capacity entries in the map
________________________________________
31) Why This Design Is Famous
This is a classic interview question because it tests whether you understand:
•	hash maps
•	doubly linked lists
•	combining data structures
•	time complexity
•	design trade-offs
It is not only about coding.
It is about choosing the right structure for the right job.
________________________________________
32) Common Mistakes
Mistake 1
Using only an array
This makes reorder and deletion slower.
Mistake 2
Using only a hash map
This gives no efficient recent-use order.
Mistake 3
Forgetting to move a node to the front after get
Mistake 4
Forgetting to evict when capacity is exceeded
Mistake 5
Removing from the list but forgetting to remove from the map
Mistake 6
Not storing key inside the node
Then eviction becomes harder because you need the key to remove from the map.
________________________________________
33) Why Dummy Nodes Make Life Easier
Without dummy head and tail, you need many edge-case checks for:
•	empty list
•	first real node
•	last real node
•	one-node list
With dummy nodes:
•	insertions are more consistent
•	removals are cleaner
•	code is easier to reason about
This is a strong interview-friendly pattern.
________________________________________
34) Interview Explanation — How to Say It Clearly
If your mentor asks, “Why use hash map plus doubly linked list?”
A strong answer is:
The hash map gives O(1) lookup by key, and the doubly linked list gives O(1) removal and insertion for maintaining usage order. Together, they allow both get and put to run in O(1) average time.
If your mentor asks, “Why doubly linked list?”
You can say:
Because I need to remove nodes from the middle and move them to the front efficiently. A doubly linked list lets me do that in O(1) once I have the node.
________________________________________
35) Quick Memory Hook
Hash map finds fast
Doubly linked list orders fast
And together:
O(1) get and O(1) put
________________________________________
36) Practice Questions
Easy
1.	What does LRU stand for?
2.	What does a cache do?
3.	Which item gets removed when cache is full?
Medium
4.	Why is a hash map used in LRU cache?
5.	Why is a doubly linked list used?
6.	Why is the least recently used node near the back?
Interview level
7.	Why is get O(1)?
8.	Why is put O(1)?
9.	Why do we store the key inside each node?
________________________________________
37) Mini Challenge
Modify the implementation so that put(key, value) updates the value of an existing node without creating a new node.
This is a good exercise because it improves pointer confidence.
________________________________________
38) Summary
An LRU cache:
•	stores key-value pairs
•	has limited capacity
•	removes the least recently used item when full
•	uses a hash map for fast lookup
•	uses a doubly linked list for fast ordering
•	supports:
o	get(key) in O(1)
o	put(key, value) in O(1)
________________________________________
39) Homework
1.	Write the LRU cache from memory
2.	Trace this sequence by hand:
o	put(1, 100)
o	put(2, 200)
o	get(1)
o	put(3, 300)
o	get(2)
o	put(4, 400)
3.	Explain after each step:
o	which item is most recent
o	which item is least recent
o	which key gets evicted
