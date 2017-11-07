# Angular - brief summary

Angular2 프로젝트와 수업을 대비하여 간단하게 살펴보는 중입니다. 내용은 지속적으로 추가됩니다...

<br>

참고자료

* [poiemaweb tutorials](http://poiemaweb.com/angular-basics)
* [Angular2 vs. React](http://han41858.tistory.com/9)

궁금증

* [ ] sourcemap 파일과 디버깅의 관계
* [ ] spec.ts를 생성하지 않는 이유
* [ ] Architecture 설명부분에서.. main.bundle.js => .ts로 전환하는 이유

## Common

Pros

* 개발 생산성(대규모 지향, 컴포넌트 중심)
* 전체 구조를 아우르는 방식

Cons

* 퍼포먼스(렌더링 속도)
    * two-way binding => digest loop => lower performance
* not support IE8

## CLI

개발환경으로서 제공하는 기능

* build
* test
* add/rm element
* internal server

`$ ng new <project-name> [,--skip-install]`: create new project [skip package install]

`$ ng serve [,--open] --port <number>]]`: preview [open in browser]
* compile
* bundling
* run internal server(port: 4200)
* live reload

`$ ng generate`: generate new element (root/src/...)
* component(`$ n g c <name>`): (./name/)   
  name.component.html, name.component.css, name.component.spec.ts, name.component.ts
    * component 폴더 생성, 파일 추가 / \<root>.module.ts에 등록
    * name => selector(kebap-case with prefix)
    * component class => PascalCase (e.g. HomeComponent)
    * option `--inline-template --inline-style`
* directive(`$ n g d <name>`: (./)  
  name.directive.spec.ts, name.directive.ts
    * 루트폴더에 파일 생성, \<root>.module.ts에 등록
    * name => selector(camelCase with prefix)
    * use selector as HTML attribute
* pipe: 
* service(`$ n g s <name>`: (./)  
  name.service.spec.ts, name.service.ts
    * 루트폴더에 파일 생성
    * 모듈 or 컴포넌트의 providers 프로퍼티에 등록
* module(`$ n g m <name>`: (./name/) name.module.ts
    * module폴더를 생성하고 파일 추가
    * root module에서 import 해야한다
* guard: 
* class(`$ n g cl <name>`: (./) name.ts
* interface: 
* enum: 

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
* template file compile time...
    * build: AoT
    * runtime: JIT

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

**src**

src/
├── app/ 
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
├── styles.css (global css)  
├── test.ts (for unit test)  
├── tsconfig.app.json  
├── tsconfig.spec.json  
└── typings.d.ts  

절차

* dist/index.html 로드(몇가지 bundle.js 파일을 포함한다)
    * inline
    * polifills
    * styles
    * vendor
    * **main**
* angular-cli.json 설정에 의해 main.ts 로드
* main.ts에 사전에 작성한 명령에 의해, module bootstrap
* app.module에 의해 component bootstrap
* component에 의해 템플릿과 데이터가 뷰로 전달된다.

구성요소

* component
    * template, metadata, class
    * create view
* directive
    * specific logic
* service
    * common logic
* router
    * replace component
    * change view
* module
    * binding(component + directivi + pipe + service) mechanism

## Component

* has own view
* (component, directive, pipe) => view
* template: html url OR inline html: string
* styles: css url OR inline style: string

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