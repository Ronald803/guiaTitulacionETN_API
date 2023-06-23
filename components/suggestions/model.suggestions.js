const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    suggestion: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

const model     = mongoose.model('Suggestion',mySchema);
module.exports  = model;