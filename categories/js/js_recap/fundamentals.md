# javascript fundamentals recap
* 지금(작성일 기준)까지 배운 자바스크립트의 기본 내용을 정리.
* [웹 프로그래밍 튜토리얼](http://poiemaweb.com/)과 [MDN 자바스크립트 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide)를 참고하여 보완. 추가된 항목은 **볼드**표시해서 구분.
* ES5를 기준으로 하며, ES6에 해당하는 내용은 상단에 *`@ES6`* 표시.

## programming
문제 인식 - 작은 문제로 쪼개기 - 쪼개진 문제를 해결 - 해결의 종합 - 문제 해결  
Computational thinking을 토대로 위의 절차를 진행하는 것  

## basic syntax
* sentence;구문  
  > 구문이란 자바스크립트 내의 모든 명령이다. 명령은 세미콜론(;)으로 분리된다. 아래의 요소들이 모여서 구문을 구성한다.
  * value;값
  * operator;연산자
  * expression;표현식
    하나의 값으로 **evaluated;평가되는** 구문을 표현식이라고 할 수 있다. 조건문이 요구되는 특수한 맥락**(boolean context)**에서는 Boolean이 아닌 값이 true, false로 판정되기도 한다;**type coercion**. 값과 연산자, 변수를 조합하여 표현식을 작성한다.

  * **keyword;키워드**  
  특정 기능 또는 역할이 이미 정의되어 있는 단어들로, 변수나 프로퍼티, 함수의 이름으로 사용하지 않는 것이 좋다.

  * **comments**  
  > 주석구문은 실행되지 않는다.
  * **code block;코드블록**
  중괄호({})를 사용하여 코드를 그룹화하여 블록을 만든다. 구문들을 함께 실행하기 위해 사용한다. 또 자바스크립트의 코드블록은 변수의 스코프에 영향을 미치지 않는다. (ES5 기준)함수만이 스코프에 영향을 미칠 수 있다.

## data type
* primitive data type;기본자료형, 원시데이터, 원시값, 6가지
  * number
    * js는 정수와 실수를 구분하지 않고 저장한다
    * NaN;Not a Number, 숫자가 아닌 데이터  
      숫자가 아니라는 뜻이지만, type은 number이다.
    * +/-Infinity
  * string
  * Boolean
  * undefined
  * null  
    **js 설계 상의 오류로, `typeof null`의 결과는 object이다. 타입 체크 시 주의할 부분.**
  * *`@ES6`* Symbol
* object data 

### primitive data as object
* built-in Constructor;native  
`undefined`, `null`을 제외한 나머지 primitive data는 object처럼 표현하는 것이 가능하다. `String()`, `Number()` 등의 네이티브 생성자 이용.

### type change (type coercion)
일치연산자, 부등호 연산자 사용 시에는 문자열을 숫자로 변환하기도 한다.  
1. Number to String
  1. `+ ''`
  1. `.toString()`
  1. `String()` **> 생성자를 사용하기 때문에 좋지 않은 방법이다.**
1. String to Number  
  문자열이 숫자를 나타내고 있지 않은 경우엔 `NaN`이 된다.
  1. `+`, `*1`, `-0`
  1. `parseInt()`
  1. `Number()` **> 생성자를 사용하기 때문에 좋지 않은 방법이다.**

## immutability
한번 저장되면 값을 변경할 수 없는 데이터의 성질을 immutability;변경불가능성이라고 한다. 

## pass-by-value
pass-by-value란 한번 메모리에 저장된 값을 변경할 수 없어서 복사, 재할당하는 것을 말한다. 할당연산자의 우항이 primitive거나, primitive를 가리키고 있는 변수 혹은 프로퍼티일 경우 발생한다.

## pass-by-reference
pass-by-reference란 할당 시 메모리 주소를 주고받는 것을 말한다. 할당연산자 우항이 오브젝트, 혹은 오브젝트를 할당한 변수나 프로퍼티일 경우, 복사-재할당이 일어나지 않고 메모리 주소를 공유하게 된다. i.e. 둘 중 하나의 프로퍼티를 변경하면 다른 오브젝트에도 영향을 미친다.

## dynamic typing;동적 타이핑
자바스크립트는 자료형을 선언하지 않고 변수에 데이터를 할당하는 것이 가능한 유연한(?) 언어이다. **호이스팅 과정을 통해 먼저 undefined 값을 할당하며, 이후 실제 할당구문(엄밀히는 재할당)을 실행하는 시점에 데이터형을 확인한다.(타입 추론)**


## variable;변수
변수는 값을 가리키는 identifier와 할당된 value이다.
* **identifier;식별자는 변수의 이름이다.**  
  identifier의 이름을 표기하는 방식은 크게 세가지가 있다.
  1. camel case  
    첫글자는 소문자로, 단어를 분리할 때만 대문자를 사용한다. e.g. myNumber
  1. snake case  
    모두 소문자로 표시하며, 단어 분리에 \_(underscore)를 사용한다. e.g. my\_number
  1. kebap case  
    모두 소문자로 표시하며, 단어 분리에 -(dash)를 사용한다. e.g. my-number
> 식별자는 _, $, 문자로 시작해야하며 숫자를 덧붙일 수 있다.

* process

1,2가 우선 실행되고, 3은 해당 코드가 등장할 때 실행된다. (hoisting)
  1. declaration  
    identifier가 VO(variable object)에 할당된다.
  1. initialization  
    값으로 `undefined`를 할당한다.
  1. assignment  
    우항의 값을 변수에 할당한다

* hoisting(in case of variable)

브라우저 엔진은 스크립트 문서의 *모든?* 선언문을 먼저 실행하고, 할당은 나중에 한다. 즉 변수의 선언과 초기화를 먼저 실행한다. 이를 변수 호이스팅이라고 한다. 함수 내부에 선언한 지역변수 역시, 함수 호출 시점에 (지역 내에서)호이스팅된다.
```javascript
console.log('after-hoisting: ',b);
var b = 1;
console.log('after-assignment: ',b);
// after-hoisting:  undefined
// after-assignment:  1
```
선언하지 않은 전역변수에 접근한다는 건, window에 존재하지 않는 프로퍼티로의 접근이라고 할 수 있다.
```javascript
window.a  //undefined
a  //ReferenceError
```

## operator;연산자
하나 이상의 값을 하나의 값으로 평가하기 위해 연산자를 사용한다. 종류는 아래와 같다.
*비트연산자 제외*

* assignment;대입(할당) 연산자  
대입 연산자는 값을 반환하지 않으며, 할당만 한다.  
|syntax|meaning|
|:--|:--|
|`x=y`|`x에 y할당`|
|`x+=y`|`x = x + y`|
|`x-=y`|`x = x - y`|
|`x*=y`|`x = x * y`|
|`x/=y`|`x = x / y`|
|`x%=y`|`x = x % y`|

* comparison;비교 연산자  
비교 연산자는 Boolean 값을 반환한다.  
|syntax|meaning|
|:--|:--|
|`==`|`equal`(값 비교)|
|`!=`|`not equal`(값 비교)|
|`===`|`equal`(값과 타입 비교)|
|`!==`|`not equal`(값과 타입 비교)|
|`>`|`larger`|
|`>=`|`larger or equal`|
|`<`|`smaller`|
|`<=`|`smaller or equal`|

* arithmetic;산술 연산자  
산술연산자는 하나의 Number 값을 반환한다.  
*사칙연산은 생략*
|syntax|meaning|
|:--|:--|
|`%`|나머지|
|`++`|증가|
|`--`|감소|

```javascript
var x = 0;
x ++ // 0 (선 반환 후 대입)
x // 1
++ x // 2 (선 대입 후 반환)
```

* logical;논리 연산자  
논리의 합 또는 곱 반환(`true=1, false=0`으로 치환해서 이해하자)
|syntax|meaning|
|:--|:--|
|`||`|or|
|`&&`|and|
|`!`|not|

* conditional;삼항 연산자
|syntax|meaning|
|:--|:--|
|`con ? val : val`|조건의 참 거짓에 따라 값 반환|
> 삼항연산자는 조건과 실행문이 간략할 때(한줄 정도) 사용하는 것이 좋다.

* 그외  
`delete`, `,` `typeof`, `in`, `instanceof`, `new`, 

## control flow;제어 흐름
구문은 위에서부터 차례대로 실행되지만, 흐름 제어를 통해 이를 의도적으로 조절할 수 있다. 조건, 반복 구문 등을 활용한다. e.g. `if`, `while`, `for`
* conditional statement;조건문  
  괄호 안의 표현식이 true일 때 블록 내부의 구문을 실행한다.  
  `if`, `switch`, ...
* loop statement;반복문  
  괄호 안의 표현식이 조건을 만족하는 동안 블록 내부의 구문을 실행한다.  
  `for`, `while`, ...

### conditional statement; 조건문
keyword와 조건, 참일 때 실행할 블록구문으로 구성된다. 거짓인 경우를 위해 절을 추가할 수 있다.

### loop statement; 반복문
keyword와 반복 조건, 반복할 블록구문으로 구성된다.
`for`, `while`, `do...while`, `for...in`, `for...of`, `cotinue`, `break`, `lable`

* for 문  
`for ([init]; [condition]; [increment]) (block)statement`  
> 전역에서 실행한 반복문의 변수는 전역변수이다. 초기화 구문은 없어도 되지만, 전역 변수의 값을 예측할 수 없기 때문에 좋은 방법은 아니다. 구문은 생략해도 되지만 세미콜론은 생략할 수 없다. 조건문 생략 시 조건은 참으로 간주된다.

### falsy value
흐름제어에 필요한 조건식 내부는 boolean context이다. 이 때는 조건식의 평가값이 boolean 리터럴이 아니어도 boolean 값으로 변환하게 되는데 이는 implicit conversion;암묵적 형변환의 일종이다. implicit conversion을 통해 `false`가 되는 값을 falsy value라고 한다. 아래의 값들은 falsy.  
`0`, `undefined`, `null`, `''`, `NaN`, `false`
> false 값을 가진 Boolean 오브젝트는 falsy가 아니다. 오브젝트이기 때문에 boolean context에서 true로 평가된다.

## object;객체(not as data type, as container)
프로퍼티와 값으로 이루어진 쌍들을 한데 묶은 것을 객체라고 한다. 기본자료형과 객체, 함수 등 모든 것이 값이 될 수 있다. 특히 값이 함수인 경우에는 `method`;메소드 라고 부른다.  
`{}`로 둘러쌓인 블록 내부에 프로퍼티 이름과 값을 가지고 있다. 각 프로퍼티에 접근하기 위해서 닷 연산자(`.`) 또는 대괄호 연산자(`[]`)를 사용할 수 있다.

```javascript
//sytax of accessing property in obj
objectName.propertyName
//프로퍼티명에 공백, 연산자기호 따위가 있는 경우에는 대괄호 연산자를 사용해야 접근할 수 있다.
objectName['propertyName']
```
* `.` or `[]`?  
`for in`문에서는 property name을 변수로 받기 때문에 대괄호 연산자를 사용한다. 연산자가 포함된 프로퍼티명은 가급적 쓰지 않는 것이 좋다.

* 생성하기
  1. 리터럴; 2-1의 축약과 다름없다.
  1. `new` 연산자
    1. `Object()`
    1. constructor f();생성자 함수  
    `new`연산자를 만나면, 먼저 native constructor Object()를 호출해 빈 객체를 생성하고,생성자 함수 내부의 동작을 수행한다. 일반함수에 new 연산자를 사용하면, 빈 객체가 생성된다. 생성자 함수를 일반 함수와 구분하기 위해 함수명의 첫글자를 대문자로 하는 것이 보통이다.

객체에 프로퍼티를 추가하기 위해서는 새 프로퍼티명에 접근하여 값을 할당하기만 하면 된다. 기존에 존재한다면 덮어씌우고, 아니라면 추가한다.**동적 생성**

## function;함수
0개 이상의 인수를 받아서 함수 블록 내의 구문(명령 내지는 코드-인수와 유관할 수도 무관할 수도 있다)을 실행하도록 선언한다. 결과값을 반환할 수도 있고 안할 수도 있다. 함수는 일급객체로, 어디에든 호출할 수 있다. e.g. 변수에 할당하거나, 다른 함수의 인수로 전달하기 등

* **함수를 정의하는 방법**
* [ ] 표현식, 선언식의 혼동을 주의. 함수의 이름과 할당된 변수명의 차이, 다른함수에서 호출 시 둘 중 하나를 사용해도 무방한 이유 체크.
  1. 선언 방식  
  `function funcName(parms) { statements; }`  
  **함수 이름을 할당 변수의 이름으로 사용한다.**
  1. 표현 방식  
  `var funcName = function(parms) { statements; }`
  1. Function() 생성자 방식  
  `var funcName = new Function()`

결국 무슨 방법이든 3번 방식을 경유한다.

* **parameter;매개변수, 인자 & argument;인수**  
*함수 선언 시* parameter를 사용한다. `()` 내부에서 parameter는 argument를 받을 자리를 만든다. `{}` 내부에서 parameter를 동작 내지는 명령에 활용할 수 있다. *함수 호출 시* 이 자리에 argument가 들어와서 사전에 선언한 명령의 구체적 대상이 된다.  
함수 호출 시 `parameter = argument` 꼴의 할당이 일어나는 셈이다. 이때 argument의 타입에 따라 pass-by-value 혹은 pass-by-reference가 일어난다. 후자의 경우 함수 외부의 변수에 저장된 값이 변경될 수 있다.(impure function)
> 함수가 오브젝트를 인수로 받아(pass-by-reference) 내부에서 프로퍼티를 변경하면, 전역변수에 할당된 오브젝트의 프로퍼티 역시 바뀐다.

* function as object  
함수 역시 (일급)객체다. 다만 생성자가 Object()가 아니라 Function()이며, `__proto__`를 통해 상위의 참조객체를 확인하면 결국 최상위의 object 객체를 만날 수 있다. **일급객체로서 함수는...**
  1. 무명의 리터럴로 표현 가능
  1. 변수 혹은 자료구조에 저장 가능
  1. 함수의 파라메터를 통해 전달 가능
  1. 함수의 반환값으로 사용 가능

### hoisiting (in case of function)
함수의 정의 방식에 따라서 '함수블록 전체가 호이스팅' 되거나 '함수가 할당된 변수만 호이스팅' 된다. 함수의 정의 구문보다 상단에서 호출 시 전자의 경우 이상없이 호출되지만 후자의 경우엔 `TypeError`가 발생한다. `ReferenceError`가 아닌 이유는 변수(함수명) 호이스팅으로 인해 값이 `undefined`로 초기화된 상태이기 때문이다. 즉 `undefined` 변수를 함수로써 호출했기 때문이다.

```javascript
console.log(funcDcl()); // hello
console.log(funcExp()); // Type Error

//1. function declaration
//선언식으로 정의한 함수는 함수 블록 전체가 호이스팅된다.
function funcDcl() {
  console.log('hello');
};

//2. function expression
//표현식으로 정의한 함수는 변수의 이름만 호이스팅된다
var funcExp = function() {
  console.log('world');
};
```

### 함수 내에서 arguments property 사용하기
함수 객체에는 `arguments`라는 프로퍼티가 있다. 이는 함수 호출 시점에 전달 될 인수들을 의미한다. 선언 시에는 파라메터처럼 활용한다.(i.e. 함수 선언단에서 사용된 `arguments`는 실행단에서 받을 인수들을 위해 마련된 "자리"다.) 함수 내에서 '유사 배열 객체' 처럼 취급되어 인수 순회 등의 용도로 사용한다.

### 함수의 형태들
* IIFE  
`()`를 이용해 함수를 선언하자마자 실행한다. 전역 함수 선언 시, 호이스팅에 의해 자동으로 전역변수가 만들어진다. IIFE는 이를 방지한다.
* inner function  
'Scope' 항목 참고
* callback function  
추가 예정.

## prototype;프로토타입
생성자 함수, 프로토타입, 오브젝트 간의 연결관계

```javascript
var myConstructor = function() {};  //<1>
var myObject = new myConstructor(); //<2>
```

위 구문에서 생성자 함수와 오브젝트, 프로토타입의 관계를 그림으로 표시하면 아래와 같다.

```
myConstructor
prototype.constructor
object.__proto__.constructor       myConstructor.prototype
object.constructor(inherit)        myObject.__proto__
\=================\                \===========\
| <1>             | --prototype--> |           |
|  myConstructor  |                | prototype |
|                 | <-constructor- |           |
\=================\                \===========\
         |                              |  ↑
         |                      inherit |  | .__proto__ (access)
         |                              ↓  |
         |                         \==========\
         |                         | <2>      |
          ---------new f()-------> | myObject |
                                   |          |
                                   \==========\
```

### `prototype` & `__proto__`

```javascript
//대문자로 명시한 생성자함수 MyConstructor를 선언한다.
function MyConstructor(parameter) {
  //생성자는 '앞으로 생성될' 인스턴스의 myProp 프로퍼티에 인수를 할당한다.
  this.myProp = parameter;
}

//MyConstructor의 prototype에 접근하여 myMethod라는 프로퍼티의 값으로 함수를 할당한다. 즉 myMethod는 prototype에 보관되는 메소드이다.
MyConstructor.prototype.myMethod = function() {
  //myMethod는 메세지를 출력한다. 여기서 this는 prototype, 혹은 prototype과 상속관계인 instance의 프로퍼티 myProp을 가리키는 키워드이다.
  console.log('this_in_prototype_method_points_at: ' + this.myProp);
}

//변수 myArg에, 'myValue'라는 String 데이터를 할당하였다.
var myArg = 'myValue';

//변수 myInstance에, new 연산자로 인해 생성된 객체를 할당한다. 이 객체는 MyConstructor 생성자 함수에 의해 생성된 인스턴스이다. 생성자 함수에 인수로 전달된 변수 myArg는 myInstance의 myProp 프로퍼티에 할당될 것이다. 변수에 저장된 값이 문자열이므로 pass-by-value.
var myInstance = new MyConstructor(myArg);

//생성자 함수에 myMethod를 정의하지 않았기 때문에 인스턴스에는 myMethod라는 이름의 프로퍼티가 없다. 하지만 엔진은 인스턴스가 참조하는 __proto__에서 해당 프로퍼티를 찾는다. prototype에 보관한 메소드를 참조해 메세지가 출력된다.
myInstance.myMethod(); //this_in_prototype_method_points_at: myValue 가 출력된다.
//prototype에 메소드를 선언할 때 this는 prototype 객체에 바인딩된다.
//prototype과 상속관계인 인스턴스가 해당 메소드를 호출할 때, this는 호출한 인스턴스에 바인딩된다. 따라서 위와 같은 메세지가 출력된다.

//myMethod를 보관하는 prototype에 접근하는 두 가지 방법. 둘 모두 같은 객체를 가리키고 있는 것을 알 수 있다.
myInstance.__proto__ === MyConstructor.prototype //true

//인스턴스에는 prototype 프로퍼티가 없다. 함수가 아니니까.
myInstance.prototype; //undefined

//MyConstructor에는 __proto__ 프로퍼티가 있다. 생성자 함수'객체'인 MyConstructor는 Function() 생성자에 의해 생성된 인스턴스이며, Function 생성자의 prototype과 상속관계이다.
MyConstructor.__proto__; //ƒ () { [native code] }
MyConstructor.__proto__ === Function.prototype //true
```

## scope;스코프, 영향범위

자바스크립트에서는(ES5) 함수 스코프만 유효하다.

즉시실행함수에서 전역변수 접근이 됐다 안됐다 하는 이유는 무엇일까...?

지역변수가 없기 때문에 함수 블록 외부의 전역변수를 참조했기 때문이다.
```javascript
//case 1. local var declaration after access
var myvar = "my value";

(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();

//case 2. no local var
var z = 25; // undefined
(function() {
  console.log(z); // 25
})();
```

### scope_일반적인 규칙

* 함수 내부에서 정의한 변수(지역변수)에 전역 스코프에서 접근할 수 없다.
* 함수 또는 내부함수에서 필요한 변수에 접근할 수 없을 때, 가까운 부모함수에서 전역 스코프의 순서로 탐색한다.
* 내부함수에서 변수 할당 시 `var` 키워드를 빠뜨리면 부모 함수 또는 전역에서 같은 이름의 변수에 값을 재할당한다.
* 로컬 함수 내부에서도 호이스팅이 일어난다(?) 지역 변수 선언보다 먼저 변수를 사용하면 undefined 값을 사용한다.
* 스코프는 함수의 선언시점을 기준으로 한다. 전역함수 A()를 다른 전역함수 B() 내부에서 호출한다면, A()함수의 선언구문을 우선적으로 참조한다. -> **lexical scoping**

  ```javascript
  var scope = 'this is global';
  function b() {
    var scope = 'this is local in b()';
    a();
  }
  function a() {
    console.log(scope);
  }
  b() //this is global
  ```

## this
함수 블록 내부의 `this`는 함수를 메소드로 소유한 객체를 가리킨다. 전역함수 a는 `window` 객체 내부에서 a라는 이름의 메소드이다. 따라서 일반함수의 `this`는 `window`라고 할 수 있다.  
`new` 연산자로 함수를 호출하면, `this`는 생성될 인스턴스를 가리킨다. 생성자 함수 내에서 사용하는 메소드의 `this` 역시 같은 인스턴스를 가리킨다. 이는 내부함수의 `this` 역시 윈도우를 가리키는 것과 같은 원리이다.

* `this` binding patterns (*according to function invocation patterns*)
  1. function invocation  
    `this === window` >> true
  1. method invocation  
    `내부함수 ? window : object`
  ```javascript
  var test = {};
  test.check = function() {
    console.log('this === test: ', this === test);
      function check() {
        console.log('this === window: ', this === window);
      }
    check();
  };
  test.check();
  //this === test: true
  //this === window: true
  ```

  3. constructor invocation  
    `this === instance`  
    `new` keyword 누락 대비 패턴
  ```javascript
  function AnyConstructor(arg) {
    // 아래 구문부터 대비 패턴이다.
    if(!(this instanceof arguments.callee)) {
      return new arguments.callee(arg);
    }
    this.prop = arg ? expression with arg or not : 0;
  }
  ```

  4. apply (call) invocation  
    *instant `this`*
  ```javascript
  var Person = function(name) {
  this.name = name;
  }
  Person.prototype.nation = function(nation) {
    this.nation = nation;
  }
  var byNew = new Person('KIM');
  byNew.nation('KOR');
  var byApply = {};
  Person.apply(byApply, ['LEE'])
  byApply.nation('KOR');
  byNew.nation.apply(byApply, ['JPN']);
  Person.prototype.nation.apply(byApply, ['JPN']);
  byApply.__proto__ === byNew.__proto__
  ```