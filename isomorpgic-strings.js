var isIsomorphic = function(s, t) {
    const firstStrObj = {}
    const secondStrObj = {}
    for (let i = 0; i < s.length; i++) {
      const charOfFirst = s[i]
      const charOfSecond = t[i]
      const firstIdx = firstStrObj[charOfFirst]
      const secondIdx = secondStrObj[charOfSecond]
      if (firstIdx === undefined && secondIdx === undefined) {
        firstStrObj[charOfFirst] = i
        secondStrObj[charOfSecond] = i
      } else if (firstIdx !== secondIdx) {
        return false
      }
    }
    return true
}

console.log(isIsomorphic('foo', 'bar'))