var average = function (salary) {
  let sum = 0
  salary.forEach((e) => (sum += e))
  return (sum - Math.max(...salary) - Math.min(...salary)) / (salary.length - 2)
}
