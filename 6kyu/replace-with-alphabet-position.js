/*
Title: Replace With Alphabet Position
DESCRIPTION:
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

// My solutions

// 1
function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowercaseTxt = text.toLowerCase();

  let result = '';
  for (let i = 0; i < lowercaseTxt.length; i++) {
    const char = lowercaseTxt[i];
    const index = alphabet.indexOf(char);
    if (index !== -1) {
      result += index + 1 + ' ';
    }
  }
  return result.trim();
}

// 2
function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowercaseTxt = text.toLowerCase();

  const result = Array.from(lowercaseTxt)
    .map((char) => alphabet.indexOf(char))
    .filter((index) => index !== -1)
    .map((index) => index + 1)
    .join(' ');

  return result;
}
