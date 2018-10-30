var firstUniqChar = function (s) {
  const map = new Map()
  const set = new Set()
  for (let i = 0; i < s.length; i++) {
    const curLetter = s[i]
    if (!set.has(curLetter)) {
      set.add(curLetter)
      map.set(curLetter, i)
    } else {
        map.delete(curLetter)
    }
  }
  if (map.size === 0) return -1
  for (let [key, value] of map) {
    return value
  }
}

// var firstUniqChar = function(s) {
//   const hash = {}
//   let uniqueIdicies = []
//   for (let i = 0; i < s.length; i++) {
//     const curLetter = s[i]
//     if (hash[curLetter] === undefined) {
//       hash[curLetter] = i
//       uniqueIdicies.push(i)
//     } else if (typeof hash[curLetter] === 'number'){
//       uniqueIdicies = uniqueIdicies.filter(curElem => curElem !== hash[curLetter])
//       hash[curLetter] = false
//     }
//   }
//   if (!uniqueIdicies.length) return -1
//   return uniqueIdicies[0]
// };

console.log(firstUniqChar('loveleetcode'))