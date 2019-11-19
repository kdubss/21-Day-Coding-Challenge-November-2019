// ./day19.js
/*
Challenge #19 - Pumpkin Spice and Everything Nice

This is the Codeville Fall Festival, and nothing says fall more than
pumpkin spice. At this year's festival, there will be three ways
for the people of Codeville to get their pumpkin spice fix:

Pumpkin pie
Pumpkin spice lattes
Pumpkin spice macarons

Instructions

Each item differs in both cost and the grams of pumpkin spice per serving.
To help festival-goers maximize their pumpkin spice consumption, help them
determine the maximum amount of pumpkin spice they can ingest with the
amount of money they are bringing to the festival.

A slice of pumpkin pie costs $5 each, and include a whopping 30g of pumpkin
spice
Pumpkin spice lattes cost $3 each, and include 15g of pumpkin spice
Pumpkin spice macarons cost $1 each, and include 3g of pumpkin spice

We need to write a function, pumpkinSpice(money) that will take in a
number, or how much the festival-goer has to spend on treats, and return an
array with the 4 elements as outlined below:

The first element should represent how many slices of pumpkin pie the
client can buy
The second element should represent how many pumpkin spice lattes the
client can buy
The third element should represent how many pumpkin spice macarons the
client can buy
The fourth element should represent how many grams of pumpkin spice the
client will be buying

Our function should start by calculating how many slices of pumpkin pie
we can buy. Then, we'll want to use the remaining money to do the
calculations for the lattes, followed lastly by the macarons.
*/

const pumpkinSpice = money => {
  const pumpkin_spice = [
    { type: 'pie', cost: 5, spice: 30 },
    { type: 'latte', cost: 3, spice: 15 },
    { type: 'macaron', cost: 1, spice: 3}
  ];
  const return_spice = Array(4).fill(0);

  let remaining_money;
  let total_spice = 0;
  pumpkin_spice.map(s => {
    switch (s.type) {
      case 'pie':
        return_spice[0] = Math.floor(money / s.cost);
        remaining_money = money - s.cost * return_spice[0];
        remaining_money
        total_spice = total_spice + s.spice * return_spice[0];
        break;
      case 'latte':
        return_spice[1] = Math.floor(remaining_money / s.cost);
        remaining_money = remaining_money - s.cost * return_spice[1];
        total_spice = total_spice + s.spice * return_spice[1];
        break;
      case 'macaron':
        return_spice[2] = Math.floor(remaining_money / s.cost);
        remaining_money = remaining_money - s.cost;
        total_spice = total_spice + s.spice * return_spice[2];
        break;
      default:
        return;
    }
  });

  return return_spice;
};

const money = 9; // Should return [1, 1, 1, 48]

console.log(pumpkinSpice(money));