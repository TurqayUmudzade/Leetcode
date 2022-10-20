function countShips(sea, topRight, bottomLeft) {
    if (!sea.hasShips(topRight, bottomLeft)) return 0;

    const [left, bottom] = bottomLeft;
    const [right, top] = topRight;

    if (right === left && top === bottom) return 1;
    if (left > right || bottom > top) return 0;

    const midX = Math.floor((right + left) / 2);
    const midY = Math.floor((top + bottom) / 2);

    const numQ1 = countShips(sea, [midX, midY], bottomLeft);
    const numQ2 = countShips(sea, [right, midY], [midX + 1, bottom]);
    const numQ3 = countShips(sea, topRight, [midX + 1, midY + 1]);
    const numQ4 = countShips(sea, [midX, top], [left, midY + 1]);

    return numQ1 + numQ2 + numQ3 + numQ4;
};

