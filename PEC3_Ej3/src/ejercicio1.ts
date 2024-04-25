// Sustituye /***/ por las instrucciones adeacuadas que cumplan las operaciones
// y salidas indicadas en los comentarios.

function printArray(array: number[]): void {
  console.log(array.join());
}

let array: number[] = [2, 3, 4];
console.log(array[0]); //2
printArray(array.slice(1)); // 3,4
array = [3, 4, 5];
printArray(array); // 3,4,5
console.log(array[array.length - 1]); //5
printArray(array.slice(0, 2)); // 3,4
array = [3, 4, 1];
printArray(array); // 3,4,1
array.unshift(8);
printArray(array); // 8,3,4,1
let everyisgreater = array.every((num) => num > 3); //false
console.log(everyisgreater);
let everyisless = array.every((num) => num < 10); //true
console.log(everyisless);
console.log(array.sort()); //1,3,4,8
console.log(array.sort((a, b) => b - a)); //8,4,3,1
