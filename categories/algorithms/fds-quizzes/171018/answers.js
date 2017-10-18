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
console.log(adder(-4, 4)); // 0



// 17. 배열의 첫 요소와 마지막 요소로 배열 만들기

function generateRange(from, to) {
  let arr = [];
  const direction = from < to ? 1 : -1;
  for (let i = from; i != to; i += direction) {
    arr = arr.concat(i);
  }
  return arr.concat(to);
}
console.log(generateRange(3, -3)); // [3, 2, 1, 0, -1, -2, -3]
console.log(generateRange(15, 10)); // [15, 14, 13, 12, 11, 10]



// 18. 배열의 인접한 요소곱 중 가장 큰 값 구하기

function adjacentElementsProduct(arr) {
  let products = [];
  arr.reduce(function (prev, current) {
    products = products.concat(prev * current);
    return current
  })
  return Math.max.apply('', products);
}

  // for loop

function adjacentElementsProduct(arr) {
  let products = [];
  for (let i = 0, rep = arr.length - 1; i < rep; i++) {
    products[i] = arr[i] * arr[i + 1];
  }
  return Math.max.apply('', products)
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21



// 19. 배열에서 특정 값만 구하기

function getArray(arr) {
  return arr.filter(function (number) {
    return number > 3 && number % 2 === 0;
  });
}

  // for loop

function getArray(arr) {
  let result = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    result = (arr[i] % 2 === 0 && arr[i] > 3) ?
      result.concat(arr[i]) : result;
  }
  return result;
}
const sample19 = [1, 2, 3, 4, 5, 6];
console.log(getArray(sample19)); // [ 4, 6 ]



// 20. 평균 구하기

function average(array) {
  return array.reduce(function (a, b) {
    return (a + b) / 2;
  });
}

  // for loop
function average(array) {
  let sum = 0;
  const len = array.length
  for (let i = 0; i < len; i++) {
    sum += array[i];
  }
  return sum / len
}

  // eval
function average(array) {
  return eval(array.join('+')) / array.length;
}
const sample20 = [5, 3, 4];
console.log(average(sample20)); // 4



// 21. 최단 거리 1차원 점의 쌍 구하기

function findMinDistance(array) {
  let distances = [];
  array.reduce(function (prev, current) {
    distances = distances.concat(current - prev);
    return current;
  });
  const minDistance = Math.min.apply('', distances);

  let result = [];
  distances.forEach(function (distance, idx) {
    if (distance === minDistance) {
      result[result.length] = [array[idx], array[idx + 1]];
    }
  });
  return result;
}

  // for loop
function findMinDistance(array) {
  let distances = [];
  for (let i = 0, rep = array.length - 1; i < rep; i++) {
    distances = distances.concat(array[i + 1] - array[i]);
  }
  const minDistance = Math.min.apply('', distances);

  let closestPairs = [];
  for (let i = 0, rep = distances.length; i < rep; i++) {
    closestPairs = (distances[i] === minDistance) ?
      closestPairs.concat([[array[i], array[i + 1]]]) : closestPairs;
  }
  return closestPairs;
}
console.log(findMinDistance([1, 3, 4, 8, 13, 17, 20, 23, 24]));
// [[3, 4], [23, 24]]



// 22. 특별한 정렬

function specialSort(array) {
  const sorted = array.sort(function (a, b) {
    return a - b;
  });
  let negatives = [];
  let positives = [];
  sorted.forEach(function (item) {
    // 0은 양수배열에 들어간다.
    item < 0 ? negatives.push(item) : positives.push(item);
  });
  // 음수만 뒤집는다
  return negatives.reverse().concat(positives);
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

  // for loop
function multiSum(from, to) {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    const digits = i.toString().split('');

    let product = 1;
    for (let i = 0, len = digits.length; i < len; i++) {
      product = product * digits[i];
    }
    sum += product
  }
  return sum
}

  // eval
function multiSum(from, to) {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += eval(i.toString().split('').join('*'))
  }
  return sum
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

  // eval
function digitSum(n) {
  const sumExp = n.toString().split('').join('+')
  return n > 100000000 ? false : eval(sumExp)
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