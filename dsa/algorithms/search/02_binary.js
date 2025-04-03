/**
 * Binary search
 * Used to search element in the sorted array.
 *
 * This algo work by by spliting the array in half and check if the target is in the left or right half.
 * Keep repeting until the element is found or the elemt is not found.
 *
 * @param arr - shorted array.
 * @param target - element to be searched.
 * @returns index of element if found else retun -1
 *
 * Complixity:
 *    Time: O(log n)
 *    Space: O(1)
 */


function binarySearchHelper(arr, target, left, right) {
    if (left > right) return -1;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) {
        return mid;
    }
    if (arr[mid] < target) {
        return binarySearchHelper(arr, target, mid + 1, right)
    } else {
        return binarySearchHelper(arr, target, left, mid - 1)
    }
}

function binarySearch(arr, target) {
    return binarySearchHelper(arr, target, 0, arr.length - 1);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 10));
