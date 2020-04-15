const mongoose = require('mongoose');
const { uuid } = require('uuidv4');
const User = mongoose.model('User', {
    id: String, firstName: String,
    lastName: String, mail: String,
    department: String, location: String,
    officeNumber: Number
});

const deleteUser = async (id) => {
    const users = await findUser();
    users.map((user) => {
        if (user.id === id) {
            User.deleteOne(user, function (err, result) {
                if (err) return console.log(err);
                console.log(result);
            });//delete
        }
    });
};

const createUser = async (user) => {
    User.create({
        id: uuid(), firstName: user.firstName,
        lastName: user.lastName,
        mail: user.mail, department: user.department, location: user.location, officeNumber: user.officeNumber
    });
};

const updateUser = async (id, user) => {
    await User.updateOne({ id }, user);// req update
};

const findUser = async () => {
    return await User.find();// read
};

module.exports = {
    deleteUser,
    createUser,
    updateUser,
    findUser,
};