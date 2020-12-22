// Поиск самого длинного слова
// Задание
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов
// разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
    const array = string.split(' ');
    let theLongestWord = array[0];

    for (let i = 1; i < array.length; i++) {

    if (theLongestWord.length < array[i].length) {
        theLongestWord = array[i];
        } 
  }
    return theLongestWord;
}

console.log(findLongestWord('The quick brown fox  jumped over the lazy dog')) // jumped.
console.log(findLongestWord('Google do a roll')) // Google.
console.log(findLongestWord('May the force be with you')) // force.
