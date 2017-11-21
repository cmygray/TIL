# About Change Detection

참고자료

* [These 5 articles will make you an Angular Change Detection expert](https://blog.angularindepth.com/these-5-articles-will-make-you-an-angular-change-detection-expert-ed530d28930)
* [Tero Parviainen, Change And Its Detection In JavaScript Frameworks, 2015](https://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html#angularjs-dirty-checking)
* [Angular’s $digest is reborn in the newer version of Angular](https://blog.angularindepth.com/angulars-digest-is-reborn-in-the-newer-version-of-angular-718a961ebd3e)

### state를 관리하는 방법— app state 과 UI를 동기화하는 —이 결정적 차이다

각 프레임워크가 취한 방법들

* Ember: data binding
* Angular: dirty checking
* React: virtual DOM

____양쪽 모두 immutable data structure와 관련이 있다.

## Projecting Data

프로그램의 내부 상태를 뷰에 반영하는 것.

주로,

* 객체, 배열, 문자열, 숫자, ... => JS data structure 들이-
* 단락, 양식, 링크, 버튼, 이미지, ... => DOM으로 표시되는 것

즉, 렌더링. 혹은 data model을 view에 투영한다고 할 수 있다.

* 단방향으로 input, output이 명확하다

**다이나믹 데이터의 경우엔 얘기가 다르다. UI에서 일어난 변화가 데이터를 지속적으로 변경하고, 변경 사항이 거꾸로 반영되어야 한다.** 

* DOM을 통째로 다시 그리면 편하지만 비효율적이고, 일부만 변경하자니 state change가 걸린다.

____이것이, 각 프레임워크의 솔루션이 달라지기 시작한 이유.

## Server-side Rendering

> 상태변화 따윈 없다.. DOM 세계는 immutable

페이지를 변경못하게 해버리면, 해결된다는 관점. (immutable universe; page)

* 페이지에 변화가 일어나면, 새로운 페이지 요청
* 클라이언트 사이드에서 상태를 관리할 필요가 전혀 없다
* 당연히, 느리다

그래서,

* 초기 상태만 서버 렌더링
* 그 후 상태관리는 클라이언트 사이드에서
* isomorphic JS, 지금도 쓰긴 한다고..

즉, UI 요소가 동작할 때마다 새로운 페이지를 요청하는 방식. 서버와 클라이언트에서 동일한 언어를 사용해서 뷰를 생성하면 좀 낫다.

## 1st Gen: Manual Re-rendering

> 언제 렌더링을 다시 해야되는지 모르겠으니까, 네가(개발자) 좀 알려줘...

Backbone.js, Ext JS

* 브라우저에서 data model을 관리하기 시작
* UI와 model 코드를 분리할 수 있게 되었다
* 하지만 분리된 것을 동기화 하는 것은 우리의 몫..

즉, UI 동작에 의해 클라이언트데이터가 변경되면 DOM의 일부분이 갱신되는 방식. 모든 DOM 이벤트에 각각 다른 범위의 렌더링을 일일이 연동.

## Ember.js: Data Binding

> 모델과 뷰를 관리함으로써 변경점과 렌더링할 것을 정확히 알아낸다

* 상태 변화 시 수동으로 렌더링을 하면 복잡도가 상승하는 문제점을 해결
* 모델 변화 시 발생하는 이벤트를 관련된 UI요소가 감지하는 방식

모델 변경 이벤트가 발생하면, 리스너로 지정한 UI 요소가 업데이트된다. 하지만,

* listener와 emitter가 바뀌었을 뿐, trade-off를 해결하진 못함
* 모델 생성, 변경 시 정해진 API를 사용해야만 함

ES6에서 Proxy 객체를 지원하면서, Ember만의 바인딩 코드로 모델 객체를 데코레이트 하는게 가능해졌다. 매번 API를 써야하는 수고는 줄었다.

## AngularJS: Dirty Checking

> 뭐가 변경됐는지 모르겠으니까, 이거다 싶으면 죄다 체크할게..

* 템플릿에 데이터를 사용하면, 렌더도 하지만 watcher도 생성된다.
* watcher: 각각의 DOM 요소가 관련된 상태정보를 바라보는 연결관계'들'.(템플릿이 연결고리)
* 모델이 변화할 때마다, 최근에 체크한 값을 기준으로 뭐가 바뀐건지 확인(digest)
* 바뀐게 있으면, watch 중인 UI를 렌더

좋은점

* 모델 타입이 자유롭다 (끝)

나쁜점

* 모델의 변경정보를 알고 있는 건 DOM 뿐이다
* DOM event, HTTP res, Timers... 모든 것이 끊임없이 digest 활성화

그럼에도 불구하고 빠른 이유는,

* digest가 작동해도 변경점만 없으면 DOM에 접근하지 않음
* JS는 ref 체크(메모리 주소가 바뀌었는지)를 아주 잘한다

한계

* large UI(즉, long~ watcher)
* 잦은 렌더링(데이터 변화가 잦다는 뜻 같다)

앞으로 나아질 만한 부분도 있다

* ES7 `Object.observe` 메소드 watcher의 기능을 일부 담당할 수 있는 표준 API

## React: Virtual DOM

> 뭐가 바뀐지 모르겠으니까 전부 다시 렌더하고, 현재 모습과 비교할게...

* 서버사이드 렌더링처럼, 뭐가 바뀌든 일단 전부 렌더링(virtual DOM)
* virtual DOM: 실제 DOM을 표현하는 가벼운 JS 자료구조(객체와 배열)
* new virtual DOM - old virtual DOM = DOM diff => Patch

장점

* 변화를 추적할 필요가 없다. 결과를 비교함으로써 자동 해결

언제?

* DOM 처리 비용 > Data 변경 추적 비용
* 변경 빈도가 60회/sec 미만일때(virtual DOM 렌더링이 부담스러워짐)

## Om: Immutable DS

> 나는 바뀌지 않은게 뭔지 확실히 알아...

불변형 자료구조를 사용해서 상태변화를 관리하는 관점

* 변형하지 않고 오직 재할당
* 혹은 재할당을 강제하기 위해 불변형 자료만 사용

리액트의 상태정보가 불변형 자료로만 구성되어있다면,

____자료구조를 공부한다면 list & array, linked list를 먼저 숙지해야 하는 이유를 여기서 찾을 수 있다. 그리고 이미 linked list로 구현된 자바스크립트 Array의 메소드를 능수능란하게 쓰는 것 역시 중요...

* DOM에서 그대로인 부분은 렌더링 생략(old DOM 재사용)
* 즉, Diff를 찾는 로직은 그대로지만 선행절차가 간소화된다
* JavaScript 객체 사용 불가
* 불변형 자료구조를 구현해 누릴 수 있는 편리함이 장점(이자 단점)

정리

* UI 개발에서 변화 감지는 핵심 문제
* EmberJS: 자체 API만으로 모델을 만들어서, 변경 시 이벤트가 발생하고 UI 갱신
    * 
* AngularJS: 모든 바인딩 데이터의 값을, 모든 변경 전후로 비교하고, 변경 시 해당 DOM 요소 갱신
    * 잦은 asnyc event로 인한 digest loop 발생 -- <A>
    * 뭔가 일어나면 어쨌든 watcher를 돌리게끔 되어있다
* React: 모든 DOM을 렌더링, 이전의 DOM과 비교해서 바뀐 부분만 찾아서 DOM 갱신
    * 잦은 virtual DOM 생성에 취약 -- <B>
    * 뭔가 일어나면 어쨌든 virtual DOM을 만들게 되어있다

____근데 <A> 하고 <B>는 근본적으로 원인이 같지 않나?

* 아무튼 불변형 자료구조를 사용하면 보다 편리하다
    * digest loop이건, virtual DOM이건 비교는 필수적인데 불변형 자료구조는 비교연산이 훨씬 빠르니까.
    * watcher 순회든 virtual DOM 비교든 이전과 같은데, 건너뛰기가 가능해진다.
* 이 글은 2015년의 프레임워크를 기준으로 비교했기 때문에 현재는 다를 수 있다.
