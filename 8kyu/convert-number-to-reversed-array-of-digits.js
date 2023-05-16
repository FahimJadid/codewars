/*
TITLE:
DESCRIPTION:
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

// My solutions

// 1
function digitize(n) {
  const answer = [];
  const str = n.toString();

  for (item of str) {
    answer.unshift(parseInt(item));
  }

  return answer;
}

digitize(35231);

// 2
function digitize(n) {
  return ('' + n)
    .split('')
    .map((ele) => ele * 1)
    .reverse();
}

digitize(35231);
