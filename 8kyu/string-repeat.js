/*
Title: String Repeat
DESCRIPTION:
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// Solutions

/*
Parameter: The function will take in two parameters:

# n (integer): The number of times the string s should be repeated.
# s (string): The string to be repeated.

Return: The function will return a string that is the repetition of s exactly n times.

Example:

repeatString(3, "Hello"); // Output: "HelloHelloHello"
repeatString(5, "OpenAI"); // Output: "OpenAIOpenAIOpenAIOpenAIOpenAI"
repeatString(1, "JavaScript"); // Output: "JavaScript"

PseudoCode:

Initialize an empty string    
Repeat the string 's' exactly 'n' times
Return the repeated string

*/

// 1
function repeatStr(n, s) {
  return s.repeat(n);
}

// 2

function repeatStr(n, s) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}
