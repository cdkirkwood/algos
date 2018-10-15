var canTransform = function(start, end) {
  const perms = []
  if (start === end) return true
  for (let i = 0; i < start.length; i++) {
      if (start[i] === 'L') continue
      if (start[i + 1] === 'R') continue
      if (start[i] + start[i + 1] === 'RL') continue
      const copyStrArr = start.slice().split('')
      const [addSecond, addFirst] = copyStrArr.splice(i, 2)
      copyStrArr.splice(i, 0, addFirst, addSecond)
      if (copyStrArr.join('') === end) return true
      perms.push(copyStrArr)
      const permsLength = perms.length
      for (let j = 0; j < permsLength; j++) {
          const permStrCopy = perms[j].slice()
          permStrCopy.splice(i, 2, addFirst, addSecond)
          if (permStrCopy.join('') === end) return true
          perms.push(permStrCopy)
      }
  }
  return false
};

console.log(canTransform("RXXLRXRXL", "XRLXXRRLX"))