// let buffer = Buffer.alloc(1)
let buffer = Buffer.from('Hola')


console.log(buffer)

let abc = Buffer.alloc(26)

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97
}

console.log(abc.toString())