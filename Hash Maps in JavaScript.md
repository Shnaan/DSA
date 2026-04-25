Hash Maps in JavaScript
Understanding Hash Maps in JavaScript
2) Goal
Learn what a hash map is, how it stores data, why it is fast for lookup, and how JavaScript uses similar ideas with objects and Map.
3) Big Idea
A hash map is a data structure that stores data in key-value pairs.
It lets you:
•	store a value using a key
•	retrieve the value quickly using that same key
Example idea:
•	key: "name"
•	value: "Ali"
So a hash map connects:
key → value
________________________________________
4) Why This Matters
Hash maps are one of the most important data structures in programming.
They are used for:
•	fast lookups
•	counting frequencies
•	caching
•	storing settings
•	checking duplicates
•	building many interview solutions
In JavaScript, hash map thinking appears all the time.
________________________________________
5) Real-Life Analogy
Imagine a locker system in a school.
Each locker has:
•	a unique number
•	items inside it
If you know the locker number, you can go directly to the correct locker.
That is similar to a hash map:
•	the key is like the locker number
•	the value is what is stored inside
________________________________________
6) Main Concepts
A) Key
A key is the label used to store or find data.
Examples:
•	"name"
•	"age"
•	"email"
________________________________________
B) Value
A value is the actual data connected to the key.
Examples:
•	"Fakhreldin"
•	30
•	"example@gmail.com"
________________________________________
C) Key-Value Pair
A hash map stores information as:
key: value
Example:
"name": "Sara"
________________________________________
D) Hash Function
A hash function takes a key and converts it into an index or storage location.
This is how the hash map knows where to place the value.
You do not usually write this yourself in normal JavaScript use, but the concept is very important.
________________________________________
7) What Makes a Hash Map Special?
The main strength of a hash map is fast lookup.
If you know the key, you can usually:
•	insert quickly
•	find quickly
•	delete quickly
That is why hash maps are often much faster than looping through an array.
________________________________________
8) JavaScript and Hash Maps
In JavaScript, the two main ways to work with hash-map-like data are:
•	Objects
•	Map
Example with object
const person = {
  name: "Ali",
  age: 25
};
Example with Map
const personMap = new Map();
personMap.set("name", "Ali");
personMap.set("age", 25);
Both use key-value storage, but they are not exactly the same.
________________________________________
9) Hash Map with an Object
Create an object
const user = {
  name: "Hassan",
  country: "Sudan",
  job: "Developer"
};
Access a value
console.log(user.name);        // Hassan
console.log(user["country"]);  // Sudan
Add a new key-value pair
user.age = 30;
Update a value
user.job = "Software Engineer";
Delete a key
delete user.country;
________________________________________
10) Hash Map with Map
Create a Map
const scores = new Map();
Add items
scores.set("Ali", 95);
scores.set("Sara", 88);
scores.set("Mona", 91);
Get a value
console.log(scores.get("Sara")); // 88
Check if key exists
console.log(scores.has("Ali")); // true
Delete a key
scores.delete("Mona");
Size
console.log(scores.size);
________________________________________
11) Object vs Map
Feature	Object	Map
Stores key-value pairs	Yes	Yes
Keys are usually strings/symbols	Yes	No, can be many types
Easy syntax	Yes	Yes
Built for general key-value storage	Sometimes	Yes
Keeps insertion order clearly	Less ideal	Better
Has built-in methods like set, get, has	No	Yes
Important idea
For interview learning, both help you understand hash map thinking.
In many practical JavaScript cases:
•	objects are common
•	Map is often cleaner for true hash map behavior
________________________________________
12) How a Hash Map Works Internally
Internally, a hash map usually works like this:
1.	Take the key
2.	Send it through a hash function
3.	Convert it into an index
4.	Store the value at that location
Example idea:
"apple" -> hash function -> index 4
"banana" -> hash function -> index 10
So the key is transformed into a place in memory.
This is why lookup is usually fast.
________________________________________
13) Collision
Sometimes two different keys produce the same index.
This is called a collision.
Example idea:
"cat" -> index 3
"tac" -> index 3
Now both want the same location.
Hash maps use strategies to handle this, such as:
•	chaining
•	open addressing
In JavaScript, the engine handles this internally.
You mainly need to understand the concept.
________________________________________
14) Why Lookup is Fast
Because instead of checking items one by one like an array,
a hash map uses the key to go directly to the location.
Array idea
To find "Sara" in an array, you may need to loop.
Hash map idea
Use the key "Sara" directly.
That is why average lookup is usually:
O(1)
________________________________________
15) Common Operations and Time Complexity
Operation	Average Time
Insert	O(1)
Lookup	O(1)
Delete	O(1)
Important note
In worst cases, collisions can make operations slower, sometimes O(n).
But average case is what makes hash maps powerful.
________________________________________
16) Hash Map vs Array
Feature	Array	Hash Map
Access by numeric index	Fast	Not the main purpose
Search by value/key	Often slower	Usually faster by key
Order matters	Yes	Not always
Best for	Lists	Lookup tables
Simple rule
•	Use an array when order and position matter
•	Use a hash map when lookup by key matters
________________________________________
17) Real Coding Uses
A) Count frequencies
const letters = ["a", "b", "a", "c", "b", "a"];
const count = {};

