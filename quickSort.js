function quicksort(array) {
  nextPivot(array.length - 1, array)
  return array
}

function nextPivot(pivot, array, wall = 0) {
  for (let i = wall; i <= pivot; i++) {
    if (array[i] <= array[pivot]) {
      const elemAtWall = array[wall]
      array[wall] = array[i]
      array[i] = elemAtWall
      wall++
    }
  }
  console.log(wall, pivot)
  if (wall >= pivot) return
  else {
    nextPivot(wall - 2, array)
    nextPivot(pivot, array, wall)
  }
}

console.log(quicksort([5, 1, 3, 9]))