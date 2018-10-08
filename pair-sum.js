function pairSum(array, target) {
  let sortedArr = array.sort((first, second) => first - second)
  let left = 0
  let right = array.length - 1
  let arrOfSums = []
  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right]
    if (sum === target) {
      arrOfSums = [...arrOfSums, [sortedArr[left], sortedArr[right]]]
      right--
    }
    if (sum < target) left++
    if (sum > target) right--
  }
  return arrOfSums
}
module.exports = {pairSum}

function pairSumNaive(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const sum = array[i] + array[j]
      if (sum === target) return true
    }
  }
  return false
}

//console.log(pairSum([1,5,3,4,2], 5))
console.log(pairSumNaive([1,5,3,4,2], 5))
