const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: Boolean,
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;