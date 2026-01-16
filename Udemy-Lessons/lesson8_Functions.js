//..Declarative Functions

helloOne() // Declarative function can be called before declaring
function helloOne() {
    console.log("Hello One");
}
// Calling the function after declaration
helloOne()


//..Anonymous Functions
// helloTwo() // This will throw an error if uncommented  
var helloTwo = function() {   
    console.log("Hello Two");
} 
// Function expression cannot be called before declaration
helloTwo(); // Calling the function after declaration

//ES6 function expression or Arrow Function
var helloThree = () => {
    console.log("Hello Three");
}  
helloThree(); // Calling the arrow function after declaration  

//..IIFE (Immediately Invoked Function Expression)
(function() {  
    console.log("Hello from IIFE");
})(); // This function is executed immediately after declaration

//..Function with Parameters
function greet(name) {
    console.log(`Hello, ${name}!`);
}   
greet("Alice"); // Calling the function with a parameter

//..Function with return value
function add(a, b) {
    return a + b; // Returns the sum of a and b
}
var sum = add(5, 10); // Calling the function and storing the return value
console.log("Sum is: " + sum); // Output the result

//..import and export functions

// Importing a function
import { multiply } from './Helper/printHelper.js'; // Adjust the path as necessary
// Example usage of the imported function
var product = multiply(3, 4); // Calling the imported function
// Output the result of the imported function
console.log("Product is: " + product); // Output the result of the imported function