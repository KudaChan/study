// Creating an array
const arr1 = new Array('i', 'am', 'chandan', 'kumar');
const arr2 = Array ('i', 'am', 'chandan', 'kumar', 'form', 'different', 'method');
const arr3 = ['5', '7', '2002'];
// console.log({arr1, arr2, arr3});

let newArray = new Array();

/**
 * concat()
 * Joins two or more arrays and returns a new array.
*/
newArray = arr1.concat(arr3)
// console.log(newArray);

/**
 * join()
 * joins all element of an array into a string. 
*/
newArray = arr2.join(" ");
// console.log(newArray);

/**
 * push()
 * adds one or more elements to the end of an array and
 * returns the resulting length of the array. 
*/
newArray = arr1.push("from first method");
// console.log({newArray, arr1});

/**
 * pop()
 * remove the last element from an array and return that element.
*/
newArray = arr1.pop();
// console.log({newArray, arr1});

/**
 * shift()
 * removes the first element from an array and returns that element.
*/
newArray = arr3.shift();
// console.log({newArray, arr3});

/**
 * unshift()
 * add one or more elements to the front of an array and
 * returns the new length of the array.
*/
newArray = arr3.unshift(newArray);
// console.log({newArray, arr3});

/**
 * slice()
 * extract a section of an array and returns a new array.
*/
newArray = arr1.slice(2, 3+1);
// console.log({newArray, arr1});

/**
 * at()
 * returns the element at the specified index in the array, or undefined if the 
 * index is out of range. It's notably used for negative indices that access
 * elements form the end of the array.
*/
newArray = arr1.at(-2);
// console.log({newArray, arr1})

/**
 * splice()
 * removes elements from an array and (optionally) replaces them. It returns the
 * items which were removed form the array.
*/
newArray = ["1", "2", "3", "4", "5"];
const temp =newArray.splice(2, 3, "c", "d", "e") 
// console.log({temp, newArray});

/**
 * reverse()
 * transposes the elements of an array, in place.
*/
newArray = arr3.reverse();
// console.log({newArray, arr3});

/**
 * flat()
 * returns a new array with all sub-array elements concatenated into it recursively
 * upto the specific depth.
*/
newArray = ["i", "am", "chandan.", "born", "in", arr3]
newArray = newArray.flat();
// console.log(newArray);

/**
 * sort()
 * sorts the element of an array in place and returns a reference to the array.
*/
newArray = newArray.sort();
// console.log(newArray);

/**
 * indexOf()
 * searches the array for the searchElement and returns the index of the first match.
*/
newArray = arr1.indexOf("chandan");
// console.log(newArray);

/**
 * lastIndexOf()
 * searches the array for the searchElement from the end and returns the index of the
 * first match
*/

newArray = arr1.lastIndexOf("kumar");
// console.log(newArray);

/**
 * forEach()
 * executes  callback on every array item and returns undefined.
*/
arr2.forEach((element, index) => {
	// console.log(index + ":" + element);
})

/**
 * map()
 * returns a new array of the return value from executing callback on every array item.
*/
newArray = arr1.map((item) => item.toUpperCase());
// console.log(newArray);

/**
 * flatMap()
 * runs map() followed by a flat() of depth 1.
*/
newArray = ["i", "am", "chandan", "born", "in", arr3]
newArray = newArray.flatMap((item) => String(item).toUpperCase());
// console.log(newArray);

/**
 * filter()
 * returns a new array containing the items for which callback retrund true.
*/

newArray = newArray.filter((item) => typeof item === 'number');
// console.log(newArray);

/**
 * find()
 * returns the last item for which callback returned true
*/
newArray = arr1.find(item => item === 'chandan');
// console.log(newArray);

/**
 * findLast()
 * returns the last item for which callback returned true.
*/
newArray = arr1.findLast(item => item === 'kumar');
// console.log(newArray);

/**
 * findIndex()
 * returns the index of the first item for which callback returns true.
*/
newArray = arr1.findIndex(item => item === "chandan");
// console.log(newArray);

/**
 * findLastIndex()
 * returns the index of the last item for which callback returns true.
*/
newArray = arr2.findLastIndex(item => item === "kumar");
// console.log(newArray);

/**
 * every()
 * retuns true if callback returns true for every item in the array.
*/
newArray = arr2.every(item => typeof item === 'string');
// console.log(newArray);

/**
 * some()
 * retuns true if callback returns true for at least one item in the array.
*/
newArray = arr2.some(item => typeof item === 'string');
// console.log(newArray);

/**
 * reduce()
 * applies callback(accumulator, currentValue, currentIndex, array) for each value
 * in the array for the purpose of reducing the list of items down to a single value.
 * The reduce function reutrn the final value returned by callback function.
*/
newArray = arr1.reduce((accumulator, currentValue) => accumulator + currentValue + " ", " ");
// console.log(newArray);

console.log('I am saying hello from array.js which contain all the methods in array object.')
