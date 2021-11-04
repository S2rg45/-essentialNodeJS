function hola(nombre, data) {
    setTimeout(() => {
        console.log("Hola " + nombre)
        data()
    }, 1000)
}

function adios(nombre, data) {
    setTimeout(() => {
        console.log("Adios", nombre)
        data()
    }, 1000)
}

console.log("proceso iniciado")
    // hola("Sergio", function() {
    //     adios("Melissa", () => {
    //         console.log("proceso terminado")
    //     })
    // })

hola("Sergio", () => {})
adios("Sergio", () => {})