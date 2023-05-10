'use strict';

const productName = 'Томат';
const productAmount = 2;
const productCategory = 'Овощи';
const productPrice = 200;
const productSum = productAmount * productPrice;

const productNameUser = prompt('Наименование товара', );
const productAmountUser = (prompt('Количество товара', )) * 1;
    if (Number.isFinite(productAmountUser)) {
        }
    else {
    alert('Вы ввели некорректные данные');
    console.log('Вы ввели некорректные данные');
        }

const productCategoryUser = prompt('Категория товара', );
const productPriceUser = (prompt('Цена товара', )) * 1;
    if (Number.isFinite(productPriceUser)) {
        }
    else {
    alert('Вы ввели некорректные данные');
    console.log('Вы ввели некорректные данные');
        }
const productSumUser = productAmountUser * productPriceUser;



