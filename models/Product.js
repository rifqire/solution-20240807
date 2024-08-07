const pool = require('../config/db')

class Product {
  static async createProduct(name, description, price, merchant_id) {
    const result = await pool.query(
      'INSERT INTO products (name, description, price, merchant_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, price, merchant_id]
    );
    return result.rows[0]
  }

  static async getProducts() {
    const result = await pool.query('SELECT * FROM products')
    return result.rows
  }

  static async getProductById(id) {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id])
    return result.rows[0]
  }

  static async updateProduct(id, name, description, price) {
    const result = await pool.query(
      'UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *',
      [name, description, price, id]
    );
    return result.rows[0]
  }

  static async deleteProduct(id) {
    const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id])
    return result.rows[0]
  }
}

module.exports = Product
