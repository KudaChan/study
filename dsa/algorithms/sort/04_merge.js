/*
 * Merge Sort
 * Merge sort is a sorting algorithm that folloes the divide-and-conquer pattern.
 * It works by recursively dividing the input array into smaller subarrays and sorting those
 * subarrays then merging them back together to obtain the sorted array.
 * In simple terms, the process of merge sort is to divide the array into two halves.
 * sort each half and then merge the sorted halves back together. This process is repeated until
 * the entire array is sorted.
 *
 * Time complixity: O(n log n)
 * Space complixity: O(n)
 */

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  if (left.length === 0) {
    return right;
  }
  if (right.length === 0) {
    return left;
  }

  const merge = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merge.push(left[leftIndex]);
      leftIndex++;
    } else {
      merge.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return merge.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const arr = [5, 3, 8, 4, 2, 7, 1, 6];
console.log(mergeSort(arr));
