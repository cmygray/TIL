# javascript deep-dive recap

* 10월 10일 - 12일 간 배운 자바스크립트 deep-dive에 대한 정리
* [웹 프로그래밍 튜토리얼](http://poiemaweb.com/)과 [MDN 자바스크립트 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide)를 참고하여 보완. 추가된 항목은 **볼드**표시해서 구분.
* ES5를 기준으로 하며, ES6에 해당하는 내용은 상단에 *`@ES6`* 표시.

</br>

1. Built in Objects
    1. Number
    1. String
    1. Array
    1. Math
2. Excution Context
3. Closure
4. OOP

## Built in Objects

Global Object"s" & Global Object
Number, String, Array 등의 built-in object는 window;global obj에 속하는 global objects 이며 생성자 함수처럼 동작하는 래퍼객체이다. 각각의 프로토타입에는 다양한 메소드와 프로퍼티가 존재한다.
래퍼 객체의 프로토타입 메소드를 literal primitive 또는 이를 할당한 변수에 사용할 수 있는 원리: 래퍼객체의 프로토타입 메소드는 생성자를 사용해 만든 객체 뿐 아니라 해당하는 자료형에도 사용이 가능하다. 이는 엔진에서 메소드 호출 시에만 잠시 객체로 변환하기 때문이다.
```javascript
// String 예시
var strByString = new String(abc); // object String{0: 'a', 1:'b', 2:'c', length: 3, [[PrimitiveValue]]: 'abc'}
var strByLiteral = 'abc'; // primitive string 'abc'

strByString.split('') // ['a', 'b', 'c']
strByLiteral.split('') // ['a', 'b', 'c']

// literl string data가 할당된 변수가 String.prototype에 속한 메소드를 호출하면, 잠시 오브젝트로 변환하여 메소드를 실행하고 다시 되돌린다.
```

### Number

#### Property

* 숫자로 변환하는 트릭들(`str = '7'`)
  * `Number.parseInt(str)`
  > 문자열 데이터에 \d와 \D가 섞인 경우 쓰인다. 그리고 다른 방법들은 ESLint가 거부한다...
  * `+str`
  * `str * 1`
  * `Number(str)`

#### prototype method

### String

* 문자로 변환하는 트릭들(`num = 7`)
  * `num.toString()`
  * `num + ''`
  * `String(num)`

### Array

* 요소 순회 메소드  
  인자값으로 콜백함수와 this value를 받는다. 메소드에 따라 콜백함수에 전달하는 인수가 조금씩 달라진다. 기본적으로는 `[,item[,index[,array]]]` 순서를 따른다. 필요한 개수만큼 매개변수를 선언해 사용한다. 원본 배열의 변경, 반환값 요구 여부에 유의하여 사용하자.
  * forEach()
  * map()
  * some()
  * every()
  * reduce()
  * filter()

### RegExp

* 정규표현식이란?  
문자열 검사에 사용되는 표현식으로 다음과 같은 형태로 작성한다.  
`/expression/[,flag]`  
  * '/'는 정규표현식의 시작과 끝을 의미한다
  * 찾고싶은 패턴을 표현식으로 작성한다
  * 추가조건을 의미하는 알파벳을 플래그라고 하며 정규식 바깥에 덧붙인다.

자바스크립트에서는 생성자 함수 `RegExp` 또는 리터럴 표기법을 사용하여 정규식 객체를 생성하는 것이 가능하다.

* 

## 

### Math

* 스태틱 메서드

## Execution Context

insideMemoryStack...(LIFO)
VO;VariableObj(GO;GlobalObj/AO;ActivatedObj)
SC;ScopeChain
this value

controller의 할당(?), 반환 절차


## Closure

내부함수를 리턴하는 함수에서 선언한 지역변수가 내부함수에서 참조된 경우, 외부함수가 종료된 이후에도 AO가 유효하여 이후 실행되는 내부함수에서 지역변수를 참조할 수 있는 현상. `setTimeout()` 메소드로 내부함수를 지연호출하는 경우에도 마찬가지이다.  
주 용도는 전역변수 억제이다.

## OOP
