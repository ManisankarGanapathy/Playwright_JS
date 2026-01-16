var personName = 'Mike'; //type string
var employeeAge = 30; //type number
var isEmployed = true; //type boolean
//personName = 20 // This will cause an error because 'personName' is expected to be a string, not a number
var fName = 'John'; // Explicitly declaring type as string
var lName = 'Doe'; // Explicitly declaring type as string
var eAge = 25; // Explicitly declaring type as number
var isActive = true; // Explicitly declaring type as boolean
var firstPerson = {
    firstName: 'Alice',
    lastName: 'Smith',
    age: 28,
    isEmployed: true
};
console.log(firstPerson);
// Function to print person details
function printPersonDetails(person) {
    console.log("Name: ".concat(person.firstName, " ").concat(person.lastName));
    console.log("Age: ".concat(person.age));
    console.log("Employed: ".concat(person.isEmployed));
}
printPersonDetails(firstPerson); // Calling the function with the person object
