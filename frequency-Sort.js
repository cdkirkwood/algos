function frequencySort (str) {
  const hash = {}
  for (let i = 0; i < str.length; i++) {
    const curLetter = str[i]
    if (hash[curLetter] !== undefined) hash[curLetter]++
    else hash[curLetter] = 1
  }
  const hashArr = Object.entries(hash)
  const sortedArr = hashArr.sort((a, b) => b[1] - a[1])
  return sortedArr.reduce((finalStr, curTup) => {
    const strArr = new Array(curTup[1])
    finalStr += strArr.fill(curTup[0]).join('')
    return finalStr
  }, '')
}

console.log(frequencySort('bbAa'))