const Product = require('../models/Product')

exports.createProduct = async (req, res) => {
  const { name, description, price } = req.body
  const merchant_id = req.user.id

  const product = await Product.createProduct(name, description, price, merchant_id);
  res.status(201).json(product)
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params
  const { name, description, price } = req.body

  const product = await Product.updateProduct(id, name, description, price)
  res.json(product)
}

exports.deleteProduct = async (req, res) => {
  const { id } = req.params

  const product = await Product.deleteProduct(id)
  res.json(product)
}
