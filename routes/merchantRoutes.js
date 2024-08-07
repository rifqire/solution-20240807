const express = require('express')
const { createProduct, updateProduct, deleteProduct } = require('../controllers/merchantController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/products', authMiddleware, createProduct)
router.put('/products/:id', authMiddleware, updateProduct)
router.delete('/products/:id', authMiddleware, deleteProduct)

module.exports = router