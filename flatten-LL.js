class LinkedList {
  constructor(head) {
    this.head = head
    this.tail = this.head
  }

  addToTail(node) {
    const oldTail = this.tail
    oldTail.next = node
    this.tail = node
    if (this.tail.child) this.addToTail(this.tail.child)
    this.tail.child = null
  }
}

function flattenLinkedList(head) {
  const flatList = new LinkedList(head)
  let curNode = head.next
  while (curNode) {
    const nextNode = curNode.next
    flatList.addToTail(curNode)
    curNode = nextNode
  }

  return flatList
}