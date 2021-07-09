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
}

module.exports = UserService;
