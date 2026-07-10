const express = require('express')
const {register,signIn} = require('../controllers/user.controller')

routes = express.Router()

routes.post('/signin',signIn)
routes.post('/register',register)
// routes.get('')

module.exports = routes