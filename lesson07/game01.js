'use strict';

const foo = () => {
    const numRandom1 = Math.trunc(Math.random() * (101 - 1) + 1);
    console.log(numRandom1);

    const bot = () =>  {
        let userNumber = +prompt('Я загадал число от 1 до 100. Как думаете, какое это число?', '');

        if (userNumber === 0){
            return
        };

        if (Number.isFinite(userNumber) != true) {
            alert("Введите число!");
            bot()
        }
            
        if (numRandom1 < userNumber) {
            alert("Меньше! Введите новый вариант.");
            bot()
        }
        if (numRandom1 > userNumber) {
            alert("Больше! Введите новый вариант.");
            bot()
        }
        
        if (numRandom1 === userNumber) {
            alert("Правильно!"); 
            return
        }
    }
    bot()
}
foo()

