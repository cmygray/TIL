// 자연수의 합 찾기 (재귀식)

function sum(n) {
  return (n === 1) ? 1 : n + sum(n - 1);
}
console.log(sum(10));

// 피보나치 수 (반복문)

function fibonacci(n) {
  let prevNum = 1;
  let currentNum = 0;
  let nextNum = 0;
  const fiboArr = [];
  for (let i = 0; i < n; i++) {
    fiboArr.push(nextNum);
    nextNum = prevNum + currentNum;
    prevNum = currentNum;
    currentNum = nextNum;
  }
  return fiboArr;
}

console.log(fibonacci(5));

// sum 류성두님 풀이

var valueOfSum = [0] // memorization
function sum(n) {
  if (n < 1) {
    return n
  }
  if (valueOfSum[n]) {
    return valueOfSum[n]
  }
  valueOfSum[n] = sum(n - 1) + n
  return valueOfSum[n];
}
console.log(sum(2))
