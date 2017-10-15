// 13. 최대공약수와 최소공배수

function gcdlcm(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  while (max % min !== 0) {
    const remain = max % min;
    max = Math.max(remain, min);
    min = Math.min(remain, min);
  }
  const gcd = min;
  const lcm = (a * b) / gcd;
  return [gcd, lcm];
}
console.log(gcdlcm(3, 12));

// 리팩토링: 여러 숫자의 최소공배수

function nlcm(...num) {
  const numbers = Array.prototype.slice.call(num);
  const result = numbers.reduce(function (a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    while (max % min !== 0) {
      const remain = max % min;
      max = Math.max(remain, min);
      min = Math.min(remain, min);
    }
    const gcd = min;
    const lcm = (a * b) / gcd;
    return lcm;
  });
  return result;
}
console.log(nlcm(3, 6, 12, 20, 100));



// 14. 피보나치 수

function fibonacci(n) {
  const init = [0, 1];
  if (n > 1) {
    for (let i = 0; i < n - 1; i++) {
      var a = init[i] + init[i + 1];
      init.push(a);
    }
    return a;
  }
  return init[n];
}
console.log(fibonacci(5));



// 15. 하샤드 수

function isHarshad(n) {
  const str = n.toString().split('');
  const divider = str.reduce(function (a, b) {
    return parseInt(a, 10) + parseInt(b, 10);
  });
  return n % divider === 0;
}
console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false



// 16. 두 정수 사이의 합

function adder(x, y) {
  let sum = 0;
  const from = Math.min(x, y);
  const to = Math.max(x, y);
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
}

console.log(adder(-4, 4));



// 17. 배열의 첫 요소와 마지막 요소로 배열 만들기

function generateRange(from, to) {
  const arr = [];
  const direction = from < to ? 1 : -1;
  for (let i = from; i !== to; i += direction) {
    arr.push(i);
  }
  return arr.concat(to);
}
console.log(generateRange(3, -3));
console.log(generateRange(15, 10));



// 18. 배열의 인접한 요소곱 중 가장 큰 값 구하기

function adjacentElementsProduct(arr) {
  const products = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const product = arr[i] * arr[i + 1];
    products.push(product);
  }
  return Math.max.apply('', products);
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21



// 19. 배열에서 특정 값만 구하기

function getArray(arr) {
  const result = arr.filter(function (number) {
    return number > 3 && number % 2 === 0;
  });
  return result;
}
const arr = [1, 2, 3, 4, 5, 6];
console.log(getArray(arr)); // [ 4, 6 ]



// 20. 평균 구하기

function average(array) {
  const sum = array.reduce(function (a, b) {
    return a + b;
  });
  return sum / array.length;
}
const testArray = [5, 3, 4];
console.log(average(testArray)); // 4



// 21. 최단 거리 1차원 점의 쌍 구하기

function findMinDistance(array) {
  const n = array.length - 1;
  const arrayOfDists = [];
  for (let i = 0; i < n; i++) {
    arrayOfDists.push(array[i + 1] - array[i]);
  }
  const minDistance = Math.min.apply('', arrayOfDists);
  const result = [];
  arrayOfDists.forEach(function (dist, idx) {
    if (dist === minDistance) {
      result.push([array[idx], array[idx + 1]]);
    }
  });
  return result;
}
console.log(findMinDistance([1, 3, 4, 8, 13, 17, 20, 23, 24]));
// [[3, 4], [23, 24]]



// 22. 특별한 정렬

function specialSort(array) {
  const sorted = array.sort(function (a, b) {
    return a - b;
  });
  const negInts = [];
  const posIntsAnd0 = [];
  sorted.forEach(function (item) {
    item < 0 ? negInts.push(item) : posIntsAnd0.push(item);
  });
  return negInts.reverse().concat(posIntsAnd0);
}
console.log(specialSort([-1, 1, 3, -2, 2, 0])); // [ -1, -2, 0, 1, 2, 3 ]



// 23. 임의 범위 내 각 숫자를 분해한 곱들의 합

function multiSum(from, to) {
  let result = 0;
  for (let i = from; i <= to; i++) {
    const str = i.toString();
    result += str.split('').reduce(function (a, b) {
      return +a * +b;
    });
  }
  return result;
}
console.log(multiSum(10, 13)); // 6
console.log(multiSum(10, 1000)); // 93150



// 24. 각 자릿수의 합

function digitSum(n) {
  return n > 100000000 ? false :
    Math.abs(n).toString().split('').reduce(function (sum, current) {
      return parseInt(sum, 10) + parseInt(current, 10);
    });
}
console.log(digitSum(123)); // 6
console.log(digitSum(987)); // 24
console.log(digitSum(100000001)); // false



// 25. 중복없는 배열

function isNotOverlapArray(array) {
  /*
  오름차순으로 배열을 정돈하고, 모든 요소에 대해 index + 1 = value인지 확인
  */
  const sorted = array.sort(function (a, b) { return a - b; });
  return sorted.every(function (num, idx) {
    return num === idx + 1;
  });
}
console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3])); // false



// 26. 요일 구하기

function getDayName(month, date) {
  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dateObj = new Date(2016, month - 1, date);
  return dayNames[dateObj.getDay()];
}
console.log(getDayName(5, 24)); // TUE