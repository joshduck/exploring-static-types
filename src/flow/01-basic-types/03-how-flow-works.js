// @flow

const pizza: string = "Chicken";
const price = 10;
const count = 1;

const total = calculateTotal(pizza, count);

function calculateTotal(price, count) {
  return price * count;
}
