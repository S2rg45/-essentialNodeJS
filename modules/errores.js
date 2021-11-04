function broke() {
    return 3 + z
}

function brokenAsync(cb) {
    setTimeout(function() {
        try {
            return 3 + z
        } catch (error) {
            console.error("Error en mi funcion asincrona")
            cb(error)
        }
    }, 1000)
}

try {
    brokenAsync((err) => {
        console.log(err.message)
    })
} catch (error) {
    console.error('Vaya algo se a roto', error.message)
}