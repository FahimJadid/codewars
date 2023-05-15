// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// My Solutions

// 1
const stringToNumber = (str) => {
  // put your code here
  const conversion = Number(str);
  return conversion;
};

console.log(stringToNumber('12345678'));

// 2
const stringToNumber = (str) => {
  return parseInt(str);
};

// 3

const stringToNumber = (str) => {
  return +str;
};

// 4

const stringToNumber = (str) => {
  return parseFloat(str);
};

// 5

const stringToNumber = (str) => {
  return Math.floor(str);
};

// 6

const stringToNumber = (str) => {
  return str * 1;
};

// 7

const stringToNumber = (str) => {
  return ~~str;
};

// 8
const stringToNumber = function (str) {
  return Number(str);
};
