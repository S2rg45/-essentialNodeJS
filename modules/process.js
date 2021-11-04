// const process = require('process')

process.on('beforeExit', () => {
    console.log("El proceso va a acabar")
})

process.on('exit', () => {
    console.log("El proceso acabo")
})

process.on('uncaughtException', (err, origen) => {
    console.log("Valla error")
    console.error(err)
})

debud()
    // process.on('unhandledRejection')