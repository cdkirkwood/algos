var removeInvalidParentheses = function (s) {
  let leftCount = 0
  let rightCount = 0
  let idx = 0
  const perms = new Set()
  recursiveHelper(s, leftCount, rightCount, idx, perms)
  return [...perms]
};

function recursiveHelper(str, leftCount, rightCount, idx, perms) {
  const curLen = str.length
  const permsArr = [...perms]
  const bestLen = permsArr.length ? permsArr[0].length : -Infinity
  if (idx === str.length) {
    if (leftCount === rightCount && curLen >= bestLen) {
      if (curLen > bestLen) perms.clear()
      perms.add(str)
    }
  }
  let curParens = str[idx]
  const newStr = str.slice(0, idx) + str.slice(idx + 1)
  if (curParens === '(') {
    recursiveHelper(str, leftCount, rightCount + 1, idx + 1, perms)
    recursiveHelper(newStr, leftCount, rightCount, idx, perms)
  } else if (curParens === ')') {
    if (leftCount + 1 <= rightCount) recursiveHelper(str, leftCount + 1, rightCount, idx + 1, perms)
    recursiveHelper(newStr, leftCount, rightCount, idx, perms)
  } else if (curParens !== undefined) {
    recursiveHelper(str, leftCount, rightCount, idx + 1, perms)
  }

}
console.log(removeInvalidParentheses("(a)())()"))