/*
Title: List Filtering
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

// My solutions

// 1
function filter_list(l) {
  return l.filter((item) => typeof item === 'number');
}

// 2

function filter_list(l) {
  return l.filter((item) => {
    return typeof item === 'number';
  });
}

// 3
function filter_list(l) {
  let filtered = [];
  for (const item of l) {
    if (typeof item === 'number') {
      filtered.push(item);
    }
  }
  return filtered;
}

// 4

const filter_list = (l) => {
  return l.reduce((acc, cur) => {
    if (typeof cur === 'number') {
      acc.push(cur);
    }
    return acc;
  }, []);
};

// 5

function filter_list(l) {
  let filtered = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number') {
      filtered.push(l[i]);
    }
  }
  return filtered;
}
