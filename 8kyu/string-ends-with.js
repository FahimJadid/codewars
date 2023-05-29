/*
Title: String ends with?
DESCRIPTION:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

// Solutions

// 1
function solution(str, ending) {
  // TODO: complete
  return str.endsWith(ending);
}

// 2

const solution = (str, ending) => str.endsWith(ending);

// 3

function solution(str, ending) {
  return str.substring(str.length - ending.length) === ending;
}

// 4

function solution(str, ending) {
  return str.lastIndexOf(ending) === str.length - ending.length;
}

// 5
