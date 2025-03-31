// Given a number n, check whether it is even or odd. Return true for the even and false for odd.

function isEven(num) {
  return num & 1 ? false : true;
}

for ( let i = 0; i <= 10; i++ ) {
  console.log( isEven(i) );
}