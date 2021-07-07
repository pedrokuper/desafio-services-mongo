class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getUsers(req, res) {}
}

module.exports = UserController;
