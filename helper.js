
const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://MaximShalniou:12345@cluster0-qiaqu.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
);
const Library = mongoose.model.Library || mongoose.model('Library', { userId: String, bookId: String });
const User = mongoose.model.User || mongoose.model('User', { id: String, firstName: String, lastName: String });
const Book = mongoose.model.Book || mongoose.model('Book', { id: String, author: String, available: Boolean });
const { uuid } = require('uuidv4');

const deleteUser = (firstName, lastName) => {
    User.deleteOne({ firstName: firstName, lastName: lastName }, function (err, result) {
        if (err) return console.log(err);
        console.log(result);
    });//delete
};

const deleteBook = (author, available) => {
    Book.deleteOne({ author: author, available: available }, function (err, result) {
        if (err) return console.log(err);
        console.log(result);
    }); //delete
};

const createUser = async (firstName, lastName) => {
    const Users = new User({ id: uuid(), firstName: firstName, lastName: lastName });//create
    await Users.save();//create
};
const createBook = async (author, available) => {
    const Books = new Book({ id: uuid(), author: author, available: available });//create
    await Books.save();//create
};

const updateUser = async (oldFirstName, newFirstName) => {
    await User.updateOne({ firstName: oldFirstName }, { firstName: newFirstName });// req update
};

const updateBook = async (oldAuthor, newAuthor) => {
    await Book.updateOne({ author: oldAuthor }, { author: newAuthor }); // req update
};

const findUser = async () => {
    return await User.find();// read
};

const findBook = async () => {
    return await Book.find();//read
};

module.exports = {
    deleteUser,
    deleteBook,
    createUser,
    createBook,
    updateUser,
    updateBook,
    findUser,
    findBook,
};