'use strict';

const income = (prompt('Ваш доход за последний квартал в рублях', )) * 1;
let tax = 0;

if (income > 50000) {
    tax = (income - 50000) * 0.3;
}
if (income >= 15000 && income <= 50000) {
    tax = (income - 15000) * 0.2;
}
if (income < 15000)  
    {tax = income * 0.13;
}

console.log(`Ваш налог составляет: ${tax} рублей`);