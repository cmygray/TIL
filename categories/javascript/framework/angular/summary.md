# Angular summary

참고자료

* [poiemaweb tutorials](http://poiemaweb.com/angular-basics)

**TODO:** 질문

* [ ] sourcemap 파일과 디버깅의 관계
* [ ] spec.ts를 생성하지 않는 이유

## Common

AngularJS => Angular

* Digest Loop 문제 해결   
____Two-way binding;양방향 바인딩 데이터의 change detection;변화감지 개선.
* AoT Compile, Lazy loading 제공  
____성능 개선을 위한 추가 기능을 제공한다는 것은.. 쓰지 않으면 그전과 다를 바 없다는 얘기다.

## CLI

개발환경으로서 제공하는 기능

* build
* Unit test, End to end test env support
* add/rm element
* Live reload internal server

`$ ng new <project-name> [,--skip-install]`: create new project [skip package install]

`$ ng serve [,--open] --port <number>]]`: preview [open in browser]
* compile
* bundling
* run internal server(port: 4200)
* live reload

`$ ng build`: 배포 (dist/)
* 내부에서 webpack이 작동하며...
    * ts -> js (transpiling)
    * write map files(for debugging)
    * bundling
    * AoT compile (?)
    * syntax check(error)
    * semantic check(warn)
    * minimize
* 프로덕션 빌드 옵션 `--target=production` || `-prod`

AoT compile <-> JIT
* template 파일의 컴파일 타임
    * prod build : AoT
    * dev build : JIT  
____ng5부터는 둘다 AoT 컴파일

## Architecture

default scaffolding

my-app/  
├── .git/  
├── e2e/ (for end to end test)  
├── node_modules/  
├── **src/**  
├── .angular-cli.json  
├── .editorconfig  
├── .gitignore  
├── karma.conf.js  
├── package.json  
├── protractor.conf.js  
├── README.md  
├── tsconfig.json  
└── tslint.json  

**src** 살펴보기

src/  
├── app/: angular 구성요소(컴포넌트, 모듈, 등등 cli에서 생성한 모든 파일)  
│   ├── app.component.css  
│   ├── app.component.html  
│   ├── app.component.spec.ts  
│   ├── app.component.ts  
│   └── app.module.ts  
├── assets/ (static files e.g. img)  
├── environments/  
│   ├── environment.prod.ts  
│   └── environment.ts  
├── favicon.ico  
├── index.html (default page)  
├── main.ts  
├── polyfills.ts  
├── styles.css (전역에 영향을 미치는 css)  
├── test.ts (유닛 테스트용)  
├── tsconfig.app.json  
├── tsconfig.spec.json  
└── typings.d.ts  

bootstrap process

* dist/index.html 로드(5가지 bundle.js 파일을 포함한다)
    * inline
    * polifills
    * styles <= style bundles(전역과 스코프 스타일 모두 HTML 헤더로 쪼개져서 들어간다)
    * vendor <= ng dependency modules
    * **main** <= src/app/*.ts
* angular-cli.json 설정에 의해 main.ts 로드
* main.ts에 사전에 작성한 명령에 의해, module bootstrap
* app.module에 의해 component bootstrap
* component에 의해 템플릿과 데이터가 뷰로 전달된다.

app 구성요소

* component; 컴포넌트
    * template, metadata, class  
    ____뷰 생성이 주 목적. 템플릿 경로(또는 인라인 템플릿), 스타일 경로(또는 인라인 스타일), 셀렉터(상위 컴포넌트 혹은 정적파일(index.html)에서 컴포넌트를 사용하기 위한 태그명)를 데코레이터 함수의 인자로 전달하여 클래스로 공개한다. ng의 핵심! ng의 모든 것!
* directive; 디렉티브
    * =viewless component  
    ____컴포넌트의 스타일, 이벤트, 구조에 대한 정보를 담고 있으며 템플릿에서 타깃 태그의 attribute로써 사용된다. `*ngFor`, `*ngIf`, `*ngSwitch`는 컴포넌트의 구조적 정보를 나타내는 ng native directive.
* service; 서비스
    * application common logic  
    ____애플리케이션 공통 로직에 대한 정보를 담고 있으며 공개한 클래스의 constructor는 의존성 주입이 가능하다.
* router; 라우터
    * replace component
    * change view
* module; 모듈
    * binding(component + directive + pipe + service) mechanism

## Component

(component, directive, pipe) => view

____웹 표준을 따르는 Web component를 기반으로, HTML과 JS뿐 아니라 CSS까지 독립적인 스코프를 가지도록 부품화한 것. 부품으로 분리할 때 중점은 재사용성이다.

웹 컴포넌트의 기능적 정의(4대 기술 스펙)와 ng component 구현, 사용법

1. 뷰를 생성한다(HTML Template)  
____컴포넌트 생성 시 개별 템플릿과 스타일을 작성할 수 있다. 또 directive, pipe의 도움을 통해 구조, 스타일, 이벤트, 데이터의 표현방식을 컨트롤 할 수 있다.
1. 스코프를 분리하여 DOM을 캡슐화한다(Shadow DOM)  
____컴포넌트의 Encapsulation 옵션 선언을 통해 style 룰셋의 상속을 억제한다.
1. 외부에서 호출이 가능하다(HTML import)  
____컴포넌트 생성 시 지정한 셀렉터는 상위 컴포넌트에서 custom tag처럼 사용할 수 있다.
1. HTML element처럼 명칭(태그 역할을 하는 alias)을 가진다(Custom Element)  
____위와 동일

컴포넌트 트리

____애플리케이션 각 페이지의 View를 재사용성을 고려해 컴포넌트 단위로 분할하여 컴포넌트 트리를 만든다. 컴포넌트 트리 노드의 연결은 정보 흐름의 통로가 된다. 컴포넌트 분할에 대한 구상은 매우 중요하다.. 아무튼 중요하다...

> **Eat, Sleep, Breath Components!**
> Angular is all about components. Design the components first, before starting to code. By design, I mean –
> Draw outlines on the Visual-Designs to clearly demarcate which screen area will be owned by which component. Make the components small enough so that they can be reused at many places But large enough that making them any smaller makes no sense. It takes a bit of time to get used to creating this this logical grouping but you can naturally do this in 2–3 sprints. I insist on my entire team doing this for EVERY story in EVERY sprint.
> Once you know your component, document the “inputs” and “outputs”. I have a small design-checklist which I make every developer fill-up as a short design documentation for each story. Please see Design Narrative section at the bottom of below this post if you want to adapt it in your project.
> Design each component with Re-usability in mind. Try to create commonly used UI element as separate component and re-use them in the screens. [Vijay Dharap, Best-practices learnt from delivering a quality Angular4 application](https://hackernoon.com/best-practices-learnt-from-delivering-a-quality-angular4-application-2cd074ea53b3)

컴포넌트 코드의 생김새

```ts
// 1. 임포트 영역
import { Component } from '@angular/core';

// 2. @Component 데코레이터 영역
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// 3. 컴포넌트 클래스 영역
export class AppComponent {
  title = 'app';
}
```

1. import: 그냥 import다...
1. @Component: ng 내장 Component 함수(?)를 데코레이터(`@`)를 붙여 호출하면 바로 아래에 위치한 class의 constructor를 변경한다.(바로 아래 클래스를 변경하는건 그냥 원래 그런거다. ES7 데코레이터의 기능) 데코레이터로 호출한 Component 함수의 인자는 메타데이터 객체다. 컴포넌트에 대한 정보를 인수로 전달해서 class로 공개될 component의 내용을 채운다.
1. 데코레이터에 전달한 내용을 반영하여 class를 선언한다. 이 클래스는 외부로 공개되며, app.module.ts 파일의 @NgModule 데코레이터의 인수(이것도 메타데이터?)의 일부로 전달됨으로써 호출이 가능해진다. 다만 호출 시엔 클래스명이 아니라 메타데이터에 담긴 셀렉터 프로퍼티를 custom element처럼 사용한다.

컴포넌트의 동작

* 템플릿에서 발생한 정보는 이벤트 바인딩을 통해 컴포넌트에게 전달
* 컴포넌트 클래스가 가진 정보는 프로퍼티 바인딩을 통해 템플릿에게 전달

네이밍 규칙

____component 생성 시 hello-world 라는 이름을 전달했다면(command: `ng g c hello-world`) 관련된 각각의 이름은 아래와 같이 생성된다(cli 사용 시에는 케밥 케이스를 사용하는 것이 좋다).

* file name: hello-world.component.ts  
____convention! 기능을 명확히 설명할 것
* selector name: app-hello-world  
____이 때 'app'은 default prefix, 프로젝트 생성 시 옵션 커맨드로 정하거나 생성 후 .angular-cli.json에서 변경한다.
* class name: HelloWorldComponent
* inner template: `<app-hello-world></app-hello-world>`

### Component > Template

컴포넌트 클래스(**C**)와 템플릿(**T**) 연동

* T to T  
=> DOM element 참조정보 전달  
____템플릿 내부 임의의 요소 태그에 식별자를 선언(syntax: `#refIdentifier`)하면, 템플릿 내부에서 변수처럼 사용할 수 있다. 가리키는 값은 DOM element 객체.  
* C to T  
=> 상태정보의 전달  
____class에 선언한 property는 템플릿의 ts 컨텍스트에서 참조가 가능하다. *ts 컨텍스트*란 편의상 만든 임의적 명칭으로, 표현식이 요구되는 인터폴레이션(`{{ expression }}`) 또는 데이터 바인딩 따옴표(`"expression"`)—정확한 명칭을 알수없다— 내부를 의미한다.  
* T to C  
=> 이벤트 발생정보, 핸들러 함수의 인수 전달  
____eventful(?) HTML element가 템플릿에서 사용된다면, 표준 이벤트 바인딩(syntax: `(eventName)="handlerFunc(arg)"`)이 가능하다.  

### Component > Data binding

컴포넌트 내부에서 클래스가 보유한 정보와 템플릿의 연결을 "선언"함으로써 Vanillar보다 간결한 DOM 접근 코드.  
____대신 무겁다(간결한데 무겁다).  

느슨한 바인딩으로 뷰와 모델의 분리가 깔끔하다.  
____대신 감지 체계에 배신당한다.

data binding 종류

* 컴포넌트 클래스 to 템플릿  
  ____exp에 컴포넌트 클래스 프로퍼티를 사용할 수 있다. 삼항연산자 사용도 가능하다.  
  * interpolation: HTML content | attribute value `{{ exp }}`  
  * prop binding: HTML property(parm) `[property]=exp`
  * attr binding: HTML attribute(arg) `[attrName.]`  
  ____HTML attr : before parsing(static), DOM property : after parsing(dynamic)
  * class binding: `[class.className]="booleanExp"` OR `[class]="classNames"`
  * style binding: `[style.styleProp]="exp"`  
  ____camelCase, kebap-case 모두 허용
* 템플릿 to 컴포넌트 클래스
  * event binding: `(eventName)="statement"`
* 양방향
  * two-way binding(fake): `[(ngModel)]="var(classProp)"`  
  ____폼 요소의 고유 이벤트를 감지하는 built-in directive `ngModel`은 별도의 표준 이벤트 바인딩 없이 곧장 컴포넌트 클래스 프로퍼티와 바인딩할 수 있다. 이 때 모듈에 `FormsModule`을 import해야한다.

Change detection

____angular 사용 상 핵심이 컴포넌트라면, 기능? 원리? 상 핵심은 변화감지. zone.js에 대한 이해가 필요하기 때문에, 그리고 나는 아직 이해를 못했기 때문에... 배운대로 상태 정보 객체를 변경할 땐 무조건 재할당함으로써 변화감지 체계의 배신을 방지한다. 상태정보를 파헤친 글들만 모아둔 상태.

* [ANGULAR 2 BEST PRACTICES: CHANGE DETECTOR PERFORMANCE](https://www.lucidchart.com/techblog/2016/05/04/angular-2-best-practices-change-detector-performance/)
* [ANGULAR CHANGE DETECTION EXPLAINED](https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html)

### Component > built-in Directive

built-in directive 종류

* Component directive
* Attribute directive
    * ngClass: multiple class binding `[ngClass]="exp"`, `resolvedExp = 'class1 class2 ...' || ['class1', 'class2', ...] || { 'class1': exp, 'class2': exp, ... } || anyMethod(): object`  
    ____컴포넌트 클래스 프로퍼티에 복수의 클래스명을 할당하고, exp에서 참조한다. 타입은 string(공백 구분), string[], object, method(): object 등등 쓰기 나름. 객체 타입 사용 시 각 프로퍼티를 클래스명으로, 값을 boolean exp로 지정해 클래스 toggle에 응용한다.
    * ngStyle: `*ngStyle="{ 'cssAttr[.unitPrefix]': exp, ... }"`  
    ____하나 이상의 스타일을 객체리터럴 형태로 지정한다. 프로퍼티명은 css attribute, 값은 그에 적절한 number 또는 string. number인 경우 단위는 프로퍼티의 suffix로 표시한다.
* Structural directive  
____주의사항: host당 한번만 사용.  
  * ngIf: `*ngIf=exp` (exp ? add : don't add), `*ngIf="exp; else elemRef"` (exp ? add : add elemRef)  
  ____else를 사용한다면, 템플릿 내부 참조가 필요하기 때문에 템플릿 참조변수나 표현식이 필요하다.
  * ngFor: `*ngFor="let iter of iters[; let <identifier>=index[; trackBy: <trackMethod>]]"` 
  ____index, first, last, even, odd를 변수로 받을 수 있다. `trackMethod = (iter type injection?) => target` **TODO: 내용 보충이 필요함**
  * ngSwitch: `<base-elem [ngSwitch]="exp"><sub-elem *ngSwitchCase="caseExp">...<sub-elem *ngSwitchDefault>`

요소를 숨기는(템플릿 구조를 컨트롤하는) 방법은 여러가지다

* 구조 디렉티브를 써서 DOM에 추가 안하기
* DOM에 추가하되 조건부 스타일 바인딩으로 none 또는 hidden 처리
* css에 display, visible 룰셋을 선언하고, 해당 클래스를 조건부로 부여하기(전통적인...)

* [ ] **TODO:** display: none, visible: hidden 의 차이점 다시 보기. d: none 해도 inspector element list에선 사라지던데...

### Component > Template ref var & exp operator

template ref var

____T to T || T to C, syntax: `<target-elem #identifier>...<base-elem (event)=handlerFunc(identifier)>{{ identifier }}`

template exp operator

____템플릿의 ts context(`{{ 여기 }}`, `[]="여기"`, `*ngFor="let item of items(여기)"`, ...) 에서 표현식을 사용할 때 컴포넌트 클래스 프로퍼티를 참조했었다. 이때 함께 사용할 수 있는 연산자를 템플릿 표현식 연산자라고 한다. 데이터를 변경하지 않고 보여주는 방식만 변경한다.

* Safe nav: `exp?` — resolved exp가 존재하지 않아도 오류 X
* pipe: `exp | pipe: *args` — resoved exp를 빌트인/[커스텀 파이프]()를 통해 반환한다

### Component > Interaction

Component 간 상태 공유

* top down: `@Input`, `ViewChild`, `ViewChildren`
* bottom up: `@Output`(+emitter; 노드 건너뛰기)
* 미지의 고급진 방법...: [서비스 중재자](), [NgRx](), [Redux]()

@Input

____부모는 자신의 템플릿에서 자식 템플릿을 호출, 동시에 프로퍼티 바인딩을 함으로써 정보를 전달한다. 자식은 자신의 클래스 내부에서 Input 데코레이터를 사용, 전달받은 정보를 프로퍼티에 바인딩한다. 여기서 사용되는 데코레이터는 인스턴스로(?**TODO: 사실확인**) 쓰이기 때문에 메타데이터 전달과 후행 클래스가 필요없다.

* parent: `<child-component-selector [propName]="exp">`
* child: `@Input() propName: type`

## Directive

* format: HTML element || attribute
* role: Direction
* view를 가지고 있지 않음

종류

* component
* attribute
* structure

## Pipe

## Lifecycle Hooks

## Service & Dependency Injection

## RxJS

## HttpClient

## Forms

## NgModule

## Routing

## Deploy

---

파일 분할 패턴, 그에 대한 궁금증과 기억해둘 것들

* 타입 관리를 위해 클래스 파일을 분할했다  
____interface보다 class로 관리하는 것이 더 강력하다는 것을 기억할 것
* 루트 컴포넌트 템플릿은 실제 상황에선 매우 깨끗하다..
* [ ] **TODO:** HTTP 요청 메소드 파일은 어떻게 하는지 모르겠다