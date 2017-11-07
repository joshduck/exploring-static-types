// What type of input is this function expecting?

function sum(items) {
  let out = null;
  for (let item of items) {
    total = total === null ? item : total + item;
  }
  return total;
}

sum([1, 2, 4]); // 7
sum(["a", "b", "c"]); // "abc"
sum("abc"); // "abc"
sum(
  (function* n() {
    yield 1;
    yield 2;
  })()
); // 3
