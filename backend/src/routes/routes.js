const { Router } = require("express");
const router = Router();

const {saveUser}=require("../controllers/userController");
const {saveProduct}=require("../controllers/productController");
const {saveSale}=require("../controllers/saleController");