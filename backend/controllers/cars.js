const express = require('express')
const router = express.Router()
const Car = require('../models/cars')

router.get('/', (req, res) => {
        res.render('home')
})

router.get('/contactUs', (req, res) => {
    res.render('contactUs')
})

router.get('/aboutUs', (req, res) => {
    res.render('aboutUs')
})

router.get('/buy', (req, res) => {
    Car.find({}, (err, cars) => {
        res.render('buy', {cars})
    })
})

router.get('/buy-two', (req, res) => {
    Car.find({}, (err, cars) => {
        res.render('buy-two', {cars})
    })
})

router.get('/sell', (req, res) => {
    res.render('sell')
})

router.get('/buy/:id', (req, res) => {
    Car.findById(req.params.id, (err, cars) => {
        res.render('show', {cars})
    })
})

router.post('/', (req, res) => {
    Car.create(req.body, (err, createdCar) => {
        console.log(req.body)
        res.redirect('/cars/buy')
    })
})

router.delete('/buy/:id', (req, res) => {
    Car.findByIdAndRemove(req.params.id, (err, deletedCar) => {
        console.log(deletedCar)
        res.redirect('/cars/buy')
    })
})

router.put('/buy/:id', (req, res) => {
    Car.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedCar) => {
        console.log(updatedCar)
        res.render('edit', {cars: updatedCar})
    })
})

router.get('/buy/:id/edit', (req, res) => {
    Car.findById(req.params.id, (err, cars) => {
        res.render('edit', {cars})
        // res.redirect('buy')
    })
})


module.exports = router
