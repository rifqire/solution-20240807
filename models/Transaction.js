const pool = require('../config/db')

class Transaction {
  static async createTransaction(product_id, customer_id, points) {
    const result = await pool.query(
      'INSERT INTO transactions (product_id, customer_id, points) VALUES ($1, $2, $3) RETURNING *',
      [product_id, customer_id, points]
    );
    return result.rows[0]
  }

  static async getTransactions() {
    const result = await pool.query('SELECT * FROM transactions')
    return result.rows
  }

  static async getTransactionsByCustomerId(customer_id) {
    const result = await pool.query('SELECT * FROM transactions WHERE customer_id = $1', [customer_id])
    return result.rows
  }
}

module.exports = Transaction