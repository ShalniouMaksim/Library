const express = require('express');
const routerUser = express.Router();
const {
  deleteUser,
  createUser,
  updateUser,
  findUser,
} = require('../models/user');
routerUser.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
routerUser.get('/', async function (request, response) {
  const usersGet = await findUser();
  response.send(`${usersGet}`);
}).post('/', async function (request, response) {
  if (request.query) {
    createUser(request.query);
    response.sendStatus(200);
  }
  else
    response.sendStatus(400);
}).put('/', async function (request, response) {
  if (request.query.id) {
    updateUser(request.query.id, request.query);
    response.sendStatus(200);
  }
  else
    response.sendStatus(400);
}).delete('/', async function (request, response) {
  if (request.query.id) {
    deleteUser(request.query.id);
    response.sendStatus(200);
  }
  else {
    response.sendStatus(400);
  }
});


module.exports = {
  routerUser,
};

