const Price = require("./price.model");
const prices = require("../assets/price.json");

const createPrices = async () => {
  prices.forEach(async price => {
    const doc = new Price(price);
    await doc.save();
  });
};

module.exports = { createPrices };
