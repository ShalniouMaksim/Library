const express = require('express');
const Joi = require('joi');
const bodyParser = require('body-parser');
const {
  getBook,
  postBook,
  putBook,
  deleteBook,
} = require('../service/book');

const schemaBookValidate = Joi.object().keys({
  id: Joi.string(),
  name: Joi.string(),
  author: Joi.string(),
  date: Joi.string(),
  available: Joi.boolean(),
  page: Joi.string(),
  genre: Joi.string(),
  description: Joi.string(),
  image: Joi.string(),
});
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const routerBook = express.Router();
routerBook.get('/', async(request, response) => {
  const res = await getBook();
  response.status(res.status).send(res.book);
}).post('/', urlencodedParser, async(request, response) => {
  Joi.validate(request.body, schemaBookValidate, async err => {
    if (err) {
      response.status(400).send('Error validation');
    } else {
      const res = await postBook(request.body);
      response.status(res.status).send(res.book);
    }
  });
}).put('/', urlencodedParser, async(request, response) => {
  Joi.validate(request.body, schemaBookValidate, async err => {
    if (err) {
      response.status(400).send('Error validation');
    } else {
      const res = await putBook(request.body);
      response.status(res.status).send(res.book);
    }
  });
}).delete('/', urlencodedParser, async(request, response) => {
  Joi.validate(request.body, schemaBookValidate, async err => {
    if (err) {
      response.status(400).send('Error validation');
    } else {
      const res = await deleteBook(request.body);
      response.status(res.status).send(res.book);
    }
  });
});

module.exports = {
  routerBook,
};
