const { Router } = require("express");

const {
  getProducts,
  getProduct,
  saveProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  updateStock
} = require("../controllers/productController");

const router = Router();

router.route("/").get(getProducts);
router.route("/").post(saveProduct);

router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);
router.route("/category").post(getProductsByCategory);
router.route("/getproduct").post(getProduct);
router.route("/updatestock").post(updateStock);

module.exports = router;