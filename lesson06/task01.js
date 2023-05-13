'use strict';

// Задача №1

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (a, b) => {
const trueStudents = [];
for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) == -1) {
        trueStudents.push(a[i]);
    }
}
return trueStudents;
}

console.log(filter(allStudents, failedStudents));