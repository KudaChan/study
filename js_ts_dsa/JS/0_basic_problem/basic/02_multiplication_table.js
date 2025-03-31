// Given a number n, we need to print it's table.

function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

// multiplicationTable(5);

function multiplicationTableRecursive(num, i = 1) {
  if (i == 11)
    return;
  console.log(`${num} * ${i} = ${num * i}`);
  multiplicationTableRecursive(num, i + 1);
}

multiplicationTableRecursive(5);
