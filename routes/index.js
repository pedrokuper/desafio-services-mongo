var express = require("express");
var router = express.Router();

const ProductController = require("./../controllers/productController");
const ProductService = require("../services/productService");
const ProductInstance = new ProductController(new ProductService());

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/products", (req, res) => {
  ProductInstance.addProduct(req, res);
});

router.get("/products", (req, res) => {
  ProductInstance.getProducts(req, res);
});
router.get("/products/:id", (req, res) => {
  ProductInstance.getProductById(req, res);
});

router.put("/product/:id", (req, res) => {
  ProductInstance.modifyProduct(req, res);
});

module.exports = router;
