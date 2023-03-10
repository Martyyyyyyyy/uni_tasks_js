// Generate 50 random integers between 0 and 100 inclusive
function generateRandomNumbers() {
  let numbers = [];

  for (let i = 0; i < 50; i++) {
    let randomNum = Math.floor(Math.random() * 101);
    numbers.push(randomNum);
  }

  return numbers;
}

// Filter out the numbers that are not multiples of 4
function getMultiplesOfFour(numbers) {
  let multiplesOfFour = numbers.filter(num => num % 4 === 0);
  return multiplesOfFour;
}

// Find the maximum value among the multiples of 4
function findMaxNumber(numbers) {
  let maxNumber = Math.max(numbers);
  return maxNumber;
}

let array = generateRandomNumbers();
console.log(array);
let array_2 = getMultiplesOfFour(array);
console.log(array_2);
let result = findMaxNumber(array_2);
console.log(result);