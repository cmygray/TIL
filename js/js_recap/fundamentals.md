# javascript fundamentals recap

## programming
문제 인식 - 작은 문제로 쪼개기 - 쪼개진 문제를 해결 - 해결의 종합 - 문제 해결  
Computational thinking을 토대로 위의 절차를 진행하는 것  
javascript라는 programming language를 

## basic syntax
* sentence;구문
  * variable;변수
    * identifier
    * value
  * operator;연산자
    * arithmetic
    * logical
    * assignment
  * expression;표현식
    하나의 값으로 수렴하는 구문을 표현식이라고 할 수 있다. 수렴값이 Boolean인 경우 조건문이 된다. 조건문이 요구되는 특수한 맥락에서는 Boolean이 아닌 값이 true, false로 판정되기도 한다.
  * block;블록({})  
    여러 구문을 함께 실행할 의도로 블록을 사용한다. 반복문이나 함수, 조건문 

## data type
* primitive data type;기본자료형, 원시데이터, 원시값
  * number
    * 숫자(정수와 실수를 구분하지 않고 저장한다)  
    * NaN;Not a Number, 숫자가 아닌 데이터  
      NaN의 의미는 숫자가 아니라는 뜻이지만, NaN의 type은 number이다.
    * +/-Infinity
  * string
  * Boolean
  * undefined
  * null
  * ~~Symbol(ES6)~~
* object data type

### primitive data as object
* built-in Constructor;native
`undefined`, `null`을 제외한 나머지 primitive data는 object처럼 표현하는 것이 가능하다

## immutability
한번 저장되면 값을 변경할 수 없는 데이터의 성질을 immutability;변경불가능성이라고 한다. 

## pass-by-value
pass-by-value란 한번 메모리에 저장된 값을 변경할 수 없어서 복사, 재할당하는 것을 말한다. primitive data가 여기에 해당된다.

## pass-by-reference
pass-by-reference란 

## dynamic typing

## variable
변수는 값을 가리키는 identifier와 할당된 value이다.
* process
  1. declaration  
    identifier가 변수로서 선언된다
  1. initialization  
    변수의 값이 undefined로 초기화된다
  1. assignment  
    우항의 값을 변수에 할당한다
* hoisting(in case of `var`)  
브라우저 엔진은 스크립트 문서의 *모든?* 선언문을 먼저 실행하고, 할당은 나중에 한다. 즉 변수의 선언과 초기화를 먼저 실행한다. 이를 변수 호이스팅이라고 한다.
```javascript
console.log('after-hoisting: ',b);
var b = 1;
console.log('after-assignment: ',b);
// after-hoisting:  undefined
// after-assignment:  1
```
> 미선언 전역변수를 호출한다는 건, window에 존재하지 않는 프로퍼티 호출이라고 할 수 있다. 근데 호이스팅을 이해하는 데 별로 도움은 안되는 듯?
```javascript
window.a
```
## operator;연산자

## control flow;흐름 제어

## object;객체

## function;함수

## prototype;프로토타입
모든 객체는 프로토타입과 상속관계이며, 

## scope;스코프, 영향범위

## this
(일반)함수 블록 내부의 `this`는 자신이 포함된 함수를 메소드로 소유한 객체를 가리킨다. 함수를 전역 변수 a에 할당하면 `window` 객체는 a라는 이름의 메소드를 가진 셈이 된다. 따라서 일반함수의 `this`는 `window`라고 할 수 있다.
> 여기서 말하는 일반함수란 생성자 함수로 의도하지 않은 함수이며, 내부함수도 여기에 포함된다. 
