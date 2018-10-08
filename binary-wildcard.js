function binaryWild(str, index = 0, permutations = [], curPerm = '') {
  for (let i = index; i < str.length; i++) {
    if (str[i] === '?') {
      const wildIs1 = str.slice(0, i) + '1' + str.slice(i + 1)
      const wildIs0 = str.slice(0, i) + '0' + str.slice(i + 1)
      binaryWild(wildIs1, i, permutations, curPerm)
      binaryWild(wildIs0, i, permutations, curPerm)
    } else {
      curPerm += str[i]
    }
  }
  if (curPerm.length === str.length) permutations.push(curPerm)
  return permutations
}

console.log(binaryWild('1??0?101'))