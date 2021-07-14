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
    };

    if (data.product && data.user) {
      try {
        const sale = await this.saleService.addSale(data);
        res.send("Venta agregada exitosamente").status(200);
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    } else {
      res.sendStatus(400);
    }
  }

  async getSales(req, res) {
    try {
      const sales = await this.saleService.getSales();
      res.json(sales).status(200);
    } catch (e) {
      res.sendStatus(500);
    }
  }

  async getSaleById(req, res) {
    const { id } = req.params;
    if (id) {
      try {
        const sale = await this.saleService.getSaleById(id);
        res.json(sale).status(200);
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    } else {
      res.sendStatus(400);
    }
  }

  async getSaleByUser(req, res) {
    const { handler } = req.params;
    if (handler) {
      try {
        const sale = await this.saleService.getSaleByUser(handler);
        res.json(sale).status(200);
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    } else {
      res.sendStatus(400);
    }
  }
}

module.exports = SaleController;
