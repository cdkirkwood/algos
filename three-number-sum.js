const {pairSum} = require('./pair-sum')

function threeNumberSum(array, targetSum) {
  let returnArr = []
  for (let i = 0; i < array.length; i++) {
    const firstNum = array[i]
    const result = pairSum(array.slice(i + 1), targetSum - firstNum)
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

module.exports = threeNumberSum

//console.log(threeNumberSum([1,2,3,4,5,6,7], 9))