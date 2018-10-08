function longestIncreasingSubsequence (array) {
  let greatestSequence = [array[0]]
  let sequences = [[array[0]]]
  for (let i = 1; i < array.length; i++) {
    let localGreatestSequence = [array[i]]
    for (let j = 0; j < i; j++) {
      let curSequence = sequences[j]
      if (array[i] > curSequence[curSequence.length - 1]) {
        let newSequence = [...curSequence, array[i]]
        if (newSequence.length >= localGreatestSequence.length) localGreatestSequence = newSequence
      }
    }
    if (localGreatestSequence.length >= greatestSequence.length) greatestSequence = localGreatestSequence
    sequences[i] = localGreatestSequence
  }
  return greatestSequence
}

console.log(longestIncreasingSubsequence([29, 2, 20, 12, 30, 31]))

console.log(longestIncreasingSubsequence([10,22,9,33,21,50,41,60,80]))
