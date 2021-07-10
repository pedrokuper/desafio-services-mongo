var express = require("express");
var router = express.Router();

//& Products
const ProductController = require("./../controllers/productController");
const ProductService = require("../services/productService");
const ProductInstance = new ProductController(new ProductService());
//& Users
const UserController = require("./../controllers/userController");
const UserService = require("./../services/userService");
const UserInstance = new UserController(new UserService());
//& Sales
const SaleController = require("./../controllers/saleController");
const SaleService = require("./../services/saleService");
const SaleInstance = new SaleController(new SaleService());

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//!Product Routes

router.post("/products", (req, res) => {
  ProductInstance.addProduct(req, res);
});

router.get("/products", (req, res) => {
  ProductInstance.getProducts(req, res);
});

router.get("/products/freeshipping", (req, res) => {
  ProductInstance.getFreeShipping(req, res);
});

router.put("/products/discount", (req, res) => {
  ProductInstance.getDiscount(req, res);
});

router.get("/products/:id", (req, res) => {
  ProductInstance.getProductById(req, res);
});

router.put("/product/:id", (req, res) => {
  ProductInstance.modifyProduct(req, res);
});

//!User Routes

router.post("/users", (req, res) => {
  return UserInstance.addUser(req, res);
});

router.get("/users", (req, res) => {
  return UserInstance.getUsers(req, res);
});

router.get("/user/:id", (req, res, next) => {
  return UserInstance.getUserById(req, res, next);
});

router.get("/user/handler/:handler", (req, res) => {
  return UserInstance.getUserByHandler(req, res);
});

module.exports = router;
