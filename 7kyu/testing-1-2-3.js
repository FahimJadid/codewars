/*
Title: Testing 1-2-3
DESCRIPTION:
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

// My Solutions

// 1
// const number = function (array) {
//   //your awesome code here
//   let lineNumber = 1;
//   let numberedArrays = [];
//   for (let arr of array) {
//     numberedArrays.push(`${lineNumber}: ${arr}`);
//     lineNumber++;
//   }
//   return numberedArrays;
// };

// 2
const number = (array) => {
  return array.map((line, index) => {
    return index + 1 + ': ' + line;
  });
};

// 3

const number = (array) => {
  return array.map((value, index) => `${++index}: ${value}`);
};

// 4
const number = (arr) => arr.map((val, idx) => `${idx + 1}: ${val}`);
