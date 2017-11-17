# Cracking the Coding Interview - Medium

____지난 포스팅 [Cracking the Coding Interview (Easy)](https://cmygray.github.io/post/algorithm/cracking-the-coding-interview-easy/)에 이어서, Medium 난이도의 문제를 풀어본다.

____Medium 난이도의 구성

<a id="index"></a>
클릭 시 해당 본문으로 이동.

[목차로 돌아가기](#index)

* Data structure
  1. [Stacks: Balanced Brackets](#ds-1)
  1. [Queues: A Tale of Two Stacks](#ds-2)
  1. [Trees: Is This a Binary Search Tree?](#ds-3)
* Algorithms
  1. [Sorting: Bubble Sort](#al-1)
  1. [Sorting: Comparator](#al-2)
  1. [Binary Search: Ice Cream Parlor](#al-3)
* Techniques/Concepts
  1. [Time Complexity: Primality](#tc-1)
  1. [Recursion: Davis' Staircase](#tc-2)

## Data structure

<a id="ds-1"></a>

### 1. [Stacks: Balanced Brackets]()

<a id="ds-2"></a>

### 2. [Queues: A Tale of Two Stacks](https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem)

1 x: enqueue x
2: dequeue
3: print first queue

```js
function processData(input) {
    var arr = input.split('\n');
    var n = +arr[0];
    var queue = [];
    var queries = arr.slice(1);
    queries.forEach(query => {
        const type = query[0]
        if (type === '1')
            queue.push(query.split(' ')[1])
        if (type === '2')
            queue.shift()
        if (type === '3')
            console.log(queue[0])
    })
};
```

<a id="ds-3"></a>

### 3. [Trees: Is This a Binary Search Tree?](#index)

## Algorithms

<a id="al-1"></a>

### 1. [Sorting: Bubble Sort](#index)

<a id="al-2"></a>
  
### 2. [Sorting: Comparator](#index)

<a id="al-3"></a>

### 3. [Binary Search: Ice Cream Parlor](#index)

## Techniques / Concepts

<a id="tc-1"></a>

### 1. [Time Complexity: Primality](#index)

<a id="tc-2"></a>

### 2. [Recursion: Davis' Staircase](#index)