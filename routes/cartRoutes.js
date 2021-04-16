const express = require("express");
const cartController = require("../controller/cartController");

const router = express.Router();

router
  .route("/")
  .get(cartController.getCartItems)
  .post(cartController.addCartItem);

router
  .route("/:id")
  .get(cartController.getCartItem)
  .patch(cartController.updateCartItem)
  .delete(cartController.deleteCartItem);

module.exports = router;
