/*
 * Quick Sort
 * Quick sort is a sorting algorithm based on the Divide and Conquer that
 * picks and element as a pivot and partitions the given array around the picked
 * pivot by placing the pivot in its correct position in the sorted array.
 *
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 */

function quickSort(arr, left, right) {
  if (left < right) {
    pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot =arr[right];
  let temp = 0;
  for (let i = left; i <= right; i++) {
    if (arr[i] < pivot){
      swap(arr, left, i);
      left++;
    }
  }
  swap(arr, left, right);
  return left;
}

function swap (arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

const arr = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
console.log(quickSort(arr, 0, arr.length - 1));
