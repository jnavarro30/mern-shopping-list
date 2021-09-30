const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        default: 1
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Item = mongoose.model('item', ItemSchema)
module.exports = Item