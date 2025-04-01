/*
 * Fibonacci Search
 * Fibonacci search is a divide-and-conquer algorithm similar to binary search.
 * Fibonacci search divides given array array into unequal parts.
 */

function fibonacciSearch(arr, target) {
    let fib2 = 0;
    let fib1 = 1;

    let fib = fib2 + fib1;

    while (fib < arr.length) {
        fib2 = fib1;
        fib1 = fib;
        fib = fib2 + fib1;
    }

    let offset = -1;

    while (fib > 1) {
        let i = Math.min(offset + fib2, arr.length - 1);

        if (arr[i] < target) {
            fib = fib1;
            fib1 = fib2;
            fib2 = fib - fib1;
            offset = i;
        } else if (arr[i] > target) {
            fib = fib2;
            fib1 = fib1 - fib2;
            fib2 = fib - fib1;
        } else {
            return i;
        }
    }

    if (fib1 && arr[arr.length - 1] == target) {
        return arr.length - 1;
    }

    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(fibonacciSearch(arr, 10));
 
