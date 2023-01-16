const express = require('express');
const route = express.Router();
const userController = require('../Controller/userController.js')

route.post('/signup', userController.createUser);
route.get('/', userController.getAllUsers);

module.exports = route;