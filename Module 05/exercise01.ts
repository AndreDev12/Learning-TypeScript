class Car{
    // Properties
    _make: string;
    _color: string;
    _doors: number;

    // Constructor
    constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }

    // Accessors
    get make() {
        return this._make;
    }

    // Methods
}

