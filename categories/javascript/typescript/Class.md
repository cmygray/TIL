# TypeScript basic syntax and features

Class, Interface, Generic

## Class

타입스크립트의 클래스는 ES6 클래스와 전반적으로 비슷하지만, 몇가지 고유 기능이 존재한다.

* member var declaration
* access modifier(`public`, `protected`, `private` default=`public`)
* `static` member var
* `abstract class`

### Definition

**ES6**

```js
class Person {
  constructor(name) {
    this.name = name; // public
  }
  walk() {
    console.log(`${this.name} walk`);
  }
}
```

**TS**

```typescript
class Person {
  name: string; // public
  constructor(name: string) {
    this.name = name;
  }
  walk() {
    console.log(`${this.name} walk`);
  }
}
```

**TS class definition with access identifier**

```ts
class Foo {
  public x: string;
  protected y: string;
  private z: string;

  constructor(x: string, y: string, z: string) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  print() {
    console.log(x, y );
  }
}

const foo = new Foo('xx', 'yy', 'zz');
foo.print();
```

**access identifier types**

* public: base, sub, instance
* protected: base, sub
* private: only base

접근제한자는 constructor 파라메터에도 사용할 수 있다.

---

* readonly: readonly(as `const`, use after access identifier)

**Abstract Class**

* 인스턴스 생성 불가
* sub class에서 상속 시 implementation이 필요하다
* absctract method, standard method를 포함

```ts
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log('Animal can walk...');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('bowwow');
  }
}

const myDog = new Dog();
myDog.makeSound()
myDog.move();
```

## Interface

Class - Implementation = Interface

* 일종의 (여러 타입의 프로퍼티로 이루어진)자료형을 정의하는 행위. 즉 객체의 타입 지정
* 인터페이스 내부에 메소드를 정의할 수도 있다.
* 인터페이스를 함수에 사용할 수 있다.

```ts
interface IPerson {
  // 멤버변수의 자료형을 사전에 선언한다. IPerson은 이제 커스텀 자료형이 된 셈.
  name: string;
  age: number;
  gender: boolean;
  introduce(): string; // interface에서 메소드를 선언할 수 있다.
}

// IPerson 인터페이스를 따르는 파라메터를 사용하는 함수를 선언한다.
function introduce(person: IPerson): string {
  return `
  My name is ${person.name}.
  I am ${person.age} years old.
  I am ${person.gender ? 'male' : 'female'}.`
}

// IPerson 인터페이스를 따르는 변수를 선언할 땐 자료형을 표시할 때와 같이 콜론(:)을 사용한다
const me: IPerson = {
  name: 'Kim', // 각 프로퍼티의 이름과 자료형이 인터페이스와 일치해야하며, 빠뜨려서도 안된다.
  age: 28,
  gender: true
  };
console.log(introduce(me));
```

**클래스 선언 시 특정 인터페이스를 따르도록 할 수 있다.**

```ts
// 위에서 선언한 IPerson interface를 따르는 class 선언
class Person implements IPerson {
  constructor (public name: string, public age: number, public gender: boolean) {
  }
  introduce() { // IPerson 인터페이스에 포함됐으므로, 구현해야한다.
    return `
    My name is ${this.name}.
    I am ${this.age} years old.
    I am ${this.gender ? 'male' : 'female'}.`
  }
}

const lee = new Person('Lee', 30, false);
console.log(lee.introduce());
```

### [Duck typing](https://ko.wikipedia.org/wiki/%EB%8D%95_%ED%83%80%EC%9D%B4%ED%95%91#.EA.B0.9C.EB.85.90.EC.A0.81_.EC.98.88.EC.A0.9C)

> 만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거리는 소리를 낸다면 나는 그 새를 오리라고 부를 것이다. "덕 테스트"

