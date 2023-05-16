/*
Title: Counting Sheep
DESCRIPTION:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

// 1
function countSheeps(arrayOfSheep) {
  let bucket = 0;

  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      bucket += 1;
    }
  }
  return bucket;
}

// 2

function countSheeps(array) {
  let counter = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      counter.push(array[i]);
    }
  }
  return counter.length;
}

// 3

function countSheeps(arrayOfSheep) {
  const sheeps = arrayOfSheep.filter((sheep) => sheep === true);
  return sheeps.length;
}

// 4

function countSheeps(arrayOfSheep) {
  const sheeps = arrayOfSheep.filter(Boolean);
  return sheeps.length;
}

// 5

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((sum, curr) => sum + curr, 0);
}
