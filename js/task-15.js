
// Задание
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
const newClients = ['Персик', 'Хьюстон'];

const allClients = oldClients.concat(newClients);


console.log(oldClients) // ['Манго', 'Аякс', 'Поли', 'Киви'].
console.log(newClients) // ['Персик', 'Хьюстон'].
console.log(allClients) // ['Манго', 'Аякс', 'Поли', 'Киви', 'Персик', 'Хьюстон'].
