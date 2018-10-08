function levenshteinDistance(str1, str2) {
  let str2Arr = str2.split('')
  let total = 0
  const numAdded = Math.abs(str2.length - str1.length)
  total += numAdded
  for (let i = 0; i < str1.length; i++) {
    const curLetter = str1[i]
    const indexInNewStr = str2Arr.indexOf(curLetter)
    if (indexInNewStr < 0) {
      total++
    }
    else {
      str2Arr.splice(indexInNewStr, 1, 0)
    }
  }

  return total
}

console.log(levenshteinDistance('cereal', 'saturdzz'))
//4
//[ cereal]
//[ studzz]

// const obj = {}
//   for (let i = 0; i < str1.length; i++) {
//     const str1Elem = str1[i]
//     if (!obj[str1Elem]) obj[str1Elem] = 1
//     else obj[str1Elem]++
//   }
//   for (let j = 0; j < str2.length; j++) {
//     const str2Elem = str2[j]
//     if (!obj[str2Elem]) obj[str2Elem] = 1
//     else obj[str2Elem]--
//   }
//   return Object.values(obj).reduce((total, elem) => total + elem, 0)