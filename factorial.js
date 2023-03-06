function factorial(num) {
  // якщо num менше за 0, факторіал не визначений
  if (num < 0) {
    return 'факторіал не визначений';
  }
  // якщо num дорівнює 0, факторіал дорівнює 1
  else if (num === 0) {
    return 1;
  }
  // інакше, використовуємо цикл for, щоб обчислити факторіал
  else {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

console.log(factorial(5)); // повинно вивести 120
console.log(factorial(0)); // повинно вивести 1
console.log(factorial(-1)); // повинно вивести 'факторіал не визначений'