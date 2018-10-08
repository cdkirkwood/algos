function balancedBrackets(str) {
  const brackets = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  const stack = []
  for (let i = 0; i < str.length; i++) {
    const curBraket = str[i]
    if (brackets[curBraket]) stack.push(curBraket)
    if (!brackets[curBraket]) {
      if (brackets[stack[stack.length - 1]] === curBraket) stack.pop()
      else return false
    }
  }
  return stack.length === 0
}

console.log(balancedBrackets('{[[[[({(}))]]]]}'))
console.log(balancedBrackets('(){}[{}]'))
console.log(balancedBrackets('{{()}}'))
console.log(balancedBrackets(')[]}'))
