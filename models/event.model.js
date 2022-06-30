const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
    },
    author:{
        type: String
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('Event', eventSchema);