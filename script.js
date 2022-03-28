let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = prompt('Сколько будет стоить данная работа?');
let rollback = 20;
let fullPrice = 2000;
let adaptive = prompt('Нужен ли адаптив на сайте?');

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} евро`);
console.log(`Стоимость разработки сайта ${fullPrice} евро`);

console.log(screens.toLowerCase().split(', '));

console.log(`Процент отката посреднику за работу ` + (fullPrice * (rollback/100)));
