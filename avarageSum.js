let sum = 0;
for (let i = 0; i < 15; i++) {
  let randomNum = Math.floor(Math.random() * 90) + 10; // генеруємо випадкове двозначне число
  sum += randomNum; // додаємо випадкове число до суми
}
let average = sum / 15; // знаходимо середнє арифметичне
console.log("Середнє арифметичне 15 випадкових двозначних чисел: " + average);
