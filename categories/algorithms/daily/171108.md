# Cracking the Coding Interview - Easy

____[hackerrank.com](https://www.hackerrank.com/)에서 제공하는 Cracking the Coding Interview Challenges 알고리즘 퀴즈를 풀어보자. 자료구조, 알고리즘, 테크닉 세 개의 카테고리가 있으며 총 20문제가 있다. 오늘은 Easy 난이도만 풀어보고 나머지 문제는 차차 풀어볼 생각. *Javascript를 사용한다.

문제 설명(공통)

____각 문제에는 Max Score가 정해져 있어 제출 코드의 퀄리티에 따라 다른 점수가 부여된다. 아마도 코드에 복잡도에 따라 점수가 달라지는 것 같다.

____해커랭크 에디터는 Node.js 환경을 제공한다. 인풋을 main함수로 전달해주는 코드가 미리 작성되어 있으므로, 해당 함수 내부에 코드를 작성하면 된다.

____output은 return이 아니라 console.log()를 사용해야 한다.

## Data Structure

### 1. [Arrays: Left Rotation](https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem)

Sample input

```js
5 4 (n, k)
1 2 3 4 5
```

____n개의 숫자 배열의 각 요소를, k만큼 좌로 이동한 결과를 공백으로 구분한 문자열로 출력하는 문제.

```js
function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]); 
  var k = parseInt(n_temp[1]);
  a = readLine().split(' ');
  a = a.map(Number);
  var b = [];
  a.forEach((number, index, array) => {
    const shiftNum = index - (k % a.length);
    const dest = shiftNum < 0 ? a.length + shiftNum : shiftNum;
    b[dest] = number;
  })
  console.log(b.join(' '))
}
```

____Max score!!

### 2. [Strings: Making Anagrams](https://www.hackerrank.com/challenges/ctci-making-anagrams/problem)

Sample input

```js
cde (a)
abc (b)
```

____a와 b가 anagram이 되기 위해서 제거해야할 문자의 수를 출력하는 문제.

```js
function main() {
  var a = readLine();
  var b = readLine();
  var res = 0;
  for (let i = 0, l = a.length; i < l; i++) {
    const char = a[i];
    const indexOfB = b.indexOf(char);
    if (b.indexOf(char) === -1) {
      res += 1;
    } else {
      b = b.replace(char, '');
    }
  }
  console.log(res + b.length)
}
```

____Max score!!

### 3. [Hash Tables: Ransom Note](https://www.hackerrank.com/challenges/ctci-ransom-note/problem)

Input 형식

* 1행: m n
* 2행: [a-zA-Z]+ [a-zA-Z]+ .. 공백으로 구분된 m개의 string(magazine)
* 3행: [a-zA-Z]+ [a-zA-Z]+ .. 공백으로 구분된 n개의 string(ransom)

제한 조건

* 1 <= m, n <= 30000
* 1 <= string.length <= 5
* 대소문자를 구분한다

Output

* 2행의 단어들로 3행을 생성할 수 있다면 Yes 출력
* 그 외엔 No 출력

Sample input(converted to JS)

```js
var m = 6;
var n = 4;
var magazine = ['give', 'me', 'one', 'grand', 'today',  'night'];
var ransom = ['give', 'one', 'grand', 'today'];
```

Sample output

```js
//Yes => console.log() 를 사용하여 결과를 제출해야한다.
```

____문제에 떡하니 해시 테이블이라고 써있으니, 해시 테이블이 뭔지는 잘 모르지만 key: value를 사용하라는 메세지라 생각하고 객체를 만들어서 풀어본다.

1. `magazine` 배열을 순회하면서 `word: occurence` 형태의 프로퍼티를 빈 객체에 추가.
1. `ransom` 배열을 순회하면서 각 요소를 key 삼아 1.에서 생성한 객체를 참조.
1. 값이 0보다 크다면 감산. 값이 없거나 0이라면 탈출. (`Array.forEach()`는 사용할 수 없겠단 생각이 스친다. 탈출이 불가능하니까. 사용할 수 없다기 보단 비효율적이란 말이 정확하려나)
    * 찾아보니 forEach()문에서 탈출하는 방법이 있긴 하다. [`throw`사용하기](https://blog.outsider.ne.kr/847)

____생각대로 코드를 작성하는 것은 문제가 없어보인다. 다만 이 방법이 가장 효과적인지 항상 의문스럽다는게 문제... 해싱에 대해 공부하리라 다짐하며 코드를 작성한다.

```js
// input 처리 구문은 삭제.

function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    var dic = {}
    magazine.forEach(word => {
        dic[word] = dic[word] ? dic[word] + 1 : 1;
    })
    var msg = 'Yes' // default message: Yes
    for(let i = 0, len = ransom.length; i < len; i++) {
        if (dic[ransom[i]]) {
            dic[ransom[i]] -= 1;
        } else { // dic에 단어가 없을 때만 msg를 변경하고 탈출
            msg = 'No'
            break
        }
    }
    console.log(msg)
}
```

____truthy, falsy value를 활용해서 dic(해시 테이블이라고 할 수 있을지는 모르겠습니다)을 참조하고, 탈출 시 No, 실패 시 Yes를 출력한다.

____Max Score!!

### 4. [Linked List: Detect a Cycle](https://www.hackerrank.com/challenges/ctci-linked-list-cycle/problem)

____Javascript 에디터가 제공되지 않아서 `break`. DS & Algorithm with JS 를 좀 더 보고나면 이해가 될 것 같지만 지금은 에디터가 미지원되는 이유조차 가늠할 수 없는 자알못이니까...

## Techniques/concepts

### 1. [Recursion: Fibonacci Numbers](https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem)

____0 => 0, 1 => 1 인 피보나치 함수 fibonacci(n)을 만든다.

```js
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 2) + fibonacci(n - 1);
}
```

____Max score!!

### 2. [Bit Manipulation: Lonely Integer](https://www.hackerrank.com/challenges/ctci-lonely-integer/problem)

Sample input

```js
var n = 5
var a = [1, 1, 2, 2, 3]
```

Constraints

* 1 <= n < 100
* a의 원소는 0부터 100까지의 정수

____정수로 이루어진 배열에서 단 하나의 수 k를 제외한 나머지 수는 모두 2번 등장합니다. 단 한번만 등장하는 k의 값을 구하는 문제이다.

```js
function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    a.sort((a, b) => a - b) //  
    var k = 0;
    for (let i = 0; i < n; i++) {
        k += i % 2 ? a[i] : -a[i]
    }
    console.log(Math.abs(k))
}
```

____k가 중간에 발견되어도 반복을 멈추지 않는다는 단점이 있지만, 더하고 빼고를 반복하다보면 k만 남는 원리를 이용한다. 문제의 의도는 비트연산을 사용하는 것이지만, 엄두가 안나서 편법(?)을 사용했다. 사실 codelity에서 한번 풀어본 문제...

____다음 난이도를 풀기 전에 Linked list에 대한 학습을 먼저 해야겠다.