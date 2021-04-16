const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: [true, "A product must have a description"],
  },
  quantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
