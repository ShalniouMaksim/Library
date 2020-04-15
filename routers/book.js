
const express = require('express');
const routerBook = express.Router();
const {
    deleteBook,
    createBook,
    updateBook,
    findBook,
  } = require('../models/book');
  routerBook.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  routerBook.get('/',async function (request, response) {
    response.send(`${await findBook()}`);
  }).post('/',async function (request, response) {
    if (request.query) {
      createBook(request.query);
      response.sendStatus(200);
    }
    else
      response.sendStatus(400);
  }).put('/',async function (request, response) {
    if (request.query.id) {
      updateBook(request.query.id, request.query);
      response.sendStatus(200);
    }
    else
      response.sendStatus(400);
  }).delete('/',async function (request, response) {
    if (request.query.id) {
      deleteBook(request.query.id);
      response.sendStatus(200);
    }
    else
      response.sendStatus(400);
  });

  module.exports = {
    routerBook,
  };