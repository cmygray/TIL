알고리즘 퀴즈 리팩토링

1. String.prototype 메소드로 수식을 만들고, eval()로 연산하기
  * 자릿수끼리 연산이 필요할 때, 문자열 메소드를 사용해서 split하고, join 시 seperator로 연산자를 문자열 형태로 전달하여 수식을 만들 수 있다.
  * (예) 자릿수 더하기: `number.toString().split('').join('+')` => `eval()`
2. concat(value), push(value), arr[length] = value의 성능을 비교하고 push를 concat으로 바꿔서 재작성
  * `concat()`
      * 가장 빠르다
      * 반복 추가 시 항상 재할당을 해야한다. 때문에 삼항연산자 사용이 용이하다.  
        `arr2 = condition ? arr1.concat(sthToAdd) : arr2`
      * 배열에 배열을 추가하고 싶을 땐 []로 한번 더 감싸서 사용한다. (21번 문제)
3. `reduce()`와 반복문의 성능 비교 후 for 구문으로 모두 변경