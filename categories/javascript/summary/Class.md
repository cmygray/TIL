# Javascript Class

## Definition

자바스크립트는 프로토타입 기반 멀티 패러다임 랭귀지이다. ES5에서는 생성자 함수와 프로토타입을 사용하여 객체 지향 프로그래밍을 구현했다. ES6에서는 Class 키워드를 도입하여 객체 지향 프로그래밍을 지원하지만, 생성자 함수와 프로토타입을 이용한 내부 동작 원리는 같다.

### ES5

**ES5** 클래스 구현 코드 예제

```js
// ES5
var Person = (function () { // 1. 변수 Person에 함수의 반환값을 할당하였다.
  function Person(name) { // 3. 생성자 함수 Person의 선언부
    this._name = name; // 4. 생성자 함수 선언 시 this는 이후 생성될 인스턴스를 가리킨다.(내부함수는 제외하고)
  }
  Person.prototype.sayHi = function () { // 5. 생성자 함수의 프로토타입에 프로퍼티를 추가한다. 함수를 추가하고 있으므로 이것은 메서드가 된다.
    console.log('Hi! ' + this._name); // 6. 내부함수의 this...?
    // Nope. 여기서 this는 메소드 호출패턴에 의해 sayHi 함수를 호출한 객체, 즉 인스턴스에 바인딩.
  };
  return Person; // 2. 변수 Person에 할당될 반환값은 IIFE 내부에서 선언한 (생성자)함수 Person.
}());
var me = new Person('Lee'); // 7. new 키워드로 <1>에서 할당한 함수를 호출, 인스턴스를 생성한다. new 키워드에 의해 빈 객체가 생성되고, 함수 선언 시 작성한 코드에 따라 프로퍼티가 동적으로 추가된다. 전달된 인수 'Lee'는 <4>에 의해 name 프로퍼티에 할당되는 값이다.
me.sayHi(); // 8. <5>에서 프로토타입에 부여한 프로퍼티(메소드) sayHi를 호출한다. <6>에서 _name 프로퍼티에 접근하여 메세지를 출력하며, 메소드 호출패턴에 의해 호출 객체(me)의 프로퍼티를 참조한다. 즉 'Hi! Lee' 출력.
console.log(me instanceof Person); // 9. me 객체는 Person 생성자의 인스턴스인지 확인한다.
```

생성자"함수" Person이 마치 클래스처럼 동작하는 모습이다. ES6 의 Class 키워드 역시 내부구조는 함수지만, 선언 시 아래와 같은 차이점이 있다. 

* IIFE 반환값(함수)을 할당했던 변수는 class 키워드와 함께 사용한다.
* IIFE 내부에서 선언한 생성자 함수는 constructor 키워드의 코드블록으로 대체한다.
* 프로토타입에 접근하지 않고, constructor 내부에서 메서드를 선언한다.

### ES6

**ES6** 클래스 사용 코드 예제

```js
// ES6
class Person { // 1. 클래스 선언. 장차 생성자 함수처럼 동작할 예정.
  constructor (name) { // 2. 컨스트럭터 선언. 사용할 인자도 여기에 추가.
    this._name = name; // 3. 전달받은 인수를 프로퍼티에 할당하고있다. 생성자 함수 호출패턴과 마찬가지로, this 는 장차 생성할 인스턴스를 가리킨다.
  }
  sayHi() { // 4. 메서드 선언은 컨스트럭터를 닫고 해야한다.
    console.log(`Hi! ${this._name}`); // 5. this는 메서드 호출패턴을 따른다.
  }
}
const me = new Person('Lee');
me.sayHi();
console.log(me instanceof Person);
```

##### Class도 결국 (생성자처럼 동작하는)함수라면, Person 클래스에 프로토타입이 있을까?

```js
// console
class Person {
    constructor (name) {
        this._name = name;
    }
    sayHi() {
        console.log(`Hi! ${this._name}`);
    }
}
Person.prototype // {constructor: ƒ, sayHi: ƒ} 있다!
Person.prototype.sayHi //ƒ sayHi() { console.log(`Hi! ${this._name}`); }
Person /*
class Person {
    constructor (name) {
        this._name = name;
    }
    sayHi() {
        console.log(`Hi! ${this._name}`);
    }
}
*/
```

**깨달음: 아 이래서 Syntactic sugaring 이라고 하는구나.**

멤버 변수란?

