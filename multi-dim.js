function multiDimSum (arr) {
  let sum = 0
  const strArr = arr.toString().split(',')
  for (let i = 0; i < strArr.length; i++) {
    sum += +strArr[i]
  }
  return sum
}

// function multiDimSum (arr) {
//   const nums = [...arr]
//   let sum = 0
//   while (nums.length) {
//     const next = nums.shift()
//     if (Array.isArray(next)) nums.push(...next)
//     else sum += next
//   }
//   return sum
// }

console.log(multiDimSum([1,2,[3,4, [5, 6, [1, [12]]]]]))