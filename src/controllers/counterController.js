const User = require("../models/User");
const Product = require("../models/Product");

exports.getCounters = async (req, res) => {
  const userCount = await User.countDocuments();
  const productCount = await Product.countDocuments();
  res.json({ usuarios: userCount, productos: productCount });
};
