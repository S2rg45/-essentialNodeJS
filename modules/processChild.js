const { exec, spawn } = require('child_process')

exec('node console.js', (err, stdout, sterr) => {
    if (err) {
        console.log(err)
        return false
    }
    console.log(stdout)
})

let process = spawn('ls', ['-la', '-l'])
console.log(process.pid)
console.log(process.connected)

process.stdout.on('data', function(dato) {
    console.log(process.killed)
    console.log(dato.toString())
})

process.on('exit', function() {
    console.log("Proceso terminado")
})