/**
 * Sentinal Search
 * Sentinal Search is similar to linear seacrch but have slightly better performance due the
 * less comparision. Here we add target value at the end of the array and then start searching
 * from the start of the array.
 * Due to this we dont have to perform the comparision for the last element.
 */

function sentinalSearch(arr, target) {
    let last = arr[arr.length - 1];

    arr[arr.length - 1] = target;

    let i = 0;

    while (arr[i] !== target) {
        i++;
    }

    arr[arr.length - 1] = last;

    if (i < arr.length - 1 || arr[arr.length - 1] === target) {
        return i;
    }

    return -1;
}

console.log(sentinalSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));

