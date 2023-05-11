const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    studentId: {
        type: String,
        required: true
    },
    stage: {
        type: String,
        required: true
    },
    steps: {
        type: Array,
        required: true
    }
})

const model     = mongoose.model('Trajectory',mySchema);
module.exports  = model;