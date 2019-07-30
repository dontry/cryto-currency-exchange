const express = require("express");
const bodyParser = require("body-parser");
const price = require("./routes/price.route"); // Imports routes for the products
const currency = require("./routes/currency.route"); // Imports routes for the products
const date = require("./routes/date.route");
const models = require("./models");
const seed = require("./models/seed");
const errorHandler = require("./middlewares/errorhandler.middleware");
const db = require("./models/db");
require("dotenv").config({});
const port = 8686;

// initialize our express app
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(errorHandler);

app
  .get("/", (req, res) => {
    return res.send("Crypto currency exchange backend");
  })
  .use(price)
  .use(date)
  .use(currency);

db.connectDb().then(async () => {
  if (process.env.SEED_DATABASE) {
    // await models.Price.deleteMany({});
    await seed.createPrices();
  }

  app.listen(port, () => {
    console.log(`Server is up and running on port  ${port}`);
  });
});

module.exports = app;
