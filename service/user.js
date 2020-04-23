const Joi = require('joi');
const {
    removeUser,
    createUser,
    updateUser,
    findUser,
} = require('../models/user');

const regex = /[(\W|^)[\w.\-]{0,25}@(innowise-group)\.com(\W|$)/;
const schemaUserValidate = Joi.object().keys({
    id: Joi.string(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    mail: Joi.string().regex(regex),
    department: Joi.string(),
    location: Joi.string(),
    officeNumber: Joi.number(),
});

const getUser = async(request, response) => {
    const usersGet = await findUser();
    if (usersGet.length !== 0) {
        response.send(usersGet);
    } else {
        response.send('Users is empty.');
    }
};

const postUser = async(request, response) => {
    if (request.body) {
        Joi.validate(request.body, schemaUserValidate, function(err) {
            if (err) {
                response.sendStatus(400);
            } else {
                createUser(request.body);
                response.sendStatus(201);
            }
        });
    }
};

const putUser = async(request, response) => {
    if (request.body.id) {
        Joi.validate(request.body, schemaUserValidate, function(err) {
            if (err) {
                response.sendStatus(400);
            } else {
                updateUser(request.body);
                response.sendStatus(200);
            }
        });
    }
};

const deleteUser = async(request, response) => {
    if (request.body.id) {
        removeUser(request.body.id);
        response.sendStatus(200);
    } else {
        response.sendStatus(400);
    }
};

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser,
};