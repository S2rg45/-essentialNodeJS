const bcrypt = require('bcrypt')

const password = 'S2rg34.M4r2n4!'

bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash)
    bcrypt.compare(password, hash, (err, res) => {
        console.log(res)
    })
})