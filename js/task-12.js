// Задание
// Дополни код функции makeStringFromArray(array, delimeter) так,
//     чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки
  string = array.join(delimeter);
  // Пиши код выше этой строки
  return string;
}

console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' ')) // 'Манго спешит на поезд'.
console.log(makeStringFromArray(['М', 'а', 'н', 'г', 'о'], '')) // 'Манго'.
console.log(makeStringFromArray(['лучшее', 'за', 'неделю'], '_')) // 'лучшее_за_неделю'.