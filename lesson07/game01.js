'use strict';

const foo = () => {
    const numRandom1 = Math.trunc(Math.random() * (101 - 1) + 1);
    console.log(numRandom1);
    // let userNumber = (prompt('Я загадал число от 1 до 100. Как думаете, какое это число?', '')) * 1;

while (true) {
    let userNumber = (prompt('Я загадал число от 1 до 100. Как думаете, какое это число?', '')) * 1;
// if (userNumber === null) break;

        if (Number.isFinite(userNumber) != true) {
            alert("Введите число!");
        }
        else{
            if (numRandom1 < userNumber) {
                alert("Меньше! Введите новый вариант.");
            }
            if (numRandom1 > userNumber) {
                alert("Больше! Введите новый вариант.")
            }
            if (numRandom1 === userNumber) {
                alert("Правильно!"); break
            }
}
}}
foo()

