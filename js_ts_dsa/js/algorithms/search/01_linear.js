/**
 * Linear Search search also known as Sequential Search.
 *
 * Iterate over all the elements of the array and check whether the element is present or not.
 * If the element is present then return the index of the element else return -1.
 *
 * conplixity:
 *  Time: O(n)
 *  Space: O(1)
 */

function linerSearch(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == target)
            return i;
        }
    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(linerSearch(arr, 5));
