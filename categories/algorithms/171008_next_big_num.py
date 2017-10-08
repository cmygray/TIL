#-*-coding:utf-8-*-

def nextBigNumber(n):
    def count1(n):
        cnt = 0
        for i in bin(n):
            if i == '1':
                cnt +=1
        return cnt
    result = n + 1
    while count1(n) != count1(result):
        result += 1
    return result

def count1(n):
    cnt = 0
    for i in bin(n):
        if i == '1':
            cnt +=1
    return cnt

for i in range(50):
    print('{}: '.format(i), count1(i))