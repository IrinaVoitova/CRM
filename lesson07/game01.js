

const numRandom1 = Math.trunc(Math.random() * (101 - 1) + 1);
console.log(numRandom1);
let answer;

let number1 = (prompt('Я загадал число от 1 до 100. Как думаете, какое это число?', '')) * 1;

const foo = () => {
    if (Number.isFinite(number1) != true) {
        alert("Введите число!");
    }

    else {
        if (numRandom1 < number1) {
            answer = +prompt("Меньше! Введите новый вариант.")
        }
        if (numRandom1 > number1) {
            answer = +prompt("Больше! Введите новый вариант.")
        }
        if (numRandom1 === number1) {
            answer = alert("Правильно!")
        };
    }
}
foo()