// 자연수의 합 찾기 (재귀식)

function sum(n) {
    return (n === 1) ? 1 : n + sum(n - 1);
}
console.log(sum(10));
