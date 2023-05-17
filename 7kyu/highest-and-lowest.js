/*

TITLE: Highest and Lowest
DESCRIPTION:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/

// My Solutions

// 1

function highAndLow(numbers) {
  const arr = numbers.split(' ');
  let maxNum = arr[0];
  let minNum = arr[0];

  for (let num of arr) {
    if (Number(num) > maxNum) {
      maxNum = num;
    }

    if (Number(num) < minNum) {
      minNum = num;
    }
  }

  return maxNum + ' ' + minNum;
}

// 2

function highAndLow(numbers) {
  const sorted = numbers
    .split(' ')
    .map((element) => Number(element))
    .sort((a, b) => b - a);
  return String(sorted[0] + ' ' + String(sorted[sorted.length - 1]));
}

// 3

function highAndLow(numbers) {
  const arr = numbers
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);
  return arr[0] + ' ' + arr[arr.length - 1];
}

// 4

function highAndLow(numbers) {
  const arr = numbers.split(' ').map(Number);
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

