class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getUsers(req, res) {
    const users = await this.userService.getUsers();
    console.log(users)
    res.send("usuarios");
  }

  async addUser(req, res) {
    const { body } = req;

    await this.userService.addUser(body);
    // console.log(body);
    res.send("agregar usuario");
  }
}

module.exports = UserController;
