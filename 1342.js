const numberOfSteps = (num, steps = 0) =>
    num === 0 ? steps : numberOfSteps(num & 1 ? num - 1 : num >> 1, ++steps);