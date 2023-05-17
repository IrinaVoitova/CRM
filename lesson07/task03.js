'use strict';

// Задание №3

const getRandomNum = (m, n) => {
    if (n < 0 && m < 0) {
        return Math.trunc(Math.random() * (n - 1 - m) + m)}
    if (m < 0) {
        return Math.trunc(Math.random() * (n + 2 - m) + m - 1)}
    if (n < 0) {
        return Math.trunc(Math.random() * (m + 2 - n) + n - 1)}
    if (n < m) {
        return Math.trunc(Math.random() * (m + 1 - n) + n)}
    else {
    return Math.trunc(Math.random() * (n + 1 - m) + m)};
};

const generationArr = (length, m, n, word) => (
    [...Array(length)].map(() => getRandomNum(m, n)));

let generationArrEven;

const oddEven = (word) => {
        if (word === 'even') {
            generationArrEven = generationArr.filter((item) => !(item % 2));
            };
        if (word === 'odd') {
            generationArrEven = generationArr.filter((item) => item % 2);
        }
        }       

const num = generationArr(100, 5, 10, 'even');
console.log(num)
console.log(generationArrEven)
console.log(oddEven('even'))

