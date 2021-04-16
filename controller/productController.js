const multer = require("multer");

const Product = require("../model/productModel");
const AppError = require("../utils/appError");
// const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img/products");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `product-${req.body.name}-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload an image"), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadProductPhoto = upload.single("image");

exports.createProduct = catchAsync(async (req, res, next) => {
  const body = { ...req.body };

  if (req.file) body.image = req.file.filename;
  const doc = await Product.create(body);

  res.status(201).json({
    status: "success",
    data: {
      doc,
    },
  });
});

exports.getProduct = factory.getOne(Product);
exports.getAllProducts = factory.getAll(Product);

exports.updateProduct = factory.updateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);
