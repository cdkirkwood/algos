function longestSubstringWithoutDuplication(str) {
  let longestSub = str[0]
  for (let i = 1; i < str.length; i++) {
    let curLongest = str[i]
    let j = i - 1
    while (j >= 0 && curLongest.indexOf(str[j]) < 0) {
      curLongest = str[j] + curLongest
      j--
    }
    if (curLongest.length > longestSub.length) longestSub = curLongest
  }
  return longestSub
}

console.log(longestSubstringWithoutDuplication('abcb'))
