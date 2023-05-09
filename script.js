'use strict';

let productName = 'Томат';
let productAmount = 2;
let productCategory = 'Овощи';
let productPrice = 200;
const productSum = productAmount * productPrice;

console.log(productName);
console.log(productSum, "рублей");


const productNameUser = prompt('Наименование товара', );
console.log(typeof productNameUser);

const productAmountUser = (prompt('Количество товара', )) * 1;
console.log(typeof productAmountUser);

const productCategoryUser = prompt('Категория товара', );
console.log(typeof productCategoryUser);

const productPriceUser = (prompt('Цена товара', )) * 1;
console.log(typeof productPriceUser);

const productSumUser = productAmountUser * productPriceUser;

console.log(`На складе ${productAmountUser} единицы товара "${productNameUser}" на сумму ${productSumUser} рублей`);