const threeNumberSum = require('./three-number-sum')

function fourNumberSum(array, targetSum) {
  let returnArr = []
  for (let i = 0; i < array.length; i++) {
    const firstNum = array[i]
    const result = threeNumberSum(array.slice(i + 1), targetSum - firstNum)
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

// fourNumberSum([-5, -3, -1, 2, 4, 7, 11, 18, 22], 30)
// fourNumberSum([7,6,4,-1,1,2], 16)
console.log(fourNumberSum([5,-5,-2,2,3,-3], 0))
