const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    subjects:{
        type: Array,
        required: true
    },
    projects:{
        type: Array,
        required: true
    }
})

const model     = mongoose.model('Professor',mySchema)
module.exports  = model 