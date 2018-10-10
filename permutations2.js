function permutations(array) {
  const perms = []
  generatePerms(array, [], perms)
  return perms
}

function generatePerms(array, curPerm, perms) {
  if (!array.length) {
    perms.push(curPerm)
    return
  }
  for (let i = 0; i < array.length; i++) {
    const newPerm = [...curPerm, array[i]]
    const rest = [...array.slice(0, i), ...array.slice(i + 1)]
    generatePerms(rest, newPerm, perms)
  }
}

console.log(permutations([1,2,3]))