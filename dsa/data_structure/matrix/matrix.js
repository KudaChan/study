/*
 * Matrix or Grid or 2D Array
 * Matrix or Grid is a two-deimensional array mostly used in mathematical and scientific calculation.
 * It is also considered as an array of arrays, where array at each index has the same size.
 */

class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.matrix = [];
        for (let i = 0; i < this.rows; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < this.cols; j++) {
                let ele = window.prompt(`Enter element at index ${i}, ${j}`);
                this.matrix[i][j] = ele;
            }
        }
    }
}

function main() {
    let rows = window.prompt("Enter number of rows");
    let cols = window.prompt("Enter number of columns");
    let matrix = new Matrix(rows, cols);
    console.log(matrix.matrix);
}

main();

