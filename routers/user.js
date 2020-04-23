const bodyParser = require('body-parser');
const Joi = require('joi');
const express = require('express');
const {
  getUser,
  postUser,
  putUser,
  deleteUser,
} = require('../service/user');

const regex = /[(\W|^)[\w.\\-]{0,25}@(innowise-group)\.com(\W|$)/;
const schemaUserValidate = Joi.object().keys({
  id: Joi.string(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  mail: Joi.string().regex(regex),
  department: Joi.string(),
  location: Joi.string(),
  officeNumber: Joi.number(),
});
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const routerUser = express.Router();
routerUser.get('/', async(request, response) => {
  const usersGet = await getUser();
  response.send(usersGet);

}).post('/', urlencodedParser, async(request, response) => {
  if (request.body) {
    Joi.validate(request.body, schemaUserValidate, async err => {
      if (err) {
        response.sendStatus(400);
      } else {
        const res = await postUser(request.body);
        response.sendStatus(res);
      }
    });
  }
}).put('/', urlencodedParser, async(request, response) => {
  if (request.body.id) {
    Joi.validate(request.body, schemaUserValidate, async err => {
      if (err) {
        response.sendStatus(400);
      } else {
        const res = await putUser(request.body);
        response.sendStatus(res);
      }
    });
  }
}).delete('/', urlencodedParser, async(request, response) => {
  if (request.body.id) {
    const res = await deleteUser(request.body.id);
    response.sendStatus(res);
  } else {
    response.sendStatus(400);
  }
});

module.exports = {
  routerUser,
};
