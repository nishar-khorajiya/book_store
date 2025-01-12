const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    authors: {
        type: [String],
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    publicationYear: {
        type: Number,
        required: true,
        min: 1000,
        max: new Date().getFullYear(),
    },
    edition: {
        type: Number,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0.01,
    }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)