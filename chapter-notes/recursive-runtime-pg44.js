/**
 * We are looking at this function f that takes in an input of int n and returns an int.
 * This function will recursively return f(n-1) + f(n-1) until it hits
 * base case of n <= 1.
 */

const f = function(n) {
  if (n <= 1) {
    return 1;
  }
  return f(n - 1) + f(n - 1);
}
//returns a number

console.log(f(4));
//             f4
//           f3 + f3
//       f2 + f2    f2 + f2
// 1 + 1  1 + 1  1 + 1  1 + 1

// Nodes at max depth is 2^(n-1)
// Total nodes is 2^(n+1) - 1. Expanded out =  2^n + 2^1 - 1 
// The exponent n+1 accounts for the zero index of the binary tree. The -1 accounts for the first level (level 0) having only one node.

// Q1. Are there integers in JavaScript?
// Simply no, there is only number type. There is BigInt, but is not compatible with number. Number itself can handle math up to the integer value limits. 

// Q2. What is the number type in JS?
// Double precision 64-bit binary format IEEE 754 value. It is capable of storing positive floating-point numbers between 2^-1074 (Number.MIN_VALUE) and 2^1024 (Number.MAX_VALUE) as well as negative floating-point numbers between -(2^-1074) and -(2^1024), but it can only safely store integers in the range -(2^53 − 1) (Number.MIN_SAFE_INTEGER) to 2^53 − 1 (Number.MAX_SAFE_INTEGER).

// JS Data types
// Primitive values (immutable datum represented directly at the lowest level of the language)
// Boolean type
// Null type
// Undefined type
// Number type
// BigInt type
// String type
// Symbol type
// Objects (collections of properties)

// console.log(Number.MAX_VALUE * 1.000000000000001)
// anything above Number.MAX_VALUE returns Infinity
