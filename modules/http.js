const http = require('http')

const port = 3000
http.createServer().listen(port)

function route(req, res) {
    console.log('Nueva peticion')
    console.log(req.url)

    switch (req.url) {
        case '/hola':
            res.write('Hola Como vamos parceros')
            res.end()
            break

        default:
            res.write('Error 404: No accediste a una url correcta')
            res.end()
    }
    // res.writeHead(201, { 'Content-type': 'text/plain' })
    // res.write("Buenas Node js")

    // res.end()
}

console.log("Escuchando en el puerto: ", port)