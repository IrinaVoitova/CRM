'use strict';

// Задача № 2

const rain = Math.round(Math.random());
console.log(rain);

if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!')
}
else {
    console.log('Дождя нет!')
};

// Задача № 3

const mathScore = (prompt('Введите кол-во баллов по математике', )) * 1;
const langScore = (prompt('Введите кол-во баллов по русскому языку:', )) * 1;
const informaticsScore = (prompt('Введите кол-во баллов по информатике:', )) * 1;
const totalScore = mathScore + langScore + informaticsScore;

if (totalScore >= 265) {
    alert('Поздравляю, вы поступили на бюджет!')
}
else if (totalScore < 265 && totalScore >= 120) {
    alert('Вы поступили на платное отделение!')
}
else {
    alert('Ждем Вас в следующем году!')
};

// Задача № 4

const bank = (prompt('Сколько денег Вы хотите снять?', )) * 1;
const balance = bank % 100;
if (balance == 0) {
    alert('Подождите, операция выполняется!')
    console.log('Подождите, операция выполняется!')
}
else {
    alert('В банкомат загружены купюры минимальным номиналом 100 рублей!')
    console.log('В банкомат загружены купюры минимальным номиналом 100 рублей!')
};