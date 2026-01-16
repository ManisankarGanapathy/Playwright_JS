genderType = "male"


function printGender() {
    let colour = 'brown'
    if(genderType == 'female'){
        var age = 30
        let colour = 'pink'
        console.log('Inside IF - Colour is '+colour);
    }
    console.log('Age is '+age);
    console.log('Outside If and inside function - Colour is '+colour);
}


printGender()
console.log('Outside function - Gender Type is '+genderType);