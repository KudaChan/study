// Creating an object
const people = new Object(
  {
    name: 'Chandan Kumar',
    age: 22,
    city: 'Delhi',
  },
);

let val = '';

/**
 * Object.assign()
 * copies all enumerable properties from one or more source objects to a target object.
 */
val = Object.assign(people, { DOB: '05-07-2002' });
// console.log(val);

/**
 * Object.create()
 * creates a new object with the specified prototype object and properties.
 */
val = Object.create(people);
val.hobby = 'Reading';
// console.log(val);

/**
 * Object.defineProperties()
 * Adds the named properties described by the given descriptors to an object.
 */
val = Object.defineProperties({}, {
  aboutMe: {
    value: 'I am a software engineer',
    writable: false,
    enumerable: true,
    configurable: true,
  },
  myHobby: {
    value: 'Reading',
    writable: false,
    enumerable: true,
    configurable: true,
  },
});
// console.log(val);

/**
 * Object.defineProperty()
 * Adds a property to an object, or modifies attributes of an existing property.
 */
val = Object.defineProperty({}, 'aboutMe', {
  value: 'I am a software engineer',
  writable: false,
  enumerable: true,
  configurable: true,
});
// console.log(val);

/**
 * Object.entries()
 * Returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop.
 */
val = Object.entries(people);
// console.log(val);

/**
 * Object.freeze()
 * Freezes an object. Other code cannot delete or change its properties.
 */
val = Object.freeze(people);
val.name = 'Changed Name';
// console.log(val);

/**
 * Object.isFrozen()
 * Returns a boolean indicating whether an object is frozen (whether it cannot be changed).
 */
val = Object.isFrozen(people);
// console.log(val);

/**
 * Object.fromEntries()
 * Returns a new object from an iterable of key-value pairs.
 */
val = Object.fromEntries([
  ['name', 'Chandan Kumar'],
  ['age', 22],
  ['city', 'Delhi'],
]);
// console.log(val);

/**
 * Object.getOwnPropertyDescriptor()
 * Returns a property descriptor for a specified property on an object.
 */
val = Object.getOwnPropertyDescriptor(people, 'name');
// console.log(val);

/**
 * Object.getOwnPropertyDescriptors()
 * Returns an object containing all own property descriptors for an object.
 */
val = Object.getOwnPropertyDescriptors(people);
// console.log(val);

/**
 * Object.getOwnPropertyNames()
 * Returns an array of all own property names of an object.
 */
val = Object.getOwnPropertyNames(people);
// console.log(val);

/**
 * Object.getOwnPropertySymbols()
 * Returns an array of all own property symbols of an object.
 */
val = Object.getOwnPropertySymbols(people);
// console.log(val);

/**
 * Object.setPrototypeOf()
 * Sets the prototype (internal [[Prototype]]) of a specified object to another object or null.
 */
val = {
  name: 'Chandan Kumar',
  age: 22,
  city: 'Delhi',
}
val = Object.setPrototypeOf(val, { name: 'Chandan Kumar' });
// console.log(val);

/**
 * Object.getPrototypeOf()
 * Returns the prototype of an object.
 */
val = Object.getPrototypeOf(val);
// console.log(val);

/**
 * Object.groupBy()
 * Groups the elements of a given iterable according to the string values returned by a provided callback function.
 * The returned object has separate properties for each group, containing arrays with the elements in the group.
 */
val = [
  { name: 'Chandan Kumar', age: 22, marks: 90 },
  { name: 'Sachin', age: 22, marks: 80 },
  { name: 'Rahul', age: 22, marks: 70 },
  { name: 'Rohit', age: 22, marks: 60 },
  { name: 'Virat', age: 22, marks: 50 },
];

val = Object.groupBy(val, ({marks}) => marks > 70);
// console.log(val);

/**
 * Object.is()
 * Determines whether two values are the same value.
 * It returns true if the values are the same value, or false otherwise.
 */
val = Object.is(people, val);
// console.log(val);

/**
 * Object.hasOwn()
 * Returns a boolean indicating whether the object has the specified property as its own property.
 */
val = Object.hasOwn(people, 'name');
// console.log(val);

/**
 * Object.preventExtensions()
 * Prevents future extensions of an object.
 */
val = Object.preventExtensions(people);
// console.log(val);

/**
 * Object.isExtensible()
 * Returns a boolean indicating whether an object is extensible (whether it can have new properties added to it).
 */
val = Object.isExtensible(people);
// console.log(val);

/**
 * Object.seal()
 * Prevents new properties from being added to an object, and marks all existing properties as non-configurable.
 */
val = Object.seal(people);
// console.log(val);

/**
 * Object.isSealed()
 * Returns a boolean indicating whether an object is sealed (whether it cannot have existing properties removed, and new properties cannot be added).
 */
val = Object.isSealed(people);
// console.log(val);

/**
 * Object.keys()
 * Returns an array of a given object's own enumerable property names, in the same order as that provided by a for...in loop.
 */
val = Object.keys(people);
// console.log(val);

/**
 * Object.values()
 * Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
 */
val = Object.values(people);
// console.log(val);

/**
 * Object.prototype.hasOwnProperty()
 * Returns a boolean indicating whether the object has the specified property as its own property.
 */
val = people.hasOwnProperty('name');
// console.log(val);


/**
 * Object.prototype.isPrototypeOf()
 * Returns a boolean indicating whether an object exists in another object's prototype chain.
 */
val = people.isPrototypeOf(val);
// console.log(val);

/**
 * Object.prototype.propertyIsEnumerable()
 * Returns a boolean indicating whether the specified property is enumerable.
 */
val = people.propertyIsEnumerable('name');
// console.log(val);

/**
 * Object.prototype.toLocaleString()
 * Returns a string representing the object.
 */
val = people.toLocaleString();
// console.log(val);

/**
 * Object.prototype.toString()
 * Returns a string representing the object.
 */
val = people.toString();
// console.log(val);

/**
 * Object.prototype.valueOf()
 * Returns the primitive value of the specified object.
 */
val = people.valueOf();
// console.log(val);
