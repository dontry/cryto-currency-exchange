const express = require("express");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const controller = require("../controllers/price.controller");

// a simple test url to check that all of our files are communicating correctly.
router.get("/prices", controller.find);
module.exports = router;
