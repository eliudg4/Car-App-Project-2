const express = require('express')
const app = express()
// const PORT = 4444
app.set('port', process.env.port || 4444)
const session = require('express-session')
const methodOverride = require('method-override')
const CarsController = require('./controllers/cars')
const sessionController = require('./controllers/session')
const expressEjsLayout = require('express-ejs-layouts')



app.use(expressEjsLayout)
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}))

app.use(session({
    secret: 'hello',
    resave: false,
    saveUninitialized: false
}))


app.use('/cars', CarsController)
app.use('/session', sessionController)

app.set('view engine', 'ejs')


app.listen(app.get('port'), () => console.log(`I am running on port ${app.get('port')}`))