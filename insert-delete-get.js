var RandomizedSet = function() {
  this.set = new Set()
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element.
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (this.set.has(val)) {
    return false
  } else {
    this.set.add(val)
    return true
  }
};

/**
* Removes a value from the set. Returns true if the set contained the specified element.
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if (!this.set.has(val)) {
    return false
  } else {
    this.set.delete(val)
    return true
  }
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  const setArr = this.set.values()
  const randomIndex = Math.floor(Math.random() * Math.floor(setArr.length))
  return setArr[randomIndex]
};