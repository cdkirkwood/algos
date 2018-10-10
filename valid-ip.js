var validIPAddress = function(IP) {
  let checkingiPv4 = IP[3] === '.'
  if (checkingiPv4) return checkForiPv4(IP)
  else return checkforiPv6(IP)
};

function checkForiPv4(IP) {
  const ipArr = IP.split('.')
    for (let i = 0; i < ipArr.length; i++) {
      const curNum = ipArr[i]
      if (curNum[0] === '0') return 'Neither'
      if (+curNum > 255) return 'Neither'
      if (!curNum.length) return 'Neither'
      for (let j = 0; j < curNum.length; j++) {
        if (isNaN(+curNum[j])) return 'Neither'
      }
    }
    return 'IPv4'
}

function checkforiPv6(IP) {
  const ipArr = IP.split(':')
  for (let i = 0; i < ipArr.length; i++) {
    if (!ipArr[i].length || ipArr[i].length > 4) return 'Neither'
  }
  return 'IPv6'
}