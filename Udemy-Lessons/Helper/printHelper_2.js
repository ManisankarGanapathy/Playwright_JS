// Exporting a function
export function multiply(a, b) {
    return a * b; // Returns the product of a and b
}


class CustomerDetails{
    printFN(fn){
        console.log("First Name: " + fn);
    }
}

export const custDetailsObject = new CustomerDetails(); // Exporting an instance of CustomerDetails

