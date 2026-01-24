//1. return the length of the last word in the string - Input: s = "Hello World"
function example1(s) {
    let text = s.split(" ")
    console.log("Size of the last word in:", text, "is:", text[text.length - 1].length)
}
example1("Hello World")

//2. return the length of the last word in the string - Input: s = " fly me to the moon "
function example2(s) {
    let text = s.trim().split(" ")
    console.log("Size of the last word in:", text, "is:", text[text.length - 1].length)
}
example2(" fly me to the moon ")


//3. Write a function to check if two strings are anagrams.
function isAnagram(s1, s2) {
    const format = str =>
    str.toLowerCase().split("").sort().join("");

    if (format(s1) === format(s2)) 
        console.log(s1,"and",s2,"are anagram - TRUE");
    else
        console.log(s1,"and",s2,"is not anagram - FALSE");
}

isAnagram('listen', 'silent')
isAnagram('hello', 'world')
