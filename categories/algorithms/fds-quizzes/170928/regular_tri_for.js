//반복문 loop 변수를 i,j,k..로 하고 상단에 주석 달기 || 변수명이 길어도 일일이 설명하기 which better?
//전자가 나은걸로...

var i; //line_loop;
var j; //star_loop;
var k; //space_loop;
var line = '';

for (i = 0; i < 5; i++) {
  // for (line_loop = 0; line_loop < 5; line_loop++) {
  var star = '';
  var space = '';
  for (var j = 0; j < i * 2 + 1; j++) {
    star += '*';
  }
  for (var k = 0; k < (9 - j) / 2; k++) {
    space += ' ';
  }
  line += space + star + '\n';
}

console.log(line);