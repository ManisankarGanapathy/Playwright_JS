//Concatenation and Interpolation
var price = 50
var itemName = "apple"
var message1 = "The price for your " + itemName + " is " + price + " dollars" // Concatenation
console.log(message1);
var message2 = `The price for your ${itemName} is ${price} dollars` // Interpolation
console.log(message2);
