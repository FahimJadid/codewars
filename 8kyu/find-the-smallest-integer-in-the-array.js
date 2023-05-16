/*

TITLE: Find the smallest integer in the Array
DESCRIPTION:
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/

// My solutions

// 1
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let sorted = args.sort((a, b) => a - b);
    return sorted[0];
  }
}

// 2

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// 3

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a, b) => {
      return a - b;
    });
    return args[0];
  }
}

// 4

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

// 5

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((prev, curr) => {
      return prev < curr ? prev : curr;
    });
  }
}
