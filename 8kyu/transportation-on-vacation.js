/*
Title: Transportation on Vacation
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
