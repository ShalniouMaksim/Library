const mongoose = require('mongoose');
const { uuid } = require('uuidv4');
const Book = mongoose.model('Book', {
  id: String,
  name: String,
  author: String,
  date: String,
  available: Boolean,
  page: Number,
  genre: String,
  description: String,
  image: String,
});

const removeBook = async id =>
  await Book.findOneAndDelete({ id }) //delete
;

const createBook = async book => await Book.create({
  id: uuid(),
  name: book.name,
  author: book.author,
  date: book.date,
  available: book.available,
  page: book.page,
  genre: book.genre,
  description: book.description,
  image: book.image,
});

const updateBook = async book =>
  (await Book.updateOne({ id: book.id }, book)).nModified // req update
;

const findBook = async() =>
  await Book.find() //read
;

module.exports = {
  removeBook,
  createBook,
  updateBook,
  findBook,
};
