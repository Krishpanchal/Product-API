// Module require
const express = require("express");

// File require
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controller/errorController");
const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cartRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
