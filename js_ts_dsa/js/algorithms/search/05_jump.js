/*
 * Jump Search
 * Jump search is a searching algorithm for sorted arrays where we try to reduce the number of
 * comparisons performed in the linear search by jumping ahead by fixed steps or skipping some
 * elements in place of searching all elements.
 */

function jumpSearch(arr, target) {
    let step = Math.floor(Math.sqrt(arr.length));
    let prev = 0;
    while (arr[Math.min(step, arr.length) - 1] < target) {
        prev = step;
        step += step;
        if (prev >= arr.length) {
            return -1;
        }
    }

    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, arr.length)) {
            return -1;
        }
    }

    if (arr[prev] === target) {
        return prev;
    }

    return -1;
}

const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
console.log(jumpSearch(arr, 55));
