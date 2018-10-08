class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
  }

  insertKeyValuePair(key, value) {
    if (!this.table) this.table = {}
    if (!this.list) this.list = new LinkedList(this.maxSize)
    if (!this.table[key]) {
      const [newHead, removedKey] = this.list.addToHead(key, value)
      this.table[key] = newHead
      delete this.table[removedKey]
      return removedKey
    } else {
      const nodeToMove = this.table[key]
      nodeToMove.value = value
      this.shiftNodes(nodeToMove)
    }
  }

  getValueFromKey(key) {
    if (!this.table) return null
    if (!this.table[key]) return null
    const node = this.table[key]
    this.shiftNodes(node)
    return node.value
  }

  getMostRecentKey() {
    if (!this.table) return null
    return this.list.head.key
  }

  shiftNodes(nodeToMove) {
    if (nodeToMove !== this.list.head) {
      const oldHead = this.list.head
      oldHead.previous = nodeToMove
      this.list.head = nodeToMove
      const prevNode = nodeToMove.previous
      if (this.list.tail === nodeToMove) {
        this.list.tail = prevNode
        this.list.tail.next = null
      } else {
        const nextNode = nodeToMove.next
        prevNode.next = nextNode
        nextNode.previous = prevNode
      }
      nodeToMove.previous = null
      nodeToMove.next = oldHead
    }
  }
}

class LinkedList {
  constructor(maxSize) {
    this.head = null
    this.tail = null
    this.size = 0
    this.maxSize = maxSize
  }

  addToHead(key, value) {
    this.size++
    let removedKey = null
    if (this.size > this.maxSize) removedKey = this.removeTail()
    const newNode = new Node(key, value)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      const oldHead = this.head
      this.head = newNode
      this.head.next = oldHead
      oldHead.previous = this.head
    }
    return [this.head, removedKey]
  }

  removeTail() {
    const removedKey = this.tail.key
    if (this.maxSize === 1) {
      this.head = null
      this.tail = null
    } else {
      const newTail = this.tail.previous
      newTail.next = null
      this.tail = newTail
    }
    this.size--
    return removedKey
  }

}

class Node {
  constructor(key, value, next = null, previous = null) {
    this.key = key
    this.value = value
    this.next = next
    this.previous = previous
  }
}

const lru = new LRUCache(1)

lru.insertKeyValuePair(1, 'a')
lru.insertKeyValuePair(2, 'b')
lru.insertKeyValuePair(3, 'c')
lru.insertKeyValuePair(4, 'd')

console.log(lru.getMostRecentKey())
console.log(lru.getValueFromKey(3))
console.log(lru.getValueFromKey(1))
