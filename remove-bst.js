class BST {
  constructor(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
    this.size = 1 + (left && left.size || 0) + (right && right.size || 0);
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) this.left = new BST(value)
      else this.left.insert(value)
    } else {
      if (!this.right) this.right = new BST(value)
      else this.right.insert(value)
    }
    return this;
  }

  contains(value) {
    if (value === this.value) return true
    if (value < this.value && this.left) return this.left.contains(value)
    if (value > this.value && this.right) return this.right.contains(value)
    return false
  }

  min() {
    if (this.left) return this.left.min()
    else return this.value
  }

  max() {
    if (this.right) return this.right.max()
    else return this.value
  }

  remove(value) {
    if (this.value === value) {
      if (this.left && this.right) {
        if (this.left.size > this.right.size) {
          this.value = this.left.max();
          this.left = this.left.remove(this.value);
        } else {
          this.value = this.right.min();
          this.right = this.right.remove(this.value);
        }
        return this
      } else if (!this.left && !this.right) {
        return null;
      } else {
        return this.left || this.right;
      }
    } else {
      if (value < this.value) {
        this.left = (this.left ? this.left.remove(value) : null);
      } else {
        this.right = (this.right ? this.right.remove(value) : null);
      }
      return this
    }
  }
}

const bst = new BST(5);
const bstMore = bst.insert(4).insert(3).insert(1).insert(10).insert(11).insert(15).insert(2).insert(100).remove(5).remove(10)
//console.log(bstMore.remove(11))
console.log(bstMore.contains(5)); // false
console.log(bstMore.contains(3)); // true
console.log(bstMore.contains(10)); // false
console.log(bstMore.contains(12)); // false
console.log(bstMore.contains(15)); // true
console.log(bst === bstMore); // true
bstMore.remove(11)
console.log(bstMore.contains(11)) //false