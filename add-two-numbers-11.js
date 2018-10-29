var addTwoNumbers = function(l1, l2) {
  const l1Arr = getFullList(l1)
  const l2Arr = getFullList(l2)
  while (l1Arr.length && l2Arr.length) {
    let l1Elem = l1Arr.pop()
    let l2Elem = l2Arr.pop()
    l1Elem.val += l2Elem.val
    if (l1Elem.val >= 10) {
      l1Elem.val -= 10
      if (!l1Arr.length) {
        const newNode = new ListNode(1)
        newNode.next = l1Elem
        l1Arr.unshift(newNode)
        l1 = newNode
      }
      else {
        let current = l1Elem
        let prevIdx = l1Arr.length - 1
        let previous = l1Arr[prevIdx]
        while (previous && previous.val === 9) {
          previous.val = 0
          prevIdx--
          current = previous
          previous = l1Arr[prevIdx]
        }
        if (!previous) {
          const newNode = new ListNode(1)
          newNode.next = current
          l1Arr.unshift(newNode)
          l1 = newNode
        } else {
          previous.val += 1
        }
      }
    }
  }
  if (l2Arr.length) {
    l2Arr[l2Arr.length - 1].next = l1
    return l2
  }
  return l1
};

function getFullList(head) {
  let curNode = head
  const list = []
  while (curNode.next) {
    list.push(curNode)
    curNode = curNode.next
  }
  return list
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const testList = new ListNode(2)
testList.next = new ListNode(3)
testList.next.next = new ListNode(4)