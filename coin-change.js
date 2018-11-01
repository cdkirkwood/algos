var coinChange = function(denoms, amount) {
  const result = helper(denoms, amount)
  return result === Infinity ? -1 : result
}

function helper(denoms, amount, memory = {}) {
   if (amount === 0) return 0;
 if (amount < 0) return Infinity;
   if (memory[amount]) return memory[amount];
 var min = Infinity;
 for (var i = 0; i < denoms.length; i++) {
   min = Math.min(min, coinChange(denoms.slice(i), amount - denoms[i]) + 1);
 }
   memory[amount] = min
 return min
}

function coinChangeRecursive(denoms, amount) {
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;
  var min = Infinity;
  for (var i = 0; i < denoms.length; i++) {
    min = Math.min(min, coinChangeRecursive(denoms.slice(i), amount - denoms[i]) + 1);
  }
  return min;
}

console.log(coinChange([1,2,5], 11))