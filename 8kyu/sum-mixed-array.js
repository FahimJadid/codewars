/*
Title: Sum Mixed Array
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

// My solutions

// 1
function sumMix(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  return sum;
}

// 2
const sumMix = (x) => {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    let value = +x[i]; // convert to number by unary + operator
    sum += value;
  }
  return sum;
};

// 3

function sumMix(x) {
  return x.reduce((acc, curr) => acc + Number(curr), 0);
  //   return x.reduce((acc, curr) => acc + +(curr), 0);
}

//  4
function sumMix(x) {
  return x.map((value) => +value).reduce((acc, cur) => acc + cur);
}

//  5

function sumMix(x) {
  let sum = 0;
  x.map((value) => (sum += Number(value)));
  return sum;
}
