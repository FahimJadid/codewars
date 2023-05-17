/*

Title: Sum of two lowest positive integers
Description:
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

// My solutions

// 1
function sumTwoSmallestNumbers(numbers) {
  //Code here
  let sortedArray = numbers.sort((a, b) => a - b);
  return sortedArray[0] + sortedArray[1];
}

// 2
function sumTwoSmallestNumbers(numbers) {
  //Code here
  return numbers
    .sort((num1, num2) => num1 - num2)
    .slice(0, 2)
    .reduce((acc, cur) => acc + cur);
}

// 3
const sumTwoSmallestNumbers = (numbers) => {
  //Code here
  return numbers
    .sort((num1, num2) => num1 - num2)
    .slice(0, 2)
    .reduce((acc, cur) => acc + cur);
};

// 4
const sumTwoSmallestNumbers = (numbers) => {
  let lowest = Math.min(...numbers);
  numbers.splice(numbers.indexOf(lowest), 1);
  let secondLowest = Math.min(...numbers);
  return lowest + secondLowest;
};

// 5

function sumTwoSmallestNumbers(numbers) {
  let lowest = numbers[0];
  let secondLow = numbers[1];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
      secondLow = lowest;
      lowest = numbers[i];
    } else if (numbers[i] < secondLow) {
      secondLow = numbers[i];
    }
  }
  return lowest + secondLow;
}

// 6

function sumTwoSmallestNumbers(numbers) {
  let lowest = numbers[0];
  let secondLow = numbers[1];

  for (let i = 1; i < numbers.length; i++) {
    num = numbers[i];
    if (num < lowest) {
      secondLow = lowest;
      lowest = num;
    } else if (num < secondLow) {
      secondLow = num;
    }
  }
  return lowest + secondLow;
}
