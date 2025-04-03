// Given two integers a1 and a2, the first and second terms of an Arithmetic Series respectively, the problem is to find the nth term of the series.

function nthTerm(a1, a2, n) {
  return a1 + (n - 1) * (a2 - a1);
}

console.log(nthTerm(2, 4, 5));
