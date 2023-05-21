/*
Title: Is this Triangle?
DESCRIPTION:
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

// My solutions

// 1
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

// 2

function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if (a < b + c && b < a + c && c < a + b) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// 3
function isTriangle(a, b, c) {
  [a, b, c] = [a, b, c].sort((x, y) => x - y);

  return a + b > c;
}

// 4
const isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2;

// 5
const isTriangle = (a, b, c) => {
  const angles = [a, b, c].sort();
  return angles[0] + angles[1] > angles[2];
};

//   6
function isTriangle(a, b, c) {
  var max = Math.max(a, b, c);
  return a + b + c - max > max;
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function isTriangle(a, b, c) {
  return b + c > a && a + b > c && a + c > b;
}

function isTriangle(a, b, c) {
  const s = a / 2 + b / 2 + c / 2;
  return s * (s - a) * (s - b) * (s - c) > 0;
}

function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) return true;
  else return false;
}

function isTriangle(a, b, c) {
  return a + b > c && Math.abs(a - b) < c;
}
