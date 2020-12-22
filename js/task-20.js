// Подсчёт суммы покупки
// Задание
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order -
//     массив чисел, и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
    for (let i = 0; i < order.length; i ++) {
        total += order[i];

  }

  // Пиши код выше этой строки
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4])) //  138.
console.log(calculateTotalPrice([164, 48, 291]))  // 503.
console.log(calculateTotalPrice([412, 371, 94, 63, 176]))  // 1116.
