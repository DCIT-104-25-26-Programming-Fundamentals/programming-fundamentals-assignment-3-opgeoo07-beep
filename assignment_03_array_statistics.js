// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

/**
 * Calculates the sum of all numbers in the array.
 * @param {number[]} numbers
 * @returns {number}
 */
function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

/**
 * Calculates the average of all numbers in the array.
 * @param {number[]} numbers
 * @returns {number}
 */
function calculateAverage(numbers) {
  const sum = calculateSum(numbers);
  return sum / numbers.length;
}

/**
 * Finds the maximum value in the array.
 * @param {number[]} numbers
 * @returns {number}
 */
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

/**
 * Finds the minimum value in the array.
 * @param {number[]} numbers
 * @returns {number}
 */
function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

function main() {
  const n = readlineSync.questionInt('How many numbers? ');

  if (n <= 0) {
    console.log('Error: Please enter a positive number of values.');
    return;
  }

  const numbers = [];
  for (let i = 0; i < n; i++) {
    const num = readlineSync.questionInt(`Enter number ${i + 1}: `);
    numbers.push(num);
  }

  const sum = calculateSum(numbers);
  const average = calculateAverage(numbers);
  const max = findMax(numbers);
  const min = findMin(numbers);

  console.log('\nResults:');
  console.log(`Sum:     ${sum}`);
  console.log(`Average: ${average}`);
  console.log(`Maximum: ${max}`);
  console.log(`Minimum: ${min}`);
}

main();

