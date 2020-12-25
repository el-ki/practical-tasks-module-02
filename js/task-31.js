// Задание
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       break;
//     }
//   }

//   return number;
    
      let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return number;
    }
  }

  // Пиши код выше этой строки
}


console.log(findNumber(2, 6, 5))  // 5.
console.log(findNumber(8, 17, 3)) // 9.
console.log(findNumber(6, 9, 4))  // 8.
console.log(findNumber(16, 35, 7))  // 21.
