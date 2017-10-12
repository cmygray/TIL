## 문제

[카카오톡 신입 공채 1차 코딩테스트 2번 문제](http://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/)입니다.

1. 다트 게임은 총 3번의 기회로 구성된다.
1. 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
1. 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수^1 , 점수^2 , 점수^3 )으로 계산된다.
1. 옵션으로 스타상(\*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
1. 스타상(\*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
1. 스타상(\*)의 효과는 다른 스타상(\*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
1. 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
1. Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
1. 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.

0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

### 입력 형식

“점수|보너스|[옵션]”으로 이루어진 문자열 3세트.

예) `1S2D*3T`

* 점수는 0에서 10 사이의 정수이다.
* 보너스는 S, D, T 중 하나이다.
* 옵선은 *이나 # 중 하나이며, 없을 수도 있다.

### 출력 형식

3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다.

예) 37

---

## 풀이

1번 문제가 생각보다 쉬워서 자신있게 덤볐다가 문자열 분리부터 실패했던 문제. 최근에 정규표현식과 자바스크립트 Array.prototype 메소드를 배웠고, 이제는 가능할 것도 같아서 일일 알고리즘 연습 삼아 도전!

1. 정규표현식과 `match()`를 활용하여 인수로 전달된 문자열을 각 라운드의 기록으로 분리해 배열을 생성
1. `map()`을 사용하여 배열의 각 요소(각 라운드의 기록)를 콜백함수 내에서 처리하여 환산 점수로 구성된 배열을 생성
1. 환산 점수 배열을 `reduce()`를 사용해 합산하고, 결과로 반환

```javascript
function getScore(str) {
  const records = str.match(/\d+\D+/g);
  const scores = records.map(function (record, round, total) {
    const areas = { 'S': 1, 'D': 2, 'T': 3 };
    const exponent = areas[record.match(/\D/)[0]];
    const bonus = total.slice(round, round + 2).join('').match(/\*/g) ?
      total.slice(round, round + 2).join('').match(/\*/g).length * 2 : 1;
    const result = Math.pow(parseInt(record), exponent) * bonus;
    return record.includes('#') ? result * -1 : result
  })
  return scores.reduce(function (sum, value) {
    return sum + value
  })
}

console.log(getScore('1S2D*3T')); // 37
console.log(getScore('1D2S#10S')); // 9
console.log(getScore('1D2S0T')); // 3
console.log(getScore('1S*2T*3S')); // 23
console.log(getScore('1D#2S*3S')); // 5
console.log(getScore('1T2D3D#')); // -4
console.log(getScore('1D2S3T*')); // 59
```

하는 김에 ESLint의 도움을 받아 ES6 문법으로 수정해보자. 아직 ES6를 공부하진 않았지만 경고메세지를 따라가기만 해도 오류없이 어지간한 수정이 가능하다. ES6 식의 올바른 코드인지는 모르겠으나 어쨌든 빨간줄은 다 없애는걸로...

1. 프로퍼티명의 quotation mark 제거
1. 애로우함수 사용
1. `Math.pow()` 를 `**` 연산자로 변경
1. 세미콜론, 공백 등 자잘한 실수

정도를 수정하였다. 아래는 변경된 코드.

```javascript
function getScore(str) {
  const records = str.match(/\d+\D+/g);
  const scores = records.map((record, round, total) => {
    const areas = { S: 1, D: 2, T: 3 };
    const exponent = areas[record.match(/\D/)[0]];
    const bonus = total.slice(round, round + 2).join('').match(/\*/g) ?
      total.slice(round, round + 2).join('').match(/\*/g).length * 2 : 1;
    const score = (parseInt(record, 10) ** exponent) * bonus;
    return record.includes('#') ? score * -1 : score;
  });
  return scores.reduce((sum, value) => sum + value);
}
```

## 끝!