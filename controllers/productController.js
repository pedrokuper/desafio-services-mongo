class ProductController {
  constructor(productService) {
    this.productService = productService;
    this.limit = 3;
  }

  async getProducts(req, res) {
    const { page } = req.query;

    const data = {
      limit: this.limit,
      offset: this.limit * (page - 1),
    };
    if (page) {
      try {
        const query = await this.productService.getProducts(data);
        res.json(query).status(200);
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    } else {
      res.sendStatus(400);
    }
  }

  async getProductById(req, res) {
    const { id } = req.params;
    if (id) {
      try {
        const query = await this.productService.getProductById(id);
        res.json(query).status(200);
      } catch (e) {
        res.send("Información incorrecta. Revise el ID").status(500);
      }
    } else {
      res.sendStatus(400);
    }
  }

  async addProduct(req, res) {
    const { price, name, stockQty } = req.body;
    if ((price, name, stockQty)) {
      try {
        await this.productService.addProduct(req.body);
        return res.sendStatus(200);
      } catch (err) {
        console.log(err);
        return res.sendStatus(500);
      }
    } else {
      res.sendStatus(400);
    }
  }

  async modifyProduct(req, res) {
    const { id } = req.params;
    const { stockQty, price, name, shipping, description, discount, category } =
      req.body;

    //Is this OK? Or is this too much?
    if (
      stockQty ||
      price ||
      name ||
      shipping ||
      description ||
      category ||
      discount
    ) {
      try {
        await this.productService.modifyProduct(id, req.body);
        res.send("Producto actualizado correctamente").status(200);
      } catch {
        res.sendStatus(500);
      }
    } else {
      res.sendStatus(400);
    }
  }

  async getFreeShipping(req, res, next) {
    try {
      const query = await this.productService.getFreeShipping();
      res.json(query).status(200);
    } catch (e) {
      res.sendStatus(500);
    }
  }

  async getDiscount(req, res) {
    const { discount } = req.body;
    if (discount) {
      try {
        await this.productService.addDiscount(body);
        res.sendStatus(200);
      } catch (e) {
        res.sendStatus(500);
      }
    } else {
      res.sendStatus(400);
    }
  }
}
module.exports = ProductController;
