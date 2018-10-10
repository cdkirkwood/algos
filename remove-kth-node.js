var removeNthFromEnd = function(head, n) {
  const nodes = []
  let curNode = head
  while (curNode) {
    if (nodes.length === n + 1) nodes.pop()
    nodes.unshift(curNode)
    curNode = curNode.next
  }
  nodes[0].next = nodes[1]
};
