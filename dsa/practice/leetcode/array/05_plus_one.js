/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // return plusOneHelper(digits, 1); // solution by recursion
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1]++;
    return digits;
  }
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

function plusOneHelper(digits, carry = 0) {
  if (carry === 0) {
    return digits;
  }

  if (digits.length === 0) {
    digits.push(carry);
    return digits;
  }
  let lastDigit = digits.pop();
  let newLastDigit = lastDigit + carry;
  if (newLastDigit > 9) {
    lastDigit = 0;
    carry = 1;
    plusOneHelper(digits, carry);
    digits.push(lastDigit);
  } else {
    carry = 0;
    digits.push(newLastDigit);
  }
  return digits;
}

// Test Cases
console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([9, 9])); // [1, 0, 0]
console.log(plusOne([9])); // [1, 0]
console.log(plusOne([1, 0, 0, 0, 0])); // [1, 0, 0, 0, 1]
console.log(plusOne([0])); // [1]
console.log(plusOne([8, 9, 9])); // [9, 0, 0]

