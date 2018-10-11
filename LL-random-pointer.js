var copyRandomList = function(head) {
  const visited = {}
  if (!head) return null
  let oldNode = head
  let newNode = new RandomListNode(head.label)
  const newHead = newNode
  while (oldNode) {
    newNode.random = findOrCreateNode(oldNode.random, visited)
    newNode.next = findOrCreateNode(oldNode.next, visited)
    oldNode = oldNode.next
    newNode = newNode.next
  }
    return newHead
}

function findOrCreateNode(oldNode, visited) {
  if (!oldNode) return null
  if (visited[oldNode.label]) return visited[oldNode.label]
  const newNode = new RandomListNode(oldNode.label)
  visited[oldNode.label] = newNode
  return newNode
}

function RandomListNode(label) {
  this.label = label;
  this.next = this.random = null;
}