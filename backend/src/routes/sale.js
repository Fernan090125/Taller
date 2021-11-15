const { Router } = require("express");

const {
  getSales,
  getSale,
  saveSale,
  updateSale,
  deleteSale,
} = require("../controllers/saleController");


const router = Router();

router.route("/").get(getSales).post(saveSale);

router.route("/:id").get(getSale).put(updateSale).delete(deleteSale);

module.exports = router;