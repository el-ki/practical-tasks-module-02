// Задание
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки,
//     в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord).Эта функция принимает строку,
//     состоящую из слов разделённых только пробелами(параметр message) и цену гравировки одного слова(параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
  return message.split(' ').length * pricePerWord;
  // Пиши код выше этой строки
}


console.log(calculateEngravingPrice('JavaScript у меня в крови', 10)) // 50.
console.log(calculateEngravingPrice('JavaScript у меня в крови', 20)) // 100.
console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40)) // 160.
console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 20)) // 80.

