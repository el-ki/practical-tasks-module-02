
// Задание
// Запиши условие в инструкции if так, чтобы функция работала правильно.
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'Вы совершеннолетний человек';
//   } else {
//     message = 'Вы не совершеннолетний человек';
//   }

//   return message;
// }

function checkAge(age) {
  if (age >= 18) { // Дополни эту строку
    return 'Вы совершеннолетний человек';
  }

  return 'Вы не совершеннолетний человек';
}

console.log(checkAge(20))//  'Вы совершеннолетний человек'.
console.log(checkAge(8)) //  'Вы не совершеннолетний человек'.
console.log(checkAge(14))//  'Вы не совершеннолетний человек'.
console.log(checkAge(38))//  'Вы совершеннолетний человек'.