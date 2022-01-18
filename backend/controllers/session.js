const { application } = require('express')
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const router = express.Router()

router.get('/home', (req, res) => {
    res.render('session/home')
})

router.get('/login', (req, res) => {
    res.render('session/login')
 })

 router.get('/register', (req, res) => {
     res.render('session/register')
 })

 router.post('/register', async (req, res, next) => {
     try {
         if(req.body.password === req.body.verifyPassword) {
             const desiredEmail = req.body.email
             const emailExists = await User.findOne({ email: desiredEmail})
             if(emailExists) {
                 res.send('Email is already being used')
             } else {
                 const salt = bcrypt.genSaltSync(10)
                 const hashedPassword = bcrypt.hashSync(req.body.password, salt)
                 req.body.password = hashedPassword
                 const createdUser = await User.create(req.body)
                 console.log(createdUser)
             }
         } else {
             res.send('Password must match')
         }
     } catch (err) {
         next(err)
     }
 })

 router.post('/login', async (req, res, next) => {
     try {
         const emailToLogin = await User.findOne({ email: req.body.email })
         if(emailToLogin) {
             const validPassword = bcrypt.compareSync(req.body.password, emailToLogin.password)
             if(validPassword) {
                //  res.send('User is logged in')
                res.redirect('/session/home')
             } else {
                 res.redirect('login')
             }
         } else {
             res.redirect('/session/home')
         }
     } catch (err) {
         next(err)
     }
 })



module.exports = router
