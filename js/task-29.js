
// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. 
// Чётным считается число которое делится на 2 без остатка.

function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки
  const array = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
    array.push(i);
    }
  }
    return array;
    // Пиши код выше этой строки
  }
  
console.log(getEvenNumbers(2, 5))  // [2, 4].
console.log(getEvenNumbers(3, 11)) // [4, 6, 8, 10].
console.log(getEvenNumbers(6, 12)) // [6, 8, 10, 12].
console.log(getEvenNumbers(8, 8))  // [8].
console.log(getEvenNumbers(7, 7))  // [].
