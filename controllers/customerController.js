const Product = require('../models/Product')
const Transaction = require('../models/Transaction')

exports.getProducts = async (req, res) => {
  const products = await Product.getProducts()
  res.json(products)
}

exports.buyProduct = async (req, res) => {
  const { product_id } = req.body
  const customer_id = req.user.id

  const product = await Product.getProductById(product_id)
  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }

  const points = Math.floor(product.price)
  const transaction = await Transaction.createTransaction(product_id, customer_id, points)

  res.status(201).json(transaction)
}
