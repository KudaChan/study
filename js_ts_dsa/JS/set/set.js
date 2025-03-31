// Creating a Set
const set = new Set([1, 2, 3]);
let val = '';
/**
 * Set.prototype.constructor
 * The constructor function that created the instance object.
 */
const newSet = new set.constructor([4, 5, 6]);
// console.log(newSet);

/**
 * Set.prototype.size
 * The number of key/value pairs in the Set object.
 */
val = set.size;
// console.log(val);

/**
 * Set.prototype[Symbol.toStringTag]
 * The default value is "Set".
 */
val = set[Symbol.toStringTag];
// console.log(val);

/**
 * Set.prototype.add()
 * Adds a new element with a specified value to the Set object.
 * Returns the Set object.
 */
val = set.add(4);
// console.log(val);

/**
 * Set.prototype.clear()
 * Removes all key/value pairs from the Set object.
 */
val = new set.constructor([4, 5, 6]);
val = val.clear();
// console.log(val);

/**
 * Set.prototype.delete()
 * Removes the specified element from the Set object.
 * Returns true if the element in the Set object existed and has been removed, or false if the element does not exist.
 */
val = new set.constructor([4, 5, 6]);
val = set.delete(4);
// console.log(val);

/**
 * Set.prototype.entries()
 * Returns a new Iterator object that contains an array of [value, value] for each element in the Set object in insertion order.
 */
val = set.entries();
// console.log(val);

/**
 * Set.prototype.forEach()
 * Calls a function for each element in the Set object in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for the callback function.
 */
set.forEach((value) => {
  // console.log(value);
});

/**
 * Set.prototype.has()
 * Returns a boolean indicating whether an element exists in the Set object or not.
 */
val = set.has(4);
// console.log(val);


/**
 * Set.prototype.keys()
 * Returns a new Iterator object that contains the keys of the elements in the Set object in insertion order.
 */
val = set.keys();
// console.log(val);

/**
 * Set.prototype.values()
 * Returns a new Iterator object that contains the values of the elements in the Set object in insertion order.
 */
val = set.values();
// console.log(val);

/**
 * Set.prototype[Symbol.iterator]()
 * Returns a new Iterator object that contains the values of the elements in the Set object in insertion order.
 */
val = set[Symbol.iterator]();
// console.log(val);

/**
 * Set.prototype.difference()
 * Takes a set and return a new set containing elements in this set but not in the given set.
 */
val = set.difference(new set.constructor([4, 5, 6]));
// console.log(val);


/**
 * Set.prototype.intersection()
 * Takes a set and return a new set containing elements that are present in both this set and the given set.
 */
val = set.intersection(new set.constructor([2, 3, 6]));
// console.log(val);


/**
 * Set.prototype.isDisjointFrom()
 * Returns a boolean indicating whether the Set object has no elements in common with another Set object or not.
 */
val = set.isDisjointFrom(new set.constructor([4, 5, 6]));
// console.log(val);


/**
 * Set.prototype.isSubsetOf()
 * Returns a boolean indicating whether the Set object is a subset of another Set object or not.
 */
val = set.isSubsetOf(new set.constructor([1, 2, 3, 4, 5, 6]));
// console.log(val);


/**
 * Set.prototype.isSupersetOf()
 * Returns a boolean indicating whether the Set object is a superset of another Set object or not.
 */
val = set.isSupersetOf(new set.constructor([1, 2, 3]));
// console.log(val);

/**
 * Set.prototype.symmetricDifference()
 * Takes a set and returns a new set containing elements which are in either this set or the given set but not in both.
 */
val = set.symmetricDifference(new set.constructor([3, 5, 6]));
// console.log(val);

/**
 * Set.prototype.union()
 * Takes a set and returns a new set containing elements from both this set and the given set.
 */
val = set.union(new set.constructor([4, 5, 6]));
// console.log(val);
