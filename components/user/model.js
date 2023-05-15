const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    professor: {
        type: String,
        required: true,
    },
    tutor: {
        type: String,
        required: false
    },
    projectTitle: {
        type: String,
        required: false
    },
    mention: {
        type: String,
        required: true
    },
    courts: {
        type: Array,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
})

const model     = mongoose.model('User',mySchema)
module.exports  = model