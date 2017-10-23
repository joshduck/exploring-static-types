// What type of input is this function expecting?

function getTotal(items) {
  let total = 0;
  for (let item of items) {
    total += item;
  }
  return total;
}

console.log(getTotal("abc"));
console.log(getTotal([1, 2, 4]));