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
