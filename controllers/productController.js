class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  async getProducts(req, res) {
    const query = await this.productService.getProducts();
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
}

module.exports = ProductController;
