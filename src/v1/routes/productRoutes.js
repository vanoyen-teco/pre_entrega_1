const express = require("express");
const productController = require("../../controllers/productController");
const router = express.Router();

router.get('/:id?', productController.getProducts);
router.post("/", productController.createNewProduct);

module.exports = router;
