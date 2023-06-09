/*
Title: Categorize New Member
DESCRIPTION:
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

// My solutions

// 1

function openOrSenior(data) {
  const isSenior = (member) => {
    return member.age >= 55 && member.handicap > 7;
  };
  return data.map(isSenior);
}

// 2

function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? 'Senior' : 'Open'
  );
}

// 3
const openOrSenior = (data) => {
  function membership(member) {
    return member[0] >= 55 && member[1] > 7 ? 'Senior' : 'Open';
  }
  return data.map(membership);
};

// 4
function openOrSenior(data) {
  let result = [];
  data.map((member) => {
    if (member[0] >= 55 && member[1] > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  });
  return result;
}

// 5

const openOrSenior = (data) => {
  function membership(member) {
    return member[0] >= 55 && member[1] > 7 ? 'Senior' : 'Open';
  }
  return data.map(membership);
};

// 6
function openOrSenior(data) {
  let output = [];
  data.map((member) => {
    member[0] >= 55 && member[1] > 7
      ? output.push('Senior')
      : output.push('Open');
  });
  return output;
}
