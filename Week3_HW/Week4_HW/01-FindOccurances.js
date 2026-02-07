function FindOccurance(a) {
    const nums = [2, 4, 5, 2, 1, 2]
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (a === nums[i])
            count++
    }
    return count
}

console.log('Occurance of the given number is: ', FindOccurance(2))