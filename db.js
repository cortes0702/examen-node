var mongoose = require("mongoose")
var mongodb = "http://localhost:27017/db-examen"
var db = mongoose.connect(mongodb)

mongoose.connect(db, () => {
})
.then(db => console.log("La BD está conectada"))
.catch(db => console.log("Ha fallado la conexión"))

/*const usuarios = new Schema({
    name: String,
    second_name: String,
    email: String,
    password: String
})

const coches = new Schema({
    name: String,
    model: String,
    image: Image
})

exports.module = mongoose.model("usuarios", usuarios)
exports.module = mongoose.model("coches", coches)
*/