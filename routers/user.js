const bodyParser = require('body-parser');
const express = require('express');
const {
    getUser,
    postUser,
    putUser,
    deleteUser,
} = require('../service/user');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const routerUser = express.Router();
routerUser.get('/', async function(request, response) {
    getUser(request, response);
}).post('/', urlencodedParser, async function(request, response) {
    postUser(request, response);
}).put('/', urlencodedParser, async function(request, response) {
    putUser(request, response);
}).delete('/', urlencodedParser, async function(request, response) {
    deleteUser(request, response);
});

module.exports = {
    routerUser,
};