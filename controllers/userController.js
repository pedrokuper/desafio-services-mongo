class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getUsers(req, res) {
    const { limit } = req.query;
    const data = {
      limit: parseInt(limit),
    };
    const users = await this.userService.getUsers(data);

    res.json(users);
  }

  async getUserById(req, res, next) {
    const { id } = req.params;
    const user = await this.userService.getUserById(id);
    res.json(user).status(200);
  }

  async getUserByHandler(req, res) {
    const { handler } = req.params;
    const user = await this.userService.getUserByHandler(handler);
    res.json(user);
  }

  async addUser(req, res) {
    const data = req.body;
    const { user, name } = data;
    if (user && name) {
      try {
        await this.userService.addUser(data);
        res.send("Usuario creado").status(200);
      } catch (err) {
        console.log(err);
        res.send("Error en la creación").status(500);
      }
    } else {
      res.sendStatus(400);
    }
  }
}

module.exports = UserController;
