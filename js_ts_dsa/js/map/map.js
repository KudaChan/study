// Creating a Map
const map = new Map();
let val = '';
// Adding elements to the Map
map.set("name", "Chandan Kumar");
map.set("age", 22);
map.set("city", "Delhi");

// Retrieving elements from the Map
val = map.get("name");
// console.log(val);

/**
 * Map.prototype.constructor()
 * The constructor function that created the instance object.
 */
val = new map.constructor([
  ['DOB', '05-07-2002'],
  ['occupation', 'Software Engineer']
]);
// console.log(val, map);

/**
 * Map.prototype.size()
 * The number of key/value pairs in the Map object.
 */
val = map.size;
// console.log(val);

/**
 * Map.prototype[Symbol.toStringTag]
 * The default value is "Map".
 */
val = map[Symbol.toStringTag];
// console.log(val);

/**
 * Map.prototype.clear()
 * Removes all key/value pairs from the Map object.
 */
val = new map.constructor([
  ['DOB', '05-07-2002'],
  ['occupation', 'Software Engineer']
]);
val.clear();
// console.log(val);


/**
 * Map.prototype.delete()
 * Removes the specified element from the Map object.
 * Returns true if the element in the Map object existed and has been removed, or false if the element does not exist.
 */
val = new map.constructor([
  ['DOB', '05-07-2002'],
  ['occupation', 'Software Engineer']
]);
val.delete('occupation');
// console.log(val);

/**
 * Map.prototype.entries()
 * Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
 */
val = map.entries();
// console.log(val);

/**
 * Map.prototype.forEach()
 * Calls a function for each element in the Map object in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for the callback function.
 */
map.forEach((value, key) => {
  key = String(key).toUpperCase();
  value = String(value).toLowerCase();
  // console.log(key, value);
});

/**
 * Map.prototype.get()
 * Returns a value for a specified key in the Map object.
 * Returns undefined if the key does not exist in the Map object.
 */
val = map.get('name');
// console.log(val);

/**
 * Map.prototype.has()
 * Returns a boolean indicating whether an element with the specified key exists or not.
 */
val = map.has('name');
// console.log(val);

/**
 * Map.prototype.keys()
 * Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
 */
val = map.keys();
// console.log(val);

/**
 * Map.prototype.set()
 * Adds or updates an element with the specified key and value to the Map object.
 * Returns the Map object.
 */
val = map.set('name', 'Chandan Kumar');
// console.log(val);

/**
 * Map.prototype.values()
 * Returns a new Iterator object that contains the values for each element in the Map object in insertion order.
 */
val = map.values();
// console.log(val);


/**
 * Map.prototype[Symbol.iterator]()
 * Returns a new Iterator object that contains the values for each element in the Map object in insertion order.
 */
val = map[Symbol.iterator]();
// console.log(val);
