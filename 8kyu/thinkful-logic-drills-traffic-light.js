/*
Title: Thinkful - Logic Drills: Traffic light
DESCRIPTION:
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/

// Solutions

function updateLight(current) {
  //your code here!
  if (current === 'green') {
    return 'yellow';
  } else if (current === 'yellow') {
    return 'red';
  } else if (current === 'red') {
    return 'green';
  } else {
    return 'invalid';
  }
}

function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow';
    case 'yellow':
      return 'red';
    case 'red':
      return 'green';
    default:
      return 'Invalid state';
  }
}

function updateLight(current) {
  const states = {
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  };
  return states[current] || 'Invalid';
}

function updateLight(currentState) {
  const states = ['green', 'yellow', 'red'];
  const currentIndex = states.indexOf(currentState);

  if (currentIndex !== -1) {
    const nextIndex = (currentIndex + 1) % states.length;
    return states[nextIndex];
  } else {
    return 'Invalid state';
  }
}

function updateLight(current) {
  return current === 'yellow'
    ? 'red'
    : current === 'green'
    ? 'yellow'
    : 'green';
}
