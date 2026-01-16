var personName = 'Mike' //type string
var employeeAge = 30 //type number
var isEmployed = true //type boolean

//personName = 20 // This will cause an error because 'personName' is expected to be a string, not a number

var fName: String = 'John'; // Explicitly declaring type as string
var lName: String = 'Doe'; // Explicitly declaring type as string
var eAge: number = 25; // Explicitly declaring type as number
var isActive: boolean = true; // Explicitly declaring type as boolean

//Custom type
type Person = {
    firstName: string;  // Type for first name
    lastName: string;   // Type for last name   
    age: number;        // Type for age
    isEmployed: boolean; // Type for employment status
}
var firstPerson: Person = {
    firstName: 'Alice',
    lastName: 'Smith',
    age: 28,
    isEmployed: true
};

console.log(firstPerson)
// Function to print person details
function printPersonDetails1(person: Person): void {
    console.log(`Name: ${person.firstName} ${person.lastName}`);
    console.log(`Age: ${person.age}`);
    console.log(`Employed: ${person.isEmployed}`);
}
printPersonDetails(firstPerson); // Calling the function with the person object
