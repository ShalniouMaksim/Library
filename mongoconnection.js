const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connect = () =>  {
    console.log('connected');
mongoose.connect(
    process.env.MONGOBD_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
);
};
module.exports = {
    connect,
};