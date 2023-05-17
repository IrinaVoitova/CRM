'use strict';

// Задача №1

const genArr = (length) => (
    [...Array(length)].map(() => Math.trunc(Math.random() * (101 - 1) + 1))
);

const num = genArr(20);
console.log(num)
