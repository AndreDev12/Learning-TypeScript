interface Employee{
    firstName: string;
    lastName: string;
    fullName(): string; 
}

let employee: Employee = {
    firstName: "Emil",
    lastName:  "Anderson",
    fullName(): string{
        return this.firstName + " " + this.lastName;
    } 
}

employee.firstName = 10;

// Interfaz describe formas de datos
// Alias de tipo es una definición de un tipo de dato
type Employee = {
    firstName: string;
    lastName: string;
    fullName(): string;
}