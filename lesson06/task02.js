'use strict';

// Задача №2

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
        sum += arr[i] / allCashbox.length;
    };
    return sum;
}
const sum = Math.floor(getAverageValue(allCashbox));
console.log(sum)