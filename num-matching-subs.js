function numMatchingSubseq(S, words) {
  const matchingSubs = []
  for (let i = 0; i < words.length; i++) {
    const curWord = words[i]
    const letterCounter = {}
    for (let j = 0; j < curWord.length; j++) {
      if (!letterCounter[curWord[j]]) letterCounter[curWord[j]] = 1
      else letterCounter[curWord[j]]++
    }
    for (let k = 0; k < S.length; k++) {
      if (letterCounter[S[k]] === 1) delete letterCounter[S[k]]
      else if (letterCounter[S[k]]) letterCounter[S[k]]--
    }
    if (!Object.keys(letterCounter).length) matchingSubs.push(curWord)
  }
  return matchingSubs
}

console.log(numMatchingSubseq('abcde', ['a', 'bb', 'acd', 'ace']))