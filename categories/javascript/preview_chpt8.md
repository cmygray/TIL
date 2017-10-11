# js basic chap.8 preview
## Immutability
* object는 pass-by-reference(참조형태로 전달된다).
* 참조객체의 변경 방지가 필요한 경우-
  * *불변객체(?)*로 만들기 -> defensive copy
  * [Observer pattern](https://ko.wikipedia.org/wiki/%EC%98%B5%EC%84%9C%EB%B2%84_%ED%8C%A8%ED%84%B4)

* immutable VS mutable value
**질문 5번의 이유**
```javascript
var str = 'hello';
str = 'world';
```
  * 문자열 슬라이싱은 변경이 아니라 재할당이다.
  * PbV, PbR은 할당연산자 우항의 데이터타입을 기준으로 이해하자.
  * `Object.assign(target, *src)`
  > 타겟에 없는건 주고, 타겟에도 있는건 갱신한다. pull 처럼...?
```javascript
// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);
o1 == merge1
//true
o1.d = 4;
//4
o1
//{a: 1, b: 2, c: 3, d: 4}
merge1
//{a: 1, b: 2, c: 3, d: 4}
//???
merge1.e = 5;
//5
merge1
//{a: 1, b: 2, c: 3, d: 4, e: 5}
o1
//{a: 1, b: 2, c: 3, d: 4, e: 5}
//????
```
  * defensive copy
  > Object.assign을 빈 리터럴 오브젝트를 타겟으로 실행해서 변수에 할당
```javascript
defCopy1 = Object.assign({}, o1);
//{a: 2, b: 2, c: 3, d: 4, e: 5}
o1.a = 3;
//3
o1
//{a: 3, b: 2, c: 3, d: 4, e: 5}
defCopy1
//{a: 2, b: 2, c: 3, d: 4, e: 5}
```
> `const` 변수명 다시 못쓰게하는거. 근데 identifier에 object를 assign하면 property access, reassignment or mutation은 가능함.
---

* [x] 프로퍼티명에 연산자를 굳이 포함해서 접근방법을 제한해야 하는지? (대괄호 표기법 강제)
  > 가장 좋은 것은 연산자를 안쓰는 것, 어쩔 수 없을때만 사용해라.
* [ ] literal object와 이를 참조하는 다른 변수의 memory address가 정해지는 절차가 궁금하다.
* [ ] object의 property value를 갱신할 때, 재할당이 일어나는 시점?
* [ ] 오브젝트의 프로퍼티 값이 기본 자료형이면 pass-by-value?
* [ ] https://gist.github.com/justinbmeyer/4662050 오브젝트 상황일때는?