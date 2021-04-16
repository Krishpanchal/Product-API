const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: [true, "Product is required"],
  },
  quantity: {
    type: Number,
    required: [true, "A product to cart must have quantity"],
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
