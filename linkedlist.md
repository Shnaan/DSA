Understanding Linked Lists in JavaScript**

## 2) Goal

Learn what a linked list is, how it works, why it is different from arrays, and how to build a simple linked list in JavaScript.

## 3) Big Idea

A **linked list** is a linear data structure made of **nodes**.

Each node stores:

* a **value**
* a **reference** to the next node

Unlike arrays, linked lists do **not** store elements in one continuous block of memory.

---

## 4) Why This Matters

Linked lists are important because they help you understand:

* how data can be connected node by node
* how insertion and deletion can be efficient
* how some other data structures work internally, like stacks, queues, and hash tables in some implementations

They also appear often in coding interviews.

---

## 5) Real-Life Analogy

Imagine a treasure hunt.

Each paper has:

* a message
* directions to the next paper

You do not have all papers in one box like an array.
Instead, each paper tells you where the next one is.

That is how a linked list works.

---

## 6) Main Concepts

### A) Node

A **node** is one unit in the linked list.

Example:

```javascript
{
  value: 10,
  next: null
}
```

* `value` stores the data
* `next` points to the next node
* `null` means there is no next node

---

### B) Head

The **head** is the first node in the list.

If you lose the head, you lose access to the whole list.

---

### C) Tail

The **tail** is the last node.

Its `next` is usually `null`.

---

### D) Traversal

To read all values in a linked list, you start from the head and move one node at a time using `next`.

---

## 7) Linked List vs Array

| Feature             | Array             | Linked List     |
| ------------------- | ----------------- | --------------- |
| Access by index     | Fast              | Slow            |
| Insert at beginning | Costly            | Efficient       |
| Delete at beginning | Costly            | Efficient       |
| Memory layout       | Continuous        | Separate nodes  |
| Traversal           | Simple with index | Follow pointers |

### Important idea

* In an **array**, getting `arr[3]` is easy.
* In a **linked list**, to get the 4th item, you must start from the head and move step by step.

---

## 8) Visual Example

Suppose we have:

```javascript
10 -> 20 -> 30 -> null
```

This means:

* first node has value `10`
* it points to node `20`
* node `20` points to node `30`
* node `30` points to `null`

---

## 9) Building a Node in JavaScript

### Using a class

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

Example:

```javascript
const firstNode = new Node(10);
console.log(firstNode);
```

Output idea:

```javascript
Node { value: 10, next: null }
```

---

## 10) Building a Simple Linked List Class

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

### What this stores

* `head`: first node
* `tail`: last node
* `length`: number of nodes

---

## 11) Append to the End

### Method: `append(value)`

This adds a new node at the end.

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }
}
```

### Example

```javascript
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log(list);
```

### What happens

1. Add `10`

   * head = 10
   * tail = 10

2. Add `20`

   * old tail `10` points to `20`
   * tail becomes `20`

3. Add `30`

   * old tail `20` points to `30`
   * tail becomes `30`

---

## 12) Print the List

We often want to see all values.

```javascript
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  print() {
    let current = this.head;
    let result = [];

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(" -> ") + " -> null");
  }
}
```

### Example

```javascript
const list = new LinkedList();
list.append(5);
list.append(15);
list.append(25);

