function permutations(array) {
  return helper(array)
}

function helper(array, perms = [], curPerm = []) {
  if (array.length === 1) {
    curPerm.push(array[0])
    perms.push(curPerm)
    return perms
  }
  for (let i = 0; i < array.length; i++) {
    const curElem = array[i]
    const newPerm = [...curPerm, curElem]
    const rest = [...array.slice(0, i), ...array.slice(i + 1)]
    helper(rest, perms, newPerm)
  }
  return perms
}

console.log(permutations([1,2,3]))