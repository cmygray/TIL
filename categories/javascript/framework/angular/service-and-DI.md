# Service and Dependency Injection in Angular

애플리케이션 (공통)로직을 분리한 ㅅclass. 컴포넌트 클래스에서 가져다가 사용하기 위해서는, 인스턴스 생성 또는 의존성 주입이 필요하다.

____공통 로직의 예로는 HTTPRequest가 있다

DI를 사용하지 않고 사용하는 방법

step1. `sayHi() { return 'Hi!'; }` 메소드를 Injectable 클래스에 추가한다

```ts
// greeting.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class GreetingService {
  sayHi() { return 'Hi!'; }
}
```

step2. 컴포넌트에 주입한다

```ts
// app.component.ts
import { Component } from '@angular/core';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="sayHi()">Say hi</button>
    <p>{{ greeting }}</p>
  `
})
export class AppComponent {
  greeting: string;
  grettingService: GreetingService; // instance: InjectedClass

  constructor() {
    this.greetingService = new GreetingSerivce();
  }
  sayHi() {
    this.greeting = this.greetingService.sayHi();
  }
}
```

* 컴포넌트에서 (공통)사용할 프로퍼티를 별도의 서비스 클래스에 추가한다
* 서비스 클래스의 인스턴스를 컴포넌트 클래스의 프로퍼티로 추가한다
* 서비스 인스턴스의 메소드를 사용해서, 컴포넌트 클래스 메소드를 구현한다

얻은 것

* 의존성: 이제 서비스 클래스를 변경하면 컴포넌트 클래스 메소드도 같이 변한다
* Tight Coupling: 의존성 생성 코드(서비스 클래스로 인스턴스 생성), 의존 요소 사용코드(sayHi()메소드를 서비스 클래스 인스턴스의 메소드로 구현)가 하나의 컴포넌트에 존재하는 상태

DI를 사용하는 방법

```ts
// app.component.ts
import { Component } from '@angular/core';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="sayHi()">Say Hi</button>
    <p>{{ greeting }}</p>
  `,
  providers: [GreetingService],
})
export class AppComponent {
  greeting: string;

  constructor(private greetingService: GreetingService) {}
  sayHi() {
    this.greeting = this.greetingService.sayHi();
  }
}
```

* 사용할 서비스를 컴포넌트 메타데이터의 provider로 지정하였다
* 컴포넌트 클래스 생성자에 인스턴스를 인수로 전달한다

얻은것

* 인스턴스 생성 절차 코드가 없어져서 깔끔하고 작성하기 편하다
* loose coupling 으로 

* [ ] TODO: 왜 private 일까?

---

Injector; 인젝터

* DI 시 사용될 인스턴스 보관소(컨테이너)
* 요청받은 인스턴스가 없으면 생성한다

Injector Tree

* 동일한 provider라면, 상위 컴포넌트에서 사용된 인스턴스는 하위 컴포넌트에서 재사용된다
* 즉, 루트 컴포넌트 메타데이터에 모든 provider를 선언하면 하위 컴포넌트에서 뭐든지 사용가능
  * **global service**

Provider

* NgModule 또는 Componenet 메타데이터에 기록한다
  * **모듈에 선언하면 인스턴스를 공유하고, 컴포넌트에 선언하면 컴포넌트 생성 시 인스턴스도 생성된다**

Provider의 종류

1.Class provider

* 서비스 클래스로 이루어진 배열(축약표현)
  * `providers: [ <className> ]`
  * `providers: [{ provide: <classType>, useClass: <className> }]` 의 축약이다  
  ____클래스명가 곧 타입일 때 축약할 수 있다
* 대체 클래스를 사용하는 경우
  * 타입의 기준이 될 서비스 클래스를 만들어두고, 타입은 같지만 이름이 대체 클래스(덕타이핑를 통과하는)로 약간씩 변형해서 쓸 수 있다.
  * 싱글턴 인스턴스생성을 위해 `useClass` 대신 `useExisting` 프로퍼티를 사용한다

* [ ] TODO: 불필요한 서비스 인스턴스는 tree shaking으로 해결이 안되는지?

2.Value provider

* 클래스와 함께 변수를 export, 컴포넌트에 값을 주입한다
  * `providers: [{ provide: <className>, useValue: <varName> }]`
* 클래스 없이 변수만 export해도 된다
  * `{ provide: '<tokenName>', useValue: <injectionValue> }`
  * 이 경우 컴포넌트에서 명시해야한다: `@Inject(tokenName)`

* [ ] TODO: 왜 public..?

3.Factory provider

* 복수의 서비스를, 별도로 생성한 프로바이더에서 관리한다
* 프로바이더에서 팩토리함수를 생성한다
  * 조건을 인수로 받아서, 복수의 서비스 중 하나를 사용해 인스턴스를 반환한다
  * 외부로 공개하는 객체의 정보로는,
    * `{ provide: <type>, useFactory: <factoryFuncName>, deps: ['<tokenName>'] }`

* 타입이 같은 복수의 서비스 => 프로바이더는 서비스를 골라줄 팩토리함수를 제공 => 컴포넌트는 프로바이더를 토큰과 함께 사용함으로써 그때그때 다른 서비스를 사용.

---

Injection Token

* 클래스 대신 인터페이스로 프로바이더 타입을 정하고 싶을 때 쓴다
  * (인터페이스는 컴파일 시 날라가서 오류가 발생한다 근데 왜 굳이...)
* InjectionToken 클래스를 import 하면, interface로도 provider 역할을 할 인스턴스를 생성할 수 있다.

* [ ] TODO: 대체 왜..? 인스턴스 생성을 방지하려고?

주입 시,

* @Inject 데코레이터에, 생성했던 인스턴스를 전달

---

Optional Dependency

* Optional 함수를 import, 데코레이터로 사용하면 생성자 인수가 가리키는 인젝션 클래스가 없어도 문제가 발생하지 않는다.

---

Service Mediator Pattern

* 중재자가 관리할 프로퍼티를 만들어둔다
* 부모 컴포넌트에서 프로바이더에 중재자를 등록한다
* 자식 컴포넌트는 중재자의 인스턴스를 주입받고, 프로퍼티를 변경한다
* 또다른 자식 컴포넌트 역시 중재자의 인스턴스를 주입받고, 공유 프로퍼티를 템플릿에 사용할 수 있다
---

### 정리

팩토리, 인젝션 토큰은 서비스 측에서도 프로바이더를 선언해야한다

클래스를 제외하고, 인젝션 시 @Inject 데코레이터를 사용한다