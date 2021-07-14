const User = require("../models/userModel");

class UserService {
  addUser(data) {
    const newUser = new User(data);
    return newUser.save();
  }

  getUsers(data) {
    const query = User.find().limit(data.limit).skip(data.offset).exec();
    console.log(data.limit);
    return query;
  }

  getUserById(id) {
    const user = User.findById(id);
    return user;
  }

  getUserByHandler(handler) {
    const user = User.findOne({ user: handler }).exec();
    return user;
  }
}

module.exports = UserService;
