// Задание
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива
// Тесты
// Объявлена переменная firstElement.
// Значение переменной firstElement это строка 'яблоко'.
// Объявлена переменная secondElement.
// Значение переменной secondElement это строка 'слива'.
// Объявлена переменная lastElement.
// Значение переменной lastElement это строка 'апельсин'.

// Стартовый код
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[fruits.length - 1];

console.log([firstElement, secondElement, lastElement]) // ['яблоко', 'слива', 'апельсин']