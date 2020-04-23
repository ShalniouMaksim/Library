const express = require('express');
const bodyParser = require('body-parser');
const {
    getBook,
    postBook,
    putBook,
    deleteBook,
} = require('../service/book');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const routerBook = express.Router();
routerBook.get('/', async function(request, response) {
    getBook(request, response);
}).post('/', urlencodedParser, async function(request, response) {
    postBook(request, response);
}).put('/', urlencodedParser, async function(request, response) {
    putBook(request, response);
}).delete('/', urlencodedParser, async function(request, response) {
    deleteBook(request, response);
});

module.exports = {
    routerBook,
};