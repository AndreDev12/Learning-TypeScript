"use strict";
// function addNumbers (x: number, y: number): number {
//     return x + y;
// }
// addNumbers(1, 2);
//  Funciones anónimas
let addNumbers = function (x, y) {
    return x + y;
};
addNumbers(1, 2);
let total = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(total([1, 2, 3]));
