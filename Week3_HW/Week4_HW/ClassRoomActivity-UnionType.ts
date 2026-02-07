// - Create a function that accepts only specific payment methods.
// - Create a type alias called PaymentMethod that allows only "UPI", "CreditCard", or "PayPal".
// - Write a function makePayment that takes a parameter of type PaymentMethod and prints which payment method is chosen.
// - Call the function with "UPI" and "CreditCard" as arguments.

type paymentMethods = "UPI" | "CreditCard" | "PayPal"

function makePayment(paymentOption: paymentMethods) {


    if (paymentOption === "UPI") 
        console.log("Payment method is UPI");
     else if(paymentOption === "CreditCard")
        console.log("Payment method is CreditCard");
     else
        console.log("Payment method is PayPal");
}

makePayment("UPI")
makePayment("CreditCard")

