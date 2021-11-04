const fs = require('fs')
const stream = require('stream')
const util = require('util')


let data = ''
let readableStream = fs.createReadStream(__dirname + '/input.txt')
readableStream.setEncoding('utf-8')
readableStream.on('data', function(chunk) {
    data += chunk
})

readableStream.on('end', function() {
    // console.log(data)
})

// process.stdout.write('Hola')
// process.stdout.write('que')
// process.stdout.write('tal')

const transform = stream.Transform

function Words() {
    transform.call(this)
}

util.inherits(Words, transform)

Words.prototype._transform = function(chunk, codif, cb) {
    chunkWord = chunk.toString().toUpperCase()
    this.push(chunkWord)
    cb()
}

let words = new Words()

readableStream.pipe(words).pipe(process.stdout)