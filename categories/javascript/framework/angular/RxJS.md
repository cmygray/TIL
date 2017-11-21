# RxJS in Angular

Reactive Programming

* 비동기 데이터를 처리하기 위한 패러다임
* 이벤트 발생으로 생긴 정보를 관찰가능하도록(observable) 스트리밍
* 관찰(subscribe)하던 쪽에서 반응

App communication scenario

* Pull
    * 요청에 의해 응답을 획득
* Push
    * 요청을 안해도 응답에 상시 대기하다가 필요할 때만 반응 => **Reactive**

절차

* 옵저버 객체 생성
* 옵저버블 객체 생성
* 옵저버 subscribe 옵저버블
* 옵저버블 emit data to 옵저버

옵저버블의 종류

* 배열
* Ajax res status
* web socket
* user event
* ...

오퍼레이터

* 옵저버블 생성, 변환, 필터링, 오류처리
* 갱신된 옵저버블 반환 to 옵저버

예제
```ts
import ...

@Component({
    selector: 'app-root',
    template: `<p>{{ values }}</p>`
})
export class myComponent implements OnInit, OnDestroy {
    myArray = [1, 2, 3, 4, 5]; // 구독 대상이 될 데이터. 실전에선 비동기 데이터
    subscription: Subscription; // 구독 인스턴스
    values: number[] = [];

    // 시작 스케줄러
    ngOnInit() {
        // 1. 옵저버블 객체 생성(옵저버블 클래스 메소드에 구독할 데이터를 인수로 전달)
        const observable$ = Observable.from(this.myArray);
        // 2. 생성한 옵저버블 객체를 구독 인스턴스에 할당하되,
        this.subscription = observable$
            // 오퍼레이터를 끼워넣어 중간에서 변형한다, 이를테면..
            .map(item => item * 2) // 각 요소 곱셈
            .filter(item => item > 5) // 요소 필터링
            // 3. subscribe메소드는 세개의 콜백함수를 사용한다
            .subscribe(
                // a. 데이터 도착 시 작동
                value => {
                    console.log(value);
                    this.values.push(value);
                },
                // b. 에러 시 작동
                error => console.log(error),
                // c. 완료 시 작동
                () => console.log('streaming finished')
            );
    }
    // 종료 스케줄러
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

```

