// Проверка пароля (ранний возврат)
// Задание
// Функция checkPassword получает пароль пользователя в параметр password,
//     проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD
// и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
  
//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }
//   return message;
// }

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';

  if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  } 
  return 'Доступ запрещен, неверный пароль!';
}

console.log(checkPassword('mangohackzor')) // 'Доступ запрещен, неверный пароль!'.
console.log(checkPassword('polyhax')) // 'Доступ запрещен, неверный пароль!'.
console.log(checkPassword('jqueryismyjam')) // 'Добро пожаловать!'.