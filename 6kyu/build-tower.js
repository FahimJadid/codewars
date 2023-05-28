/*
Title: Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

// My solutions

// 1

function towerBuilder(floors) {
  const tower = [];

  for (let i = 1; i <= floors; i++) {
    const spaces = ' '.repeat(floors - i);
    const blocks = '*'.repeat(i * 2 - 1);
    tower.push(spaces + blocks + spaces);
  }

  return tower;
}

// 2

function towerBuilder(floors) {
  return Array.from({ length: floors }, (num, i) => {
    const spaces = ' '.repeat(floors - i - 1);
    const stars = '*'.repeat(i * 2 + 1);
    return spaces + stars + spaces;
  });
}

// 3

function towerBuilder(floors) {
  let tower = [];
  for (let i = 0; i < floors; i++) {
    tower.push(
      ' '.repeat(floors - i - 1) +
        '*'.repeat(i * 2 + 1) +
        ' '.repeat(floors - i - 1)
    );
  }
  return tower;
}

// 4

function towerBuilder(floors) {
  let spaces,
    stars,
    tower = [];
  for (let i = 1; i <= floors; i++) {
    spaces = ' '.repeat(floors - i);
    stars = '*'.repeat(2 * i - 1);
    tower.push(`${spaces}${stars}${spaces}`);
  }
  return tower;
}

// 5
function towerBuilder(floors) {
  let arr = [];
  for (let i = 0; i < floors; i++) {
    arr[i] =
      ' '.repeat(floors - i - 1) +
      '*'.repeat(i * 2 + 1) +
      ' '.repeat(floors - i - 1);
  }
  return arr;
}
