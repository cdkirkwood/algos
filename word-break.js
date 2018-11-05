var wordBreak = function (s, wordDict) {
  const possibleStr = []
  for (let i = 0; i < wordDict.length; i++) {
    let copyStr = s.slice()
    const curWord = wordDict[i]
    let startIdx = copyStr.indexOf(curWord)
    while (startIdx >= 0) {
      copyStr = copyStr.slice(0, startIdx) + copyStr.slice(startIdx + curWord.length)
      if (!copyStr.length) return true
      possibleStr.push(copyStr)
      startIdx = copyStr.indexOf(curWord)
    }
    for (let j = 0; j < possibleStr.length; j++) {
      let doubleCopy = possibleStr[j].slice()
      let innerStartIdx = doubleCopy.indexOf(curWord)
      while (innerStartIdx >= 0) {
        doubleCopy = doubleCopy.slice(innerStartIdx) + doubleCopy.slice(innerStartIdx + curWord.length)
        if (!doubleCopy.length) return true
        possibleStr.push(doubleCopy)
        innerStartIdx = doubleCopy.indexOf(curWord)
      }
    }
  }
  return false
};

console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))