function hola(nombre, data) {
    setTimeout(() => {
        console.log("Hola " + nombre)
        data(nombre)
    }, 1000)
}

let hablar = (talk) => {
    setTimeout(() => {
        console.log("Hola si buenas que te dices")
        talk()
    }, 1000)
}

function adios(nombre, data) {
    setTimeout(() => {
        console.log("Adios", nombre)
        data()
    }, 1000)
}

function conversacion(nombre, cantidad, callback) {
    if (cantidad > 0) {
        hablar(() => {
            conversacion(nombre, --cantidad, callback)
        })
    } else {
        adios(nombre, callback)
    }
}

console.log("proceso iniciado")
hola("carlos", function(nombre) {
    conversacion(nombre, 4, () => {
        console.log("Proceso terminado")
    })
})

// hola("Sergio", function(nombre) {
//     hablar(() => {
//         hablar(() => {
//             hablar(() => {
//                 adios(nombre, () => {
//                     console.log("proceso terminado")
//                 })
//             })
//         })
//     })
// })