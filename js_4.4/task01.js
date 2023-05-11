'use strict';

// Задача №1

const converter = moneyEuro => moneyEuro * 1.2 * 73;

console.log(`Мы обменяем Ваше количество EUR на ${converter(5).toFixed(2)} RUB`);