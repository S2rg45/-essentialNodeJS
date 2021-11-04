const fs = require('fs')

let read = (route, cb) => {
    fs.readFile(route, (err, data) => {
        cb(data.toString())
    })
}



let write = (route, content, cb) => {
    fs.writeFile(route, content, (err) => {
        if (err) {
            console.log('No he podido escribir en el archivo', err)
        } else {
            console.log('Se escribio correctamente')
        }
    })
}

let deleteFile = (route, cb) => {
    fs.unlink(route, cb)
}

let contentFile = "Ejecuta tus cargas de trabajo críticas en SUSE Linux Enterprise Server en Azure, obtén un alto rendimiento para las cargas de trabajo especializadas y alta disponibilidad para SAP. Conoce los detalles en Azure Marketplace."

// write(__dirname + '/write.txt', contentFile, console.log())
// read(__dirname + '/archivo.txt', console.log)

deleteFile(__dirname + '/write.txt', console.log)