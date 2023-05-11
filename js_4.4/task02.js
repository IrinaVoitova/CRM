'use strict';

// Задача №2

const changeString = (letters) => {
    const letterOne = letters.charAt(0).toUpperCase();
    const lettersTwo = letters.substring(1).toLowerCase();
    return letterOne + lettersTwo;
};

console.log(changeString('пРиВеТ МиР'));