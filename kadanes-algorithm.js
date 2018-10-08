function kadanesAlgorithm(array) {
  let greatestSum = array[0]
  for (let i = 0; i < array.length; i++) {
    let curSum = array[i]
    if (curSum > greatestSum) greatestSum = curSum
    for (let j = i + 1; j < array.length; j++) {
      curSum += array[j]
      if (curSum > greatestSum) greatestSum = curSum
    }
  }
  return greatestSum
}

console.log(kadanesAlgorithm([-10, -2, -9, -4, -8, -6, -7, -1, -3, -5]))

