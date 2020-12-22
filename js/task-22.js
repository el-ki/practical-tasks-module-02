// Задание
// Дополни код функции createArrayOfNumbers(min, nax) так,
//     чтобы она возвращала массив всех целых чисел от значения min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i ++) {
      numbers.push(i);
  }
  return numbers;
}

console.log(createArrayOfNumbers(1, 3)) // [1, 2, 3].
console.log(createArrayOfNumbers(14, 17))  // [14, 15, 16, 17].
console.log(createArrayOfNumbers(29, 34))  // [29, 30, 31, 32, 33, 34].
