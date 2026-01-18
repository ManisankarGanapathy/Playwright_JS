let value = 'TestLeaf'
let output = ''
for (let i = value.length - 1; i >= 0; i--) {
    output = output + value.charAt(i)
}
console.log(output)