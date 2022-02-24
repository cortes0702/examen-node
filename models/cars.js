const mongoose = require("mongoose")

const {Schema} = mongoose

const coches = new Schema({
    name: String,
    model: String,
    image: String
})

module.exports = mongoose.model("coches", coches)