const mongoose = require('./connection')
const Car = require('../models/cars')
const carsSeeds = require('./carsSeeds')
const User = require('../models/user')

Car.deleteMany({})
.then( () => {
    return User.deleteMany()
})
.then(() => {
    return Car.insertMany(carsSeeds)
})
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => {
    process.exit()
})