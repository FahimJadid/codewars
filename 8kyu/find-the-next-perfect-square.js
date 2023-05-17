/*
TITLE: Find the next perfect square!
DESCRIPTION:
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

// 1
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  const rootOfSq = Math.sqrt(sq);
  if (rootOfSq % 1 === 0) {
    return Math.pow(rootOfSq + 1, 2);
  }
  return -1;
}

// 2
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

// 3
function findNextSquare(sq) {
  const root = Math.sqrt(sq);
  return root % 1 ? -1 : ++root * root;
}

// 4

function findNextSquare(sq) {
  let num = Math.sqrt(sq);
  if (Math.round(num) === num) {
    return Math.pow(++num, 2);
  }
  return -1;
}
