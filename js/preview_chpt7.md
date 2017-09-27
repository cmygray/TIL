# js basic chap.7 preview
## Object
* expression
  * object(객체)를 리터럴로 표현할 수 있다. 코드블럭 `{}` 내부에 프로퍼티를 작성.
  * 프로퍼티는 이름과 값으로 이루어진다.
  * 값이 함수인 프로퍼티를 method(메소드)라고 한다.
  * property의 값은 `undefined`를 제외하고 가능.
```javascript
var myObject = {  //object container block
    name: value, //property(name : value)
    methodName: function() {
        //method sentences
    },  //Method(if a property's value is a function)
    cannotBe: undefined, //a value can't be undefined
}
```
* add property
  * object를 변수에 할당한 후 프로퍼티를 변경, 추가할 수 있다.
  * 리터럴 방식, 오브젝트 생성자(내장함수) 방식을 사용한다.
  * 접근한 오브젝트에 해당 프로퍼티가 존재하면 값을 갱신한다.
  * 접근한 오브젝트에 해당 프로퍼티가 !존재하면 값을 추가한다.
```javascript
//1. by liteal(=by built in func Object(), shorthand)
var myObj = {}; //empty literal object
myObj.propName = 'propValue'; //!!propName ? update : add

//2. by constructor(`Object()`; use built-in function as constructor)
var myObj = new Object();
myObj.propName = 'propValue';
```
* constructor(function)
  * 함수 앞에 예약어 `new`를 달아서 실행시키면 생성자로 동작한다
  > 빈 함수를 생성자로 호출하면 빈 객체가 생성된다. 헷갈리니까 생성자 함수는 대문자로 시작하자.
```javascript
function FUNCNAME (INPUT1, INPUT2, INPUT3 ... INPUTn) {
    this.PROPNAME = INPUTn || primitive; //인스턴스의 프로퍼티는 일반변수를 참조한 값을 가질 수 있다. primitive를 넣어서 어떤 인스턴스에서도 같은 값을 가지게 할 수도 있다.
    this.METHODNAME = function() {
        //sentences
        //you can use this.PROPNAMEn here. name calls value
    }
}
```
  * `this`: 인스턴스(해당 생성자를 사용해서 장차 찍어낼 각각의 오브젝트)
  * `this.PROPNAME`: 찍어낼 각 오브젝트의 프로퍼티
  * `this.METHODNAME`: 찍어낼 각 오브젝트 내부에서 동작할 메소드
  * `INPUT1 ~ INPUTn`: 찍어낼 때마다 받을 변수. 생성자 함수 내부에서 접근해 사용.
* property accessor
  * 객체 생성시 프로퍼티의 이름에 ''를 사용할수도, 안할수도 있다. 사용했더라도 접근할 땐 쓰이지 않는다.(연산자가 포함된 경우는 예외)
  * `.` 또는 `[]`를 사용한다.
