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

## 차이점
py: `True`, `False` | js: `true`, `false`