list.print();
```

Output:

```javascript
5 -> 15 -> 25 -> null
```

---

## 13) Add to the Beginning

### Method: `prepend(value)`

This adds a node to the start.

```javascript
prepend(value) {
  const newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }

  this.length++;
}
```

### Example

If list is:

```javascript
10 -> 20 -> null
```

After:

```javascript
list.prepend(5);
```

It becomes:

```javascript
5 -> 10 -> 20 -> null
```

---

## 14) Remove from the Beginning

### Method: `removeHead()`

```javascript
removeHead() {
  if (!this.head) return null;

  const removedNode = this.head;
  this.head = this.head.next;

  if (!this.head) {
    this.tail = null;
  }

  this.length--;
  return removedNode.value;
}
```

### Example

If list is:

```javascript
5 -> 10 -> 20 -> null
```

After removing head:

```javascript
10 -> 20 -> null
```

---

## 15) Traverse the List

Traversal means visiting every node.

```javascript
traverse() {
  let current = this.head;

  while (current) {
    console.log(current.value);
    current = current.next;
  }
}
```

This starts at the head and keeps moving until `current` becomes `null`.

---

## 16) Search for a Value

```javascript
contains(value) {
  let current = this.head;

  while (current) {
    if (current.value === value) {
      return true;
    }
    current = current.next;
  }

  return false;
}
```

### Example

```javascript
console.log(list.contains(15)); // true
console.log(list.contains(100)); // false
```

---

## 17) Full Example

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  removeHead() {
    if (!this.head) return null;

    const removedValue = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;
    return removedValue;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  print() {
    let current = this.head;
    let values = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(" -> ") + " -> null");
  }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.print(); // 10 -> 20 -> 30 -> null

list.prepend(5);
list.print(); // 5 -> 10 -> 20 -> 30 -> null

console.log(list.contains(20)); // true
console.log(list.contains(99)); // false

console.log(list.removeHead()); // 5
list.print(); // 10 -> 20 -> 30 -> null
```

---

## 18) Time Complexity

### Common operations in singly linked list

| Operation              | Time Complexity |
| ---------------------- | --------------- |
| Add at end (with tail) | O(1)            |
| Add at beginning       | O(1)            |
| Remove from beginning  | O(1)            |
| Search                 | O(n)            |
| Access by index        | O(n)            |
| Insert in middle       | O(n)            |
| Delete in middle       | O(n)            |

### Why search is O(n)

Because you may need to visit every node one by one.

---

## 19) Strengths of Linked Lists

Linked lists are useful when:

* you insert and delete items often
* you do not need fast random access by index
* you want flexible size without shifting elements like arrays

---

## 20) Weaknesses of Linked Lists

Linked lists are weaker when:

* you need quick access like `list[3]`
* you want simple built-in methods like arrays
* memory overhead matters, because each node stores extra reference data

---

## 21) Important Interview Insight

A linked list is great for:

* **insertion/deletion at the head** → very fast
* **random access** → not good

An array is great for:

* **random access by index**
* but insertion/deletion at the beginning is more expensive

---

## 22) Common Mistakes

### Mistake 1

Forgetting to update `tail`

### Mistake 2

Forgetting to increase or decrease `length`

### Mistake 3

Losing the rest of the list by changing `next` incorrectly

### Mistake 4

Not handling the empty list case

---

## 23) Quick Comparison with Real JavaScript Arrays

```javascript
const arr = [10, 20, 30];
console.log(arr[1]); // 20
```

Arrays allow direct index access.

But in a linked list:

* there is no direct index lookup
* you must move node by node

That is why linked lists teach an important low-level way of thinking.

---

## 24) Practice Questions

### Easy

1. What are the two main parts of a node?
2. What does `head` mean?
3. What does `null` mean in the last node?

### Medium

4. Why is searching in a linked list O(n)?
5. Why is prepend usually O(1)?
6. Why is array access faster than linked list access?

### Coding

7. Write a method to count how many nodes are in the list.
8. Write a method to return the last value.
9. Write a method to convert the linked list into an array.

---

## 25) Mini Challenge

Create a method called `toArray()`.

### Expected behavior

If the list is:

```javascript
5 -> 10 -> 15 -> null
```

Then:

```javascript
list.toArray();
```

Should return:

```javascript
[5, 10, 15]
```

### Solution

```javascript
toArray() {
  let current = this.head;
  let result = [];

  while (current) {
    result.push(current.value);
    current = current.next;
  }

  return result;
}
```

---

## 26) Summary

A **linked list**:

* is made of nodes
* each node stores a value and a pointer to the next node
* starts with a `head`
* may also keep track of a `tail`
* is good for insertion and deletion at the start
* is slower than arrays for direct access and searching

---

## 27) Simple Memory Hook

**Array = boxes in one row**
**Linked list = chain of connected boxes**

---

## 28) Homework

Build a linked list with these methods:

* `append`
* `prepend`
* `removeHead`
* `contains`
* `print`
* `toArray`

Then test it with at least 5 values.
