const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pkmnSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    box_id: {
        type: Number,
        required: true
    }
}, {timestamps: true})


module.exports = mongoose.model('Pokemon', pkmnSchema)