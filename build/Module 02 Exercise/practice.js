"use strict";
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
// let randomValue: any = 10;
// randomValue = 'Mateo';   // OK
// randomValue = true;      // OK
let randomValue = 10;
randomValue = true;
randomValue = 'Mateo';
// console.log(randomValue.name);
// randomValue();
// randomValue.toUppercase();
// Nota:
// any omite las comprobaciones en tiempo de compilación y el objeto se evalúa en tiempo de ejecución.
// Las aserciones de tipos tienen dos formatos. Una es la sintaxis de as y la otra es la sintaxis de "corchetes angulares".
// *Tipos de unión
let multiType;
multiType = 20;
multiType = true;
// multiType="twenty";
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two')); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add('one', 2)); //* Returns error
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
let myResult;
myResult = "incomplete";
myResult = "pass";
// myResult = "failure";
// *Matrices
let list = [1, 2, 3];
let listNew = [1, 2, 3];
// *Tuplas
let person1 = ['Marcia', 35];
// let person1: [string, number] = ['Marcia', 35, true];
// let person1: [string, number] = [35, 'Marcia'];
