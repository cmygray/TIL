// 과제 문제 6 ~ 12

// 문제 6. 핸드폰번호 가리기
function hideNum(str) {
  const n = str.length - 4;
  return '*'.repeat(n) + str.substr(n, 4);
}
console.log(hideNum('01031936019'))
console.log(hideNum('023196019'))

// 문제 7. 문자열을 숫자로 바꾸기
function strToInt(str) {
  return [parseInt(str), +str, str * 1, str - 0, Number(str)];
}
console.log(strToInt('-1234'));
console.log(strToInt('+1234'));

// 문제 8. 수박수박수박수
function waterMelon(n) {
  // n < 0 대비 절대값 사용
  const res = '' + '수박'.repeat(Math.abs(n) / 2) + '수'.repeat(Math.abs(n) % 2);
  // n < 0 일땐 뒤집는다
  return n > 0 ? res : res.split('').reverse().join('');
}
console.log(waterMelon(2))
console.log(waterMelon(4))
console.log(waterMelon(-2))
console.log(waterMelon(-4))

// 문제 9. 정수제곱근 판별하기
/*nextSqaure함수는 정수 n을 매개변수로 받는다.
n이 임의의 정수 x의 제곱이라면 x+ 1의 제곱을 리턴하고,
n이 임의의 정수 x의 제곱이 아니라면 'no'을 리턴하는 함수를 작성하라.
예를들어 n이 121이라면 이는 정수 11의 제곱이므로 (11 + 1)의 제곱인 144를 리턴하고,
3이라면 'no'을 리턴한다.*/
function nextSquare(n) {
  return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : 'no'
}
console.log(nextSquare())
console.log(nextSquare(0))
console.log(nextSquare(1))
console.log(nextSquare(2))
console.log(nextSquare(3))
console.log(nextSquare(121))
console.log(nextSquare(165))
console.log(nextSquare(400))

// 문제 10. 체크 펠린드롬
// reverse & join & compare
function checkPalindrom1(str) {
  return str.length === 1 ? false : str.split('').join('') === str.split('').reverse().join('');
}
console.log(checkPalindrom1('dad'));
console.log(checkPalindrom1('mom'));
console.log(checkPalindrom1('palindrom'));
console.log(checkPalindrom1('s'));

// Array.prototype.every() practice
function checkPalindrom2(str) {
  return str.length === 1 ? false : str.split('').every(function (chr, idx) {
    return chr === this[this.length - idx - 1];
  }, str.split(''));
}
console.log(checkPalindrom2('dad'));
console.log(checkPalindrom2('mom'));
console.log(checkPalindrom2('palindrom'));
console.log(checkPalindrom2('s'));

// 문제 11. 배열의 최대/최소값
// 숫자 배열 정렬 활용
function getMaxValueFromArray(array) {
  return array.sort(function (a, b) { return b - a })[0]
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3]));

function getMinValueFromArray(array) {
  return array.sort(function (a, b) { return a - b })[0]
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3]));

// Math.max.apply
function getMax(array) {
  return Math.max.apply('', array);
}
console.log(getMax([3, 6, -2, -5, 7, 3]));

function getMin(array) {
  return Math.min.apply('', array);
}
console.log(getMin([3, 6, -2, -5, 7, 3]));

// spread operator
function getMaxES6(array) {
  return Math.max(...array);
}
console.log(getMaxES6([3, 6, -2, -5, 7, 3]));

function getMinES6(array) {
  return Math.min(...array);
}
console.log(getMinES6([3, 6, -2, -5, 7, 3]));

// 문제 12. 약수의 합
function sumDivider(num) {
  let res = 0;
  for (var n = 1; n <= num; n++) {
    num % n ? null : res += n
  }
  return res
}
console.log(sumDivider(12))  // 28