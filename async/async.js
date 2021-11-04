async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola " + nombre)
            resolve(nombre)
        }, 1000)
    })
}

let hablar = async(nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola si buenas que te dices")
            resolve(nombre)
        }, 1000)
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adios", nombre)
            resolve()
        }, 1000)
    })
}

async function main() {
    let nombre = await hola('Carlos')
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
}

main()