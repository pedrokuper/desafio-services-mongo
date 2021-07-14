const Product = require("./../models/productModel");

class ProductService {
  getProducts(data) {
    const query = Product.find().skip(data.offset).limit(data.limit).exec();
    return query;
  }

  getProductByName(name) {
    const query = Product.findOne({ name: name }).exec();
    return query;
  }

  getProductById(id) {
    const query = Product.findById({ _id: id }).exec();
    return query;
  }

  getFreeShipping() {
    const query = Product.find({ shipping: "free" }).exec();
    return query;
  }

  addProduct(data) {
    const newProduct = new Product(data);
    return newProduct.save();
  }

  modifyProduct(id, data) {
    const product = Product.findByIdAndUpdate({ _id: id }, data).exec();
    return product;
  }

  addDiscount(data) {
    const update = Product.updateMany(data).exec();
    return update;
  }
}

module.exports = ProductService;
