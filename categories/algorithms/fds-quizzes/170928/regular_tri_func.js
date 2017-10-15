function regularTri(height) {
  var line = '';

  // if (height % 2 === 0) {
  //   height += 1;
  // }

  for (var lineLoop = 0; lineLoop < height; lineLoop++) {
    var star = '';
    var space = '';
    for (var starLoop = 0; starLoop < lineLoop * 2 + 1; starLoop++) {
      star += '*';
    }
    for (var spaceLoop = 0; spaceLoop < (2 * height - 1 - starLoop) / 2; spaceLoop++) {
      space += ' ';
    }
    line += space + star + '\n';
  }
  return line;
}

console.log(regularTri(10));