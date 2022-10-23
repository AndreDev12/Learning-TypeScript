enum ContractStatus {
    Permanent=1,
    Temp,
    Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);

// let randomValue: any = 10;
// randomValue = 'Mateo';   // OK
// randomValue = true;      // OK

let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Mateo';

console.log(randomValue.name);
randomValue();
randomValue.toUppercase();

// Nota:
// any omite las comprobaciones en tiempo de compilación y el objeto se evalúa en tiempo de ejecución.
// Las aserciones de tipos tienen dos formatos. Una es la sintaxis de as y la otra es la sintaxis de "corchetes angulares".