// @flow

const getSelectedPizza = () => 'Chicken';

const pizza: string = getSelectedPizza();
const price = 10;
const count = 1;
// const total = calculateTotal(pizza, count);

function calculateTotal(pizza, count) {
  return pizza * count;
}