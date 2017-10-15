// 1. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)

function getCount8(n) {
    let string = '';
    for (let i = 1; i <= n; i++) {
        string += i;
    }
    const len = string.length;
    let result = 0;
    for (let idx = 0; idx < len; idx++) {
        if (string[idx] === '8') {
            result += 1;
        }
    }
    return result;
}

console.log(getCount8(10000));
