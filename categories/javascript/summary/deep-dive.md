* javascript deep-dive summary

* 10월 10일 - 12일 간 배운 자바스크립트 deep-dive에 대한 정리
* [웹 프로그래밍 튜토리얼](http://poiemaweb.com/)과 [MDN 자바스크립트 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide)를 참고.
* ES5를 기준으로 하며, ES6에 해당하는 내용은 상단에 *`@ES6`* 표시.

</br>

## 1. Built in Object

* 오브젝트의 구조
  * Host obj(*user-made*)
  * **Built in obj**
      * Standard(*global objects of window;global object*)
      * Native
          * BOM
          * DOM

* 구성 순서: Standards -> Native

## 2. Standard built-in Object

* 구조
  * Global Object(window;js | global;node)
      * Global Objects: Object, Function, Boolean, Number, String ...

표준 빌트인 객체에는 글로벌 오브젝트인 윈도우와, 윈도우에 속하는 나머지 글로벌 오브젝트'들'이 있다. 표준 빌트인 객체와 그 프로토타입에는 다양한 프로퍼티와 메소드가 존재하여 유용하게 사용할 수 있다(API).

### 2.1 Global Object

* 실행컨텍스트에 들어가기 전에 생성되며 임의로 생성할 수 없다.
* 전역 스코프를 가진다. 전역 변수란 곧 G.O.의 프로퍼티이며 전역 변수에 할당된 함수(전역함수)는 전역 메소드이다.

* window.\<propertyName>  
  주로 전역에서 사용되는 간단한 값들을 가진다.
  * `Infinity`
  * `NaN`
  * `undefined`

* window.\<methodName>  
  전역에서 호출이 가능한 함수이다.
  * `eval(expression)` return: value  
    주어진 식의 평가값을 반환한다. 잘 사용하지 않음.
  * `isFinite(testVal)` return: boolean  
    주어진 값이 유한값인지 평가한다.
  * `isNaN(testVal)` return: boolean  
    주어진 값이 숫자인지 평가한다.
  * `parseFloat(string)` return: number  
    주어진 값의 부동소수점 숫자를 반환한다. 시작문자가 숫자가 아닌경우 NaN
  * `parseInt(string)` return: number  
    주어진 값의 정수형 숫자를 반환한다. 시작문자가 숫자가 아닌경우 NaN
  * `encodeURI(uriAddress)`/`decodeURI(uriAddress)` return: string  
    주어진 문자열을 URI 표준인 ASCII 캐릭터셋으로 변환/복원하며, 구분자를 무시한다. 
  * `encodeURIComponent(uriComp)`/`decodeURIComponent(uriComp)` return: string  
    URI의 컴포넌트에 사용하며, 구분자까지 처리한다.

### 2.2 Global Objects

아래는 window(global) 객체에 속하는 standard built-in objects 이다. 이를 global objects라고도 부른다.

  * Number
  * String
  * Boolean
  * Symbol

  ---
  * Math

  ---
  * Function
  * Object
  * Array
  * Date
  * Error
  * RegExp

위 객체는 모두 standard built-in 이지만 몇가지 유형으로 구분할 수 있다.

<br>

1. wrapper 객체  
  생성자 있음(안씀). primitive와 관련. 생성자로써의 용도보단, literal primitive와 prototype을 공유하기 위한 용도. (Number, String, Boolean, Symbol이 여기에 해당한다.)

    > 기본자료형과 함께 관련된 표준 빌트인 객체의 메소드 혹은 프로퍼티를 호출하면 prototype을 공유하는 것처럼 정상적으로 작동한다. 이는 닷 연산자가 primitive를 일시적으로 wrapper object로 변환했기 때문이다.
  
2. static  
  생성자 없음. (Math가 여기에 해당한다.)

3. 그외(뭐라고 칭해야 할지..)  
  생성자 있음. object와 관련. (Oabject, Function, Array, Date, RegExp가 여기에 해당한다.)

#### 2.2.1. Object, Function, Boolean, Error

* `Object([value])` return: object  
  주어진 값에 따라 빈객체 또는 객체화된 리터럴을 생성한다. null 또는 undefined를 전달하면 빈 객체를 생성한다. 그 외에는 해당 자료형의 래퍼 객체를 생성자로 사용할 때와 결과가 동일하다.
* `Function([...arguments[, function body]])` return: function  
* `Boolean([value])` return: object
* `Error([msg[, filename[, linenumber]]])` return: object  
  생성된 오브젝트는 `try`-`catch` 구문에서 `catch`의 인수로 전달된다.

#### 2.2.2. Math

Math의 메소드와 프로퍼티는 모두 static;정적이다.

* Math.\<propertyName>
  * `PI` value: 3.141592653589793

* Math.\<methodName>
  * `abs(value)` return: number  
    주어진 값의 절대값을 반환한다.
  * `round(value)` return: number  
    주어진 값을 정수로 반올림한다. -n.5 >> -n 이 됨에 유의.
  * `sqrt(value)` return: number  
    주어진 값의 *양의* 제곱근을 반환한다.
  * `ceil(value)`/`floor(value)` return: number  
    주어진 값을 정수로 올림/내림한다.
  * `random()` return: number  
    0 <= n < 1 인 임의의 숫자(float) n을 반환한다.
  * `pow(base, exponent)` return: number  
    첫번째 인수를 밑, 두번째를 지수로 하는 거듭제곱수를 반환한다.
  * `max(...numbers)`/`min(...numbers)` return: number  
    가장 큰/작은 인수를 반환한다. 자동 형변환을 한다.

#### 2.2.3. Number

* with `new`: 형변환 후 object 반환.
* without `new`: 형변환 후 primitive value 반환.

* Number.\<propertyName>  
정적 프로퍼티로, 인스턴스 생성없이 사용한다.
  * `EPSILON` value: 엄청 작은 수(부동소수점 비교에 사용)  
    부동소수점 표현범위 내에서, 두 수의 거리 d < EPSILON 이라면 두 수는 같다고 간주한다.
  * `MAX_VALUE`/`MIN_VALUE` value: 사용가능한 가장 큰/작은 숫자
  * `POSITIVE_INFINITY`/`NEGATIVE_INFINITY` value: 양/음의 무한대

* Number.\<methodName>  
아래 메서드는 모두 형변환 없이 판단한다.(윈도우 메서드에 비해 엄격)
  * `isFinite(value)` return: boolean  
  * `isInteger(value)` return: boolean  
  * `isNaN(value)` return: boolean
  * `isSafeInteger(value)` return: boolean

* numObj.\<methodName> (prototype method)
  * `toExponential([fractionDigits])` return: string
  * `toFixed([digit = 0])` return: string
  * `toPrecision([precision])` return: string
  * `toString([radix])` return: string
  * `valueOf()` return: value  
    [[PrimitiveValue]] 또는 그냥 값 반환.

#### 2.2.4. Date

Syntax

* year: 연도를 나타내는 숫자
* month: 0 ~ 11
* date: 1 ~ 31
* day: 0 ~ 6, 요일을 나타내는 숫자로 0은 일요일
* hour: 0 ~ 23
* minute: 0 ~ 59
* second: 0 ~ 59
* millisecond: 0 ~ 999

<br>

생성자로 사용하면...

* with `new`: 인수에 따라서 다른 객체를 생성한다.  
  * () : 현재 시간 객체 생성.
  * (밀리초) : 1970.01.01. 00:00(UTC) 로부터 인수만큼 경과한 시간 객체 생성.
  * (dateString) : 지정된 날짜와 시간 객체 생성. 단 파싱이 가능한 형식이어야 한다.
  * (year, month[, day, hour, minute, second, millisecond])  
    전달한 인수만큼 세세한 시간 객체를 생성한다. 연 월은 필수지만 나머지는 안주면 0, 줄려면 모두 줘야한다.

* Date.\<methodName>  
  기준시각(1970.01.01. 00:00 UTC)으로부터 ~~ 까지 경과한 시간을 밀리초로 반환한다.
  * `now()` return: number
  * `parse(dateString)` return: number
  * `UTC(dateString)` return: number

* dateObj.\<methodName> (prototype method)  
  * `getFullYear()` return: number(year)
  * `getMonth()` return: number(month)
  * `getDate()` return: number(date)
  * `getDay()` return: number(day)
  * `getHours()` return: number(hours)
  * `getMinutes()` return: number(minutes)
  * `getSeconds()` return: number(seconds)
  * `getMillieconds()` return: number(mseconds)
  * `setFullYear(year[, month[, date]])` return: number  
  * `setMonth(month[, date])` return: number
  * `setDate(date)` return: number

    > day는 year-month-date에 의존적이기 때문에 setDay가 없는 것은 당연하다.

  * `setHours(hours[, minutes[, seconds[, ms]]])` return: number
  * `setMinutes(minutes[, seconds[, ms]])` return: number
  * `setSeconds(seconds[, ms])` return: number
  * `setMilliseconds(ms)` return: number

    > set 메소드는 필수 인수인 [연월일시분초] 이하의 단위를 모두 변경할 수 있다.  
    > set 메소드는 기준시각(1970.01.01. 00:00 UTC)부터 새로 바뀐 값까지의 경과시간을 반환.  

  * `getTime()` return: number(경과시간)  
    기준시부터 callee가지 경과시간을 밀리세컨드로 반환한다.
  * `setTime(milliseconds)` return: number(input)  
    callee의 date를 인수만큼 경과한 값으로 바꾼다.
  * `getTimezoneOffset()` return: number(min)  
    UTC - LocalTimezone
  * `toDateString()` return: string
  * `toTimeString()` return: string

#### 2.2.5. String

* with `new`: 형변환 후 object 반환.
* without `new`: 형변환 후 primitive value 반환.

* String.\<propertyName>
  * `length` value: 문자열 길이

* strObj.\<methodName> (prototype method)
  * `charAt(index)` return: string
  * `indexOf(targetStr[, fromIndex])` return: number  
    문자(열)을 찾으면 첫번째 index를 반환한다. 여러 글자를 찾을땐 첫글자 인덱스를 반환하며, 못찾으면 -1을 반환한다.
  * `lastIndexOf(targetStr[, fromIndex])` return: number  
    위와 같은데 뒤에서부터 찾는다.
  * `replace(pattern|regexp, replacement[, flags])` return: string
  * `split([seperater=none [, limit]])` return: object(array)  
    인수가 없으면 문자열을 단 하나의 요소로 갖는 배열을 반환한다. 인수 limit는 반환 배열의 길이를 제한한다.
  * `substring(fromIndex[, toIndex])` return: string  
    from to 중, 작은 수 <= index < 큰수를 만족하는 문자열을 반환한다. 인수가 하나일 땐 마지막 문자까지 반환한다. 인수가 음수 또는 NaN일 땐 0으로, > length일땐 length로 취급한다.
  * `toLowerCase()`/`toUpperCase()` return: string  
    모두 소/대문자로 바꿔서 반환한다.
  * `trim()` return: string  
    양 끝의 공백문자를 모두 제거하여 반환한다.

> string은 primitive이다. 메소드를 사용해도 원시값이 바뀌진 않는다.

#### 2.2.6. Array

배열은 프로퍼티명 대신 인덱스 넘버가 있는 객체이다. 어떤 자료형이든 배열의 요소가 될 수 있다.

<br/>

함수로 호출 시 인수에 따라 다른 결과를 반환한다.

  1. 하나의 숫자: 모든 요소가 empty, length가 인수와 같은 배열 반환
  1. 여러개의 anyValue: 각 인수를 요소로 가진 배열 반환

* Array property
  * `length` value: number  
    length 프로퍼티를 변경하면, (모자란 만큼)empty 요소가 생기거나 (넘치는)요소가 삭제된다.

* Array Method  
  **아래 메소드는 원본 배열을 변경하지 않는다**
  * `isArray(any)` return: boolean
  * `indexOf(targetElement)` return: number  
    str.indexOf()와 동일하게 작동한다.
  * `concat(...item)` return: object(new array)  
    calle를 복사하고, 인수(배열 또는 값)를 요소로 추가해서 반환한다. 인수가 배열인 경우 각 엘리먼트를 풀어서 추가한다. nested 배열은 어쩔 수 없지만...
  * `join([seperator = ','])` return: string  
    faster than `+`
  * `slice([start = 0[, end = length]])` return: object(sliced array)  
    인수가 음수인 경우, 배열의 끝에서부터의 인덱스를 나타낸다. 마지막 요소는 -1  
    인수를 생략해서 전체 배열을 복사할 때 자주 사용한다.  

* Array Method  
  **아래 메소드는 원본 배열을 변경한다**  
  * `push(...item)` 맨뒤에 추가
  * `unshift(...item)` 맨앞에 추가

    > 추가 시 변경된 배열의 length 반환

  * `pop()` 맨뒤에서 제거
  * `shift()` 맨앞에서 제거

    > 제거 시 제거한 요소를 반환한다.

  * `reverse()` return: object(new array)
  * `splice([start = 0[, delCount = length[, ...item]]])` return: object(deleted array)  
  * `sort([compareFunc])` return: object(sorted array)  
    콜백함수로 오름차순, 내림차순 등으로 정렬할 수 있다.

  > 요소 추가 메소드 중 원본 배열을 변경하는 것들은 배열 인수를 풀지않고 그대로 추가한다.  
  > e.g. push, unshift, splice.  
  > 풀어서 넣을 땐 apply를 사용한다. 또 요소 추가 메소드는 변경된 배열의 length를 반환한다.  
  > `@ES6` 스프레드 연산자와 배열을 사용하면 편리하게 풀 수 있다. 이걸 언팩이라고 해도 되나?

* Array Method with callback f()  
  아래 메소드들은 인수로 콜백함수와 this value를 받는다. 메소드에 따라 콜백함수로 전달하는 인자가 조금씩 다르다. 기본적으로는 `[,eachItem[,eachIndex[,array]]]` 순서를 따른다. 필요한 개수만큼 매개변수를 선언해 사용한다. 원본 배열의 변경가능성(세번째 인자 사용), return 구문의 요구 여부, return 구문을 평가하는 컨텍스트에 유의하여 사용하자.

  **아래 메소드는 원본 배열을 변경하지 않는다**

  * `forEach(callback[, this = this])`
  * `map(callback[, this = this])`
  * `filter(callback[, this = this])`
  * `reduce(callback[, this = this])`
  * `some(callback[, this = this])`
  * `every(callback[, this = this])`
  * `find(callback[, this = this])`

#### 2.2.7. RegExp

정규표현식이란?  
문자열 검사에 사용되는 표현식으로 다음과 같은 형태로 작성한다.

```
/expression/[,flags]
```
Syntax

* '/'는 정규표현식의 시작과 끝을 의미한다
* 찾고싶은 패턴을 표현식으로 작성한다
* 추가조건을 의미하는 알파벳을 플래그라고 하며 정규식 바깥에 덧붙인다.

조건 기호

* . 임의의 문자 '한개'를 찾는다(n개 찍으면 n개)
* ^ 뒤에 이어지는 패턴을 맨 앞에서 찾는다
* $ 앞에 붙는 패턴을 맨 뒤에서 찾는다
* {} 내부에는 찾고자 하는 문자열의 개수를 입력한다. 두 수를 쉼표로 구분 시 범위를 의미한다.
* \+ 를 패턴 뒤에 붙이면 반복을 허용한다는 뜻이다
* | 는 or의 의미를 가지며, 좌우 패턴을 모두 찾는다
* [] 내부의 문자는 모두 'or' 패턴이다
* \- 를 사용해 범위를 지정한다. 단 [] 내부에서 사용한다. (e.g. [0-9A-Z])

문자 클래스

* \d : digits
* \D : not digits
* \w : words === [A-Za-z0-9_]
* \W : not words
* \l : lower cases
* \u : upper cases

공백문자 클래스

* /n : 개행문자
* /s : 공백문자(스페이스)
* /t : 공백문자(탭)

플래그는 문자열 검색 옵션을 지정한다.

* i(ignore) : 대소문자 구분없이 검색
* g(global) : 문자열 전체 검색
* m(multi line) : 줄바꿈 무시

##### RegExp in JS

자바스크립트에서는 생성자 함수 `RegExp` 또는 리터럴 표기법을 사용하여 정규식 객체를 생성하는 것이 가능하다.  
생성자를 사용하는 경우, `new RegExp(pattern[, flags])`

1. 인수로 문자열 혹은 정규표현식 리터럴을 전달한다.
1. `@ES6`, 플래그까지 포함한 정규식 리터럴을 전달할 수 있다.

* regExpObj.\<methodName> (prototype method)
  * `exec(targetStr)` return: object(array) | null  
    반환하는 배열에는 찾은 문자열, 해당 인덱스, 타겟문자열이 들어있으며, 플래그를 사용해도 첫번째 매칭만 반환한다.
  * `test(targetStr)` return: boolean  
    찾으면 `true`, 못찾으면 `false`

## 3. Execution Context

전역코드와 함수코드가 실행되는 환경을 뜻하며 객체형태를 띤다. 각 실행환경은 컨트롤의 이동을 통해 생성, 소멸한다. 단 전역 실행 컨텍스트(global EC)는 애플리케이션이 종료될 때까지 유지된다.

실행컨텍스트(객체)의 구성요소

* Scope Chain; 스코프 체인  
  [[Scopes]] 프로퍼티에 현재 컨텍스트부터 최상위 컨텍스트(global)까지의 변수객체를 순서대로 참조하는 배열형태의 값으로, 각 요소 중 가장 먼저 생성된다.
* Variable Object;변수 객체  
  전역/함수 컨텍스트에 따라서 GO(global object)와 AO(activation object)로 나뉘며 각각 저장하고 있는 정보가 조금씩 다르다.
* thisValue; this값  
  각 요소 중 마지막으로 생성되며, 기본적으로 global을 가리키다가 함수의 호출 시 패턴에 따라 값이 결정된다.

Scope Chain

* 0:GO, 1:AO1, 2:AO2...

Variable Object

* GO;global object
  1. function hoisting
  2. variable hoisting
* AO:activation object
  1. parameter : argument
  2. function hoisting
  3. variable hoisting

thisValue

## 4. Closure

내부함수를 리턴하는 함수에서 선언한 지역변수가 내부함수에서 참조된 경우, 외부함수가 종료된 이후에도 AO가 유효하여 이후 실행되는 내부함수에서 지역변수를 참조할 수 있다. 해당 내부함수를 클로저함수라고 한다. 사라지지 않는 변수는 자유변수이다. `setTimeout()` 메소드로 내부함수를 지연호출하는 경우도 여기에 해당한다.

주 용도는 전역변수 억제이다.

## 5. OOP

---

# 남겨진 궁금증...

* [ ] 배열 순회 메소드 중 원본 배열을 변경하지 않는 모든 것에 대해, 콜백함수의 세번째 인자를 이용하면 원본 배열이 변경되는지?
* [ ] reduce()와 this?
* [ ] 이거 왜 이러는지 궁금하다...

  ```javascript
  var a = [1,2,3]
  a.reduce(function(b,c){return b+c;}, a);
  // "1,2,3123"
  ```