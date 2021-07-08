const User = require("../models/userModel");

class UserService {
  addUser(data) {
    const newUser = new User(data);
    return newUser.save();
  }
}

module.exports = UserService;
