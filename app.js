const express = require('express')
const userRoutes = require('./routes/user.route')
const app = express()

app.use(express.json())


app.use('/api/v1/user',userRoutes)

module.exports = app