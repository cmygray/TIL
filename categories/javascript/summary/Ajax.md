# Ajax

**A**syncronous **J**avascript **a**nd **X**ML  
비동기 통신을 이용한 웹 개발 기법

<br>

목적

* 네트워크 블로킹 상태 억제.
* 사용성 증대, 패킷 절약.

효용

* 페이지의 일부만 갱신 가능.
* 서버와 통신중에도 방해받지 않음.

방법

* 서버와의 통신경과와 전송 데이터와 관련된 동작 스크립트의 실행컨텍스트를 이벤트 루프가 컨트롤하도록 한다. (DOM 객체 수정 스크립트의 실행컨텍스트를 사용자와 페이지 간 인터렉션에 의해 이벤트 루프가 컨트롤 하듯.)
* XMLHttpRequest 객체와 메소드가 이를 지원한다.
* 요청을 위해서는 먼저 request 객체를 생성, 요청에 관한 정보를 담아 완성 후 전송한다.
* XMLHttpRequest 생성자가 이를 생성하고, 생성된 객체의 프로퍼티에 HTTP 프로토콜에 따른 값을 할당하여 완성한다.
* 서버는 request 객체를 받아서 요청 내용을 해석하고, 적절한 정보를(주로 JSON 양식의) 텍스트 형태로 담은 responseText를 돌려준다.

좀 더 구체적인 방법

* *우리끼리 약속된 원칙*으로 작성된 JSON 데이터를 대원칙인 HTTP에 의거해 요청하면, 해당 데이터가 텍스트형태로 responseText 객체에 담겨 돌아온다.
* 돌아온 텍스트 데이터는 요청 인스턴스의 `responseText` 프로퍼티에 할당된다.
* 위 프로퍼티를 참조해 JSON으로 파싱하고 HTML 내용을 교체한다.(state 핸들러 함수 내부에서)
* POST 메소드처럼 서버에 데이터를 생성하는 경우 역시 *사전에 약속된 형태로 작성된* JSON 텍스트 데이터를 XMLHttpRequest.send 메소드에 인수로 전달한다.

> *우리끼리 약속된 원칙*이란 서버의 데이터베이스를 구축하기에도, 클라이언트에서 파싱하여 HTML 요소로 추가하기에도 적합한 구조와 규칙을 말한다. 여기에 내가 관여할 수 있는지는 모르겠으나, 프로젝트를 시작하면 백엔드 개발자가 체계를 마련하고 접근하는 규칙(API)을 내게 줄 것이다.

XMLHttpRequest constructor

* 생성자로서, request 객체를 생성

XMLHttpRequest.prototype

* 인스턴스의 readyState 프로퍼티와 비교하기 위해 각 state에 해당하는 프로퍼티 보관소

XMLHttpRequest methods

* open(method, url[, async=true])  
  HTTP 메소드, 요청 url, 비동기통신 여부(Ajax 기법은 항상 true이므로 생략)를 인수로 전달한다. 실행 시 호출 인스턴스의 readyState = 1.

* setRequestHeader(header, value)  
* send(data=null)  
