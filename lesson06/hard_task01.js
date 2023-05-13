'use strict';

// Доп.задание №1

const allCashbox1 = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
];

let i = allCashbox1.length;
const [a, b] = [i];
const getAveragePriceGoods = (arr) => {
    let middleprice = [];
    for (let i = 0; i < arr.length; i++) {
            middleprice.push(b / a);
    }
    return middleprice
}

console.log(getAveragePriceGoods(allCashbox1))