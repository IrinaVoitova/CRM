'use strict';

// Доп.задача №1

const nod = (num1, num2) => {
	if (num2 > num1) return nod (num2, num1);
	if (!num2) return num1;
	return nod (num2, num1 % num2);
}

console.log(`Наибольший общий делитель: ${nod(500, 1000)}`);