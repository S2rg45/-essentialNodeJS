const os = require('os')

// console.log(os.arch())
// console.log(os.platform())
// console.log(os.cpus().length)

// console.log(os.constants)
const size = 1024

function kb(bytes) {
    return bytes / size
}

function mb(bytes) {
    return kb(bytes) / size
}

function gb(bytes) {
    return mb(bytes) / size
}
console.log(os.totalmem())
console.log(kb(os.freemem()))
console.log(mb(os.freemem()))
console.log(gb(os.freemem()))

console.log(os.homedir())
console.log(os.tmpdir())
console.log(os.hostname())
console.log(os.networkInterfaces())