/*

TITLE: Century from Year
DESCRIPTION:
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

*/

// My solutions

// 1
function century(year) {
  let count = 0;
  for (let i = 0; i < year; i++) {
    if (i % 100 === 0) {
      count++;
    }
  }
  return count;
}

century(1);
century(88);
century(1988);
century(2000);
century(2001);

// 2

function century(year) {
  return Math.ceil(year / 100);
}

century(1);
century(88);
century(1988);
century(2000);
century(2001);
