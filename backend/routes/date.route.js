const express = require("express");
const router = express.Router();

const controller = require("../controllers/price.controller");

router.get("/dates", controller.findDate);
module.exports = router;
