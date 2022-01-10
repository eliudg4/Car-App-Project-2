const mongoose = require('../db/connection')

const CarSchema = new mongoose.Schema ({
    image: String,
    make: String,
    model: String,
    year: Number,
})

const Car = mongoose.model('Car', CarSchema)

module.exports = Car