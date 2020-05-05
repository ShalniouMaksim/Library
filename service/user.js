const {
  removeUser,
  createUser,
  updateUser,
  findUser,
} = require('../models/user');

const getUser = async() => {
  const user = await findUser();
  if (user) {
    return { status: 200, user };
  } else
    return { status: 500, user: 'Get user returned error!' };
};


const postUser = async user => {
  if (user) {
    if (await createUser(user)) {
      return { status: 200, user };
    } else {
      return { status: 500, user: 'Create user returned error!' };
    }
  }
};

const putUser = async user => {
  if (user.id) {
    if (await updateUser(user)) {
      return { status: 200, user };
    } else {
      return { status: 500, user: 'Update user returned error!' };
    }
  } else
    return { status: 400, user: 'Error validation' };
};

const deleteUser = async user => {
  if (user.id) {
    if (await removeUser(user.id)) {
      return { status: 200, user };
    } else {
      return { status: 500, user: 'Delete user returned error!' };
    }
  } else {
    return { status: 400, user: 'Error validation' };
  }
};

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser,
};
