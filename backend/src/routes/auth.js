const { Router } = require("express");

const

import * as authController from "../controllers/auth.controller";
import router from "./user";

router.post("/login", authController.login);
router.post("/register", authController.register);