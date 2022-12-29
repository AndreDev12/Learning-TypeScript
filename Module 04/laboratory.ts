// Uso de funciones en Typescript

// Ejercicio 1
type compareFunctionType = (a: number, b: number) => number;

const sortDescending: compareFunctionType = (a, b) => {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0;
    }
}

const sortAscending: compareFunctionType = (a, b) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}

function buildArray(items: number, sortOrder: 'ascending' | 'descending'): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
          randomNumbers.push(nextNumber);
        } else {
          counter--;
        }
    }
    if (sortOrder === 'ascending') {
      return randomNumbers.sort(sortAscending);
    } else {
      return randomNumbers.sort(sortDescending);
    }
}

let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);


// Ejercicio 2
function loanCalculator (principal: number, interestRate: number, months = 12): string {
    let interest: number = interestRate / 1200;   // Calculates the monthly interest rate 
    let payment: number;
    payment = principal * interest / (1 - (Math.pow(1/(1 + interest), months)));
    return payment.toFixed(2);
}

let myLoan = loanCalculator(1000, 5);
console.log(myLoan);