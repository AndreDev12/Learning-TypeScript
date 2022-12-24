"use strict";
let addNumbers = (x, y) => x + y;
let subtractNumbers = (x, y) => x - y;
console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));
let doCalculation = (operation) => {
    if (operation === 'add') {
        return addNumbers;
    }
    else {
        return subtractNumbers;
    }
};
console.log(doCalculation('add')(1, 2));
// Inferencia de tipos de funciones
// let addNumbers: Calculator = (x: number, y: number): number => x + y;
// let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
// let addNumbers: Calculator = (num1, num2) => num1 + num2;
