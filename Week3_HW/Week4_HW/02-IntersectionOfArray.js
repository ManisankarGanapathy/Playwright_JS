function intersectionOfArray(array1, array2) {
    const resultArray = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && !resultArray.includes(array1[i])) {
            resultArray.push(array1[i]);
        }
    }
    return resultArray;
}

console.log(intersectionOfArray([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(intersectionOfArray([0, 0, 0], [0, 0, 0]));
console.log(intersectionOfArray([4, 5, 6], [4, 5, 6]));

