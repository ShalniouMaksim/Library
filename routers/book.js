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
  response.send(res);
}).post('/', urlencodedParser, async(request, response) => {
  if (request.body) {
    Joi.validate(request.body, schemaBookValidate, async err => {
      if (err) {
        response.sendStatus(400);
      } else {
        const res = await postBook(request.body);
        response.sendStatus(res);
      }
    });
  }
}).put('/', urlencodedParser, async(request, response) => {
  if (request.body.id) {
    Joi.validate(request.body, schemaBookValidate, async err => {
      if (err) {
        response.sendStatus(400);
      } else {
        const res = await putBook(request.body);
        response.sendStatus(res);
      }
    });
  }
}).delete('/', urlencodedParser, async(request, response) => {
  if (request.body.id) {
    const res = await deleteBook(request.body.id);
    response.sendStatus(res);
  } else
    response.sendStatus(400);
});

module.exports = {
  routerBook,
};
