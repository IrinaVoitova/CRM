'use strict';


// Задание №2

function getRandomArbitrary(m, n) {
    if (n < 0 && m < 0) {
        return Math.trunc(Math.random() * (n - m - 1) + m)}
    if (m < 0) {
        return Math.trunc(Math.random() * (n + 2 - m) + m - 1)}
    if (n < 0) {
        return Math.trunc(Math.random() * (m + 2 - n) + n - 1)}
    if (n < m) {
        return Math.trunc(Math.random() * (m + 1 - n) + n)}
    else {
    return Math.trunc(Math.random() * (n + 1 - m) + m)};
};

const genArr = (length, m, n) => (
    [...Array(length)].map(() => getRandomArbitrary(m, n)));    

const num = genArr(80, -6, 3);
console.log(num)
