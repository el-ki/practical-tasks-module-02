
// Задание
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.

const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// Пиши код ниже этой строки
const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1, fruits.length-1);
const lastThreeEls = fruits.slice(-3);

console.log(fruits) // ['яблоко', 'слива', 'груша', 'апельсин', 'банан'].
console.log(firstTwoEls) // ['яблоко', 'слива'].
console.log(nonExtremeEls) // ['слива', 'груша', 'апельсин'].
console.log(lastThreeEls) // ['груша', 'апельсин', 'банан'].
