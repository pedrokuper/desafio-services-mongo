// TODO : Agregar validaciones para todos los métodos de la api

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
    const bodyParams = ["stockQty", "shipping","name","price", "discount"]

    if ( bodyParams.includes) {
      // Esta linea chequea que el objeto esté vacio. Si usamos solamente req.body pasa la validación como si no estuviera vacío. Object.entries(req.body).length !== 0 &&
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
    const query = await this.productService.getProducts();
    const hasFreeShipping = query.filter((item) => {
      return item.shipping === "free";
    });
    res.json(hasFreeShipping).status(200);
  }

  //Cambiar la lógica de esto para que primero haga la query, chequee si existe discount, y dsp haga el put.
  async getDiscount(req, res) {
    const { body } = req;
    if (Object.entries(body).length !== 0) {
      await this.productService.addDiscount(body);
      res.sendStatus(200);
    } else {
      res.send(400);
    }
  }
}
module.exports = ProductController;
