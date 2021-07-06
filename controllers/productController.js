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
    console.log(id);
    const data = req.body;
    console.log(data)
    const product = await this.productService.modifyProduct(id, data);
    console.log(product);
    res.sendStatus(200);
  }
}

module.exports = ProductController;
