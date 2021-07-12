const dayjs = require("dayjs");

class SaleController {
  constructor(saleService, productService) {
    this.saleService = saleService;
    this.productService = productService;
    this.date = dayjs();
  }

  async addSale(req, res) {
    const { user, product } = req.body;
    const _product = await this.productService.getProductByName(product);

    const date = this.date.format("DD/MM/YYYY h:mm:ss a");

    const data = {
      product: _product,
      user: user,
      date: date,
    };
    const sale = await this.saleService.addSale(data);
    res.send("sale");
  }

  async getSales(req, res) {
    const sales = await this.saleService.getSales();
    res.json(sales).status(200);
  }

  async getSaleById(req, res) {
    const { id } = req.params;
    const sale = await this.saleService.getSaleById(id);
    res.json(sale).status(200);
  }

  async getSaleByUser(req, res) {
    const { handler } = req.params;
    const sale = await this.saleService.getSaleByUser(handler);
    res.json(sale).status(200);
  }
}

module.exports = SaleController;
