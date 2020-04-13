const { Schema, model } = require('mongoose');

const schema = new Schema({
    book: {
        name: String,
        autor: String,
    }
})

module.exports =  model('Library', schema)
