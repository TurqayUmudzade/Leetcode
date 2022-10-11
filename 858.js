function mirrorReflection(p, q) {
    if (q === 0) return 0;

    let height = q;
    while (height % p) {
        height += q;
    }

    const upFlip = height / p;
    const rightFlip = height / q;

    const topCorner = upFlip % 2 ? 1 : 0;

    return rightFlip % 2 ? topCorner : 2;
};