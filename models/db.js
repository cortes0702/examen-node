const res = require("express/lib/response");
const mongoose = require("mongoose")
const mongodb = "mongodb+srv://cortes0702:Jobelal2002@cluster0.ayypw.mongodb.net/db-examen"
//const mongodb = "mongodb://127.0.0.1:27017"
const db = mongoose.connection

mongoose.connect(mongodb, {
})
.then(db => console.log("DB is connected"))
.catch(err => console.log(err))

const {Schema} = mongoose

const usuarios = new Schema({
    name: String,
    second_name: String,
    email: String,
    password: String
})

module.exports = mongoose.model("usuarios", usuarios)