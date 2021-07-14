class UserController {
  constructor(userService) {
    this.userService = userService;
    this.limit = 10;
  }

  async getUsers(req, res) {
    const { page } = req.query;
    const data = {
      limit: this.limit,
      offset: this.limit * (page - 1),
    };
    if (page) {
      try {
        const users = await this.userService.getUsers(data);
        res.json(users).status(200);
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    } else {
      res.sendStatus(400);
    }
  }

  async getUserById(req, res) {
    const { id } = req.params;
    if (id) {
      try {
        const user = await this.userService.getUserById(id);
        res.json(user).status(200);
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    } else {
      res.sendStatus(400);
    }
  }

  async getUserByHandler(req, res) {
    const { handler } = req.params;
    if (handler) {
      try {
        const user = await this.userService.getUserByHandler(handler);
        res.json(user);
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    } else {
      res.sendStatus(400);
    }
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