for (let letter of letters) {
  count[letter] = (count[letter] || 0) + 1;
}

console.log(count);
Output:
{ a: 3, b: 2, c: 1 }
This is one of the most common uses of a hash map.
________________________________________
B) Check duplicates
const nums = [1, 2, 3, 2];
const seen = {};

for (let num of nums) {
  if (seen[num]) {
    console.log("Duplicate found:", num);
    break;
  }
  seen[num] = true;
}
________________________________________
C) Fast lookup table
const capitals = {
  Sudan: "Khartoum",
  Egypt: "Cairo",
  France: "Paris"
};

console.log(capitals["Egypt"]); // Cairo
________________________________________
18) Full Example with Object
const phoneBook = {
  Ali: "12345",
  Sara: "67890"
};

console.log(phoneBook["Ali"]); // 12345

phoneBook["Mona"] = "99999";
console.log(phoneBook);

delete phoneBook["Sara"];
console.log(phoneBook);
________________________________________
19) Full Example with Map
const inventory = new Map();

inventory.set("apples", 10);
inventory.set("bananas", 5);
inventory.set("oranges", 8);

console.log(inventory.get("bananas")); // 5
console.log(inventory.has("apples"));  // true

inventory.set("apples", 15); // update
inventory.delete("oranges");

console.log(inventory.size); // 2
________________________________________
20) Strengths of Hash Maps
Hash maps are great because they give:
•	very fast lookup by key
•	fast insertion
•	fast deletion
•	powerful counting and tracking patterns
•	simple ways to organize data
________________________________________
21) Weaknesses of Hash Maps
Hash maps are weaker when:
•	you need sorted order
•	you want position-based access
•	collisions become a problem
•	memory overhead matters
Also, hash maps are not ideal when you need to loop in exact ordered sequence like an array list.
________________________________________
22) Important Interview Insight
Many interview problems become easier when you ask:
Can I use a hash map here?
Especially when the problem involves:
•	counting
•	matching
•	tracking seen values
•	checking duplicates
•	fast lookup
This is one of the biggest patterns in coding interviews.
________________________________________
23) Common Mistakes
Mistake 1
Using an array when a hash map is better
Mistake 2
Forgetting that object keys are usually strings
Mistake 3
Not checking whether a key exists
Mistake 4
Confusing Map and plain object behavior
Mistake 5
Thinking hash maps automatically keep things sorted
________________________________________
24) Frequency Counter Pattern
This is a famous interview pattern.
Example:
Count how many times each word appears.
const words = ["hi", "hello", "hi", "welcome"];
const freq = {};

for (let word of words) {
  freq[word] = (freq[word] || 0) + 1;
}

console.log(freq);
Output:
{ hi: 2, hello: 1, welcome: 1 }
This is a classic use of hash maps.
________________________________________
25) Practice Questions
Easy
1.	What is a hash map?
2.	What are the two parts of a key-value pair?
3.	Why is hash map lookup usually fast?
Medium
4.	What is a collision?
5.	Why is average lookup O(1)?
6.	What is one difference between Object and Map in JavaScript?
Coding
7.	Count frequency of numbers in an array
8.	Find the first duplicate in an array
9.	Build a simple phone book using a hash map
________________________________________
26) Mini Challenge
Create a frequency counter for this array:
[1, 2, 1, 3, 2, 1, 4]
Expected output
{ 1: 3, 2: 2, 3: 1, 4: 1 }
Solution
const nums = [1, 2, 1, 3, 2, 1, 4];
const freq = {};

for (let num of nums) {
  freq[num] = (freq[num] || 0) + 1;
}

console.log(freq);
________________________________________
27) Summary
A hash map:
•	stores data as key-value pairs
•	uses keys for very fast lookup
•	usually gives O(1) average insert, find, and delete
•	is used heavily in interviews and real applications
•	can be represented in JavaScript using objects or Map
________________________________________
28) Simple Memory Hook
Array = find by position
Hash map = find by key
________________________________________
29) Homework
Build these in JavaScript:
•	a phone book with object
•	a product inventory with Map
•	a frequency counter
•	a duplicate checker
Then explain:
•	why hash maps are faster than looping through arrays for lookup

