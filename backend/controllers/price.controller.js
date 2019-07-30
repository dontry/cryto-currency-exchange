const Price = require("../models/price.model");

function find(req, res, next) {
  Price.find(req.query)
    .then(result => {
      if (result) {
        res.json(result);
      }
    })
    .catch(err => {
      return next(err);
    });
}

function findCurrency(req, res, next) {
  Price.find()
    .distinct("currency")
    .then(result => {
      if (result) {
        res.json(result);
      }
    })
    .catch(err => {
      return next(err);
    });
}

function findDate(req, res, next) {
  Price.find()
    .distinct("date")
    .then(result => {
      if (result) {
        res.json(result);
      }
    })
    .catch(err => {
      return next(err);
    });
}

module.exports = { find, findCurrency, findDate };
