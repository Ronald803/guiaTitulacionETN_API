const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    type: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    content: {
        type: Array,
        required: false
    },
    place: {
        type: String,
        required: true
    },
    stage: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
})

const model     = mongoose.model('Step',mySchema)
module.exports  = model