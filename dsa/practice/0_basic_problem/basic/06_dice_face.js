// You are given a cubic dice with 6 faces. All the individual faces have a number printed on them. The numbers are in the range of 1 to 6, like any ordinary dice. You will be provided with a face of this cube, your task is to guess the number on the opposite face of the cube.

function diceFace(num) {
  return 7 - num;
}

console.log(diceFace(1));
console.log(diceFace(6));
console.log(diceFace(2));
