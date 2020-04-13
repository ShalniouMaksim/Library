const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const express = require('express');
const app = express();
async function start() {
  try {
    mongoose.connect(
      'mongodb+srv://@cluster0-qiaqu.mongodb.net/test?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true },
    );
    const Library = mongoose.model('Library', { name: String });
    const User = mongoose.model('User', { id: Number, firstName: String, lastName: String });
    const Book = mongoose.model('Book', { id: Number, author: String , available: Boolean});

    app.get('/', async function (req, res) {
        User.remove({ id: 1, firstName: 'Maxim', lastName: 'Shalniou' }, function(err, result){     
      if(err) return console.log(err);
      console.log(result);
  });
  Book.remove({ id: 1, author: 'Pushkin', available: true }, function(err, result){     
      if(err) return console.log(err);
      console.log(result);
  });
      async function getUsers(){
        const findUsers = await User.find();
        console.log(findUsers);
      }
      async function getBooks(){
        const findBooks = await Book.find();
        console.log(findBooks);
      }
    const Users = new User({ id: 1, firstName: 'Maxim', lastName: 'Shalniou' });
    const Books = new Book({ id: 1, author: 'Pushkin', available: true });
    await Users.save();
    await Books.save();
    console.log(await User.updateOne({firstName: 'Maxim'}, {firstName: 'Misha'}))
    const findUsers = await User.find();
    const findBooks = await Book.find();
      res.send({findBooks: findBooks, findUsers: findUsers} );
    });
    app.listen(PORT, () => {
      console.log('Server has benn started...');
    });

  } catch (e) {
    console.log(e, ' Error');
  }
}
start();
