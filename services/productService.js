const Product = require("./../models/productModel");

class ProductService {
  getProducts() {
    const query = Product.find().exec();
    return query;
  }

  addProduct(data) {
    const newProduct = new Product(data);
    return newProduct.save();
  }
}

module.exports = ProductService;
