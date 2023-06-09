/*
TITLE: Two to One
DESCRIPTION:
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// My solutions

function longest(s1, s2) {
  // your code
  const concatenated = s1.concat(s2).toLowerCase().split('').sort();
  let result = [];
  for (const char of concatenated) {
    if (!result.includes(char)) {
      result.push(char);
    }
  }
  return result.join('');
}

