/*
Title: Transportation on VacationAfter a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/

// My Solutions 

// 1


function getCarRentalCost(d) {
  // Base cost is $40 per day.
  let baseCost = d * 40;

  // If the rental period is 7 or more days, get a $50 discount.
  if (d >= 7) {
    baseCost -= 50;
  }

  // If the rental period is 3 or more days, get a $20 discount.
  else if (d >= 3) {
    baseCost -= 20;
  }

  // Return the total cost.
  return baseCost;
}

// 2

  function getCarRentalCost(d) {
  // Base cost is $40 per day.
  const baseCost = d * 40;

  // Get the discount amount.
  const discount = d >= 7 ? 50 : d >= 3 ? 20 : 0;

  // Return the total cost.
  return baseCost - discount;
}


  

  



 











