/*
 * Ternary Search
 * Ternary Search is a divide and conquer algorithm similar to Binary Search. Unlike Binary Search,
 * it divides the array into three parts and determines which has the key.
 */

function ternarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    let mid1 = Math.floor(start + (end - start) / 3);
    let mid2 = Math.floor(end - (end - start) / 3);

    while (start <= end) {
        if (arr[mid1] === key) {
            return mid1;
        } else if (arr[mid2] === key) {
            return mid2;
        } else if (key < arr[mid1]) {
            end = mid1 - 1;
        } else if (key > arr[mid2]) {
            start = mid2 + 1;
        } else {
            start = mid1 + 1;
            end = mid2 - 1;
        }
        mid1 = Math.floor(start + (end - start) / 3);
        mid2 = Math.floor(end - (end - start) / 3);
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(ternarySearch(arr, 5));
