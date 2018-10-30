var isValidBST = function(root) {
  let min = -Infinity
  let max = Infinity
  return helper(root, min, max)
};

function helper(root, min, max) {
  if (!root) return true
  if (root.val <= min || root.val >= max) return false
  const leftResult = helper(root.left, min, root.val)
  const rightResult = helper(root.right, root.val, max)
  if (leftResult === false || rightResult === false) return false
  return true
}