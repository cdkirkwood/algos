function subsetSum (target, array) {
  const sums = []
  for (let i = 0; i < array.length; i++) {
    const sumsLength = sums.length
    if (array[i] === target) return true
    sums.push(array[i])
    for (let j = 0; j < sumsLength; j++) {
      if (array[i] + sums[j] === target) return true
      if (array[i] + sums[j] < target) sums.push(array[i] + sums[j])
    }
  }
  return false
}

console.log(subsetSum(2, [1,10,5,3])); // false
console.log(subsetSum(10, [1,10,5,3])); // true
console.log(subsetSum(9, [1,10,5,3])); // true
console.log(subsetSum(19, [1,10,5,3])); // true
console.log(subsetSum(17, [1,10,5,3])); // false