// 3-2. 짝수와 홀수(conditional operator)

function evenOrOdd(num) {
    const result = num % 2 ? 'Odd' : 'Even';
    return result;
}

console.log(evenOrOdd(10));
