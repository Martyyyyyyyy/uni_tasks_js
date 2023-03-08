function fibonacci(num) {
  let fib = [0, 1];
  let i = 2;
  while (fib[i - 1] + fib[i - 2] <= num) {
    fib[i] = fib[i - 1] + fib[i - 2];
    i++;
  }
  return fib;
}

console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacci(20)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacci(50)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]