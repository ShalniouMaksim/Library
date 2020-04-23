const dotenv = require('dotenv');
const express = require('express');
const { routerUser } = require('./routers/user');
const { routerBook } = require('./routers/book');
const { connect } = require('./mongoconnection');
dotenv.config();
const { PORT } = process.env;
const app = express();

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
