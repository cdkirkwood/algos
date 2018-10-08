class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }

  addMany(values) {
    let curNode = this
    while (curNode.next) {
      curNode = curNode.next
    }
    for (const value of values) {
      curNode.next = new LinkedList(value)
      curNode = curNode.next
    }
    return this
  }

  getNodesInArray() {
    const list = []
    let curNode = this
    while (curNode) {
      list.push(curNode.value)
      curNode = curNode.next
    }
    return list
  }
}

function removeKthNodeFromEnd(head, k) {
  const list = []
  let curNode = head
  while (curNode) {
    list.push(curNode)
    curNode = curNode.next
  }
  let nodeToRemove = list[list.length - k]
  let nodeBefore = list[list.length - k - 1]
  if (!nodeBefore) {
    head.value = nodeToRemove.next.value
    head.next = nodeToRemove.next.next
  }
  else {
    nodeBefore.next = nodeToRemove.next
  }
}

const test1 = new LinkedList(0).addMany([1,2,3,4,5,6,7,8,9])

removeKthNodeFromEnd(test1, 10)
console.log(test1.getNodesInArray())
