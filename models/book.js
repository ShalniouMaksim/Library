const format = require('date-fns/format');

const mongoose = require('mongoose');
const { uuid } = require('uuidv4');
const Book = mongoose.model('Book', {
    id: String, name: String,
    author: String, date: String,
    available: Boolean,
    page: Number, genre: String
});

const deleteBook = async (id) => {
    const books = await findBook();
    books.map((book) => {
        if (book.id === id) {
            Book.deleteOne(book, function (err, result) {
                if (err) return console.log(err);
                console.log(result);
            }); //delete
        }
    });
};

const createBook = async (book) => {
    Book.create({
        id: uuid(),
        name: book.name, author: book.author,
        date: book.date,
        available: book.available,
        page: book.page, genre: book.genre,
    });
};

const updateBook = async (id, book) => {
    await Book.updateOne({ id }, book); // req update
};

const findBook = async () => {
    return await Book.find();//read
};

module.exports = {
    deleteBook,
    createBook,
    updateBook,
    findBook,
};