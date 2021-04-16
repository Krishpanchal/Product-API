const Cart = require("../model/cartModal");
const Product = require("../model/productModel");
const factory = require("./handlerFactory");

exports.addCartItem = async (req, res) => {
  try {
    const product = await Product.findById(req.body.product);
    if (!product) {
      return res.json({ error: "Not product found" });
    }

    const item = await Cart.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        item,
      },
    });
  } catch (error) {
    res.status(201).json({
      status: "failure",
      data: {
        message: error,
      },
    });
  }
};

exports.getCartItems = factory.getAll(Cart, {
  path: "product",
  fields: "name description price",
});

exports.getCartItem = factory.getOne(Cart, {
  path: "product",
  fields: "name description price",
});

exports.updateCartItem = factory.updateOne(Cart);
exports.deleteCartItem = factory.deleteOne(Cart);
