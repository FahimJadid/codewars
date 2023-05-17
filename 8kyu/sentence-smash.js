/*
TITLE: Sentence Smash
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

// My solutions

// 1

function smash(words) {
  const sentence = words.join(' ');
  return sentence;
}

// 2

const smash = (words) => words.join(' ');

// 3

function smash(words) {
  let sentence = '';
  for (const word of words) {
    sentence += word + ' ';
  }
  return sentence;
}

// 4

function smash(words) {
  let sentence = '';
  for (let i = 0; i < words.length; i++) {
    sentence += words[i];
    if (i !== words.length - 1) {
      sentence += ' ';
    }
  }
  return sentence;
}
