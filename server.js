
const {
  deleteUser, deleteBook, createUser,
  createBook, updateUser, updateBook,
  findUser, findBook,
} = require('./helper');

const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();


async function start() {
  try {

          app.post('/createBook', async function (request, response) {
          if (request.query.author && request.query.available) {
        createBook(request.query.author, request.query.available);
        response.sendStatus(200);
      }
      else
        response.sendStatus(400);
    });
      app.post('/createUser', async function (request, response) {
      if (request.query.firstName && request.query.lastName) {
        createUser(request.query.firstName, request.query.lastName);
        response.sendStatus(200);
      }
      else
        response.sendStatus(400);
    });

      app.delete('/deleteUser', async function (request, response) {
      if (request.query.firstName && request.query.lastName) {
        deleteUser(request.query.firstName, request.query.lastName);
        response.sendStatus(200);
      }
      else {
        response.sendStatus(400);
      }
    });
    app.delete('/deleteBook', async function (request, response) {
      if (request.query.author && request.query.available) {
        deleteBook(author, available);
        response.sendStatus(200);
      }
      else
        response.sendStatus(400);
    });

    app.put('/updateUser', async function (request, response) {
      if (request.query.oldFirstName && request.query.newFirstName) {
        updateUser(request.query.oldFirstName, request.query.newFirstName);
        response.sendStatus(200);
      }
      else
        response.sendStatus(400);
    });
    app.put('/updateBook', async function (request, response) {
      if (request.query.oldAuthor && request.query.newAuthor) {
        updateBook(request.query.oldAuthor, request.query.newAuthor);
        response.sendStatus(200);
      }
      else
        response.sendStatus(400);
    });
    app.get('/findUser', async function (request, response) {
      response.send(`${await findUser()}`);
    });
    app.get('/findBook', async function (request, response) {
      response.send(`${await findBook()}`);
    });
    app.listen(PORT, () => {
      console.log('Server has benn started...');
    });

  } catch (e) {
    console.log(e, ' Error');
  }
}
start();




