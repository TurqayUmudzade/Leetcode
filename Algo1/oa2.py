def getMinTime(timeArr, direction):
    en, ex = [], []
    res = [0] * len(timeArr)
    for i, t in enumerate(timeArr):
        if direction[i] == 1:
            ex.append([timeArr[i], i])
        else:
            en.append([timeArr[i], i])

    c, last = 0, -1
    
    while ex or en:
        if  ex and ex[0][0] <= c and (last == -1 or last == 1 or not en or (last == 0 and en[0][0] > c)):
            res[ex[0][1]] = c
            last = 1
            ex.pop(0)
            c=c+1
        elif en and en[0][0] <= c:
            res[en[0][1]] = c
            last = 0
            en.pop(0)
             c=c+1
        else:
            if ex and not en:
                c = max(ex[0][0], c + 1)
            if en and not ex:
                c = max(en[0][0], c + 1)
            else:
                c = min(en[0][0], ex[0][0])
    return res
