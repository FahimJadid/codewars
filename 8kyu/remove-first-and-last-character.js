/*
TITLE: Remove First and Last Character
DESCRIPTION:
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

// My solutions

// 1

const removeChar = (str) => {
  return str.slice(1, -1);
};

// 2

function removeChar(str) {
  return str.slice(1, str.length - 1);
}

// 3

function removeChar(str) {
  //You got this!
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i !== 0 && i !== str.length - 1) {
      newStr += str[i];
    }
  }
  return newStr;
}

// 4

function removeChar(str) {
  let newStr = '';
  for (let i = 1; i < str.length - 1; i++) {
    newStr += str[i];
  }
  return newStr;
}
