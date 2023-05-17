/*
TITLE: Returning Strings
DESCRIPTION:
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

// My Solutions

// 1

function greet(name) {
  //your code here
  return `Hello, ${name} how are you doing today?`;
}

// 2

function greet(name) {
  //your code here
  return 'Hello, ' + name + ' how are you doing today?';
}

// 3

const greet = (name) => `Hello, ${name} how are you doing today?`;
