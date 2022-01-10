const express = require('express')
const app = express()
const port = 4444
const methodOverride = require('method-override')
const CarsController = require('./controllers/cars')
const expressEjsLayout = require('express-ejs-layouts')



app.use(expressEjsLayout)
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use('/cars', CarsController)


app.set('view engine', 'ejs')


app.listen(port, () => console.log(`I am running on port ${port}`))