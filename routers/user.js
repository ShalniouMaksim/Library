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
  const res = await getUser();
  response.status(res.status).send(res.user);

}).post('/', urlencodedParser, async(request, response) => {
  Joi.validate(request.body, schemaUserValidate, async err => {
    if (err) {
      response.status(400).send('Error validation');
    } else {
      const res = await postUser(request.body);
      response.status(res.status).send(res.user);
    }
  });
}).put('/', urlencodedParser, async(request, response) => {
  Joi.validate(request.body, schemaUserValidate, async err => {
    if (err) {
      response.status(400).send('Error validation');
    } else {
      const res = await putUser(request.body);
      response.status(res.status).send(res.user);
    }
  });
}).delete('/', urlencodedParser, async(request, response) => {
  Joi.validate(request.body, schemaUserValidate, async err => {
    if (err) {
      response.status(400).send('Error validation');
    } else {
      const res = await deleteUser(request.body);
      response.status(res.status).send(res.user);
    }
  });
});

module.exports = {
  routerUser,
};
