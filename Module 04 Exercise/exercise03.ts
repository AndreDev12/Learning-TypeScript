// Pruebas con parámetros
// function addNumbers(x: number, y: number): number {
//     return x + y;
// }
 
//  addNumbers(1, 2); // Returns 3
//  addNumbers(1);    // Returns an error


function addNumbers (x: number, y?: number): number {
    if(y === undefined) {
        return x;
    }else {
        return x + y;
    }
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns 1