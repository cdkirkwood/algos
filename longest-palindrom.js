function longestPalindromicSubstring(string) {
  let longestStr = ''
  if (string.length <= 1) return string

  for (let i = 0; i < string.length; i++) {
    let curStr = string[i]
    for (let j = i + 1; j < string.length; j++) {
      curStr += string[j]
      if (isPalindrom(curStr) && curStr.length > longestStr.length) {
        longestStr = curStr
      }
    }
  }
  return longestStr
}

function isPalindrom (str) {
  let left = 0
  let right = str.length - 1
  while (left <= right) {
    if (str[left] !== str[right]) return false
    left++
    right--
  }
  return true
}

console.log(longestPalindromicSubstring('xyzzyx'))