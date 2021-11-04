let asyncs = (callback) => {
    setTimeout(() => {
        try {
            let a = 2 + z
            callback(null, a)
        } catch (error) {
            callback(error, null)
        }
    }, 1000)
}

try {
    asyncs((err, data) => {
        if (err) {
            // console.error("Tenemos un error")
            // console.error(err)
            throw err //solamente va a servir en  funciones sincronas 
                // return false
        }
        console.log("Todo ok", data)
    })
} catch (error) {
    console.error("Tenemos el error")
    console.error(error)

}