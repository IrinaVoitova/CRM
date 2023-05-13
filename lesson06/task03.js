'use strict';

// Задача №3

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, b) => {
    const newAaddPrefix = [];
    for (let i = 0; i < arr.length; i++) {
        newAaddPrefix.push(b + ' ' + arr[i]); 
    };
    return newAaddPrefix;
}

addPrefix(names, 'Mr');
console.log(addPrefix(names, 'Mr'));