```ts
// 오리란 꽥꽥대기 마련이니까 인터페이스를 만들자 (느슨하기 짝이 없는 덕 테스트에 해당한다)
interface IDuck {
  quack(): void;
}
// 중국오리는 gaga
class ChineseDuck implements IDuck {
  quack() {
    console.log('gaga') // implementaion of interface method
  }
}
// 한국 오리는 꽥꽥
class KoreanDuck implements IDuck {
  quack() {
    console.log('꽥꽥')
  }
}
// 소리내봐 니가 오리라면
function makeNoise(duck: IDuck): void {
  duck.quack();
}
// 사냥꾼은 오리가 아니지만 꽥꽥거리는 척 총을 쏜다
class DuckHunter {
  quack() {
    console.log('탕탕')
  }
}

makeNoise(new ChineseDuck()); // gaga
makeNoise(new KoreanDuck()); // 꽥꽥
makeNoise(new DuckHunter()); // 탕탕 (!?)
```

사냥꾼이 덕 테스트를 통과해버렸다.

* 클래스가 인터페이스를 implements 하고 있지 않더라도 조건(인터페이스를 충실히 구현하고 있는가)이 일치하면 같은 타입으로 판단.

일반 변수의 경우에도 마찬가지이다.

```ts
function checkGender(person: IPerson): boolean {
  return person.gender;
}

const dog = { name: '', age: 2, gender: true, introduce() {return null}}
checkGender(dog); // true
```

변수 dog는 클래스가 없다. 다만 IPerson 인터페이스에서 요구하는 implementation을 만족하는 리터럴 객체이다. 따라서 IPerson 타입의 객체만을 인수로 받는 checkGender 함수가 작동하였다.  
인터페이스는 개발 단계에서의 도움을 위해 제공되는 기능으로, 컴파일 시 사라진다.

그외 인터페이스의 기능

* 함수 typing
* Optional property

함수 typing은 파라메터와 리턴의 타입을 함수 선언에 앞서 지정하는 것이다.

```ts
interface Calc {
  (base: number, adder: number): number;
}

const adder: Calc = (base: number, adder: number) => base + adder;
console.log(adder(1,1)) // 2
```

Optional property 이름 뒤에는 `?`를 붙인다. 해당 프로퍼티는 필수가 아니므로 클래스 또는 변수 implementation에서 생략이 가능하다.

```ts
interface IUserInfo {
  username: string;
  password: string;
  age?: number;
  address?: string;
}

function checkUserInfo(user: IUserInfo): boolean {
  return (user.username < 10 && user.password > 8)
}

const userInfo = {
  username: 'cmygray'
  password: 'cmycmy1234'
}

console.log(checkUserInfo(userInfo)); // true
```

## Generic

FIFO형 자료(Queue)를 만드는 예제

```ts
class Queue {
  protected data: any[] = [];
  push(item): void {
    this.data.push(item);
  }
  pop():any {
    return this.data.shift();
  }
}

class NumberQueue extends Queue {
  push(item: number): void {
    super.push(item);
    console.log(this.data);
  }
  pop(): number {
    console.log(this.data);
    return super.pop();
  }
}

const queue = new NumberQueue();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.pop();
queue.pop();
queue.pop();
queue.pop();
queue.pop();
```

generic

* type parameter
* class 선언 시 `<T>`(관행적 T) 사용
* class 내부에서 타입 대신 매개변수로 활용
* 인스턴스 생성 시 T 자리에 type 전달.
* 커스텀 타입도 가능(as `interface`)

```ts
class Queue<T> {
  protected data: any[] = [];
  push(item: T): T[] {
    this.data.push(item);
    return this.data;
  }
  pop(): T {
    return this.data.shift();
  }
}

const numberQueue = new Queue<number>();
console.log(numberQueue.push(0));
console.log(numberQueue.push(1));
console.log(numberQueue.push(2));
console.log(numberQueue.pop());
console.log(numberQueue.pop());
console.log(numberQueue.pop());
```