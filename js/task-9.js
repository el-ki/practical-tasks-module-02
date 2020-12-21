// Задание
// Напиши функцию getExtremeElements(array) которая принимает один параметр array -
//     массив элементов произвольной длины.Функция должна возвращать массив из двух элементов -
//         первого и последнего элемента параметра array.


function getExtremeElements(array) {

  return [array[0], array[array.length-1]];  

}
  

console.log(getExtremeElements([1, 2, 3, 4, 5])) // [1, 5].
console.log(getExtremeElements(['Земля', 'Марс', 'Венера'])) // ['Земля', 'Венера'].
console.log(getExtremeElements(['яблоко', 'персик', 'груша', 'банан'])) // ['яблоко', 'банан'].