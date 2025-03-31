// Given two integers n and m (m != 0). Find the number closest to n and divisible by m. If there is more than one such number, then output the one having maximum absolute value.

function closestToNum(n, m) {
  let q = parseInt(n / m);

  let n1 = m * q;
  let n2 = n * m > 0 ? m * (q + 1) : m * (q - 1);

  if (Math.abs(n - n1) < Math.abs(n - n2)) {
    return n1;
    }
  return n2;
}

console.log(closestToNum(10, 3));
console.log(closestToNum(15, 4));
console.log(closestToNum(-23, 5));