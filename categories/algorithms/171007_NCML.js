function nlcm(num) {
    /*
    함수 nlcm은 n개의 자연수로 구성된 배열을 인수로 받아서, 모든 수의 최소공배수를 반환한다.
    */
    while (num.length > 1) {
        //인수에 한개의 원소가 남을 때까지 숫자를 두개씩 뽑고, 크기를 비교한다. 
        var a = num.pop();
        var b = num.pop();
        var c = Math.max(a, b);
        var d = Math.min(a, b);
        //두 수를 가지고 호제법 알고리즘을 수행한다.
        while (c % d) {
            var r = c % d;
            c = d;
            d = r;
        }
        /*
        결과를 이용해 두 수의 최소공배수를 구하고, num에 push한다.
        이 수는 다음 loop에서 다시 pop되어 다음 수와 비교에 쓰인다.
        */
        var lcm = (a * b) / d;
        num.push(lcm)
    }
    return num[0];
}

console.log(nlcm([4,8,12,5]));
