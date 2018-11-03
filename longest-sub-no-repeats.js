var lengthOfLongestSubstring = function(s) {
    let longestSub = 0
    for (let i = 0; i < s.length; i++) {
      let curLongest = s[i]
      let j = i + 1
      while (!curLongest.includes(s[j]) && j < s.length) {
        curLongest += s[j]
        j++
      }
      longestSub = Math.max(longestSub, curLongest.length)
    }
    return longestSub
};

console.log(lengthOfLongestSubstring('abcabcbb'))