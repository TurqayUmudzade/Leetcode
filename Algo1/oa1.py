from typing import List


def getMax(
    boxes: List[int],
    boxItems: List[int],
    boxSize: int,
) -> int:

    arr = []
    c = 0
    for i in range(len(boxes)):
        temp = []
        if i == c:
            temp.append(boxes[c])
            temp.append(boxItems[c])
            c += 1

        arr.append(temp)

    arr.sort(key=lambda x: -x[1])
    res = 0

    for box, units in arr:
        if box < boxSize:
            res += box * units
            boxSize -= box

        else:
            res += boxSize * units
            return res

    return res
