"use strict";
displayAlert('Prueba de consola');
displayAlert(567);
function displayAlert(message) {
    alert('The message is ' + message);
}
function sum(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
sum([1, 2, 5]);
