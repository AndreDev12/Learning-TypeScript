"use strict";
let employee = {
    firstName: "Emil",
    lastName: "Anderson",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
employee.firstName = 10;
