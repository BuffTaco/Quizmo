const mongoose = require('mongoose')

const SetSchema = new mongoose.Schema({
    title: String,
    cards: [{
        front: String,
        back: String
    }],
    user: String
})
SetSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const SetModel = mongoose.model('sets', SetSchema)
module.exports = SetModel