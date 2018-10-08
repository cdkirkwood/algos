// function addTwoNums (l1, l2) {
//   const firstNum = getNum(l1)
//   const secondNum = getNum(l2)
//   const total = firstNum + secondNum
//   const totalStr = total.toString()
//   const returnArr = []
//   for (let i = 0; i < totalStr.length; i++) {
//     returnArr.unshift(+totalStr[i])
//   }
//   return returnArr
// }

// function strToNum (str) {
//   let num = 0
//   for (let i = str.length - 1; i >= 0; i--) {
//     const curElem = str[i]
//     num += curElem * (10 ** i)
//   }
//   return num
// }

// function getNum(linkedList) {
//   let numArr = []
//   let curNode = linkedList
//   while (curNode) {
//     numArr.push(curNode.val)
//     curNode = curNode.next
//   }
//   return strToNum(numArr.join(''))
// } 

const nextNode = new Node(8, null)
const firstNode = new Node(1, nextNode)
const zero = new Node(0, null)

function Node (val, next) {
  this.val = val
  this.next = next
}

console.log(addTwoNums(firstNode, zero))

function addTwoNums (l1, l2) {
  const firstNum = getNumArr(l1)
  const secondNum = getNumArr(l2)
  const shorterNum = firstNum.length >= secondNum.length ? secondNum : firstNum
  const longerNum = firstNum.length >= secondNum.length ? firstNum : secondNum
  getTotal(shorterNum, longerNum)
  return longerNum
}

function getTotal(shorterNum, longerNum) {
  for (let i = 0; i < shorterNum.length; i++) {
    const total = shorterNum[i] + longerNum[i]
    if (total >= 10) {
      longerNum[i + 1] = longerNum[i + 1] ? longerNum[i + 1] += 1 : 1
      longerNum[i] = total - 10
    } else {
      longerNum[i] = total
    }
    if (longerNum[i + 1] >= 10 && shorterNum[i + 1] === undefined) {
      let nextIndex = i + 1
      while (longerNum[nextIndex] >= 10) {
        longerNum[nextIndex] -= 10
        longerNum[nextIndex + 1] = longerNum[nextIndex + 1] ? longerNum[nextIndex + 1] += 1 : 1
        nextIndex++
      }
    }
  }
}

function getNumArr(linkedList) {
  let numArr = []
  let curNode = linkedList
  while (curNode) {
    numArr.push(curNode.val)
    curNode = curNode.next
  }
  return numArr
} 