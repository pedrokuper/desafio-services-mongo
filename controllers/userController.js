class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async addUser(req, res) {
    const { body } = req;

    await this.userService.addUser(body);
    // console.log(body);
    res.send("agregar usuario");
  }
}

module.exports = UserController;
