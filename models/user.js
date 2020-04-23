const mongoose = require('mongoose');
const { uuid } = require('uuidv4');
const User = mongoose.model('User', {
    id: String,
    firstName: String,
    lastName: String,
    mail: String,
    department: String,
    location: String,
    officeNumber: Number,
});

const removeUser = async id => {
    User.findOneAndDelete({ id }, (err, res) => {
        if (res) console.log(res);
        else
            console.log('Not deleted');
    }); //delete
};

const createUser = async user => {
    User.create({
        id: uuid(),
        firstName: user.firstName,
        lastName: user.lastName,
        mail: user.mail,
        department: user.department,
        location: user.location,
        officeNumber: user.officeNumber,
    });
};

const updateUser = async user => {
    await User.updateOne({ id: user.id }, user); // req update
};

const findUser = async() => {
    return await User.find(); // read
};

module.exports = {
    removeUser,
    createUser,
    updateUser,
    findUser,
};