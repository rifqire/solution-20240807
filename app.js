const express = require('express')

const authRoutes = require('./routes/authRoutes')
const merchantRoutes = require('./routes/merchantRoutes')
const customerRoutes = require('./routes/customerRoutes')

const app = express()

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/merchant', merchantRoutes)
app.use('/api/customer', customerRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))