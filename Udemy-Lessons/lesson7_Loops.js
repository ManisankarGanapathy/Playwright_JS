//Loops

for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i)
}   

//for of loop
let cars = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan"]
for(let car of cars) {
    console.log("Car brand: " + car)
}

//ES6 syntax for each loop
cars.forEach((car, index) => {
    console.log(car);
})

//while loop
console.log("Using while loop:");
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}   

//do while loop
console.log("Using do while loop:");
let number = 0;
do {
    console.log("Number is: " + number);
    number++;
} while (number < 5);   

//Nested loops
console.log("Using nested loops:");
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; 
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log("Element at [" + i + "][" + j + "] is: " + matrix[i][j]);
    }
}