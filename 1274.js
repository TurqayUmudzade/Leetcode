function countShips(sea, topRight, bottomLeft) {
    if (!sea.hasShips(topRight, bottomLeft)) return 0;
    if (topRight[0] === bottomLeft[0] && topRight[1] === bottomLeft[1]) return 1;
    if (bottomLeft[0] > topRight[0] || bottomLeft[1] > topRight[1]) return 0;

    const [left, bottom] = bottomLeft;
    const [right, top] = topRight;

    const midX = Math.floor((topRight[0] + bottomLeft[0]) / 2);
    const midY = Math.floor((topRight[1] + bottomLeft[1]) / 2);

    const numQ1 = countShips(sea, [midX, midY], bottomLeft);
    const numQ2 = countShips(sea, [right, midY], [midX + 1, bottom]);
    const numQ3 = countShips(sea, topRight, [midX + 1, midY + 1]);
    const numQ4 = countShips(sea, [midX, top], [left, midY + 1]);

    return numQ1 + numQ2 + numQ3 + numQ4;
};

