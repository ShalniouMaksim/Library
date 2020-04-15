

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const { routerUser } = require('./routers/user');
const { routerBook } = require('./routers/book');
const { connect } = require('./mongoconnection');
connect();
async function start() {
  try {
    app.use('/user', routerUser);
    app.use('/book', routerBook);
    app.listen(PORT, () => {
      console.log('Server has been started...');
    });

  } catch (e) {
    console.log(e, ' Error');
  }
}
start();

module.exports = {
  express,
};



