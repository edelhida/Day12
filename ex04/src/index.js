function sumFibonacci(num) {
  var sum = 0;
  var fib = 0;

  while (sum < num) {
    var currentFib = fibo(fib);

    if (currentFib % 2 === 1 && currentFib <= num) {
      sum += currentFib;
    }

    fib++;
  }

  return sum;
}

function fibo(n) {
  if (n <= 1) return n;

  return fibo(n - 1) + fibo(n - 2);
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
