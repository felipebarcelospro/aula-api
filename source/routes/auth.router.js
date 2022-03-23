const express = require('express')

const { authController } = require('../controllers/auth.controller')

const authRouter = express.Router()

authRouter.post('/', authController.auth)
authRouter.post('/register', authController.register)

module.exports = { authRouter }