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

// 3

function alphabetPosition(text) {
  const lowercaseText = text.toLowerCase();
  let result = '';

  for (const char of lowercaseText) {
    if (char >= 'a' && char <= 'z') {
      const position = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      result += position + ' ';
    }
  }

  return result.trim();
}

// 4
function alphabetPosition(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) result += code - 64 + ' ';
  }

  return result.slice(0, result.length - 1);
}

// 5

function alphabetPosition(text) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  return text
    .toLowerCase()
    .split('')
    .filter((t) => letters.indexOf(t) > -1)
    .map((t) => letters.indexOf(t) + 1 || '')
    .join(' ');
}
