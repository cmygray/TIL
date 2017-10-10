## 문제
자연수로 이루어진 길이가 같은 수열 A,B가 있습니다. 최솟값 만들기는 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱한 값을 누적하여 더합니다. 이러한 과정을 수열의 길이만큼 반복하여 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다.

예를 들어 A = `[1, 2]` , B = `[3, 4]` 라면
1. A에서 1, B에서 4를 뽑아 곱하여 더합니다.
2. A에서 2, B에서 3을 뽑아 곱하여 더합니다.

수열의 길이만큼 반복하여 최솟값 10을 얻을 수 있으며, 이 10이 최솟값이 됩니다.
수열 A,B가 주어질 때, 최솟값을 반환해주는 getMinSum 함수를 완성하세요.

---
## 풀이
* 직관적 가설

한쪽 배열에서는 큰수부터, 다른쪽에서는 작은수부터 뽑아서 곱하면 누적 합이 최소가 될 것이다. sorted, reverse 함수를 사용해서 수열 초기화 후 반복문으로 언팩, 곱셈 후 결과값에 증분 할당.

```python
#python
def getMinSum(A, B):
    answer = 0
    A, B = sorted(A), sorted(B)
    B.reverse()
    for i, j in zip(A, B):
        answer += i * j
    return answer
```

검증은.. 채점시스템에게 떠넘기고 자바스크립트로 작성한다.

자바스크립트의 Array 프로토타입 메소드가 뭔지 모르기 때문에.. 문서를 검색하기에 **앞서** 프로토타입의 메소드를 찍어봤다. `sort()`, `reverse()`가 있으므로 이를 활용한다.

```javascript
//javascript
function getMinSum(A, B) {
    var answer = 0;
    var sort = A.sort();
    var reverse = B.sort().reverse();
    for (var i = 0; i < A.length; i++) {
        answer += sort[i] * reverse[i]
    }
    return answer;
}
```

자바스크립트 코드만 오답으로 처리된다. 문서를 찾아보니 js의 sort 함수는 문자열 순서(유니코드)를 기준으로 정렬한다... 즉 10이 2보다 앞이 된다. 숫자의 크기를 비교하기 위해선 sort 함수의 인수로 `function(a,b) { return a - b; }`를 전달해야 한다. 배열의 각 숫자 간의 차이가 index를 결정한다.

코드를 아래와 같이 수정한다.

```javascript
//javascript
function getMinSum(A, B) {
    // sort 함수에 인수로 전달할 함수 compare 선언
    var compare = function(a, b) {
        return a - b;
    }
    var answer = 0;
    var sort = A.sort(compare);
    var reverse = B.sort(compare).reverse();
    for (var i = 0; i < A.length; i++) {
        answer += sort[i] * reverse[i]
    }
    return answer;
}
```

> 가설 검정을 건너뛰었다. 찝찝하다. 알고리즘 풀때는 파이썬이 매우 편리하다. 끝.