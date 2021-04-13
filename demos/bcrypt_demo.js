const bcrypt = require("bcrypt")

const myFunction = async () => {
    let password = "mySuperSecureString"
    let hashedPassword = await bcrypt.hash(password, 12)
    console.log(password)
    console.log(hashedPassword)
}

myFunction();