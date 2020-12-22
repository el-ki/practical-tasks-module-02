// Сумма чисел (цикл for)
// Задание
// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number)
// и возвращает сумму всех целых чисел от единицы и до этого числа.
//     Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
function calculateTotal(number) {
  // Пиши код ниже этой строки
    let total = 0

  for (let i = 1; i <= number; i += 1) {
      total += i
    }
    return total;

  // Пиши код выше этой строки
}

console.log(calculateTotal(1)) // 1.
console.log(calculateTotal(3)) // 6.
console.log(calculateTotal(7)) // 28.
console.log(calculateTotal(18))  //171.
console.log(calculateTotal(24))  //300.
