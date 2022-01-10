const mongoose = require('mongoose')
const MongoURI = 'mongodb://localhost:27017/cars'

mongoose.connect(MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(instance => {
    console.log(`Connected to the db: ${instance.connections[0].name}`)
})
.catch(err => console.log(`Connection failed`, err))

module.exports = mongoose