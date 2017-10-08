#-*-coding:utf-8-*-

def nlcm(num):
    '''
    함수 nlcm(최소공배수)는 n개의 숫자 리스트를 인수로 받아 최소공배수를 반환한다.
    두 수 A, B가 있을 때,
    lcm_AB = A * B / gcd 임을 이용하여 결과를 구한다.
    세 수 A, B, C로 확장하면,
    nlcm = lcm_AB * C / gcd 가 될 것이다. 이때 gcd는 lcm_AB와 C의 최대공약수이다.
    '''
    #변수 a에 첫번째 수 할당
    a = num[0]
    #나머지 수에 대해 반복문 실행
    for i in range(1, len(num)):
        b = num[i]
        #큰 수를 작은수로 나누기 위해 a, b의 크기를 비교하여 호제법의 좌항, 우항이 될 c, d에 할당
        c = max(a, b)
        d = min(a, b)
        #호제법 알고리즘
        while c % d:
            r = c % d
            c = d
            d = r
        #두 수의 최소공배수를 구해서 다음 수(b=num[i])와 비교한다
        lcm = (a * b) / d
        a = lcm
    result = a
    return int(result)

print(nlcm([4,8,12,5])) #120