function iterativeInOrderTraversal(tree, callback) {
  let curNode = tree
  while(curNode.left) {
    curNode = tree.left
  }
  callback(curNode)
}