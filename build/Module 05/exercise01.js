"use strict";
class Car {
    // Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }
    // Accessors
    get make() {
        return this._make;
    }
}
