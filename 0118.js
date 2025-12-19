//Pascal's Triangle

var generate = function (numRows) {
  if (numRows == 0) return [];


  let prev = [1]
  let triangle = [prev];

  for (let i = 1; i < numRows; i++) {
    let row = []
    row.push(prev[0])
    for (let j = 1; j < prev.length; j++) {
      row.push(prev[j - 1] + prev[j])
    }
    row.push(prev[prev.length - 1])
    triangle.push(row)
    prev = row
  }

  return triangle;
};



console.log(generate(3));
