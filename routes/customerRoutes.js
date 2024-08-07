const express = require('express')
const { getProducts, buyProduct } = require('../controllers/customerController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/products', authMiddleware, getProducts)
router.post('/buy', authMiddleware, buyProduct)

module.exports = router