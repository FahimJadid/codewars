/*
Title: Remove string spaces
DESCRIPTION:
Write a function that removes the spaces from the string, then return the resultant string.
*/

/*

Here's the solution to the problem using the PREP (Parameter, Return, Example, Pseudocode) approach in JavaScript:

Parameter: The function will take in one parameter:

# str (string): The string from which spaces need to be removed.
# Return: The function will return a new string with spaces removed.

Example:
removeSpaces("Hello, world!"); // Output: "Hello,world!"
removeSpaces("  Open  AI  "); // Output: "OpenAI"
removeSpaces("NoSpaces"); // Output: "NoSpaces"

Pseudocode:
Need to split the input string into an array of words which splits the string at each space. 
Then, we need to join the array of words back into a single string.
Then result returned as the output.
*/

// Solution 1: Using split() and join()

function noSpace(x) {
  return x.split(' ').join('');
}

// Solution 2: Using a loop to iterate over the characters and build the resultant string

function noSpace(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      result += str[i];
    }
  }
  return result;
}

// Solution 5: Using split() and reduce()
function noSpace(str) {
  return str.split(' ').reduce((acc, word) => acc + word);
}

// Solution 4: Using filter() and join() with an arrow function
function noSpace(str) {
  return str
    .split('')
    .filter((char) => char !== ' ')
    .join('');
}
