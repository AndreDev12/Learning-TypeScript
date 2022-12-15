"use strict";
// Pruebas con parámetros
// function addNumbers(x: number, y: number): number {
//     return x + y;
// }
//  addNumbers(1, 2); // Returns 3
//  addNumbers(1);    // Returns an error
// function addNumbers (x: number, y?: number): number {
//     if(y === undefined) {
//         return x;
//     }else {
//         return x + y;
//     }
// }
// addNumbers(1, 2); // Returns 3
// addNumbers(1);    // Returns 1
function addNumbers(x, y = 25) {
    return x + y;
}
addNumbers(1, 2); // Returns 3
addNumbers(1); // Returns 26
let addAllNumbers = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({ sender: 'André', text: 'hello, world' });
