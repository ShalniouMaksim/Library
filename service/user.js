const {
  removeUser,
  createUser,
  updateUser,
  findUser,
} = require('../models/user');

const getUser = async() => {
  const usersGet = await findUser();
  if (usersGet.length !== 0) {
    return usersGet;
  } else {
    return 'Users is empty.';
  }

};

const postUser = async user => {
  if (user) {
    if (createUser(user)) {
      return 201;
    } else {
      return 400;
    }
  }
};

const putUser = async user => {
  if (await updateUser(user)) {
    return 200;
  } else {
    return 400;
  }
};

const deleteUser = async userId => {
  if (await removeUser(userId)) {
    return 200;
  } else {
    return 400;
  }
};

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser,
};
