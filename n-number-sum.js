const pairSum = require('./pair-sum')

function nthNumberSum(array, targetSum, num) {
  let returnArr = []
  for (let i = 0; i < array.length; i++) {
    let result
    for (let j = 2; j <= num; j++) {
      const firstNum = array[i]
      result = pairSum(array.slice(i + 1), targetSum - firstNum)
    }
    if (result.length) {
      let arrToAdd = result.map(curArray => {
        curArray.push(firstNum)
        return curArray
      })
      returnArr = [...returnArr, ...arrToAdd]
    }

  }
  return returnArr
}

console.log(nthNumberSum([5, -5, -2, 3, -3], 0, 4))