enum ContractStatus {
    Permanent=1,
    Temp,
    Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);

let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK