var topKFrequent = function(nums, k) {
  const count = {}
  nums.forEach(elem => {
    count[elem] = count[elem] ? count[elem] + 1 : 1
  })
  const entries = Object.entries(count)
  const sortedAmounts = entries.sort((a, b) => b[1] - a[1])
  const returnArr = []
  for (let i = 0; i < k; i++) {
    returnArr.push(+sortedAmounts[i][0])
  }
  return returnArr
};

console.log(topKFrequent([1,1,1,2,2,3], 2))