// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title,
//     и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами.
// Все символы slug должны быть в нижнем регистре.
// Все слова slug должна быть разделены тире.

function slugify(title) {
  return title.split(' ').join('-').toLowerCase();
}


console.log(slugify('Массивы для новичков')) // 'массивы-для-новичков'.
console.log(slugify('Английский для разработчика')) // 'английский-для-разработчика'.
console.log(slugify('Десять секретов JavaScript')) // 'десять-секретов-javascript'.
console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ')) // 'как-стать-junior-разработчиком-за-две-недели'.