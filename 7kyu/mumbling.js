/*
Title: Mumbling
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// 1
function accum(s) {
  return s
    .toLowerCase() // 'abcd'
    .split('') // ['a', 'b', 'c', 'd']
    .map((item, index) => item.toUpperCase() + item.repeat(index)) // for Map ['A', 'B', 'C', 'D'], for Repeat ['A', 'Bb', 'Ccc', 'Dddd']
    .join('-'); // 'A-Bb-Ccc-Dddd'
}

// 2

function accum(s) {
  return s
    .split('')
    .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
    .join('-');
}

// 3

function accum(s) {
  let letters = s.split('');
  let result = [];
  for (let i = 0; i < letters.length; i++) {
    result.push(
      letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase())
    );
  }
  return result.join('-');
}

// 4

function accum(s) {
  let result = [];
  for (i = 0; i < s.length; i++) {
    result.push(
      s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i)
    );
  }
  return result.join('-');
}
