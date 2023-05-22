/*

Title: Disemvowel Trolls
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

// My solutions

// 1
function disemvowel(str) {
  let newStr = '';
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (const letter of str) {
    if (!vowels.includes(letter)) {
      newStr += letter;
    }
  }
  return newStr;
}

//2

const disemvowel = (str) =>
  str
    .split('')
    .filter((char) => 'aeiouAEIOU'.indexOf(char) === -1)
    .join('');

// 3
const disemvowel = (str) => {
  let vowels = 'aeiou';
  return str
    .split('')
    .map((char) => (vowels.indexOf(char.toLowerCase()) === -1 ? char : ''))
    .join('');
};

// 4
const disemvowel = (str) => {
  return str
    .split('')
    .map((char) => ('aeiou'.indexOf(char.toLowerCase()) === -1 ? char : ''))
    .join('');
};
