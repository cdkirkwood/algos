// O(1) creation time
function ImmutableBST (value, left, right) {
  this.value = value;
  this.left = left || null;
  this.right = right || null;
  this.size = 1 + (left && left.size || 0) + (right && right.size || 0);
}
// O(log n) insertion time
ImmutableBST.prototype.insert = function (value) {
  const newValue = this.value;
  let newLeft, newRight;
  if (value <= this.value) {
    newRight = this.right;
    newLeft = (this.left ? this.left.insert(value) : new ImmutableBST(value));
  } else {
    newLeft = this.left;
    newRight = (this.right ? this.right.insert(value) : new ImmutableBST(value));
  }
  return new ImmutableBST(newValue, newLeft, newRight);
};
// O(log n) retrieval time
ImmutableBST.prototype.contains = function (value) {
  if (this.value === value) return true;
  if (value < this.value) {
    return Boolean(this.left) && this.left.contains(value);
    //return this.left ? this.left.contains(value) : false
  } else {
    return Boolean(this.right) && this.right.contains(value);
    // return this.right ? this.right.contains(value) : false
  }
};
ImmutableBST.prototype.min = function () {
  if (!this.left) return this.value;
  else return this.left.min();
};
ImmutableBST.prototype.max = function () {
  if (!this.right) return this.value;
  else return this.right.max();
};
// O(log n) removal time
ImmutableBST.prototype.remove = function (value) {
  if (this.value === value) {
    if (this.left && this.right) {
      let newValue, newLeft, newRight;
      if (this.left.size > this.right.size) {
        newRight = this.right;
        newValue = this.left.max();
        newLeft = this.left.remove(newValue);
      } else {
        newLeft = this.left;
        newValue = this.right.min();
        newRight = this.right.remove(newValue);
      }
      return new ImmutableBST(newValue, newLeft, newRight);
    } else if (!this.left && !this.right) {
      return null;
    } else {
      return this.left || this.right;
    }
  } else {
    const newValue = this.value;
    let newLeft, newRight;
    if (value < this.value) {
      newRight = this.right;
      newLeft = (this.left ? this.left.remove(value) : null);
    } else {
      newLeft = this.left;
      newRight = (this.right ? this.right.remove(value) : null);
    }
    return new ImmutableBST(newValue, newLeft, newRight);
  }
};

const bst = new ImmutableBST(5);
const bstMore = bst.insert(3).insert(4).insert(1).insert(11).insert(100).insert(15).insert(2).insert(10);
const bstPlus = bstMore.insert(25).insert(7).insert(0)
console.log(bstMore.contains(5)); // true
console.log(bstMore.contains(3)); // true
console.log(bstMore.contains(11)); // true
console.log(bstMore.contains(12)); // false
console.log(bst === bstMore); // false, because of immutability
console.log(bstMore.remove(11).contains(11)) //false
console.log(bstMore.contains(11)) //true
console.log(bstMore.contains(7)); // false
console.log(bstPlus.contains(7)); // true
console.log(bstPlus.contains(3)); // true
console.log(bstPlus.contains(0)); // true
console.log(bstPlus.contains(5)); // true