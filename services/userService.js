const User = require("../models/userModel");

class UserService {
  addUser(data) {
    const newUser = new User(data);
    return newUser.save();
  }

  getUsers() {
    const query = User.find().exec();
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
