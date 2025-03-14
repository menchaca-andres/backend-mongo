const User = require("../models/User");
const Product = require("../models/Product");

exports.obtenerContadores = async (req, res) => {
  const userCount = await User.countDocuments();
  const productCount = await Product.countDocuments();
  res.json({ usuarios: userCount, productos: productCount });
};
