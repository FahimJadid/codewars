/*
Title: Get the Middle character
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/
// 1
function getMiddle(word) {
  let length = word.length;
  if (length % 2 === 1) {
    return word[Math.floor(length / 2)];
  }
  return word[Math.floor(length / 2) - 1] + word[Math.floor(length / 2)];
}

// 2
function getMiddle(word) {
  let length = word.length;
  let midIndx = Math.floor(length / 2);

  if (length % 2 === 0) {
    return word.substring(midIndx - 1, midIndx + 1);
  } else {
    return word.charAt(midIndx);
  }
}

// 3
function getMiddle(word) {
  let middleIndex = Math.floor(word.length / 2);
  if (word.length % 2 === 1) {
    return word[middleIndex];
  }
  return word[middleIndex - 1] + word[middleIndex];
}

// 4
function getMiddle(word) {
  var length = word.length;
  var middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return [word.charAt(middleIndex - 1), word.charAt(middleIndex)];
  } else {
    return [word.charAt(middleIndex)];
  }
}

// 5
function getMiddle(word) {
  let length = word.length;
  let middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // Even length, return the middle 2 characters
    return word.slice(middleIndex - 1, middleIndex + 1);
  } else {
    // Odd length, return the middle character
    return word.charAt(middleIndex);
  }
}

// 6

function getMiddle(word) {
  var length = word.length;
  var middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return word.substr(middleIndex - 1, 2);
  } else {
    // Odd length, return the middle character
    return word.charAt(middleIndex);
  }
}
