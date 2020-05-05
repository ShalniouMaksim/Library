const {
  removeBook,
  createBook,
  updateBook,
  findBook,
} = require('../models/book');


const getBook = async() => {
  const book = await findBook();
  if (book) {
    return { status: 200, book };
  } else
    return { status: 500, book: 'Get book returned error!' };
};

const postBook = async book => {
  if (book) {
    if (await createBook(book)) {
      return { status: 200, book };
    } else {
      return { status: 500, book: 'Create book returned error!' };
    }
  }
};

const putBook = async book => {
  if (book.id) {
    if (await updateBook(book)) {
      return { status: 200, book };
    } else {
      return { status: 500, book: 'Update book returned error!' };
    }
  } else
    return { status: 400, book: 'Error validation' };
};

const deleteBook = async book => {
  if (book.id) {
    if (await removeBook(book.id)) {
      return { status: 200, book };
    } else {
      return { status: 500, book: 'Delete book returned error!' };
    }
  } else
    return { status: 400, book: 'Error validation' };
};

module.exports = {
  getBook,
  postBook,
  putBook,
  deleteBook,
};
