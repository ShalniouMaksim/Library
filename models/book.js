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
});

const removeBook = async id => {
    Book.findOneAndDelete({ id }, (err, res) => {
        if (res) console.log(res);
        else
            console.log('Not deleted');
    }); //delete
};

const createBook = async book => {
    Book.create({
        id: uuid(),
        name: book.name,
        author: book.author,
        date: book.date,
        available: book.available,
        page: book.page,
        genre: book.genre,
    });
};

const updateBook = async book => {
    await Book.updateOne({ id: book.id }, book); // req update
};

const findBook = async() => {
    return await Book.find(); //read
};

module.exports = {
    removeBook,
    createBook,
    updateBook,
    findBook,
};