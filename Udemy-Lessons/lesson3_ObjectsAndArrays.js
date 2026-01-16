//objects
var customer = {
    fName: "John",
    lName: "Doe"
}
customer.fName = "Jane" //Dot notation
customer["lName"] = "Smith" //Bracket notation
console.log(customer)
console.log(customer.fName, customer.lName)

//Arrays
var fruits = ["apple", "banana", "cherry"]
fruits[0] = "orange" //Accessing and modifying array elements
console.log(fruits[0], fruits[1], fruits[2])
console.log(fruits.length) //Length of the array

//Arrays and Objects
var customer1 = {
    fName: "John",
    lName: "Doe",
    fruits: ["apple", "banana", "cherry"]
}
console.log(customer1)
console.log(customer1.fruits[0], customer1.fruits[1], customer1.fruits[2]) //Accessing array within an object