// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * Reads an M x N matrix from the user, row by row.
 * @param {number} rows
 * @param {number} cols
 * @param {string} label - Label used in prompts (e.g., "Matrix A").
 * @returns {number[][]}
 */
function readMatrix(rows, cols, label = '') {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    let row;
    while (true) {
      const line = readlineSync.question(`Enter row ${i + 1}${label ? ` of ${label}` : ''}: `);
      row = line.trim().split(/\s+/).map(Number);

      if (row.length !== cols || row.some(isNaN)) {
        console.log(`Please enter exactly ${cols} numbers separated by spaces.`);
        continue;
      }
      break;
    }
    matrix.push(row);
  }
  return matrix;
}

/**
 * Prints a matrix in a neat, aligned grid format.
 * @param {number[][]} matrix
 */
function printMatrix(matrix) {
  // Find the widest value for column alignment
  let width = 0;
  for (const row of matrix) {
    for (const val of row) {
      width = Math.max(width, String(val).length);
    }
  }

  for (const row of matrix) {
    const line = row.map(val => String(val).padStart(width)).join('  ');
    console.log(line);
  }
}

/**
 * Computes the transpose of a matrix.
 * @param {number[][]} matrix - M x N matrix.
 * @returns {number[][]} N x M transposed matrix.
 */
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

/**
 * Adds two matrices of the same size element-wise.
 * @param {number[][]} a
 * @param {number[][]} b
 * @returns {number[][]}
 */
function addMatrices(a, b) {
  const rows = a.length;
  const cols = a[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(a[i][j] + b[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

/**
 * Multiplies matrix A (M x N) by matrix B (N x P).
 * @param {number[][]} a
 * @param {number[][]} b
 * @returns {number[][]} M x P product matrix.
 */
function multiplyMatrices(a, b) {
  const m = a.length;
  const n = b.length;      // = a[0].length
  const p = b[0].length;
  const result = [];

  for (let i = 0; i < m; i++) {
    const newRow = [];
    for (let j = 0; j < p; j++) {
      let sum = 0;
      for (let k = 0; k < n; k++) {
        sum += a[i][k] * b[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }

  return result;
}

function main() {
  // ---------------------------------------------------------------------
  // PART A — Transpose
  // ---------------------------------------------------------------------
  console.log('=== PART A: Transpose a Matrix ===');
  const rowsA = readlineSync.questionInt('Enter number of rows: ');
  const colsA = readlineSync.questionInt('Enter number of columns: ');
  const matrixA = readMatrix(rowsA, colsA);

  console.log('\nOriginal Matrix:');
  printMatrix(matrixA);

  console.log('\nTransposed Matrix:');
  printMatrix(transposeMatrix(matrixA));

  // ---------------------------------------------------------------------
  // PART B — Addition
  // ---------------------------------------------------------------------
  console.log('\n=== PART B: Add Two Matrices ===');
  const addRows = readlineSync.questionInt('Enter number of rows for both matrices: ');
  const addCols = readlineSync.questionInt('Enter number of columns for both matrices: ');

  console.log('\nEnter Matrix 1:');
  const matrix1 = readMatrix(addRows, addCols);

  console.log('\nEnter Matrix 2:');
  const matrix2 = readMatrix(addRows, addCols);

  console.log('\nSum:');
  printMatrix(addMatrices(matrix1, matrix2));

  // ---------------------------------------------------------------------
  // PART C — Multiplication
  // ---------------------------------------------------------------------
  console.log('\n=== PART C: Multiply Two Matrices ===');
  const mRows = readlineSync.questionInt('Enter number of rows for Matrix A: ');
  const mCols = readlineSync.questionInt('Enter number of columns for Matrix A (= rows of B): ');
  const pCols = readlineSync.questionInt('Enter number of columns for Matrix B: ');

  console.log('\nEnter Matrix A:');
  const matA = readMatrix(mRows, mCols, 'Matrix A');

  console.log('\nEnter Matrix B:');
  const matB = readMatrix(mCols, pCols, 'Matrix B');

  console.log('\nProduct (A x B):');
  printMatrix(multiplyMatrices(matA, matB));
}

main();

