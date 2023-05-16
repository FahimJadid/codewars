/*
TITLE: Even or Odd
DESCRIPTION:
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// My Solutions

// 1

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

function evenOrOdd(number) {
  const result = number % 2 === 0 ? 'Even' : 'Odd';
  return result;
}

// 2

function evenOrOdd(number) {
  return Math.abs(number) % 2 === 1 ? 'Odd' : 'Even';
}
