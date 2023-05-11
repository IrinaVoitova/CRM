'use strict';

// Задача №2

let i = 0;

const isPrime = (i) => {
    for (; ; ) {

        if (i>0 && i % 2 !== 0 && i % 3 !== 0) {
        console.log('true')}
        else {console.log('false')} break;
    }
};

isPrime(151)