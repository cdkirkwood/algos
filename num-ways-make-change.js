function numberOfWaysToMakeChange(amount, denoms) {
  const ways = new Array(amount + 1).fill(0)
	ways[0] = 1
	for (let i = 0; i < denoms.length; i++) {
		const curDenom = denoms[i]
		for (let j = 1; j < amount + 1; j++) {
			if (curDenom <= j) {
				ways[j] += ways[j - curDenom]
			}
		}
	}
	return ways[amount]
}

//6
//[0, 0, 0, 0, 0, 0]
////[1, 1, 1, 1, 1, 1]
//[1, 1, 1, 1, 6, 1]
console.log(numberOfWaysToMakeChange(12, [2, 3, 7]))