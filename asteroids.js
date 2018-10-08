var asteroidCollision = function(asteroids) {
  const stroidsStack = []
  for (let i = 0; i < asteroids.length; i++) {
    const curStroid = asteroids[i]
    let addToStack = true
    while (stroidsStack.length && curStroid < 0 && stroidsStack[stroidsStack.length - 1] > 0) {
      if (stroidsStack[stroidsStack.length - 1] < Math.abs(curStroid)) {
        stroidsStack.pop()
        continue
      } else if (stroidsStack[stroidsStack.length - 1] === Math.abs(curStroid)) {
        stroidsStack.pop()
        addToStack = false
        break
      } else {
        addToStack = false
        break
      }
    }
    if (addToStack) stroidsStack.push(curStroid)
  }
  return stroidsStack
}

// var asteroidCollision = function(asteroids) {
//     for (let i = 0; i < asteroids.length; i++) {
//       const curStroid = asteroids[i]
//       if (curStroid >= 0) {
//         let nextIdx = i + 1
//         while (asteroids[nextIdx] < 0 && curStroid >= Math.abs(asteroids[nextIdx])) {
//           if (curStroid === Math.abs(asteroids[nextIdx])) {
//             asteroids.splice(i, 2)
//             i = -1
//             break
//           }
//           else asteroids.splice(nextIdx, 1)
//         }
//       } else {
//         let prevIdx = i - 1
//         while (asteroids[prevIdx] >= 0 && Math.abs(curStroid) >= asteroids[prevIdx]) {
//           if (Math.abs(curStroid) === asteroids[prevIdx]) {
//             i = -1
//             asteroids.splice(prevIdx, 2)
//             break
//           }
//           else asteroids.splice(prevIdx, 1)
//           i = -1
//         }
//       }
//     }
//     return asteroids
// }

console.log(asteroidCollision([8, -8, -2]))