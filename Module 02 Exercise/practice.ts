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

// console.log(randomValue.name);
// randomValue();
// randomValue.toUppercase();

// Nota:
// any omite las comprobaciones en tiempo de compilación y el objeto se evalúa en tiempo de ejecución.
// Las aserciones de tipos tienen dos formatos. Una es la sintaxis de as y la otra es la sintaxis de "corchetes angulares".


// *Tipos de unión
let multiType: number | boolean;
multiType=20;
multiType=true;
// multiType="twenty";

function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error


// *Tipos de intersección
interface Employee{
    employeeID: number;
    age: number;
}
interface Manager{
    stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
}


// *Tipos literales
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";
myResult = "pass";
// myResult = "failure";


// *Matrices
let list: number[] = [1,2,3];