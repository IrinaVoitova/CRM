'use strict';

// Доп.задача №2

const numberOne = (prompt('Введите число №1', )) * 1;
const numberTwo = (prompt('Введите число №2', )) * 1;

const numberMin = numbers => {
    numbers.sort((a, b) => a - b);
    return numbers[0];
}

console.log('Минимальное число:', numberMin([numberOne, numberTwo]));