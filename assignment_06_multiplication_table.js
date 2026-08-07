// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

/**
 * Prints the multiplication table for a single number, from 1 to 12.
 * @param {number} num - The number to generate the table for.
 */
function printTable(num) {
  console.log(`Multiplication Table for ${num}:`);
  for (let i = 1; i <= 12; i++) {
    const product = num * i;
    console.log(`${num}  x  ${String(i).padEnd(2)} =  ${product}`);
  }
}

/**
 * Prints multiplication tables for every number from 1 to N,
 * separated by a divider line.
 * @param {number} n - The highest number to generate a table for.
 */
function printTablesUpTo(n) {
  for (let num = 1; num <= n; num++) {
    printTable(num);
    if (num < n) {
      console.log('---------------------------');
    }
  }
}

function main() {
  // ---------------------------------------------------------------------
  // PART A — Single Table
  // ---------------------------------------------------------------------
  console.log('=== PART A: Single Multiplication Table ===');
  const num = readlineSync.questionInt('Enter a number: ');
  printTable(num);

  // ---------------------------------------------------------------------
  // PART B — Bonus: Tables from 1 to N
  // ---------------------------------------------------------------------
  console.log('\n=== PART B: Tables from 1 to N ===');
  const n = readlineSync.questionInt('Enter N: ');

  if (!Number.isInteger(n) || n <= 0) {
    console.log('Error: N must be a positive integer.');
    return;
  }

  printTablesUpTo(n);
}

main();

