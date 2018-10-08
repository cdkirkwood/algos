var copyRandomList = function(head) {
  const deepCopyList = new LinkedList()
  let curNode = head
  while (curNode) {
    deepCopyList.addToTail(curNode)
    curNode = curNode.next
  }
  return deepCopyList
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addToTail(node) {
    if (!this.head) {
      this.head = node
      this.tail = this.head
    } else {
      const prevTail = this.tail
      prevTail.next = node
      this.tail = node
    }
    let curNode = node
    while (curNode.random) {
      node.random = curNode.random
      curNode = curNode.random
    }
  }
}