* constructor 내부에서 선언한 프로퍼티
* 일반 변수에 할당하면 그냥 내부 변수
* this binding으로 인스턴스에 할당하면 멤버 변수
    * 하지만 외부에서 참조가 가능하다.(always public)

getter, setter

* 멤버변수에 접근해서 다음과 같은 행위를 한다
    * 무언가를 반환하거나(`get`)
    * 무언가를 조작한다(`set`)
* 하지만 애초에 ES6 멤버변수는 public이므로, 외부에서도 조작이 가능하다..

get, set 사용 예제 코드

```js
class Foo { // 1. class Foo 는
  constructor(arr = []) { // 2. 인수로 전달받은 배열, 또는 기본값인 빈 배열을 사용해서
    this._arr = arr; // 3. 인스턴스에 _arr 프로퍼티를 추가하고, 인수를 값으로 할당한다.
  }
  get firstElem() { // 4. getter firstElem은
    return this._arr.length ? this._arr[0] : null; // 5. 호출한 인스턴스의 _arr 프로퍼티(값이 배열인)를 참조하여 length 프로퍼티를 확인한다. 0이면 null을, 그 외엔 첫번째 요소를 반환한다.
  }
  set firstElem(elem) { // 6. setter firstElem은
    this._arr = [elem, ...this._arr]; // 7. 전달 인수를 호출 인스턴스의 _arr프로퍼티(값이 배열인)의 맨 앞에 추가하고 재할당한다.
  }
}
const foo = new Foo([1,2,3]);

// get, set은 호출방식이 특이하다.

foo.firstElem // getter를 호출한다. 결과는 1
foo.firstElem = 0 // setter를 호출한다. 인수 0을 전달한다. foo._arr의 첫번째 요소로 0을 추가한다.
foo.firstElem // 0

foo._arr[0] // 0
foo._arr = [-1, ...foo._arr] // [-1, 0, 1, 2, 3]
```

어차피 퍼블릭이라 접근이 되는데 굳이 만들어둔... 알쏭달쏭한 부분이 있다...

Static method

* class(생성자"함수"로써 호출하는) 객체의 메소드
* prototype에는 없으므로 인스턴스로 호출 불가

```js
class Foo {
  constructor (prop) {
    this.prop = prop;
  }
  static staticMethod () {
    return 'static method is called';
  }
}

// 클래스에서 바로 호출한다
Foo.staticMethod()
const foo = new Foo
foo.staticMethod() // error
```

## Inheritance

맥락이 없는, 단지 재사용을 위한 클래스 구조설계는 좋은 프로그래밍이 아니다.

### ES6

**ES6** 클래스 상속 키워드를 사용, base class에서 재활용할 정보를 가져온다.

* extends 키워드로 대상 클래스 지정
* super 키워드로 정보를 가져온다

상위 클래스 Animal, 하위 클래스 Human을 통해서 알아보기

* species, weight 프로퍼티를 공유
* nationality, language 프로퍼티는 sub class의 고유 프로퍼티
* spec 메소드는 base를 참조하되, override

```js
class Animal { // baseClass
  constructor (species, weight) {
    this._species = species; // <A>
    this._weight = weight;   // <B>
  }
  spec() { // base class member function returns spec: string
    const result = `species: ${this._species},
weight: ${this._weight}`;
    return result;
  }
  memberFunc() {
    console.log('Both base and sub class can use me')
  }
}

class Human extends Animal { // subClass extends baseClass
  constructor (species, weight, nationality, language) { // 
    super(species, weight) // super의 역할은 bassClass 프로퍼티 동적추가 코드(<A>, <B>의 재활용)
    this._nationality = nationality;
    this._language = language;
  }
  spec() { // overloading을 흉내낸 overriding;;;
    const result = `nationality: ${this._nationality},
language: ${this._language}`
    return `${super.spec()},
${result}`;
  }
}

const dog = new Animal('dog', '5kg');
const kim = new Human('homo sapiens', '75kg', 'Korea', 'Korean');

console.log(dog.spec());
console.log(kim.spec());
dog.memberFunc()
kim.memberFunc()
```

`extends` 요모조모

* subClass.[[Prototype]] `===` baseClass
* extends로 한번 연결하면, subClass를 통해서도 baseClass의 `static`에 접근이 가능  
  *단, subClass instance는 불가능*

`super` 사용 패턴

* base class constructor 내부에서 사용 시, sub class 프로퍼티 생성
* sub class 내부에서 사용 시 base class 메소드 호출 가능  
  *이때, this value는 sub class의 instance*
