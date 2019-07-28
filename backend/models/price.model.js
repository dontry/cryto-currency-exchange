const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dateRegex = /([12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/;
const priceRegex = /^([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/;

const QuoteSchema = new Schema({
  time: { type: String, required: true },
  price: {
    type: String,
    required: true,
    validate: {
      validator: v => {
        return priceRegex.test(v);
      },
      message: props => `${props.value} is not in a valid price format.`
    }
  }
});

const PriceSchema = new Schema({
  currency: { type: String, required: true },
  date: {
    type: String,
    required: true,
    validate: {
      validator: v => {
        return dateRegex.test(v);
      },
      message: props => `${props.value} is not in a valid date format.`
    }
  },
  quotes: [QuoteSchema]
});

// Export the model
module.exports = mongoose.model("Price", PriceSchema);
