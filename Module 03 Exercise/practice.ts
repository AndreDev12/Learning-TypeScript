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