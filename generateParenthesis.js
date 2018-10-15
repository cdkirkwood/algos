var generateParenthesis = function(n) {
  let parens = ''
  for (let i = 0; i < n; i++) {
    parens += '()'
  }
  const perms = new Set()
  const visited = {}
  return [...createPerms(parens, perms, '', visited)]
};

function createPerms(parens, perms, curPerm, visited) {
  if (visited[parens] > 1 && visited[curPerm] > 1) return
  visited[parens] = visited[parens]++ || 0
  visited[curPerm] = visited[curPerm]++ || 0
  if (parens.length === 1) {
    curPerm += parens[0]
    if (isValidParenthesis(curPerm)) perms.add(curPerm)
    return perms
  }
  for (let i = 0; i < parens.length; i++) {
    const newPerm = curPerm + parens[i]
    const rest = parens.slice(0, i) + parens.slice(i + 1)
    createPerms(rest, perms, newPerm, visited)
  }
  return perms
}

function isValidParenthesis(parens) {
  let counter = 0
  for (let i = 0; i < parens.length && counter >= 0; i++) {
    if (parens[i] === '(') counter++
    else counter--
  }
  return counter === 0
}

console.log(generateParenthesis(5))