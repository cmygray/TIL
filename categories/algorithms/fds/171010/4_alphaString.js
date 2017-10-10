// 4. 문자열 다루기

function alphaString46(s) {
    const len = s.length;
    const intLen = parseInt(s, 10).toString().length;
    if ((len >= 4) && (len <= 6) && (len === intLen)) {
        return true;
    } else {
        return false;
    }
}

console.log(alphaString46('123456'));
