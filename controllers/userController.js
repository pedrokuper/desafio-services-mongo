class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getUsers(req, res) {
    const users = await this.userService.getUsers();
    res.json(users);
  }

  async getUserById(req, res, next) {
    const { id } = req.params;
    const user = await this.userService.getUserById(id);
    res.json(user).status(200);
    if (!user) {
      next("route");
    }
  }

  async getUserByHandler(req, res) {
    const { handler } = req.params;
    const user = await this.userService.getUserByHandler(handler);
    res.json(user);
  }

  async addUser(req, res) {
    const { body } = req;

    await this.userService.addUser(body);
    // console.log(body);
    res.send("agregar usuario");
  }
}

module.exports = UserController;
