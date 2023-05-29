/*
Title: String ends with?
DESCRIPTION:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

// Solution Using PREP Approach:

/*
Here's the solution to the problem 
using the PREP (Parameter, Return, Example, Pseudocode) 
approach in JavaScript:

Parameter: The function will take in two parameters:

# str (string): The main string to be checked.
# ending (string): The potential ending to be checked against the end of the main string.

Return: The function will return a boolean value (true or false):

# true if the main string ends with the given ending.
# false if the main string does not end with the given ending.
Example:

endsWith("Hello, world!", "world!"); // Output: true
endsWith("OpenAI", "AI"); // Output: true
endsWith("JavaScript", "Script"); // Output: true
endsWith("Hello, world!", "World"); // Output: false
endsWith("OpenAI", "Open"); // Output: false
endsWith("JavaScript", "java"); // Output: false

Pseudocode:
To solve this problem, 
we can use the endsWith(), substring(), lastIndexOf() method available in JavaScript. 

*/

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
