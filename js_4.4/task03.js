'use strict';

// Задача №3

const calculate = (price, sumProduct, promocode1) => {
    let discount1;
    let discount2;
    let discount3;
    let totalSum;

        if (sumProduct >= 10) {
            discount1 = price * 0.03;
            }
        else {
            discount1 = 0;
            };
        if (price >= 30000) {
            discount2 = (price - discount1 - 30000) * 0.15;
            }
        else {
            discount2 = 0;
            };

        if (promocode1 == 'METHED') {
            discount3 = (price - discount1 - discount2) * 0.1;
        }
        
        else if (promocode1 === 'G3H2Z1' && (price - discount1 - discount2) > 2000) {
            discount3 = 500;
        }

        else {
            discount3 = 0;
        };
        

    totalSum = price - discount1 - discount2 - discount3;

    console.log(discount1);
    console.log(discount2);
    console.log(discount3);
    console.log(totalSum);
};

calculate(2000, 10, 'METHED');