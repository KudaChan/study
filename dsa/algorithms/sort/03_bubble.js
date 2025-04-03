/*
 * Bubble Sort
 * Bubble sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent
 * if they are in the wrong order.
 * This algorithm is not sutable for large data sets as its average and worst=casr time complexity
 * quite high.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

function bubbleSort(arr) {
  let len = arr.length;
  let i, j;
  let swapped;
  for (i = 0; i < len - 1; i++ ) {
    swapped = false;
    for (j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

const arr = [4, 2, 5, 1, 3, 6, 0, 7]
console.log(bubbleSort(arr));
