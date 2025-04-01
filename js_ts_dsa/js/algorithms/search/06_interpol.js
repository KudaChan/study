/*
 * Interpolation Search
 * The interpolation search is an improvement over binary search for instances, where the values
 * in a sorted array are uniformly distributed. Binary search always goes to middle element to
 * check. On the other hand interpolation search may go to different locations according to the
 * value of key being searched. For example if the value of key is closer to the last element,
 * interpolation search is likely to start search toward the end side.
 */

function interpolationSearch(arr, value) {
    let low = 0;
    let high = arr.length - 1;

    let pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (value - arr[low]));

    while (arr[pos] !== value && low <= high) {
        if (value > arr[pos]) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
        pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (value - arr[low]));
    }

    return arr[pos] === value ? pos : -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(interpolationSearch(arr, 10));
