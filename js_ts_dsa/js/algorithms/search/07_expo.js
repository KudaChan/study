/*
 * Exponential Search
 * Exponential search involves two steps:
 *  * Find range where element is present
 *  * Do Binary Search in above found range.
 */

function exponentialSearch(arr, target) {
    if (arr[0] === target) {
        return 0;
    }

    let start = 1;
    let end = 1;

    while (end < arr.length && arr[end] <= target) {
        start = end;
        end *= 2;
    }

    return binarySearch(arr, start, end, target);
}

function binarySearch(arr, start, end, target) {
    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(exponentialSearch(arr, 5));
