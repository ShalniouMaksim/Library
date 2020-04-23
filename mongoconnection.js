const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connect = async() => {

  mongoose.connect(
    process.env.MONGOBD_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
  ).catch(error => { throw new Error(error); });
};

module.exports = {
  connect,
};
