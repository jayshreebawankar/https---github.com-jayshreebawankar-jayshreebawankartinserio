const express = require('express');
const route = express.Router();
const userController = require('../Controller/userController.js')
const { Protect } = require('../middlewares/authMiddleware');

route.post('/signup', userController.registerUser);
route.post('/login', Protect, userController.loginUser);
route.get('/', userController.getAllUsers);
route.get('/loggedin', userController.loginStatus)

module.exports = route;