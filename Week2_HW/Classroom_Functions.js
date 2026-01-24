//Task 1: Function Declaration
function userProfile(name) {
    console.log('Hello,', name)
}

let user = 'Manisankar'
userProfile(user)

//Task 2: Arrow Function
let double = (a) => a * a;
console.log(double(10))

//Task 3: Anonymous Function
setTimeout(function () {
    console.log("This message is delayed by 2 seconds")
}, 2000)

//Task 4: Callback Function

function getUserData(callback) {
    setTimeout(function () {
        callback();
    }, 3000);
}

function callback() {
    console.log('Call Back Function')
}
getUserData(callback)