//1. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
console.log('\n-----1번 답');
for (var i = 0; i < 10; i += 2) {
  console.log(i);
}

//2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
console.log('\n-----2번 답');
var result = ''
for (var i = 0; i < 10; i += 2) {
  result += i;
}
console.log(result);

//3. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
console.log('\n-----3번 답');
for (var i = 9; i >= 0; i -= 2) {
  console.log(i);
}

//4. while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.
console.log('\n-----4번 답');
var i = 0;
while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i += 1;
}

//5. while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
console.log('\n-----5번 답');
var i = 9;
while (i >= 0) {
  if (i % 2 != 0) {
    console.log(i);
  }
  i += -1;
}

//6. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
console.log('\n-----6번 답');
var sum = 0;
for (i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);

//7. 1부터 20까지의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
console.log('\n-----7번 답');
var sum = 0;
for (i = 1; i <= 20; i++) {
  if (i % 2 != 0 && i % 3 != 0) {
    sum += i;
  }
}
console.log(sum);

//8. 1부터 20까지의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
console.log('\n-----8번 답');
var i = 1;
var sum = 0;
while (i <= 20) {
  if (i % 2 === 0 || i % 3 === 0) {
    sum += i;
  }
  i += 1;
}
console.log(sum);

//9. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
console.log('\n-----9번 답')
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) {
      console.log('[' + i + ', ' + j + ']');
    }
  }
}

//10. 삼각형출력하기
console.log('\n-----10번 답')
var result = '';
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);

//11. 트리 출력하기
smallTri = ''
largeTri = ''
console.log('\n-----11번 답')
for (i = 1; i <= 3; i++) {
  for (var j = 1; j <= i; j++) {
    smallTri += '*';
  }
  smallTri += '\n'
}
for (i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    smallTri += '*';
  }
  smallTri += '\n'
}
console.log(smallTri + largeTri);

//12. 정삼각형 출력하기
console.log('\n-----12번 답')
regularTri = '';
for (var starNum = 1; starNum <= 9; starNum += 2) {
  var spaceNum = (9 - starNum) / 2;
  for (var i = 1; i <= spaceNum; i++) {
    regularTri += ' ';
  }
  for (var i = 1; i <= starNum; i++) {
    regularTri += '*'
  }
  for (var i = 1; i <= spaceNum; i++) {
    regularTri += ' ';
  }
  regularTri += '\n'
}
console.log(regularTri);

console.log('\n-----12번 답 for-if-for')
var star = ''
var space = ''
var result = ''

for (var i = 1; i < 10; i++) {
  star += '*';
  // i 가 1, 3, 5, 7, 9 일떄
  if (i % 2 != 0) {
    space = ''
    for (var j = (9 - i) / 2; j > 0; j--) {
      space += ' ';
    }
    result += space + star + space + '\n'
  }
}
console.log(result);

//13. 역정삼각형 출력하기
console.log('\n-----13번 답')
regularTri = '';
for (var starNum = 9; starNum >= 1; starNum += -2) {
  var spaceNum = (9 - starNum) / 2;
  for (var i = 1; i <= spaceNum; i++) {
    regularTri += ' ';
  }
  for (var i = 1; i <= starNum; i++) {
    regularTri += '*'
  }
  for (var i = 1; i <= spaceNum; i++) {
    regularTri += ' ';
  }
  regularTri += '\n'
}
console.log(regularTri);

console.log('\n-----13번 답 for-if-for')

var space = '';
var result = '';

for (var i = 0; i < 9; i++) {
  if (i % 2 === 0) {
    star = '';
    for (var j = 0; j < 9 - i; j++) {
      star += '*'
    }
    result += space + star + space + '\n';
    space += ' '
  }
}
console.log(result);

console.log('\n-----13번 답 repeat')
var result = '';
var space = ' ';
var star = '*';

for (var i = 0; i < 5; i++) {
  var sent = space.repeat(i) + star.repeat(9 - i * 2) + space.repeat(i) + '\n';
  result += sent;
}
console.log(result);

//정삼각형 리팩토리는 별도 파일로 작성.