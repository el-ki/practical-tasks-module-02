
// Задание
// Функция checkFruit(fruit) принимает строку с названием фрукта(параметр fruit),
//     и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit);
}


console.log(checkFruit('слива')) // true.
console.log(checkFruit('мандарин')) // false.
console.log(checkFruit('груша')) // true.
console.log(checkFruit('Груша')) // false.
console.log(checkFruit('яблоко')) // true.
