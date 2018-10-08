var swapPairs = function (head) {
  let curNode = head || null
  let nextNode = curNode ? head.next : null
  while (curNode && nextNode) {
    const newCurNode = nextNode.next
    const newNextNode = newCurNode ? newCurNode.next : null
    const prevCurNode = curNode
    const prevNextNode = nextNode
    curNode = prevNextNode
    nextNode = prevCurNode
    curNode.next = prevCurNode
    nextNode.next = newNextNode || newCurNode
    if (nextNode === head) head = curNode
    curNode = newCurNode
    nextNode = newNextNode
  }

  return head

};