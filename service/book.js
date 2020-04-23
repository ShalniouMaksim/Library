const {
  removeBook,
  createBook,
  updateBook,
  findBook,
} = require('../models/book');


const getBook = async() => {
  const booksGet = await findBook();
  if (booksGet.length !== 0) {
    return booksGet;
  } else {
    return 'Books is empty.';
  }
};

const postBook = async book => {
  if (book) {
    if (createBook(book)) {
      return 201;
    } else {
      return 400;
    }
  }
};

const putBook = async book => {
  if (await updateBook(book)) {
    return 200;
  } else {
    return 400;
  }
};

const deleteBook = async bookId => {
  if (await removeBook(bookId)) {
    return 200;
  } else {
    return 400;
  }
};

module.exports = {
  getBook,
  postBook,
  putBook,
  deleteBook,
};
