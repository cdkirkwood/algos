function knapsackProblem(items, capacity) {
  let maxValueIndicies = []
  const allPossible = []
  let maxValue = 0
  for (let i = 0; i < items.length; i++) {
    let localMaxValueIndicies = []
    let localMaxValue = 0
    const localCapacity = items[i][1]
    if (localCapacity <= capacity) {
      localMaxValueIndicies = [i]
      localMaxValue = items[i][0]
    }
    const possibleLength = allPossible.length
    allPossible.push({indicies: [i], value: items[i][0], capacity: items[i][1]})
    for (let j = 0; j < possibleLength; j++) {
      const curCapacity = allPossible[j].capacity + items[i][1]
      if (curCapacity <= capacity) {
        const curValue = allPossible[j].value + items[i][0]
        const curIndicies = [...allPossible[j].indicies, i]
        allPossible.push({indicies: curIndicies, value: curValue, capacity: curCapacity})
        if (curValue > localMaxValue) {
          localMaxValue = curValue
          localMaxValueIndicies = curIndicies
        }
      }
    }
    if (localMaxValue > maxValue) {
      maxValue = localMaxValue
      maxValueIndicies = localMaxValueIndicies
    }
  }

  return [maxValue, maxValueIndicies]
}

//console.log(knapsackProblem([[1,2], [4,3], [5,6], [6,7], [2, 4]], 10)) 
//[10, [1,3]]

//console.log(knapsackProblem([[2,1], [70,70], [30,30], [69,69], [100, 100]], 100)) 
//[101, [0,2,3]]

console.log(knapsackProblem([[465,100], [400,85], [255,55], [350,45], [650, 130], [1000, 190], [455, 100], [100, 25], [1200, 190], [320, 65], [750, 100], [50, 45], [550, 65], [100, 50], [600, 70], [240, 40]], 200)) 
//[1500, [3,12,14]