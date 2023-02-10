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
    set make(make) {
        this._make = make;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
}
