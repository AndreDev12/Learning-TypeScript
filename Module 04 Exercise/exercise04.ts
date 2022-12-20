// Parámetros obligatorios
// let addThreeNumbers = (x:number, y:number, z:number): number => x + y + z;

// addThreeNumbers(10, 20);
// addThreeNumbers(10, 20, 30, 40);


// Parámetros opcionales
let addThreeNumbers = (x: number, y:number, z?:number): number => {
    if(z === undefined){
        return x + y;
    }else{
        return x + y + z;
    }
};
addThreeNumbers(10, 20);
addThreeNumbers(10, 20, 30);


// Parámetros predeterminados
// let subtractThreeNumbers = (x:number, y:number, z:number): number => x - y - z;
let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;

subtractThreeNumbers(10, 20);
subtractThreeNumbers(10, 20, 15); 