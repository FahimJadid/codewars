/*
TITLE: L1: Set Alarm
DESCRIPTION:
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/

//  My solutions

// 1
function setAlarm(employed, vacation) {
  // Returns True if employed and not on vacation, False otherwise.
  if (employed && !vacation) {
    return true;
  } else {
    return false;
  }
}

// 2

function setAlarm(employed, vacation) {
  return employed && !vacation ? true : false;
}

const setAlarm = (employed, vacation) => employed && !vacation;

const setAlarm = (employed, vacation) => {
  return employed > vacation;
};

function setAlarm(employed, vacation) {
  return employed === true && vacation === false ? true : false;
}
