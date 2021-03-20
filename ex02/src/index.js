function myCounter(n) {
  var arr = [];
  if (n <= 0) {
    return [];
  }
  var countArray = myCounter(n - 1);

  countArray.push(n);

  return countArray;
}

console.log(myCounter(-1));
console.log(myCounter(10).reverse());
console.log(myCounter(5).reverse());

module.exports = myCounter;
