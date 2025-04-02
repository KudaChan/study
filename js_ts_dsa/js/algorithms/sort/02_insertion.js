/*
 * Insertoin Sort
 * Insertion sort work by iteratively inserting each element of an unsorted list into
 * its correct position in a sorted portion of the list.
 * *  We start with the second element of the array as the first element is assumed to be sorted.
 * *  Compare the second element with the first element and swap if necessary.
 * *  Move to the third element and compare it with the sorted portion of the array.
 * *  Repeat this process until the entire array is sorted.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 *  Good for small data sets.
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 7, 6, 4]));

