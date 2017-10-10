// 2. 요일 구하기

function getDayName(a, b) {
    const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = new Date(2016, a - 1, b);
    const result = dayNames[date.getDay()];
    return result;
}

console.log(getDayName(5, 24));
