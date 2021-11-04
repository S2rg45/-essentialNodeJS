function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola " + nombre)
            resolve(nombre)
        }, 1000)
    })
}

let hablar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola si buenas que te dices")
            resolve(nombre)
        }, 1000)
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adios", nombre)
            resolve()
        }, 1000)
    })
}

console.log("Iniciando el proceso ...")
hola('Sergio')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log("Terminado el proceso")
    })
    .catch((error) => {
        console.log("Ocurrio un erro")
        console.log(error)
    })