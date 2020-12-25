
// Задание
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
function calculateTotalPrice(order) {
  let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
    
  for (const item of order) {
    total += item;
  }
  return total;
}


console.log(calculateTotalPrice([12, 85, 37, 4])) // 138.
console.log(calculateTotalPrice([164, 48, 291])) // 503.
console.log(calculateTotalPrice([412, 371, 94, 63, 176])) // 1116.
console.log(calculateTotalPrice([])) // 0.
