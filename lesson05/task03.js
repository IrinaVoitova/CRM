'use strict';

// Задача №3

const reverse = (string) => {
    let reverseString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    };
    return reverseString;
};

console.log(reverse('Привет мир!'));