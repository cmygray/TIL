function getScore(str) {
  const records = str.match(/\d+\D+/g);
  const scores = records.map((record, round, total) => {
    const areas = { S: 1, D: 2, T: 3 };
    const exponent = areas[record.match(/\D/)[0]];
    const bonus = total.slice(round, round + 2).join('').match(/\*/g) ?
      total.slice(round, round + 2).join('').match(/\*/g).length * 2 : 1;
    const score = (parseInt(record, 10) ** exponent) * bonus;
    return record.includes('#') ? score * -1 : score;
  });
  return scores.reduce((sum, value) => sum + value);
}

console.log(getScore('1S2D*3T')); // 37
console.log(getScore('1D2S#10S')); // 9
console.log(getScore('1D2S0T')); // 3
console.log(getScore('1S*2T*3S')); // 23
console.log(getScore('1D#2S*3S')); // 5
console.log(getScore('1T2D3D#')); // -4
console.log(getScore('1D2S3T*')); // 59