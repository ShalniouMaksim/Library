const Joi = require('joi');
const {
    removeBook,
    createBook,
    updateBook,
    findBook,
} = require('../models/book');

const schemaBookValidate = Joi.object().keys({
    id: Joi.string(),
    name: Joi.string(),
    author: Joi.string(),
    date: Joi.string(),
    available: Joi.boolean(),
    page: Joi.string(),
    genre: Joi.string(),
});

const getBook = async(request, response) => {
    const booksGet = await findBook();
    if (booksGet.length !== 0) {
        response.send(booksGet);
    } else {
        response.send('Books is empty.');
    }
};

const postBook = async(request, response) => {
    if (request.body) {
        Joi.validate(request.body, schemaBookValidate, function(err) {
            if (err) {
                response.sendStatus(400);
            } else {
                createBook(request.body);
                response.sendStatus(201);
            }
        });
    }
};

const putBook = async(request, response) => {
    if (request.body.id) {
        Joi.validate(request.body, schemaBookValidate, function(err) {
            if (err) {
                response.sendStatus(400);
            } else {
                updateBook(request.body);
                response.sendStatus(200);
            }
        });
    }
};

const deleteBook = async(request, response) => {
    if (request.body.id) {
        removeBook(request.body.id);
        response.sendStatus(200);
    } else
        response.sendStatus(400);
};

module.exports = {
    getBook,
    postBook,
    putBook,
    deleteBook,
};