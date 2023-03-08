function sumOfArithmeticProgression(start, end, step) {
  const n = Math.floor((end - start) / step) + 1;
  const sum = ((2 * start) + (n - 1) * step) * n / 2;
  return sum;
}

console.log(sumOfArithmeticProgression(1, 10, 2)); // 25
