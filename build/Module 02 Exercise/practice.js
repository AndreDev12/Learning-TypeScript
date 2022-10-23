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
console.log(randomValue.name);
randomValue();
randomValue.toUppercase();
// Nota:
// any omite las comprobaciones en tiempo de compilación y el objeto se evalúa en tiempo de ejecución.
// Las aserciones de tipos tienen dos formatos. Una es la sintaxis de as y la otra es la sintaxis de "corchetes angulares".
