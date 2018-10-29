
//Map
// var topKFrequent = function (words, k) {
//   const sortedWords = words.sort()
//   const wordCounter = new Map()
//   for (let i = 0; i < sortedWords.length; i++) {
//     const curWord = sortedWords[i]
//     if (wordCounter.has(curWord)) {
//       const curWordCount = wordCounter.get(curWord)
//       wordCounter.set(curWord, curWordCount + 1)
//     }
//     else {
//       wordCounter.set(curWord, 1)
//     }
//   }
//   const descendingOrder = [...wordCounter].sort((a, b) => {
//     if (b[1] - a[1] === 0) {
//       return b[0] < a[0] ? 1 : -1
//     }
//     else {
//       return b[1] - a[1]
//     }
//   })
//   return descendingOrder
//     .slice(0, k)
//     .reduce((returnArr, curArr) => {
//       returnArr.push(curArr[0])
//       return returnArr
//     }, [])
// };

// const newMap = new Map()

// newMap.set(1, 1).set(2,2).set(1, 3)
// console.log(newMap)

//brute force
var topKFrequent = function(words, k) {
  const sortedWords = words.sort()
  const wordCounter = {}
  for (let i = 0; i < sortedWords.length; i++) {
    const curWord = sortedWords[i]
    if (wordCounter[curWord]) wordCounter[curWord]++
    else wordCounter[curWord] = 1
  }
  const keyValues = [...wordCounter]
  const descendingOrder = keyValues.sort((a, b) => {
    if (b[1] - a[1] === 0) {
      return b[0] < a[0] ? 1 : -1
    }
    else {
      return b[1] - a[1]
    }
  })
  return descendingOrder
    .slice(0, k)
    .reduce((returnArr, curArr) => {
    returnArr.push(curArr[0])
    return returnArr
  }, [])
};

console.log(topKFrequent(["plpaboutit", "jnoqzdute", "sfvkdqf", "mjc", "nkpllqzjzp", "foqqenbey", "ssnanizsav", "nkpllqzjzp", "sfvkdqf", "isnjmy", "pnqsz", "hhqpvvt", "fvvdtpnzx", "jkqonvenhx", "cyxwlef", "hhqpvvt", "fvvdtpnzx", "plpaboutit", "sfvkdqf", "mjc", "fvvdtpnzx", "bwumsj", "foqqenbey", "isnjmy", "nkpllqzjzp", "hhqpvvt", "foqqenbey", "fvvdtpnzx", "bwumsj", "hhqpvvt", "fvvdtpnzx", "jkqonvenhx", "jnoqzdute", "foqqenbey", "jnoqzdute", "foqqenbey", "hhqpvvt", "ssnanizsav", "mjc", "foqqenbey", "bwumsj", "ssnanizsav", "fvvdtpnzx", "nkpllqzjzp", "jkqonvenhx", "hhqpvvt", "mjc", "isnjmy", "bwumsj", "pnqsz", "hhqpvvt", "nkpllqzjzp", "jnoqzdute", "pnqsz", "nkpllqzjzp", "jnoqzdute", "foqqenbey", "nkpllqzjzp", "hhqpvvt", "fvvdtpnzx", "plpaboutit", "jnoqzdute", "sfvkdqf", "fvvdtpnzx", "jkqonvenhx", "jnoqzdute", "nkpllqzjzp", "jnoqzdute", "fvvdtpnzx", "jkqonvenhx", "hhqpvvt", "isnjmy", "jkqonvenhx", "ssnanizsav", "jnoqzdute", "jkqonvenhx", "fvvdtpnzx", "hhqpvvt", "bwumsj", "nkpllqzjzp", "bwumsj", "jkqonvenhx", "jnoqzdute", "pnqsz", "foqqenbey", "sfvkdqf", "sfvkdqf"],
  1))