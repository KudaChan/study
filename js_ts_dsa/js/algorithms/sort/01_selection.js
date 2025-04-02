/*
 * Selection Sort
 * Selection sort is a comparison-based sorting algorithm.
 * It sort an array by repeatedly selection the smallest element from the unsorted portion and swapping it with the first unsorted element.
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
  }
  return arr;
}

console.log(selectionSort([5, 3, 1, 2, 4]));
