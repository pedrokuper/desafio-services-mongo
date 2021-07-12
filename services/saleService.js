const Sale = require("../models/saleModel");

class SaleService {
  addSale(data) {
    const newSale = new Sale(data);
    return newSale.save();
  }

  getSales() {
    const query = Sale.find().exec();
    return query;
  }

  getSaleById(id) {
    const query = Sale.findById(id).exec();
    return query;
  }
  getSaleByUser(user) {
    const query = Sale.find({ user: user }).exec();
    return query;
  }
}

module.exports = SaleService;
