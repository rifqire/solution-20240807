const pool = require('../config/db');

class User {
  static async createUser(username, password, role) {
    const result = await pool.query(
      'INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING *',
      [username, password, role]
    )
    return result.rows[0]
  }

  static async findUserByUsername(username) {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username])
    return result.rows[0]
  }
}

module.exports = User