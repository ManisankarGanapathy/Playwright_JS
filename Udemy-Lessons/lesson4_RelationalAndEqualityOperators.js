//Relational or Comparison Operators
var a = 10
var b = 20

var isEqual = a == b // false
var isNotEqual = a != b // true
var isGreaterThan = a > b // false
var isLessThan = a < b // true
var isGreaterThanOrEqual = a >= b // false
var isLessThanOrEqual = a <= b // true
console.log(isEqual, isNotEqual, isGreaterThan, isLessThan, isGreaterThanOrEqual, isLessThanOrEqual);

var result = 6<=5
console.log(result) // false

//Equality Operators
var isStrictEqual = a === b // false
var isStrictNotEqual = a !== b // true
console.log(isStrictEqual, isStrictNotEqual)

var x = 10;
console.log(x == "10") // true (loose equalit)
console.log(x === "10") // false (strict equality)
console.log(x === 10) // true (strict equality with same type)
