# js basics
파이썬으로 조금 배웠던 프로그래밍의 기본적 내용과 **공유하는 점**, **다른 점**, **공유하지만 아직 몰랐던 것**들 위주로 정리.

## 공통
### pass-by-value
js의 기본자료형(primitive) 값이 복사되어 변수로 할당된다.
```javascript
var a = 1;        //변수 a에 기본자료형 Number에 속하는 값 1이 할당된다. 
var b = a;        //변수 b에 변수 a에 저장된 기본자료형 Number에 속하는 값 1이 할당된다.
a = 2;            //변수 a에 기본자료형 Number에 속하는 값 2가 '재'할당된다. 기존의 저장된 값을 바꾸는 것이 아님. 
console.log(b);   //변수 b에 저장된 자료형은 재할당되지 않았으므로 1이 출력된다.
```

### mutable / immutable
js의 기본자료형은 immutable이다.
```javascript
var a = 1;
var b = a + 1;
console.log(a, b) //1 2가 출력된다
var a = 2;
console.log(b) // b는 여전히 2다
```
js의 array 자료형은 mutable이다.
```javascript
var a = [];
var b = a.push(1);
console.log(a, b)    // [1] 1이 출력된다.
```
> b는 어째서 1이 되나...?

py의 list 자료형은 mutable이다.
```python
a = []
b = a.append(1)
print(a, b)  # [1] None이 출력된다.
```
> 변수에 기본 자료형의 값을 할당한다 | 변수가 기본 자료형의 값을 가리키게 한다 ???

### Operator

### built-in(?) methods
* 종류
  1. `for (var i=0; i<array.length; i++) {}`: index
  1. `for (var i in array) {}`: index
  1. `array.forEach(function(elmnt, indx, arr) {})`: element, index, array
  1. `for (var elmnt of arr) {}`: element
  1. `for (var [idnx, val] of array.entries()) {}`: index & value

* `.forEach()`  
메소드는 배열의 각 엘리먼트를 순회하며 콜백 함수 블록 내 명령을 실행한다. 콜백 함수는 익명일 수 있으며 순서대로 엘리먼트, 인덱스, 배열 총 3개의 *인수(?)*를 가질 수 있다. 덜 넣어도 되지만 순서는 일정하다.
```javascript
arrayObj.forEach(callback(ele, indx, arr) { execution sentence });

array = ['a', 'b', 'c', 'd'];
array.forEach(function(element, index, array) {
  console.log(index + 'th ' + element + ' in ' + array);
});
>>> 0th a in a,b,c,d
>>> 1th b in a,b,c,d
>>> 2th c in a,b,c,d
>>> 3th d in a,b,c,d
```
> `+` 연산을 수행하면서 모두 문자열이 되어서 괄호는 사라짐

* 

## 차이점
py: `True`, `False` | js: `true`, `false`

