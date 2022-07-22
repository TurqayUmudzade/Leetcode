var findSmallestSetOfVertices = function (n, edges) {
    const degree = Array(n).fill(0);
    const output = [];
    edges.forEach(([u, v]) => degree[v]++);
    console.log(degree);
    degree.forEach((deg, i) => !deg && output.push(i));
    return output;
};


