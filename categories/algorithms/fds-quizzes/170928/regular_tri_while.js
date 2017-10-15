//for문으로 작성한 정삼각형 구문을 while 문으로 재작성
//참고: https://leftshift.io/4-javascript-optimisations-you-should-know

var i = 5; //line_Loop
var j //space_Loop;
var k //star_Loop;
var line = '';

while (i--) {
  j = i;
  k = 9 - 2 * j;
  var star = '';
  var space = '';
  while (j--) {
    line += ' ';
  }
  while (k--) {
    line += '*';
  }
  line += '\n';
}

console.log(line);