## 문제

어떤 수 N(1≤N≤1,000,000) 이 주어졌을 때, N의 다음 큰 숫자는 다음과 같습니다.

* N의 다음 큰 숫자는 N을 2진수로 바꾸었을 때의 1의 개수와 같은 개수로 이루어진 수입니다.
* 1번째 조건을 만족하는 숫자들 중 N보다 큰 수 중에서 가장 작은 숫자를 찾아야 합니다.

예를 들어, 78을 2진수로 바꾸면 `1001110` 이며, 78의 다음 큰 숫자는 83으로 2진수는 `1010011` 입니다.
N이 주어질 때, N의 다음 큰 숫자를 찾는 nextBigNumber 함수를 완성하세요.

---

## 풀이

* 인수 n을 이진수로 변환하여 1의 개수를 반환하는 count1 함수를 만든다.
* count1(n) 과 반환값이 같을때까지 n을 1씩 증가시킨다.

간단하지만 무식하게 풀 수 있긴 한데 어쩐지 찝찝하다. 비트연산자를 활용해야할 것만 같은 느낌적인 느낌...  
어쨌든 위의 방법으로 코드를 작성하면 아래와 같다.

```python
#python
def nextBigNumber(n):
    def count1(n):
        cnt = 0
        for i in bin(n):
            if i == '1':
                cnt +=1
        return cnt
    result = n + 1
    while count1(n) != count1(result):
        result += 1
    return result

#아래 코드는 테스트를 위한 출력 코드입니다.
print(nextBigNumber(10000))
```

```javascript
//javascript
function nextBigNumber(n) {
    function countOne(n) {
        var bin = n.toString(2);
        var cnt = 0;
        for (var char of bin) {
            if (char == '1') {
                cnt += 1;
            }
        }
        return cnt
    }
    var result = n + 1;
    while (countOne(n) != countOne(result)) {
        result += 1;
    }
    return result;
}
```