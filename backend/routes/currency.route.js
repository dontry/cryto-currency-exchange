const express = require("express");
const router = express.Router();

const controller = require("../controllers/price.controller");

router.get("/currencies", controller.findCurrency);
module.exports = router;
