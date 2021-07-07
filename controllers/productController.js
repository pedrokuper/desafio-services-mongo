class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  async getProducts(req, res) {
    const query = await this.productService.getProducts();
    res.json(query).status(200);
  }

  async getProductById(req, res) {
    const { id } = req.params;
    const query = await this.productService.getProductById(id);
    res.json(query).status(200);
  }

  // Sí price, name y stockQty existen, entonces intentá -> agregar el producto y retornar 200 OK
  // Si hay un error (la validación de la base de datos va a saltar como error, si no le pasamos alguno de los items que requiere el modelo)
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

    if (Object.entries(req.body).length !== 0) {
      // Esta linea chequea que el objeto esté vacio. Si usamos solamente req.body pasa la validación como si no estuviera vacío.
      try {
        await this.productService.modifyProduct(id, req.body);
        res.sendStatus(200);
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

  // Hay que pasar la propiedad discount: 0 por el body. Es la idea? O la idea es directamente que a partir de pegarle a a /products/discount se genere el discount: 0 en la base?
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
